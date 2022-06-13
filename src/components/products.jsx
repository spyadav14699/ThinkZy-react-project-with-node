import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';

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
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>  <div className="col-md-3">
            <Skeleton height={350}/>
        </div>  <div className="col-md-3">
            <Skeleton height={350}/>
        </div>  <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
      </>
        
    )
}

const filterProduct = (catogery) => {
    setFilter(data.filter(product => product.category === catogery));

}
const sortBylowToHigh = () => {
    setFilter(data.sort((a, b) => a.price - b.price));
}
const sortByHighToLow = () => {
    setFilter(data.sort((a, b) => b.price - a.price));
}





const ShowProducts = () => {
  return (
   <>
    <div className="button justify-content-center d-flex mb-5 pb-5">
    <button className="btn btn-outline-dark me-2" onClick={
        () => {
            setFilter(data);
        }
    } >All</button>
    <button className="btn btn-outline-dark me-2" onClick={
        () => {
            filterProduct("men's clothing");
        }
    }>Men's clothing</button>
    <button className="btn btn-outline-dark me-2" onClick={
        () => {
            filterProduct("women's clothing");
        }
    }>Women's clothing</button>
    <button className="btn btn-outline-dark me-2" onClick={
        () => {
            filterProduct("jewelery");
        }
    }>Jwellery</button>
    <button className="btn btn-outline-dark me-2" onClick={
        () => {
            filterProduct("electronics");
        }
    }>Electronics</button>
    <button className="btn btn-outline-dark me-2" onClick={
        () => {
            sortBylowToHigh()
        }
    }>Low Price</button>
    <button className="btn btn-outline-dark me-2" onClick={
        () => {
            sortByHighToLow()
        }
    }>Hight Price</button>
   </div>
    {filter.map((el) => {


        return (
            <>
    <div className="col-md-3">
    <div className="card h-100 text-center p-4" key={el.id}>

<img src={el.image} className="card-img-top" alt={el.title} height="210px"/>
<div className="card-body">
<h5 className="card-title mb-0">{el.title.substring(0,12)}</h5>
<p className="card-text">${el.price}</p>
<a href="#" className="btn btn-primary">Buy now</a>
</div>
</div>
    </div>

 </>
    )
    })}

    </>
    )}






  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">

                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Letest Products</h1> 
</div>
</div>

   <div className="row justify-content-center">
    {loading ? <Loading/> : <ShowProducts/>}
         

   </div>
            </div>
    </div>
    )
}



          
  

   

export default Products