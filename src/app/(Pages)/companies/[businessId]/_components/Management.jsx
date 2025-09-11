// import React from 'react'
// import Image from 'next/image'

// function ManagementSection({management}) {
//   return (
//     <section id='team'>
//       <div className="grid md:grid-cols-3 gap-6">
//       {management.map((member)=>(
//          <div key={member.id} className=' shadow-lg  '>
//           <div className='p-4 flex flex-row gap-4'>
//         <div>
//            <Image
//              src="/random_profile.jpg"
//              width={100}
//              height={100}
//              alt="Picture of the author"
//              className='rounded-full'
//            />
//         </div>
//         <div>
//           <h3>
//             {member.name}
//           </h3>
//           <p>
//             {member.title}
//           </p>
//         </div>
//          </div>
//       </div>
//       ))}
      
//       </div>
//     </section>
//   )
// }

// export default ManagementSection


// import React from "react";
// import Image from "next/image";

// function ManagementSection({ management }) {
//   return (
//     <section id="team" className="py-12 px-6 ">
//       <h3 className="text-lg text-center p-4 font-bold">Our Team</h3>
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {management.map((member) => (
//           <div
//             key={member.id}
//             className="group relative overflow-hidden rounded-xl bg-[#8DD8FF] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//           >
//             {/* Card content */}
//             <div className="flex flex-col items-center p-6">
//               {/* Profile Image */}
//               <div className="relative h-24 w-24 mb-4">
//                 <Image
//                   src={member.image || "/random_profile.jpg"}
//                   alt={member.name}
//                   fill
//                   className="rounded-full object-cover border-4 border-gray-200"
//                 />
//               </div>

//               {/* Name + Title */}
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {member.name}
//               </h3>
//               <p className="text-sm text-gray-500">{member.title}</p>
//             </div>

//             {/* Social icons overlay */}
//             <div className="absolute inset-0 w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap  bg-black/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
            
//               {/* Facebook */}
//              <button className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
// <svg className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
//   <path
//     d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
//     fill="" />
// </svg>
// <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
// </button>

//               {/* Instagram */}
//               <button class="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white shadow-md shadow-gray-200 group transition-all duration-500">
// <svg className="fill-gray-900 relative z-10 transition-all duration-500 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 51 51" fill="none">
// <path
//   d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
//   fill="" />
// <path
//   d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
//   fill="" />
// <defs>
//   <radialGradient id="paint0_radial_7092_54404" cx="0" cy="0" r="1"
//     gradientUnits="userSpaceOnUse"
//     gradientTransform="translate(7.41436 51.017) scale(65.31 65.2708)">
//     <stop offset="0.09" stop-color="#FA8F21" />
//     <stop offset="0.78" stop-color="#D82D7E" />
//   </radialGradient>
//   <radialGradient id="paint1_radial_7092_54404" cx="0" cy="0" r="1"
//     gradientUnits="userSpaceOnUse"
//     gradientTransform="translate(31.1086 53.257) scale(51.4733 51.4424)">
//     <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0" />
//     <stop offset="1" stop-color="#8C3AAA" />
//   </radialGradient>
// </defs>
// </svg>
// <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
//            </button>

//            {/* whatsapp */}
//            <button class="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white shadow-md shadow-gray-200 group transition-all duration-300">
// <svg className="fill-black z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
// <path
//   d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
//   fill="" />
// </svg>
// <div className="absolute top-full left-0 w-full h-full rounded-full bg-black z-0 transition-all duration-500 group-hover:top-0"></div>
// </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ManagementSection;


"use client";
import React from "react";
import Image from "next/image";

function ManagementSection({ management }) {
  return (
    <section id="team" className="py-12 px-6">
      <h3 className="text-xl font-bold mb-4 text-center">Our Team</h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {management.map((member) => (
          <div
            key={member.id}
            className="group relative overflow-hidden rounded-xl bg-[#8DD8FF] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Card content */}
            <div className="flex flex-col items-center p-6">
              {/* Profile Image */}
              <div className="relative h-24 w-24 mb-4">
                <Image
                  src={member.image || "/random_profile.jpg"}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-4 border-gray-200"
                />
              </div>

              {/* Name + Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>

            {/* Social icons overlay */}
            <div className="absolute inset-0 w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap bg-black/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
              
              {/* Facebook */}
              <button className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                <svg
                  className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 72 72"
                  fill="none"
                >
                  <path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" />
                </svg>
                <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
              </button>

              {/* Instagram */}
              {/* <button className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white shadow-md shadow-gray-200 group transition-all duration-500">
                <svg
                  className="fill-gray-900 relative z-10 transition-all duration-500 group-hover:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 51 51"
                  fill="none"
                >
                  <path d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808Z" />
                </svg>
                <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
              </button> */}
              {/* Instagram */}
<button className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white shadow-md shadow-gray-200 group transition-all duration-500">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="relative z-10 fill-gray-900 transition-all duration-500 group-hover:fill-white"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 
    2.243 5 5 5h10c2.757 0 5-2.243 
    5-5V7c0-2.757-2.243-5-5-5H7zm10 
    2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 
    3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 
    1.346-3 3-3h10zm-5 3c-2.757 0-5 
    2.243-5 5s2.243 5 5 5 5-2.243 
    5-5-2.243-5-5-5zm0 2c1.654 0 3 
    1.346 3 3s-1.346 3-3 3-3-1.346-3-3 
    1.346-3 3-3zm4.5-2c-.828 0-1.5.672-1.5 
    1.5s.672 1.5 1.5 1.5 1.5-.672 
    1.5-1.5-.672-1.5-1.5-1.5z"/>
  </svg>

  <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
</button>


              {/* WhatsApp */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                <svg
                  className="fill-black z-10 transition-all duration-300 group-hover:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 72 72"
                  fill="none"
                >
                  <path d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568Z" />
                </svg>
                <div className="absolute top-full left-0 w-full h-full rounded-full bg-green-500 z-0 transition-all duration-500 group-hover:top-0"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ManagementSection;



