import React from 'react'
import { compareAsc, format } from 'date-fns'
import { useState, useEffect } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { BsFillFilterSquareFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

const DateFilter = ({notif, setNotif}) => {
    const [dayvalue, setDayvalue] = useState({day: format(new Date(), 'dd'), month: format(new Date(), 'MM'), year: format(new Date(), 'yyyy')})
    const [useDate, setUseDate] = useState('')
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
        let input = e.target.value
        let d = new Date(input)
        console.log('-------------',format(new Date(input), 'dd/MM/yyyy'))
        setStoreDate(e.target.value.replace(/-/g,'/'))
    }
    
    function handleSetDay(e) {
        let id = e.target.id
        if (id === 'today') {
            setStoreDate('Today')
            setUseDate(Number(dayvalue.day))
        }
        if (id === 'yesterday') {
            setStoreDate('Yesterday')
            setUseDate(Number(dayvalue.day) - 1)

        }
        if (id === 'seven-days') {
            setStoreDate('Last 7 days')
            let ind = Number(dayvalue.day)
            if (ind - 7 > 0) {
                for (let index = 1; index < 7  ; index++) {
                    console.log(index)
                }
            }

        }
        // setStoreDate('Last 7 days')
        if (id === 'one-month') {
            setStoreDate('Last 30 days')
            let ind = Number(dayvalue.day)
            if (ind - 30 > 0) {
                for (let index = 1; index < 30  ; index++) {
                    console.log(index)
                }
            }
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
