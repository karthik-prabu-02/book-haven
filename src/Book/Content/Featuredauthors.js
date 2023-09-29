import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { Appcontext } from '../ContextPovider/Appcontext';



const Featuredauthors = () => {
    const {FeaturedAuthors} = useContext(Appcontext);
    
    return(
        <>
            <h1 className='f_author_h1'>Featured Authors</h1>
            
            <div className='author_featured'>
                 
                    {FeaturedAuthors.map( item => {   
                    return( 
                            <div className='author_left' key={item.id}>
                                
                                <div>
                                    <Link 
                                        to={`/book/${item.author.toLowerCase().replace(' ', '')}`} 
                                        style={{textDecoration:"none",color:"black"}}
                                    >
                                        <img src={item.authorimg} alt={item.author}/>
                                    </Link>
                                </div>
                                <div>
                                    <Link 
                                        to={`/book/${item.author.toLowerCase().replace(' ', '')}`}  
                                        style={{textDecoration:"none",color:"black"}}
                                    >
                                        <h3>{item.author}</h3>
                                    </Link>
                                    <p className='author_featured_detail'>{item.aboutAuthor}</p>
                                </div>
                                
                            </div>
                    )})}
                
            </div>
        </>
    )
           
}
export default Featuredauthors;