import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Analytics from "../components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { siteConfig } from "../data/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "The Digital Plant | Industrial AI, Analytics & Reliability",
    template: "%s | The Digital Plant"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  icons: {
    icon: "/favicon.svg"
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`
    }
  },
  openGraph: {
    title: "The Digital Plant",
    description: "Engineering knowledge that builds smarter factories.",
    url: siteConfig.url,
    siteName: "The Digital Plant",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "The Digital Plant"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Digital Plant",
    description: "Engineering knowledge that builds smarter factories.",
    images: ["/og.svg"]
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    slogan: siteConfig.tagline,
    description: siteConfig.description
  };

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <VercelAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
