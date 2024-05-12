import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
const Stats = ({ bookings, stays, confirmedStays, numDays, cabinCount }) => {
  const bookingLength = bookings.length;
  const sales = bookings.reduce((sum, prev) => sum + prev.totalPrice, 0);

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="numBookings"
        value={bookingLength}
        color="blue"
      ></Stat>
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
      ></Stat>
      <Stat
        icon={<HiOutlineCalendar />}
        title="Check ins"
        value={confirmedStays.length}
        color="indigo"
      ></Stat>
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupation rate"
        value={Math.round(occupation * 100) + "%"}
        color="yellow"
      ></Stat>
    </>
  );
};

export default Stats;
