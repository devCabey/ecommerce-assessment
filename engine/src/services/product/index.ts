import { Product } from '../../types';

export const productData = [
  {
    id: '1',
    name: 'bag',
    description: 'School bag',
    photo: 'http://locaisifo',
    price: 10.2,
  },
  {
    id: '2',
    name: 'watch',
    description: 'Classic Watch',
    photo: 'http://locaisifo',
    price: 10.2,
  },
  {
    id: '3',
    name: 'shoe',
    description: 'double monk strap',
    photo: 'http://locaisifo',
    price: 10.2,
  },
  {
    id: '4',
    name: 'belt',
    description: 'belt hook',
    photo: 'http://locaisifo',
    price: 10.2,
  },
];

export async function getProduct(id: string): Promise<Product> {
  try {
    const product = productData.find((prod) => prod.id == id);
    if (!product) throw new Error('Product not found');
    return product;
  } catch (err) {
    throw err;
  }
}

export async function getProducts(filter: string): Promise<Product[]> {
  try {
    const products = productData.filter((prod) =>
      prod.name.includes(filter || '')
    );
    return products;
  } catch (err) {
    throw err;
  }
}
