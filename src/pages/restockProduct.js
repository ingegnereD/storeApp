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
        setHolder(newProduct)
        let name = 'product';
        switch (name) {
            case 'product':
                if (clickInput.product === '' || clickInput.product === ' ') {
                    setDrop(false)
                    
                }else{
                    const filtered = holder.filter((data)=> data.product.toLowerCase().includes(clickInput.product.toLowerCase()) )
                    setTempHolder(filtered)
                    setDrop(true)
                    if (filtered.length === 0) {
                        setDrop(false)
                        setNotif({note: 'Check Entered Product and Try again !!!', textclass: 'danger-color', stat: true})
                        setTimeout(()=>{
                            setClickInput({product: '', quantity: '', unitprice: '', brand: '', unit: ''})
                            setNotif({note:'', textclass: '', stat:false})
                        },3000)
    
                    }
                }
                break;
            default:
                break;
        }

    },[clickInput])

    function handleRestock(e) {
        e.preventDefault()
        holder.forEach((data, ind) => {
            if (data.product.toLowerCase().includes(clickInput.product.toLowerCase())) {
                console.log(ind, data.product);
                setClickInput({brand: '', product: '', quantity: '', unit: '', unitprice: ''})
            }
        });

    }
    function handleFieldClear() {
        setClickInput({product: '', quantity: '', unitprice: '', brand: '', unit: ''})
    }
    return (
        <>
            <Nav menu={menu} setMenu={setMenu} clickInput={clickInput} setClickInput={setClickInput} />
            <header>
                <Aside menu={menu} setMenu={setMenu}/>
                <section className="product-page">
                    <section className="top" style={{overflow: 'visible', position: 'relative'}}>
                        <article className="left">
                            <h3>Restock Product</h3>
                        </article>
                        <article className="right" style={{overflow: 'visible', position: 'relative'}}>
                            {/* this only cones up when that on nav disappears.... */}
                            <LocationFilter def={def} setDef={setDef} clickInput={clickInput} setClickInput={setClickInput}/> 
                            
                        </article>
                    </section>
                    <main>
                        <form style={{overflow: 'visible', position: 'relative'}}>
                            <section className="top-form" style={{overflow: 'visible', position: 'relative'}}>
                                <TextInput fieldname = {'product'} inputyype={'text'} fieldinfo={'Product Name'} placeholder={'Semoli...'} drop={drop} clickInput={clickInput} setClickInput={setClickInput} holder={holder} tempHolder={tempHolder} setDrop={setDrop} setNotif={setNotif} />
                                
                                <TextInput fieldname = {'quantity'} inputyype={'number'} fieldinfo={'Quantity'} placeholder={'0000.00'} clickInput={clickInput} setClickInput={setClickInput} />
                                
                                <TextInput fieldname = {'unitprice'} inputyype={'number'} fieldinfo={'Unit Price'} placeholder={'0000.00'}  clickInput={clickInput} setClickInput={setClickInput}  />
                            </section>
                            <section className="action" style={{overflow: 'visible', position: 'relative'}}>
                                {/* <ClickTextInput title={'Select Brand'} clickInput={clickInput} setClickInput={setClickInput} /> */}

                                {/* <ClickInput desc={'Unit'} clickInput={clickInput} setClickInput={setClickInput} /> */}
                                <button className="unClear clear event" type='button' onClick={handleFieldClear}>
                                    Clear Field
                                </button>
                                <button className="unClear add event" type='button' onClick={handleRestock}>
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