import React, { useEffect, useState } from 'react'
import Login from '../components/login'
import Notification from '../components/notification'
import SignUp from '../components/signUp'
import "./pageStyle/welcome.css"
import Picture from '../components/img/pic1.jpg'

const Welcome = ({access, setAccess}) => {
    const [notif, setNotif] = useState({note: '', textclass: '', stat: false})
    const [size, setSize] = useState(window.innerWidth)
    const [hideBtn, setHideBtn] = useState(false)
    const [cardClass, setCardClass] = useState(true)
    const [logo, setLogo] = useState(false)

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setSize(window.innerWidth)
        })
        if (size >= 922) {
            setHideBtn(false)
        }
        if (size <= 921) {
            setHideBtn(true)
        }
        if (size <= 490) {
            setLogo(true)
        }
        if (size > 490) {
            setLogo(false)
        }

        let userInfo;
        if (localStorage.getItem('userInfo') !== null) {
            userInfo = JSON.parse(localStorage.getItem('userInfo'))
        }
        userInfo = {validate: false, index: -1 }
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },[size])

    function handleDropCard() {
        if (cardClass) {
            setCardClass(false)
        }
        if (!cardClass) {
            setCardClass(true)
        }
    }
    return (
        <section className="welcome">
            <section className="nav">
                <div className="left">
                    {!logo && <h1>Franco Multipurpose</h1>}
                    {logo && <h1 className='logo'>FMV</h1>}
                </div>
                <div className="right">
                    {hideBtn && <button className="unClear" onClick={handleDropCard}>Login</button>}
                </div>
            </section>
            <section className="main">
                <div className="top">
                    <div className="left">
                        <section className="content">
                            <h2>Easier Store Keeping</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae expedita nesciunt modi atque tempora architecto rem tenetur? Perspiciatis perferendis quos quis id deleniti praesentium nulla excepturi corrupti ipsam illum!
                            </p>
                        </section>
                    </div>
                    <div className="right">
                        <Login notif={notif} setNotif={setNotif} access={access} setAccess={setAccess} cardClass={cardClass} setCardClass={setCardClass} size={size}/>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left" style={{background: `url(${Picture})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <h4 className='primary-color' >G2S GLOBAL</h4>

                    </div>
                    <div className="right"></div>
                </div>
            </section>  
                    
            {notif.stat && <Notification notif={notif}/>}
        </section>
    )
}

export default Welcome