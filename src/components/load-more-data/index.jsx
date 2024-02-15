import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

import './styles.css';

export const LoadMoreData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabledBtn, setDisabledBtn] = useState(false)

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();

            console.log(data)
            if(data && data.products && data.products.length) {
                setProducts((prevData) => [...prevData, ...data.products]);
                setIsLoading(false);
            };
            
            console.log(products)
        } catch (error) {
            console.log(data)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if(products && products.length >= 100) setDisabledBtn(true)
    }, [products])

    if(isLoading){
        return <div>Loading data</div>
    }
    return (
        <div className='load-more-container'>
            <div className='product-container'>
                {
                    products && products.length ? 
                    (products.map(product => (
                        <div className='product' key={product.id}>
                            <img 
                            src={product.thumbnail}
                            alt={product.title}
                            />
                            <p>{product.title}</p>
                        </div>
                    ))) : null
                }
            </div>
            <div className='btn-container'>
                <button disabled={disabledBtn} onClick={() => setCount(count => count + 1)}>Load More Products</button>
            </div>
        </div>
    )
}


