import { id } from 'date-fns/locale'
import React from 'react'
import { useState, useEffect } from 'react'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import {recentSales, table} from '../dataArray'
import OrderInfo from './orderInfo'

const ActionBox = ()=>{
    const [dropDown,  setDropDown] = useState(false)

    function handleEdit() {
        if (dropDown) {
        setDropDown(false)
        
        }
        else if(!dropDown){
            setDropDown(true)
        }
    }

    function closeDrop(){
        setDropDown(false)
    }
    
    return(
        <button className='unClear action-btn' onBlur={closeDrop} onClick={handleEdit}>
            action 
            {!dropDown ? <span className='icon small-icon'><AiFillCaretDown /></span> :<span className='icon small-icon'><AiFillCaretUp /></span> }
            
            {dropDown && <ul >
                <li>Update Invoice</li>
                <li>Edit Invoice</li>
                <li>Invoice Info</li>
                <li>Print Receipt</li>
                <li>Delete Invoice</li>
            </ul> }
        </button>)
}

const ResentSale = ({saleLength}) => {
    const [recentSale, setRecentSale] = useState({all: [],ore: [], ife: [], enugu: []})
    const [selectedLocation, setSelectedLocation] = useState([])
    const [invoice, setInvoice] = useState('')
    const [invoiceStatus, setInvoiceStatus] = useState(false)

    function handleRecentSale(list, nam) {
        let drum = []
        for (let index = 0; index > -saleLength; index--) {
            drum.push(list.at(index))
        }
        setRecentSale({...recentSale, [nam]: drum})
        setSelectedLocation(recentSale.ife)
    }
    useEffect(()=>{
        let shopDB;
        let allLocation;
        let oreLocation;
        let ifeLocation;
        if (localStorage.getItem('shopDB') !== null) {
            shopDB = JSON.parse(localStorage.getItem('shopDB'))
            allLocation = shopDB.allLocation.saleInfo
            oreLocation = shopDB.onlineShop.onSaleInfo
            ifeLocation = shopDB.offlineShop.offSaleInfo
            
            if (allLocation.length !== 0 && allLocation.length >= 10) {
                handleRecentSale(allLocation, 'all')
            }
            else if (allLocation.length < 10) {
                handleRecentSale(allLocation, 'all')
            }
            else if (allLocation.length === 0) {
                setRecentSale({...recentSale, all: []})
            }
            // 
            if (oreLocation.length !== 0 && oreLocation.length >= 10) {
                handleRecentSale(oreLocation, 'ore')
            }
            else if (oreLocation.length < 10) {
                handleRecentSale(oreLocation, 'ore')
            }
            else if (oreLocation.length === 0) {
                setRecentSale({...recentSale, ore: []})
            }
            // //
            if (ifeLocation.length !== 0 && ifeLocation.length >= 10) {
                handleRecentSale(ifeLocation, 'ife')
            }
            else if (ifeLocation.length < 10) {
                handleRecentSale(ifeLocation, 'ife')
            }
            else if (ifeLocation.length === 0) {
                setRecentSale({...recentSale, ife: []})
            }
            
        } else{
            handleRecentSale(allLocation, 'all');
        }
    },[])

    return (
    <section className="card dash-bottom-info recent-sale">
        <article className="nav">
            <h3 className='primary-color'>Recent Orders</h3>
        </article>
        <section className="invoice table-holder">
            <table>
                <thead>
                    <tr>
                        {/* <th>Action</th> */}
                        <th>Date</th>
                        <th>Product Id</th>
                        <th>Customer</th>
                        <th>Total Amt.</th>
                        <th>Pay. Mtd</th>
                        <th>Total Paid</th>
                        <th>Credit Due</th>
                        <th>Pay. Status</th>
                        <th>Added By</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {recentSales.map((data, index)=>{
                        const {date, time,  id,invoice, location, paymtd, paystatus, seller, totamount, totpaid, creditbal, customer,  }= data
                        return(
                            <tr key={index} {...data} >
                                {/* <td><ActionBox /> </td> */}
                                <td>{date} - {time}</td>
                                <td>{id}</td>
                                <td>{customer}</td>
                                <td> {totamount}</td>
                                <td>{paymtd}</td>
                                <td> {totpaid}</td>
                                <td>{creditbal}</td>
                                <td>{paystatus}</td>
                                <td>{seller}</td>
                                <td>{location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
        {invoiceStatus && <section className="order-info">
            <OrderInfo invoice={invoice} invoiceStatus={invoiceStatus} setInvoiceStatus={setInvoiceStatus}/>
        </section>}
    </section>
  )
}

export default ResentSale
