import { useEffect, useState } from "react";
import { ProductFilters } from "../../lib/types/product";

type ProductListFiltersProps = {
  onChange: (filter: ProductFilters) => void;
};

export default function ProductListFilters({
  onChange,
}: ProductListFiltersProps) {
  const [search, setSearch] = useState<ProductFilters["search"]>();
  const [category, setCategory] = useState<ProductFilters["category"]>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters["maxPrice"]>();

  useEffect(() => {
    onChange({ search, category, maxPrice });
  }, [search, category, maxPrice]);

  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => onChange({ search: e.target.value })}
        placeholder="Search a product"
      />
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as ProductFilters["category"])
        }
      >
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select>
      <select
        value={category}
        onChange={(e) =>
          setMaxPrice(e.target.value ? parseInt(e.target.value) : undefined)
        }
      >
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>
    </div>
  );
}
