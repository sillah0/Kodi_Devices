import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_stripe_public_key');

const CheckoutPage = () => (
   <Elements stripe={stripePromise}>
      {/* Your checkout form here */}
   </Elements>
);

export default CheckoutPage;
