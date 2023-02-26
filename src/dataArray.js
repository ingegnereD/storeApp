import React from "react"
import {FaHome} from 'react-icons/fa'
import {BsPeopleFill, BsDashCircleFill} from 'react-icons/bs'
import {MdInventory2, MdEventNote, MdContacts} from 'react-icons/md'
import {IoIosCash, IoMdAdd} from 'react-icons/io'
import {GrNotes} from 'react-icons/gr'
import {FaBriefcase, FaShuttleVan} from 'react-icons/fa'
import {AiTwotoneSetting} from 'react-icons/ai'

export const availLocations = [
    {id: 'ore', title: 'Ore, Ondo state'},
    {id: 'ife', title: 'Ile-Ife, Osun state'},
    {id: 'enugu', title: 'Enugu state'},
    {id: 'all', title: 'All Location'},
]

export const asideLinks = [
    {id: 'adminDash', name: 'Home', icon: <FaHome /> },
    {id: 'userManage', name: 'User Management', icon: <BsPeopleFill />, link: 'user-management' },
    {id: 'contact', name: 'Contact', icon: <MdContacts /> }, 
    {id: 'customers', name: 'Customers', icon: <BsPeopleFill /> }, 
    {id: 'product', name: 'Product', icon: <MdInventory2 />, link: 'product' },
    {id: 'purchase', name: 'Purchase', icon:<IoIosCash/> ,link: 'purchase'},
    {id: 'sales', name: 'Sale', icon: <FaBriefcase />, },
    {id: 'stock-transfer', name:'Stock Transfer', icon: <FaShuttleVan/>}
    ,{id: 'expenses', name:'Expenses', icon: <BsDashCircleFill />, link:'expenses'},
    {id: 'account', name: 'Account', icon: <MdEventNote />, link:'account'},
    {id: 'report', name: 'Report', icon: <MdEventNote />, link:'report'},
    {id: 'setting', name: 'Setting', icon: <AiTwotoneSetting /> },
    {id: 'log-out', name: 'Log Out', icon: <AiTwotoneSetting /> },
]

