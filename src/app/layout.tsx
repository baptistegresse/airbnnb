import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "L'Elégance - Appartement haussmannien au cœur de la capitale des Ducs de Bourgogne",
  description: "Charme et élégance pour un séjour inoubliable",
  icons: {
    icon: '/Chouette blanche.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-gray-700">
      <body>
        {children}
      </body>
    </html>
  );
}
