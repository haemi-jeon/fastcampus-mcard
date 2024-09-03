import { createPortal } from 'react-dom'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { colors } from '@/styles/colorPalette'
import Button from './Button'

interface FixedBottomButtonProps {
  label: string
  onClick: () => void
}

function FixedBottomButton({ label, onClick }: FixedBottomButtonProps) {
  const $portalRoot = document.getElementById('root-portal')

  if (!$portalRoot) {
    return null
  }

  return createPortal(
    <Container>
      <Button size="medium" full={true} onClick={onClick} css={buttonStyles}>
        {label}
      </Button>
    </Container>,
    $portalRoot,
  )
}

const slideUp = keyframes`
  to {
    transform: translateY(0);
  }
`

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
  transform: translateY(100%);
  animation: ${slideUp} 0.5s ease-in-out forwards;
`

const buttonStyles = css`
  border-radius: 8px;
`

export default FixedBottomButton
