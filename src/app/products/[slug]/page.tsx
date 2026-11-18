import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Package,
  Globe,
  Heart,
  ChevronRight,
} from "lucide-react";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site-config";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { ProductCard } from "@/components/products/ProductCard";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm - Bánh kẹo Thịnh Vượng",
    };
  }

  return {
    title: `${product.name} - Bánh kẹo Thịnh Vượng`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Bánh kẹo Thịnh Vượng`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const getCategoryColor = (
    cat: string
  ): "sunshine" | "coral" | "mint" | "sky" | "neutral" => {
    switch (cat) {
      case "banh-keo":
        return "sunshine";
      case "bim-bim":
        return "coral";
      case "do-choi":
        return "sky";
      case "san-pham-khac":
        return "mint";
      default:
        return "neutral";
    }
  };

  const zaloInquiryUrl = `${siteConfig.zaloUrl}?text=${encodeURIComponent(
    `Xin chào Bánh kẹo Thịnh Vượng! Em muốn hỏi mua sản phẩm: ${product.name} (${product.packaging || ""})`
  )}`;

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-[#7D6E66]">
        <Link href="/" className="hover:text-[#FF777B] transition-colors">
          Trang chủ
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#C4B2A3]" />
        <Link href="/products" className="hover:text-[#FF777B] transition-colors">
          Sản phẩm
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#C4B2A3]" />
        <Link
          href={`/products?category=${product.category}`}
          className="hover:text-[#FF777B] transition-colors"
        >
          {product.categoryName}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#C4B2A3]" />
        <span className="text-[#2D2320] font-semibold truncate max-w-[200px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Product Card Showcase */}
      <div className="bg-white rounded-[2.5rem] border border-[#EFE2D1] p-5 sm:p-10 shadow-[0_12px_36px_rgba(139,92,43,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Product Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-[2rem] overflow-hidden bg-[#FAF0E1] border border-[#F3E5D4]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />

              {/* Status Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                {product.isNew && (
                  <Badge variant="coral" size="md" dot>
                    Mới về tiệm
                  </Badge>
                )}
                {product.isBestSeller && (
                  <Badge variant="sunshine" size="md">
                    Bán chạy nhất
                  </Badge>
                )}
                {product.isFeatured && !product.isNew && !product.isBestSeller && (
                  <Badge variant="sky" size="md">
                    Gợi ý đặc sắc
                  </Badge>
                )}
              </div>
            </div>

            {/* Quality Commitment Badges */}
            <div className="mt-4 p-4 rounded-2xl bg-[#FFF9EE] border border-[#F1E1CE] grid grid-cols-2 gap-3 text-xs text-[#5D5049]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF777B] shrink-0" />
                <span className="font-semibold">Hạn dùng luôn mới tinh</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#79D8B1] shrink-0" />
                <span className="font-semibold">Bao gói sạch sẽ, an toàn</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details & Inquiries */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category tag */}
              <div className="mb-2.5">
                <Badge variant={getCategoryColor(product.category)} size="md">
                  {product.categoryName}
                </Badge>
              </div>

              {/* Product Name */}
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#2D2320] leading-snug">
                {product.name}
              </h1>

              {/* Key Features Pill Matrix */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.packaging && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FFF8EE] border border-[#F3E5D4] text-xs text-[#574942]">
                    <Package className="w-4 h-4 text-[#FFB83F] shrink-0" />
                    <span>
                      <strong className="text-[#2D2320]">Quy cách:</strong> {product.packaging}
                    </span>
                  </div>
                )}

                {product.origin && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FFF8EE] border border-[#F3E5D4] text-xs text-[#574942]">
                    <Globe className="w-4 h-4 text-[#7CB9F5] shrink-0" />
                    <span>
                      <strong className="text-[#2D2320]">Xuất xứ:</strong> {product.origin}
                    </span>
                  </div>
                )}
              </div>

              {/* Taste note highlight */}
              {product.tasteNote && (
                <div className="mt-4 p-3.5 rounded-2xl bg-[#FFF0E8] border border-[#FFD8CB] flex items-start gap-2.5 text-xs text-[#8A3A22]">
                  <Sparkles className="w-4 h-4 text-[#FF777B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Hương vị đặc trưng:</span>
                    <span>{product.tasteNote}</span>
                  </div>
                </div>
              )}

              {/* Detailed Description */}
              <div className="mt-6 space-y-3">
                <h3 className="font-heading font-bold text-base text-[#2D2320]">
                  Mô tả sản phẩm
                </h3>
                <p className="text-sm sm:text-base text-[#61554E] leading-relaxed">
                  {product.detailedDescription || product.description}
                </p>
              </div>
            </div>

            {/* Direct Contact CTAs */}
            <div className="mt-8 pt-6 border-t border-[#F1E3D2] space-y-3">
              <p className="text-xs text-[#86766D] font-medium">
                💡 Bạn muốn đặt mua hoặc hỏi giá sỉ/lẻ số lượng lớn? Hãy liên hệ ngay với cửa hàng:
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={zaloInquiryUrl}
                  isExternal
                  variant="sky"
                  size="lg"
                  icon={<MessageCircle className="w-4 h-4" />}
                  className="flex-1 font-bold shadow-[0_4px_16px_rgba(124,185,245,0.4)]"
                >
                  Tư vấn & Mua qua Zalo
                </Button>

                <Button
                  href={`tel:${siteConfig.phone}`}
                  variant="primary"
                  size="lg"
                  icon={<Phone className="w-4 h-4" />}
                  className="flex-1 font-bold shadow-[0_4px_16px_rgba(255,184,63,0.4)]"
                >
                  Gọi Hotline: {siteConfig.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-14 sm:mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF777B] block mb-1">
                Gợi ý cùng danh mục
              </span>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#2D2320]">
                Món Ngon Tương Tự
              </h2>
            </div>
            <Link
              href={`/products?category=${product.category}`}
              className="text-xs sm:text-sm font-bold text-[#8A5820] hover:text-[#FF777B] transition-colors"
            >
              Xem tất cả →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      )}

      {/* Back button */}
      <div className="mt-12 text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#5F514A] hover:text-[#FF777B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh mục sản phẩm</span>
        </Link>
      </div>
    </div>
  );
}
