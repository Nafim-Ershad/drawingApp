import {ReactNode, useContext} from 'react'
import { AppContext } from '../contexts/AppContext'

function BrushTools(): ReactNode {
    const { appState, setAppState } = useContext(AppContext);
    
    const { type } = appState.brushState;

    const changeType = (brushType: 'eraser' | 'pen') => {
        setAppState({
            ...appState,
            brushState: {
                ...appState.brushState,
                type: brushType
            }
        })
    }

    return (
        <div className='w-full h-auto flex flex-col items-start justify-center gap-3'>
            <span className='pointer-events-none'>Tools</span>
            <div className='w-full h-5 flex items-center justify-center gap-5'>
                <span 
                className={`material-symbols-outlined w-4 h-4 p-3 border-solid border-2 border-black flex items-center justify-center cursor-pointer ${type === 'eraser' ? "text-white bg-black" : "text-black bg-white"}`}
                onClick={() => changeType('eraser')}
                >
                    ink_eraser
                </span>
                <span 
                className={`material-symbols-outlined  w-4 h-4 p-3 border-solid border-2 border-black flex items-center justify-center cursor-pointer  ${type === 'pen' ? "text-white bg-black" : "text-black bg-white"}`}
                onClick={() => changeType('pen')}
                >
                    edit
                </span>
            </div>
        </div>
    )
}

export default BrushTools