import React, { useEffect, useState } from 'react'

const Products = () => {

const [data, setData] = useState([]);

const [filter, setFilter] = useState(data);

const [loading, setLoading] = useState(false);

let componentMounted = true;

useEffect(() => {
    const getProducts = async () => {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
       
        if (componentMounted) {
            setData(await res.clone().json());
            setFilter(await res.json());
            setLoading(false);
            console.log(data);
        
        }
        return () => {
            componentMounted = false;
        }
    }
    getProducts();
}
, []);


const Loading = () => {
    return (
        <>
        Loading....
        </>
    )
}

const ShowProducts = () => {
  return (
    <div className="button">
    <button className="btn btn-outline-dark">All</button>
    <button className="btn btn-outline-dark me-2">Men's clothing</button>
    <button className="btn btn-outline-dark me-2">Women's clothing</button>
    <button className="btn btn-outline-dark me-2">Electronics</button>
    <button className="btn btn-outline-dark me-2">Makeup</button>
   </div>
  )
}


  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">

                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Letest Products</h1> 
</div>
</div>

   <div className="row justify-content-center">
{Loading ? <Loading/> : <ShowProducts/>}
   </div>
            </div>
    </div>
    )
}



          
  

   

export default Products