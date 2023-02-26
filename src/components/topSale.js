import React from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'
import { topSale } from '../dataArray'

const TopSale = () => {
    return (
        <section className="top-sale dash-bottom-info">
            <article className="nav">
                <h3 className='success-color'>Top Selling</h3>
            </article>
            <section className="table-holder cont">
                <table>
                    <thead>
                        <tr>
                            <th>Prod</th>
                            <th>Price</th>
                            <th>Qty sold</th>
                            <th>Qty Rem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topSale.map((data, ind)=>{
                            const {product, price, qty, rem} = data;
                            return(
                                <tr key={ind}>
                                    <td>{product}</td>
                                    <td><span className="icon mid-icon"><TbCurrencyNaira /></span>{price}</td>
                                    <td>{qty}</td>
                                    <td>{rem}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </section>
        </section>
    )
}

export default TopSale