import { Card } from 'antd';
import React, { Fragment } from 'react'
const { Meta } = Card;
const CategoryCard = ({item}) => {
  return (
<Fragment>
<Card
    style={{
      width: 300,
    }}
    hoverable
    className='mx-3 my-3'
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
       <div className='flex flex-row justify-center '>
 
          <a
            key="templatevideo"
            // onClick={handleShowTemplateVideoModal}
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           
           Video
          </a>
          
          <a
            key="templateönzile"
            href="/template/preview"
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           
            Ön izle
          </a>
          
          <a
            key="satınal"
            href="/payment"
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           
           Satın Al
          </a>
   
   
       </div>
       
    ]}
  >
    <Meta
      title={item.name}
      description="This is the description"
    />
  </Card>
</Fragment>
  )
}

export default CategoryCard