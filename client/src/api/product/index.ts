// Import any necessary dependencies

// Define the loader function
export const productLoader = async (params: { id: string }) => {
  const { id } = params;

  // try {
  //   // Replace this URL with your actual API endpoint
  //   const response = await fetch(`/api/products/${id}`);

  //   if (!response.ok) {
  //     throw new Error('Failed to fetch product data');
  //   }

  //   const productData = await response.json();

  //   return productData;
  // } catch (error) {
  //   throw error;
  // }
  return id;
};

export default productLoader;
