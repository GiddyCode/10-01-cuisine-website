"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Minus, Plus, Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
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

interface CustomizeModalProps {
  dish: Dish;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CustomizeModal({ dish, open, onOpenChange }: CustomizeModalProps) {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-hidden p-0">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Image */}
          <div className="relative h-48 w-full md:h-auto md:w-2/5">
            <Image
              src={dish.image || "/placeholder.svg"}
              alt={dish.name}
              fill
              className="object-cover"
            />
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 md:hidden"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-1 flex-col">
            <DialogHeader className="border-b p-4 pb-3">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-secondary text-secondary" />
                <span className="text-sm font-medium text-muted-foreground">4.8</span>
              </div>
              <DialogTitle className="font-serif text-xl">{dish.name}</DialogTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">{dish.description}</p>
            </DialogHeader>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-5">
                {/* Portion Size */}
                {dish.options.portions && dish.options.portions.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Portion Size
                    </Label>
                    <RadioGroup
                      value={selectedPortion?.id}
                      onValueChange={(value) =>
                        setSelectedPortion(
                          dish.options.portions?.find((p) => p.id === value)
                        )
                      }
                      className="grid grid-cols-2 gap-2"
                    >
                      {dish.options.portions.map((portion) => (
                        <label
                          key={portion.id}
                          className="flex cursor-pointer items-center justify-between rounded-md border p-2.5 text-sm transition-colors hover:bg-muted/50 [&:has([data-state=checked])]:border-accent [&:has([data-state=checked])]:bg-accent/5"
                        >
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value={portion.id} />
                            <span>{portion.name}</span>
                          </div>
                          <span className="text-xs font-semibold text-accent">
                            {portion.priceModifier > 0
                              ? `+${formatPrice(portion.priceModifier)}`
                              : "Base"}
                          </span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {/* Protein Choice */}
                {dish.options.proteins && dish.options.proteins.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Protein Choice
                    </Label>
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
                          className="flex cursor-pointer items-center justify-between rounded-md border p-2.5 text-sm transition-colors hover:bg-muted/50 [&:has([data-state=checked])]:border-accent [&:has([data-state=checked])]:bg-accent/5"
                        >
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value={protein.id} />
                            <span>{protein.name}</span>
                          </div>
                          <span className="text-xs font-semibold text-accent">
                            {protein.price > 0 ? `+${formatPrice(protein.price)}` : "Free"}
                          </span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {/* Add-ons */}
                {dish.options.addOns && dish.options.addOns.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Add-ons (Optional)
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {dish.options.addOns.map((addOn) => {
                        const isSelected = selectedAddOns.some(
                          (a) => a.id === addOn.id
                        );
                        return (
                          <label
                            key={addOn.id}
                            className={`flex cursor-pointer items-center justify-between rounded-md border p-2.5 text-sm transition-colors hover:bg-muted/50 ${
                              isSelected ? "border-accent bg-accent/5" : ""
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Checkbox
                                checked={isSelected}
                                onCheckedChange={() => handleAddOnToggle(addOn)}
                              />
                              <span>{addOn.name}</span>
                            </div>
                            <span className="text-xs font-semibold text-accent">
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
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Spice Level
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {dish.options.spiceLevels.map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setSpiceLevel(level)}
                          className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                            spiceLevel === level
                              ? "border-accent bg-accent text-white"
                              : "border-border hover:bg-muted"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Special Instructions */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Special Instructions
                  </Label>
                  <Textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="Any allergies or special requests?"
                    className="resize-none text-sm"
                    rows={2}
                  />
                </div>
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t p-4">
              {/* Quantity */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Quantity
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="flex h-8 w-8 items-center justify-center rounded-md border text-foreground transition-colors hover:bg-muted disabled:opacity-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-semibold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-md border text-foreground transition-colors hover:bg-muted"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Total and Add Button */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Total Price</p>
                  <p className="font-serif text-2xl font-bold text-accent">
                    {formatPrice(totalPrice)}
                  </p>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-accent text-white hover:bg-accent/90"
                  size="lg"
                >
                  <Check className="mr-2 h-4 w-4" />
                  Add to Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
