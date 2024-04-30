import React, { useState, useContext } from 'react';
import { ShoesContext } from '../context/ShoesContext';
import axios from "axios";

import './css/PaymentPage.css';



const PaymentPage = () => {
  

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const handlePayment = async () => {
        try {
            const response = await axios.post(
                "http://localhost:4000/create-checkout-session",
                {
                    name,
                    amount: parseFloat(amount) * 100
                }
            );
            window.location.href = response.data.url;
        } catch (error) {
            console.error(error);
        }
    };

  return (

    <div>
      <form onSubmit={e => e.preventDefault()}>
        <h2>Confirm</h2>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Name' />
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder='Amount' />
        <button href='_blank' onClick={handlePayment}>Pay</button><br />
        To proceed, please write the name and price of the product below. If the information is incorrect, the purchase will not be completed and we will refund your money.
      </form>
    </div>
  )
}

export default PaymentPage
