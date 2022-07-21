import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Membership from './pages/Membership';
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
import MemberPortal from './pages/MemberPortal';
import EditInfo from './pages/EditInfo';
import MySessions from './pages/MySessions';
import Guides from './pages/Guides';


function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="membership" element={<Membership />} />
            <Route path="coaching" element={<Coaches />} />
            <Route path="guides" element={<Guides />} />
            <Route exact path="memberPortal" element={<MemberPortal />} />  
            <Route path="mysessions" element={<MySessions />} />  
            <Route path="editInfo" element={<EditInfo />} />        
            <Route path="forum" element={<Forum />} />
            <Route path='forum/:post' element={<ForumPost />} />
            <Route path="shop/:category" element={<Shop />} />
            <Route exact path="shop" element={<Shop />} />
            <Route path="book/:signedInStatus" element={<Book />} />
            <Route exact path="book" element={<Book />} />
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