import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         const res = await axios.get('http://localhost:5000/api/products');
         setProducts(res.data);
      };
      fetchProducts();
   }, []);

   return (
      <div>
         <h1>Featured Products</h1>
         <div className="product-list">
            {products.map((product) => (
               <ProductCard key={product._id} product={product} />
            ))}
         </div>
      </div>
   );
};

export default HomePage;
