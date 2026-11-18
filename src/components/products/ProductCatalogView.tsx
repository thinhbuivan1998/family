"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, X, Sparkles, Flame, RefreshCw, Filter } from "lucide-react";
import { Product } from "@/types/product";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/common/Button";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/common/MotionWrapper";

interface ProductCatalogViewProps {
  initialProducts: Product[];
}

export function ProductCatalogView({ initialProducts }: ProductCatalogViewProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryFromUrl = searchParams.get("category") || "all";
  const [prevCategoryFromUrl, setPrevCategoryFromUrl] = useState(categoryFromUrl);
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);

  // Synchronize state when URL parameter changes (e.g. from homepage or drawer navigation)
  if (prevCategoryFromUrl !== categoryFromUrl) {
    setPrevCategoryFromUrl(categoryFromUrl);
    setSelectedCategory(categoryFromUrl);
  }

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterType, setFilterType] = useState<"all" | "new" | "bestseller">("all");

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === "all") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?category=${slug}`, { scroll: false });
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setFilterType("all");
    router.push("/products", { scroll: false });
  };

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Category match
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Filter type (New / Best Seller)
      if (filterType === "new" && !product.isNew) {
        return false;
      }
      if (filterType === "bestseller" && !product.isBestSeller) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchOrigin = product.origin?.toLowerCase().includes(query) ?? false;
        const matchTaste = product.tasteNote?.toLowerCase().includes(query) ?? false;
        return matchName || matchDesc || matchOrigin || matchTaste;
      }

      return true;
    });
  }, [initialProducts, selectedCategory, filterType, searchQuery]);

  // Counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: initialProducts.length };
    categories.forEach((cat) => {
      counts[cat.slug] = initialProducts.filter((p) => p.category === cat.slug).length;
    });
    return counts;
  }, [initialProducts]);

  return (
    <div className="w-full space-y-8">
      {/* Search & Filter Toolbar */}
      <FadeIn>
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#EFE2D1] shadow-[0_8px_24px_rgba(139,92,43,0.06)] space-y-5">
          {/* Search Bar */}
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8A796E]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm kẹo dẻo, bim bim, bánh bơ, đồ chơi..."
              className="w-full min-h-[48px] pl-11 pr-10 py-3 bg-[#FFF9EE] border-2 border-[#F1E1CE] focus:border-[#FFB83F] rounded-2xl text-sm sm:text-base text-[#2D2320] placeholder-[#8A796E] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#8A796E] hover:text-[#2D2320]"
                aria-label="Xóa từ khóa tìm kiếm"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Pills (horizontally scrollable on mobile, wrapped on tablet/desktop) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar sm:flex-wrap pb-1 pt-1 -mx-2 px-2">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`shrink-0 min-h-[40px] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#FFB83F] text-[#2D2320] shadow-sm"
                  : "bg-[#FFF6E9] text-[#5A4E46] hover:bg-[#FFECCB]"
              }`}
            >
              <span>Tất cả món</span>
              <span className="px-1.5 py-0.5 rounded-full bg-white/60 text-[11px] font-bold">
                {categoryCounts.all}
              </span>
            </button>

            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`shrink-0 min-h-[40px] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-[#FF777B] text-white shadow-sm"
                      : "bg-[#FFF6E9] text-[#5A4E46] hover:bg-[#FFECCB]"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-black/10 text-[11px] font-bold">
                    {categoryCounts[cat.slug] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub-filters (New / Best Seller / Reset) */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#F4E8D8] text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#84746B] font-medium flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Lọc theo:
              </span>

              <button
                onClick={() => setFilterType(filterType === "new" ? "all" : "new")}
                className={`min-h-[36px] px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  filterType === "new"
                    ? "bg-[#FF777B] text-white"
                    : "bg-[#FFF0E2] text-[#8C3A27] hover:bg-[#FFE0CE]"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Hàng mới về</span>
              </button>

              <button
                onClick={() => setFilterType(filterType === "bestseller" ? "all" : "bestseller")}
                className={`min-h-[36px] px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  filterType === "bestseller"
                    ? "bg-[#FFB83F] text-[#2D2320]"
                    : "bg-[#FFF4DC] text-[#7A5600] hover:bg-[#FFEBBF]"
                }`}
              >
                <Flame className="w-3 h-3" />
                <span>Bán chạy nhất</span>
              </button>
            </div>

            {(selectedCategory !== "all" || searchQuery || filterType !== "all") && (
              <button
                onClick={handleClearFilters}
                className="text-xs text-[#8A796E] hover:text-[#FF777B] flex items-center gap-1 font-semibold transition-colors cursor-pointer py-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Đặt lại bộ lọc</span>
              </button>
            )}
          </div>
        </div>
      </FadeIn>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-semibold text-[#5B4E46]">
          Hiển thị{" "}
          <span className="text-[#FF777B] font-bold">{filteredProducts.length}</span>{" "}
          sản phẩm
          {selectedCategory !== "all" && (
            <span>
              {" "}thuộc danh mục{" "}
              <span className="font-bold text-[#2D2320]">
                {categories.find((c) => c.slug === selectedCategory)?.name}
              </span>
            </span>
          )}
          {searchQuery && (
            <span>
              {" "}với từ khóa &ldquo;<span className="text-[#FFB83F] font-bold">{searchQuery}</span>&rdquo;
            </span>
          )}
        </p>
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <StaggerContainer delay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <StaggerItem key={product.id} className="flex">
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-white border border-[#EFE2D1] max-w-lg mx-auto shadow-sm space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF2DE] flex items-center justify-center text-[#FFB83F]">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="font-heading font-bold text-xl text-[#2D2320]">
            Không tìm thấy món bạn đang tìm
          </h3>
          <p className="text-sm text-[#73665E]">
            Bạn hãy thử tìm bằng từ khóa khác hoặc xóa bớt bộ lọc danh mục xem nhé!
          </p>
          <div className="pt-2">
            <Button
              onClick={handleClearFilters}
              variant="primary"
              size="md"
              icon={<RefreshCw className="w-4 h-4" />}
            >
              Xem tất cả sản phẩm
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
