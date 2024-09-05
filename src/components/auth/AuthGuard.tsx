import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/remote/firebase'

// 인증처리
function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState(false)

  onAuthStateChanged(auth, (user) => {
    console.log(user)
    setInitialize(true)
  })

  if (initialize === false) {
    return <div>인증 처리중...</div>
  }

  return <>{children}</>
}

export default AuthGuard
