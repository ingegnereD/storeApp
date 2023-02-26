import React, { useState, useEffect } from 'react'
import { BsDisplay } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { asideLinks } from '../dataArray'


const Aside = ({menu, setMenu}) => {

    
    return (
        <ul className={menu ? 'aside menu-active': 'aside menu-exit'}>
            {asideLinks.map((data, index)=>{
                return(
                    <AsideLinks data={data} index={index} key={index} />
                )
            })}
        </ul>
    )
}

const AsideLinks =({data, index})=>{
    const [asideLinkDrop, setAsideLinkDrop] = useState({product: false, purchase: false, sale: false, stockTran: false, expensis: false, report: false, setting: false, account: false, contact: false})
    const [fish, setFish] = useState(false);
    const [size, setSize] = useState(window.innerWidth)
    const [prevAsideLink, setPrevAsideLink] = useState('')
    const [clickedAsideLink, setClickedAsideLink] = useState({boo: false,value: 0 })


    const {id, name, icon} = data
    const navigate = useNavigate()

    const changeSize = ()=>{
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', changeSize)

        if(size <= 991){
            setFish(false)
        }
        if(size >= 992){
            setFish(true)
        }
        if(size <= 768){
            setFish(true)
        }
        
    },[size])

    function handleAsideLinks(){
        let count = index+1
        switch(count){
            case 1:
                return navigate('/dashboard');
                break;
            case 2:
                console.log('clicked Home') ;
                break;
            case 3:
                console.log('clicked Home') ;
                break;
            case 4:
                console.log('clicked Home') ;
                break;
            case 5:
                if(asideLinkDrop.product){
                    setAsideLinkDrop({...asideLinkDrop, product: false}) ;
                }
                if(!asideLinkDrop.product){
                    setAsideLinkDrop({...asideLinkDrop, product: true}) ;
                }
                break;
            case 6:
                if(asideLinkDrop.purchase){
                    setAsideLinkDrop({...asideLinkDrop, purchase: false}) ;
                }
                if(!asideLinkDrop.purchase){
                    setAsideLinkDrop({...asideLinkDrop, purchase: true}) ;
                }
                break;
            case 7:
                if(asideLinkDrop.sale){
                    setAsideLinkDrop({...asideLinkDrop, sale: false}) ;
                }
                if(!asideLinkDrop.sale){
                    setAsideLinkDrop({...asideLinkDrop, sale: true}) ;
                }
                
                break;
            case 8:
                if(asideLinkDrop.stockTran){
                    setAsideLinkDrop({...asideLinkDrop, stockTran: false}) ;
                }
                if(!asideLinkDrop.stockTran){
                    setAsideLinkDrop({...asideLinkDrop, stockTran: true}) ;
                }
                break;
            case 9:
                if(asideLinkDrop.expensis){
                    setAsideLinkDrop({...asideLinkDrop, expensis: false}) ;
                }
                if(!asideLinkDrop.expensis){
                    setAsideLinkDrop({...asideLinkDrop, expensis: true}) ;
                }
                break;
            case 10:

                if(asideLinkDrop.account){
                    setAsideLinkDrop({...asideLinkDrop, account: false}) ;
                }
                if(!asideLinkDrop.account){
                    setAsideLinkDrop({...asideLinkDrop, account: true}) ;
                }
                break;
            case 11:
                if(asideLinkDrop.report){
                    setAsideLinkDrop({...asideLinkDrop, report: false}) ;
                }
                if(!asideLinkDrop.report){
                    setAsideLinkDrop({...asideLinkDrop, report: true}) ;
                }
                break;
            case 12:
                if(asideLinkDrop.setting){
                    setAsideLinkDrop({...asideLinkDrop, setting: false}) ;
                }
                if(!asideLinkDrop.setting){
                    setAsideLinkDrop({...asideLinkDrop, setting: true}) ;
                } ;
                console.log('clicked here')
                break;
            case 13:
                if (window.confirm('Are you sure')) {   
                    return navigate('/login')
                }
                break;
        }
    }



    function handleTitles(){
        if( size <= 991 && size > 769){
            setFish(true)
        }
    }
    function handleCloseTitle(){
        if (size <= 991 && size > 769 ) {   
            setFish(false)
        }
    }

    function handleAsideHighLight(){
        
        if(clickedAsideLink.value === index + 1){
            // setClickedAsideLink({...clickedAsideLink, boo: false})
            // setClickedAsideLink({boo: true, value: index + 1})
            // setPrevAsideLink(index+1)
            // console.log('prev value ',clickedAsideLink.value, 'present value ', index+1)
        }
    }
    return(
        <li className={id} onClick={handleAsideLinks}>
            <article onClick={handleAsideHighLight} className={clickedAsideLink.boo ? "top-list active-link": "top-list"} onMouseEnter={handleTitles} onMouseLeave={handleCloseTitle}>
                <span className="icon small-icon">{icon}</span>
                {fish && <h4>{name}</h4>}
            </article>
            <article className="drop-list">
                {asideLinkDrop.sale && <SaleDrop />}
                {asideLinkDrop.product && <ProductDrop />}
                {asideLinkDrop.purchase && <PurchaseDrop />}
                {asideLinkDrop.expensis && <ExpensisDrop />}
                {asideLinkDrop.stockTran && <StockTransferDrop />}
                {asideLinkDrop.setting && <SettingDrop />}
                {asideLinkDrop.account && <AccountDrop />}
                {asideLinkDrop.contact && <ContactDrop />}
            </article>
        </li>
    )
}

