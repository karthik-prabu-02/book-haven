import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";




import { useContext } from "react";
import { Appcontext } from "../ContextPovider/Appcontext";


const SingleBook = () => {
    const {ISBN13} = useParams();
    const {Bookslist,BestSellers,updBookcart,bookcart}=useContext(Appcontext);
    
    
    
    
    
    const SingleBook = Bookslist.find(book=>book.ISBN13 === parseInt(ISBN13));
    console.log(SingleBook,"singlebook");

   
    


    console.log(bookcart,'bookcart');


    const Addtocart = () => {
        
        const Alreadyincart = bookcart.filter(book=>book.ISBN13 === SingleBook.ISBN13);
        console.log(Alreadyincart,"already");
        
        // updAddbook({...SingleBook,count:count});
        
        if(Alreadyincart.length===0){
            
            updBookcart([...bookcart,SingleBook]);
            console.log(bookcart,'bookcart');
        }
       
    }






    return(
        
        <>
            <div className="single_book">
                <div className="book_sdetails">
                    <div className="sbook_img"><img src={SingleBook.img} alt="1"/></div>
                    <div className="s_book_about">
                        <span className="title_sbook">{SingleBook.name}</span><span className="binding_sbook">({SingleBook.binding})</span><span className="break_sbook">|</span> <span className="released_date"><b>Realesed</b> : {SingleBook.publishDate}</span><br/>
                        <span><b>By</b> : {SingleBook.author}</span><span className="break_sbook">|</span><span><b>Publisher</b> : {SingleBook.publisher}{SingleBook.publisher}</span ><br/>
                        <div>    
                            <FontAwesomeIcon icon={faStar} style={{color:'red'}} id="sbook_icon"/>
                            <FontAwesomeIcon icon={faStar} style={{color:'red'}} id="sbook_icon"/>
                            <FontAwesomeIcon icon={faStar} style={{color:'red'}} id="sbook_icon"/>
                            <FontAwesomeIcon icon={faStar} style={{color:'red'}} id="sbook_icon"/>
                            <FontAwesomeIcon icon={faStar} id="sbook_icon"/><br/>
                        </div>
                        <hr></hr>
                        <p className="sbook_price" style={{color:'red'}}>&#8377; {SingleBook.price}</p>
                        <p style={{color:'green',fontWeight:'bold',fontSize:'1em'}}>International Edition</p>
                        <p>Ships within <strong>18-20 Business Days</strong></p>
                        <p>Free Shipping in India and low cost Worldwide.</p>
                        <button className="red_sbtn" onClick={Addtocart}>Buy Now</button>
                        <Link to="/login"><button className="green_sbtn">Add to Wishlist</button></Link>

                    </div>
                </div>
                <div className="about_sbook">  
                    {(SingleBook.aboutAuthor==="")? null: <h2 style={{color:'red',margin:'1em 0 0 0'}}>About the Author</h2>}
                    {(SingleBook.aboutAuthor==="")? null: <p>{SingleBook.aboutAuthor}</p>}
                    
                    {(SingleBook.about==="")? null: <h2 style={{color:'red',margin:'0 0 0 0'}}>About the Book</h2>}
                    {(SingleBook.about==="")? null:  <p>{SingleBook.about}</p>}
                    
                    <hr style={{margin:'1em 0 0 0',padding:'0',boxSizing:'border-box'}}></hr>
                </div>
                <div style={{padding:'0 0.5em 0 0.5em',boxSizing:'border-box'}}>
                    <div className="category_div"><h1><Link to='/book/bestseller' style={{textDecoration:'none',color:'#d51912'}}>Best Sellers</Link></h1>
                        <div className="book_div">
                            {BestSellers.map((item)=>{
                                return(
                                    <div className="individual_book" key={item.ISBN13}>
                                        <Link to={`/book/${item.ISBN13}`} style={{textDecoration:'none',color:'black'}}><img className="book_img" src={item.img} alt={item.name}/></Link>
                                        <div className="book_title_author_price">
                                            <span className="book_name"><b><Link to={`/book/${item.ISBN13}`} style={{textDecoration:'none',color:'black'}}>{item.name}</Link></b></span>
                                            <span className="book_author">{item.author}</span>
                                            <span className="book_price">&#8377; {item.price}</span>
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </div>
                    </div>
                    <hr className="sbook_hr_sbook"></hr>
                </div>
                    <h2 style={{textAlign:'left',color:'red',paddingLeft:'2em', boxSizing:'border-box'}}>Product Details</h2>
                <div className="sbook_product_details">
                    <div style={{width:'50%',lineHeight:'1.5'}}>
                        <p><span>ISBN-13:{SingleBook.ISBN13}</span></p>
                        <p><span>Publisher:{SingleBook.publisher}</span></p>
                        <p><span>Publisher Imprint:{SingleBook.publisher}</span></p>
                        <p><span>Language:{SingleBook.language}</span></p>
                        <p><span>Returnable:Y</span></p>
                        <p><span>Width:{SingleBook.width}</span></p>
                    </div>
                    <div style={{width:'50%',lineHeight:'1.5'}}>
                        <p><span>ISBN-13:{SingleBook.ISBN13}</span></p>
                        <p><span>Publisher Data:{SingleBook.publishDate}</span></p>
                        <p><span>Binding:{SingleBook.binding}</span></p>
                        <p><span>Height:{SingleBook.height}</span></p>
                        <p><span>No of pages:{SingleBook.pages}</span></p>
                        <p><span>Series title:{SingleBook.name}</span></p>
                    </div>
                </div>
                    <div style={{marginBottom:'2em'}}>
                        <h2 style={{textAlign:'left',paddingLeft:'1.5em',boxSizing:'border-box'}}><span style={{color:'red'}}>Related Categories</span> : {SingleBook.category}</h2>
                        
                    </div>
                    {/* <div>
                        <h2>Similar Products</h2>
                    </div>
                    <div>
                        <h2>Customer Review</h2>
                    </div> */}

            </div>
        </>
    )
}

export default SingleBook;