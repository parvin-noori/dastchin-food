export interface ProductItem {
  id: number;
  image_url: string;
  price: number;
  description: string;
  title: string;
  is_new?: boolean;
  is_popular: boolean;
}
