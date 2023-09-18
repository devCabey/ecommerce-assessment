export interface IProduct {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  photo?: string;
}

export interface ProductFilter {
  filter: string;
  photo: string;
}
