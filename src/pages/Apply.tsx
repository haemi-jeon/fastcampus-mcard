import { useState } from 'react'

import Apply from '@/components/apply'

function ApplyPage() {
  const [step, setStep] = useState(2)

  const handleSubmit = () => {
    //
  }

  return <Apply step={step} onSubmit={handleSubmit} />
}

export default ApplyPage
