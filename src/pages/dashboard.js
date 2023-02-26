import React from 'react'
import { useState, useEffect } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { BsDashCircleFill, BsFillFilterSquareFill } from 'react-icons/bs'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { MdClose, MdNoteAlt } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { TbCurrencyNaira } from 'react-icons/tb'
import Aside from '../components/aside'
import Nav from '../components/nav'
import LocationFilter from '../components/locationFilter'
import DateFilter from '../components/dateFilter'
import './pageStyle/dash.css'
import RecentSale from '../components/recentSale'
import TopSale from '../components/topSale'
import RecentPurchase from '../components/recentPurchase'
import FinishProduct from '../components/finishProd'
import ReturnOrder from '../components/returnOrder'
import Notification from '../components/notification'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({access, setAccess}) => {
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const [seller, setSeller] = useState({sellername: '', sellerloca: ''})
  const [def, setDef] = useState({deft: 'All Location', state: true})

  useEffect(()=>{
    let userInfo;
    let account;
    if (localStorage.getItem('userInfo') === null) {
      return navigate('/')
    }

    else if (localStorage.getItem('userInfo') !== null) {
      userInfo = JSON.parse(localStorage.getItem('userInfo'))
      account = JSON.parse(localStorage.getItem('account'))
      let ind = userInfo.index
      if (ind === -1) {
        return navigate('/')
      }
      let firstname = account.at(ind).profile.firstName
      let loca = account.at(ind).profile.location
      setSeller({sellername: firstname, location: loca})      
    }
  },[])

  return (
    <>
      <Nav menu={menu} setMenu={setMenu} seller={seller} def={def} setDef={setDef} />
      <header>
        <Aside menu={menu} setMenu={setMenu}/>
        <section className="dash-header">
          <section className="top">
              <article className="top-dash-info">
                <article className="left">
                  <h2>Welcome {seller.sellername}</h2>
                </article>
                <article className="right">
                  <LocationFilter  def={def} setDef={setDef}/>
                  <DateFilter />
                </article>
              </article>

              <article className="bottom-dash-info">
                <article className="purchase dash-info-box card" >
                    <span className='icon big-icon primary-color'><FaMoneyBillAlt /> </span> 
                    <section className="info">
                        <h4>TOTAL PURCHASE</h4>
                        <span className='detail'>
                            <span className="icon mid-icon"><TbCurrencyNaira /></span>
                            <h3>20,000,000</h3>
                        </span>
                    </section>
                </article>

                <article className="purchase dash-info-box card" >
                    <span className='icon big-icon success-color'><RiShoppingCart2Line   /> </span> 
                    <section className="info">
                        <h4>TOTAL SALE</h4>
                        <span className='detail'>
                            <span className="icon mid-icon"><TbCurrencyNaira /></span>
                            <h3>20,000,001</h3>
                        </span>
                    </section>
                </article>

                <article className="credit dash-info-box card" >
                    <span className='icon big-icon warning-color'><MdNoteAlt /> </span> 
                    <section className="info">
                        <h4>CREDIT DUES</h4>
                        <span className='detail'>
                            <span className="icon mid-icon"><TbCurrencyNaira/></span>
                            <h3>20,000,002</h3>
                        </span>
                    </section>
                </article>

                <article className="expensis dash-info-box card" >
                    <span className='icon big-icon danger-color'><BsDashCircleFill /></span> 
                    <section className="info">
                        <h4>TOTAL EXPENSIS</h4>
                        <span className='detail'>
                            <span className="icon mid-icon"><TbCurrencyNaira/></span>
                            <h3>20,000,003</h3>
                        </span>
                    </section>
                </article>
              </article>
          </section>
          <section className="bottom">
            <div className="item-highlight primary-bg">
              <RecentSale />
            </div>
            <section className="cont">
              <div className="item-highlight success-bg">
                <TopSale />
              </div>
              <div className="item-highlight warning-bg">
                <FinishProduct />
              </div>
            </section>
            <div className="item-highlight primary-bg">
              <RecentPurchase />
            </div>
            <div className="item-highlight danger-bg">
              <ReturnOrder />
            </div>
            
          </section>
        </section>
      </header>
    </>
  )
}

export default Dashboard
