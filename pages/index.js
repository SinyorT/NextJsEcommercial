


import { getData } from '../utils/fetchData'
import ProductItem from '../components/product/ProductItem'
import { useState } from 'react'
import Head from 'next/head'
const Home = (props) => {
  const [products,setProducts] =useState(props.productProps)
  //console.log(products)

  return (
    <div className="products">
      <Head>
        <title>Home Page</title>
      </Head>

      {
        products.length === 0 
        ? <h2>No Products</h2>

        :products.map(product => (
          <ProductItem key= {product._id }  product={product} />
        ))
      }
    </div>
  )
}







export async function getServerSideProps() {

  const res = await getData('product')
 // console.log(res);
  return {
    props: {
      productProps: res.products,
      result:res.result
    }, // will be passed to the page component as props
  }
}

export default Home