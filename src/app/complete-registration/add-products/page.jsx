import AddNewProduct from "../_components/AddNewProduct";


export default async function AddStaffPage({searchParams}) {
  const params = await searchParams   // ✅ await the whole thing
  const businessId = params.businessId
  console.log("the search param", businessId);


  if (!businessId) {
    return <div>Loading.......for staffs</div>
  }
  
  
 
  return (
    
      <AddNewProduct businessId={businessId}/>
    
  )
}



