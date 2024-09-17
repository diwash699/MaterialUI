import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import SessionProviderWrapper from "./SessionProviderWrapper";
import { CssBaseline } from "@mui/material";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Data Dashboard",
  description: "Data Dashboard",
};



const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <CssBaseline />
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
