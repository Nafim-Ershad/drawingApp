import {ReactNode, useContext} from 'react';
import { AppContext } from '../contexts/AppContext';

function Clearbutton(): ReactNode {
    const { appState, setAppState } = useContext(AppContext);

    const {context, canvas, isClearable} = appState;

    const clearScreen = () => {
        if(canvas) context?.clearRect(0, 0, canvas.width, canvas.height);

        setAppState({
            ...appState,
            isClearable: false
        })
    }
    return (
        <div className='w-full flex items-center justify-center py-5'>
            <span 
                className={`material-symbols-outlined w-8 aspect-square flex items-center justify-center text-5xl ${isClearable ? "cursor-pointer text-black" : "pointer-events-none text-slate-400"}`} 
                onClick={clearScreen}>
                delete
            </span>
        </div>
    )
}

export default Clearbutton;