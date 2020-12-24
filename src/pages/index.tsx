import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  List,
} from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, toggleDone } from '../ducks/todoSlice'
import { RootState } from '../ducks/store'
import TaskListItem from '../components/todo/taskListItem'

const Todo: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const [inputTaskName, setInputTaskName] = React.useState('')

  const AddTaskDialog = () => (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        <DialogContentText>Add your task.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="task"
          placeholder="task..."
          onChange={(e) => setInputTaskName(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setOpen(false)
            dispatch(addTask({ taskName: inputTaskName, done: false }))
          }}
          color="primary"
        ></Button>
      </DialogActions>
    </Dialog>
  )

  const TaskList = () => (
    <List>
      {todos.map((task, index) => (
        <TaskListItem
          key={index}
          taskName={task.taskName}
          done={task.done}
          handleCheck={() => dispatch(toggleDone(index))}
          handleDelete={() => dispatch(deleteTask(index))}
        />
      ))}
    </List>
  )

  return (
    <>
      <Container maxWidth="xs">
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Add Task
        </Button>
        <AddTaskDialog />
        <TaskList />
      </Container>
    </>
  )
}
export default Todo
