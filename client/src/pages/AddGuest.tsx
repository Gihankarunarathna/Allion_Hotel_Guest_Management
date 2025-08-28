import React from "react";
import { useNavigate } from "react-router-dom";
import { GuestForm } from "../components/GuestForm";
import { createGuest } from "../lib/guests";

const AddGuest: React.FC = () => {
  const navigate = useNavigate();

  const handleAddGuest = async (guestData: any) => {
    await createGuest(guestData);
    navigate("/guests");
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">Add Guest</h1>
      <GuestForm onSubmit={handleAddGuest} submitLabel="Add Guest" />
    </div>
  );
};

export default AddGuest;
