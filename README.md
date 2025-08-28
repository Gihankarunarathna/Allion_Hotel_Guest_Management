
# Hotel Guest Management

A modern web application to manage hotel guests. Built with **React + TypeScript + Tailwind CSS** for the frontend and **PocketBase** for the backend.

---

## Features

- Add, view, edit, and delete guests
- Display guest details:
  - First Name
  - Last Name
  - Email
  - Phone
  - Address
  - Date of Birth
- Modern responsive UI with tables and forms
- Total guests count and search functionality
- Header and Footer components

---

## Project Structure
client/
├─ src/
│ ├─ App.tsx
│ ├─ index.tsx
│ ├─ types.ts
│ ├─ lib/
│ │ ├─ pb.ts
│ │ └─ guests.ts
│ ├─ components/
│ │ ├─ Header.tsx
│ │ ├─ Footer.tsx
│ │ ├─ GuestForm.tsx
│ │ ├─ GuestTable.tsx
│ │ └─ Alert.tsx
│ └─ pages/
│ ├─ GuestsList.tsx
│ ├─ GuestDetail.tsx
│ └─ AddGuest.tsx
pb/
└─ data/ # PocketBase storage

---

## Prerequisites

- Node.js >= 18
- npm
- PocketBase (included in `pb/` folder)

---

## Backend Setup (PocketBase)

1. Open terminal and go to server folder:
   pocketbase.exe serve

   Admin credentials:

Email: gihanrandula1@gmail.com

Password: wgr8$orSC

``
Open PocketBase Admin UI:http://127.0.0.1:8090/_/

---

## Frontend Setup (React)
- cd client
- npm install
- npm run dev :Run frontend dev server
- http://127.0.0.1:8090/_/

  ---

  Site live at : https://gihankarunarathna.github.io/Allion_Hotel_Guest_Management/
