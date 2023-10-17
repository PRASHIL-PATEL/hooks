import React , {useState, useEffect,} from 'react'


function UseTimer() {

    const [time, setTime] = useState(0);

    const tick = ()=>{
        setTime(PrevTime => PrevTime + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick,1000);
        return() =>{
          clearInterval(interval)
        }
      },[])


  return (
    <div className='mt-5  t-2 position-absolute top-0 '>
        <div className='d-flex justify-content-right'>
        <h2>Timer {time}</h2>
        </div>

    </div>
  )
}

export default UseTimer
