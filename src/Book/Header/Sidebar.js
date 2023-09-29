const SidebarNav=()=>{
    return(
        <>
            <div className='sidebar_navbar'>
                <ul>
                    <li><NavLink className="sidebar_link" style={Navlinkstyle} end to="/book">Book</NavLink></li>
                    <li><NavLink className="sidebar_link" style={Navlinkstyle} to="/book/trending">Now Trending</NavLink></li>
                    <li><NavLink className="sidebar_link" style={Navlinkstyle} to="/book/newarrival">New Arrivals</NavLink></li>
                    <li><NavLink className="sidebar_link" style={Navlinkstyle} to="/book/bestseller">Best sellers</NavLink></li>
                    <li><NavLink className="sidebar_link" style={Navlinkstyle} to="/book/intseller">International Best sellers</NavLink></li>
                    <li><NavLink className="sidebar_link" style={Navlinkstyle} to="/book/awardwinners">Award winners</NavLink></li>
                    <li><NavLink className="sidebar_link" style={Navlinkstyle} to="/authors">Featured Authors</NavLink></li>
                    <li><NavLink className="sidebar_link" style={Navlinkstyle} to="/requestabook">Requst a Book</NavLink></li>
                </ul>
            </div>
        
    
        </>
    )
}

export default SidebarNav;