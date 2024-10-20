import {ChangeEvent, ReactNode, useContext} from 'react';
import { AppContext } from '../contexts/AppContext';

function ColorSelector(): ReactNode {
    const { appState, setAppState } = useContext(AppContext);
    const { color } = appState.brushState;

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAppState({
            ...appState,
            brushState: {
                ...appState.brushState,
                color: event.target.value
            }
        })
    }
    return (
        <div className='w-full h-fit py-4 px-2 flex items-center justify-between'>
                <span className='pointer-events-none'>Brush Color</span>
                <input 
                    type="color" 
                    onChange={handleColorChange}
                    value={color}
                />
        </div>
    )
}

export default ColorSelector;