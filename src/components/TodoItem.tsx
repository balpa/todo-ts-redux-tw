
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
interface PropTypes {
  color: string,
  data: {
    value: string,
    time: number,
    isCompleted: boolean
  }
}

const TodoItem = ({ color, data }: PropTypes) => {

  const { value, time, isCompleted }: { value: string, time: number, isCompleted: boolean } = data

  let timestamp: string = new Date(time).toString().split(' ').slice(0, 5).join(' ')

  function completeButton() {
    console.log("complete button clicked")
  }

  return (
    <>
      <div className='w-full flex flex-row rounded-lg bg-[#C70039] mt-5'>
        <div className='flex-1 rounded-md p-3 text-white break-all'>
          {value}
        </div>
        <div className='flex-2 rounded-r-md p-3 border-l-4 flex flex-col'>
          <div className='p-2 text-center text-xs text-white'>
            Created at: <br />
            {timestamp}
          </div>
          <div className='p-2 text-center text-xs text-white'>
            {isCompleted ? <DoneIcon /> : <CloseIcon />}
          </div>
        </div>
      </div>
      <div className='w-full text-center' onClick={() => { completeButton() }}>Click to complete!</div>
    </>
  )
}

export default TodoItem