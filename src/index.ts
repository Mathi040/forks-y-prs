import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase: number): Product[] {
    let newProducts = [];
    for (const product of products) {
      if (product.price < precioBase) {
        newProducts.push(product);
      }
    }
    return newProducts;
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }

  name: string;
  products: Product[] = [];

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    for (const product of newProducts) {
      this.products.push(product);
    }
  }
}

export { User, Product };
