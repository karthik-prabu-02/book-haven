import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk,faAddressCard,faMobile } from '@fortawesome/free-solid-svg-icons';
import img from '../image/Footer img/contact.jpg';
import {useState} from 'react';

const Contact = () => {
    const [user,updUser] = useState({
            name:"",
            email:"",
            address:"",
            phno:"",
            subject:"",
            select:"",
            description:"",
        });
    const [Ipv,updIpv] = useState({
            name:"",
            email:"",
            address:"",
            phno:"",
            subject:"",
            select:"",
            description:"",
        });
        const [isSubmitted, setIsSubmitted] = useState(false);
        const [isError,setisError] = useState(false);
    console.log(user,"user");
    console.log(Ipv,"ipv");
    

    const SubmitReq = () => {
        if(!Ipv.name || !Ipv.email ||!Ipv.phno ||!Ipv.select ||!Ipv.subject ||!Ipv.description ||!Ipv.address){
            setisError(true);    
            setIsSubmitted(false);
            return;
        }
        else{
            updUser({...Ipv,user});

            updIpv({
                name:"",
                email:"",
                address:"",
                phno:"",
                subject:"",
                select:"",
                description:"",
            });
            setIsSubmitted(true);
            setisError(false);    
        } 
          
    }
    
    return(
        <div className="contact">
            <div className="contact_form">
                <h1><i>Contact Us</i></h1>
                <p>Please fill up the form below to send us a message. We will contact you very soon.</p>
                <form>
                    <input 
                        type="text" 
                        placeholder="Name"
                        value={Ipv.name}
                        onChange={(e)=>updIpv({...Ipv,name:e.target.value})}
                        required
                        />
                </form>
                <form>
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={Ipv.email}
                        onChange={(e)=>updIpv({...Ipv,email:e.target.value})}
                        required
                        />
                </form>
                <form>
                    <textarea 
                        type="text" 
                        placeholder="Address" 
                        row="4"
                        value={Ipv.address}
                        onChange={(e)=>updIpv({...Ipv,address:e.target.value})}
                        required
                        />
                </form>
                <form>
                    <input 
                        type="number"
                         placeholder="Phone/Mobile"
                         value={Ipv.phno}
                         onChange={(e)=>updIpv({...Ipv,phno:e.target.value})}
                         required
                         />
                </form>
                <form>
                    <input 
                        type="text" 
                        placeholder="Subject"
                        value={Ipv.subject}
                        onChange={(e)=>updIpv({...Ipv,subject:e.target.value})}
                        required
                        />
                </form>
                <form>
                    <select value={Ipv.select} onChange={(e)=>updIpv({...Ipv,select:e.target.value})}>
                        <option value="">Select</option>
                        <option value="Payment">Payment Issue</option>
                        <option value="order">Order related</option>
                        <option value="courier">Courier Related</option>
                        <option value="other">Others</option>
                    </select>
                </form>
                <form>
                    <textarea 
                        type="text" 
                        placeholder="Description" 
                        row="2"
                        value={Ipv.description}
                        onChange={(e)=>updIpv({...Ipv,description:e.target.value})}
                        required
                        />
                </form>
                <div className='parent_btn_req'>
                    <button type="button" onClick={SubmitReq}>Submit</button>
                    {isSubmitted  && <h3 className='green'>Your Request is submitted</h3>}
                    {isError && <h3 className='red'>Please fill all the Required Field </h3>}
                </div>
            </div>
            <div className="contact_address">
                <img src={img} alt="contact"/>
                <address>
                    <h3><FontAwesomeIcon id='mail' icon={faMailBulk}/>  : <a href="https://www.google.com/gmail/about/" target="_blank" rel="noopener noreferrer">Bookstore@gmail.com</a></h3>
                    <h3><FontAwesomeIcon id='add' icon={faAddressCard}/>  : Book Store, Chennai,Tamil Nadu, India.</h3>
                    <h3><FontAwesomeIcon id='ph' icon={faMobile}/>  : +91 9123456789.</h3>
                </address>
            </div>
        </div>
    )
}
export default Contact;