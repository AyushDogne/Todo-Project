// import React, { useEffect, useRef, useState } from 'react'
// import '../../Style/AddNewSauda.css'
// import { addSauda } from '../../Redux/Slice/AacottonSlice';
// import { nanoid } from '@reduxjs/toolkit';
// import { useDispatch, useSelector } from 'react-redux';
// import ListAllSouda from './ListAllSouda';
// import { NavLink ,useNavigate} from 'react-router-dom';


// function AddNewSauda() {
//   const [hideForm, setHideForm] = useState(true)

//   function closeHandelr() 
//   {
//     setHideForm(false)
//   }
 

//   let partyName = useSelector(state => state.customerList)
//   let productList = useSelector(state => state.productList)
//   let stationList = useSelector(state => state.stationList)
//   let unitList = useSelector(state => state.quantityUnitList)


//   const Contract_ref = useRef()
//   const BuyerParty_ref = useRef()
//   const SellerParty_ref = useRef()
//   const product_ref = useRef()
//   const Quantity_ref=useRef()
//   const Condition_ref = useRef()
//   const Date_ref = useRef()
//   const Buyer_Station_ref = useRef()
//   const Seller_Station_ref = useRef()
//   const Rate_ref = useRef()
//   const Unit_ref = useRef()


//   const dispatch = useDispatch()

//   function submitHandler(e) {
//     e.preventDefault();

//     dispatch(addSauda(
//       {
//         contract: Contract_ref.current.value,
//         buyerParty: BuyerParty_ref.current.value,
//         sellerParty: SellerParty_ref.current.value,
//         product: product_ref.current.value,
//         quantityValue:Quantity_ref.current.value,
//         conditonRemark: Condition_ref.current.value,
//         SaudaDate: Date_ref.current.value,
//         buyerStation: Buyer_Station_ref.current.value,
//         sellerStation: Seller_Station_ref.current.value,
//         rate: Rate_ref.current.value,
//         unit: Unit_ref.current.value,
//       }
//     ))
//     setHideForm(false)


//     //
//   }
//   let [quantityValue, setQuantityValue] = useState('')

//   let hendleQuantity = (e) => {
//     setQuantityValue(e.target.value)
//   }
//   console.log(quantityValue)


//   // let navigat=useNavigate()
//   // let switchToListAllSouda=()=>
//   //   {
//   //     setHideForm(false)
//   //   }
    
//   return (
//     <div className='add_sauda_main_div'>
//       {
//         hideForm ? <div>
//           <h1 className='hading'>Add New Sauda</h1>
//           <p className='icon' onClick={closeHandelr} >&times;</p>
//           <form onSubmit={submitHandler} >
//             <div className='container_main'>
//               <div className='div1'>
//                 <div>
//                   <label>Contract Number</label><br/>
//                   <input type='text'
//                     className='Contract_Number'
//                     ref={Contract_ref}
//                     placeholder='1234567890'
//                   />
//                 </div>
//                 <div>
//                   <label>Buyer Party</label><br/> 
//                   <select ref={BuyerParty_ref} className='Buyer_party' >
//                     <option disabled selected> Select Buyer Party</option>
//                     {
//                       partyName.map((item, index) => {
//                         return (

//                           <option key={index}>{item.partyName}</option>
//                         )
//                       })
//                     }

//                   </select>
//                 </div>

//                 <div>
//                   <label>Seller Party</label><br/>
//                   <select id='sellerParty' ref={SellerParty_ref} className='Seller_Party-1' >
//                     <option disabled selected> Select Seller Party</option>
//                     {
//                       partyName.map((item, index) => {
//                         return (
//                           <option key={index}>{item.partyName}</option>
//                         )
//                       })
//                     }
//                   </select>
//                 </div>
//                 <div className='div2'>
//                   <div>
//                     <label>Product</label><br/>
//                     <select id='product' ref={product_ref} className='Sauda_Product' >
//                       <option disabled selected> Select Product</option>
//                       {
//                         productList.map((item, index) => {
//                           return (
//                             <option key={index}>{item.productName}</option>
//                           )
//                         })
//                       }

//                     </select>
//                   </div>

//                   <div className='input'>
//                     <label>Quantity</label><br/>
//                     <input type='text' className='Quantity-1' id='quantity' ref={Quantity_ref}
//                       placeholder='Quantity' onChange={hendleQuantity} />
//                   </div>

//                 </div>
//                 <div className='input2'>
//                   <label>Condition/Comment/Remark</label><br/>
//                   <input type='text'
//                     className='ConditionCommentRemark' ref={Condition_ref} id='condition'
//                     placeholder='condition/Comment/Remark' />

