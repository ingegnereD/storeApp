import React, { useEffect } from 'react'
import { useState } from 'react'    
import Aside from '../components/aside'
import Nav from '../components/nav'
import { newProduct, unit } from '../dataArray'

import { TextInput, ClickInput, ClickTextInput, Location } from '../components/inputComponent' 
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import './pageStyle/product.css'
import LocationFilter from '../components/locationFilter'
import { useNavigate } from 'react-router-dom'
import Notification from '../components/notification'

const AddNewProduct = () => {
    const [notif, setNotif] = useState({note: '', textclass: '', stat: false})
    const [holder, setHolder] = useState([])
    const [drop, setDrop] = useState(false)
    const [menu, setMenu] = useState(false)
    const [hideText, setHideText] = useState(false)
    const [clickInput, setClickInput] = useState({product: '', quantity: '', unitprice: '', brand: '', unit: '', locat: ''})
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
    // --------- for input product check --------------
    setHolder(newProduct)
    })

    function handleProductSubmit(e) {
        e.preventDefault()
        console.log(clickInput);
        let filteredHolder = holder.filter((data)=> data.product.toLowerCase().includes(clickInput.product.toLowerCase()))
        if (filteredHolder.length > 0) {
            console.log('Product already exists...');
        }
        if (filteredHolder.length === 0) {
            console.log('Accepted', clickInput.product);
        }
        

    }
    return (
        <>
            <Nav menu={menu} setMenu={setMenu}/>
            <header>
                <Aside menu={menu} setMenu={setMenu} />
                <section className="product-page">
                    <section className="top" style={{position: 'relative', overflow: 'visible'}}>
                        <article className="left">
                            <h3>Add New Product</h3>
                        </article>
                        <article className="right" style={{position: 'relative', overflow: 'visible'}}>
                            {/* this only cones up when that on nav disappears.... */}
                            <LocationFilter /> 
                            
                        </article>
                    </section>
                    <main>
                        <form style={{position: 'relative', overflow: 'visible'}}>
                            <section className="top-form">
                                <TextInput fieldname = {'product'} inputyype={'text'} fieldinfo={'Product Name'} placeholder={'Semoli...'} clickInput={clickInput} setClickInput={setClickInput} setNotif={setNotif} holder={holder} drop={drop} setDrop={setDrop} />
                                <TextInput fieldname = {'quantity'} inputyype={'number'} fieldinfo={'Quantity'} placeholder={'0000.00'} clickInput={clickInput} setClickInput={setClickInput}/>
                                <TextInput fieldname = {'unitprice'} inputyype={'number'} fieldinfo={'Unit Price'} placeholder={'0000.00'} clickInput={clickInput} setClickInput={setClickInput}/>
                            </section>
                            <section className="action" style={{position: 'relative', overflow: 'visible'}}>
                                <ClickTextInput title={'Select Brand'} hideText={hideText} clickInput={clickInput} setClickInput={setClickInput}/>
                                <ClickInput desc={'Unit'} clickInput={clickInput} setClickInput={setClickInput} fetchedList={unit} />
                                <button className="unClear clear event" type='button'>
                                    Clear Field
                                </button>
                                <button className="unClear add event" type='button' onClick={(e)=>handleProductSubmit(e)} >
                                    Add Product
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

export default AddNewProduct