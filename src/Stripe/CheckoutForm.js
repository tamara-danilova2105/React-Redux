import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CheckoutForm = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const amountForStripe = totalPrice * 100

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        });

        if (!error) {
        console.log("Stripe 23 | token generated!", paymentMethod);
        try {
            const { id } = paymentMethod;
            const response = await axios.post(
                "http://localhost:8080/stripe/charge",
                {
                    amount: amountForStripe,
                    id: id,
                }
                );
        
                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                console.log("CheckoutForm.js 25 | payment successful!");
                }
            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
            }
        } else {
        console.log(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <CardElement />
        <button className="cartBtn">Оплатить</button>
        </form>
    );
};