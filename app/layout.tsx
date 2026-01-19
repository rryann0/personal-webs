import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ProjectModalProvider } from "@/hooks/useProjectModal";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Ryan Lee | Portfolio",
  description: "Student, engineer, lifelong learner - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} font-sans`}>
        <ProjectModalProvider>
          {children}
        </ProjectModalProvider>
      </body>
    </html>
  );
}