export const recentSales = [
    {date: '2/1/2023', time:'2:54',  id: 1001, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1002, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '16', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '16', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '16', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1003, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '17', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '17', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '157', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '17', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1004, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1005, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1006, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1007, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1008, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1009, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1010, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '16', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1011, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
    {date: '2/1/2023', time:'2:54',  id: 1012, location: 'Ile-Ife', invoice: [
        {product: "G/P Semovita 1 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 2 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 5 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
        {product: "G/P Semovita 10 kg", qty: '15', unitprice: '6,200', totprice: '81,200'},
    ], paymtd: 'cash', paystatus: 'paid', seller: 'David', totamount: '215,950', totpaid: '215,950', creditbal: '0', customer:'Walk-In',  },
]

export const topSale = [
    {product: 'Emperor 25 lit', qty: '252 kegs', price: '31,000', rem: '405 kegs'},
    {product: 'Emperor 25 lit', qty: '252 kegs', price: '31,000', rem: '405 kegs'},
    {product: 'Emperor 25 lit', qty: '252 kegs', price: '31,000', rem: '405 kegs'},
    {product: 'Emperor 25 lit', qty: '252 kegs', price: '31,000', rem: '405 kegs'},
    {product: 'Emperor 25 lit', qty: '252 kegs', price: '31,000', rem: '405 kegs'},
    {product: 'Emperor 25 lit', qty: '252 kegs', price: '31,000', rem: '405 kegs'},
    {product: 'Emperor 25 lit', qty: '252 kegs', price: '31,000', rem: '405 kegs'},
    {product: 'Emperor 25 lit', qty: '252 kegs', price: '31,000', rem: '405 kegs'},
    {product: 'Emperor 25 lit', qty: '252 kegs', price: '31,000', rem: '405 kegs'},
]

export const recentPurchase = [
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
    {date: '3/9/2023', time: '3:25', brand: 'G/P Semovita & Wheat', totamount: '27,540,400'},
]
export const purchaseInfo = [
    {product: 'Semovita 500 g', unitprice: '6,500', qty: '750 bags', totamount: '7,950,000'},
    {product: 'Semovita 1 kg', unitprice: '6,500', qty: '750 bags', totamount: '7,950,000'},
    {product: 'Semovita 2 kg', unitprice: '6,500', qty: '750 bags', totamount: '7,950,000'},
    {product: 'Semovita 5 kg', unitprice: '6,500', qty: '750 bags', totamount: '7,950,000'},
    {product: 'Semovita 10 kg', unitprice: '6,500', qty: '750 bags', totamount: '7,950,000'},
]

export const stockAlert = [
    {product: 'Semovita 1kg', location: 'Ile-Ife', qty: '25 bags'},
    {product: 'Semovita 1kg', location: 'Ile-Ife', qty: '25 bags'},
    {product: 'Semovita 1kg', location: 'Ile-Ife', qty: '25 bags'},
    {product: 'Semovita 1kg', location: 'Ile-Ife', qty: '25 bags'},
    {product: 'Semovita 1kg', location: 'Ile-Ife', qty: '25 bags'},
    {product: 'Semovita 1kg', location: 'Ile-Ife', qty: '25 bags'},
    {product: 'Semovita 1kg', location: 'Ile-Ife', qty: '25 bags'},
    {product: 'Semovita 1kg', location: 'Ile-Ife', qty: '25 bags'},
    {product: 'Semovita 1kg', location: 'Ile-Ife', qty: '25 bags'},
    {product: 'Semovita 1kg', location: 'Ile-Ife', qty: '25 bags'},
]


export const newProduct = [
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
    {date: '3/9/2023', time: '3:25',  product: 'Semovita 1kg', unitprice: '6,700', qty: '600', desc: 'bag', brand: 'Golden Penny', totamount: '10,230,750', addedby: 'David'},
]


export const brandName = ['Golden Penny', 'Honey Well', 'Multipro', 'Baking Mat.', 'Salt']


export const tempSaleList = [
    {product: 'Semovita 500 g', unitprice: '6,250', qty: '15 bags', totamount: '82,200'},
    {product: 'Semovita 1 kg', unitprice: '6,250', qty: '15 bags', totamount: '82,200'},
    {product: 'Semovita 2 kg', unitprice: '6,300', qty: '5 bags', totamount: '45,000'},
    {product: 'Semovita 5 kg', unitprice: '3,500', qty: '20 bags', totamount: '70,000'},
    {product: 'Semovita 10 kg', unitprice: '5,950', qty: '15 bags', totamount: '67,500'},
    {product: 'Semovita 500 g', unitprice: '6,250', qty: '15 bags', totamount: '82,200'},
    {product: 'Semovita 1 kg', unitprice: '6,250', qty: '15 bags', totamount: '82,200'},
    {product: 'Semovita 2 kg', unitprice: '6,300', qty: '5 bags', totamount: '45,000'},
    {product: 'Semovita 5 kg', unitprice: '3,500', qty: '20 bags', totamount: '70,000'},
    {product: 'Semovita 10 kg', unitprice: '5,950', qty: '15 bags', totamount: '67,500'},
    {product: 'Semovita 500 g', unitprice: '6,250', qty: '15 bags', totamount: '82,200'},
    {product: 'Semovita 1 kg', unitprice: '6,250', qty: '15 bags', totamount: '82,200'},
    // {product: 'Semovita 2 kg', unitprice: '6,300', qty: '5 bags', totamount: '45,000'},
    // {product: 'Semovita 5 kg', unitprice: '3,500', qty: '20 bags', totamount: '70,000'},
    // {product: 'Semovita 10 kg', unitprice: '5,950', qty: '15 bags', totamount: '67,500'},
    // {product: 'Semovita 500 g', unitprice: '6,250', qty: '15 bags', totamount: '82,200'},
    // {product: 'Semovita 1 kg', unitprice: '6,250', qty: '15 bags', totamount: '82,200'},
    // {product: 'Semovita 2 kg', unitprice: '6,300', qty: '5 bags', totamount: '45,000'},
    // {product: 'Semovita 5 kg', unitprice: '3,500', qty: '20 bags', totamount: '70,000'},
    // {product: 'Semovita 10 kg', unitprice: '5,950', qty: '15 bags', totamount: '67,500'},

]

export const avilableProduct =[
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '11,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '12,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
    {product: 'Emperor 1lit', brand: 'Multipro', unitprice: '31,000', qty: '1,200'},
]

