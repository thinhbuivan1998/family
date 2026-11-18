export type ProductCategorySlug =
  | "banh-keo"
  | "bim-bim"
  | "do-choi"
  | "san-pham-khac";

export interface Category {
  id: string;
  name: string;
  slug: ProductCategorySlug;
  description: string;
  iconName: string;
  color: "sunshine" | "coral" | "mint" | "sky";
  badgeText: string;
  image: string;
  itemCount?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategorySlug;
  categoryName: string;
  description: string;
  detailedDescription?: string;
  image: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  packaging?: string; // e.g. "Gói 150g", "Hộp thiếc 300g", "Hộp 12 cái"
  origin?: string; // e.g. "Việt Nam", "Nhập khẩu Thái Lan", "Nhập khẩu Nhật Bản"
  tasteNote?: string; // e.g. "Ngọt thanh vị bơ sữa", "Cay giòn rụm đậm đà"
}

export interface StoreInfo {
  name: string;
  brandSlogan: string;
  shortIntro: string;
  fullStory: string[];
  phone: string;
  phoneDisplay: string;
  zaloUrl: string;
  facebookUrl: string;
  address: string;
  googleMapsUrl?: string;
  openingHours: string;
  email: string;
  establishedYear: number;
  coreValues: {
    title: string;
    description: string;
    icon: string;
  }[];
}

