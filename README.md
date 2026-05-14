# OWN – Minimalist E-commerce Store

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-%2320232a.svg?logo=react&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

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
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **State Management:** Zustand + LocalStorage Persistence
- **External API:** DummyJSON (Product Catalog)
- **Testing:** Vitest

---

## ✨ Key Features & Architecture

### Hybrid Data Management

- **External Product Catalog:** All product data, including categories and descriptions, are fetched in real-time from the **DummyJSON API**.
- **Cloud Database (PostgreSQL):** Promotional logic and coupon validation are handled by a custom **Supabase** database.
- **Serverless Route Handlers:** The backend logic is built using **Next.js Route Handlers (API Routes)**, providing a secure bridge between the frontend and the database.
- **Complete Checkout Flow:** Features strict client-side form validation, database insertion via Prisma, generating unique order numbers, and dynamic routing to a success page.

### Advanced State Management (Zustand)

The entire store logic is powered by **Zustand** with **LocalStorage persistence**:

- **Persistent Cart:** Products added to the bag remain there even after refreshing the page or closing the browser.
- **Store Logic:** Seamlessly handles adding/removing items, quantity updates, and calculating subtotals.
- **Lifecycle Management:** Securely clears the global state and local storage upon successful order verification.

### Premium UX & Accessibility (A11y)

- **Accessibility-First Approach:** Fully semantic HTML architecture with deep integration of ARIA attributes (`aria-invalid`, `aria-describedby`, `aria-label`).
- **Responsive Design:** Fully optimized for all screen sizes with a custom mobile navigation and touch-friendly interface.
- **Interactive Filters:** Client-side sorting and filtering for immediate user feedback.

---

## Database Schema (Prisma)

The promotional system relies on a relational model to ensure data integrity and secure order storage:

```prisma
model Coupon {
  id       String @id @default(uuid())
  name     String @unique
  discount Int
}

model Order {
  id          String   @id @default(uuid())
  orderNumber Int      @unique @default(autoincrement())
  firstName   String
  lastName    String
  email       String
  address     String
  apartment   String?
  city        String
  postalCode  String
  price       Int      // Stored in cents (e.g. 5497 = $54.97)
  createdAt   DateTime @default(now())
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

## Testing

This project includes a unit testing setup to ensure the reliability of core business logic.

### Testing Strategies

- **Zustand State:** Tests for the global state (`useCartStore`). The store is reset before each test suite to prevent state leaks between tests.
- **API Mocking:** The global `fetch` API is mocked to simulate both successful data fetching and failure scenario.

Execute the test suite:

```bash
npm run test
```

---

## Deployment Note

To ensure the database client is correctly initialized during the Vercel build process, the following build script is used in `package.json`:

```json
"scripts": {
    "build": "prisma generate && next build"
}
```
