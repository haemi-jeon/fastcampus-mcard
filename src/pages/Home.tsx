import Top from '@/components/shared/Top'
import AdBanners from '@/components/home/AdBanners'
import CardList from '@/components/home/CardList'
import Button from '@/components/shared/Button'
import { Suspense } from 'react'
import Skeleton from '@/components/shared/Skeleton'
import ListRow from '@/components/shared/ListRow'

function HomePage() {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤습니다"
      />
      <AdBanners />
      <Suspense
        fallback={[...new Array(10)].map((_, idx) => (
          <ListRow.Skeleton key={idx} />
        ))}
      >
        <CardList />
      </Suspense>
    </div>
  )
}

export default HomePage
