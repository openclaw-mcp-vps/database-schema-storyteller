import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Database Schema Storyteller",
  description: "Turn database schemas into visual documentation. Interactive relationship maps, data flow diagrams, and business logic explanations for engineering teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="96ceeae4-1e7d-4c87-8238-a79ee18a2472"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
