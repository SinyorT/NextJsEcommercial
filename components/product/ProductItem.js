

import Link from 'next/link'
import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Actions'

const ProductItem = ({ product }) => {
    const { state, dispatch } = useContext(DataContext)
    const { cart } = state



    const userLink = () => {
        return (
            <>
                <Link href={`product/${product._id}`}>
                    <a className="btn btn-info"
                        style={{ marginRight: '5px', flex: 1 }}>View</a>
                </Link>

                <button className="btn btn-success"
                    style={{ marginLeft: '5px', flex: 1 }}
                    onClick={()=> dispatch(addToCart(product,cart))}
                    disabled={product.inStock === 0 ? true : false}
                    >
                    Buy
            </button>
            </>
        )
    }

    return (
        <div className="card" style={{ 'width': '18rem' }}>
            <img className="card-img-top" src={product.images[0].url} alt={product.images[0].url} />
            <div className="card-body">
                <h5 className="card-title" title={product.title}>
                    {product.title}
                </h5>
                <div className="row justify-content-between mx-0">
                    <h6 className="text-danger">${product.price}</h6>
                    {
                        product.inStock > 0
                            ? <h6 className="text-danger">In Stock:{product.price}</h6>
                            : <h6 className="text-danger">Out Stock</h6>
                    }

                </div>
                <p className="card-text" title={product.description}>
                    {product.description}
                </p>
                <div className="row justify-content-between mx-0">
                    {userLink()}
                </div>
            </div>
        </div>

    )
}

export default ProductItem