import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientProviderWrapper from "./ClientProviderWrapper";


export const metadata: Metadata = {
    title: "Freshy",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ClientProviderWrapper>{children}</ClientProviderWrapper>
            </body>
        </html>
    );
}
