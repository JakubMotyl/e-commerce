export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  images: string[];
  stock: number;
  description: string;
  availabilityStatus: string;
  reviews: Review[];
}

export interface Review {
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
  date: string;
  comment: string;
}
