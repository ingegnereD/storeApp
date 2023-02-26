import React from 'react'
import { useState, useEffect } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { BsFillFilterSquareFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

const DateFilter = ({notif, setNotif}) => {
    const [filteredDate, setFilteredDate] = useState('Today')
    const [dateFilter, setDateFilter] = useState(false)
    const [storeDate, setStoreDate] = useState('')
    const [filterCaret, setFilterCaret] = useState(false)
    const [presentDay, setPresentDay] = useState('')



    function handleDateFilter() {
        if (dateFilter) {
        }
        if (!dateFilter) {
            setFilterCaret(true)
            setDateFilter(true)
        }
    }
    function handleDateChange(e) {
        setStoreDate(e.target.value.replace(/-/g,'/'))
    }
    
    function handleSetDay(e) {
        let id = e.target.id
        // setStoreDate('Today')
        if (id === 'today') {
            // console.log('today\'s date is ', presentDay);
            setStoreDate('Today')
        }
        if (id === 'yesterday') {
            // console.log('today\'s date is ', presentDay - 1);
            setStoreDate('Yesterday')
        }
        if (id === 'seven-days') {
            let ind = 7
            setStoreDate('Last 7 days')
            if (presentDay > 7 ) {
                for (let index = 1; index <= 7 ; index++) {
                    // console.log('days', presentDay - index);
                }
            }
            else if (presentDay <= 7) {
                
            }
        }
        // setStoreDate('Last 7 days')
        if (id === 'one-month') {
            setStoreDate('Last 30 days')
        }
    }

    function handleApplyDate() {
        // console.log('store data - ',storeDate)
        if (storeDate === ""|| storeDate === " ") {
            setFilteredDate('Todays')
        }
        else if (storeDate !== "") {
            setFilteredDate(storeDate)
        }
        setDateFilter(false)
    }
    
    return (
            <button className="unClear filter-btn date-filter" onClick={handleDateFilter} >
                <span id='icon'><BsFillFilterSquareFill/></span>
                {filteredDate}
                <span id='caret'> {filterCaret ?<AiFillCaretUp />:<AiFillCaretDown />}</span>
                {dateFilter && <ul  className="option" onClick={handleSetDay}>
                    <li id="today" ><h4>Today</h4></li>
                    <li id="yesterday" ><h4>YesterDay</h4></li>
                    <li id="seven-days" ><h4>Last 7 days</h4></li>
                    <li id="one-month" ><h4>Last 30 days</h4></li>
                    <li >
                        <input type="date" name="date" id="date"  />
                        <input type="date" name="date" id="date" onChange={handleDateChange} />
                        
                    </li>
                    <li className='apply-li'>
                        <span className="unClear close-filter danger-bg" onClick={()=>{setDateFilter(false); setFilterCaret(false)}}>close <span className='icon small-icon'><MdClose /></span> </span>
                        <span className="unClear apply primary-bg" onClick={handleApplyDate}>Apply</span>
                    </li>
                </ul>}
            </button>
    )
}

export default DateFilter
