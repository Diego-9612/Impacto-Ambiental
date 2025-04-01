import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata = {
  title: "Cálculo de impacto ambiental",
  description:
    "Esta aplicación está desarrollada con el objetivo de realizar cálculos de impacto ambiental en proyectos de origen antrópico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}