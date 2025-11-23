import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bonjour | Greetings Across Cultures",
  description:
    "Celebrate the warmth of 'Bonjour' with greetings, cultural notes, and pronunciation tips from around the world.",
  openGraph: {
    title: "Bonjour | Greetings Across Cultures",
    description:
      "Explore the meaning of 'Bonjour' and discover how to greet people in languages across the globe.",
    url: "https://agentic-7afe0881.vercel.app",
    siteName: "Bonjour Greetings",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonjour | Greetings Across Cultures",
    description:
      "Learn how 'Bonjour' connects cultures with greetings, etiquette tips, and pronunciation guides.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="antialiased">
      <body className={inter.className}>
        <div className="app-shell">
          <header className="app-header">
            <p className="app-tagline">Une fenêtre sur les salutations du monde</p>
            <h1 className="app-title">Bonjour</h1>
          </header>
          <main className="app-main">{children}</main>
          <footer className="app-footer">
            <p>Fait avec passion pour les amoureux des langues.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