const SaleDrop =()=>{
    const navigate = useNavigate()
    return(
        <ul className="aside-drop">
            <li onClick={()=> {return navigate('/allsales')}}>
                <span className="icon small-icon"></span>
                <h4>All Sales</h4>
            </li>
            <li onClick={()=> {return navigate('/allsales')}}>
                <span className="icon small-icon"></span>
                <h4>List Sales</h4>
            </li>
            <li onClick={()=> {return navigate('/newsale')}}>
                <span className="icon small-icon"></span>
                <h4>Sale</h4>
            </li>
            <li onClick={()=> {return navigate('/returnsales')}}>
                <span className="icon small-icon"></span>
                <h4>List Return Sales</h4>
            </li>
        </ul>
    )
}
const ContactDrop =()=>{

    return(
        <ul className='aside-drop'>
            <li>
                <span className="icon small-icon"></span>
                <h4>Add Contact</h4>
            </li>
            <li>
                <span className="icon small-icon"></span>
                <h4>List Contact</h4>
            </li>

        </ul>
    )
}

const ProductDrop =()=>{
    const navigate = useNavigate()
    return(
        <ul className="aside-drop">
            <li onClick={()=> {return navigate('/listproduct')}}>
                <span className="icon small-icon"></span>
                <h4>List Product</h4>
            </li>
            <li onClick={()=> {return navigate('/restockproduct')}}>
                <span className="icon small-icon"></span>
                <h4>Restock Product</h4>
            </li>
            <li onClick={()=> {return navigate('/newproduct')}}>
                <span className="icon small-icon"></span>
                <h4>New Product</h4>
            </li>
            
        </ul>
    )
}
const PurchaseDrop =()=>{

    return(
        <ul className="aside-drop">
            <li>
                <span className="icon small-icon"></span>
                <h4>New Purchase</h4>
            </li>
            <li>
                <span className="icon small-icon"></span>
                <h4>List Purchase</h4>
            </li>
        </ul>
    )
}

const StockTransferDrop =()=>{

    return(
        <ul className="aside-drop">
            <li>
                <span className="icon small-icon"></span>
                <h4>List Transfers</h4>
            </li>
            <li>
                <span className="icon small-icon"></span>
                <h4>New Transfer</h4>
            </li>
        </ul>
    )
}

const ExpensisDrop = ()=>{
    return(
        <ul className="aside-drop">
            <li>
                <span className="icon small-icon"></span>
                <h4>List Expenses</h4>
            </li>
            <li>
                <span className="icon small-icon"></span>
                <h4>Add Expenses</h4>
            </li>
        </ul>
    )
}
const SettingDrop =()=>{
    return(
        <ul className="aside-drop">
            <li>
                <span className="icon small-icon"></span>
                <h4>Product Setting</h4>
            </li>
            <li>
                <span className="icon small-icon"></span>
                <h4>Configuration</h4>
            </li>
        </ul>
    )
}

const AccountDrop =()=>{
    <ul className="aside-drop">
        <li>
            <span className="icon small-icon"></span>
            <h4>List Accounts</h4>
        </li>
        <li>
            <span className="icon small-icon"></span>
            <h4>New Account</h4>
        </li>
    </ul>
}
export default Aside