import React from "react";
import { Link } from "react-router-dom";
import type { Guest } from "../types";

interface GuestTableProps {
  guests: Guest[];
  onDelete: (id: string) => void;
}

const GuestTable: React.FC<GuestTableProps> = ({ guests, onDelete }) => {
  if (!guests.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center shadow-md">
        <p className="text-slate-600">No guests found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-md">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 sticky top-0">
          <tr className="text-slate-600">
            <th className="p-3 text-left font-medium">Name</th>
            <th className="p-3 text-left font-medium">Email</th>
            <th className="p-3 text-left font-medium">Phone</th>
            <th className="p-3 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((g) => (
            <tr key={g.id} className="border-t hover:bg-slate-50/50">
              <td className="p-3">{g.first_name} {g.last_name}</td>
              <td className="p-3">{g.email}</td>
              <td className="p-3">{g.phone || "-"}</td>
              <td className="p-3 text-right">
                <Link to={`/guests/${g.id}`} className="text-indigo-600 mr-3">View</Link>
                <button onClick={() => onDelete(g.id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestTable;
