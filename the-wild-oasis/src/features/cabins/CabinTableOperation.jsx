import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
const CabinTableOperation = () => {
  return (
    <div>
      <TableOperations>
        <Filter
          field="discount"
          options={[
            { value: "all", label: "All" },
            { value: "discount", label: "Discount" },
            { value: "no-discount", label: "No discount" },
          ]}
        />
        <SortBy
          options={[
            { value: "name-asc", label: "Sort by name (A-Z)" },
            { value: "name-desc", label: "Sort by name (Z-A)" },
            { value: "regularPrice-asc", label: "Sort by price (low-high)" },
            { value: "regularPrice-desc", label: "Sort by price (high-low)" },
            {
              value: "maxCapacity-asc",
              label: "Sort by maxCapacity (low-high)",
            },
            {
              value: "maxCapacity-desc",
              label: "Sort by maxCapacity(high-low)",
            },
            // { value: "name-asc", label: "Sort by name (A-Z)" },
            // { value: "name-asc", label: "Sort by name (A-Z)" },
          ]}
        />
      </TableOperations>
    </div>
  );
};

export default CabinTableOperation;
