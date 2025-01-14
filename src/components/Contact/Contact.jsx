import React from 'react'
import ShopFooter from '../Shop/ShopFooter'
import Footer from '../HomePage/Footer'
import ContactForm from './ContactForm.jsx'

const Contact = () => {
  return (
    <>
  <ContactForm/>
           <div className="flex flex-wrap gap-4 justify-around footer py-5">
            <ShopFooter/>
           </div>
           {/* Footer  */}
                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-1 lg:p-5 m-[30px] lg:m-[90px]">
                   <div className="flex place-items-center lg:mr-1">
                     <p className="text-slate-500">
                       {" "}
                       400 University Drive Suite 200 Coral Gables, FL 33134 USA
                     </p>
                   </div>
                   <Footer />
                 </div>
    </>
  )
}

export default Contact
