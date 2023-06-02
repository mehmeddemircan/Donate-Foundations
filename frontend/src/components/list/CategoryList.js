import React, { Fragment, useEffect } from 'react'

import { useSelector , useDispatch } from 'react-redux'
import CategoryCard from '../card/CategoryCard'

const CategoryList = () => {

    const getCategoriesName = useSelector((state) => state.category.getCategoriesName)
  return (
    <Fragment>
        
<div class="my-3">
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable AI.</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

</div>
        <div class="flex justify-between">
        {getCategoriesName.categories.map((item) => (
          <CategoryCard key={item._id} item={item} />
        ))}
        </div>
    </Fragment>
  )
}

export default CategoryList