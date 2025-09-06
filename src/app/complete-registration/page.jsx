
import Layout from "./layout"

async function CompleteRegistration({searchParams}) {

  const params = await searchParams   // ✅ await the whole thing
  const businessId = params.businessId
  return (
    <Layout businessId={businessId}>
    <div className='h-screen flex flex-col justify-center items-center'>
      
      <div>hello</div>
      <div>hello</div>
    </div>
    </Layout>
  )
}

export default CompleteRegistration
