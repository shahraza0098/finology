
import CompanyMissions from '../_components/StepMission'

async function CompanyMission({searchParams}) {
    const params = await searchParams   
    const businessId = params.businessId

    if (!businessId) {
    return <div>Loading.......for mission</div>
  }

  return (
    
    <div>
     <CompanyMissions businessId={businessId} />
    </div>
    
  )
}

export default CompanyMission
