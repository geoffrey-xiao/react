import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import Today from "../check-in-out/TodayActivity";
import Row from "../../ui/Row";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const {
    stays,
    isLoading: loadingStays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: loadingCabins } = useCabins();
  console.log(bookings);
  console.log(stays);
  console.log(confirmedStays);
  if (isLoading || loadingStays || loadingCabins) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        stays={stays}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <DurationChart confirmedStays={confirmedStays} />

      <Today />
      <SalesChart bookings={bookings} numDays={numDays}></SalesChart>

      <div>chart</div>
      <div>statistic</div>
      <div>people</div>
      <div>calendar</div>
    </StyledDashboardLayout>
  );
}
