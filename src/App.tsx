import Artboard from './components/Artboard'
import Toolbar from './components/Toolbar'
import { AppProvider } from './providers/AppProvider'

function App() {
  return (
    <AppProvider> 
      <div className='w-screen h-screen flex items-center justify-start'>
        <Toolbar/>
        <Artboard/>
      </div>
    </AppProvider>
  )
}

export default App
