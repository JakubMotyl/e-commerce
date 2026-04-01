# OWN – Minimalist E-commerce Store

**OWN.** is a modern, responsive e-commerce application built with **Next.js**, focusing on minimalist design for the beauty/skincare industry. The project demonstrates a complex architecture combining external data sources with a custom cloud database and persistent state management.

## Design Inspiration

The visual identity, layout, and minimalist aesthetic of this project were inspired by [ONSKIN](https://onskn.com/), a premium skincare brand. The goal was to recreate a high-end, clean user experience focusing on typography and whitespace.

## Live Demo

View the live project here: [OWN](https://e-commerce-delta-nine-14.vercel.app/)

---

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma 7
- **Styling:** Tailwind CSS
- **State Management:** Zustand + LocalStorage Persistence
- **External API:** DummyJSON (Product Catalog)

---

## ✨ Key Features & Architecture

### Hybrid Data Management

- **External Product Catalog:** All product data, including categories and descriptions, are fetched in real-time from the **DummyJSON API**.
- **Cloud Database (PostgreSQL):** Promotional logic and coupon validation are handled by a custom **Supabase** database.
- **Serverless Route Handlers:** The backend logic is built using **Next.js Route Handlers (API Routes)**, providing a secure bridge between the frontend and the database.

### Advanced State Management (Zustand)

The entire store logic is powered by **Zustand** with **LocalStorage persistence**:

- **Persistent Cart:** Products added to the bag remain there even after refreshing the page or closing the browser.
- **Store Logic:** Seamlessly handles adding/removing items, quantity updates, and calculating subtotals.
- **Dynamic Coupons:** Promotional codes are fetched via a custom API route (`/api/coupons`) and stored in the global state to apply discounts across the entire checkout process.

### Premium UX/UI

- **Responsive Design:** Fully optimized for all screen sizes with a custom mobile navigation and touch-friendly interface.
- **Interactive Filters:** Client-side sorting and filtering for immediate user feedback.

---

## Database Schema (Prisma)

The promotional system relies on a relational model to ensure data integrity:

```prisma
model Coupon {
  id       String @id @default(uuid())
  name     String @unique
  discount Int
}
```

---

## Local Installation

1. Clone the repository:

```bash
git clone https://github.com/JakubMotyl/e-commerce.git
cd e-commerce
```

2. Install dependencies:

```bash
npm install
```

3. Configure your `.env` file with your Supabase credentials:

```bash
# Used for Prisma Client (with pooling)
DATABASE_URL="postgresql://postgres:[PASSWORD]@aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Used for migrations/db push (direct connection)
# DIRECT_URL="postgresql://postgres:[PASSWORD]@aws-0-eu-west-1.pooler.supabase.com:5432/postgres"
```

4. Database Setup:

```bash
npx prisma db push
npx prisma generate
```

5. Run the development server:

```bash
npm run dev
```

---

## Deployment Note

To ensure the database client is correctly initialized during the Vercel build process, the following build script is used in `package.json`:

```json
"scripts": {
    "build": "prisma generate && next build"
}
```
