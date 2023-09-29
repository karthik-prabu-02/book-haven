import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Appcontext } from '../ContextPovider/Appcontext';
const Cart = () => {
    
    const {bookcart,updBookcart} = useContext(Appcontext);
    // console.log(bookcart);
    // console.log(updBookcart);

   

    const Grandtotal = bookcart.reduce((acc,item)=>{
        return acc+item.price*item.count
    },0)


    const Inc = (book) => {
        // const selectedBookIndex = bookcart.findIndex((item) => item.ISBN13 === book);
        //     if (selectedBookIndex !== -1) {
        //     // Clone the cart and the selected book
        //     const updatedCart = [...bookcart];
        //     const selectedBook = { ...updatedCart[selectedBookIndex] };
        
        //     // Increment the count of the selected book
        //     selectedBook.count++;
        
        //     // Update the cart with the modified book
        //     updatedCart[selectedBookIndex] = selectedBook;
        
        //     // Update the cart state with the modified cart
        //     updBookcart(updatedCart);
        //   }


        
        updBookcart((prevCart) =>
            prevCart.map((item) =>
                item.ISBN13 === book ? { ...item, count: item.count + 1 } : item
            )
        );
    }
    const Dec = (book) => {
        updBookcart((prevCart) =>
            prevCart.map((item) =>
                item.ISBN13 === book ? { ...item, count: item.count - 1 } : item
            )
        );
        const Decbook = bookcart.find(item=>item.ISBN13 === book);
        if(Decbook.count===1){
            const filterdbooks = bookcart.filter(item=>item.ISBN13 !== book);
            console.log(filterdbooks,'filter');
            updBookcart(filterdbooks);
            
        }

    }





    const removeBook = (remove) => {
        const Removefromcart = bookcart.filter(book=>book.ISBN13 !== remove);
        console.log(Removefromcart,'rmv');
        updBookcart(Removefromcart);
    }
    

    const CartDetails = bookcart.map(book=>{
        return(
                <div className='p_details' style={{width:'100%',borderBottom:'2px solid gray'}} key={book.ISBN13}>    
                        <div className="product_list">
                            <div id='product_img_div' style={{display:'flex',justifyContent:'center',alignItems:'center'}}><img src={book.img} alt={book.name} /></div>
                            <div className='p_details_div'>
                                <h1 className='Product_heading'>{book.name}</h1>
                                <p className='product_author'><span style={{color:'red'}}>By : </span>{book.author}</p>
                                <p className='p_price_detail'>&#8377; {book.price}</p>
                                <div className='product_count'>
                                    <button onClick={()=>Dec(book.ISBN13)}>-</button>
                                    <div className='p_count'>{book.count}</div>
                                    <button onClick={()=>Inc(book.ISBN13)}>+</button>
                                    
                                </div>
                                <p style={{ color:'darkred'}} className='total_price'>Total Price : &#8377;{book.price * book.count}</p>
                            </div>
                        </div>
                        <div className='p_list_rmv_div'>
                            <button id='rmv_btn' onClick={()=>removeBook(book.ISBN13)}>Remove</button>
                        </div>
                    </div>
        )})
    
    
    
    
    
    return(
        <>
            <h1 className='heading_cart'>My Shooping Cart</h1>
            <div className='product_container'>
                {CartDetails.length===0? 
                    (<>
                        <p style={{fontSize:'16px',margin:'20px 20px 20px 20px',boxSizing:'border-box'}}>Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store. When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price, displayed on their product pages.</p>
                        <p style={{fontSize:'16px',margin:'20px 20px 20px 20px',boxSizing:'border-box'}}>Please <Link to='/book' style={{textDecoration:'none',color:'blue'}}>Click here</Link> to continue shopping</p>
                    </>) 
                        :
                    <>
                        {CartDetails}
                        <div className='total_product'>
                            <div className='t_product_price' >
                                <p><span>Total Items : </span>{bookcart.length}</p>
                                <p><span>Total Gross : </span>&#8377;{Grandtotal}</p>
                                <span className='t_product_price_shipping' style={{color:'green'}}>Ships within 18 to 20 days</span>
                            </div>
                            <div  className='t_product_price1'>
                                <h3 style={{color:'black'}}>Shipping in india : &#8377;497</h3>
                                <h3 style={{color:'darkred'}}>Amount Payable : &#8377;{Grandtotal+497}</h3>
                                <Link to='/login'><button id='buy_btn'>Buy</button></Link>
                            </div>
                        </div>
                    </>
                }
                
            </div>    
        </>
    )
}
export default Cart;