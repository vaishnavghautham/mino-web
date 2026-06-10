import type { Metadata } from "next";
import Header from "@/components/Header";
import CashflowCalculator from "@/components/CashflowCalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Smart Budget & Idle Cash Calculator | Mino Money",
  description: "Map your monthly expenses and see exactly how much your leftover idle cash could be earning you. 100% private, local-only calculator.",
  keywords: "budget calculator India, idle cash calculator, monthly savings calculator, emergency fund calculator",
  openGraph: {
    title: "Smart Budget & Idle Cash Calculator | Mino Money",
    description: "Map your money. Maximize your leftovers. See what your idle cash is costing you.",
    url: "https://minomoney.in/tools/smart-budget",
    siteName: "Mino Money",
    type: "website",
  },
};

// Schema markup to tell Google this is an interactive tool
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Mino Smart Budget Calculator",
  "url": "https://minomoney.in/tools/smart-budget",
  "description": "An interactive calculator to map monthly expenses and calculate potential yield on idle savings.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  }
};

export default function SmartBudgetPage() {
  return (
    <div className="min-h-screen bg-mino-cream text-mino-ink antialiased flex flex-col">
      {/* Injecting Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      
      <Header />
      
      <main className="flex-grow pt-12">
        <CashflowCalculator />
      </main>

      {/* Minimal Footer for Tool Pages */}
      <Footer />
    </div>
  );
}