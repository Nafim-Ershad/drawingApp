import Artboard from './components/Artboard'
import DownloadButton from './components/DownloadButton'
import Toolbar from './components/Toolbar'
import { AppProvider } from './providers/AppProvider'

function App() {
  return (
    <AppProvider> 
      <div className='relative w-screen h-screen flex items-center justify-start'>
        <Toolbar/>
        <Artboard/>
        <DownloadButton/>
      </div>
    </AppProvider>
  )
}

export default App
