import { css } from '@emotion/react'
import Flex from './Flex'
import Text from './Text'

interface TopPops {
  title: string
  subTitle: string
}

function Top({ title, subTitle }: TopPops) {
  return (
    <Flex direction="column" css={containerStyles}>
      <Text bold={true} typography="t4">
        {title}
      </Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

const containerStyles = css`
  padding: 24px;
`

export default Top
