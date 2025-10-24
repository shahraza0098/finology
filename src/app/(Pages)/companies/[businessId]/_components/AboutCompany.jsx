// import Image from "next/image";
// import { Mail, Phone, Globe, MapPin } from "lucide-react";


// export default function AboutSection({ business }) {
//   return (
//     <section
//       id="overview"
//       className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
//     >
//       <div className="flex justify-between items-start gap-6">
//         {/* Left Section */}
//         <div className="flex-1">
//           {/* <h2 className="text-lg font-semibold text-gray-800">
//             About {business.name}
//           </h2> */}
//           <h1 className="text-2xl font-bold text-gray-800">{business.name}</h1>
//           <p className="font-semibold text-gray-700">
//             Share Price: ₹{business.sharePrice}
//           </p>

//           {/* Buy/Sell Buttons */}
//           <div className="flex gap-2 mt-2">
//             <button className="btn btn-success btn-sm">Buy</button>
//             <button className="btn btn-error btn-sm">Sell</button>
//           </div>

//           {/* Description */}
//           <p className="mt-4 font-alice text-gray-800 leading-relaxed">
//             {business.description}
//           </p>

//           {/* Contact Info */}
//           <div className="mt-4 space-y-2 text-sm text-gray-800">
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4 text-gray-800" />
//               <span>{business.email}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4 text-gray-800" />
//               <span>{business.phone}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Globe className="w-4 h-4 text-gray-800" />
//               <a
//                 href={business.website}
//                 target="_blank"
//                 className="text-blue-500 hover:underline"
//               >
//                 {business.website}
//               </a>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="w-4 h-4 text-gray-800" />
//               <span>
//                 {business.streetLine1}, {business.city}, {business.state},{" "}
//                 {business.country}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section (Logo) */}
//         <div className="flex-shrink-0">
//           {business.logoUrl ? (
//             <Image
//               src={business.logoUrl}
//               alt={business.name}
//               width={100}
//               height={100}
//               className="rounded-lg border object-cover"
//             />
//           ) : (
//             <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-lg text-xl font-bold">
//               {business.name.charAt(0)}
//             </div>
//           )}
//         </div>
//       </div>
//        {/* Social Icons (bottom-right inside card) */}
     
//     </section>
//   );
// }


// //for social icon




// import { useState } from "react";
// import Image from "next/image";



// export default function AboutSection({ business }) {

//     const [expanded, setExpanded] = useState(false);

//   const aboutText = business.description || "";
//   const shortText =
//     aboutText.length > 150 ? aboutText.substring(0, 150) + "..." : aboutText;

//   console.log("hey this is business", business);
  
//   return (
//     <section
//       id="overview"
//       className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
//     >
//       <div className="flex flex-row">
//         {/* right side */}
//         <div className="w-2/3 flex flex-col gap-4">
//           {/*Logo+ Heading+price+buysell button */}
//           <div className="flex flex-row gap-6">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//           {business.logoUrl ? (
//             <Image
//               src={business.logoUrl}
//               alt={business.name}
//               width={100}
//               height={100}
//               className="rounded-lg border object-cover"
//             />
//           ) : (
//             <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-lg text-xl font-bold">
//               {business.name.charAt(0)}
//             </div>
//           )}
//         </div>
//         {/* Heading+price+buysell button */}
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">{business.name}</h1>
//           <p className="font-semibold text-gray-700">
//             Share Price: ₹{business.sharePrice}
//           </p>

//           {/* Buy/Sell Buttons */}
//           <div className="flex gap-2 mt-2">
//             <button className="btn btn-success btn-sm">Buy</button>
//             <button className="btn btn-error btn-sm">Sell</button>
//           </div>
//         </div>
        

//           </div>
//           {/* financial metrics */}
//           <div className="border border-gray-400 rounded-md">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-6 text-sm">
//         <Metric label="Market Cap" value="₹11,33,692 Cr." />
//         <Metric label="Revenue" value={`₹${business?.financials[0].revenue || "-"}`} />
//         <Metric label="profitMargin" value={`₹${business?.financials[0].profitMargin || "₹5000"}`} />
//         <Metric label="profitMargin" value={`₹${business?.financials[0].profitMargin || "₹2700"}`} />
//         <Metric label="ebitda" value={`₹${business?.financials[0].profitMargin || "1.43%"}`} />
//         <Metric label="ROI" value="64.6%" />
//         <Metric label="netProfit" value={`₹${business?.financials[0].netProfit || "52.4%"}`} />
//         <Metric label="Face Value" value="₹1.00" />
//       </div>
//           </div>
//         </div>

//         {/* left side */}
//         <div className="w-1/3 ">
//           {/* social icon */}
//           <div>

//           </div>
//           {/* company description */}
//             <div className="mt-6">
//         <h3 className="text-sm font-semibold text-gray-700">ABOUT</h3>
//         <p className="text-gray-600 text-sm mt-1 leading-relaxed">
//           {expanded ? aboutText : shortText}
//         </p>
//         {aboutText.length > 150 && (
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-blue-500 hover:underline text-sm mt-1"
//           >
//             {expanded ? "Show less" : "Read more"}
//           </button>
//         )}
//       </div>
//           {/* Achievements */}
//           <div>
//             <h3 className="font-bold mb-2">Key Achievements</h3>
//           <p className="small">{business.achievements}</p>
//           </div>
//         </div>
//       </div>
     
