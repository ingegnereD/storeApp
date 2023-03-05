import React, { useEffect, useState } from 'react'
import Aside from '../components/aside'
import Nav from '../components/nav'
import { BsFillFilterSquareFill } from 'react-icons/bs'
import DateFilter from '../components/dateFilter'
import { ClickInput, ClickTextInput, CustClickTextInput, NoLabTextInput, SellerClickInput } from '../components/inputComponent'
import LocationFilter from '../components/locationFilter'
import { newProduct, recentSales } from '../dataArray'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

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

const AllSales = () => {
    const [menu, setMenu] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    const [filterObj, setFilterObj] = useState(false)
    const [def, setDef] = useState({deft: 'All Location', state: true})
    const [clickInput, setClickInput] =  useState('')
    const [drop, setDrop] = useState(false)

    const navigate = useNavigate()
    
    const changeSize = ()=>{
        setSize(window.innerWidth)
    }

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

        window.addEventListener('resize', changeSize)
        if(size <= 768){
            setFilterObj(false)

        }if (size > 768) {
            setFilterObj(true)
        }
        
    },[size])

    function handleShowFilter() {
        if (filterObj && size <= 768) {
            setFilterObj(false)
        }if (!filterObj && size <= 768) {
            setFilterObj(true)
        }
    }
    function handleAction(data){
    }
    return (
        <>
            <Nav menu={menu} setMenu={setMenu}/>
            <header>
                <Aside menu={menu} setMenu={setMenu}/>
                <section className="product-page">
                    <article className="filter" style={{position: 'relative', overflow: 'visible'}}>
                        <div className={!filterObj ? "second active-second": 'second'} onClick={handleShowFilter} >
                            <h3>Filter Sales</h3>
                            <span className="icon mid-icon">
                                <BsFillFilterSquareFill />
                            </span>
                        </div>
                        {filterObj && <div className="first" style={{position: 'relative', overflow: 'visible'}}>
                            <LocationFilter def={def} setDef={setDef} />
                            <DateFilter />
                            <CustClickTextInput title={'Customer'} />
                            <SellerClickInput desc={'Seller'} />
                            <NoLabTextInput inputtype={'text'} fieldname={'filterProdutct'} placeholder={'Find product by name or brand'} fieldinfo={'product-input-filter'} clickInput={clickInput} setClickInput={setClickInput} drop={drop} setDrop={setDrop}/>
                            <ClickTextInput title={'Brand'} />
                        </div>}
                    </article>
                    <article className="products">
                        <div className="dash-bottom-info">
                            <div className="table-holder">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>action</th>
                                            <th>Date</th>
                                            <th>Invoice ID</th>
                                            <th>Customer</th>
                                            <th>Pay Mtd</th>
                                            <th>Pay Status</th>
                                            <th>Tot Amount</th>
                                            <th>Tot Paid</th>
                                            <th>Credit Due</th>
                                            <th>Location</th>
                                            <th>Added by</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{position: 'relative', overflow: 'visible'}}>
                                        {recentSales.map((data, ind)=>{

                                            return(
                                                <tr key={ind}>
                                                    <td style={{position: 'relative', overflow: 'visible'}}><ActionBox /></td>
                                                    <td>{data.date}  - {data.time}</td>
                                                    <td>{data.id}</td>
                                                    <td>{data.customer}</td>
                                                    <td>{data.paymtd}</td>
                                                    <td>{data.paystatus}</td>
                                                    <td>{data.totamount}</td>
                                                    <td>{data.totpaid}</td>
                                                    <td>0</td>
                                                    <td>{data.location}</td>
                                                    <td>{data.seller}</td>
                                                </tr>
                                            )
                                        })}

                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Total</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td style={{fontWeight: 'bold', fontSize: '1.2rem'}}>2,412,450</td>
                                            <td style={{fontWeight: 'bold', fontSize: '1.2rem'}}>2,412,450</td>
                                            <td style={{fontWeight: 'bold', fontSize: '1.2rem'}}>0</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                </section>
            </header>
        </>
    )
}

export default AllSales