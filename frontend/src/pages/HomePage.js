import React from 'react'
import MainLayout from '../layouts/MainLayout'
import MetaTitle from '../meta/MetaTitle'
import HeaderSections from '../components/sections/HeaderSections'
import HomeContentSection from '../components/sections/HomeContentSection'

import CategoryList from '../components/list/CategoryList'

const HomePage = () => {




  return (
    <MainLayout>
        <MetaTitle title="Vakıf Anasayfamız" name="anasayfa" content="anasayfa" />
        <HeaderSections />
        <HomeContentSection />
        <hr />
        <CategoryList />
    </MainLayout>
  )
}

export default HomePage