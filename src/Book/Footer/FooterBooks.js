import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="foot_container">
            <div className='hr_div'><hr className='hr_foot'/></div>
            <div className="foot_bar">
                <div className="foot_link">
                    <h2 className='foot_heading'>Company</h2>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/aboutus">About us</Link>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/carrer">Carrer</Link>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/contactus">Contact Us</Link>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/copyright">Copyright Policy</Link>
                </div>
                <div className="foot_link">
                    <h2 className='foot_heading'>Policies</h2>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/privacypolicy">Privacy Policies</Link>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/termofuse">Terms of Use</Link>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/secureshopping">Secure Shopping</Link>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/shipping">Shipping</Link>
                </div>
                <div className="foot_link">
                    <h2 className='foot_heading'>Help</h2>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/payment">Payment</Link>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/return"> Return</Link>
                    <Link style={{textDecoration:'none',color:'black'}} className='link_tag' to="footer/faq">FAQ</Link>
                </div>
            </div>
            <div className="social_media">
                <div className='sm_icons'>
                    <a href='https://www.facebook.com/login/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={["fab",'facebook']}/></a>
                    <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={["fab",'twitter']}/></a>
                    <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={["fab",'instagram']}/></a>
                    <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={["fab",'linkedin']}/></a>
                    <a href='https://www.Pinterest.com/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={["fab",'pinterest']}/></a>
                    <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={["fab",'youtube']}/></a>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright © 2023 . Bookshop.com. All Rights Reserved</p>
            </div>
        </div> 
    )
}
export default Footer;