import { useState } from "react";
import ProductList from "./components/ProductsList/ProductList";
import ProductListFilters from "./components/ProductsList/ProductListFilters";

import { ProductFilters } from "./lib/types/product";
import { useFetchProducts } from "./lib/hooks/useFetchProducts";

function App() {
  const [search, setSearch] = useState<ProductFilters["search"]>();
  const [category, setCategory] = useState<ProductFilters["category"]>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters["maxPrice"]>();

  const { data, isFetching } = useFetchProducts({ search, category, maxPrice });

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-4xl font-bold">Products</h1>
        <ProductListFilters
          onChange={(filter) => {
            setSearch(filter.search);
            setCategory(filter.category);
            setMaxPrice(filter.maxPrice);
          }}
        />
      </div>

      <div>
        {data && <ProductList products={data} />}
        {isFetching && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
