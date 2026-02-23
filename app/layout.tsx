import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Trilanka Beddegama - Software Engineer, AI/ML Developer & Network Engineer",
    template: "%s | Trilanka Beddegama"
  },
  description: "Software Engineer, AI/ML Developer, Network Engineer, and Electronics Engineer based in Colombo, Sri Lanka. Passionate about creating technology that makes a difference. Explore my projects, experiences, and technical expertise.",
  keywords: [
    "Trilanka Beddegama",
    "Software Engineer",
    "AI/ML Developer",
    "Network Engineer",
    "Electronics Engineer",
    "Application Engineer",
    "Portfolio",
    "Colombo",
    "Sri Lanka",
    "Machine Learning",
    "Artificial Intelligence",
    "Web Development",
    "Full Stack Developer"
  ],
  authors: [{ name: "Trilanka Beddegama" }],
  creator: "Trilanka Beddegama",
  publisher: "Trilanka Beddegama",
  metadataBase: new URL('https://Trilanka.github.io/portfolio'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Trilanka.github.io/portfolio',
    siteName: "Trilanka Beddegama's Portfolio",
    title: "Trilanka Beddegama - Software Engineer, AI/ML Developer & Network Engineer",
    description: "Software Engineer, AI/ML Developer, Network Engineer, and Electronics Engineer based in Colombo, Sri Lanka. Passionate about creating technology that makes a difference.",
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Trilanka Beddegama - Software Engineer, AI/ML Developer & Network Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Trilanka Beddegama - Software Engineer, AI/ML Developer & Network Engineer",
    description: "Software Engineer, AI/ML Developer, Network Engineer, and Electronics Engineer based in Colombo, Sri Lanka. Passionate about creating technology that makes a difference.",
    images: ['/profile.png'],
    creator: '@Trilanka', // Update with your actual Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider></body>
    </html>
  );
}
