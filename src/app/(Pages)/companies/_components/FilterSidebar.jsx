"use client";

import { Input } from "@/components/ui/input";

export default function FilterSidebar({ filters, setFilters }) {
  return (
    <div className="space-y-4  rounded-lg p-4 shadow-xl">
      <h2 className="font-semibold text-lg">Filter Companies</h2>

      <div className="mt-10 mb-10">
        <label className="block text-sm mb-1">Company</label>
        <Input
          value={filters.company || ""}
          onChange={(e) => setFilters({ ...filters, company: e.target.value })}
          placeholder="Search by name"
        />
      </div>

      <div className="mt-10 mb-10">
        <label className="block text-sm mb-1">Location</label>
        <Input
          value={filters.city || ""}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          placeholder="Enter city"
        />
      </div>

      <div className="mt-10 mb-10">
        <label className="block text-sm mb-1">Sector</label>
        <Input
          value={filters.sector || ""}
          onChange={(e) => setFilters({ ...filters, sector: e.target.value })}
          placeholder="E.g. Retail, Finance"
        />
      </div>
    </div>
  );
}
