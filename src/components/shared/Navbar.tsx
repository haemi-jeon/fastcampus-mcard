import { Link, useLocation } from 'react-router-dom'

import Flex from './Flex'
import Button from './Button'
import { css } from '@emotion/react'
import { colors } from '@/styles/colorPalette'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signin', '/signup'].includes(location.pathname) === false

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {showSignButton ? (
        <Link to="/signup">
          <Button>로그인/회원가입</Button>
        </Link>
      ) : null}
    </Flex>
  )
}

const navbarContainerStyles = css`
  z-index: 10;
  position: sticky;
  top: 0;
  padding: 10px 24px;
  border-bottom: 1px solid ${colors.grey};
  background-color: ${colors.white};
`

export default Navbar
