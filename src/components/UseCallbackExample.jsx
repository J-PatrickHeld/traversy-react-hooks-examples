//like UseMemo, but returns a callback function (instead of a value like UseMemo)

import React, {useState, useCallback} from 'react'

function UseCallbackExample() {
    const [tasks, setTasks] = useState([])

    //useCallback to memo-ize this function
    const addTask = useCallback(() => {
        setTasks((prevState) => [...prevState, 'Some Task'])
    }, [setTasks])

  return (
    <div>
        <Button addTask={addTask}/>
        {tasks.map((task, index) => (
            <p key={index}>{task}</p>
        ))}
    </div>
  )
}

//React.memo memo-izes whole component
//button has memo-ized
const Button = React.memo(({addTask}) => {
    console.log('Button rendered')
    return <div>
        <button onClick={addTask}>Add Task</button>
    </div>
})

export default UseCallbackExample