import React, {
  useEffect,
  useState,
} from 'react'
import CardProduct from '../../../../components/atoms/CardProduct'
import useGet from '../../../../config/api/useGet'
import SlideComponent from '../../../organism/SlideComponent'

// import Skeleton from '../../../../components/atoms/CardProduct/Skeleton'
import {
  ListCardProduct as Skeleton,
} from '../../../../components/atoms/Skeleton'

const RecentProduct = () => {
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    useGet('/recent', setData, setIsFetching)
  }, [])

  return (
    <section>
      <div className="w-full h-auto mb-28 container box-border flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-12">
          <p className="antialiased font-bold text-4xl border-b pb-2 px-12">New Product</p>
          <p className="antialiased font-medium text-md text-center text-gray-700">This is new house for sell, from people who sell his house.</p>
        </div>
        {/* Slider */}
        {!isFetching ? (
          <SlideComponent>
            {data.map((recentList) => (
              <div
                key={recentList.id}
              >
                <CardProduct
                  price={recentList.price}
                  src={recentList.image}
                  title={recentList.title}
                  address={recentList.address}
                  bedroom={recentList.additional.bedroom}
                  bathroom={recentList.additional.bathroom}
                />

              </div>
            ))}
          </SlideComponent>
        ) : <Skeleton />}

      </div>
    </section>
  )
}

export default RecentProduct
