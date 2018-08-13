import posed from 'react-pose'
import styles from './App.css'

const ContainerPose = posed.div({
  off: { x: 0 },
  on: { x: 200 },
})

const InnerPose = posed.div({
  off: { y: 0 },
  on: { y: 200 },
})

export default class App extends Component {
  state = {
    pose: true,
  }

  componentDidMount() {
    this.intervalId = setInterval(this.toggle, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  toggle = () => {
    this.setState({ pose: !this.state.pose })
  }

  render() {
    return (
      <ContainerPose pose={this.state.pose ? 'on' : 'off'} className={styles.container} onClick={this.toggle}>
        <InnerPose className={styles.inner}>
          {/*
            This component (<InnerPose />) won't tween in (at least) IE11.
            It will remain in its `on`-pose (or the value of the `initialPose`-prop of the ContainerPose).
          */}
        </InnerPose>
      </ContainerPose>
    )
  }
}
