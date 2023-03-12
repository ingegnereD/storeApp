import React, { useEffect } from 'react'
import { useState } from 'react'
import { json, Link, Navigate, NavLink, useNavigate } from 'react-router-dom'


const Login = ({notif, setNotif, access, setAccess, cardClass, setCardClass, size}) => {
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
        if (credentials.pass && credentials.userName) {
            if(credentials.userName.length < 5){
                setNotif({note: 'Incomplete Username!!!', textclass: 'danger-color', stat: true})
                setTimeout(()=>{
                        setNotif({note:'', textclass: '', stat:false})
                    },3000)

            }
            if(credentials.pass.length < 8){
                setNotif({note: 'Incomplete Password!!!', textclass: 'danger-color', stat: true})
                setTimeout(()=>{
                        setNotif({note:'', textclass: '', stat:false})
                    },3000)

            }
            if(credentials.userName.length > 4 && credentials.pass.length > 8){

                let account = []
                if(localStorage.getItem('account') !== null){
                    account = JSON.parse(localStorage.getItem('account'))
                    let nagCount = 0                
                    account.forEach((data, ind)=>{
                    // check if username - password pair contains the enered username
                    if (data.key.userName.toLowerCase() === credentials.userName.toLowerCase()) {
                        if(data.key.pass === credentials.pass){
                            setNotif({note: 'Access Granted. Redirecting....', textclass: 'success-color', stat: true})
                            setTimeout(()=>{
                                // create a value for opening and the credenial indx
                                let userInfo 
                                if (localStorage.getItem('userInfo') !== null) {
                                    userInfo = JSON.parse(localStorage.getItem('userInfo'))
                                }
                                userInfo = {validate: true, index: ind };
                                localStorage.setItem('userInfo', JSON.stringify(userInfo))
                                setTimeout(()=>{
                                    userInfo = {validate: false, index: ind };
                                    localStorage.setItem('userInfo', JSON.stringify(userInfo))
                                    setAccess(false)
                                    return navigate('/')
                                }, 3600000)
                                // ---------------
                                setCredentials({...credentials, pass: '', userName: ''})
                                setNotif({note:'', textclass: '', stat:false})
                                return navigate('/dashboard')
                            },3150)
                        }
                        if(data.key.pass !== credentials.pass){
                            setNotif({note: 'Incorrect Password !!!', textclass: 'danger-color', stat: true})
                            setTimeout(()=>{
                                setCredentials({...credentials, pass: ''})
                                setNotif({note:'', textclass: '', stat:false})
                            },3000)
                        }
                    }else{
                        nagCount ++
                    }
                })
                if(nagCount === account.length){
                    setNotif({note: 'Incorrect Username or Password, Check username and try Again!!!', textclass: 'danger-color', stat: true})
                    setTimeout(()=>{
                        setCredentials({...credentials, pass: '', userName: ''})
                        setNotif({note:'', textclass: '', stat:false})
                    },3000)
                }
            }
            else if (localStorage.getItem('account') === null) {
                setNotif({note: 'User does not exit...', textclass: 'danger-color', stat: true})
                setTimeout(()=>{
                    setCredentials({...credentials, pass: '', userName: ''})
                    setNotif({note:'', textclass: '', stat:false})
                    return navigate('/signup')
                },3000)
            }
            }
        }
    }
    function handleClear() {
        setCredentials({pass:'', userName: ''})
    }
    return (
        <section className={cardClass ? "access-card-cont in-active": "access-card-cont active"}>
            <section className="heading">
                <h3 className='primary-color'>Welcome Back...</h3>
            </section>
            <form >
                <section className="page">
                    <article className="input-sec">
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" id="userName" placeholder='Enter username' onChange={(e)=> handleTextChange(e)} value={credentials.userName} autoCorrect ="off" autoFocus/>
                    </article>
                    <article className="input-sec">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" placeholder='Enter password' onChange={(e)=> handleTextChange(e)} value={credentials.pass} autoCorrect ="off" />
                    </article>
                    {downMsg && 
                    <article className="down-msg">
                        <p>Incorrect username or password....</p>
                    </article>}

                </section>
                <div className="action">
                    <button className="btn un-clear warning-bg" type='button' onClick={handleClear}>Clear</button>
                    <button className="btn un-clear primary-bg" type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <article className="next-p">
                <p>Don't have an account, <Link to={'/signup'} style={{textDecoration: 'none', color: 'orangered'}}>Sign Up</Link></p>
                <p><Link to={'/passwordrecovery'} style={{textDecoration: 'none',color: 'orangered', cursor: 'pointer'}}>forget password </Link> </p>
            </article>
        </section>  
    )   
}

export default Login