export interface ProductItem {
  id: number;
  image_url: string;
  price: number;
  description?: string;
  title: string;
  is_new?: boolean;
  is_popular?: boolean;
  discount:number;
  stock:number
}

export interface ProductReview {
  id: number;
  product_id: number;
  parent_id: number | null;
  username: string;
  rating?: number;
  comment: string;
  created_at?: string;
}
