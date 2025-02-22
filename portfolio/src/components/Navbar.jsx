import React from 'react'

function Navbar() {
    return (
        <>
           <header className=' text-Black'>
               <div className='container mx-auto flex justify-between items-center p-5'>
                   <h1 className='text-6xl font-bold'>S</h1>
                   <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                   Hire me
                        </button>
                   </div>
           </header>
        </>
        
    )
}

export default Navbar
