//Memo-ization
//optimization technique, storing or caching result of expensive function call when same arguments occur

import {useState, useEffect, useRef, useMemo} from 'react'

function UseMemoExample() {
    const [number, setNumber] = useState(1)
    // eslint-disable-next-line
    const [inc, setInc] = useState(0)
    //const sqrt = getSqrt(number)
    const sqrt = useMemo(() => getSqrt(number), [number]) //dependency array like useEffect
    //if input doesn't change (number in dependency), doesn't recall whole function
    //if number (input) changes, then it does call whole thing again

    const renders = useRef(1)

    useEffect(() => {
        renders.current = renders.current + 1
    })

    const onClick = () => {
        setInc((prevState) => {
            console.log(prevState + 1)
            return prevState + 1
        })
    }

  return (
    <div>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control w-25" />
        <h2 className="my-3">the sqrt of {number} is {sqrt}</h2>
        <button onClick ={onClick} className="btn btn-primary">Re Render</button>
        <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
    for(let i = 0; i < 10000; i++) {
        console.log(i)
    }

    console.log('Expensive Function Called')
    return Math.sqrt(n)
}

export default UseMemoExample