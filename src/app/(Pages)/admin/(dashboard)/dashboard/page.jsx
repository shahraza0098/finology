
"use client"
import React from 'react'

import { useUser } from "@clerk/nextjs";

function AmdinDashboard() {


  const { user, isLoaded } = useUser();

  const userRole=user?.publicMetadata?.role

  if(userRole !== 'admin') {
    return <div>You do not have permission to view this page.</div>
  }


  if(!isLoaded || !user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  )
}

export default AmdinDashboard
