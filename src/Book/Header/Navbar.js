
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserCircle,faCartShopping, faSearch, faHome, faUserFriends, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink,Link } from 'react-router-dom';


import img from '../image/1.jpg';
import { useContext, useState } from 'react';
import { Appcontext } from '../ContextPovider/Appcontext';



const Navbar = () => {
    
    
    const {Bookslist,searchresult,updSearchresult} = useContext(Appcontext)    
    const [search,updSearch] = useState('');
   
   
   
   
    const [sidebar,updSidebar] = useState(false);
    const sidebarFn = () => {
        updSidebar(!sidebar);
    }





    const Onsearch = (searchip) => {
        updSearch(searchip);
        const filteredResults = Bookslist.filter((item) =>
         item.name.toLowerCase().includes(searchip.toLowerCase())
        );
        updSearchresult(filteredResults);
        console.log(searchresult);

    }
    const clearSearch = () => {
        updSearch(''); 
        updSearchresult([]); 
    };
    
    const Navlinkstyle = ({isActive}) => {
        return{ 
            textDecoration : isActive ? "underline" : "none",
            fontWeight:isActive?'bold':'normal',
            color:isActive?'blue':'black'
        }
    }




    
    return (
        <>
            <div className="nav_container">
                <nav className="navbar">
                    <div className='logo_div'>
                        <Link to="/"><img src={img} alt="LOGO" id='logo'/></Link>
                    </div>
                    <div className='parent_ip'>
                        <input type="search" value={search} onChange={(e)=>Onsearch(e.target.value)} /><button className='search_btn'><FontAwesomeIcon icon={faSearch} id='search_ic'/></button>
                        <Link style={{width:'fit-content'}} to="/login"><FontAwesomeIcon icon={faUserCircle} id='user_ic'/></Link>
                        {/* <FontAwesomeIcon icon={faChevronDown} id='down_arrow_ic'/> */}
                        <Link style={{width:'fit-content'}} to="/cart"><FontAwesomeIcon icon={faCartShopping} id='shopping_ic'/></Link>
                    </div>
                    {search.length>0 &&<div className='search_result'>
                        
                        {search && (
                            <ul style={{listStyle:'none',margin:'0',padding:'0 0 0 0.5em'}}>
                                {searchresult.map((item) => (
                                    <li key={item.ISBN13} className='search_item'>
                                        <Link style={{textDecoration:'none',color:'black'}} to={`/book/${item.ISBN13}`} onClick={clearSearch}>{item.name}</Link>
                                     </li>
                                ))}
                             </ul>
                        )}
                        
                        
                        
                        
                        
                        
                        {/* {searchresult.map((item) => {
                            return <div className='search_item'>{item.name}</div>;
                        })} */}

                        </div>}
                    <div className='Mobile_navbar'>
                        <div><Link style={{textDecoration:'none', color:'black'}} to='/'><FontAwesomeIcon icon={faHome} id='home'/><br/><span style={{marginTop:'0.1em',boxSizing:'border-box'}}>Home</span></Link></div>
                        <div><Link style={{textDecoration:'none', color:'black'}} to='/login'><FontAwesomeIcon icon={faUserFriends} id='user'/><br/><span style={{marginTop:'0.1em',boxSizing:'border-box'}}>Account</span></Link></div>
                        <div><Link style={{textDecoration:'none', color:'black'}} to='/cart'><FontAwesomeIcon icon={faCartShopping} id='mob_shop'/><br/><span style={{marginTop:'0.1em',boxSizing:'border-box'}}>Cart</span></Link></div>
                        <div onClick={()=>sidebarFn()}>
                            <FontAwesomeIcon icon={faBars} id='handburg'/><br/>
                            <span style={{marginTop:'0.1em',boxSizing:'border-box'}}>Categories</span>
                        </div>

                    </div>
                    
                </nav>
                <nav className="nav_list">
                    <ul>
                        <li><NavLink style={Navlinkstyle} end to="/book">Book</NavLink></li>
                        <li><NavLink style={Navlinkstyle} to="/book/trending">Now Trending</NavLink></li>
                        <li><NavLink style={Navlinkstyle} to="/book/newarrival">New Arrivals</NavLink></li>
                        <li><NavLink style={Navlinkstyle} to="/book/bestseller">Best sellers</NavLink></li>
                        <li><NavLink style={Navlinkstyle} to="/book/intseller">International Best sellers</NavLink></li>
                        <li><NavLink style={Navlinkstyle} to="/book/awardwinners">Award winners</NavLink></li>
                        <li><NavLink style={Navlinkstyle} to="/authors">Featured Authors</NavLink></li>
                        <li><NavLink style={Navlinkstyle} to="/requestabook">Requst a Book</NavLink></li>
                        
                    </ul> 
                </nav>
                {sidebar && (
                    <div className='sidebar_navbar'>
                        <div className='sidebar_content'>
                            <ul className='sidebar_ul'>
                                <li className='sidebar_link' onClick={()=>updSidebar(!sidebar)}><NavLink  style={Navlinkstyle} end to="/book">Book</NavLink></li>
                                <li className='sidebar_link' onClick={()=>updSidebar(!sidebar)}><NavLink  style={Navlinkstyle} to="/book/trending">Now Trending</NavLink></li>
                                <li className='sidebar_link' onClick={()=>updSidebar(!sidebar)}><NavLink  style={Navlinkstyle} to="/book/newarrival">New Arrivals</NavLink></li>
                                <li className='sidebar_link' onClick={()=>updSidebar(!sidebar)}><NavLink  style={Navlinkstyle} to="/book/bestseller">Best sellers</NavLink></li>
                                <li className='sidebar_link' onClick={()=>updSidebar(!sidebar)}><NavLink  style={Navlinkstyle} to="/book/intseller">International Best sellers</NavLink></li>
                                <li className='sidebar_link' onClick={()=>updSidebar(!sidebar)}><NavLink  style={Navlinkstyle} to="/book/awardwinners">Award winners</NavLink></li>
                                <li className='sidebar_link' onClick={()=>updSidebar(!sidebar)}><NavLink  style={Navlinkstyle} to="/authors">Featured Authors</NavLink></li>
                                <li className='sidebar_link' onClick={()=>updSidebar(!sidebar)}><NavLink  style={Navlinkstyle} to="/requestabook">Requst a Book</NavLink></li>
                            </ul>
                            <div className='empty_space' onClick={()=>updSidebar(!sidebar)}></div>
                        </div>
                    </div>
                )}
            </div>
            
 
        </>
    )
};
export default Navbar;