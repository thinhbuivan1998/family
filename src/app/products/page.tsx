import { Suspense } from "react";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCatalogView } from "@/components/products/ProductCatalogView";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Danh Mục Sản Phẩm - Bánh kẹo Thịnh Vượng",
  description:
    "Khám phá thế giới bánh kẹo thơm ngon, snack bim bim giòn rụm, đồ chơi trẻ em và thức uống tươi mát tại tiệm Bánh kẹo Thịnh Vượng.",
};

export default function ProductsPage() {
  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Header */}
      <SectionHeading
        badge="Thế Giới Tuổi Thơ"
        badgeVariant="sunshine"
        title="Danh Mục Bánh Kẹo & Đồ Chơi"
        highlightText="Bánh Kẹo & Đồ Chơi"
        highlightColor="coral"
        subtitle="Duyệt qua hơn 20+ món ăn vặt tuyển chọn, bim bim giòn rụm và đồ chơi trí tuệ an toàn cho mọi lứa tuổi."
      />

      {/* Catalog with Suspense for URL search params */}
      <Suspense
        fallback={
          <div className="p-12 text-center text-sm text-[#8A796E]">
            Đang tải danh mục món ngon...
          </div>
        }
      >
        <ProductCatalogView initialProducts={products} />
      </Suspense>
    </div>
  );
}

