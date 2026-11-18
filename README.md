# Website Bánh Kẹo Thịnh Vượng 🍬✨

> **"Mỗi ngày một chút ngọt ngào!"**  
> Website giới thiệu thương hiệu và trưng bày sản phẩm hiện đại, vui tươi, ấm áp cho tiệm bánh kẹo gia đình **Bánh kẹo Thịnh Vượng**.

---

## 1. Giới Thiệu Dự Án

**Bánh kẹo Thịnh Vượng** là website trưng bày sản phẩm (Product Showcase & Brand Introduction), không phải là sàn thương mại điện tử phức tạp (không giỏ hàng, không thanh toán, không đăng nhập tài khoản).

Mục tiêu chính là giúp khách hàng và các gia đình dễ dàng khám phá thế giới bánh kẹo tuổi thơ, bim bim giòn tan, đồ chơi trẻ em an toàn và nhanh chóng liên hệ trực tiếp với cửa hàng qua **Hotline** hoặc **Zalo**.

### 4 Nhóm ngành hàng chủ đạo:

- 🍬 **Bánh kẹo:** Kẹo dẻo trái cây, bánh quy bơ Đan Mạch, kẹo mút tuổi thơ, sô-cô-la hạnh nhân...
- 🥨 **Bim bim:** Snack khoai tây chiên giòn, bắp rang bơ phô mai, bánh gạo nướng tảo biển, mực nướng cay Thái Lan...
- 🧸 **Đồ chơi:** Xếp hình lego mini rèn luyện tư duy, súng bắn bong bóng tự động, xe trớn địa hình chống va đập, đất nặn sinh học an toàn...
- 🎁 **Sản phẩm khác:** Thạch rau câu trái cây giải nhiệt, nước ép hoa quả, set hộp quà bánh kẹo sinh nhật & liên hoan lớp học...

---

## 2. Phong Cách Thiết Kế (Design System)

- **Phong cách:** Vui tươi, ngọt ngào, thân thiện, hiện đại (Playful, Colorful, Friendly, Modern).
- **Nguyên tắc phối màu (Không lạm dụng màu):**
  - **Nền kem chủ đạo (`#FFF7E9`):** Giữ cho không gian trang nhã, ấm cúng và dịu mắt cho các gia đình.
  - **Màu nhấn Sunshine Yellow (`#FFB83F`):** Điểm nhấn năng lượng, huy hiệu, nút hành động chính.
  - **Màu nhấn Coral Pink (`#FF777B`):** Điểm xuyết ngọt ngào, badge "Mới về tiệm", nút Hotline.
  - **Màu nhấn Mint Green (`#79D8B1`) & Sky Blue (`#7CB9F5`):** Tag danh mục, nút chat Zalo, biểu tượng an toàn.
  - **Chữ nâu đen ấm (`#2D2320`):** Êm ái, tương phản tốt hơn nhiều so với màu đen thuần `#000000`.
- **Typography:**
  - Tiêu đề: **Fredoka** (bo tròn mềm mại, ấm áp, thân thiện).
  - Nội dung: **Be Vietnam Pro** (tối ưu tiếng Việt sắc nét, dễ đọc trên mọi kích thước màn hình điện thoại).
- **Trải nghiệm Mobile-first:** Tối ưu hóa vùng chạm ($\ge 44\text{px}$), menu trượt linh hoạt, thanh ghim liên hệ nhanh (Floating Contact Bar) 1-tap gọi Hotline và 1-tap chat Zalo.

---

## 3. Công Nghệ Sử Dụng (Tech Stack)

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Ngôn ngữ:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** `motion/react` (chuyển động nhẹ nhàng, hiệu ứng kẹo trôi nổi bồng bềnh)
- **Icons:** `lucide-react`
- **Tối ưu hóa ảnh:** Next.js `<Image />` với định dạng WebP/AVIF tự động

---

## 4. Cấu Trúc Thư Mục Dự Án

