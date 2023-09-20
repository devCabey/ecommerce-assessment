// Import any necessary dependencies

// Define the loader function
export const productLoader = async (params: { id: string }) => {
  const { id } = params;
  return id;
};

export default productLoader;
