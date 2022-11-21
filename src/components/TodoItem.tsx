import React from 'react'

interface PropTypes {
  color: string,
  data: Object
}


const TodoItem = ({ color, data }: PropTypes) => {
  return (
    <>
      <div className='w-full flex flex-row rounded-lg bg-[#C70039] mt-5'>
        <div className='w-4/5 rounded-md p-3 text-white'>

        </div>
        <div className='w-1/5 rounded-r-md p-3 border-l-4'>
          burada tamamlandı ya da beklet meklet zaman
        </div>
      </div>
    </>
  )
}

export default TodoItem