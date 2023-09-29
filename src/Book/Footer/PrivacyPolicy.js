import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk,faAddressCard,faMobile } from '@fortawesome/free-solid-svg-icons';

const Privacypolicy = () => {
    return(
        <div className="privacy_container">
            <h1>Privacy Policy</h1>
            <h2>Last Updated: 13-09-2023</h2>
            <p>This Privacy Policy describes how BookStore ("we," "us," or "our") collects, uses, shares, and protects your personal information. By visiting our website BookStore.com and using our services, you consent to the practices described in this Privacy Policy.</p>
            
            <h2>Information We Collect</h2>
            <p>We collect various types of personal information, including but not limited to:</p>
            <ul>
                <li><b>Personal Information:</b> We may collect your name, email address, postal address, phone number, and other contact information when you create an account, place an order, or contact us for support.</li>
                <li><b>Payment Information:</b> When you make a purchase, we collect payment information, such as credit card details or other payment methods.</li>
                <li><b>Website Usage Information:</b> We collect data about how you use our Website, including your browsing history, IP address, device information, and cookies.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
                <li><b>Order Processing:</b> To process and fulfill your orders, send order confirmations, and provide customer support.</li>
                <li><b>Account Management:</b> To create and manage your user account, including account registration, password reset, and account maintenance.</li>
                <li><b>Marketing and Promotions:</b> To send you information about products, promotions, and updates that may be of interest to you, with your consent.</li>
                <li><b>Analytics:</b> To analyze Website usage, improve our services, and enhance user experience.</li>
                <li><b>Legal and Security:</b> To comply with legal obligations and protect our Website from fraud, abuse, and unauthorized access.</li>
            </ul>


            <h2>Information Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. However, we may share your information with:</p>
            <ul>
                <li><b>Service Providers:</b> We may share your information with trusted third-party service providers who help us operate and improve our services.</li>
                <li><b>Legal Compliance:</b> We may disclose your information to comply with legal requirements, respond to government requests, enforce our policies, or protect our rights, privacy, safety, or property.</li>
            </ul>

            <h2>Cookies</h2>
            <p>We use cookies and similar technologies to collect and store information about your preferences and browsing behavior. You can disable cookies through your browser settings, but this may affect your experience on our Website.</p>

            <h2>Your Choices</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access, correct, or delete your personal information.</li>
                <li>Opt out of receiving marketing communications.</li>
                <li>Object to the processing of your personal information.</li>
            </ul>
           

            <h2>Security</h2>
            <p>We use reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

            <h2>Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically to reflect changes in our practices or for legal and regulatory reasons. Any changes will be posted on this page.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at :</p>
            <div className="copyright_address">
                <h3>Contact US</h3>
                <address>
                    
                    <h4><FontAwesomeIcon className='cr_icon' icon={faMailBulk}/>  : <a href="https://www.google.com/gmail/about/" target="_blank" rel="noopener noreferrer">Bookstore@gmail.com</a></h4>
                    <h4><FontAwesomeIcon className='cr_icon' icon={faAddressCard}/>  : Book Store, Chennai,Tamil Nadu, India.</h4>
                    <h4><FontAwesomeIcon className='cr_icon' icon={faMobile}/>  : +91 9123456789.</h4>
                </address>
            </div>
        </div>
    )
}
export default Privacypolicy;