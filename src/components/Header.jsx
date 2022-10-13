import React from 'react' 
import { Link } from 'react-router-dom';
import Button from './Button';
import { IoIosNotificationsOutline } from 'react-icons/io';
import {RiArrowDownSFill} from 'react-icons/ri';
import {AiOutlineSearch} from 'react-icons/ai'
import { IconContext } from 'react-icons';
const Header = ()=>{ 

    return(
        <>
            <header> 
                <div className="header-logo"> 
                    <Link to ='/'><img src="./images/logo.png" className="logo-img" alt="header logo"/>
                        </Link>
                </div>
                <div className="search-info">
                    <div className="search-input">
                        <form>
                            <div className="form-wrap">
                                <input type="text" placeholder='Search for anything' className="text-input"/> 
                                <IconContext.Provider value={{className:"search-btn"}}>
                                <Button buttonSize="small-btn-search"> <AiOutlineSearch /> </Button>
                                </IconContext.Provider>
                            </div>
                        </form>
                    </div>
                    <div className="header-info"> 
                        <Link to='/' className="header-link">Docs</Link>
                       
                        <div className="header-info__details">
                            <IconContext.Provider value={{className:"not-icon"}}> 
                                <IoIosNotificationsOutline/>
                            </IconContext.Provider>
                            <img src="./images/avatar.png" alt="user avatar" className="header-info__img"/>
                            <small className="header-info__name">Adedeji</small>
                            <IconContext.Provider value={{className:"arrowdown-icon"}}>
                                <RiArrowDownSFill />
                            </IconContext.Provider>
                            
                        </div>
                    </div>
                </div>
            </header>
        </> 
    )
}

export default Header;