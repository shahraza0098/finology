"use client";

export default function SortDropdown({ sortBy, setSortBy }) {
  return (
    <select
      className="border rounded px-3 py-1 text-sm"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="latest">Latest Added</option>
      <option value="revenue">Revenue</option>
      <option value="sharePrice">Share Price</option>
    </select>
  );
}
