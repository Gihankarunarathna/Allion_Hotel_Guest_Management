import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GuestForm } from "../components/GuestForm";
import { getGuestById, updateGuest } from "../lib/guests";
import type { Guest } from "../types";

const GuestDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [guest, setGuest] = useState<Omit<Guest, "id" | "created"> | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchGuest = async () => {
      const data = await getGuestById(id);
      setGuest({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        date_of_birth: data.date_of_birth,
        room_number: data.room_number,
        check_in_date: data.check_in_date,
        check_out_date: data.check_out_date,
        notes: data.notes,
      });
    };
    fetchGuest();
  }, [id]);

  const handleUpdateGuest = async (updatedGuest: Omit<Guest, "id" | "created">) => {
    if (!id) return;
    await updateGuest(id, updatedGuest);
    navigate("/guests");
  };

  if (!guest) return <p>Loading guest...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">Edit Guest</h1>
      <GuestForm initialData={guest} onSubmit={handleUpdateGuest} submitLabel="Update Guest" />
    </div>
  );
};

export default GuestDetail;
