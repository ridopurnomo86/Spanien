import React, {
  useState, useEffect,
} from 'react'
import Header from '../../../components/atoms/Header'
import useGet from '../../../config/api/useGet'
// import CardProduct from '../../../components/atoms/CardProduct'

const ProductPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    useGet('/recent?_limit=4', setData)
  }, [])

  return (
    <Header title="Product">
      <div className="flex flex-col items-center justify-center w-full h-full mb-28">
        <div
          className="w-full h-herosize bg-no-repeat bg-cover bg-center mb-8"
          style={{
            background: 'linear-gradient( rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6)100%), url("https://source.unsplash.com/4ojhpgKpS68/2054x1072") no-repeat top center fixed',
          }}
        />
        <div className="flex items-center justify-center mb-8 ">
          <p className="antialiased text-center text-2xl font-bold">Our Product</p>
        </div>
        <div className="grid grid-cols-2 gap-8 container">
          {
            data.map((info) => (
              <div className="p-6">
                <img src={`${info.image}`} alt="" />
                <p className="antialiased font-bold md:text-xl text-base">{info.title}</p>
                <p className="antialiased md:text-base text-sm">{info.address}</p>
              </div>
            ))
          }

          {/* {data.map((recentList) => (
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
          ))} */}
        </div>
      </div>
    </Header>
  )
}

export default ProductPage
