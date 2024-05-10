import React from 'react'

const Recommended = () => {
  return (
    <div className='justify-between w-full flex'>
        <span className='flex gap-2 text-sm'>
            <p className=''>Showing 4 of</p>
            <p className='text-[#FF8682]'>257 places</p>
        </span>
        <div className='flex gap-1 text-sm'>
            <span>Sort by <strong>Recommended</strong></span>
            <button>
                <img src='./downarrow.svg' alt='svg' />
            </button>
        </div>
      
    </div>
  )
}

export default Recommended
