import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk,faAddressCard,faMobile } from '@fortawesome/free-solid-svg-icons';
const Termofuse = () => {
    return(
        <div className='tou'>
            <h1><i>Terms of Use</i></h1>
                <p>These terms and conditions are applicable to your use of the website www.BookStore.com which is owned and operated by SR Ecommerce Factory Pvt. Ltd. These terms apply irrespective of whether you are accessing the website through a computer system, a mobile phone, or an app provided by BookStoreBookStore.</p>
                <p>These terms define the relationship between BookStoreBookStore and you, along with the terms on which BookStoreBookStore provides the website as well the terms on which products are sold on the website. If you do not agree to these terms, you may not use the website or proceed to purchase any product or service being offered on the website.</p>
                <p>Nothing in these Terms affects your statutory rights, either as a consumer or otherwise.</p>
            <ol>
                <li><h3>User Registration</h3>
                    <ul>
                        <li>If you choose to register an account with us, you agree to provide accurate and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for all activities that occur under your account.</li>
                    </ul>
                </li>
                <li><h3>Content and Intellectual Property</h3>
                    <ul>
                        <li>All content on our website, including but not limited to books, images, text, and graphics, is owned by [Your Online Bookstore] or its licensors and is protected by intellectual property laws. You may use the content for personal, non-commercial purposes only and may not reproduce, distribute, or modify it without our written consent.</li>
                    </ul>
                </li>
                <li><h3>Use of the Website</h3>
                    <ul><li>You agree not to engage in any unlawful or prohibited activities while using our website. Prohibited activities include, but are not limited to, hacking, spamming, and harassment of other users.</li></ul>
                </li>
                <li><h3>Purchases and Payments</h3>
                    <ul><li>When making purchases on our website, you agree to provide accurate payment information. Prices for books are as listed and may be subject to taxes. We reserve the right to change prices and availability at any time. Refund and return policies are outlined in our [Refund Policy].</li></ul>
                </li>
                <li><h3>Privacy and Data Collection</h3>
                    <ul><li>We collect and use user data in accordance with our [Privacy Policy]. By using our website, you consent to our data collection and usage practices as described therein.</li></ul>
                </li>
                <li><h3>User-generated Content</h3>
                    <ul><li>Users may submit content, such as book reviews or comments. We reserve the right to moderate and remove user-generated content that violates our guidelines or is deemed inappropriate.</li></ul>
                </li>
                <li><h3>Termination and Suspension</h3>
                    <ul><li>We may terminate or suspend your account, at our discretion, for violations of these terms or for any other reason. Users have the right to appeal account suspension as outlined in our [Appeal Process].</li></ul>
                </li>
                <li><h3>Dispute Resolution</h3>
                    <ul><li>Any disputes between users and [Bookstore] will be resolved through arbitration in accordance with the rules of the [Arbitration Association]. You agree to waive your right to a trial by jury.</li></ul>
                </li>
                <li><h3>Limitation of Liability</h3>
                    <ul><li>[Bookstore] is not responsible for service interruptions, errors in content, or the accuracy of user-generated content. Your use of the website is at your own risk.</li></ul>
                </li>
                <li><h3>Indemnification</h3>
                    <ul><li>You agree to indemnify and hold [Your Online Bookstore] harmless from any claims, damages, or liabilities arising from your use of the website or violation of these terms.</li></ul>
                </li>
                <li><h3>Changes to Terms</h3>
                    <ul><li>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. It is your responsibility to review the terms periodically.</li></ul>
                </li>
                <li><h3>Governing Law</h3>
                    <ul><li>These terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].</li></ul>
                </li>
            </ol>
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
export default Termofuse;