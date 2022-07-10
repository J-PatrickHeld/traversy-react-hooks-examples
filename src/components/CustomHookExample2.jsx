import useLocalStorage from "../hooks/useLocalStorage"

function CustomHookExample2() {
    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const onSubmit = e => {
        e.preventDefault()

        const taskObj = {
            task, //short for task: task
            completed: false,
            date: new Date().toLocaleDateString()
        }

        setTasks([...tasks, taskObj])
    }

  return (
    <>
        <form onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>

        <hr />
        {tasks.map((task) => (
            <h3 key={task.task}>{task.task}</h3>
        ))}
    </>
  )
}

export default CustomHookExample2