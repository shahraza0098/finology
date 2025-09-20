// 'use client';

// import { usePathname } from "next/navigation";
// import Header from "./Header";


//  const hiddenRoutes = ["/sign-in", "/sign-up", "/onboarding",]; // Add others as needed



// export default function HeaderVisibility() {
//   const pathname = usePathname();

//   const shouldHide = hiddenRoutes.some(route => pathname.startsWith(route));

//   if (shouldHide) return null;

//   return <Header />;
// }



//new code

'use client';

import { usePathname } from "next/navigation";

import Footer from "./Footer";



const hiddenRoutes = [
  /^\/sign-in$/,
  /^\/sign-up$/,
  /^\/onboarding$/,
  /^\/admin(\/.*)?$/,           // Matches /admin and any nested path like /admin/users
  /^\/add-business(\/.*)?$/,    // Matches /add-business and any nested
  /^\/complete-registration(\/.*)?$/,  // Matches /complete-registration and any nested
  /^\/investor-dashboard(\/.*)?$/,
];

export default function FooterVisibility() {
  const pathname = usePathname();

  const shouldHide = hiddenRoutes.some(routeRegex => routeRegex.test(pathname));

  if (shouldHide) return null;

  return <Footer/>;
}
