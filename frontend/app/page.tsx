"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AwarenessSection } from "@/components/awareness-section";
import { QuoteSection } from "@/components/quote-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomeClient() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AwarenessSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
