import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Aside from '../components/aside'
import Nav from '../components/nav'

const ListReturn = () => {
    const navigate = useNavigate()

    useEffect(()=>{
    let userInfo;
    let account;
    if (localStorage.getItem('userInfo') === null) {
        return navigate('/')
    }
    else if (localStorage.getItem('userInfo') !== null) {
        userInfo = JSON.parse(localStorage.getItem('userInfo')).index
        if (userInfo === -1) {
            return navigate('/')
        }
    }})
    return (
        <>
            <Nav />
            <header>
                <Aside />
                <section className="return-sale">
                    
                </section>
            </header>
        </>
        
    )
}

export default ListReturn