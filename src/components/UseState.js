import React , {useState, useEffect} from 'react'

const UseState = () =>  {

    const [count, setCount] = useState(0);
    const [widthCount, setWidthCount] = useState(window.innerWidth)
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const currectScreenWidth = () => {
        setWidthCount(() => window.innerWidth);
    }


    const logMoucePosition = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
    document.title = count
    })

    useEffect(() => {
        window.addEventListener("resize", currectScreenWidth);
        return () => {
            window.removeEventListener("resize",currectScreenWidth);
        };
    });

    useEffect(() => {
        window.addEventListener('mousemove', logMoucePosition)
    }, [])
  return (
    <div className='mt-5 '>
        <div className='d-flex justify-content-center'><h2 className='shadow  w-25 p-3 mb-3 bg-white rounded-5'>Use State</h2> 

        </div>
        <div className="d-flex justify-content-center"><button className='btn btn-success m-4' onClick={() => setCount(count + 1) }>+</button>
        <h2 className='m-4'>{count}</h2>
        <button className='btn btn-danger m-4' onClick= {() =>( count === 0 ? setCount(0) : setCount(count - 1))}>-</button></div>
        <div className='d-flex justify-content-center'><h2 className='shadow  w-25 p-3 mb-3 bg-white rounded-5'>Use Effect</h2></div>
        <h2>The size of the window is <span> {widthCount} </span></h2>
        <hr />
        <h2>Mouse moves position <span> X - {x} , y {y}</span></h2>
        <hr />

    </div>
  )
}

export default UseState
