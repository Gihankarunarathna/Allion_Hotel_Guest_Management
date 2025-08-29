import { useState, FormEvent } from "react";
import type { Guest } from "../types";

export interface GuestFormProps {
  initialData?: Omit<Guest, "id" | "created">;
  onSubmit: (guest: Omit<Guest, "id" | "created">) => Promise<void>;
  submitLabel: string;
}

export function GuestForm({ initialData, onSubmit, submitLabel }: GuestFormProps) {
  const [formData, setFormData] = useState<Omit<Guest, "id" | "created">>({
    first_name: initialData?.first_name || "",
    last_name: initialData?.last_name || "",
    email: initialData?.email || "",
    phone: initialData?.phone || "",
    address: initialData?.address || "",
    date_of_birth: initialData?.date_of_birth || "",
    room_number: initialData?.room_number || "",
    check_in_date: initialData?.check_in_date || "",
    check_out_date: initialData?.check_out_date || "",
    notes: initialData?.notes || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{submitLabel}</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Birthday</label>
          <input
            type="date"
            name="date_of_birth"
            placeholder="Birthday"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Room Number</label>
          <input
            type="text"
            name="room_number"
            placeholder="Room Number"
            value={formData.room_number}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Check-in Date</label>
          <input
            type="date"
            name="check_in_date"
            placeholder="Check-in Date"
            value={formData.check_in_date}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Check-out Date</label>
          <input
            type="date"
            name="check_out_date"
            placeholder="Check-out Date"
            value={formData.check_out_date}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Notes</label>
        <textarea
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition"
      >
        {submitLabel}
      </button>
    </form>
  );
}
