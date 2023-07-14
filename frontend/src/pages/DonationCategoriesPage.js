import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useSelector } from 'react-redux';

const DonationCategoriesPage = () => {
    const getCategoriesName = useSelector(
        (state) => state.category.getCategoriesName
      );
  return (
    <MainLayout>
        <div className=' my-3 d-flex flex-row flex-wrap gap-y-5 justify-between align-items-center'>
    {getCategoriesName.categories.map((category) => (
                    
<a href={`/donation/${category._id}/details`} class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.name}</h5>
    <ul className='list-list-unstyled'>
    {   
   
        category.subcategories.map((subcategory) => (
            <li className='my-1'>
                <a>{subcategory.name}</a>
            </li>
        ))
   
    }
         </ul>
</a>
    ))}



        </div>
    </MainLayout>
  )
}

export default DonationCategoriesPage