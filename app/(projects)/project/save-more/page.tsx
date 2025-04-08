import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-bl from-[#60d4a4] to-black p-4 rounded-lg">
        SaveMore /{" "}
        <span className="text-[#60d4a4]">Personal Finance Tracker</span>
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-[300px] rounded-lg overflow-hidden relative">
          <Image
            src={"/project-7.png"}
            fill
            alt="SaveMore Screenshot"
            className="object-cover object-top"
          />
        </div>
        <div className="h-[300px] rounded-lg overflow-hidden relative">
          <Image
            src={"/project-6.png"}
            fill
            alt="SaveMore Screenshot"
            className="object-cover object-top"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-[#60d4a4]">Summary</h2>
      <p className="text-slate-300">
        SaveMore is a personal finance tracker designed to help users take
        control of their budgets, monitor spending habits, and categorize
        transactions efficiently. Built with Next.js, Supabase, Tailwind CSS,
        and ShadcnUI, this full-stack app enables real-time interaction and
        personalized tracking with a modern UI.
      </p>

      <h2 className="text-3xl font-bold text-[#60d4a4]">
        The Mission/Challenge
      </h2>
      <p className="text-slate-300">
        The mission of the SaveMore project was to empower users to build
        mindful spending habits by offering a simple yet powerful financial
        tracking platform. The biggest challenges were integrating user-level
        budget logic, providing dynamic filtering of data, and enabling seamless
        UX across devices.
      </p>

      <h2 className="text-3xl font-bold text-[#60d4a4]">The Process</h2>
      <span className="text-md">
        The development of SaveMore involved several key steps to ensure its
        success:
      </span>
      <ul className="list-disc list-inside text-slate-300">
        <li>Planning and Wireframing: User flows and UX structure</li>
        <li>
          Frontend: Page layouts, interactive components, and data displays
        </li>
        <li>Backend: Database schema setup and API integration via Supabase</li>
        <li>Testing: Budget constraint testing, empty state handling</li>
        <li>Deployment: Hosting on Vercel and Supabase</li>
        <li>
          Front-End: Chose Next.js for routing, server actions, and performance.
        </li>
        <li>
          Back-End: Selected Supabase for user authentication and real-time
          database sync.
        </li>
        <li>
          Styling: Used Tailwind CSS and ShadcnUI to maintain a consistent,
          responsive design.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#60d4a4]">
        Key Development Aspects:
      </h2>

      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Budget Management:
        </span>
        Users can define monthly budgets for different categories and track
        their remaining balance.
      </p>

      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Transaction Logging:
        </span>
        Add income or expense transactions manually with category, amount, and
        date inputs.
      </p>

      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Real-Time Sync:
        </span>
        Data updates instantly across the dashboard using Supabase’s real-time
        features.
      </p>

      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Authenticated Dashboard:
        </span>
        Users sign in to view private dashboards and manage only their own data.
      </p>

      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Responsive Design:
        </span>
        Fully responsive layout built with Tailwind CSS and ShadcnUI for
        consistency across devices.
      </p>

      <p className="text-slate-300">
        <span className="font-bold mr-1 text-[1rem] text-white">
          Cart Management:
        </span>
        Although not a traditional cart, the app uses a transaction list
        architecture similar to cart logic—add/remove/edit with a live summary
        of totals.
      </p>
    </div>
  );
};

export default page;
