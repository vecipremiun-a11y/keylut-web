import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keylut Barber Shop | App de barberia",
  description:
    "Descarga la app de Keylut Barber Shop, agenda tu cita y gana recompensas con nuestra tarjeta de lealtad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
