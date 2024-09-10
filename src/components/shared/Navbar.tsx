import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { css } from '@emotion/react'

import Flex from './Flex'
import Button from './Button'

import { colors } from '@/styles/colorPalette'
import useUser from '@/hooks/auth/useUser'
import MyImage from '../my/MyImage'

function Navbar() {
  const location = useLocation()

  const showSignButton =
    ['/signin', '/signup'].includes(location.pathname) === false

  const user = useUser()

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Link to="/my">
          <MyImage size={40} />
        </Link>
      )
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton])

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {renderButton()}
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
