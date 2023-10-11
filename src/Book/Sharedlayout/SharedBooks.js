// import React, {useState,useEffect} from 'react';
import { useContext } from 'react';
import React,{useState} from 'react';
import {Outlet} from 'react-router-dom';
import { Appcontext } from '../ContextPovider/Appcontext';



const SharedBooks = () => {
    
//*********************************************Common storage*******************************
    //Import common vault
    const {commonvault,updCommonvault,rangeList}=useContext(Appcontext);

    //Import common vault
        
   
    const[backupvault,updBackupvault]=useState([]);
    // const [backupcommonvault,updBackupcommonvault]=useState(commonvault)
    // console.log(backupcommonvault,'backupc');
    console.log(backupvault,'backupvault');
    

    
//*********************************************Common storage*******************************
    //*********************************************range input*******************************
    const [val,updval]=useState(22000);
    
    const Rangefn = (e) => {
        //e.preventDefault();
        updval(e.target.value);
            // const backupCommonvault = [...commonvault] ;
            // console.log(backupCommonvault,"backup c");  

            const RangedBooks= 
                rangeList.filter((book)=>{
                    const Bookprice = parseFloat(book.price);
                    return Bookprice >= 75 && Bookprice <= val;
                }); 
            
           
            // const removedBooks = commonvault.filter((book) => !RangedBooks.some((RangedBook) => RangedBook.id === book.id));
            // const removedBooks = commonvault.filter((book) => !RangedBooks.includes(book));
            // console.log(backupvault,"removerd"); 
            
            
            
            
            
            //console.log(RangedBooks,"Ranged books");  
            // updBackupvault([...backupvault,removedBooks]);
            updCommonvault(RangedBooks);
            
            return
    }
    //console.log(val,"val");
   
//*********************************************range input*******************************






//*********************************************Binding Checkbox input*******************************
    //************************paperback*********************
        const[isPaperback,updispaperback]=useState(false);
        
        const Paperbackfn = (e) => {
            if(isHardcover===false & isEbook===false){   
                if(!isPaperback){    
                    updispaperback(e.target.checked);
                    //updIsfiltered(true);
                    const Paperback = commonvault.filter(book=>book.binding==="paperback");
                    
                    updBackupvault([...commonvault]);
                    
                    updCommonvault(Paperback);
                }
                else{
                    updispaperback(false);
                
                    updCommonvault(backupvault);
                }
                // if(commonvault.length===0){

                // }
            }
        }
        
        

    //************************paperback*********************
    
    
    //************************Hardcover*********************
        const[isHardcover,updisHardcover]=useState(false);
        const Hardcoverfn = (e) => {
            if(isPaperback===false & isEbook===false){    
                if(!isHardcover){
                    updisHardcover(e.target.checked);
                    //updIsfiltered(true);
                    const Hardcover = commonvault.filter(book=>book.binding==="Hardcover");
                    
                    updBackupvault([...commonvault]);
                    
                    updCommonvault(Hardcover);
                    //console.log(Hardcover,"Hardcover");
                }
                else{
                    updisHardcover(false);
                    
                    updCommonvault(backupvault);
                }
            }
            
        }
    //************************Hardcover*********************
    
    
    //************************Ebook*********************
    const[isEbook,updisEbook]=useState(false);
    //console.log(Ebook,"Ebook");
    const Ebookfn = (e) =>{
            // console.log(isEbook,"isEbook");
            // console.log(!isEbook,"!isEbook");
            // updisEbook(e.target.checked);
            // console.log(e.target.checked);
        if(isPaperback === false & isHardcover === false) {    
            if(!isEbook) {
                updisEbook(e.target.checked);
                //updIsfiltered(true);
                const Ebook = commonvault.filter(book=>book.binding==="e-book");
                
                updBackupvault([...commonvault]);
        
                updCommonvault(Ebook);
                return
            }
            else{
                updisEbook(false);
                updCommonvault(backupvault);
            }
            
        }
    }
    
    //************************Ebook*********************


//*********************************************Binding Checkbox input*******************************

//*********************************************category Checkbox input*******************************

    // ********************************* Fiction ***********************************
        const [isfiction,updisFiction] = useState(false);
        const Fictionfn = (e) => {
            if(ishistory===false & 
                isphilosophy===false & 
                ispolity === false &
                islaw === false &
                issocial === false ) { 
                    if(!isfiction){
                        updisFiction(e.target.checked);
                        const Fiction = commonvault.filter(book=>book.category === "Fiction");
                        
                        updBackupvault([...commonvault]);

                        updCommonvault(Fiction);
                    }
                    else{
                        updisFiction(false);

                        updCommonvault(backupvault);
                    }
            }
        }
    // ********************************* Fiction ***********************************




    // ********************************* History ***********************************
        const [ishistory,updisHistory] = useState(false);
        const Historyfn = (e) => {
            if(isfiction === false &
                isphilosophy===false & 
                ispolity === false &
                islaw === false &
                issocial === false ) {
                    if(!ishistory){
                        updisHistory(e.target.checked);
                        const History = commonvault.filter(book=>book.category === "History");
                        updBackupvault([...commonvault]);
                        updCommonvault(History)
                    } else{
                        updisHistory(false);
                        updCommonvault(backupvault);
                    }
                    
            }

        }
    // ********************************* History ***********************************


    // ********************************* Philosophy ***********************************
        const [isphilosophy,updisPhilosophy] = useState(false);
        const Philosophyfn = (e) => {
            if(isfiction === false &
                ishistory===false & 
                ispolity === false &
                islaw === false &
                issocial === false ) { 
                    if(!isphilosophy){
                        updisPhilosophy(e.target.checked);
                        const Philosophy = commonvault.filter(book=>book.category === "Philosophy");
                        updBackupvault([...commonvault]);
                        updCommonvault(Philosophy)
                    } else{
                        updisPhilosophy(false);
                        updCommonvault(backupvault);
                    }
            }

        }
    // ********************************* Philosophy ***********************************



    // ********************************* Polity ***********************************
        const [ispolity,updisPolity] = useState(false);
        const Polityfn = (e) => {
            if(isfiction === false &
                ishistory===false & 
                isphilosophy===false & 
                islaw === false &
                issocial === false ) { 
                    if(!ispolity){
                        updisPolity(e.target.checked);
                        const Polity = commonvault.filter(book=>book.category === "Polity");
                        updBackupvault([...commonvault]);
                        updCommonvault(Polity)
                    } else{
                        updisPolity(false);
                        updCommonvault(backupvault);
                    }
            }

        }
    // ********************************* Polity ***********************************


    // ********************************* Social service ***********************************
        const [issocial,updisSocial] = useState(false);
        const Socialfn = (e) => {
            if(isfiction === false &
                ishistory===false & 
                isphilosophy===false & 
                ispolity === false &
                islaw === false ) { 
                    if(!issocial){
                        updisSocial(e.target.checked);
                        const Social = commonvault.filter(book=>book.category === "Social services & welfare, criminology");
                        updBackupvault([...commonvault]);
                        updCommonvault(Social)
                    } else{
                        updisSocial(false);
                        updCommonvault(backupvault);
                    }
            }

        }
    // ********************************* Social service ***********************************





    // ********************************* Law ***********************************
        const [islaw,updisLaw] = useState(false);
        const Lawfn = (e) => {
            if(isfiction === false &
                ishistory===false & 
                isphilosophy===false & 
                ispolity === false &
                issocial === false ) { 
                    if(!islaw){
                        updisLaw(e.target.checked);
                        const Law = commonvault.filter(book=>book.category === "Law");
                        updBackupvault([...commonvault]);
                        updCommonvault(Law)
                    } else{
                        updisLaw(false);
                        updCommonvault(backupvault);
                    }
            }

        }
    // ********************************* Law ***********************************


    



//*********************************************category Checkbox input*******************************




















//*********************************************Common storage render*******************************

    
    
    
    
    return(
        <>
            <div className="new_arr">    
              <div className="common_new">
                <div className="new_left">
                        <h2 className='Filter_heading'>Refine your search</h2><hr className='refine_search_hr'/>
                            <h3 className='Price_range'>Price Range:<span className="price_range_left">&#8377;{0} - </span><span className="price_range_left">&#8377;{val}</span></h3>
                            <div className='slider_bar'><input 
                                type="range"
                                className ="range"
                                name ="range"
                                max="22000"
                                min="0"
                                step='50'    
                                value={val}
                                onChange={Rangefn}
                            /></div>
                            <hr className='refine_search_hr'></hr>
                        <h2 className='Filter_heading'>Binding</h2>
                        <div className="checkbox">   
                            <div className='checkbox_div'>
                            <input
                                className="checkbox_input"
                                type="checkbox"
                                checked={isPaperback}
                                onChange={Paperbackfn}
                            /><span className='checkbox_span_title' >Paperback</span>
                            </div>
                            <br/>
                            <div className='checkbox_div'>
                            <input
                                className="checkbox_input"
                                type="checkbox"
                                checked={isHardcover}
                                onChange={Hardcoverfn}
                            /><span className='checkbox_span_title' >Hardcover</span>
                            </div>
                            <br/>
                            <div className='checkbox_div'>
                            <input
                                className="checkbox_input"
                                type="checkbox"
                                checked={isEbook}
                                onChange={Ebookfn}
                            /><span className='checkbox_span_title' >e-book</span>
                            </div>
                        </div>
                        <hr className='refine_search_hr'/>
                        <h2 className='Filter_heading'>Category</h2>
                        <div className="checkbox">   
                            <div className='checkbox_div'>
                            <input
                                className="checkbox_input"
                                type="checkbox"
                                checked={isfiction}
                                onChange={Fictionfn}
                            /><span className='checkbox_span_title' >Fiction</span>
                            </div>
                            <br/>
                            <div className='checkbox_div'>
                            <input
                                className="checkbox_input"
                                type="checkbox"
                                checked={ishistory}
                                onChange={Historyfn}
                            /><span className='checkbox_span_title' >History</span>
                            </div>
                            <br/>
                            <div className='checkbox_div'>
                            <input
                                className="checkbox_input"
                                type="checkbox"
                                checked={isphilosophy}
                                onChange={Philosophyfn}
                            /><span className='checkbox_span_title' >Philosophy</span>
                            </div>
                            <br/>
                            <div className='checkbox_div'>
                            <input
                                className="checkbox_input"
                                type="checkbox"
                                checked={ispolity}
                                onChange={Polityfn}
                            /><span className='checkbox_span_title' >Polity</span>
                            </div>
                            <br/>
                            <div className='checkbox_div'>
                            <input
                                className="checkbox_input"
                                type="checkbox"
                                checked={issocial}
                                onChange={Socialfn}
                            /><span className='checkbox_span_title' >Social services</span>
                            </div>
                            <br/>
                            <div className='checkbox_div'>
                            <input
                                className="checkbox_input"
                                type="checkbox"
                                checked={islaw}
                                onChange={Lawfn}
                            /><span className='checkbox_span_title' >Law</span>
                            </div>
                        </div>
                        <hr className='refine_search_hr'/>
                    </div>                 
                    <Outlet/>
                </div>
            </div>
        
        
        
        
        </>

    )
}
export default SharedBooks;