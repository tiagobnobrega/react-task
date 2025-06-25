// types.ts

// Shared base
export type CardBase = {
  id: string;
  title: string;
  badge: string;
  type: "1" | "2";
};

export type Card1Props = CardBase & {
  type: "1";
  imageUrl: string;
};

export type Card2Props = CardBase & {
  type: "2";
  subtitle: string;
};

export type CardProps = Card1Props | Card2Props;

// For API pagination result
export type Pagination = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

export type GetItemsResult = {
  items: CardProps[];
  pagination: Pagination;
};

// For getItems argument
export type GetItemsParams = {
  page: number;
  pageSize: number;
};

export type ThemeType = "obsidian" | "snow";
