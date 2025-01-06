import PWABadge from './PWABadge.jsx'
import './App.css'
import { useLocalStorage } from '@uidotdev/usehooks'
import Titre from './components/titre.jsx'
import AddTraining from './components/addTraining.jsx'
import Training from './components/training.jsx'
import ListTraining from './components/trainingList.jsx'

function App() {
  const [training,  setTraining] = useLocalStorage("training", [])
  return (
    <>
      <Titre/>
      <AddTraining setTraining={setTraining} training={training}/>
      <ListTraining training={training} setTraining={setTraining}/>
      <PWABadge />
    </>
  )
}

export default App
