import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { getAdBanners } from '@remote/adbanner'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import { colors } from '@/styles/colorPalette'

import 'swiper/css'

function AdBanners() {
  const { data, isLoading } = useQuery(['adBanners'], () => getAdBanners())

  if (data == null || isLoading) {
    return (
      <Container>
        <Flex direction="column" css={bannerContainerStyle}>
          <Text bold={true}>&nbsp;</Text>
          <Text typography="t7">&nbsp;</Text>
        </Flex>
      </Container>
    )
  }

  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <Link to={banner.link}>
                <Flex direction="column" css={bannerContainerStyle}>
                  <Text bold={true}>{banner.title}</Text>
                  <Text typography="t7">{banner.description}</Text>
                </Flex>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
`

const bannerContainerStyle = css`
  padding: 16px;
  background-color: ${colors.grey};
  border-radius: 4px;
`

export default AdBanners
