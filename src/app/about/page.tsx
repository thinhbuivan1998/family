import Image from "next/image";
import type { Metadata } from "next";
import {
  Heart,
  ShieldCheck,
  Sparkles,
  Smile,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Câu Chuyện Cửa Hàng - Bánh kẹo Thịnh Vượng",
  description:
    "Gần 10 năm gắn bó cùng tuổi thơ và nụ cười của các gia đình. Khám phá hành trình và giá trị cốt lõi của Bánh kẹo Thịnh Vượng.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2009",
      title: "Gieo mầm ngọt ngào",
      description:
        "Bắt đầu từ một quầy bánh kẹo nhỏ ấm cúng của gia đình, mang những phong kẹo thơm ngon đến cho các bạn nhỏ trong khu phố.",
    },
    {
      year: "2014",
      title: "Mở rộng danh mục đồ chơi",
      description:
        "Bổ sung các dòng đồ chơi trí tuệ, mô hình lắp ráp đạt chuẩn an toàn nhựa ABS nguyên sinh cho trẻ em phát triển tư duy.",
    },
    {
      year: "2019",
      title: "Dịch vụ quà tặng sinh nhật & liên hoan",
      description:
        "Nhận thiết kế và đóng gói các set quà liên hoan lớp, quà Tết thiếu nhi 1/6, Trung Thu và tiệc thôi nôi theo yêu cầu.",
    },
    {
      year: "Hiện nay",
      title: "Điểm hẹn niềm vui của mọi nhà",
      description:
        "Cập nhật liên tục các món bánh kẹo hot trend nhập khẩu và đặc sản truyền thống, phục vụ hàng ngàn gia đình với trọn vẹn sự ân cần.",
    },
  ];

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
      {/* 1. Header Section */}
      <SectionHeading
        badge="Gần 10 năm Gắn Bó"
        badgeVariant="sunshine"
        title="Câu Chuyện Tiệm Bánh Kẹo Gia Đình"
        highlightText="Gia Đình"
        highlightColor="coral"
        subtitle="Mỗi chiếc kẹo, mỗi món đồ chơi nhỏ xinh tại Thịnh Vượng đều mang theo niềm tin yêu và mong ước đem đến nụ cười rạng rỡ cho mọi thế hệ."
      />

      {/* 2. Hero Story Showcase */}
      <div className="bg-white rounded-[2.5rem] border border-[#EFE2D1] p-6 sm:p-12 shadow-[0_12px_36px_rgba(139,92,43,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF777B] flex items-center gap-1.5">
              <Heart className="w-4 h-4 fill-[#FF777B]" />
              Khởi nguồn từ tình yêu thương
            </span>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#2D2320] leading-snug">
              Không chỉ là bánh kẹo, đó là chiếc vé tìm về tuổi thơ
            </h2>

            {siteConfig.fullStory.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm sm:text-base text-[#61554E] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#855D28]">
              <span className="flex items-center gap-1.5 bg-[#FFF4DC] px-3.5 py-2 rounded-xl border border-[#F5E2C4]">
                <CheckCircle2 className="w-4 h-4 text-[#D98700]" />
                100% Nguồn gốc rõ ràng
              </span>
              <span className="flex items-center gap-1.5 bg-[#FFEBEB] px-3.5 py-2 rounded-xl border border-[#FAD2D2]">
                <CheckCircle2 className="w-4 h-4 text-[#FF777B]" />
                Hạn sử dụng luôn mới
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#FFF3DF] border border-[#F0DFC9] shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80"
                alt="Không gian bánh kẹo Thịnh Vượng tràn ngập niềm vui"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Core Values Grid */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#79D8B1] block mb-2">
            Kim chỉ nam hoạt động
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#2D2320]">
            4 Giá Trị Cốt Lõi Tại Thịnh Vượng
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.coreValues.map((val, idx) => (
            <div
              key={val.title}
              className="p-6 rounded-[2rem] bg-white border border-[#EFE2D1] hover:border-[#FFB83F] transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="w-12 h-12 rounded-2xl bg-[#FFF6E9] border border-[#F3E5D4] flex items-center justify-center mb-4">
                  {idx === 0 && (
                    <ShieldCheck className="w-6 h-6 text-[#FF777B]" />
                  )}
                  {idx === 1 && <Sparkles className="w-6 h-6 text-[#FFB83F]" />}
                  {idx === 2 && <Heart className="w-6 h-6 text-[#4DBF92]" />}
                  {idx === 3 && <Smile className="w-6 h-6 text-[#589FE9]" />}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#2D2320] mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665A53] leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Timeline Milestones */}
      <div className="bg-[#FFFBF5] rounded-[2.5rem] border border-[#EFE3D4] p-6 sm:p-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFB83F] block mb-2">
            Hành trình phát triển
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#2D2320]">
            Những Cột Mốc Đáng Nhớ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item) => (
            <div
              key={item.year}
              className="relative p-5 rounded-2xl bg-white border border-[#F1E4D5] flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#FFB83F] text-[#2D2320] font-heading font-bold text-sm mb-3">
                  Năm {item.year}
                </div>
                <h3 className="font-heading font-bold text-base text-[#2D2320] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6F635B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Contact Invitation Banner */}
      <div className="text-center p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#FFF2DD] via-[#FFEADB] to-[#FFF2DD] border border-[#F5DEC3] space-y-4">
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#2D2320]">
          Mời Bạn Ghé Thăm Tiệm Thịnh Vượng!
        </h3>
        <p className="text-sm sm:text-base text-[#6B5E57] max-w-xl mx-auto leading-relaxed">
          Chúng tôi luôn sẵn lòng chào đón bạn và gia đình đến trải nghiệm không
          gian ngọt ngào và lựa chọn những món ăn vặt ưng ý nhất.
        </p>
        <div className="pt-3 flex flex-wrap justify-center gap-3">
          <Button
            href="/products"
            variant="primary"
            size="lg"
            className="font-bold"
          >
            Khám phá danh mục món ngon
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="font-bold border-2"
          >
            Xem địa chỉ & Chỉ đường
          </Button>
        </div>
      </div>
    </div>
  );
}
