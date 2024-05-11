import React, { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

const AddCabin = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Button onClick={() => setShowForm((show) => !show)} type="primary">
        show
      </Button>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <CreateCabinForm onClose={() => setShowForm(false)} />
        </Modal>
      )}
    </>
  );
};

export default AddCabin;
