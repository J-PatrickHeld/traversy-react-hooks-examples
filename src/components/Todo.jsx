//fix memory leak (doesn't seem to be an issue anymore?)
//commented code is how video explained fixing the memory leak issue
//but it actually works fine the way he said would cause the issue


import {useState, useEffect, /*useRef*/} from 'react'

function Todo() {
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})

    // const isMounted = useRef(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .then((data) => {
            setTimeout(() => {
                // if (isMounted.current) {
                //     setTodo(data)
                //     setLoading(false)
                // }
                setTodo(data)
                setLoading(false)
            }, 3000)
        })
        //runs when component is unmounted (seems to have been fixed in later versions of react?)
        // return () => {
        //     isMounted.current = false
        // }
    }, [/*isMounted*/])

  return (
    loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
  )
}

export default Todo