//                 </div>
//               </div>

//               <div >
//                 <div>
//                   <label>Sauda Date</label><br/>
//                   <input className='AddSaudaDate' ref={Date_ref} id='saudadate' type="input"
//                     placeholder="sauda date ['DD-MM-YY']" />
//                 </div>

//                 <div>
//                   <label>Buyer Station</label><br/>
//                   <select id='BuyerStation' ref={Buyer_Station_ref} className='buyerStation' >
//                     <option disabled selected >Select Buyer Station</option>
//                     {
//                       stationList.map((item, index) => {
//                         return (
//                           <option key={index}>{item.station}</option>
//                         )
//                       })
//                     }
//                   </select>
//                 </div>

//                 <div>
//                   <label>Seller Station</label><br/>
//                   <select id='sellerStation' ref={Seller_Station_ref} className='sellerStation' >
//                     <option disabled selected> Select Seller Station</option>
//                     {
//                       stationList.map((item, index) => {
//                         return (
//                           <option key={index}>{item.station}</option>
//                         )
//                       })
//                     }
//                   </select>
//                 </div>
//                 <div className=' Product-Unit-Rate'>
//                   <div className='UnitData' >
//                     <label>Unit</label><br/>
//                     <select className='addSaudaUnit' ref={Unit_ref} id='unit'>
//                       <option disabled selected>Unit</option>
//                       {
//                            (quantityValue > 1) ?
//                           unitList.map((item, index) => {
//                             return (
//                               <option key={index}>{item.pluralUnit}</option>
//                             )
//                           }) :
//                           unitList.map((item, index) => {
//                             return (
//                               <option key={index}>{item.unit}</option>
//                             )
//                           })
//                       }
//                     </select>
//                   </div>

//                   <div>
//                     <label>Rate</label><br/>
//                     <input className='addSaudaRate' ref={Rate_ref} type='text' id='rate' placeholder="Rate" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div id='btn'>
//            <button id='btn2'>Add Sauda</button>
//             </div>
//           </form>
//         </div> : " "}
//         <ListAllSouda/>
//     </div>
//   )
// };
// export default AddNewSauda


// // ==========================================



// import React, {useState,useRef} from "react";
// import '../../Style/EditSauda.css'
// import ListAllSouda from "./ListAllSouda";
// import { useDispatch} from "react-redux";
// import { useSelector } from "react-redux";
// import { editSauda } from "../../Redux/Slice/AacottonSlice";
// import { nanoid } from "@reduxjs/toolkit";




// function EditSaudaDetails(props)
// {
//   const [HideForm, setHideForm] = useState(true);

//   //let listAllSauda = useSelector(state=>state.saudaList)
//   const stationList = useSelector(state=>state.stationList)
//   const productList = useSelector(state=>state.productList)
//   let quantityAndUnitList = useSelector(state=>state.quantityUnitList)
//   let customerList = useSelector(state=>state.customerList)
  
