import { Link } from 'react-router-dom';
import { useState } from 'react';
const Login =() => {
    
    // const location = useLocation();
    // const Wishlist = location.state.islogin
    // console.log(Wishlist,"wish");

    
    
    const [login,updLogin] = useState([]);
    const [userInput,upduserInput] = useState({
        phmail:'',
        psw:'',
    });
    const [islog, updisLog] = useState(true);
    
    const Loginfn = () => {
        if(!userInput.phmail || !userInput.psw){
            updisLog(false);
            return
        }
        if(!isNaN(userInput.phmail)){
            const newData = {...userInput,phno:userInput.phmail};
            delete newData.phmail
            updLogin([...login,newData]);
            updisLog(true);
            upduserInput({
                phmail:'',
                psw:'',
            });
        }else{
            const newData = {...userInput,email:userInput.phmail};
            delete newData.phmail
            updLogin([...login,newData]);
            updisLog(true);
            upduserInput({
                phmail:'',
                psw:'',
            });
        }
    }
    
    console.log(login);
    
    return(
        <div className="Login_container"> 
            <div className="Login_content">
                <h1><i>Log In</i></h1>
                {/* {!Wishlist && <h2 style={{color:'red'}}>Please Log in to add wish list</h2>} */}
                <form>
                    <input 
                        type="text"
                        placeholder="Mobile Number/Email" 
                        id="phno"  
                        value={userInput.phmail}
                        onChange={(e)=>upduserInput({...userInput,phmail:e.target.value})}
                    />
                    {(islog===false) && (!userInput.psw) && <h3 style={{color:"red",margin:"0px 0 0px 0",fontSize:"16px"}}>Please enter Valid Mobile/Email.</h3>}
                </form>
                <form>
                    <input 
                        type="password"
                        placeholder="Password" 
                        id="pswd"  
                        value={userInput.psw}
                        onChange={(e)=>upduserInput({...userInput,psw:e.target.value})}
                        />
                    {(islog===false) && (!userInput.phmail) && <h3 style={{color:"red",margin:"0px 0 0px 0",fontSize:"16px"}}>Please enter Valid Password.</h3>}
                </form>
                <button type="button" className="login_btn" onClick={Loginfn}>Login</button>
                <p id='r'>Or</p>
                <button type="button" className="OTP_btn">Request OTP</button>
                <a href='https://www.google.com/account/about/' target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                </a>
                <Link to="/signup" className='link_tag login_link' ><h4>New to BookStore? Sign up</h4></Link>
                <p>By continuing, I agree to the <Link to="/footer/termofuse" className='link_tag login_link'>Terms of Use</Link> & <Link to="/footer/privacypolicy" className='link_tag login_link'>Privacy Policy</Link></p>

            </div>
        </div>
    )
}
export default Login;