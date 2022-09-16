import React from 'react'

interface PropTypes {
  color: string
}

const TodoItem = ({ color }: PropTypes) => {

  return (
    <div className='w-full flex flex-row rounded-lg bg-[#C70039]'>
      <div className='flex-1 w-32 rounded-md'>
        sol
      </div>
      <div className='flex-2 w-32 rounded-md'>
        sağ
      </div>
    </div>
  )
}

export default TodoItem