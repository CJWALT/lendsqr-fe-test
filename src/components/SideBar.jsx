import React from 'react'
import { Link } from 'react-router-dom';
import {FaBriefcase, FaRegHandshake, FaUserCheck, FaUserTimes,FaRegChartBar} from 'react-icons/fa'
import {RiArrowDownSLine, RiTeamFill, RiExchangeDollarFill} from 'react-icons/ri'
import {IoHome} from 'react-icons/io5'
import {IoMdOptions} from 'react-icons/io'
import {GrMoney} from  'react-icons/gr'
import {GiReceiveMoney} from 'react-icons/gi'
import {HiUsers} from 'react-icons/hi'
import {MdSavings, MdManageAccounts} from 'react-icons/md'
import { IconContext } from 'react-icons';
const SideBar = () =>{ 

    return ( 
        <> 
        <IconContext.Provider value={{className:"sidebar-icon"}}>
            <aside> 
                <div className="top-links"> 
                    <Link to='/' className="aside-links no-padding"> 
                        <FaBriefcase/> Switch Organization <RiArrowDownSLine/> 
                    </Link>
                    
                    <Link to='/' className="aside-links no-padding space-top"> 
                    <IoHome/> Dashboard 
                    </Link>
                </div>
                <div className="customer-links">
                    <h6 className="aside--heading">
                        customers
                    </h6>
                    <Link to='/' className="aside-links active"> 
                        <HiUsers /> Users 
                    </Link>
                    <Link to='/' className="aside-links space-top"> 
                        <RiTeamFill/> Guarantor
                    </Link>
                    <Link to='/' className="aside-links"> 
                        <RiTeamFill /> Loans 
                    </Link>
                    <Link to='/' className="aside-links"> 
                        <FaRegHandshake /> Decison Models 
                    </Link>
                    <Link to='/' className="aside-links"> 
                       <MdSavings /> Savings 
                    </Link>
                    <Link to='/' className="aside-links"> 
                    <GiReceiveMoney /> Loan Requests                 
                    </Link>
                    <Link to='/' className="aside-links"> 
                       <FaUserCheck /> Whitelist 
                    </Link>
                    <Link to='/' className="aside-links"> 
                       <FaUserTimes /> Karma 
                </Link>
                    
                </div>
                <div className="business-links"> 
                    <h6 className="aside--heading">Business </h6> 
                    <Link to='/' className="aside-links no-padding"> 
                        <FaBriefcase /> Organization
                    </Link>
                    <Link to='/' className="aside-links"> 
                    <GiReceiveMoney /> Loan Products
                    </Link>
                    <Link to='/' className="aside-links"> 
                        <MdSavings /> Savings Products 
                    </Link>
                    <Link to='/' className="aside-links"> 
                        <GrMoney /> Fees and Charges 
                    </Link>
                    <Link to='/' className="aside-links"> 
                        <RiExchangeDollarFill /> Transactions 
                    </Link>
                    <Link to='/' className="aside-links"> 
                        <MdSavings /> Services 
                    </Link>
                    <Link to='/' className="aside-links"> 
                        <MdManageAccounts/> Service Account 
                    </Link>
                    <Link to='/' className="aside-links"> 
                        <MdSavings /> Settlements 
                    </Link>
                    <Link to='/' className="aside-links"> 
                        <FaRegChartBar /> Report  
                    </Link>
                </div> 
                <div className="settings-links"> 
                    <h6 className="aside--heading">Settings </h6> 
                    <Link to='/' className="aside-links no-padding"> 
                    < IoMdOptions/>Preferences </Link> 
                    <Link to='/' className="aside-links"> 
                    < IoMdOptions/>Fees and Pricing </Link> 
                    <Link to='/' className="aside-links"> 
                    < IoMdOptions/>Audit Logs </Link> 
                    <Link to='/' className="aside-links"> 
                    < IoMdOptions/>Systems Messages</Link> 

                </div> 
                <hr className="bar"></hr>
                <div className="aside--logout__version">
                    <Link to ='/' className="no-padding aside-links"> 
                    < IoMdOptions/>Logout</Link>
                    <small className="aside--logout__version--number"> 
                    v1.2.0</small> 
                </div> 

            </aside>
        </IconContext.Provider>
        </>
    )
}

export default SideBar;