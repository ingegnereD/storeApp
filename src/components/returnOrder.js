import React from 'react'
import { recentSales } from '../dataArray'

const ReturnOrder = () => {
    return (
        <section className="return-order recent-sale dash-bottom-info">
            <article className="nav">
                <h3 className='danger-color'>Returned Order</h3>
            </article>
            <section className="table-holder">
                <table>
                    <thead>
                        <tr>
                            <th style={{width: '8rem'}}>Date</th>
                            <th>Product ID</th>
                            <th>Customer</th>
                            <th>Tot. Amount</th>
                            <th>Added By</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentSales.map((data, ind)=>{
                            const {} = data
                            return(
                                <tr key={ind} {...data}>
                                    <td>{data.date} - {data.time}</td>
                                    <td>{data.id}</td>
                                    <td>{data.customer}</td>
                                    <td>{data.totamount}</td>
                                    <td>{data.seller}</td>
                                    <td>{data.location}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </section>
    )
    }

export default ReturnOrder