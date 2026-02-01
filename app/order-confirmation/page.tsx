"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, XCircle, Phone, MessageCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/lib/data";
import { Suspense } from "react";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderRef = searchParams.get("ref") || "Unknown";
  const status = searchParams.get("status") || "success";

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="10:01 Cuisine and more"
              width={50}
              height={50}
              className="h-10 w-auto sm:h-12"
            />
            <span className="hidden font-serif text-lg font-semibold text-foreground sm:block">
              10:01 Cuisine
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <div
            className={`${
              isSuccess ? "bg-primary" : "bg-destructive"
            } px-6 py-12 text-center text-primary-foreground`}
          >
            {isSuccess ? (
              <CheckCircle className="mx-auto h-20 w-20" />
            ) : (
              <XCircle className="mx-auto h-20 w-20" />
            )}
            <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
              {isSuccess ? "Order Confirmed!" : "Payment Failed"}
            </h1>
            <p className="mt-2 text-primary-foreground/80">
              {isSuccess
                ? "Thank you for your order. We're preparing your meal!"
                : "Something went wrong with your payment. Please try again."}
            </p>
          </div>

          <CardContent className="p-6 sm:p-8">
            {/* Order Reference */}
            <div className="mb-8 rounded-lg bg-muted p-4 text-center">
              <p className="text-sm text-muted-foreground">Order Reference</p>
              <p className="mt-1 font-mono text-2xl font-bold text-foreground">
                {orderRef}
              </p>
            </div>

            {isSuccess ? (
              <div className="space-y-6">
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <h2 className="font-semibold text-foreground">What happens next?</h2>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        1
                      </span>
                      You'll receive an email confirmation shortly
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        2
                      </span>
                      Our kitchen starts preparing your fresh meal
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        3
                      </span>
                      Your order will be delivered hot and fresh
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Questions about your order? Contact us:
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button asChild variant="outline">
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {contactInfo.phone}
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a
                        href={contactInfo.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-center">
                <p className="text-muted-foreground">
                  Don't worry, no charges have been made. You can try placing your
                  order again or contact us for assistance.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/checkout">Try Again</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Support
                    </a>
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <Button asChild variant="ghost">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
            <p className="mt-4 text-muted-foreground">Loading...</p>
          </div>
        </div>
      }
    >
      <OrderConfirmationContent />
    </Suspense>
  );
}
