import React,{useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import { Appcontext } from '../ContextPovider/Appcontext';
const Trending = () => {
    //*********************************************New Arrival data*******************************    

   const {Nowtrending,commonvault,updCommonvault,updrangeList} = useContext(Appcontext);
   
   //*********************************************New Arrival data*******************************        
   
   
   
   
   //*********************************************Common storage*******************************
   
      
       useEffect(()=>{
               updCommonvault(Nowtrending);   
               updrangeList(Nowtrending);     
           //below line is to avoid warning msg about dependencies ---because dependencies causes infinite loop 
           // eslint-disable-next-line react-hooks/exhaustive-deps
       },[])
       
   
   
       
   //*********************************************Common storage*******************************
       
   
   
   
   //*********************************************select field *******************************
   const Selectfn = (e) => {
       
       if(e.target.value === "ltoh") {
           const LowtoHigh =[...commonvault].sort((a,b)=>a.price - b.price);
           updCommonvault(LowtoHigh);
       }
       if(e.target.value === "htol") {
           const HightoLow = [...commonvault].sort((a,b)=>b.price - a.price);
           updCommonvault(HightoLow);
       }
       if(e.target.value === ""){
          return
       }
   }
   //*********************************************select field *******************************
   
   
   
   //*********************************************Common storage render*******************************
       //updating Range and other filter properties in Filtered comp
       const Filteredcomp = commonvault.map((item)=>{
           return(
               <div className="new_right2a" key={item.ISBN13}>
                   <Link to={`/book/${item.ISBN13}`} style={{textDecoration:'none',color:'black'}}><img className="img" src={item.img} alt={item.name}/></Link>
                   <div className="title_author_price">
                       <span className="name"><b><Link to={`/book/${item.ISBN13}`} style={{textDecoration:'none',color:'black'}}>{item.name}</Link></b></span>
                       <span className="author">{item.author}</span>
                       <span className="price">&#8377; {item.price}</span>
                   </div>
               </div>
           )
       })
   //updating Range and other filter properties in Filtered comp
   //*********************************************Common storage render*******************************
   
   
   
   
   
   
   
   
   
       
       return(
           <>
               <div className="new_right" >
                   <h1 className="Title_Book_h1">Now Trending</h1>
                   <div className="new_right1">
                           <span><b>{Filteredcomp.length} Results found</b></span> 
                           <div>    
                               <span><b>Sort by:</b></span>
                                   <select value="selectInput" onChange={Selectfn} className="dropdown" >
                                       <option value="">Relevance</option>
                                       <option value="ltoh">Price- low to high</option>
                                       <option value="htol">price- high to low</option>
                                   </select>         
                           </div>
                       </div>
                       {commonvault.length===0 ? (
                           <div className="error_msg_filter">
                               <h2 style={{color:"red"}}>0 Match found</h2>
                           </div>)
                           :
                           (<div className="new_right2">
                               {Filteredcomp} 
                           </div>)
                       }
               </div>                          
           </>       
       )
}
export default Trending;