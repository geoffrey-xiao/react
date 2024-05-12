import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();

  const { booking = {}, isLoading } = useBooking();

  const { isLoading: settingLoading, settings: { breakfastPrice } = {} } =
    useSettings();

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const [confirmedPaid, setConfirmedPaid] = useState(false);

  const [addBreakfast, setAddBreakfast] = useState(false);

  const { checkin, isLoading: isChecking } = useCheckin();

  useEffect(() => {
    setAddBreakfast(hasBreakfast);
  }, [hasBreakfast]);

  useEffect(() => {
    setConfirmedPaid(booking.isPaid);
  }, [booking.isPaid]);

  const optionalBreakfastPrice = breakfastPrice * numGuests * numNights;

  function handleBreakfast() {}

  function handleCheckin() {
    if (!confirmedPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Checkbox
          checked={addBreakfast}
          onChange={() => {
            setAddBreakfast((paid) => !paid);
            setConfirmedPaid(false);
          }}
        >
          Add Breakfast at price ${breakfastPrice}
        </Checkbox>
      )}

      <Checkbox
        checked={confirmedPaid}
        onChange={() => setConfirmedPaid((paid) => !paid)}
      >
        Please confirm the price
        {addBreakfast
          ? `total $ ${
              totalPrice + optionalBreakfastPrice
            } ($ ${totalPrice} + $ ${optionalBreakfastPrice})`
          : `total $ ${totalPrice}`}
      </Checkbox>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmedPaid || isChecking}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
