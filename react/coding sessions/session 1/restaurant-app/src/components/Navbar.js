import React,{ useState } from 'react'
import Search from './Search'

const Navbar = ({ searchRestaurants, setFavorite }) => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    
    const getAll = () => {
        console.log('all')
        setFavorite(false)
    }

    const getFav = () => {
        console.log('favorites')
        setFavorite(true)
    }
    return (
        <div className="nav-bar">
            {openMenu ?
            <div onClick={toggleMenu} className="menu">
            <ul>
                <li onClick={getAll}><i style={{margin:'10px'}} className="fas fa-utensils"></i>all</li>
                <li onClick={getFav}><i style={{margin:'10px'}} className="fab fa-gratipay"></i>favorites</li>
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
