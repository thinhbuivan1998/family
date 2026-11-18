import { Home, Search } from "lucide-react";
import { Button } from "@/components/common/Button";
import { CandySweetIcon } from "@/components/common/DecorativeCandy";

export default function NotFound() {
  return (
    <div className="py-20 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="w-24 h-24 mx-auto rounded-3xl bg-[#FFF2DE] border-2 border-[#F2DECA] flex items-center justify-center shadow-md">
        <CandySweetIcon className="w-14 h-14" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FF777B]">
          Lỗi 404 • Không tìm thấy trang
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2D2320]">
          Trang Này Đã Bị &ldquo;Ăn Mất&rdquo; Rồi!
        </h1>
        <p className="text-sm sm:text-base text-[#6F625B] leading-relaxed">
          Món bạn đang tìm có thể đã hết hoặc đường dẫn chưa chính xác. Bạn quay về trang chủ hoặc xem danh mục món ngon nhé!
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button
          href="/"
          variant="primary"
          size="md"
          icon={<Home className="w-4 h-4" />}
          className="w-full sm:w-auto font-bold"
        >
          Về trang chủ
        </Button>

        <Button
          href="/products"
          variant="outline"
          size="md"
          icon={<Search className="w-4 h-4" />}
          className="w-full sm:w-auto font-bold"
        >
          Khám phá sản phẩm
        </Button>
      </div>
    </div>
  );
}
