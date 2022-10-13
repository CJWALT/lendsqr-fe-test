import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
// import {getData} from '../list'
import Header from '../Header'
import SideBar from '../SideBar'
import Card from '../Card'
import Button from '../Button'
import {FaBeer} from 'react-icons/fa'
import {IoFilterSharp} from 'react-icons/io5'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {IoEyeOutline} from 'react-icons/io5'
import {FiUserX, FiUserCheck} from 'react-icons/fi'
import { IconContext } from 'react-icons';

import ReactPaginate from 'react-paginate'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

const Dashboard = ()=>{ 
    const [optClick, setOptClick] = useState(false)
    const handleOptionClick =()=>setOptClick(!optClick)
    
    const [filterClick, setFilterClick] = useState(false)
    const handleFilterClick =() => setFilterClick(!filterClick)

    //get api data
    const [items, setItems] = useState([])
        
    useEffect(()=>{ 

        const getData = async () =>{ 
            const res = await fetch(
                'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
            );
            const data = await res.json(); 
            setItems(data);
        }; 
        getData();  
    }, [])

    const fetchData = async (currentPage) =>{ 
        const res = await fetch ( 
            `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?page=${currentPage}&_limit=12`
        );
        const data = await res.json(); 
        return data;
    };

    
    //handle page click 
    const handlePageClick =async (data)=>{ 
        let currentPage = data.selected + 1
        console.log(currentPage)
        const dataFromServer = await fetchData(currentPage)
        console.log(dataFromServer)
        setItems(dataFromServer);
    };
    // const [list, setList] = useState([{
    //     name: "lendsqr",
    // }])

    // useEffect( ()=> { 
    //     let mounted = true;
    //     getData()
        
    //         .then(items => { 
    //             if (mounted){ 
    //                 setList(items)
    //             }
    //               console.log(items)
    //         })
          
    //     return() => mounted = false; 
        
    //     }, []);

    //     const dataItem = list.map(item => { 
    //         return <div>{item.orgName}</div> 
    //     })

       

        

//    const dataItem = list.map(item =>{
//         return <div> {item.orgName}</div>
       
        
//    });
   
    return(
        <>
        <Header />
        <section className="container"> 
            <SideBar /> 
            <main>
                <h1 className="user-heading"> User </h1>
                <div className = "card-wrap">
                    <Card cardIcon={<FaBeer/>}
                        cardText="Users"
                        cardNo="2,453"/> 
                        
                    <Card cardIcon={<FaBeer/>}
                        cardText="Active users"
                        cardNo="2,453"/> 
                    <Card cardIcon={<FaBeer/>}
                        cardText="Users with loans"
                        cardNo="12,453"/> 
                    <Card cardIcon={<FaBeer/>}
                        cardText="Users with savings"
                        cardNo="102,453"/> 
                </div>
                {/* <div className="wrap">  */}
                    {/* {items.map((item)=>{
                       return  <div className="body-wrap">
                            <div className="body"> 
                                <div className="org-name"> 
                                    {item.orgName}
                                </div>
                                <div className="user-name"> 
                                    {item.userName}
                                </div>
                                <div className="user-name"> 
                                    {item.email}
                                </div>
                            </div>
                        
                        </div> 
                    })}
                </div>
             */}
                <div className="table-body">
                    <div className="t-head">
                    <IconContext.Provider value={{className:"heading-icon"}}>
                        <h5> Organization <IoFilterSharp/></h5>
                        <h5> Username <IoFilterSharp/></h5>
                        <h5> Email <IoFilterSharp/></h5>
                        <h5> Phone Number <IoFilterSharp/></h5>
                        <h5> Date Joined <IoFilterSharp 
                                        onClick={handleFilterClick}/></h5>
                        <h5> status <IoFilterSharp/></h5>
                        <h5></h5>
                        </IconContext.Provider>
                    </div>
                    <IconContext.Provider value={ {className:"tbody-icon"}}>
                      {items.slice(0, 9).map((item) =>{
                        return(
                            
                                <div className="tbody-data">
                                    <p>{item.orgName}</p>
                                    <p>{item.userName}</p>
                                    <p className="para-email">{item.email}</p>
                                    <p>{item.phoneNumber}</p>
                                    <p>May 15, 2020 10:00 AM</p>
                                    <p className="inactive">Inactive</p>
                                    <p><HiOutlineDotsVertical
                                            onClick={handleOptionClick}/></p>
                                </div>
                            
                        )
                    
                      })}
                    </IconContext.Provider>
                        
                {filterClick ? ( <div className="filter-wrap">
                    <form className="filter-form"> 
                        <div className="filter-label">
                        <label>Organization</label>
                        <select defaultValue={'select'}>
                            <option>Eclipse </option>
                            <option>Eclipse </option>
                            </select>
                        </div>
                        <div className="filter-label">
                        <label>Username</label>
                        <input type='text' placeholder='User'/>
                        </div>
                        <div className="filter-label">
                        <label>Email</label>
                        <input type='text' placeholder='Email'/>
                        </div>
                        <div className="filter-label">
                        <label>Date</label>
                        <input type='date' placeholder='Date'  />
                        
                        </div>

                        <div className="filter-label">
                            <label>Phone Number</label>
                            <input type='number' placeholder='Phone Number'/>
                        </div>
                        <div className="filter-label">
                         <label>Status</label>
                            <select defaultValue={'select'} >
                                <option>Active</option>
                                <option>Blacklisted</option>
                            </select>
                        </div>
                        <div className="filter-label__btn"> 
                            <Button buttonStyle="btn--outline" buttonSize="small-btn">Reset</Button> 
                            <Button buttonColor="primary" buttonSize="small-btn"> Filter </Button>
                        </div>
                    </form>
                </div>) : null } 
                
                {optClick ? (
                        <div className= 'opt-wrap'>
                    <IconContext.Provider value={{className:"opt-icon"}}>
                                <Link to='/'className='options-link'><IoEyeOutline/>View Details</Link>
                                <Link to='/'className='options-link'><FiUserX/>Blacklist User</Link>
                                <Link to='/' className='options-link'>< FiUserCheck/>Activate User</Link>
                            
                    </IconContext.Provider>
                    </div>): null}
            </div>

                <div className="num-pagination"> 
                    <div className="num-select-wrap">
                        <p>Showing <select >
                            <option>100</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            </select> out of 100</p>     
                    </div>
        <IconContext.Provider value={{className:"pagingRightLeft"}}> 
      <ReactPaginate 
    previousLabel = {<MdKeyboardArrowLeft/>}
    nextLabel = {<MdKeyboardArrowRight/>}
    breakLabel = {'...'}
    pageCount = {16}
    marginPageDisplayed={2}
    pageRangeDisplayed = {3}
    onPageChange={handlePageClick}
    containerClassName={'num-wrap'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
    />

    </IconContext.Provider>             
                    {/* <IconContext.Provider value={{className:"pagingRightLeft"}}>
                    <ul className="num-wrap"> 
                    <li className="page-item"> <Link to='/' className="page-link"><MdKeyboardArrowLeft/></Link></li>
                        <li className="page-item">
                            <Link to='/' className="page-link">1</Link>
                        </li>
                        <li className="page-item">
                            <Link to='/' className="page-link">2</Link>
                            </li>  
                        <li className="page-item">
                            <Link to='/' className="page-link">3</Link>
                        </li>
                        <li className="page-item">
                            <Link to='/' className="page-link">...</Link>
                        </li>
                        <li className="page-item">
                            <Link to='/' className="page-link">7</Link>
                        </li>
                        <li className="page-item">
                            <Link to='/' className="page-link">8</Link>
                        </li>
                        <li className='page-item'>
                        <Link to='/' className="page-link"><MdKeyboardArrowRight/></Link>
                        </li>
                    </ul>
                    </IconContext.Provider> */}
                </div>

            
        </main>
        </section> 
        </>
    )
}
export default Dashboard;