import { useCallback } from 'react'

import Form from '@/components/signin/Form'
import { FormValues } from '@/models/signin'

function SigninPage() {
  const handleSubmit = useCallback((formValues: FormValues) => {
    console.log('값', formValues)
  }, [])

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SigninPage
