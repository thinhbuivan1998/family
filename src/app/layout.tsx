import type { Metadata } from "next";
import { Fredoka, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactBar } from "@/components/layout/FloatingContactBar";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://banhkeothinhvuong.vn"),
  title: {
    default: "Bánh kẹo Thịnh Vượng - Mỗi ngày một chút ngọt ngào!",
    template: "%s | Bánh kẹo Thịnh Vượng",
  },
  description:
    "Cửa hàng gia đình thân quen chuyên cung cấp bánh kẹo chọn lọc, bim bim giòn tan, đồ chơi trẻ em bổ ích và quà vặt chất lượng cho mọi gia đình.",
  keywords: [
    "bánh kẹo Thịnh Vượng",
    "bánh kẹo gia đình",
    "bim bim giòn rụm",
    "đồ chơi trẻ em",
    "quà sinh nhật bé",
    "quà liên hoan lớp",
    "bánh kẹo Hà Nội",
    "kẹo dẻo trái cây",
  ],
  authors: [{ name: "Bánh kẹo Thịnh Vượng" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://banhkeothinhvuong.vn",
    siteName: "Bánh kẹo Thịnh Vượng",
    title: "Bánh kẹo Thịnh Vượng - Mỗi ngày một chút ngọt ngào!",
    description:
      "Cửa hàng gia đình thân quen chuyên cung cấp bánh kẹo chọn lọc, bim bim giòn tan, đồ chơi trẻ em bổ ích và quà vặt chất lượng cho mọi gia đình.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bánh kẹo Thịnh Vượng - Mỗi ngày một chút ngọt ngào!",
    description:
      "Cửa hàng bánh kẹo và đồ chơi gia đình uy tín với hơn 15 năm gắn bó cùng tuổi thơ.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${fredoka.variable} ${beVietnamPro.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFF7E9] text-[#2D2320] flex flex-col font-sans selection:bg-[#FFB83F] selection:text-[#2D2320]">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <FloatingContactBar />
      </body>
    </html>
  );
}
