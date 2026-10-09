import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'
const content = () => {
  return (
    <div className='py-10 flex gap-10 h-[90vh] items-center'>

        <LeftContent/>
        <RightContent/>


    </div>
  )
}

export default content