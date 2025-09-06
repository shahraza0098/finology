'use client'
import CompanyMissions from '../_components/StepMission'
import { Suspense } from 'react'
function CompanyMission() {

  return (
    <Suspense fallback={<div>Loading staff...</div>}>
    <div>
     <CompanyMissions />
    </div>
    </Suspense>
  )
}

export default CompanyMission
