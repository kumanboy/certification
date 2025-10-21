import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "O'zbek tili imtihon tizimi",
    description: "Uzbek Language Certification Mock Test System",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="uz">
        <body className={inter.className}>{children}</body>
        </html>
    );
}