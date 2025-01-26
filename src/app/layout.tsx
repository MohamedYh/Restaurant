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
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                  integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                  crossOrigin="anonymous"/>
        </head>
        <body>
        <ClientProviderWrapper>{children}</ClientProviderWrapper>
        </body>
        </html>
    );
}
