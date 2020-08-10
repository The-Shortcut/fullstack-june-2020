import React,{ useState } from 'react'
import Search from './Search'

const Navbar = ({ searchRestaurants }) => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    console.log(openMenu)
    return (
        <div className="nav-bar">
            {openMenu ?
            <div onClick={toggleMenu} className="menu">
            <ul>
                <li>all</li>
                <li>favorites</li>
            </ul>
            </div>
            : 
            <i onClick={toggleMenu} className="fas fa-bars"></i>
            }
        
        <h1>List of restaurants</h1> 
           {/* <button onClick={() => handleClick()}>Sort by stars</button> */}
        <Search searchRestaurants={searchRestaurants} />
        </div>
    )
}

export default Navbar