//   const contractNumber_ref= useRef()
//   const buyerParty_ref=useRef()
//   const sellerParty_ref=useRef()
//   const product_ref=useRef()
//   const quantity_ref=useRef()
//   // const remark_ref=useRef()
//   const saudaDate_ref= useRef()
//   const buyerStation_ref= useRef()
//   const sellerStation_ref= useRef()
//   const unit_ref=useRef()
//   const rate_ref=useRef()

    
//   let dispatch = useDispatch()
//   const updateSauda = (e) =>
//   {
//     e.preventDefault();
//     dispatch(editSauda(
//       {
//         contractNumber: contractNumber_ref.current.value,
//         buyerParty: buyerParty_ref.current.value,
//         sellerParty: sellerParty_ref.current.value,
//         product: product_ref.current.value,
//         quantityValue: quantity_ref.current.value,
//         //remark: remark_ref.current.value,
//         SaudaDate: saudaDate_ref.current.value,
//         buyerStation: buyerStation_ref.current.value,
//         sellerStation: sellerStation_ref.current.value,
//         unit: unit_ref.current.value,
//         rate: rate_ref.current.value,
//       }
//     ))
//     setHideForm(false)
//    };
//   return (
//     <div className="EditSaudaMainDiv"> 
//       {HideForm?(
//       <div>
//       <div> <h1>Edit Sauda</h1></div>
//         <div>
//           <button className="crosslogo" onClick={()=>setHideForm(false)}>&times;</button>
//         </div>
//         <form action="" onSubmit={(e)=>updateSauda(e)} className="edit_sauda_main_div">
//           <div className="container1">
//             <div>
//               <div>
//                 <label>Contract Number</label><br/>
//                 <input className="suada_Id" type="text" readOnly  ref={contractNumber_ref} defaultValue={props.sauda.id} /> 
//               </div>
//               <div>
//                 <label>Buyer Party </label><br/>
//                 <select  className="Buyer_Party" ref={buyerParty_ref} defaultValue={props.sauda.buyerParty}>
//                 <option value="" disabled selected>Buyer Party</option>
//                   {customerList.map((item, index) => {
//                     return (
//                       <option key={index}>{item.partyName}
//                       </option>
//                     );
//                   })}              
//                 </select> 
//               </div>
//               <div>
//                 <label>Seller Party</label><br/>
//                 <select className="Seller_Party" ref={sellerParty_ref} defaultValue={props.sauda.sellerParty} >
//                 <option value="" disabled selected>Seller Party</option>
//                   {customerList.map((item, index) => {
//                     return (
//                       <option key={index}>{item.partyName}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </div>
//               <div className="select1">
//                 <div>
//                   <label>Product</label><br/>
//                   <select className="Product" ref={product_ref} defaultValue={props.sauda.product}>
//                   <option value="" disabled selected>Product</option>
//                     {productList.map((item, index) => {
//                       return (
//                         <option key={index}>{item.productName}
//                         </option>
//                       );
//                     })}
//                   </select>
//                 </div>

//                 <div >
//                   <label> Quantity</label><br/>
//                   <input className="Quantity" type="text" ref={quantity_ref} defaultValue={props.sauda.quantityValue} />
//                 </div>
//               </div>

//                   {/* <div className="Remarkinput"  >
//                     <label > Condition/Comment/Remark</label>
//                     <input type="text" placeholder="Condition/Comment/Remark" ref={remark_ref} defaultValue={Sauda_Default_Details.remark} />
//                   </div> */}
//             </div>
//             <div>
//               <div>
//                 <label>Sauda Date</label><br/>
//                <input className="sauda_Date" type="text" ref={saudaDate_ref} defaultValue={props.sauda.SaudaDate}/> 
//               </div>
//               <div>
//                 <label>Buyer Station</label><br/>
//                 <select className="Buyer_Station" ref={buyerStation_ref} defaultValue={props.sauda.buyerStation}>
//                 <option value="" disabled selected>Buyer Station</option>
//                 {/* defaultValue={listAllSauda.buyerStation} */}
//                   {stationList.map((item, index) => 
//                   {
//                     return (
//                       <option key={index}>{item.station}</option>
//                     );
//                   })}
//                 </select>
//               </div>
//               <div>
//                 <label> Seller Station</label><br/>
//                 <select  className="Seler_Station" ref={sellerStation_ref} defaultValue={props.sauda.sellerStation}>
//                 <option value="" disabled selected>Seller Station</option>
//                 {/* defaultValue={listAllSauda.sellerStation} */}
//                   {stationList.map((item, index) => {
//                     return (
//                       <option key={index}>{item.station}</option>
//                     );
//                   })}
//                 </select>
//               </div>
//               <div className="select2">
//                 <div>
//                   <label>Unit</label><br/>
//                   <select className="Unit" ref={unit_ref} defaultValue={props.sauda.unit}>
//                   <option value="" disabled selected>Unit</option>

//                     {quantityAndUnitList.map((item, index) => {
//                       return (
//                         <option key={index}>{item.unit}</option>
//                       );
//                     })}
//                   </select>
//                 </div>
//                 <div >
//                   <label> Rate</label><br/>
//                   <input className="Rate" type="text" ref={rate_ref} defaultValue={props.sauda.rate} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <button className="UpdateButton" >Update Sauda</button>
//           </div>
//         </form>
//       </div>
//       ):('')}
//       <div onClick={()=>setHideForm(false)}>
//         <ListAllSouda/>
//       </div>
//     </div>
//   ); 
// }  
// export default EditSaudaDetails;


// // =========================================




// import React, { useEffect, useState } from 'react'
// import '../../Style/ListAllSouda.css'
// import Logomenu from '../Logomenu';
// import { DatePicker } from 'antd';
// import moment from 'moment'
// import { useSelector } from 'react-redux';
// import { NavLink, useNavigate } from "react-router-dom";
// import EditSauda from "./EditSauda"
// const { RangePicker } = DatePicker;

