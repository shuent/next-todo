import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
  Typography,
  Checkbox,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, toggleDone } from '../ducks/todoSlice'
import { RootState } from '../ducks/store'

type Props = {
  taskName: string
  done: boolean
  handleCheck: () => void
  handleDelete: () => void
}

const TaskListItem: React.FC<Props> = ({
  taskName,
  done,
  handleCheck,
  handleDelete,
}: Props) => {
  return (
    <ListItem divider>
      <ListItemIcon>
        <Checkbox onClick={handleCheck} edge="start" checked={done} />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="body1">
          {done ? <del>{taskName}</del> : taskName}
        </Typography>
      </ListItemText>

      <ListItemSecondaryAction onClick={handleDelete}>
        <IconButton edge="end">
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

const Todo: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const [inputTaskName, setInputTaskName] = React.useState('')
  return (
    <>
      <Container maxWidth="xs">
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Add Task
        </Button>
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
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>

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
      </Container>
    </>
  )
}
export default Todo
