import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false)

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Send finalized projectr',
			day: 'February 5',
			reminder: true,
		},
		{
			id: 2,
			text: 'Attend meeting',
			day: 'February 7',
			reminder: true,
		},
		{
			id: 3,
			text: 'Leave suspicious package on airport',
			day: 'February 30',
			reminder: true,
		},
	])

	/*==============================================================================================
                                          ADD TASK
==============================================================================================*/

	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1

		const newTask = {id, ...task}
		setTasks([...tasks, newTask])
	}

	/*==============================================================================================
                                          DELETE
==============================================================================================*/

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	/*==============================================================================================
                                          TOGGLE REMINDER
==============================================================================================*/

	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder} : task)))
	}

	/*==============================================================================================
                                          RETURN
==============================================================================================*/

	return (
		<div className='container'>
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
			) : (
				'No task to show'
			)}
		</div>
	)
}

export default App
