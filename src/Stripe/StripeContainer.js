import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LFuktEVSC1ZA93xSv50cy5LD2RIgBq70KnV3QEuqFeEk37j2Yrb1Tvlx6O3mKiIzuLI82h1P4rUzXDK4cDq2ivj006VOfGAqM";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({ totalPrice }) => {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm totalPrice={totalPrice}/>
        </Elements>
    );
};

export default Stripe;