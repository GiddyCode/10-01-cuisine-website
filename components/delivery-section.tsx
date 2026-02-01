"use client";

import { MapPin, Clock, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { deliveryAreas } from "@/lib/data";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function DeliverySection() {
  const nearAreas = deliveryAreas.filter((area) => area.fee === 500);
  const farAreas = deliveryAreas.filter((area) => area.fee === 700);
  const otherAreas = deliveryAreas.filter((area) => area.fee === 1000);

  return (
    <section id="delivery" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Delivery Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We deliver across Abuja. Check if we cover your area!
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Near Locations */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Near Locations</h3>
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  {formatPrice(500)}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Clock className="h-4 w-4" />
                <span>30-45 mins delivery</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {nearAreas.map((area) => (
                  <Badge key={area.id} variant="secondary">
                    <MapPin className="mr-1 h-3 w-3" />
                    {area.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mid-Distance Locations */}
          <Card className="border-secondary/20 bg-secondary/5">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-secondary" />
                  <h3 className="font-semibold text-foreground">Extended Areas</h3>
                </div>
                <Badge className="bg-secondary text-secondary-foreground">
                  {formatPrice(700)}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Clock className="h-4 w-4" />
                <span>45-60 mins delivery</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {farAreas.map((area) => (
                  <Badge key={area.id} variant="secondary">
                    <MapPin className="mr-1 h-3 w-3" />
                    {area.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Other Locations */}
          <Card className="border-muted bg-muted/30">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-semibold text-foreground">Other Areas</h3>
                </div>
                <Badge variant="outline">
                  {formatPrice(1000)}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Clock className="h-4 w-4" />
                <span>60-90 mins delivery</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For areas not listed above, delivery fee is {formatPrice(1000)}. Contact us for locations outside Abuja.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
