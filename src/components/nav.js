import React from 'react'
import { useState,useEffect } from 'react'
import { compareAsc, format } from 'date-fns'
import {FaBars, FaMoneyBillAlt} from 'react-icons/fa'
import {BsFillMoonFill, BsFillSunFill, BsFillCalendarEventFill} from 'react-icons/bs'
import {MdDashboard} from 'react-icons/md'
import {BiCalculator} from 'react-icons/bi'
import {GoDiffAdded} from 'react-icons/go'
import { IoIosListBox  } from 'react-icons/io'
import { AiFillCaretDown, AiFillCaretUp, AiFillHome } from 'react-icons/ai'
import {BsMenuButtonWideFill} from 'react-icons/bs'
import LocationFilter from './locationFilter'
import { useNavigate } from 'react-router-dom'

const Nav = ({menu, setMenu}) => {
    const [navBtn, setNavBtn] = useState({calc: false, pos: false, profit: false, home: false, list: false})
    const [theme, setTheme] = useState(true)   
    const [fetched, setFetched]= useState({seller: '', location: ''})
    const [def, setDef] = useState({deft: '', state: true})
    const navigate = useNavigate()

    useEffect(()=>{
        let userInfo;
        let account;
        if (localStorage.getItem('userInfo') === null || localStorage.getItem('account') === null) {
            return navigate('/')   
        }
        if (localStorage.getItem('userInfo') !== null && localStorage.getItem('account') !== null) {
            userInfo = JSON.parse(localStorage.getItem('userInfo'))
            account = JSON.parse(localStorage.getItem('account'))
            let ind = userInfo.index
            if (ind === -1) {
                return navigate('/')
            }
            let fetchedLocation = account.at(ind).profile.location
            let firstname = account.at(ind).profile.firstName
            setFetched({...fetched, seller: firstname})
            if (typeof(fetchedLocation) === 'undefined') {
                setFetched({...fetched,seller: firstname , location: 'Ile-Ife, Osun state'})
                setDef({...def, deft: 'Ile-Ife, Osun state', state: true})
            }
            else if (typeof(fetchedLocation) !== 'undefined') {
                setFetched({...fetched,seller: firstname, location: fetchedLocation})
                setDef({...def, deft: fetchedLocation, state: true})
            }
        }
    },[])

    function handleTheme() {
        if (theme) {
            setTheme(false)
        }
        if (!theme) {
            setTheme(true)
        }
    }
    function handleNavBtnEnter(e){
        let name = e.target.className
        if (name.includes('home')){
            setNavBtn({...navBtn, home: true})
        }
        if (name.includes('calc')){
            setNavBtn({...navBtn, calc: true})
        }
        if (name.includes('profit')){            
            setNavBtn({...navBtn, profit: true})
        }
        if (name.includes('pos')){            
            setNavBtn({...navBtn, pos: true})
        }
        if (name.includes('list')){            
            setNavBtn({...navBtn, list: true})
        }
        
    }
    function handleNavBtnLeave(e){
        setNavBtn({...navBtn, home: false, calc: false, list: false, pos: false, profit: false})
    }

    function handleMenu(){
        if(menu){
            setMenu(false)
        }
        if(!menu){
            setMenu(true)
        }
    }

    return (
        <nav>
            <article className="aside-nav">
                <h2><span className="feature">G2S</span> GLOBAL</h2>
                <span className={menu ? "icon mid-icon danger-color" : "icon mid-icon primary-color" } onClick={handleMenu}><BsMenuButtonWideFill /> </span>
            </article>
            <article className="header-nav">
                <article className="left">
                    <LocationFilter def={def} setDef={setDef} />
                </article>
                <article className="right">
                    <button className="btn unClear home" onMouseEnter={(e)=>handleNavBtnEnter(e)} onMouseLeave={(e)=>handleNavBtnLeave(e)} onClick={()=> {return navigate('/dashboard')}}>
                        <span className='icon mid-icon'><AiFillHome /></span> 
                        <span className="icon-name">Home</span> 
                        {navBtn.home && <p>Home</p>} 
                    </button>
                    <button className="btn unClear pos" onMouseEnter={(e)=>handleNavBtnEnter(e)} onMouseLeave={(e)=>handleNavBtnLeave(e)}>
                        <span className='icon mid-icon'><MdDashboard/></span>  
                        <span className="icon-name">POS</span> 
                        {navBtn.pos && <p>Pos</p>} 
                    </button>
                    
                    <button className="btn unClear calc" onMouseEnter={(e)=>handleNavBtnEnter(e)} onMouseLeave={(e)=>handleNavBtnLeave(e)}>
                        <span className='icon mid-icon'><BiCalculator /></span>  
                        <span className="icon-name">Calc</span> 
                        {navBtn.calc && <p>Calculator</p>} 
                    </button>
                    
                    <button className="btn unClear-btn profit" onMouseEnter={(e)=>handleNavBtnEnter(e)} onMouseLeave={(e)=>handleNavBtnLeave(e)}>
                        <span className='icon mid-icon'><FaMoneyBillAlt /></span> 
                        <span className="icon-name">Prof.</span>
                        {navBtn.profit &&<p>Profit</p>}
                    </button>

                    <button className="btn unClear-btn list" onMouseEnter={(e)=>handleNavBtnEnter(e)} onMouseLeave={(e)=>handleNavBtnLeave(e)}>
                        <span className='icon mid-icon'><IoIosListBox /></span> <span className="icon-name">List</span>{navBtn.list &&<p>list</p>}</button>
                    
                    <div className="date-info">
                        <span className="icon mid-icon"><BsFillCalendarEventFill/> </span>
                        <h4>{format(new Date(), 'dd/MM/yyyy')}</h4>
                    </div>
                    <article className="lighting" onClick={handleTheme}>
                        <span id='light-icon' className={theme? "light-mode" : "dark-mode" }><BsFillSunFill /></span>
                        <span id='dark-icon' className={theme? "dark-mode" : "light-mode"}><BsFillMoonFill /></span>
                    </article>
                    <article className="admin">
                        <h4>{fetched.seller}</h4>
                        <small>cashier</small>
                    </article>
                </article>
            </article>
        </nav>
    )
}

export default Nav
