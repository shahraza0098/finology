import { useUser } from '@clerk/nextjs';

import { UserButton } from '@clerk/nextjs'



function ConditionalUserButton() {

    const { user, isLoaded } = useUser()

if(!user || !isLoaded){
  return <div>loading...</div>
}
  return (
    <div>
      <div>
          {user?<div className='className="text-sm font-semibold hover:text-indigo-400'><UserButton/></div>:<Link href="#" className='className="text-sm font-semibold hover:text-indigo-400'>Log in</Link>}
          
          {/* <a href="#" className="text-sm font-semibold hover:text-indigo-400">Log in <span aria-hidden="true">→</span></a> */}
        </div>
    </div>
  )
}

export default ConditionalUserButton
