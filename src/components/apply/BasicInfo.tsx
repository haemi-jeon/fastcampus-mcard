import { ChangeEvent, useCallback, useState } from 'react'

import { 결제일옵션, 신용점수옵션, 연소득옵션 } from '@/constants/apply'
import { ApplyValues } from '@/models/apply'
import Select from '@shared/Select'
import FixedBottomButton from '@shared/FixedBottomButton'

type InfoValues = Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>

function BasicInfo({ onNext }: { onNext: (infoValues: InfoValues) => void }) {
  const [infoValues, setInfoValues] = useState<InfoValues>({
    salary: '',
    creditScore: '',
    payDate: '',
  })

  const handleInfoChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setInfoValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const 모든조건이선택되었는가 = Object.values(infoValues).every(
    (value) => value,
  )

  return (
    <div>
      <Select
        label="연소득"
        name="salary"
        options={연소득옵션}
        placeholder={연소득옵션[0].label}
        value={infoValues.salary}
        onChange={handleInfoChange}
      />
      <Select
        label="신용점수"
        name="creditScore"
        options={신용점수옵션}
        placeholder={신용점수옵션[0].label}
        value={infoValues.creditScore}
        onChange={handleInfoChange}
      />
      <Select
        label="결제일"
        name="payDate"
        options={결제일옵션}
        placeholder={결제일옵션[0].label}
        value={infoValues.payDate}
        onChange={handleInfoChange}
      />

      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(infoValues)
        }}
        disabled={모든조건이선택되었는가 === false}
      />
    </div>
  )
}

export default BasicInfo
