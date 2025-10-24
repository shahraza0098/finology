// "use client";

// import { useEffect, useState } from "react";
// import { Loader2, TrendingUp, Building2, Users2, Wallet2, Star, Activity } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import AddNewBusiness from "../admin/_components/AddNewBusiness";

// export default function AdminDashboardPage() {
//   const [metrics, setMetrics] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchMetrics() {
//       try {
//         const res = await fetch("/api/admin/dashboard");
//         const json = await res.json();
//         if (json.success) setMetrics(json.data);
//       } catch (err) {
//         console.error("Error loading dashboard metrics:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchMetrics();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex items-center justify-center min-h-screen text-gray-500">
//         <Loader2 className="animate-spin mr-2 h-6 w-6 text-indigo-500" />
//         Loading dashboard...
//       </div>
//     );

//   if (!metrics)
//     return <p className="text-center text-gray-500 mt-10">No metrics found.</p>;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100/60 to-indigo-50 p-10">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">
//           Admin Dashboard
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           <MetricCard
//             title="Total Businesses"
//             value={metrics.totalBusinesses}
//             icon={<Building2 className="h-6 w-6 text-blue-600" />}
//           />
//           <MetricCard
//             title="Completed Profiles"
//             value={metrics.completedBusinesses}
//             icon={<Activity className="h-6 w-6 text-green-600" />}
//           />
//           <MetricCard
//             title="Total Investors"
//             value={metrics.totalInvestors}
//             icon={<Users2 className="h-6 w-6 text-purple-600" />}
//           />
//           <MetricCard
//             title="Active Shares"
//             value={metrics.activeShares}
//             icon={<Wallet2 className="h-6 w-6 text-indigo-600" />}
//           />
//           <MetricCard
//             title="Listed for Sale"
//             value={metrics.listedShares}
//             icon={<TrendingUp className="h-6 w-6 text-teal-600" />}
//           />
//           <MetricCard
//             title="Transactions"
//             value={metrics.totalTransactions}
//             icon={<Activity className="h-6 w-6 text-orange-600" />}
//           />
//           <MetricCard
//             title="Total Investment (₹)"
//             value={metrics.totalInvestment.toLocaleString()}
//             icon={<Wallet2 className="h-6 w-6 text-emerald-600" />}
//           />
//           <MetricCard
//             title="Avg. Rating"
//             value={`${metrics.avgRating.toFixed(1)} ⭐`}
//             icon={<Star className="h-6 w-6 text-yellow-500" />}
//           />
//         </div>
//       </div>
//       <div>
//         <AddNewBusiness />
//       </div>
//     </div>
//   );
// }

// function MetricCard({ title, value, icon }) {
//   return (
//     <Card className="bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//       <CardHeader className="flex items-center justify-between pb-2">
//         <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
//         {icon}
//       </CardHeader>
//       <CardContent>
//         <p className="text-4xl font-bold text-gray-900">{value}</p>
//       </CardContent>
//     </Card>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import {
  Loader2,
  TrendingUp,
  Building2,
  Users2,
  Wallet2,
  Star,
  Activity,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AddNewBusiness from "../admin/_components/AddNewBusiness";

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const res = await fetch("/api/admin/dashboard");
        const json = await res.json();
        if (json.success) setMetrics(json.data);
      } catch (err) {
        console.error("Error loading dashboard metrics:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        <Loader2 className="animate-spin mr-2 h-6 w-6 text-indigo-500" />
        Loading dashboard...
      </div>
    );
  }

  if (!metrics) {
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">
        No metrics found.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-2 md:mt-0">
            System overview and insights
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Businesses"
            value={metrics.totalBusinesses}
            icon={<Building2 className="h-6 w-6 text-blue-600" />}
            accent="from-indigo-500 to-blue-500"
          />
          <MetricCard
            title="Completed Profiles"
            value={metrics.completedBusinesses}
            icon={<Activity className="h-6 w-6 text-green-600" />}
            accent="from-green-500 to-emerald-400"
          />
          <MetricCard
            title="Total Investors"
            value={metrics.totalInvestors}
            icon={<Users2 className="h-6 w-6 text-purple-600" />}
            accent="from-violet-500 to-purple-500"
          />
          <MetricCard
            title="Active Shares"
            value={metrics.activeShares}
            icon={<Wallet2 className="h-6 w-6 text-indigo-600" />}
            accent="from-amber-400 to-yellow-500"
          />
          <MetricCard
            title="Listed for Sale"
            value={metrics.listedShares}
            icon={<TrendingUp className="h-6 w-6 text-teal-600" />}
            accent="from-sky-500 to-cyan-400"
          />
          <MetricCard
            title="Transactions"
            value={metrics.totalTransactions}
            icon={<Activity className="h-6 w-6 text-orange-600" />}
            accent="from-pink-500 to-rose-400"
          />
          <MetricCard
            title="Total Investment (₹)"
            value={metrics.totalInvestment.toLocaleString()}
            icon={<Wallet2 className="h-6 w-6 text-emerald-600" />}
            accent="from-blue-500 to-indigo-400"
          />
          <MetricCard
            title="Avg. Rating"
            value={`${metrics.avgRating.toFixed(1)} ⭐`}
            icon={<Star className="h-6 w-6 text-yellow-500" />}
            accent="from-orange-500 to-amber-400"
          />
        </section>

        <AddNewBusiness />
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon, accent }) {
  return (
    <Card className="relative bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Accent bake */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-10`} />
      <CardHeader className="relative z-10 flex items-center justify-between pb-2 px-4 pt-4">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="relative z-10 px-4 pb-4">
        <p className="text-3xl sm:text-4xl font-bold text-gray-900">{value}</p>
      </CardContent>
    </Card>
  );
}
