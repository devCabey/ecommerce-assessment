import { Product } from '../../types';

export const productData = [
  {
    id: '1',
    name: 'Iphone 13',
    photo:
      'https://cdn.niwzi.be/images/ez_prod/2750/502129/hires/iphone-13-512gb-pink-1-1631717332_400x300.png',
    price: 700,
    description: 'Storage: 256gb, Color: Rose Gold, Camera: 24MP',
  },
  {
    id: '2',
    name: 'Macbook Pro',
    photo:
      'https://www.pngarts.com/files/1/MacBook-Pro-PNG-Transparent-Image.png',
    price: 1000,
    description:
      'Year: 2017, Storage: 512gb, Memory: 64gb, Processor: Intel i7',
  },
  {
    id: '3',
    name: 'Iphone 13 Pro',
    photo: 'https://assets.stickpng.com/images/61d2f85b92b57c0004c64745.png',
    price: 900,
    description: 'Memory: 64gb, Color: Ocean Blue, Camera: 224MP',
  },
  {
    id: '4',
    name: 'Macbook Air',
    photo: 'https://www.pngmart.com/files/4/Macbook-PNG-Pic.png',
    price: 990,
    description:
      'Year: 2015, Storage: 256gb, Memory: 16gb, Processor: Intel i5',
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
    if (filter === '') return [];
    const products = productData.filter((prod) =>
      prod.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase() === 'all products' ? '' : filter)
    );
    return products;
  } catch (err) {
    throw err;
  }
}
