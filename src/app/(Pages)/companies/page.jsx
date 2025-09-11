// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import FilterSidebar from "./_components/FilterSidebar";
// import CompaniesList from "./_components/CompaniesList";
// import SortDropdown from "./_components/SortDropdown";

// export default function CompaniesPage() {
//   const [businesses, setBusinesses] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filters, setFilters] = useState({});
//   const [sortBy, setSortBy] = useState("latest");

//   useEffect(() => {
//     const fetchBusinesses = async () => {
//       try {
//         const res = await axios.get("/api/admin/business/listbusiness");
//         console.log("inspect respond object", res);
        
//         setBusinesses(res.data);
//         setFiltered(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching businesses", err);
//       }
//     };
//     fetchBusinesses();
//   }, []);

//   // Apply filters and sorting whenever filters/sort change
//   useEffect(() => {
//     let data = [...businesses];

//     if (filters.company) {
//       data = data.filter(biz =>
//         biz.name.toLowerCase().includes(filters.company.toLowerCase())
//       );
//     }
//     if (filters.city) {
//       data = data.filter(biz =>
//         biz.city?.toLowerCase().includes(filters.city.toLowerCase())
//       );
//     }
//     if (filters.sector) {
//       data = data.filter(biz =>
//         biz.sector?.toLowerCase().includes(filters.sector.toLowerCase())
//       );
//     }

//     if (sortBy === "latest") {
//       data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     } else if (sortBy === "revenue") {
//       data.sort(
//         (a, b) =>
//           (b.financials?.[0]?.revenue || 0) -
//           (a.financials?.[0]?.revenue || 0)
//       );
//     } else if (sortBy === "sharePrice") {
//       data.sort((a, b) => (b.sharePrice || 0) - (a.sharePrice || 0));
//     }

//     setFiltered(data);
//   }, [filters, sortBy, businesses]);

//   if (loading) return <div className="flex items-center justify-center h-screen"><span className="loader"></span></div>;

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       {/* Sidebar Filters */}
//       <div className="w-full lg:w-1/4">
//         <FilterSidebar filters={filters} setFilters={setFilters} />
//       </div>

//       {/* Main content */}
//       <div className="flex-1">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-heading text-[#4E71FF] font-bold">
//             Explore Businesses 
//           </h1>
//           <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
//         </div>

//         <CompaniesList businesses={filtered} />
//       </div>
//     </div>
//   );
// }



//with dialog box

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import FilterSidebar from "./_components/FilterSidebar";
import CompaniesList from "./_components/CompaniesList";
import SortDropdown from "./_components/SortDropdown";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function CompaniesPage() {
  const [businesses, setBusinesses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await axios.get("/api/admin/business/listbusiness");
        console.log("inspect respond object", res.data);
        
        setBusinesses(res.data);
        setFiltered(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching businesses", err);
      }
    };
    fetchBusinesses();
  }, []);

  // Apply filters + sorting
  useEffect(() => {
    let data = [...businesses];

    if (filters.company) {
      data = data.filter((biz) =>
        biz.name.toLowerCase().includes(filters.company.toLowerCase())
      );
    }
    if (filters.city) {
      data = data.filter((biz) =>
        biz.city?.toLowerCase().includes(filters.city.toLowerCase())
      );
    }
    if (filters.sector) {
      data = data.filter((biz) =>
        biz.sector?.toLowerCase().includes(filters.sector.toLowerCase())
      );
    }

    if (sortBy === "latest") {
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === "revenue") {
      data.sort(
        (a, b) =>
          (b.financials?.[0]?.revenue || 0) -
          (a.financials?.[0]?.revenue || 0)
      );
    } else if (sortBy === "sharePrice") {
      data.sort((a, b) => (b.sharePrice || 0) - (a.sharePrice || 0));
    }

    setFiltered(data);
  }, [filters, sortBy, businesses]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    );

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Sidebar Filters (hidden on mobile, visible on lg+) */}
      <div className="hidden lg:block w-full lg:w-1/4">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </div>

      {/* Main content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-heading text-[#4E71FF] font-bold">
            Explore Businesses
          </h1>

          <div className="flex gap-3">
            {/* Mobile Filter Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="lg:hidden flex items-center gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Filter Businesses</DialogTitle>
                </DialogHeader>
                <FilterSidebar filters={filters} setFilters={setFilters} />
              </DialogContent>
            </Dialog>

            {/* Sorting always visible */}
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>

        <CompaniesList businesses={filtered} />
      </div>
    </div>
  );
}

