const typeDefs = `
type Product{
  id:String,
  name:String,
  description:String
}

type Query{
  product:Product,
  products:[Product]
}

`;

export default typeDefs;
