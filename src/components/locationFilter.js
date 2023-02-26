import React from 'react'
import { useState, useEffect } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { BsFillFilterSquareFill } from 'react-icons/bs'
import { availLocations } from '../dataArray'

const LocationFilter = ({def, last, userInfo, setUserInfo}) => {
    const [showBizLoc, setShowBizLoc] = useState(false)
    const [location, setLocation] = useState(def.deft)
    const [lastList, setLastList]= useState(true)
    
    function handleShowBizLoc() {
        if (showBizLoc) {
            setShowBizLoc(false)
        }
        if (!showBizLoc) {
            setShowBizLoc(true)
        }
    }

    function handleFilter(e) {
        let value = e.target.value
        setLocation(value)
    }
    function hideDrop(){
        setShowBizLoc(false)
    }

    function handleChange(ind, data) {
        {!def.state && setUserInfo({...userInfo, location: data.title})}
        setLocation(data.title)
        if (ind === 3) {
            if (!def.state) {
                setUserInfo({...userInfo, location: 'Ile-Ife, Osun state'})
                setLocation('Ile-Ife, Osun state')
            }
            if (def.state) {
                {!def.state && setUserInfo({...userInfo, location: 'All Location'})}
            }

        }
    }
    return (
        
            <button className="unClear form-group location filter-location" onClick={handleShowBizLoc} type='button' onBlur={hideDrop}>    
                <span className='icon'><BsFillFilterSquareFill/></span>
                {location} 
                <span className="icon small-icon">{showBizLoc ? <AiFillCaretUp /> : <AiFillCaretDown />}</span>
                
                {showBizLoc && 
                <ul className="option">
                    {availLocations.map((data, ind)=>{
                        return(
                            <li  className={data.id} key={ind} onClick={()=>handleChange(ind, data)}>
                                <label htmlFor={data.id}><h4>{data.title}</h4></label>
                                <input type="radio" name="location" id={data.id} onChange={handleFilter}  value={data.title} />
                            </li>
                        )
                    })}
                    
                </ul>}
            </button>
        
    )
}

export default LocationFilter