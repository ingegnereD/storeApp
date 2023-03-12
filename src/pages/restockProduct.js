import React, { useEffect } from 'react'
import { useState } from 'react'    
import { compareAsc, format } from 'date-fns'
import Aside from '../components/aside'
import Nav from '../components/nav'
import { newProduct } from '../dataArray'

import { TextInput, ClickInput, ClickTextInput, Location } from '../components/inputComponent' 
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import './pageStyle/product.css'
import LocationFilter from '../components/locationFilter'
import { useNavigate } from 'react-router-dom'
import Notification from '../components/notification'

const RestockProduct = () => {
    const [presentDate, setPresentDate] = useState({date: format(new Date(), 'dd/MM/yyyy'), time: format(new Date(), 'HH:mm')})
    const [notif, setNotif] = useState({note: '', textclass: '', stat: false})
    const [menu, setMenu] = useState(false)
    const [def, setDef] = useState({deft: 'All Location', state: true})
    const [holder, setHolder] = useState([])
    const [tempHolder, setTempHolder] = useState([])
    const [clickInput, setClickInput] = useState({product: '', quantity: '', unitprice: '', brand: '', unit: ''})
    const [drop, setDrop] = useState(false)
    const navigate = useNavigate()
    
    useEffect(()=>{
        let userInfo;
        let account;
        if (localStorage.getItem('userInfo') === null) {
            return navigate('/')
        }
        else if (localStorage.getItem('userInfo') !== null) {
            userInfo = JSON.parse(localStorage.getItem('userInfo')).index
            if (userInfo === -1) {
                return navigate('/')
            }
        }
        // ---------- For the input operation -----------
        setTempHolder()
        setHolder(newProduct)


    },[clickInput])

    function handleSubmit(e) {
        e.preventDefault()
        console.log('restocking new product');
    }

    return (
        <>
            <Nav menu={menu} setMenu={setMenu}/>
            <header>
                <Aside menu={menu} setMenu={setMenu}/>
                <section className="product-page">
                    <section className="top" style={{overflow: 'visible', position: 'relative'}}>
                        <article className="left">
                            <h3>Restock Product</h3>
                        </article>
                        <article className="right" style={{overflow: 'visible', position: 'relative'}}>
                            {/* this only cones up when that on nav disappears.... */}
                            <LocationFilter def={def} setDef={setDef}/> 
                            
                        </article>
                    </section>
                    <main>
                        <form style={{overflow: 'visible', position: 'relative'}}>
                            <section className="top-form" style={{overflow: 'visible', position: 'relative'}}>
                                <TextInput fieldname = {'product'} inputyype={'text'} fieldinfo={'Product Name'} placeholder={'Semoli...'} drop={drop} clickInput={clickInput} setClickInput={setClickInput} holder={holder} tempHolder={tempHolder} setTempHolder={setTempHolder} setDrop={setDrop} setNotif={setNotif} />
                                
                                <TextInput fieldname = {'quantity'} inputyype={'number'} fieldinfo={'Quantity'} placeholder={'0000.00'} clickInput={clickInput} setClickInput={setClickInput} />
                                
                                <TextInput fieldname = {'unitprice'} inputyype={'number'} fieldinfo={'Unit Price'} placeholder={'0000.00'}  clickInput={clickInput} setClickInput={setClickInput}  />
                            </section>
                            <section className="action" style={{overflow: 'visible', position: 'relative'}}>
                                <ClickTextInput title={'Select Brand'} clickInput={clickInput} setClickInput={setClickInput} />

                                <ClickInput desc={'Unit'} clickInput={clickInput} setClickInput={setClickInput} />
                                <button className="unClear clear event" type='button'>
                                    Clear Field
                                </button>
                                <button className="unClear add event" type='submit' onSubmit={handleSubmit}>
                                    Restock Product
                                </button>
                            </section>
                        </form>
                        <section className="listed-product">

                            <div className="dash-bottom-info add-product">

                                <div className="table-holder">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Product</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Desc</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {newProduct.map((data, ind)=>{

                                                return(
                                                    <tr key={ind} {...data}>
                                                        <td>{data.date} - {data.time}</td>
                                                        <td>{data.product}</td>
                                                        <td>{data.unitprice}</td>
                                                        <td>{data.qty}</td>
                                                        <td>{data.desc}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>                    
                    </main>
                </section>
                {notif.stat && <Notification notif={notif}/>}
            </header>
        </>
    )
    }

export default RestockProduct