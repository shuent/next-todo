// import Head from 'next/head'
// import Link from 'next/link'
import { Typography, Button, Grid, Container } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../ducks/counterSlice'
import { RootState } from '../ducks/store'

export const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.number)
  const dispatch = useDispatch()

  return (
    <>
      <Container maxWidth="xs">
        <Grid container alignItems="center" direction="column">
          <Typography variant="h1">{count}</Typography>
          <Grid container justify="center">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch(decrement())}
            >
              -
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(increment())}
            >
              +
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default Home
