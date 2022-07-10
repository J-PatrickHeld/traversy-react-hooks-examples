//create DOM reference

import {useRef} from 'react'

function UseRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value) //value of what's in the input box
        inputRef.current.value = "hello" //change value of input box after hitting submit
        inputRef.current.style.backgroundColor = 'red' //change background color of input box after hitting submit
        paraRef.current.innerText = "Goodbye" //change p to goodbye on submit

        //does not re-render the component like setting State value
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input type="text" ref={inputRef} id='name' className="form-control mb-2" />
            <button type='submit' className='btn btn-primary'>Submit</button>
            <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p> 
        </form>
    </div>
  )
  //focus on input when click p tag
}

export default UseRefExample1