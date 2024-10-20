import {ReactNode, useContext} from 'react'
import { AppContext } from '../contexts/AppContext'

function DownloadButton(): ReactNode {
    const { appState } = useContext(AppContext);
    
    const { canvas } = appState;

    const downloadPicture = () => {
        if(!canvas) return;

        const link = document.createElement('a');

        // Set the download format (either png or jpeg)
        // link.href = canvas.toDataURL(`image/${format}`);
        link.href = canvas.toDataURL(`image/jpeg`);

        // Set the default download name
        link.download = `canvas-image.jpeg`;
        
        // Programmatically click the link to trigger the download
        link.click();
    }
    
    return (
        <div className='absolute right-4 bottom-4 h-auto aspect-square p-2 cursor-pointer hover:bg-amber-100'>
            <span 
            className={`material-symbols-outlined text-2xl`}
            onClick={downloadPicture}
            >
                download
            </span>
        </div>
    )
}

export default DownloadButton