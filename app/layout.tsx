import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Car Finder",
    description: " Find your dream car",
    keywords: ["car", "finder", "dream"],
    authors: [{ name: 'Ibrahim A.' }, { name: 'Maxime I.' }, { name: 'Nicolae P.'}, { name: 'Yassin K.'}, { name: 'Ylann M.'}],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={GeistSans.className}>{children}</body>
        </html>
    );
}