// var count = 1
// const ListAllSouda = () =>   
// {
//   const [dateRange, setDateRange] = useState([])
//   let listAllSauda = useSelector(state => state.saudaList)
//   let partyName = useSelector(state => state.customerList)
//   let stationList = useSelector(state => state.stationList)
//   //let quantitylist = useSelector(state=>state.quantityUnitList)
//   let productList = useSelector(state => state.productList)

//   let [showList, setShowList] = useState(true)
//   const [selectedSauda, setSelectedSauda] = useState(null);

//   let handleAddSauda = () => 
//   {
//     window.location.href = "/addNewSauda"
//   }

//   let haldelEditSauda = (sauda) => 
//   {
//     setSelectedSauda(sauda)
//     setShowList(false)
//   }

//   return (
//     <div className='listAllSaudaMainDiv'>
//      {showList?(
//       <div className='listallsouda_flex'>     
//       <button className='Add-Souda' onClick={()=>handleAddSauda()}>+ Add Sauda</button>
//         <form action="">
//           <div className='input-main-div'>
//             <div className='input-second-div'>
//               <div><spa>Filter by:</span>
//                 <RangePn className='Filterby'icker className='souda-range'
//                   onChange={(values) => {
//                     setDateRange(values.map(item => {
//                       return moment(item).format('DD-MM-YYYY')
//                     }))
//                   }}
//                 />
//               </div>
//               <div>
//                 <select className='buyer_Party'>
//                   <option value="" disabled selected>Buyer Party</option>
//                   {
//                     partyName.map((data) => (<option>{data.partyName}</option>))
//                   }
//                 </select>
//               </div>
//               <div>
//                 <select className='buyer_Party'>
//                   <option value="" disabled selected>Seller Party</option>

//                   {partyName.map((data) => (
//                     <option>{data.partyName}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <input type="text" placeholder='Quantity' className='quantity' defaultValue={listAllSauda[0].quantityValue}/>
//               </div>
//             </div>
//             <div className='input-second-div'>
//               <div className='main-second-div'>
//                 <select className='product'>
//                   <option value="" disabled selected>Product</option>
//                   {productList.map((data) => (<option>{data.productName}</option>))}
//                 </select>
//               </div>
//               <div>
//                 <select className='buyerstation'>
//                   <option value="" disabled selected>Buyer Station</option>

//                   {stationList.map((data) => (<option>{data.station}</option>))}
//                 </select>
//               </div>
//               <div>
//                 <select className='sellerPartyStation'>
//                   <option value="" disabled selected>Seller Station</option>

//                   {stationList.map((data) => (<option>{data.station}</option>))}
//                 </select>
//               </div>
//               <div>
//                 <input type='text' placeholder='Rate' className='rate' defaultValue={listAllSauda[1].rate} />
//               </div>
//             </div>
//           </div>
//         </form>
//         {/* --------------------------- Table ----------------------------------- */}

//           <table className='table'>
//             <tr>
//               <th className='list_Count_heading'>#</th>
//               <th className='list-Sauda-Date' >Sauda Date</th>
//               <th className='list-Buyer-party'>Buyer party
//                 <span className='span_station'>
//                 <br/>Station</span>
//               </th>
//               <th className='list-Seller-party'>Seller party
//                 <span className='span_station'>
//                 <br/>Station</span>
//               </th>
//               <th className='list_Product'>Product</th>
//               <th className='list_Quantity'>Quantity</th>
//               <th className='list-Rate'>Rate</th>
//             </tr>
//             {(listAllSauda).map((item) => (  
//               <tr className='table-all-data' key={item.id} onClick={()=>haldelEditSauda(item)}>
//                 <td className='.list_Count_heading'>{count++}</td>
//                 <td className='souda-date'>{item.SaudaDate}</td>
//                 <td className='buyer-party-data'>{item.buyerParty}
//                   <span className='span_station'><br/>
//                     {item.buyerStation}
//                   </span>
//                 </td>
//                 <td className='seller-party-data'>{item.sellerParty}
//                   <span className='span_station'><br/>
//                   {item.sellerStation}</span>
//                 </td>
//                 <td className='product-data'>
//                   {item.product}
//                 </td>
//                 <td className='quintals-data'>{item.quantityValue +" "+ `(${item.unit})`} </td>
//                 <td className='rate-data'>{item.rate}</td>
//               </tr>
//             ))}
//           </table>
//         </div>
//         ):(  
//       <EditSauda
//           sauda={selectedSauda}
//         />)}
//     </div>
//   )
// }
// export default ListAllSouda

