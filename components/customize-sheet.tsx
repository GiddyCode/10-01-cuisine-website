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
  SheetFooter,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/lib/cart-context";
import type { Dish, SelectedOptions, PortionOption, ProteinOption, AddOnOption } from "@/lib/types";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
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

  const totalPrice = useMemo(() => {
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
    
    return total * quantity;
  }, [dish.basePrice, selectedPortion, selectedProtein, selectedAddOns, quantity]);

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

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="text-left">
          <SheetTitle className="text-xl">{dish.name}</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 -mx-6 px-6">
          <div className="space-y-6 py-4">
            {/* Dish Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={dish.image || "/placeholder.svg"}
                alt={dish.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 right-2 rounded bg-foreground/70 px-2 py-0.5 text-xs font-medium text-background">
                10:01 Cuisine
              </div>
            </div>

            <p className="text-muted-foreground">{dish.description}</p>

            <Separator />

            {/* Portion Size */}
            {dish.options.portions && dish.options.portions.length > 0 && (
              <div className="space-y-3">
                <Label className="text-base font-semibold">Portion Size</Label>
                <RadioGroup
                  value={selectedPortion?.id}
                  onValueChange={(value) =>
                    setSelectedPortion(
                      dish.options.portions?.find((p) => p.id === value)
                    )
                  }
                  className="space-y-2"
                >
                  {dish.options.portions.map((portion) => (
                    <label
                      key={portion.id}
                      className="flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value={portion.id} />
                        <span>{portion.name}</span>
                      </div>
                      <span className="font-medium">
                        {portion.priceModifier > 0
                          ? `+${formatPrice(portion.priceModifier)}`
                          : "Included"}
                      </span>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Protein Choice */}
            {dish.options.proteins && dish.options.proteins.length > 0 && (
              <div className="space-y-3">
                <Label className="text-base font-semibold">Protein Choice</Label>
                <RadioGroup
                  value={selectedProtein?.id}
                  onValueChange={(value) =>
                    setSelectedProtein(
                      dish.options.proteins?.find((p) => p.id === value)
                    )
                  }
                  className="grid grid-cols-2 gap-2"
                >
                  {dish.options.proteins.map((protein) => (
                    <label
                      key={protein.id}
                      className="flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value={protein.id} />
                        <span className="text-sm">{protein.name}</span>
                      </div>
                      <span className="text-xs font-medium">
                        {protein.price > 0 ? `+${formatPrice(protein.price)}` : "Free"}
                      </span>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Add-ons */}
            {dish.options.addOns && dish.options.addOns.length > 0 && (
              <div className="space-y-3">
                <Label className="text-base font-semibold">
                  Add-ons (Optional)
                </Label>
                <div className="space-y-2">
                  {dish.options.addOns.map((addOn) => {
                    const isSelected = selectedAddOns.some(
                      (a) => a.id === addOn.id
                    );
                    return (
                      <label
                        key={addOn.id}
                        className={`flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50 ${
                          isSelected ? "border-primary bg-primary/5" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={() => handleAddOnToggle(addOn)}
                          />
                          <span>{addOn.name}</span>
                        </div>
                        <span className="font-medium">
                          +{formatPrice(addOn.price)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Spice Level */}
            {dish.options.spiceLevels && dish.options.spiceLevels.length > 0 && (
              <div className="space-y-3">
                <Label className="text-base font-semibold">Spice Level</Label>
                <div className="flex flex-wrap gap-2">
                  {dish.options.spiceLevels.map((level) => (
                    <Button
                      key={level}
                      type="button"
                      variant={spiceLevel === level ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSpiceLevel(level)}
                      className={
                        spiceLevel === level
                          ? "bg-accent text-accent-foreground"
                          : ""
                      }
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Special Instructions (Optional)
              </Label>
              <Textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Any allergies or special requests?"
                className="resize-none"
                rows={3}
              />
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Quantity</Label>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center text-xl font-semibold">
                  {quantity}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Footer with Price and Add to Cart */}
        <div className="border-t pt-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Total Price</span>
            <span className="text-2xl font-bold text-primary">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <Button
            onClick={handleAddToCart}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            size="lg"
          >
            <Check className="mr-2 h-5 w-5" />
            Add to Order
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
