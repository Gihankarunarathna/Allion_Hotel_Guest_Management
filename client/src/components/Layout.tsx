import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { classNames } from "../lib/utils";

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Top Bar */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <div className="container max-w-7xl flex items-center gap-4 py-3">
          <Link to="/guests" className="inline-flex items-center gap-2">
            <span className="inline-grid place-items-center w-9 h-9 rounded-xl bg-indigo-600 text-white shadow-sm">
              HG
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Hotel Guest Management
            </span>
          </Link>

          <nav className="ml-auto flex items-center gap-2 text-sm">
            <Link
              to="/guests"
              className={classNames(
                "px-3 py-2 rounded-lg hover:bg-slate-100 transition",
                pathname.startsWith("/guests") && "bg-slate-100"
              )}
            >
              Guests
            </Link>

            <Link
              to="/guests/new"
              className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm transition"
            >
              Add Guest
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="container max-w-7xl py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-xs text-slate-500 bg-white">
        Built with PocketBase + React + Tailwind
      </footer>

    </div>
  );
};

export default Layout;
