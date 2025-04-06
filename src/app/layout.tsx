import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmic Fragment NFT",
  description: "A unique piece of digital art",
  other: {
    'fc:frame': JSON.stringify({
      version: 'vNext',
      image: 'https://i.imgur.com/5lAUjyc.webp',
      buttons: [
        {
          label: 'Mint Now',
          action: 'post',
          target: 'https://cosmic-fragment-mini.your-username.replit.app/api/mint'
        }
      ],
      post_url: 'https://cosmic-fragment-mini.your-username.replit.app/api/mint'
    })
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@farcaster/miniapps-sdk@0.0.5/dist/index.umd.js" async></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
