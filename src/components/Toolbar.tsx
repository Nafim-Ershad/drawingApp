import { ReactNode } from 'react'
import Clearbutton from './Clearbutton';
import BrushSlider from './BrushSlider';
import ColorSelector from './ColorSelector';

function Toolbar():ReactNode {
    return (
        <div className='w-full max-w-40 h-full flex flex-col items-start justify-around border border-r-[1px] border-r-black'>
            <BrushSlider/>
            <ColorSelector/>
            <Clearbutton/>
        </div>
    )
}

export default Toolbar;