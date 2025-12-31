"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DonatePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentMode, setPaymentMode] = useState<"upi" | "bank">("upi");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const name = (form.querySelector("#name") as HTMLInputElement).value.trim();
    const email = (
      form.querySelector("#email") as HTMLInputElement
    ).value.trim();
    const amount = Number(
      (form.querySelector("#amount") as HTMLInputElement).value
    );
    const upi = (form.querySelector("#upi") as HTMLInputElement)?.value.trim();
    const account = (
      form.querySelector("#account") as HTMLInputElement
    )?.value.trim();

    // ✅ Manual validation (important)
    if (!name || !email || !amount) {
      alert("Please fill all required fields");
      return;
    }

    if (paymentMode === "upi" && !upi) {
      alert("Please enter UPI ID");
      return;
    }

    if (paymentMode === "bank" && !account) {
      alert("Please enter bank account number");
      return;
    }

    // ✅ Backend-compatible payload
    const payload = {
      name,
      email,
      amount,
      paymentId: paymentMode === "upi" ? upi : account,
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/donations",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        console.error("Donation failed:", err);
        throw new Error("Donation failed");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Failed to process the donation. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="max-w-md w-full text-center p-8">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl font-serif font-bold mb-2">
            Thank You for Your Support!
          </h2>
          <p className="text-muted-foreground mb-8">
            Your contribution helps us continue our mission.
          </p>
          <Link href="/">
            <Button className="w-full">Return to Home</Button>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/30 pt-24 pb-12">
      <Navbar />
      <div className="container mx-auto px-4 max-w-2xl">
        <Link href="/">
          <Button variant="ghost" className="gap-2 -ml-4">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <Card className="mt-6 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-serif">
              Support the Cause
            </CardTitle>
            <CardDescription>
              Your contribution makes a direct impact.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="amount">Donation Amount</Label>
                <Input id="amount" type="number" placeholder="50" />
              </div>

              <Tabs
                defaultValue="upi"
                onValueChange={(v) => setPaymentMode(v as "upi" | "bank")}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upi">UPI</TabsTrigger>
                  <TabsTrigger value="bank">Bank</TabsTrigger>
                </TabsList>

                <TabsContent value="upi">
                  <Label htmlFor="upi">UPI ID</Label>
                  <Input id="upi" placeholder="username@upi" />
                </TabsContent>

                <TabsContent value="bank">
                  <Label htmlFor="account">Account Number</Label>
                  <Input id="account" placeholder="0000000000" />
                </TabsContent>
              </Tabs>

              <Button type="submit" className="w-full h-12 text-lg">
                Complete Donation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
