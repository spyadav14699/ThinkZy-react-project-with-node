import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { useState } from 'react';


const Product = () => {

    const {id } = useParams();

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
        Loading....
        </>
    )

    }

    const ShowProduct = () => {
        return(
            <>
            
            </>
        )
    }

return (
    <div>
        <div className="container">
            <div className="row">
                {Loading ? <Loading /> : <ShowProduct/>}
            </div>
        </div>
    </div>
)








}


export default Product