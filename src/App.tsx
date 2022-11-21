import React, { useEffect, useState } from 'react';
import './index.css';
import TodoItem from './components/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { addEventWithPayload } from './store/events';
import { RootState } from './store';
import AddTaskIcon from '@mui/icons-material/AddTask';


const App = () => {
  const COLOR_PALETTE: string[] = [
    "#F9ED69", //yellow-ish
    "#F08A5D", //orange-ish
    "#B83B5E", //fuschia?typo
    "#6A2C70", //purple-ish
  ]

  const dispatch = useDispatch()
  const currentArray = useSelector((state: RootState) => state.eventSetter)

  const [todoUserInput, setTodoUserInput] = useState<string>('')
  const [maxCharError, setMaxCharError] = useState<boolean>(false)
  const [charactersLeft, setCharactersLeft] = useState<number>(160)

  useEffect(() => {     //max input char length ctrl
    setCharactersLeft(160 - todoUserInput.length)

    if (todoUserInput.length > 160) setMaxCharError(true)
    else setMaxCharError(false)
  }, [todoUserInput])

  function submitTodoItem() {


    dispatch(addEventWithPayload({
      value: todoUserInput,
      time: Date.now(),
      isCompleted: false
    }))
  }
  // pomodoro-like will be added l8r
  return (
    <div className="bg-[#FFC300] w-screen h-screen flex flex-col items-center">
      <div className='w-10/12 h-30 items-center flex flex-col '>
        <textarea
          className='w-10/12 mt-8 h-18 rounded-lg focus:outline-0 p-2'
          onChange={(e) => { setTodoUserInput(e.target.value) }}>
        </textarea>
        <div className='flex flex-row w-10/12 justify-end'>
          <span className='text-black text-sm'>{`${charactersLeft}/160`}</span>
        </div>
        {/* <input
          className=' w-24 h-16 rounded-lg text-center text-4xl focus:outline-none'
          type="number"
          defaultValue={10}
        />
        <span>Minutes to complete!</span> */}
      </div>
      {maxCharError && <span className='text-red-500 font-extrabold absolute top-1'>Maximum 160 characters allowed!</span>}
      <button className='bg-fuschia w-1/6 h-10 text-white rounded-lg duration-700 shadow-xl hover:text-black hover:bg-[#D85B7E]'
        onClick={() => { submitTodoItem() }}
      >
        <AddTaskIcon />
      </button>
      <div className='w-10/12'>
        <>
          {currentArray.eventsArray.map((item, index) => {
            return <TodoItem
              key={index}
              data={item}
              color={COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)]} />
          })
          }
        </>
      </div>
    </div >

  );
}
export default App;
