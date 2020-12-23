import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core'
import Link from 'next/link'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
})

const Layout: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React-Redux-Practice
          </Typography>
          <Link href="/counter">
            <Button color="inherit">Counter</Button>
          </Link>
          <Link href="/">
            <Button color="inherit">Todo</Button>
          </Link>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}
export default Layout
