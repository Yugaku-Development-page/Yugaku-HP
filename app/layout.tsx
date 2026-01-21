import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "株式会社由岳 - アートとデジタルで、価値を編集する",
  description:
    "株式会社由岳は、アプリの企画・開発と、美術品の取扱いを通じて、個人と企業の価値創造を支援します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-sans">{children}</body>
    </html>
  );
}
