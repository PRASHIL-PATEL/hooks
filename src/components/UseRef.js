import React, { useEffect, useRef,useState } from "react";


const UseRef = () => {

    const  inputRef = useRef();
    
    const  changeBorder = () => {
        

        if(!display){
            inputRef.current.focus();
            inputRef.current.style.backgroundColor = "white";
            inputRef.current.style.color = "black";
            setDisplay(true)
        }
        else{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "Black";
        inputRef.current.style.color = "white";
        setDisplay(false);
        }
    }

    const [userInput,setUserInput] = useState("");
    const [display, setDisplay] = useState(true)

    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current + 1;
    });

    // console.log(inputRef);
    // console.log(changeBorder);
    // console.log(count)

return(
    <>
    
    <div className="bg-info-subtle mb-5">
        <div className='d-flex justify-content-center'><h2 className='shadow  w-25 p-3 mb-3 mt-3 bg-white rounded-5'>Use Ref</h2></div>
        <div className="justify-content-center d-flex"><input type="text" className="form-control m-2 w-50 d-flex justify-content-center" ref={inputRef} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/></div>
        <button type="button" onClick= {changeBorder} className="btn btn-secondary m-3">Submit</button>
    </div>
    <div>
        <div className="justify-content-center d-flex">
            <input type="text" 
            onChange={(e)=> setUserInput(e.target.value) } 
            value={userInput} className="form-control m-2 w-50 d-flex justify-content-center" placeholder="Username"/>
        </div>
        <div className="justify-content-center d-flex"><input type="text" disabled value={`the number of times comp render : ${count.current}`} className="form-control m-2 w-50 d-flex justify-content-center" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/></div>
    </div>
    </>
    );
}
export default UseRef;