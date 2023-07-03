import React from 'react'
import MainLayout from '../layouts/MainLayout'
import MetaTitle from '../meta/MetaTitle'
import HeaderSections from '../components/sections/HeaderSections'
import HomeContentSection from '../components/sections/HomeContentSection'

import CategoryList from '../components/list/CategoryList'

import LogoGrid from '../components/logo/LogoGrid'

import ServiceImages from '../components/images/ServiceImages'
import ServiceCard from '../components/card/ServiceCard'
import HomeCarousel from '../components/carousel/HomeCarousel'
import GalleryCard from '../components/card/GalleryCard'

const HomePage = () => {




  return (
    <MainLayout>
        <MetaTitle title="Vakıf Anasayfamız" name="anasayfa" content="anasayfa" />
     
        <HeaderSections />
       
        <ServiceImages />
        <hr />
        <ServiceCard />
        <hr />

      
        <HomeContentSection />
        <hr />
        {/* <CategoryList /> */}
        <LogoGrid />
    </MainLayout>
  )
}

export default HomePage