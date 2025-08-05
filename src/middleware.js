import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { auth, clerkClient } from "@clerk/nextjs/server";

//import auth

// import { currentUser } from '@clerk/nextjs/server'


const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)'
])


const isAdminRoute = createRouteMatcher([
  '/admin(.*)',
]);


  

export default clerkMiddleware(async (auth, req) => {


//   const { userId } = await auth();
// const client = await clerkClient()

//   // Use the Backend SDK's `getUser()` method to get the Backend User object
//   const user = await client.users.getUser(userId)

//   const userRole=user.publicMetadata?.role

//   console.log("middleware User role:", user.publicMetadata?.role);
    

  if (!isPublicRoute(req)) {
   // console.log(  "Current User coming from middleware:", auth.userId ? auth.userId : 'No user signed in');
    
    await auth.protect()
  }

  // if (  isAdminRoute(req) &&  !userRole=='admin') {
  //   return new Response('Unauthorized', { status: 401 })

  // }

})




export const config = {
  matcher: ['/',
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}