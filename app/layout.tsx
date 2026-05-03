import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CheckoutSaver — Never lose checkout progress again",
  description: "Automatically saves and restores checkout form data across browser crashes and tabs. Reduce cart abandonment and recover lost sales."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="de985432-6030-4031-bb6c-9a5c368f46ba"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
