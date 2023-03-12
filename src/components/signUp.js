import React, { useEffect } from 'react'
import { useState } from 'react'
import { json, Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import LocationFilter from './locationFilter'


const SignUp = ({notif, setNotif, cardClass, setCardClass, size}) => {
    const [signUpBtn, setSignUpBtn]= useState(true)
    const [userInfo, setUserInfo] = useState({firstName: '', lastName: '', email: '', phone: '', location: 'Ile-Ife, Osun state' , userName: '',  pass: ''})
    const [passCheck, setPassCheck] = useState({pass: '', pass2: ''})
    const [accessNote, setAccessNote] = useState(false)
    const [def, setDef] = useState({deft: 'Ile-Ife, Osun state', state: false})
    const navigate = useNavigate()


    useEffect(()=>{
        if (size <= 921) {
            setCardClass(true)
        }
        if (size > 921) {
            // setCardClass(false)
        }
    },[size])


    function handleForm(e) {
        e.preventDefault()
        if (signUpBtn) {
            if (userInfo.firstName && userInfo.lastName && userInfo.email && userInfo.phone) {
                setSignUpBtn(false)
            }
        }
        if (!signUpBtn) {
            setSignUpBtn(true)
        }
    }

    function handleTextChange(e) {
        let name = e.target.name
        let value = e.target.value
        setUserInfo({...userInfo,[name]: value})
        if(name === 'userName'){
            setUserInfo({...userInfo,[name]: value.toLowerCase()})
        }
        if (name === 'pass' || name === 'pass2') {
            setPassCheck({...passCheck, [name]: value})
        }
    }

    function handleSubmit(e) {
        // now we save to LS
        e.preventDefault()
        if (userInfo.userName && userInfo.pass) {
            
            if(userInfo.pass.length < 8){
                setNotif({note: 'Password Should be more than 7 characters', textclass: 'danger-color', stat: true})
                setTimeout(()=>{
                        setNotif({note:'', textclass: '', stat:false})
                },3000)
            }

            if(userInfo.userName.length < 5){
                setNotif({note: 'UserName Should be more than 4 characters', textclass: 'danger-color', stat: true})
                setTimeout(()=>{
                        setNotif({note:'', textclass: '', stat:false})
                    },3000)
                }
                
                if(userInfo.userName.length > 4 && userInfo.pass.length > 7){
                    if (passCheck.pass === passCheck.pass2) {
                        setUserInfo({...userInfo, pass: passCheck.pass})
                        let account = []
                if(localStorage.getItem('account') !== null){
                    account = JSON.parse(localStorage.getItem('account'))
                    let count = 0
                    account.forEach((data, ind)=>{
                        let username = data.key.userName
                        let pass = data.key.pass
                        // check if account already exist (both password and userName)
                        if(username === userInfo.userName && pass === userInfo.pass){
                            setNotif({note: 'Account Already Exist !!!', textclass: 'danger-color', stat: true})
                            setTimeout(()=>{
                                setNotif({note:'', textclass: '', stat:false})
                            },3000)
                        }

                        // check if username already exist
                        if(username === userInfo.userName){
                            setNotif({note: 'Username already exist !!!', textclass: 'danger-color', stat: true})
                            setTimeout(()=>{
                                setUserInfo({pass: '', userName: ''})
                                setNotif({note:'', textclass: '', stat:false})
                            },3000)
                            
                        }
                        
                        else{
                            count ++
                        }
                        

                    })
                    if(count === account.length){
                        account.push({profile: {firstName: userInfo.firstName, lastName: userInfo.lastName, email: userInfo.email, phone: userInfo.phone, location: userInfo.location}, key: {userName: userInfo.userName, pass: userInfo.pass}});
                        console.log('store location',userInfo.location)

                        localStorage.setItem('account', JSON.stringify(account))
                        localStorage.setItem('appAccess', false)
                        
                        setNotif({note: 'Accout Created Successfully', textclass: 'primary-color', stat: true})
                        setUserInfo({email: '',firstName: '',lastName:'', pass: '', phone: '',userName: ''})
                        setPassCheck({pass: '', pass2: ''})
                        setTimeout(()=>{
                            return navigate('/login')
                        },3000)



                    }
                }
                else if(localStorage.getItem('account') === null){
                    account.push({profile: {firstName: userInfo.firstName, lastName: userInfo.lastName, email: userInfo.email, phone: userInfo.phone}, key: {userName: userInfo.userName, pass: userInfo.pass}});

                    localStorage.setItem('account', JSON.stringify(account))
                    localStorage.setItem('appAccess', false)
                    
                    setNotif({note: 'Accout Created Successfully', textclass: 'primary-color', stat: true})
                    setUserInfo({email: '',firstName: '',lastName:'', pass: '', phone: '',userName: ''})
                    setTimeout(()=>{
                        return navigate('/login')
                    },3000)
                }
                    }
                    else if (passCheck.pass !== passCheck.pass2) {
                        setNotif({note: 'Password not similar! Re-Enter...', textclass: 'danger-color', stat: true})
                        setTimeout(()=>{
                                setNotif({note:'', textclass: '', stat:false})
                                setPassCheck({pass: '', pass2: ''})
                        },3000)}

                
            }
        }
        else {
            setNotif({note: 'Field cannot be empty...', textclass: 'danger-color', stat: true})
            setTimeout(()=>{
                    setNotif({note:'', textclass: '', stat:false})
                    setPassCheck({pass: '', pass2: ''})
            },3000)}

    }
    

    return (
    <section className={cardClass ? "access-card-cont active" : "access-card-cont in-active"}>
        <section className="heading">
            <h2 className='primary-color'>Welcome...</h2>
        </section>
        <form>
            {signUpBtn ? 
            <section className="first-p page">
                <article className="input-sec">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" placeholder='First Name' onChange={(e)=> handleTextChange(e)} value={userInfo.firstName} />
                </article>
                <article className="input-sec">
                    <label htmlFor="lastName">LastName</label>
                    <input type="text" name="lastName" id="lastName" placeholder='Last Name' onChange={(e)=> handleTextChange(e)} value={userInfo.lastName} />
                </article>
                <article className="input-sec">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="firstName" placeholder='Email addr.' onChange={(e)=> handleTextChange(e)} value={userInfo.email} />
                </article>
                <article className="input-sec">
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name="phone" id="phone" placeholder='Phone' onChange={(e)=> handleTextChange(e)} value={userInfo.phone} />
                </article>
                <LocationFilter def={def} setDef={setDef} last={false} userInfo={userInfo} setUserInfo={setUserInfo} />

            </section>
            :
            <section className="second-p page">
                <article className="heading">
                    <h3 className='warning-color'>Create new username and Password</h3>
                </article>
                <article className="input-sec">
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" id="userName" placeholder='create user name' onChange={(e)=> handleTextChange(e)} value={userInfo.userName} />
                </article>
                <article className="input-sec">
                    <label htmlFor="pass">Set Password</label>
                    <input type="password" name="pass" id="pass" placeholder='create password' onChange={(e)=> handleTextChange(e)} value={passCheck.pass} />
                </article>
                <article className="input-sec">
                    <label htmlFor="pass">Re-Enter Password</label>
                    <input type="password" name="pass2" id="pass2" placeholder='re-enter password' onChange={(e)=> handleTextChange(e)} value={passCheck.pass2} />
                </article>
                {accessNote && <h4>Incorrect username or Password</h4>}
            </section>
            }
            <div className="action">
                { !signUpBtn ? 
                <button className={!signUpBtn ? "btn warning-bg" : "primary-bg"} type='button' onSubmit={handleForm} onClick={handleForm}>{signUpBtn? 'Next': 'Back'}</button>
                : 
                <button className={!signUpBtn ? "btn primary-bg" : "warning-bg"} type='submit' onClick={handleSubmit}>Submit</button>
                } 
                { signUpBtn ? 
                <button className={!signUpBtn ? "btn warning-bg" : "primary-bg"} type='button' onSubmit={handleForm} onClick={handleForm}>{signUpBtn? 'Next': 'Back'}</button>
                : 
                <button className={!signUpBtn ? "btn primary-bg" : "warning-bg"} type='submit' onClick={handleSubmit}>Submit</button>
                } 
            </div>        
        </form>
        <article className="next-p">
            <p>Already have an account, <Link to={'/login'} style={{textDecoration: 'none', color: 'orangered'}}>Login</Link></p>
        </article>
    </section>
    )
}

export default SignUp