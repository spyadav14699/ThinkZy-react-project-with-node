import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';


import { addToCart } from '../redux/action';





const Product = () => {

    const {id } = useParams();



    const addToProduct = (product) => {
        useDispatch(addToCart(product));
    }


const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
    const getProduct = async () => {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await res.json());
        setLoading(false);
    }
    getProduct();
}
, []);

const Loading = () => {
    return(
        <>
        <div className="col-md-6" style={{lineHeight:2}}>

            <Skeleton height={350}/>

        </div>
        <div className="col-md-6">

<Skeleton height={50} width={300}/>
<Skeleton height={75}/>
<Skeleton height={25} width={150}/>
<Skeleton height={50}/>
<Skeleton height={150}/>
<Skeleton height={50} width={100}/>
<Skeleton height={50} width={100}/>



</div>
        </>
    )

    }

    const ShowProduct = () => {
        return(
            <>
            <div className="col-md-6">
            <img src={product.image} alt="product" className="img-fluid" height="400px" width="400px" />

            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black50">
                    {product.category}
                </h4>
                 <h1 className="display-5">{product.title}</h1>
                 <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}
                 <i className="fa fa-star" ></i>
                 </p>
                 <h3 className="display-6 fw-bold my-4">
                    ${product.price}
                 </h3>
                 <p className="lead">{product.description}</p>
                 <button className="btn-outline-dark btn px-4 py-2" 
                 onClick={() => addToProduct(product)}>
                 Add to Cart</button>
                 <NavLink to="/cart" className='btn btn-dark px-4 py-2 ms-2'> Go to Cart</NavLink>
            </div>

            </>
        )
    }

return (
    <div>
        <div className="container py-5">
            <div className="row py-5">
                {Loading ?<ShowProduct/> : <Loading />  }
            </div>
        </div>
    </div>
)








}


export default Product