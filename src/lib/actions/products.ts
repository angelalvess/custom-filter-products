import { products } from "../api/products";
import { ProductFilters } from "../types/product";

export const fetchProducts = async (options?: ProductFilters) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let filterProducts = products;

  if (options?.category) {
    filterProducts = filterProducts.filter(
      (product) => product.category === options.category
    );
  }

  if (options?.maxPrice) {
    filterProducts = filterProducts.filter(
      (product) => product.price <= options.maxPrice!
    );
  }

  if (options?.search) {
    filterProducts = filterProducts.filter((product) =>
      product.name.includes(options.search!)
    );
  }

  return filterProducts;
};