```
thinhvuong/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (Google Fonts, Header, Footer, Floating Contact Bar)
│   │   ├── page.tsx                # Trang chủ (Hero, Danh mục, Nổi bật, Về tiệm, CTA Liên hệ)
│   │   ├── products/
│   │   │   ├── page.tsx            # Trang danh mục (Bộ lọc Pills, Tìm kiếm tức thì, Grid sản phẩm)
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Trang chi tiết sản phẩm tĩnh SSG (generateStaticParams)
│   │   ├── about/
│   │   │   └── page.tsx            # Câu chuyện cửa hàng gia đình Gần 10 năm, 4 giá trị cốt lõi
│   │   ├── contact/
│   │   │   └── page.tsx            # Thông tin liên hệ, bản đồ chỉ đường, đặt quà sự kiện
│   │   ├── not-found.tsx           # Trang 404 thân thiện
│   │   ├── sitemap.ts              # XML Sitemap tự động cho SEO
│   │   ├── robots.ts               # Tệp chỉ dẫn robots.txt chuẩn SEO
│   │   ├── icon.tsx                # Dynamic Sweet Confectionery Favicon
│   │   └── globals.css             # Tailwind v4 theme, fonts, scrollbar
│   ├── components/
│   │   ├── common/                 # Button, Badge, Card, SectionHeading, DecorativeCandy, MotionWrapper
│   │   ├── layout/                 # Header, Footer, MobileDrawer, FloatingContactBar
│   │   ├── home/                   # HeroBanner, CategorySection, FeaturedProductsSection, AboutStoreSection, ContactCtaBanner
│   │   └── products/               # ProductCard, ProductCatalogView
│   ├── data/
│   │   ├── categories.ts           # Dữ liệu danh mục cố định
│   │   ├── products.ts             # 20 sản phẩm mẫu chuẩn TypeScript
│   │   └── site-config.ts          # Hotline, Zalo, địa chỉ, giờ mở cửa
│   └── types/                      # TypeScript definitions (Product, Category, StoreInfo)
└── package.json
```

---

## 5. Hướng Dẫn Vận Hành & Khởi Chạy

### Chạy ở chế độ phát triển (Development):

```bash
npm run dev
# hoặc
pnpm dev
```

Truy cập: `http://localhost:3000`

### Kiểm tra cú pháp (Linting):

```bash
npm run lint
```

### Đóng gói sản phẩm (Production Build):

```bash
npm run build
npm start
```

> Tất cả các trang bao gồm cả 20 trang sản phẩm đều được xuất ra dạng **Static Site Generation (SSG)** với tốc độ tải trang gần như tức thì ($< 100\text{ms}$).

---

## 6. Hướng Dẫn Thêm Hoặc Sửa Sản Phẩm

Để cập nhật sản phẩm mới:

1. Mở file [src/data/products.ts](file:///home/thinh/Project/thinhvuong/src/data/products.ts).
2. Thêm một đối tượng sản phẩm mới vào mảng `products`:

```typescript
{
  id: "prod-bk-xx",
  name: "Tên Món Bánh Kẹo",
  slug: "ten-mon-banh-keo",
  category: "banh-keo", // "banh-keo" | "bim-bim" | "do-choi" | "san-pham-khac"
  categoryName: "Bánh kẹo",
  description: "Mô tả ngắn gọn về sản phẩm...",
  detailedDescription: "Mô tả chi tiết xuất xứ, thành phần, hương vị...",
  image: "https://images.unsplash.com/...", // hoặc đường dẫn ảnh cục bộ /images/products/...
  isFeatured: true, // Hiển thị ở mục nổi bật trang chủ
  isNew: true,      // Nhãn "Mới về"
  isBestSeller: false,
  packaging: "Gói 150g",
  origin: "Việt Nam",
  tasteNote: "Ngọt thanh tự nhiên",
}
```

Website sẽ tự động cập nhật danh mục, bộ lọc tìm kiếm và sinh trang chi tiết `/products/[slug]` tương ứng!
