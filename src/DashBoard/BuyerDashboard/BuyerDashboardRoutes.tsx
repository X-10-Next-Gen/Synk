import { Routes, Route } from "react-router-dom";
import BuyerDashboard from "./BuyerDashboard"; // The main BuyerDashboard component
import Products from "./Pages/Products"; // For browsing products
import Orders from "./Pages/Orders"; // For viewing order history
import ProfileSettings from "./Pages/ProfileSettings"; // For updating profile settings
import Cart from "./Pages/Cart"; // For viewing the shopping cart
import Subscriptions from "./Pages/Subscriptions"; // For subscription management
import PaymentMethods from "./Pages/PaymentMethods"; // For managing payment methods
import Support from "./Pages/Support"; // For contacting support
import Reviews from "./Pages/Reviews"; // For viewing product reviews or leaving reviews
import OrderDetails from "./Pages/OrderDetails"; // For viewing individual order details

const BuyerDashboardRoutes = () => {
  return (
    <BuyerDashboard>
      <Routes>
        <Route path="products" element={<Products />} /> {/* For browsing products */}
        <Route path="orders" element={<Orders />} /> {/* For viewing order history */}
        <Route path="profile" element={<ProfileSettings />} /> {/* For updating profile settings */}
        <Route path="cart" element={<Cart />} /> {/* For viewing the shopping cart */}
        <Route path="subscriptions" element={<Subscriptions />} /> {/* For subscription management */}
        <Route path="payment-methods" element={<PaymentMethods />} /> {/* For managing payment methods */}
        <Route path="support" element={<Support />} /> {/* For contacting support */}
        <Route path="reviews" element={<Reviews />} /> {/* For viewing or leaving product reviews */}
        <Route path="order-details/:orderId" element={<OrderDetails />} /> {/* For viewing individual order details */}
      </Routes>
    </BuyerDashboard>
  );
};

export default BuyerDashboardRoutes;
