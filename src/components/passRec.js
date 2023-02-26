import React, { useEffect } from 'react'
import { useState } from 'react'
import { json, Link, Navigate, NavLink, useNavigate } from 'react-router-dom'


const PassRec = ({notif, setNotif, access, setAccess, cardClass, setCardClass, size}) => {
    const [credentials, setCredentials] = useState({userName:'', pass: ''})
    const [downMsg, setDownMsg] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        if (size <= 921) {
            setCardClass(true)
        }
        if (size > 921) {
            setCardClass(false)
        }
    },[size])

    function handleTextChange(e) {
        let name = e.target.name
        let value = e.target.value
        setCredentials({...credentials,[name]: value})
        if(name === 'userName'){
            setCredentials({...credentials,[name]: value.toLowerCase()})
        }

    }
    function handleSubmit(e) {
        e.preventDefault()
        if (credentials.userName) {
            let account;
            let count = 0
            if (localStorage.getItem('account') !== null) {
                account = JSON.parse(localStorage.getItem('account'))
                account.forEach((data, ind) => {
                    if (data.key.userName === credentials.userName) {
                        setNotif({note: 'Account Info is being sent to your email...', textclass: 'primary-color', stat: true})
                        setTimeout(()=>{
                                setNotif({note:'', textclass: '', stat:false})
                                return navigate('/login')
                            },3100)    

                    }
                    else {
                        count ++
                    }
                });
                if (count === account.length) {
                    setNotif({note: 'User Info not found... Check Entered Username.', textclass: 'danger-color', stat: true})
                    setTimeout(()=>{
                            setNotif({note:'', textclass: '', stat:false})
                            setCredentials({userName: ''})
                        },3000)    

                }
            }
            else if(localStorage.getItem('account') === null){
                setNotif({note: 'User Info not found...', textclass: 'danger-color', stat: true})
                setTimeout(()=>{
                        setNotif({note:'', textclass: '', stat:false})
                    },3000)    

            }
        }
        else if(!credentials.userName){
            setNotif({note: 'Field cannot be empty !!!', textclass: 'danger-color', stat: true})
            setTimeout(()=>{
                    setNotif({note:'', textclass: '', stat:false})
                },3000)    
        }
        
    }
    return (
        <section className={cardClass ? "access-card-cont in-active": "access-card-cont active"}>
            <section className="heading">
                <h3 className='warning-color'>Account Recovery...</h3>
            </section>
            <form >
                <section className="page">
                    <article className="input-sec">
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name="userName" id="userName" placeholder='Enter username' onChange={(e)=> handleTextChange(e)} value={credentials.userName} />
                    </article>
                    {downMsg && 
                    <article className="down-msg">
                        <p>Incorrect username or password....</p>
                    </article>}

                </section>
                <div className="action">
                    <button className="btn un-clear active warning-bg" type='button'>Clear</button>
                    <button className="btn un-clear active primary-bg" type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <article className="next-p">
                <p>Don't have an account, <Link to={'/login'} style={{textDecoration: 'none', color: 'orangered'}}>Login</Link></p>
            </article>
        </section>  
    )   
}

export default PassRec