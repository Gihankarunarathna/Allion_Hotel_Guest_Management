// src/pages/GuestsList.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Guest } from "../types";
import { getGuests, removeGuest } from "../lib/guests";

const GuestsList: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    const data = await getGuests();
    setGuests(data);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this guest?")) return;
    await removeGuest(id);
    fetchGuests();
  };

  const filteredGuests = guests.filter(
    (g) =>
      g.first_name.toLowerCase().includes(search.toLowerCase()) ||
      g.last_name.toLowerCase().includes(search.toLowerCase()) ||
      g.email.toLowerCase().includes(search.toLowerCase()) ||
      g.address?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">ALL GUESTS</h1>

      {/* Total Guests & Search & Add Button */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 space-y-2 md:space-y-0">
        <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
          <div className="bg-indigo-100 text-indigo-700 font-bold px-4 py-2 rounded shadow w-48 text-center">
            Total Guests: {guests.length}
          </div>
          <input
            type="text"
            placeholder="Search guests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded shadow w-48"
          />
        </div>

        {/* Add Guest Button */}
        <div>
          <Link
            to="/guests/new" // <-- Fixed route
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
          >
            Add Guest
          </Link>
        </div>
      </div>

      {/* Guests Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-indigo-50 text-indigo-700">
            <tr>
              <th className="text-left p-3 font-semibold">Name</th>
              <th className="text-left p-3 font-semibold">Email</th>
              <th className="text-left p-3 font-semibold">Phone</th>
              <th className="text-left p-3 font-semibold">Address</th>
              <th className="text-left p-3 font-semibold">Birthday</th>
              <th className="text-right p-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredGuests.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  No guests found.
                </td>
              </tr>
            )}
            {filteredGuests.map((guest) => (
              <tr
                key={guest.id}
                className="border-t hover:bg-indigo-50 transition"
              >
                <td className="p-3">{guest.first_name} {guest.last_name}</td>
                <td className="p-3">{guest.email}</td>
                <td className="p-3">{guest.phone || "—"}</td>
                <td className="p-3">{guest.address || "—"}</td>
                <td className="p-3">{guest.date_of_birth?.slice(0, 10) || "—"}</td>
                <td className="p-3 text-right space-x-2">
                  <Link
                    to={`/guests/${guest.id}`}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 transition"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(guest.id)}
                    className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuestsList;
