import React, { useState } from 'react'

const Subscribe = () => {
    const [email, setEmail]=useState('')
    const changeHandler=(e)=>{
        setEmail(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(email)
    }
  return (
    <div className='bg-dark p-5 text-center container rounded' style={{marginBottom:'-30px',position:'relative', zIndex:"10", border:'1px solid black'}} >
           <h3 className='text-center my-3' style={{ fontFamily: "Fira Code, monospace", fontWeight: '900', color:'white' }}>Subscribe To Get Our Latest Deals</h3>
        <form action="post" className=' d-flex direction-row justify-content-center mt-4 px-5 flex-wrap' onSubmit={submitHandler}>
            <input className=' mx-2 rounded py-2 m-4' style={{textIndent:'15px', border:'none', width:'80%'}} type="text" value={email} placeholder='Your Email Address' onChange={changeHandler}/>
            {/* <button className='btn btn-outline-info py-2 m-3'>Subscribe</button> */}
            <button className='btn my-4 px-3' style={{backgroundColor:'none', color:'#31EDC5', border:'1px solid #31EDC5', fontFamily:"Fira Code, monospace", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"} }>Subscribe</button>
        </form>
      
    </div>
  )
}

export default Subscribe
