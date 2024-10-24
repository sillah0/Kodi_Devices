// src/pages/OrderHistoryPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token'); // Get token from localStorage
      const res = await axios.get('http://localhost:5000/api/orders', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="order-item">
              <h3>Order ID: {order._id}</h3>
              <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>Total Amount: ${order.totalPrice}</p>
              <div>
                <h4>Items:</h4>
                {order.items.map((item) => (
                  <div key={item._id}>
                    <p>{item.name} - ${item.price} x {item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
