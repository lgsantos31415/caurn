import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "CAURN",
  description:
    "CAURN - Caixa Assistencial Universitário do Rio Grande do Norte",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
