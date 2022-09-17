import React, { useEffect, useState } from 'react';
import './index.css';
import TodoItem from './components/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { addEventWithPayload } from './store/events';
import { RootState } from './store';


const App = () => {
  const COLOR_PALETTE: string[] = [
    "#F9ED69", //yellow-ish
    "#F08A5D", //orange-ish
    "#B83B5E", //fuschia?typo
    "#6A2C70", //purple-ish
  ]

  const dispatch = useDispatch()
  const currentString = useSelector((state: RootState) => state.eventSetter.value)
  console.log(currentString)

  const [todoUserInput, setTodoUserInput] = useState<string>('')
  const [maxCharError, setMaxCharError] = useState<boolean>(false)
  const [charactersLeft, setCharactersLeft] = useState<number>(160)

  useEffect(() => {     //max input char length ctrl
    setCharactersLeft(160 - todoUserInput.length)

    if (todoUserInput.length > 160) setMaxCharError(true)
    else setMaxCharError(false)
  }, [todoUserInput])

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
      </div>
      {maxCharError && <span className='text-red-500 font-extrabold absolute top-1'>Maximum 160 characters allowed!</span>}
      <button className='bg-fuschia w-3/12 h-10 text-white rounded-lg duration-700 shadow-xl hover:text-black hover:bg-[#D85B7E]'
        onClick={() => {
          dispatch(addEventWithPayload("Berke"))
        }}
      >
        Create
      </button>
      {currentString}
      <div className='w-10/12'>
        <TodoItem
          color={COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)]}
        />
      </div>
    </div>

  );
}
export default App;
