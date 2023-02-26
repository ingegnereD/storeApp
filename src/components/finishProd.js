import React from 'react'
import { stockAlert } from '../dataArray'

const FinishProduct = () => {
    return (
        <section className="finish-product dash-bottom-info">
            <article className="nav">
                <h3 className="warning-color">Product Stock Alert</h3>
            </article>
            <section className="table-holder">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Location</th>
                            <th>Quantity Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockAlert.map((data, ind)=>{
                            const {product, qty, location} = data

                            return(
                                <tr key={ind}>
                                    <td>{product}</td>
                                    <td>{location}</td>
                                    <td>{qty}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </section>
    )
}

export default FinishProduct