import React, { useRef, useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { MdAdd, MdClear, MdOutlinePeopleAlt } from 'react-icons/md';
import { brandName } from '../dataArray';

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
export const NoLabTextInput = ({fieldname, inputtype, placeholder}) => {


    function handleChange(e){
        e.preventDefault();
        
    }
    return (
        <section className = {`${fieldname} no-lab-form-group only-input`} >
            <input type={inputtype}
            name = {fieldname}
            id = {fieldname}
            placeholder = {placeholder}
            onChange = { handleChange }
            /> 
        </section>
    )
}

export const ClickInput = ({desc})=>{
    const [drop, setDrop] = useState(false)
    function handleFilter(){

    }
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
    return (
        <article className="form-group click-input-gp" style={{height: '2.5rem'}}>
            <button className="unClear" type='button' onClick={handleDrop} onBlur={hideDrop}>{desc}

                {drop && <ul className="option">
                    <li>
                        <label htmlFor="bag">Bag</label>
                        <input type="radio" name="desc" id="bag" onChange={handleFilter }  value={'Bag(s)'} />
                    </li>
                    <li>
                        <label htmlFor="keg">Keg</label>
                        <input type="radio" name="desc" id="ife" onChange={handleFilter} value={'Keg(s)'} />
                    </li>
                    <li>
                        <label htmlFor="ctn">Ctn</label>
                        <input type="radio" name="desc" id="ctn" onChange={handleFilter} value={'Ctn(s)'} />
                    </li>
                    <li>
                        <label htmlFor="allLocation">Pcs</label>
                        <input type="radio" name="desc" id="pcs" onChange={handleFilter} value={'Pcs'} />
                    </li>
                </ul>}
            </button>
        </article>
    )
}

export const ClickTextInput =({title, icon, hideText})=>{
    const [showList, setShowList] = useState(false)
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
    return(
        <section className="click-text-group" style={{height: '2.5rem'}}>
            <button className="unClear" type='button' onClick={handleShowList} onBlur={closeDropDown}>
                <span className="icon mid-icon">{icon}</span> {title}
                {showList && 
                <article className="drop-option">

                    <ul className="fetched-list">
                        {brandName.map((data, ind)=>{
                            return(
                                <li key={ind}><h4>{data}</h4></li>
                            )
                        })}
                    </ul>

                    <span className='search-area'>
                        <button className="unClear clear danger-bg" type='button'>
                            {hideText && "Clear"}
                            <span className="icon small-icon"><MdClear /></span>
                        </button> 
                        <NoLabTextInput fieldinfo={''} fieldname={'newbrand'} inputtype={'text'} placeholder={'Add Brand'}/> 
                        <button className="unClear primary-bg" type='button'>
                            {hideText && "Add"}
                            <span className="icon small-icon"><MdAdd /></span>
                        </button>
                    </span>
                </article>
                }
            </button>
        </section>
    )
}

export const Location = ({loc})=>{
    const [showBizLoc, setShowBizLoc] = useState(false)
    function handleFilter(){

    }
    return(
        <section className="location-cont">
            <button className="unClear">{loc}
            <span className="icon small-icon">{showBizLoc ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></button>
            <ul className="location-option">
                <li>
                    <label htmlFor="bag"><h4>ILe-Ife</h4></label>
                    <input type="radio" name="locaton" id="ife" onChange={handleFilter }  value={'Ile-Ife'} />
                </li>
                <li>
                    <label htmlFor="keg"><h4>Osogbo</h4></label>
                    <input type="radio" name="location" id="osogbo" onChange={handleFilter} value={'Osogbo'} />
                </li>
                <li>
                    <label htmlFor="ctn"><h4>Enugu state</h4></label>
                    <input type="radio" name="location" id="enugu" onChange={handleFilter} value={'Enugu State'} />
                </li>
                <li>
                    <label htmlFor="allLocation"><h4>Ore, Ondo</h4></label>
                    <input type="radio" name="location" id="ondo" onChange={handleFilter} value={'Ore, Ondo'} />
                </li>
            </ul>
        </section>
    )
}