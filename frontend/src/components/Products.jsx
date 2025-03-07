import React from 'react'
import axios from 'axios'
import '../styles/Products.css'

const Products = ({products}) => {
   
    const checkoutHandler = async(amount)=>{
        const {data:keyData} = await axios.get("/api/v1/getkey")
        const {key} = keyData;
        console.log(key);

        const {data:orderData} = await axios.post("/api/v1/payment/process",{
            amount
        })
        const {order}= orderData;
        console.log(order);

        const options = {
            key,
            amount,
            currency: 'INR',
            name: 'Zaara Shopping',
            description: 'Razorpay Integration',
            order_id: order.id,
            callback_url: '/api/v1/paymentVerification',
            prefill: {
              name: 'Yukesh Kannan',
              email: 'yukesh1234@gmail.com',
              contact: '8056685124'
            },
            theme: {
              color: '#F37254'
            },
          };
    
          const rzp = new Razorpay(options);
          rzp.open();

    }
  return (
    <div className="products-container">
        { products.map((item)=>(
                <div className="product-card" key={item.id}>
                <img src={item.image} alt="product" className='product-image'/>
                <h3 className='product-title'>{item.title}</h3>
                <p className='product-price'>Price <strong>{item.price}</strong>/-</p>
                <button className='pay-button' onClick={()=>checkoutHandler(item.price)}>pay({item.price})/-</button>
            </div>
        ))
        }
    </div>
  )
}

export default Products
