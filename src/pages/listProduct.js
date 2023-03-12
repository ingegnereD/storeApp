import React, { useEffect, useState } from 'react'
import { BsFillFilterSquareFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Aside from '../components/aside'
import DateFilter from '../components/dateFilter'
import { ClickInput, ClickTextInput, CustClickTextInput, NoLabTextInput, SellerClickInput } from '../components/inputComponent'
import LocationFilter from '../components/locationFilter'
import Nav from '../components/nav'
import { newProduct } from '../dataArray'

const ListProduct = () => {
    const [menu, setMenu] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    const [filterObj, setFilterObj] = useState(false)
    const [def, setDef] = useState({deft: 'All Location', state: true})
    const [clickInput, setClickInput] = useState('')
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
            <Aside menu={menu} setMenu={setMenu} />
            <section className="product-page">
                <article className="filter" style={{overflow: 'visible', position: 'relative'}}>
                    <div className={!filterObj ? "second active-second": 'second'} onClick={handleShowFilter}>
                        <h3>Filter Products</h3>
                        <span className="icon mid-icon">
                            <BsFillFilterSquareFill />
                        </span>
                    </div>
                    {filterObj && <div className="first" style={{overflow: 'visible', position: 'relative'}}>
                        <LocationFilter def={def} setDef={setDef}/>
                        <DateFilter />
                        <CustClickTextInput title={'Customer'} />
                        <SellerClickInput desc={'Seller'} />
                        <NoLabTextInput inputtype={'text'} fieldname={'filterProdutct'} placeholder={'Find product by name or brand'} fieldinfo={'product-input-filter'} clickInput={clickInput} setClickInput={setClickInput} drop={drop} setDrop={setDrop} />
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
                                        <th>Brand</th>
                                        <th>Product</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Tot Amount</th>
                                        <th>Added by</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newProduct.map((data, ind)=>{

                                        return(
                                            <tr key={ind}>
                                                <td><button className="unClear" onClick={()=>handleAction(data)}>action</button></td>
                                                <td>{data.date}  - {data.time}</td>
                                                <td>{data.brand}</td>
                                                <td>{data.product}</td>
                                                <td>{data.unitprice}</td>
                                                <td>{data.qty}</td>
                                                <td>{data.totamount}</td>
                                                <td>{data.addedby}</td>
                                            </tr>
                                        )
                                    })}
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

export default ListProduct
