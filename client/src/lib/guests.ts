import { pb } from "./pb";
import type { Guest } from "../types";

export const getGuests = async (): Promise<Guest[]> => {
  const records = await pb.collection("guests").getFullList();
  return records.map((r) => ({
    id: r.id,
    first_name: r.first_name,
    last_name: r.last_name,
    email: r.email,
    phone: r.phone,
    address: r.address,
    date_of_birth: r.date_of_birth,
    room_number: r.room_number,
    check_in_date: r.check_in_date,
    check_out_date: r.check_out_date,
    notes: r.notes,
    created: r.created,
  }));
};

export const getGuestById = async (id: string): Promise<Guest> => {
  const r = await pb.collection("guests").getOne(id);
  return {
    id: r.id,
    first_name: r.first_name,
    last_name: r.last_name,
    email: r.email,
    phone: r.phone,
    address: r.address,
    date_of_birth: r.date_of_birth,
    room_number: r.room_number,
    check_in_date: r.check_in_date,
    check_out_date: r.check_out_date,
    notes: r.notes,
    created: r.created,
  };
};

export const createGuest = async (guest: Omit<Guest, "id" | "created">) => {
  await pb.collection("guests").create(guest);
};

export const updateGuest = async (id: string, guest: Omit<Guest, "id" | "created">) => {
  await pb.collection("guests").update(id, guest);
};

export const removeGuest = async (id: string) => {
  await pb.collection("guests").delete(id);
};
