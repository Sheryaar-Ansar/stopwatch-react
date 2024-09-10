import { useEffect, useState } from 'react'

function App() {

  const [time, setTime] = useState({ min: 0, sec: 0, milli: 0 })
  const [status, setStatus] = useState();
  const [disabled, setDisabled] = useState(false)

  let updateMin = time.min;
  let updateSec = time.sec;

  const stopWatch = () => {
    if (updateSec === 60) {
      updateMin++;
      updateSec = 0
    }
    updateSec++
    return (
      setTime({ min: updateMin, sec: updateSec })
    )
  }
  const startTime = () => {
    stopWatch()
    setStatus(setInterval(stopWatch, 1000))
    setDisabled(!disabled)

  }
  const stopTime = () => {
    clearInterval(status)
    setDisabled(!disabled)
  }
  const resetTIme = () => {
    clearInterval(status);
    setTime({ min: 0, sec: 0 })
    setDisabled(!disabled)

  }

  return (
    <div className='flex justify-center items-center flex-col mt-7'>
      <div>
        <h1 className='text-3xl uppercase font-sans font-bold underline-offset-1'>StopWatch - React</h1>
      </div>
      <div className='flex justify-center items-center flex-col border border-slate-300 rounded-md p-10 mt-[150px]'>
        <div className='flex justify-center items-center'>
          <h1 className='border border-slate-200 rounded-lg p-10 bg-slate-100 text-2xl font-semibold'>{time.min}</h1>
          <h1 className='border border-slate-200 rounded-lg p-10 bg-slate-100 ml-4 text-2xl font-semibold'>{time.sec}</h1>
        </div>
        <div className='mt-[100px] flex'>
          <button onClick={startTime} disabled={disabled} className='w-[120px] h-[40px] p-3 border border-slate-500 text-lg uppercase font-medium flex justify-center items-center bg-slate-200 rounded-xl transition-colors hover:bg-green-500 hover:border-green-500 hover:shadow-green-400 hover:shadow-md'>Start</button>
          <button onClick={stopTime} className='w-[120px] h-[40px] p-3 border border-slate-500 text-lg uppercase font-medium flex justify-center items-center ml-4 bg-slate-200 rounded-xl transition-colors hover:bg-yellow-500 hover:border-yellow-500 hover:shadow-yellow-400 hover:shadow-md'>Stop</button>
          <button onClick={resetTIme} className='w-[120px] h-[40px] p-3 border border-slate-500 text-lg uppercase font-medium flex justify-center items-center ml-4 bg-slate-200 rounded-xl transition-colors hover:bg-red-500 hover:border-red-500 hover:shadow-red-400 hover:shadow-md'>Reset</button>
        </div>
      </div>
    </div>
  )
}


export default App
