import React, { useEffect, useState } from 'react'
import Login from '../components/login'
import Notification from '../components/notification'
import SignUp from '../components/signUp'
import "./pageStyle/welcome.css"
import Picture from '../components/img/pic1.jpg'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const [notif, setNotif] = useState({note: '', textclass: '', stat: false})
    const [size, setSize] = useState(window.innerWidth)
    const [hideBtn, setHideBtn] = useState(false)
    const [cardClass, setCardClass] = useState(true)
    const [logo, setLogo] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        let userInfo;
        if (localStorage.getItem('useInfo') === null) {
            return navigate('/signup')
        }
        if (localStorage.getItem('userInfo') !== null) {
            userInfo = JSON.parse(localStorage.getItem('userInfo'))
            let ind = userInfo.index
            if (ind === -1) {
                return navigate('/signup')
            }
        }

        window.addEventListener('resize',()=>{
            setSize(window.innerWidth)
        })
        if (size >= 921) {
            setHideBtn(false)
        }
        if (size <= 920) {
            setHideBtn(true)
        }
        if (size <= 490) {
            setLogo(true)
        }
        if (size > 490) {
            setLogo(false)
        }
    },[size])

    function handleDropLogin() {
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
                    {hideBtn && <button className="unClear" onClick={handleDropLogin}>SignIn</button>}
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
                        <SignUp notif={notif} setNotif={setNotif} cardClass={cardClass} setCardClass={setCardClass} size={size}/>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left" style={{background: `url(${Picture})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <h4>G2S GLOBAL</h4>
                    </div>
                    <div className="right"></div>
                </div>
            </section>    
            {notif.stat && <Notification notif={notif}/>}        
        </section>
    )
}

export default Welcome