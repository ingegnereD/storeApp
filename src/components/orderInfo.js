import React from 'react'

const OrderInfo = ({invoice, invoiceStatus, setInvoiceStatus}) => {

    function closeDrop(){

        setInvoiceStatus(false)
    }
    return (
        <section className="fly-page" tabIndex={1} onBlur={closeDrop}>
            <article className="nav"></article>
            <section className="header">
                <div className="invoice-top"></div>
                <div className="invoice-mid ">
                    <div className="table-holder">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoice.map((data, ind)=>{
                                    return(
                                        <tr key={ind}>
                                            <td>{data.product}</td>
                                            <td>{data.unitprice}</td>
                                            <td>{data.qty}</td>
                                            <td>{data.totprice}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="invoice-foot">
                    <button className="unClear">
                        <span className="icon small-icon"></span>
                    </button>
                </div>
            </section>
        </section>
    )
}

export default OrderInfo