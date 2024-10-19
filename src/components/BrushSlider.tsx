import {ChangeEvent, ReactNode, useContext} from 'react';
import { AppContext } from '../contexts/AppContext';

function BrushSlider(): ReactNode {
    const { appState, setAppState } = useContext(AppContext);

    const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAppState({
            ...appState,
            brushState: {
                ...appState.brushState,
                size: Number(event.target.value)
            }
        }); // Update count based on slider value
      }

    return (
        <div className='w-full h-fit py-4 px-2 flex flex-col items-center justify-center'>
            <div className='w-full h-6 my-1 flex items-center justify-between'>
                <span>Brush Size</span>
                <span>{ appState.brushState.size / 10 }</span>
            </div>
            <input 
                type="range" 
                min="1"
                max="100"
                value={appState.brushState.size}
                onChange={handleSliderChange}
                className='w-full my-1'
            />
        </div>
    )
}

export default BrushSlider