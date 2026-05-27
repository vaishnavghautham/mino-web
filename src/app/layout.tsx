import type { Metadata } from "next";
import { Merriweather, Inconsolata } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700", "900"],
  variable: '--font-serif' 
});

const inconsolata = Inconsolata({ 
  subsets: ["latin"], 
  variable: '--font-mono' 
});

export const metadata: Metadata = {
  title: "Mino Money - Earn Up to 7% on Idle Savings. Withdraw in Minutes.",
  description: "Mino parks your idle cash in liquid mutual funds and earns you up to 7% a year. Withdraw to your bank in minutes, any day. No lock-in, no hidden charges. A smarter savings account alternative for India.",
  keywords: "liquid fund app India, savings account alternative India, park idle money India, earn more than savings account, instant redemption liquid fund, idle cash earning app, high yield savings India, liquid mutual fund withdrawal, Mino Money, Mino, smart savings India",
  authors: [{ name: "Mino Money" }],
  openGraph: {
    title: "Mino Money — Earn Up to 7% on Your Savings",
    description: "Park idle cash in liquid funds. Earn up to 7% a year, withdraw in minutes. No lock-in, no complexity. Built for India.",
    url: "https://minomoney.in",
    siteName: "Mino Money",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mino Money — Earn Up to 7% on Your Savings",
    description: "Liquid fund returns, savings account simplicity. Withdraw anytime, any day.",
    creator: "@MinoMoney",
    site: "@MinoMoney",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Mino and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mino parks your idle money in liquid mutual funds and lets you earn up to 7% a year. You can withdraw to your bank in minutes, any day. It is operated by Bullsurge Private Limited, an AMFI-registered Mutual Fund Distributor (ARN-185445)."
      }
    },
    {
      "@type": "Question",
      "name": "Is Mino better than keeping money in a savings account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most savings accounts in India pay 2.5 to 3.5% a year. Liquid funds on Mino have historically returned around 6 to 7%. You can withdraw to your bank in minutes with no lock-in period. Mutual fund investments are subject to market risks."
      }
    },
    {
      "@type": "Question",
      "name": "Is Mino a bank account, fixed deposit, or mutual fund app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mino is not a bank account or fixed deposit. It is a smart savings platform powered by liquid mutual funds through Bullsurge Private Limited, an AMFI-registered Mutual Fund Distributor."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can I withdraw my money through instant redemption?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligible instant redemptions may be processed in minutes, subject to AMC and RTA rules, limits, banking availability, and technical status."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Mino as an emergency fund?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Because withdrawals reach your bank in minutes, Mino works well as a place to keep your emergency fund. Your money earns more than it would in a savings account and stays just as accessible."
      }
    },
    {
      "@type": "Question",
      "name": "Are my returns on Mino guaranteed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Returns are market-linked and not guaranteed. Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing."
      }
    },
    {
      "@type": "Question",
      "name": "Which mutual funds are available on Mino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mino supports eligible instant-redemption liquid funds from Axis AMC and HDFC AMC to prioritize institutional stability and speed."
      }
    }
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Mino Money",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "iOS, Android",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
  "description": "Park idle savings in liquid mutual funds. Earn up to 7% a year, withdraw to your bank in minutes. No lock-in.",
  "url": "https://minomoney.in",
  "author": {
    "@type": "Organization",
    "name": "Bullsurge Private Limited",
    "url": "https://minomoney.in"
  }
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mino Money",
  "url": "https://minomoney.in",
  "logo": "https://minomoney.in/mino-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@minomoney.in",
    "contactType": "customer support"
  },
  "sameAs": ["https://twitter.com/MinoMoney"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className={`${merriweather.variable} ${inconsolata.variable} font-mono min-h-screen bg-mino-cream text-mino-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}