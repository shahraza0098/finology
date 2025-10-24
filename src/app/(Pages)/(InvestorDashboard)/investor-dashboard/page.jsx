"use client"
import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/nextjs";
import { useAuth } from "@/context/AuthContext";
import axios from "axios"
import PortfolioMetricsCard from '../_components/PortfolioMetricsCard';
import DashboardMetricsCard from './_components/MetricsCard';
import DonutChart from './_components/DonutChart';
import BasicLineChart from './_components/LineChart';
import InvestmentCalculatorDialog from '@/components/InvestmentCalculator';
import { Pointer } from 'lucide-react';


function Dashboard() {

    const [data, setData]=useState({})
    const [portfolio, setPortfolio]=useState(null)
    const [transaction,setTransaction]=useState([])
    const {  dbUser } = useAuth();
    const userId=dbUser?.id
    console.log("db user ID", userId);
    


    const { isSignedIn, user, isLoaded } = useUser();
    console.log("inspect user object", user)

  //  useEffect( ()=>{
  //    const fetchUserInvestment=async()=>{
  //       const user=await axios.get(`/api/investor/dashboard/${userId}`)
  //       setdata(user.data)
  //       setPortfolio(user.data.portfolio)
  //       setTransaction(user.data.transaction)
  //   }    

  //   fetchUserInvestment();
  //   },[user,isLoaded,dbUser])
  useEffect(() => {
  const fetchUserInvestment = async () => {
    try {
      if (!dbUser?.id) return; // ✅ wait until dbUser is ready

      const res = await axios.get(`/api/investor/dashboard/${dbUser.id}`);
      setData(res.data);
      setPortfolio(res.data.portfolio);
      setTransaction(res.data.transaction);
    } catch (err) {
      console.error("Failed to fetch investments", err);
    }
  };

  fetchUserInvestment();
}, [dbUser]);

    console.log("this is the data",data);
    

    // useEffect(async ()=>{

    // },[dbUser])






  if (!isLoaded || !dbUser || !user || !data) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page</div>;
  }


  console.log("dbuser fetch",dbUser);
  
  // return (
  //   <div>
  //       <div className='flex flex-col gap-5'>
  //           <div>
  //           <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
  //               Welcome to Investor Dashboard, <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  //                {user.username}
  //               </span>!
  //           </h1>
  //           <p className="text-gray-600 text-sm md:text-base leading-relaxed">
  //             Happy to see you again. Get updates on your assets today — good luck!
  //           </p>
  //           </div>
  //           {/* for profit, top stock, number of business invested in  */}
  //           <div>
  //             <DashboardMetricsCard portfolioTransaction={portfolio} />
             
  //           </div>

  //           {/* charts and graphs */}

  //           <div className='flex flex-row gap-5'>
  //             <div>
  //               <DonutChart portfolio={portfolio} />
  //             </div>
  //             <div>
  //               <BasicLineChart transaction={transaction} />
  //             </div>
  //           </div>

  //           {/* investment plan caluclator */}
  //           <div>
  //             <div>
  //               <h2>Calculate your investment</h2>
  //               <p>click here to know your investment</p>
  //               <InvestmentCalculatorDialog />
  //             </div>
  //           </div>
  //       </div>
      
  //   </div>
  // )

  return (
  <div className=" bg-gray-50 min-h-screen">
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Welcome to Investor Dashboard,{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {user.username}
          </span>
          !
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Happy to see you again 👋. Get updates on your assets today — good luck!
        </p>
      </header>

      {/* Metrics */}
      <section>
        <DashboardMetricsCard portfolioTransaction={portfolio} />
      </section>

      {/* Charts */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Portfolio Distribution
          </h2>
          <DonutChart portfolio={portfolio} />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Investment Over Time
          </h2>
          <BasicLineChart transaction={transaction} />
        </div>
      </section>

      {/* Calculator */}
      <section className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6 shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Calculate Your Investment
        </h2>
        <p className="text-gray-600 mb-4">
          Plan your future growth with our investment calculator.
        </p>
        <InvestmentCalculatorDialog  />
      </section>
    </div>
  </div>
);

}

export default Dashboard
