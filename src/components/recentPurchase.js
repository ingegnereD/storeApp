import React from 'react'
import { useState } from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'
import { purchaseInfo, recentPurchase } from '../dataArray'

const RecentPurchase = () => {
   
    return (
        <section className="dash-bottom-info recent-purchase " >
            <article className="nav">
                <h3 className='primary-color'>Recent Purchase</h3>
            </article>
            <section className="table-holder">
                <table >
                    <thead>
                        <tr className='parent-tr'>
                            <th>Date</th>
                            <th>Brand</th>
                            <th>Total Amount</th>
                            <th>Desc.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentPurchase.map((data, ind)=>{
                            return(
                                <PurchaseInfo key={ind} data={data}/>
                            )
                        })}
                        
                    </tbody>
                </table>
            </section>
        </section>
    )
}


const PurchaseInfo =({data})=>{
    const [purchaseDrop, setPurchaseDrop] = useState(false)
    const {date, time, brand,totamount} = data;

    function handlePurchaseInfo(){
        if(purchaseDrop){
            setPurchaseDrop(false)
            console.log('false')
        }
        if(!purchaseDrop){
            setPurchaseDrop(true)
            console.log('true')
        }
    }

    function closeDrop(){
        setPurchaseDrop(false)
        console.log('blur')
    }
    return(
        <tr className={purchaseDrop ? 'parent-tr active-tr': 'parent-tr'} tabIndex={0} onBlur={closeDrop} onClick={handlePurchaseInfo}>
            <td className='parent-td'>{date} - {time}</td>
            <td className='parent-td'>{brand}</td>
            <td className='parent-td'><span className="icon mid-icon"><TbCurrencyNaira /></span> {totamount}</td>
            <td className='parent-td'>bags</td>
            
            
            {purchaseDrop &&<span className="purchase-info">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Qnty</th>
                            <th>Tot Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseInfo.map((data, ind)=>{
                            const {product, unitprice, qty, totamount} = data;
                            return(
                                <tr key={ind}>
                                    <td>{product}</td>
                                    <td>{unitprice}</td>
                                    <td>{qty}</td>
                                    <td>{totamount}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </span>}
        </tr>
    )
}

export default RecentPurchase