import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Guides from './pages/Guides';
import Forum from './pages/Forum';
import Shop from './pages/Shop';
import Book from './pages/Book';
import PageNotFound from "./pages/PageNotFound";
import SignUp from './pages/SignUp';
import BillingInfo from './pages/BillingInfo';
import Confirmation from './pages/Confirmation';
import Coaches from './pages/Coaches.js';
import ForumPost from './pages/ForumPost';
import Cart from './pages/Cart';
import BookingConfirmation from './pages/BookingConfirmation';

function App() {
  return (
    <Router basename='/seg3125Proj2'>
      <div>
        <NavigationBar />
        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="membership" element={<Membership />} />  {/* <-- add coaching here */}
            <Route path="guides" element={<Guides />} /> 
            <Route path="forum" element={<Forum />} />
            <Route path='forum/:post' element={<ForumPost />} />
            <Route path="shop/:category" element={<Shop />} />
            <Route exact path="shop" element={<Shop />} />
            <Route path="book" element={<Book />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="billingInfo" element={<BillingInfo />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="coaches" element={<Coaches />} />
            <Route path="cart" element={<Cart />} />
            <Route path="bookingConfirmation" element={<BookingConfirmation />} />
            <Route path="404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate replace to='404' />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;