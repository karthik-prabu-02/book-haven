import React,{ useContext} from "react";
import {Link } from 'react-router-dom';
import {Appcontext} from "../ContextPovider/Appcontext";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faTrophy,faBookJournalWhills ,faBoxTissue,faBookOpenReader,faBookAtlas } from "@fortawesome/free-solid-svg-icons";
//import { useState } from "react";
//import Books from "../data";

import img from '../image/Home/index.jpg';
import img0 from '../image/Home/collectio/1.jpg';
import img1 from '../image/Home/bookfair.jpg';





const Home = () => {
    const {Nowtrending,BestSellers,NewArrival,Intbstsellers,Awardwinners,FeaturedAuthors} = useContext(Appcontext);
   


    return(
        <>
             <Link to="/book"><img src={img0} alt="everything" id="img0"/></Link>
            <img src={img} alt="everything" id="img1"/>
            <div className="home_container">
                <div className="home_icon" style={{width:"100%",height:"100%"}}>
                    <div style={{marginRight:'0.5em',boxSizing:'border-box'}}><Link to="/book/bestseller" style={{textDecoration:'none',color:'black',display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-around"}}><FontAwesomeIcon icon={faAward} id="award"/><p>Best seller</p></Link></div>
                    <div style={{marginRight:'0.5em',boxSizing:'border-box'}}><Link to="/book/awardwinners" style={{textDecoration:'none',color:'black',display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-around"}}><FontAwesomeIcon icon={faTrophy} id="trophy"/><p>Award winners</p></Link></div>
                    <div style={{marginRight:'0.5em',boxSizing:'border-box'}}><Link to="/book/intseller" style={{textDecoration:'none',color:'black',display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-around"}}><FontAwesomeIcon icon={faBoxTissue} id="boxtissue"/><p>International<br/> best seller</p></Link></div>
                    <div style={{marginRight:'0.5em',boxSizing:'border-box'}}><Link to="/book/newarrival" style={{textDecoration:'none',color:'black',display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-around"}}><FontAwesomeIcon icon={faBookAtlas} id="bookatlas"/><p>New Arrivals</p></Link></div>
                    <div style={{marginRight:'0.5em',boxSizing:'border-box'}}><Link to="/book/trending" style={{textDecoration:'none',color:'black',display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-around"}}><FontAwesomeIcon icon={faBookOpenReader} id="openreader"/><p>Fiction Books</p></Link></div>
                    <div style={{marginRight:'0.5em',boxSizing:'border-box'}}><Link to="/authors" style={{textDecoration:'none',color:'black',display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-around"}}><FontAwesomeIcon icon={faBookJournalWhills} id="journal"/><p>Featured Books</p></Link></div>
                </div>
                
                <div className="category_div"><h1><Link to='/book/trending' style={{textDecoration:'none',color:'#d51912'}}>Now Trending</Link></h1>
                    <div className="book_div">
                        {Nowtrending.map((item)=>{
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
                <img src={img1} alt="" id="img2"/>
                <div className="category_div"><h1><Link to='/book/newarrival' style={{textDecoration:'none',color:'#d51912'}}>New Arrivals</Link></h1>
                    <div className="book_div">
                        {NewArrival.map((item)=>{
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
                <div className="category_div"><Link to='/book/intseller' style={{textDecoration:'none',color:'#d51912'}}><h1>International Best sellers</h1></Link>
                    <div className="book_div">
                        {Intbstsellers.map((item)=>{
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
                <div className="category_div"><h1><Link to='/book/awardwinners' style={{textDecoration:'none',color:'#d51912'}}>Award winners</Link></h1>
                    <div className="book_div">
                        {Awardwinners.map((item)=>{
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
                <div className="category_author_div"><h1>Featured Authors</h1>
                    <div className="book_div author_scroll" >
                        {FeaturedAuthors.map((author)=>{
                            return(
                                <div className='Featured_author' key={author.id}>
                                    <Link to={`/book/${author.author.toLowerCase().replace(' ', '')}`} style={{textDecoration:"none",color:"black"}}><img src={author.authorimg} alt={author.author} id="author_img"/></Link>
                                    <Link to={`/book/${author.author.toLowerCase().replace(' ', '')}`} style={{textDecoration:"none",color:"black"}}><h3>{author.author}</h3></Link>
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
