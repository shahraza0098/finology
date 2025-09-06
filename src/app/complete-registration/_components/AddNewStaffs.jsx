"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/UI/button"

import { UserPlus, BriefcaseBusiness  } from "lucide-react"
import AddNewStaffForm from "./AddStaffForm"
import axios from "axios"


function AddStaff({businessId}) {
 
  if (!businessId) {
    return <div>Loading.......for business</div>
  }

  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {
    // Fetch existing staff members from the API
    const fetchStaffMembers = async () => {
      try {
        const response = await axios.get(
          `/api/admin/business/${businessId}/complete-registration/add-staffs`
        )
        console.log("Existing staff members:", response.data.management)
        setTeamMembers(response.data.management)
      } catch (error) {
        console.error("Error fetching staff members:", error)
      }
    }

    fetchStaffMembers()
  }, [businessId])

  const [open, setOpen] = useState(false)

  return (
    
   
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-xl font-semibold">Team Members</h1>

      {/* Circle avatars grid */}
      <div className="flex flex-wrap gap-6 justify-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 flex flex-col items-center justify-center text-center shadow-lg p-2"
          >
            <span className="font-bold text-sm text-gray-900 truncate">
              {member.name}
            </span>
            
            <div className="flex items-center gap-1 text-xs text-gray-700 mt-1">
              <BriefcaseBusiness className="w-4 h-4" />
              <span className="truncate">{member.title}</span>
            </div>
          </div>
        ))}

        {/* Add New Member Circle */}
        <Button
          className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
          onClick={() => setOpen(true)}
        >
          <UserPlus className="text-gray-600 w-8 h-8" />
        </Button>
      </div>

      {/* Conditionally render popup */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <AddNewStaffForm businessId={businessId} />
            <Button className="mt-4 w-full" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
   
    
  )
}

export default AddStaff