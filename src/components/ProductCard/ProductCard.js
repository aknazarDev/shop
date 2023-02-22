import React from 'react';
import {BsFillBasket3Fill} from "react-icons/bs";
import {MdFavorite} from "react-icons/md";

const ProductCard = ({product}) => {
    return (
        <div className='w-[25%] my-10 mx-2 rounded-[10px]'>
            <div>
                <img src={product.image} alt="img" className='w-[200px]'/>
            </div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <div className='flex items-center'>
                <button className="flex items-center justify-center">
                    <MdFavorite className='text-red-500 text-[20px]'/>
                </button>
                <button
                    className="flex items-center text-white ml-[50px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Add
                    <BsFillBasket3Fill className='ml-2'/>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;