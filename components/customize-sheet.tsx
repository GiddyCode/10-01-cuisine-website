"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Minus, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";
import { contactInfo } from "@/lib/data";
import type { Dish, SelectedOptions, PortionOption, ProteinOption, AddOnOption } from "@/lib/types";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

// WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

interface CustomizeSheetProps {
  dish: Dish;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CustomizeSheet({ dish, open, onOpenChange }: CustomizeSheetProps) {
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedPortion, setSelectedPortion] = useState<PortionOption | undefined>(
    dish.options.portions?.[0]
  );
  const [selectedProtein, setSelectedProtein] = useState<ProteinOption | undefined>(
    dish.options.proteins?.[0]
  );
  const [selectedAddOns, setSelectedAddOns] = useState<AddOnOption[]>([]);
  const [spiceLevel, setSpiceLevel] = useState(
    dish.options.spiceLevels?.[1] || "Medium"
  );
  const [instructions, setInstructions] = useState("");

  const unitPrice = useMemo(() => {
    let total = dish.basePrice;

    if (selectedPortion) {
      total += selectedPortion.priceModifier;
    }

    if (selectedProtein) {
      total += selectedProtein.price;
    }

    for (const addOn of selectedAddOns) {
      total += addOn.price;
    }

    return total;
  }, [dish.basePrice, selectedPortion, selectedProtein, selectedAddOns]);

  const totalPrice = unitPrice * quantity;

  const handleAddOnToggle = (addOn: AddOnOption) => {
    setSelectedAddOns((prev) => {
      const exists = prev.find((a) => a.id === addOn.id);
      if (exists) {
        return prev.filter((a) => a.id !== addOn.id);
      }
      return [...prev, addOn];
    });
  };

  const handleAddToCart = () => {
    const options: SelectedOptions = {
      portion: selectedPortion,
      protein: selectedProtein,
      addOns: selectedAddOns,
      spiceLevel,
      instructions,
    };

    addItem(dish, quantity, options);
    onOpenChange(false);

    // Reset form
    setQuantity(1);
    setSelectedPortion(dish.options.portions?.[0]);
    setSelectedProtein(dish.options.proteins?.[0]);
    setSelectedAddOns([]);
    setSpiceLevel(dish.options.spiceLevels?.[1] || "Medium");
    setInstructions("");
  };

  const handleWhatsAppOrder = () => {
    const portionText = selectedPortion ? ` (${selectedPortion.name})` : "";
    const proteinText = selectedProtein ? `\nProtein: ${selectedProtein.name}` : "";
    const addOnsText = selectedAddOns.length > 0
      ? `\nAdd-ons: ${selectedAddOns.map(a => a.name).join(", ")}`
      : "";
    const message = `Hi! I'd like to order:\n\n${quantity}x ${dish.name}${portionText}${proteinText}${addOnsText}\nTotal: ${formatPrice(totalPrice)}\n\nPlease let me know the next steps!`;
    const url = `${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg p-0 gap-0">
        {/* Scrollable content area - native scroll for reliable mobile support */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          {/* Hero Image with Gradient Overlay */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={dish.image || "/placeholder.svg"}
              alt={dish.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <SheetHeader className="p-0">
                <SheetTitle className="font-serif text-2xl font-bold text-white">
                  {dish.name}
                </SheetTitle>
              </SheetHeader>
              <p className="mt-1 text-sm text-white/70">10:01 Cuisines and More</p>
            </div>
          </div>

          <div className="space-y-5 p-4 sm:p-6">
            {/* Description */}
            <p className="text-sm text-muted-foreground">{dish.description}</p>

            {/* Portion Size - Pill/Chip Style */}
            {dish.options.portions && dish.options.portions.length > 0 && (
              <div className="space-y-2.5">
                <Label className="text-sm font-semibold">Select Portion</Label>
                <div className="flex flex-wrap gap-2">
                  {dish.options.portions.map((portion) => {
                    const isActive = selectedPortion?.id === portion.id;
                    const portionPrice = dish.basePrice + portion.priceModifier;
                    return (
                      <button
                        key={portion.id}
                        type="button"
                        onClick={() => setSelectedPortion(portion)}
                        className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/30"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {portion.name} - {formatPrice(portionPrice)}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Protein Choice */}
            {dish.options.proteins && dish.options.proteins.length > 0 && (
              <div className="space-y-2.5">
                <Label className="text-sm font-semibold">Protein Choice</Label>
                <div className="flex flex-wrap gap-2">
                  {dish.options.proteins.map((protein) => {
                    const isActive = selectedProtein?.id === protein.id;
                    return (
                      <button
                        key={protein.id}
                        type="button"
                        onClick={() => setSelectedProtein(protein)}
                        className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/30"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {protein.name}
                        {protein.price > 0 && (
                          <span className="ml-1 opacity-80">+{formatPrice(protein.price)}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Add-ons */}
            {dish.options.addOns && dish.options.addOns.length > 0 && (
              <div className="space-y-2.5">
                <Label className="text-sm font-semibold">Add-ons (Optional)</Label>
                <div className="flex flex-wrap gap-2">
                  {dish.options.addOns.map((addOn) => {
                    const isSelected = selectedAddOns.some((a) => a.id === addOn.id);
                    return (
                      <button
                        key={addOn.id}
                        type="button"
                        onClick={() => handleAddOnToggle(addOn)}
                        className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "bg-accent text-white shadow-md ring-2 ring-accent/30"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {addOn.name}
                        <span className="ml-1 opacity-80">+{formatPrice(addOn.price)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Spice Level */}
            {dish.options.spiceLevels && dish.options.spiceLevels.length > 0 && (
              <div className="space-y-2.5">
                <Label className="text-sm font-semibold">Spice Level</Label>
                <div className="flex flex-wrap gap-2">
                  {dish.options.spiceLevels.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setSpiceLevel(level)}
                      className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                        spiceLevel === level
                          ? "bg-accent text-white shadow-md"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div className="space-y-2.5">
              <Label className="text-sm font-semibold">
                Special Instructions (Optional)
              </Label>
              <Textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Any allergies or special requests?"
                className="resize-none rounded-xl text-sm"
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Sticky Footer with Quantity, Price & Action Buttons */}
        <div
          className="flex-shrink-0 border-t bg-background p-4 sm:p-6 space-y-3"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
        >
          {/* Quantity + Price row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="h-9 w-9 rounded-full"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center text-lg font-semibold">
                {quantity}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-9 w-9 rounded-full"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-right">
              {quantity > 1 && (
                <p className="text-xs text-muted-foreground">
                  {formatPrice(unitPrice)} each
                </p>
              )}
              <p className="font-serif text-xl font-bold text-primary">
                {formatPrice(totalPrice)}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2.5">
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-accent text-white hover:bg-accent/90"
              size="lg"
            >
              <Check className="mr-2 h-5 w-5" />
              Add to Order
            </Button>
            <Button
              onClick={handleWhatsAppOrder}
              className="bg-[#25D366] text-white hover:bg-[#25D366]/90"
              size="lg"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
