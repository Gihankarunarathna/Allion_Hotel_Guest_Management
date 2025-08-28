import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GuestsList from "./pages/GuestsList";
import GuestDetail from "./pages/GuestDetail";
import AddGuest from "./pages/AddGuest";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/guests" />} />
            <Route path="/guests" element={<GuestsList />} />
            <Route path="/guests/:id" element={<GuestDetail />} />
            <Route path="/add" element={<AddGuest />} />
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-indigo-700 text-white py-4 text-center">
          © 2025 Hotel Guest Management. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
