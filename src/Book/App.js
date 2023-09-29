import { BrowserRouter,  Route, Routes } from "react-router-dom";
import './App.css';


import SharedLayout from './Sharedlayout/SharedLayout'
import About from "./Footer/About";
import Carrer from "./Footer/Carrer";
import Contact from "./Footer/ContactUs";
import Privacypolicy from "./Footer/PrivacyPolicy";
import Termofuse from "./Footer/TermsOfuse";
import Secureshopping from "./Footer/secureshopping";
import Copyright from "./Footer/CopyrightPolicy";
import Payment from "./Footer/Payment";
import Shipping from "./Footer/Shipping";
import Return from "./Footer/Return";
import Faq from "./Footer/Faq";
import Home from "./Content/Home";
import Newarraival from "./Content/Newarraival";
import Bestseller from "./Content/Bestsellers";
import Awardwinner from "./Content/Awardwinners";
import Featuredauthors from "./Content/Featuredauthors";
import Requestabook from "./Content/Requestabook";
import Bookscomp from "./Content/Books";
import Login from "./Header/Login";
import Signup from "./Header/Signup";
import Cart from "./Header/Cart";
import AppProvider from "./ContextPovider/Appcontext";
import SharedBooks from "./Sharedlayout/SharedBooks";
import Authorspecific from "./Content/Bookofauthor";
import StephenCoonts from "./Content/Stephencoonts";
import StephenKing from "./Content/StephenKing";
import Jgreen from "./Content/Johngreen";
import FLYNN from "./Content/Flynn";
import Forman from "./Content/Forman";
import SingleBook from "./Content/Singlebook";
import Intseller from "./Content/Intseller";
import Trending from "./Content/Now trending";








const App = () => {
        
    return(
        <AppProvider>       
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<SharedLayout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="book" element={<SharedBooks/>}>
                                <Route index element={<Bookscomp/>}/>
                                <Route path="newarrival" element={<Newarraival/>}/>
                                <Route path="bestseller" element={<Bestseller/>}/>
                                <Route path="awardwinners" element={<Awardwinner/>}/>
                                <Route path="trending" element={<Trending/>}/>
                                <Route path="intseller" element={<Intseller/>}/>
                                
                                
                                <Route path="arundhatiroy" element={<Authorspecific />} />
                                <Route path="stephencoonts" element={<StephenCoonts/>} />
                                <Route path="stephenking" element={<StephenKing/>} />
                                <Route path="johngreen" element={<Jgreen/>} />
                                <Route path="gillianflynn" element={<FLYNN />} />
                                <Route path="gayleforman" element={<Forman />} />

                            </Route>
                            <Route path="/book/:ISBN13" element={<SingleBook/>}/>

                            <Route path="authors" element={<Featuredauthors />}/>
                               
                            {/* <Route path="sbook" element={<SingleBook/>}/> */}
                            
                            <Route path="requestabook" element={<Requestabook/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="signup" element={<Signup/>}/>
                            <Route path="cart" element={<Cart/>}/>
                            
                            
                            
                            
                            
                            
                            
                            
                    
                                
                            <Route path="footer">
                                <Route path="aboutus" element={<About/>}/>
                                <Route path="Carrer" element={<Carrer/>}/>
                                <Route path="contactus" element={<Contact/>}/>
                                <Route path="privacypolicy" element={<Privacypolicy/>}/>
                                <Route path="termofuse" element={<Termofuse/>}/>
                                <Route path="secureshopping" element={<Secureshopping/>}/>
                                <Route path="copyright" element={<Copyright/>}/>
                                <Route path="payment" element={<Payment/>}/>
                                <Route path="shipping" element={<Shipping/>}/>
                                <Route path="return" element={<Return/>}/>
                                <Route path="faq" element={<Faq/>}/>
                            </Route>
                        </Route>
                    </Route> 
                </Routes>
            </BrowserRouter>
        </AppProvider>
    )
}
export default App;