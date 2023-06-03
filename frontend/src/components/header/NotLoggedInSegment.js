

import React, { Fragment, useState } from 'react'
import AuthModal from '../modal/AuthModal';


export const PhoneNotLoggedInSegment = () => {
    return (
        <div className="py-6" >
        <a
         
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
         Login
          </a>
        </div>
    )
  }
  

export const NotLoggedInSegment = () => {

    
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleShowAuthModal = () => {
    setShowAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  return (
  
    <Fragment>
          <div class="hidden lg:flex lg:justify-end " >
    <a
        
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        onClick={handleShowAuthModal}
        

      >
     Login
      </a>
    </div>
    <AuthModal 
        showAuthModal={showAuthModal}
        handleCloseAuthModal={handleCloseAuthModal}
    />
    </Fragment>
  )
}

