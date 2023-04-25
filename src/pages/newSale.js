import React, { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiMinus } from 'react-icons/bi'
import { BsCash, BsPhoneFill } from 'react-icons/bs'
import { FaCreditCard } from 'react-icons/fa'
import { MdAdd, MdOutlinePeopleAlt } from 'react-icons/md'
import { TbBoxMultiple, TbCurrencyNaira } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { ClickTextInput, CustClickTextInput, NoLabTextInput, TextInput } from '../components/inputComponent'
import Nav from '../components/nav'
import { avilableProduct, tempSaleList } from '../dataArray'
import './pageStyle/sale.css'

const NewSale = () => {
    const [menu, setMenu] = useState(false)
    const [icon, setIcon] = useState(<MdOutlinePeopleAlt />)
    const [title, setTitle] = useState('Walk-In Customer')
    const [size, setSize] = useState(window.innerWidth)
    const [hideText, setHideText] = useState(false)
    const [clickInput, setClickInput] = useState({product: ''})
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

        window.addEventListener('resize', ()=>{
            setSize(window.innerWidth)
        });
        if (size <= 630){
            setTitle('')
        }
        if (size > 630) {
            setTitle('Walk-In Customer')
        }
    },[size])
    return (
        <>
            <Nav menu={menu} setMenu={setMenu} />
            <section className="sale-page">
                <main>
                    <section className="left">
                        <article className="top" style={{overflow: 'visible', position: 'relative'}}>
                            <CustClickTextInput title={title} icon={icon} hideText={hideText}/>
                            <NoLabTextInput fieldname={'product'} inputtype={'text'} placeholder={'Enter product name sell....'} clickInput={clickInput} setClickInput={setClickInput} />
                        </article>
                        <article className="sale-list">
                            <div className="dash-bottom-info">
                                <div className="table-holder">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>S/N</th>
                                                <th>Product</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Total Price</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tempSaleList.map((data, ind)=>{
                                                    return(
                                                        <tr key={ind}>
                                                            <td>{ind + 1}</td>
                                                            <td>{data.product}</td>
                                                            <td>{data.unitprice}</td>
                                                            <td><Quantity clickInput={clickInput} setClickInput={setClickInput}/></td>
                                                            <td>{data.totamount}</td>
                                                            <td><RemoveList /> <span className="icon mid-icon"><AiOutlineCloseCircle /></span></td>
                                                        </tr>

                                                    )
                                                })
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <section className="sale-info">
                                <span className="items"><h4>Total Items: 15</h4></span>
                                <span className="amt">
                                    <h4>Total Amount: <span className="icon mid-icon"><TbCurrencyNaira /></span>
                                    225,350
                                    </h4>
                                </span>
                            </section>
                        </article>
                    </section>
                    <section className="right">
                        <ProductBlock />
                    </section>
                </main>
                <div className="foot">
                    <div className="left">
                        <button className="unClear danger-bg"><span className="icon small-icon"><FaCreditCard /></span>Card</button>
                        <button className="unClear warning-bg"><span className="icon small-icon"><BsPhoneFill /></span>Transfer</button>
                        <button className="unClear success-bg"><span className="icon small-icon"><BsCash /></span>Cash</button>
                        <button className="primary-bg"><span className="icon small-icon"><TbBoxMultiple /> </span>Multiple Pay</button>
                        <button className="amount">
                            Total Payable: <span className="icon mid-icon"><TbCurrencyNaira /></span>216,500
                        </button>
                        <button className="unClear primary-bg">Recent Transactions</button>
                    </div>
                    {/* <div className="right">
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default NewSale

const RemoveList = ()=>{

    return(
        <button className='unclear action-btn'>remove</button>
    )
}

const Quantity = ({clickInput, setClickInput})=>{
    return(
        <article className="qty-add-sub">
            <button className="unClear sub-qty"><span className="icon small-icon"><BiMinus /></span></button>
            <NoLabTextInput fieldname={'qty-input'} inputtype={'text'} placeholder={'1'} clickInput={clickInput} setClickInput={setClickInput}/>
            <button className="unClear add-qty"><span className="icon small-icon"><MdAdd /></span></button>
        </article>
    )
}

const ProductBlock =()=>{
    return(
        <>
            {
                avilableProduct.map((data, ind)=>{
                    return(
                            <section className="product-card" key={ind}>
                                <article className="product-name"><h4>{data.product}</h4></article>
                                <article className="product-info">
                                    <span className="unit-price detail">
                                        <h4><span className="icon small-icon"> <TbCurrencyNaira /></span>{data.unitprice} </h4>
                                    </span>
                                    <span className="rem-qty detail">
                                        <h4>{data.qty}</h4>
                                    </span>
                                </article>
                            </section>
                    )
                })
            }
        </>
    )
}