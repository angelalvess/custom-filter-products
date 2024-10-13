import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../actions/products";
import { ProductFilters } from "../types/product";

export const useFetchProducts = ({
  search,
  category,
  maxPrice,
}: ProductFilters) => {
  const { data, isFetching } = useQuery({
    queryKey: ["products", search, category, maxPrice],
    queryFn: () => fetchProducts({ search, category, maxPrice }),
  });

  return { data, isFetching };
};
