"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShoppingBag, CreditCard, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";
import { deliveryAreas } from "@/lib/data";
import type { CustomerInfo } from "@/lib/types";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<CustomerInfo>({
    name: "",
    phone: "",
    email: "",
    deliveryArea: "",
    address: "",
    landmark: "",
    deliveryTime: "asap",
    scheduledDate: "",
    scheduledTime: "",
  });

  const selectedArea = deliveryAreas.find(
    (area) => area.id === formData.deliveryArea
  );
  const deliveryFee = selectedArea?.fee || 0;
  const total = subtotal + deliveryFee;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.deliveryArea) {
      newErrors.deliveryArea = "Please select a delivery area";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Delivery address is required";
    }
    if (formData.deliveryTime === "scheduled") {
      if (!formData.scheduledDate) {
        newErrors.scheduledDate = "Please select a date";
      }
      if (!formData.scheduledTime) {
        newErrors.scheduledTime = "Please select a time";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Generate order reference
    const orderRef = `1001-${Date.now().toString(36).toUpperCase()}`;

    // Simulate payment processing (replace with actual Paystack integration)
    try {
      // Here you would integrate with Paystack
      // For now, we'll simulate a successful payment
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear cart and redirect to confirmation
      clearCart();
      router.push(`/order-confirmation?ref=${orderRef}&status=success`);
    } catch (error) {
      setIsProcessing(false);
      // Handle payment failure
      router.push(`/order-confirmation?ref=${orderRef}&status=failed`);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4">
        <div className="rounded-full bg-muted p-8">
          <ShoppingBag className="h-16 w-16 text-muted-foreground" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Your cart is empty</h1>
          <p className="mt-2 text-muted-foreground">
            Add some delicious dishes before checking out
          </p>
        </div>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/#menu">Browse Menu</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Back to Menu</span>
          </Link>
          <div className="flex-1" />
          <Image
            src="/logo.png"
            alt="10:01 Cuisine and more"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 font-serif text-3xl font-bold text-foreground">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Delivery Details */}
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 800 000 0000"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deliveryArea">Delivery Area *</Label>
                    <Select
                      value={formData.deliveryArea}
                      onValueChange={(value) =>
                        handleSelectChange("deliveryArea", value)
                      }
                    >
                      <SelectTrigger
                        className={errors.deliveryArea ? "border-destructive" : ""}
                      >
                        <SelectValue placeholder="Select your area" />
                      </SelectTrigger>
                      <SelectContent>
                        {deliveryAreas.map((area) => (
                          <SelectItem key={area.id} value={area.id}>
                            {area.name} - {formatPrice(area.fee)} ({area.eta})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.deliveryArea && (
                      <p className="text-sm text-destructive">{errors.deliveryArea}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House number, street name..."
                      rows={2}
                      className={errors.address ? "border-destructive" : ""}
                    />
                    {errors.address && (
                      <p className="text-sm text-destructive">{errors.address}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="landmark">Landmark (Optional)</Label>
                    <Input
                      id="landmark"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleInputChange}
                      placeholder="Near a popular place..."
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={formData.deliveryTime}
                    onValueChange={(value) =>
                      handleSelectChange("deliveryTime", value as "asap" | "scheduled")
                    }
                    className="space-y-4"
                  >
                    <label className="flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="asap" />
                        <div>
                          <span className="font-medium">As Soon As Possible</span>
                          <p className="text-sm text-muted-foreground">
                            {selectedArea
                              ? `Estimated: ${selectedArea.eta}`
                              : "Select area for estimate"}
                          </p>
                        </div>
                      </div>
                    </label>

                    <label className="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5">
                      <RadioGroupItem value="scheduled" className="mt-1" />
                      <div className="flex-1 space-y-3">
                        <div>
                          <span className="font-medium">Schedule for Later</span>
                          <p className="text-sm text-muted-foreground">
                            Choose a specific date and time
                          </p>
                        </div>

                        {formData.deliveryTime === "scheduled" && (
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="scheduledDate">Date *</Label>
                              <Input
                                id="scheduledDate"
                                name="scheduledDate"
                                type="date"
                                value={formData.scheduledDate}
                                onChange={handleInputChange}
                                min={new Date().toISOString().split("T")[0]}
                                className={
                                  errors.scheduledDate ? "border-destructive" : ""
                                }
                              />
                              {errors.scheduledDate && (
                                <p className="text-sm text-destructive">
                                  {errors.scheduledDate}
                                </p>
                              )}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="scheduledTime">Time *</Label>
                              <Input
                                id="scheduledTime"
                                name="scheduledTime"
                                type="time"
                                value={formData.scheduledTime}
                                onChange={handleInputChange}
                                className={
                                  errors.scheduledTime ? "border-destructive" : ""
                                }
                              />
                              {errors.scheduledTime && (
                                <p className="text-sm text-destructive">
                                  {errors.scheduledTime}
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </label>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div>
                          <span className="font-medium">{item.dish.name}</span>
                          <span className="text-muted-foreground"> x{item.quantity}</span>
                        </div>
                        <span>{formatPrice(item.lineTotal)}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery</span>
                      <span>
                        {deliveryFee > 0 ? formatPrice(deliveryFee) : "Select area"}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-lg text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>

                  {/* Pay Button */}
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-5 w-5" />
                        Pay with Paystack
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Secure payment powered by Paystack. We accept cards, bank
                    transfer, and mobile money.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
