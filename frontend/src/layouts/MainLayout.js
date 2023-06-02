import React, { Fragment, useEffect } from 'react'
import MainHeader from '../components/header/MainHeader'
import MainFooter from '../components/footer/MainFooter'
import { useDispatch } from 'react-redux'
import { getAllCategory } from '../redux-toolkit/actions/categoryActions'

const MainLayout = ({children}) => {
    
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategory())
  }, [dispatch])

  return (
    <Fragment>
        <MainHeader />
        <div className='container mx-auto'>
        {children}
        </div>
        <MainFooter />
    </Fragment>
  )
}

export default MainLayout