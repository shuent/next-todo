import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
  Typography,
  Checkbox,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'

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

export default TaskListItem
