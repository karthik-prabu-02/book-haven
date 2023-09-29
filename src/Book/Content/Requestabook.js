import { useState} from 'react';
// import { useContext } from 'react';
// import { Appcontext } from '../ContextPovider/Appcontext';
// import { Link } from 'react-router-dom';
const Requestabook = () => {
    // const {Bookslist} = useContext(Appcontext);
    const [rqbook , updRqbook] = useState (
        {
            isbn13 : '',
            bkname : '',
            author : '',
            email : '',
            quanty : '',
            phno : '',
        }
    );
    const [collectdata,updcollectdata] = useState([{},]);

    const [iserror,updiserror ]=useState(false);
    const [issub,updissub]=useState(false);
    // const [ispresent,updIspresent] = useState(false);
    // const [bookid,updbookId]=useState("");
    // //     console.log(bookid,'bookid');

    const Isbnfn = (e) => {
        updRqbook({...rqbook,isbn13 : e.target.value});
        
        // if(isAlready){
        //     updIspresent(true);
           
        // }
        // else{
        //     updIspresent(false)
            
        // } 
    }
    const Authorfn = (e) => {

        updRqbook({...rqbook,author : e.target.value});
        
    }

    const Emailfn = (e) => {

        updRqbook({...rqbook,email : e.target.value});
    }

    const Titlefn = (e) => {
        updRqbook({...rqbook,bkname : e.target.value});
    }

    const Qtyfn = (e) => {
        updRqbook({...rqbook,quanty : e.target.value});
    }

    const Phnofn = (e) => {
        updRqbook({...rqbook,phno : e.target.value});
    }


    // const isAlready = Bookslist.filter(book=>book.ISBN13 === rqbook.isbn13);
    
    const Rqsubmit = () => {
        // const isAlready = Bookslist.filter(book=>book.ISBN13 === rqbook.isbn13);
        // console.log(isAlready,'is');
        if(!rqbook.isbn13 || 
            rqbook.isbn13.length !== 13 ||
            // isAlready ||
            !rqbook.bkname || 
            !rqbook.email || 
            !rqbook.author || 
            !rqbook.quanty || 
            !rqbook.phno    ||
            rqbook.phno.length !==10
        ){
            updiserror(true);
            updissub(false);
            // updbookId(rqbook.isbn13);
            // updIspresent(true);
            //alert("Please enter all valid Input");
            return //it makes us to exit the function
        }
        // else if(){

        // }
        else{
            updiserror(false);
            updissub(true);
            updcollectdata([...collectdata,rqbook]);                        
            // updIspresent(false);
            // updbookId("")
            updRqbook(
                {
                    isbn13 : '',
                    bkname : '',
                    author : '',
                    email : '',
                    quanty : '',
                    phno : '',
                }
            );
        }
        
        
    }

    console.log(collectdata,"collctedData");
    
    
    
    return(
        <>
           <div className="reqst_book"><h2>Request a book</h2>
                <p>Please fill up the form below to Request a Book. We will inform you as soon as the book is available.</p>
                <div className="rq_book_div">
                    <div className="rq_left">    
                        <form>
                            <label htmlFor="isbn">ISBN13:</label><br/>
                            <input  
                                type="number"  
                                id="isbn"  
                                name="isbn"
                                value={rqbook.isbn13}
                                onChange={Isbnfn}
                            />
                            
                            {(rqbook.isbn13.length !== 13) && iserror && <h5 style={{color:"red",marginTop:"0.3em",boxSizing:'border-box'}}>ISBN13 should be 13 digit number</h5>}
                        </form>
                        <form>
                            <label htmlFor="author_rq">Author :</label><br/>
                            <input  
                                type="text"  
                                id="author_rq"  
                                name="author_rq"
                                value={rqbook.author}
                                onChange={Authorfn}
                            />
                        </form>
                        <form>
                            <label htmlFor="email">Email:</label><br/>
                            <input  
                                type="email"  
                                id="email"  
                                name="email"
                                value={rqbook.email}
                                onChange={Emailfn}
                            />
                        </form>
                    </div>
                    <div className="rq_right">    
                        <form>
                            <label htmlFor="title">Book Title:</label><br/>
                            <input  
                                type="text"  
                                id="title"  
                                name="title"
                                value={rqbook.bkname}
                                onChange={Titlefn}
                            />
                        </form>
                        <form>
                            <label htmlFor="qty">Quantity:</label><br/>
                            <input  
                                type="number"  
                                id="qty"  
                                name="qty"
                                value={rqbook.quanty}
                                onChange={Qtyfn}
                            />
                        </form>
                        <form>
                            <label htmlFor="phnoo">Phone number:</label><br/>
                            <input  
                                type="number"  
                                id="phnoo"  
                                name="phnoo"
                                value={rqbook.phno}
                                onChange={Phnofn}
                            />
                            {(rqbook.phno.length !== 10) && iserror && <h5 style={{color:"red",marginTop:"10px",boxSizing:'border-box'}}>Phone number should be a 10 digit number</h5>}
                        </form>
                    </div>
                </div>
                <button type="button" className="rq_btn" onClick={Rqsubmit}>Submit</button>
           </div>
           {(issub===true) && (iserror===false) && <h2 className='Erro' style={{color:"green"}}>Your request has been submitted. we will contact you shortly</h2>}
           {iserror &&  <h2 className='Erro' style={{color:"red"}}>Please enter all valid inputs</h2>}
           {/* {ispresent===true && bookid.length===13&&<h5 style={{color:"red",marginTop:"10px",boxSizing:'border-box', fontSize:'20px'}} className='Erro'>Book is Already Present</h5>}
            {ispresent===true && bookid.length===13&&<h5 style={{color:"blue",marginTop:"10px",boxSizing:'border-box', fontSize:'20px'}} className='Erro'><Link to={`/book/${bookid}`} style={{textDecoration:'none',color:'blue'}}>Click here to Visit it</Link></h5>} */}
        </>
    )
}
export default Requestabook;