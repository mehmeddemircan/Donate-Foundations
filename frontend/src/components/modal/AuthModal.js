import { Modal } from 'antd'
import React, { Fragment } from 'react'
import AuthForm from '../forms/AuthForm'

const AuthModal = ({showAuthModal,handleCloseAuthModal}) => {
  return (
   <Fragment>
     <Modal footer={null} centered open={showAuthModal} onOk={handleCloseAuthModal} onCancel={handleCloseAuthModal}>
        <AuthForm />
  </Modal>
   </Fragment>
  )
}

export default AuthModal