// src/app/page.tsx
//import Header from "../_components/Header";
"use client";
import Hero from "../_components/HeroSec";
import Features from "../_components/Features";
import FeaturedBusinesses from "../_components/BusinessList";
import HowItWorks from "../_components/HowItWorks";
import CallToAction from "../_components/CallToAction";
import MarketTicker from "../_components/MarketTicker";
// import { useUser } from "@clerk/nextjs";
// import { useEffect } from "react";

export default function HomePage() {



// const {  user, isLoaded } = useUser();

// // console.log("User is signed in:", user);


// useEffect(() => {
//     if (isLoaded) {
//       console.log("User is loaded:", user);
//     } else {
//       console.log("User is loading...");
//     }
//   }, [isLoaded, user]);

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }
// if (isSignedIn && user) {
//   console.log(user.publicMetadata?.role);
// }


  return (
    <main className=" relative">
      {/* <Header/> */}
      
      <Hero />
      <Features />
      <MarketTicker/>
      <FeaturedBusinesses/>
      <HowItWorks/>
      <CallToAction/>
    </main>
  );

}
