import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "./global_dark.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Milee Sonani",
//   description: "Frontend Developer",
//   icons: {
//     icon: [
//       {
//         src: 'assets/Milee2.jpg',
//         url: 'assets/Milee2.jpg',
//         href: 'assets/Milee2.jpg',
//         type: 'image/x-icon',
//         sizes: '16x16',
//         as: 'image'
//       },
//     ],

//   },
// };


export const metadata = {
  title: "Milee Sonani | Frontend Developer",
  description:
    "Hi, I'm Milee Sonani — a creative frontend developer building modern and responsive web experiences.",
  metadataBase: new URL("https://mileesonani.github.io/Portfolio"),
  openGraph: {
    title: "Milee Sonani | Frontend Developer",
    description:
      "Explore Milee Sonani's portfolio of frontend projects, UI designs, and coding work.",
    url: "https://mileesonani.github.io/Portfolio",
    siteName: "Milee Sonani",
    images: [
      {
        url: "https://mileesonani.github.io/Portfolio/assets/Milee2.jpg",
        width: 800,
        height: 600,
        alt: "Milee Sonani Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milee Sonani | Frontend Developer",
    description:
      "Creative frontend developer with a passion for clean code and modern UI design.",
    images: ["https://mileesonani.github.io/Portfolio/assets/Milee2.jpg"],
  },
  icons: {
    icon: "/assets/Milee2.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Milee Sonani",
          url: "https://mileesonani.github.io/Portfolio",
          image: "https://mileesonani.github.io/Portfolio/assets/Milee2.jpg",
          jobTitle: "Frontend Developer",
          sameAs: [
            "https://github.com/mileesonani",
            "https://www.linkedin.com/in/milee-sonani",
          ],
        })}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
