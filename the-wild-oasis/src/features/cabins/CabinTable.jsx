import styled from "styled-components";
import CabinRow from "./CabinRow";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import { useQuery } from "@tanstack/react-query";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";

const Table1 = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

// export default function CartTable() {
//   const { isLoading, cabins, error } = useCabins();
//   // console.log(x);
//   if (isLoading) return <Spinner />;
//   return (
//     <Table role="table" columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
//       <Table.Header role="row">
//         <div></div>
//         <div>Cabin</div>
//         <div>Capacity</div>
//         <div>Price</div>
//         <div>Discount</div>
//         <div></div>
//       </Table.Header>
//       {cabins.map((cabin) => (
//         <CabinRow cabin={cabin} key={cabin.id} />
//       ))}
//     </Table>
//   );
// }

export default function CartTable() {
  const { isLoading, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();
  const discount = searchParams.get("discount") || "all";

  const sortBy = searchParams.get("sortBy") || "name-asc";

  const [field, direction] = sortBy.split("-");
  let filterValue = cabins;
  if (discount === "discount") {
    filterValue = cabins.filter((cabin) => cabin.discount !== 0);
  }
  if (discount === "no-discount") {
    filterValue = cabins.filter((cabin) => cabin.discount === 0);
  }

  const modifier = direction === "asc" ? 1 : -1;

  let sortedValue = filterValue.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  // console.log(x);
  if (isLoading) return <Spinner />;
  return (
    <Table role="table" columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
      <Table.Header role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        cabins={sortedValue}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
      ></Table.Body>
    </Table>
  );
}
