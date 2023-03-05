import React, { useEffect, useRef, useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { MdAdd, MdClear, MdOutlinePeopleAlt } from 'react-icons/md';
import { brandName, custList, purchaseInfo, sellers, stockAlert, unit } from '../dataArray';

export const TextInput = ({fieldname, inputtype, fieldinfo, placeholder}) => {


    function handleChange(){

    }
    return (
        <section className = {`${fieldname} form-group input-form-gp`} >
            <label htmlFor = {fieldname}> <h4>{fieldinfo}</h4></label> 
            <input type={inputtype}
            name = {fieldname}
            id = {fieldname}
            placeholder = {placeholder}
            onChange = { handleChange }
            /> 
        </section>
    )
}
export const NoLabTextInput = ({fieldname, inputtype, placeholder, clickInput, setClickInput, drop, setDrop}) => {



    function handleChange(e){
        e.preventDefault();
        let name = e.target.name
        let value =  e.target.value
        setClickInput(value)
    
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
            value={clickInput}
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

export const ClickInput = ({desc})=>{
    const [drop, setDrop] = useState(false)
    const [holder, setHolder] = useState(desc)
    
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

export const ClickTextInput =({icon, hideText, title})=>{
    const [showList, setShowList] = useState(false)
    const [clickInput, setClickInput] = useState('')
    const [holder, setHolder] = useState(title)
    const [cass, setCass] = useState(brandName)

   
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
        <section className="click-text-group" style={{height: '2.5rem'}}>
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