//     </section>
//   );
// }


// /* Reusable Metric Box */
// function Metric({ label, value }) {
//   return (
//     <div className="bg-gray-50  px-3 py-2">
//       <span className="text-xs text-gray-500">{label}</span>
//       <span className="text-sm font-semibold text-gray-800">{value}</span>
//     </div>
//   );
// }


// //for social icon


import { useState } from "react";
import { Instagram,Mail, Phone, Globe, MapPin} from 'lucide-react';
import Image from "next/image";

export default function AboutSection({ business }) {
  const [expanded, setExpanded] = useState(false);

  const aboutText = business.description || "";
  const shortText =
    aboutText.length > 150 ? aboutText.substring(0, 150) + "..." : aboutText;

  return (
    <section
      id="overview"
      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 mb-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Logo + Info + Financial Metrics */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Logo + Heading + Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              {business.logoUrl ? (
                <Image
                  src={business.logoUrl}
                  alt={business.name}
                  width={100}
                  height={100}
                  className="rounded-lg border object-cover"
                />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-lg text-2xl font-bold text-gray-700">
                  {business.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Name + Price + Buttons */}
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                {business.name}
              </h1>
              <p className="font-semibold text-gray-700 mt-1">
                Share Price:{" "}
                <span className="text-green-600">₹{business.sharePrice}</span>
              </p>

              <div className="flex gap-3 mt-3">
                <button className="px-5 py-2 text-sm font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Buy
                </button>
                <button className="px-5 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  Sell
                </button>
              </div>
            </div>
          </div>

          {/* Financial Metrics (Outer border only) */}
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
              <Metric label="Market Cap" value="₹11,33,692 Cr." />
              <Metric
                label="Revenue"
                value={`₹${business?.financials[0]?.revenue || "-"}`}
              />
              <Metric
                label="Profit Margin"
                value={`${business?.financials[0]?.profitMargin || "5.4%"}%`}
              />
              <Metric
                label="EBITDA"
                value={`${business?.financials[0]?.ebitda || "1.43%"}%`}
              />
              <Metric label="ROI" value="64.6%" />
              <Metric
                label="Net Profit"
                value={`₹${business?.financials[0]?.netProfit || "-"}`}
              />
              <Metric label="Face Value" value="₹1.00" />
            </div>
          </div>

          {/* About + Achievements (mobile below metrics) */}
          <div className="flex flex-col gap-6 lg:hidden">
            
            <AboutAndAchievements
              aboutText={aboutText}
              shortText={shortText}
              expanded={expanded}
              setExpanded={setExpanded}
              achievements={business.achievements}
            />
            <div className="flex flex-row  gap-5">
      {/* Instagram */}
      <Instagram className="w-6 h-6 cursor-pointer text-pink-500 hover:text-pink-600 transition" />

      {/* Mail */}
      <Mail className="w-6 h- cursor-pointer text-red-500 hover:text-red-600 transition" />

      {/* Phone */}
      <Phone className="w-6 h-6 cursor-pointer text-green-500 hover:text-green-600 transition" />

      {/* Website / Globe */}
      <Globe className="w-6 h-6 cursor-pointer text-blue-500 hover:text-blue-600 transition" />

      {/* Location / Map */}
      <MapPin className="w-6 h-6 cursor-pointer text-purple-500 hover:text-purple-600 transition" />
    </div>
          </div>
        </div>

        {/* Right: About + Achievements (desktop only) */}
        <div className="hidden lg:flex flex-col gap-6">
        <div className="flex flex-row gap-5">
      {/* Instagram */}
      <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-600 transition" />

      {/* Mail */}
      <Mail className="w-6 h-6 text-red-500 hover:text-red-600 transition" />

      {/* Phone */}
      <Phone className="w-6 h-6 text-green-500 hover:text-green-600 transition" />

      {/* Website / Globe */}
      <Globe className="w-6 h-6 text-blue-500 hover:text-blue-600 transition" />

      {/* Location / Map */}
      <MapPin className="w-6 h-6 text-purple-500 hover:text-purple-600 transition" />
    </div>
          <AboutAndAchievements
            aboutText={aboutText}
            shortText={shortText}
            expanded={expanded}
            setExpanded={setExpanded}
            achievements={business.achievements}
          />
        </div>
      </div>
    </section>
  );
}

/* Reusable Metric Line */
function Metric({ label, value }) {
  return (
    <div className="bg-gray-100 rounded-md ">
      <div className="flex justify-between p-4 items-center text-sm">
        <span className="text-gray-600 font-medium">{label}</span>
      <span className="text-gray-900 font-semibold">{value}</span>
      </div>
      
    </div>
  );
}

/* About + Achievements extracted */
function AboutAndAchievements({ aboutText, shortText, expanded, setExpanded, achievements }) {
  return (
    <>
      {/* About */}
      <div>
        <h3 className="text-base font-bold text-gray-700 mb-2">ABOUT</h3>
        <p className="text-gray-600 text-m leading-relaxed">
          {expanded ? aboutText : shortText}
        </p>
        {aboutText.length > 150 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-400 hover:underline text-sm mt-2 font-medium"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-2">
          KEY ACHIEVEMENTS
        </h3>
        <p className="text-gray-600 text-m leading-relaxed">
          {achievements || "No achievements listed yet."}
        </p>
      </div>
    </>
  );
}









