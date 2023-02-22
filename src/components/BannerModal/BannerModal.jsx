import React from 'react'

import './style.css'

const BannerModal = ({closeModal}
    ) => {
  return (
    <div className='modal-background'>
        <div className='modal-container'>
            <button onClick={()=>{closeModal(false)}}>X</button>
            {/* title */}
            <div className='title'>Are You Sure???</div>
            {/* body */}
            <div className='body'>
                <p>Move to the next page, you will enjoy.</p>
            </div>
            {/* footer */}
            <div className='footer'>
                <button>Cancel</button>
                <button>Continue</button>
            </div>

        </div>
    </div>
  )
}

export default BannerModal