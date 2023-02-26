import React, { useEffect, useState } from 'react'

const Notification = ({notif}) => {
    const [notClass, setNotClass] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
        if(notClass){
            setNotClass(false)
        }
        },2900)
    })
    return (
        <section className={notClass ? `notification active-notif ${notif.textclass}` : `notification in-active-notif ${notif.textclass}`}>
            <h4 className={notif.textclass}>{notif.note}</h4>
        </section>
    )
}

export default Notification