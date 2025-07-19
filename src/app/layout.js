import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "./global_dark.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Milee Sonani",
  description: "Frontend Developer",
  icons: {
    icon: [
      {
        src: 'assets/Milee2.jpg',
        url: 'assets/Milee2.jpg',
        href: 'assets/Milee2.jpg',
        type: 'image/x-icon',
        sizes: '16x16',
        as: 'image'
      },
    ],

  },
};

export default function RootLayout({ children }) {
  console.log('children', children)
  console.log('geistSans', geistSans)
  console.log('geistMono', geistMono)
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
