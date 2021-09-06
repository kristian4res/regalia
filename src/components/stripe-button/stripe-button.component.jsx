import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JWgEEJjN0yDuzRsfyDHc1Pc8ZcLcAPq0C02dQWVzFoCpo6dMELyPcOtfNGjV2aTDlhjvMaXpSQARUlKsefKr0D100PMBOLEYo';

    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            image="https://svgshare.com/i/Cuz.svg"
            currency="GBP"
            locale="en"
            billingAddress
            shippingAddress
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;