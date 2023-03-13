import React, { useEffect, useRef, useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { MdAdd, MdClear, MdOutlinePeopleAlt } from 'react-icons/md';
import { brandName, custList, newProduct, purchaseInfo, sellers, stockAlert, unit } from '../dataArray';

export const TextInput = ({fieldname, inputtype, fieldinfo, placeholder, drop, setDrop, clickInput, setClickInput, holder,  setNotif}) => {
    const [tempList, setTempList]= useState([])

    function handleChange(e){
        e.preventDefault();
        let name = e.target.name
        let value =  e.target.value
        setClickInput({...clickInput, [name]: value})
        switch (name) {
            case 'product':
                if (value === '' || value === ' ') {
                    setDrop(false)
                    
                }else{
                    const filtered = holder.filter((data)=> data.product.toLowerCase().includes(value.toLowerCase()) )
                    setTempList(filtered)
                    setDrop(true)
                    if (filtered.length === 0) {
                        setDrop(false)
                        setNotif({note: 'Check Entered Product and Try again !!!', textclass: 'danger-color', stat: true})
                        setTimeout(()=>{
                            setClickInput({product: '', quantity: '', unitprice: '', brand: '', unit: ''})
                            setNotif({note:'', textclass: '', stat:false})
                        },3000)
    
                    }
                }
            
            
                break;
        
            default:
                break;
        }
    }
    function handleClick(ind, data) {
        setDrop(false)
        setClickInput({...clickInput, product: data.product, unitprice: data.unitprice, quantity: data.qty, brand: data.brand, unit: data.desc})
    }
    return (
        <section className = {`${fieldname} form-group input-form-gp`} >
            <label htmlFor = {fieldname}> <h4>{fieldinfo}</h4></label> 
            <input type={inputtype}
            name = {fieldname}
            id = {fieldname}
            placeholder = {placeholder}
            onChange = { handleChange }
            value={clickInput[fieldname]}
            autoComplete = "off"
            
            /> 
            
            {drop && <article className="drop-option">
                <ul className="fetched-list">
                    {tempList.map((data, ind)=>{
                        return(
                            <li key={ind} onClick={()=>handleClick(ind, data)}><h4>{data.product}</h4></li>
                        )
                    })}

                </ul>
            </article>}
            
        </section>
    )
}
export const NoLabTextInput = ({fieldname, inputtype, placeholder, clickInput, setClickInput, drop, setDrop}) => {



    function handleChange(e){
        e.preventDefault();
        let name = e.target.name
        let value =  e.target.value
        setClickInput({...clickInput, [fieldname]: value})
    
    }

    function handleClick(data, ind) {
        console.log(ind,'--------', data);
    }
    return (
        <section className = {`${fieldname} no-lab-form-group only-input`} >
            <input type={inputtype}
            name = {fieldname}
            id = {fieldname}
            placeholder = {placeholder}
            onChange = { handleChange }
            value={clickInput[fieldname]}
            /> 
            
            {drop && <article className="drop-option">

                <ul className="fetched-list">
                    {stockAlert.map((data, ind)=>{
                        return(
                            <li key={ind} onClick={()=> handleClick(ind, data)} ><h4>{data.product}</h4> <h4>{data.location}</h4> <h4>{data.qty}</h4></li>
                        )
                    })}

                </ul>
            </article>}

        </section>
    )
}

export const ClickInput = ({desc, clickInput, setClickInput})=>{
    const [drop, setDrop] = useState(false)
    const [holder, setHolder] = useState(desc)

    useEffect(()=>{
        if (!clickInput.unit) {
            setHolder(desc)
        }
        if (clickInput.unit) {
            setHolder(clickInput.unit)
        }
    },[clickInput])
    
    function handleDrop(){
        if(drop){
            setDrop(false)
        }
        if(!drop){
            setDrop(true)
        }
    }
    function hideDrop(){
        setDrop(false)
    }
    function handleClick(ind, data) {
        setHolder(data)
        setClickInput({...clickInput, unit: data})

    }
    return (
        <article className="form-group click-input-gp" onBlur={hideDrop} style={{height: '2.5rem'}}>
            <button className="unClear" type='button' onClick={handleDrop} >{holder}
                {drop && <ul className="option">
                        {unit.map((data, ind)=>{
                            return(<li key={ind} onClick={()=>handleClick(ind, data)}><h4>{data}</h4></li>)
                        })}
                </ul>}
            </button>
        </article>
    )
}

export const SellerClickInput = ({desc})=>{
    const [drop, setDrop] = useState(false)
    const [holder, setHolder] = useState([])
    const [title, setTitle] = useState(desc)
    
    useEffect(()=>{
        let account;
        let bank = []
        if (localStorage.getItem('account') !== null) {
            account = JSON.parse(localStorage.getItem('account'))
            account.forEach((dat, ind) => {
                bank.push(dat.profile.firstName);
            });
            setHolder(bank)
        }else if (localStorage.getItem('account') === null){
            setHolder(sellers)
        }
    },[])

    function handleDrop(){
        if(drop){
            setDrop(false)
        }
        if(!drop){
            setDrop(true)
        }
    }
    function hideDrop(){
        setDrop(false)
    }
    function handleClick(ind, data) {
        setTitle(data)
    }
    return (
        <article className="form-group click-input-gp" onBlur={hideDrop} style={{height: '2.5rem'}}>
            <button className="unClear" type='button' onClick={handleDrop} >{title}
                {drop && <ul className="option">
                        {holder.map((data, ind)=>{
                            return(<li key={ind} onClick={()=>handleClick(ind, data)}><h4>{data}</h4></li>)
                        })}
                </ul>}
            </button>
        </article>
    )
}

export const CustClickTextInput =({title, icon, hideText})=>{
    const [showList, setShowList] = useState(false)
    const [holder, setHolder] = useState(title)
    const [clickInput, setClickInput] = useState('')
    const [cass, setCass] = useState(custList)

    function handleShowList(){
        if(showList){
            setShowList(false)
        }
        if (!showList) {
            setShowList(true)
        }
    }
    function closeDropDown(){
        setShowList(false)
    }

    function handleClick(ind, data) {
        setHolder(data)
        if(showList){
            setShowList(false)
        }
        if (!showList) {
            setShowList(true)
        }
    }
    function handleAdd() {
        if (clickInput !== " " && clickInput.length > 2) {
            setHolder(clickInput)
            setCass([...cass, clickInput])
        }
        setClickInput('')
    }
    function handleRemove() {
        if (!clickInput) {
            setShowList(false)
        }
        else{
            setClickInput('')
        }
    }
    return(
        <section className="click-text-group" style={{height: '2.5rem'}} >
            <button className="unClear" type='button' onClick={handleShowList} >
                <span className="icon mid-icon">{icon}</span> {holder}
            </button>

            {showList && 
            <article className="drop-option">

                <ul className="fetched-list">
                    {cass.map((data, ind)=>{
                        return(
                            <li key={ind} onClick={()=> handleClick(ind, data)} ><h4>{data}</h4></li>
                        )
                    }).reverse()}
                </ul>

                <span className='search-area' >
                    <button className="unClear clear warning-bg" type='button' onClick={handleRemove}>
                        {hideText && "Clear"}
                        <span className="icon small-icon"><MdClear /></span>
                    </button> 
                    <NoLabTextInput fieldinfo={''} fieldname={'newbrand'} inputtype={'text'} placeholder={'Add Brand'} setClickInput={setClickInput} clickInput={clickInput}/> 
                    <button className="unClear primary-bg" type='button' onClick={handleAdd}>
                        {hideText && "Add"}
                        <span className="icon small-icon"><MdAdd /></span>
                    </button>
                </span>
            </article>
            }
        </section>
    )
}

export const ClickTextInput =({icon, hideText, title, clickInput, setClickInput})=>{
    const [showList, setShowList] = useState(false)
    const [holder, setHolder] = useState(title)
    const [cass, setCass] = useState(brandName)

    useEffect(()=>{
        if (!clickInput.brand) {
            setHolder(title)
        }
        if (clickInput.brand) {
            setHolder(clickInput.brand)
        }
    },[clickInput])

    function handleShowList(){
        if(showList){
            setShowList(false)
        }
        if (!showList) {
            setShowList(true)
        }
    }

    function handleClick(ind, data) {
        setHolder(data)
        setClickInput({...clickInput, brand: data})
        if(showList){
            setShowList(false)
        }
        if (!showList) {
            setShowList(true)
        }
    }
    function handleAdd(e) {
        e.preventDefault()
        if (clickInput.brand !== " " && clickInput.brand.length > 2) {
            setHolder(clickInput.brand)
            setCass([...cass, clickInput.brand])
            
        }
        setClickInput('')
    }
    function handleRemove(e) {
        e.preventDefault()
        if (!clickInput.brand) {
            setShowList(false)
        }
        else{
            setClickInput({...clickInput, brand: ''})
        }
    }
    return(
        <section className="click-text-group" style={{height: '2.3rem'}}>
            <button className="unClear" type='button' onClick={handleShowList} >
                <span className="icon mid-icon">{icon}</span> {holder}
            </button>
            {showList && 
            <article className="drop-option">

                <ul className="fetched-list">
                    {cass.map((data, ind)=>{
                        return(
                            <li key={ind} onClick={()=> handleClick(ind, data)} ><h4>{data}</h4></li>
                        )
                    }).reverse()}
                </ul>

                {/* <span className='search-area' >
                    <button className="unClear clear warning-bg" type='button' onClick={handleRemove}>
                        {hideText && "Clear"}
                        <span className="icon small-icon"><MdClear /></span>
                    </button> 
                    <NoLabTextInput fieldinfo={''} fieldname={'newbrand'} inputtype={'text'} placeholder={'Add Brand'} setClickInput={setClickInput} clickInput={clickInput.brand}/> 
                    <button className="unClear primary-bg" type='button' onClick={handleAdd}>
                        {hideText && "Add"}
                        <span className="icon small-icon"><MdAdd /></span>
                    </button>
                </span> */}
            </article>
            }
        </section>
    )
}
