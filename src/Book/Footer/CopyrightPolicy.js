import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk,faAddressCard,faMobile } from '@fortawesome/free-solid-svg-icons';
const Copyright = () => {
    return(
        <div className='copyright_container'>
            <h1><i>Copyrights Policy</i></h1>
            <p>Welcome to [Bookstore] ("we," "us," or "our"). We respect the intellectual property rights of authors, publishers, and other content creators, and we are committed to complying with copyright laws. This Copyright Policy outlines our approach to copyright protection and how we handle copyright infringement claims.</p>
            <ol>
                <li><h3>Copyrighted Content</h3>
                    <ul><li>All content, including but not limited to books, images, text, and graphics, displayed on [Bookstore] is protected by copyright laws and is either owned by us or used with proper authorization from the copyright owners.</li></ul>
                </li>
                <li><h3> Our Commitment</h3>
                    <ul><li>We are committed to respecting copyright and intellectual property rights. We make every effort to ensure that the content available on our website complies with copyright laws. We do not knowingly engage in the distribution or sale of unauthorized copyrighted materials.</li></ul>
                </li>
                <li><h3>Copyright Infringement Claims</h3>
                    <ul>
                        <li>If you believe that your copyrighted work has been reproduced, displayed, or distributed on our website without your permission and in violation of copyright laws, please follow the procedures below to report copyright infringement:</li>
                    </ul>
                </li>
                <li><h3>Reporting a Copyright Infringement</h3>
                    <p>To report a copyright infringement, you must provide us with the following information:</p>
                    <ul>
                        <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
                        <li>Identification of the copyrighted work(s) claimed to have been infringed.</li>
                        <li>Identification of the material on our website that is claimed to be infringing and needs to be removed or disabled.</li>
                        <li>Sufficient information to allow us to locate the allegedly infringing material.</li>
                        <li>Contact information, including your name, address, telephone number, and email address.</li>
                        <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
                        <li>A statement that the information provided in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner.</li>
                    </ul>
                </li>
                <li><h3>Sending Your Copyright Infringement Notice</h3>
                    <p>Please send your copyright infringement notice to our designated copyright agent at the following address:</p>
                    <ul><li>@gmail.com</li></ul>
                </li>
                <li><h3>Our Response to Copyright Infringement Claims</h3>
                    <p>Upon receiving a valid copyright infringement notice, we will take the following actions:</p>
                    <ul>
                        <li>Promptly remove or disable access to the allegedly infringing material.</li>
                        <li>Notify the alleged infringer of the copyright infringement claim and provide them with your contact information.</li>
                        <li>Provide you, the copyright owner, with a copy of the copyright infringement notice.</li>
                        <li>Investigate the claim as required by applicable laws and regulations.</li>
                    </ul>
                </li>
                <li><h3>Counter Notification</h3>
                    <p>If you are the alleged infringer and believe that the material in question is not infringing or that you have the right to use it, you may submit a counter-notification to our designated copyright agent. The counter-notification must include:</p>
                    <ul>
                        <li>Your physical or electronic signature.</li>
                        <li>Identification of the material that has been removed or to which access has been disabled.</li>
                        <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
                        <li>Your name, address, telephone number, and email address.</li>
                    </ul>
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
export default Copyright;