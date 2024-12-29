import React, { useState } from 'react'

export default function Footer({head,firstLink,secLink,thdLink,fthLink}) {
    let [link,setLink]=useState(head)
  return (
    <div>
        <ul className='p-4 '>
            <a href="" className='hover:no-underline '><li className='text-slate-500'>{link}</li></a>
            <a href="" className='hover:no-underline'><li className='mt-4 text-black font-[600]'>{firstLink}</li></a>
            <a href="" className='hover:no-underline'><li className='mt-4 text-black font-[600]'>{secLink}</li></a>
            <a href="" className='hover:no-underline'><li className='mt-4 text-black font-[600]'>{thdLink}</li></a>
            <a href="" className='hover:no-underline'><li className='mt-4 text-black font-[600]'>{fthLink}</li></a>
        </ul>
      
    </div>
  )
}
