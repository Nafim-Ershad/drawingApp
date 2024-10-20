/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useRef, useState, MouseEvent, useContext } from 'react'
import { AppContext } from '../contexts/AppContext';

function Artboard(): ReactNode {
    const divRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mouseData, setMouseData] = useState({ 
        x: 0, 
        y: 0 
    });
    const [canvasCTX, setCanvasCTX] = useState<CanvasRenderingContext2D | null>(null);

    const { appState, setAppState } = useContext(AppContext); // Get Brush Setting

    const getMousePos = (event: MouseEvent<HTMLCanvasElement>) => {
        if(canvasRef.current){
                    const rect = canvasRef.current.getBoundingClientRect();
                    const scaleX = canvasRef.current.width / rect.width;
                    const scaleY = canvasRef.current.height / rect.height;
                    // The e variable is the event
                    // Subtract canvas top-left corner from mouse position
                    const x = (event.clientX - rect.left) * scaleX; // Mouse X position
                    const y = (event.clientY - rect.top) * scaleY; // Mouse Y positio

                    return {
                        x,
                        y
                    }
                }
    }

    const SetPos = (e: MouseEvent<HTMLCanvasElement>) => {
        
        const { x: posX, y: posY } = {...getMousePos(e)};
        setMouseData({
            x: posX!, // Mouse X position
            y: posY! // Mouse Y position
        });
        // Previous way:
        // setMouseData({
        //     x: e.clientX, // Mouse X position
        //     y: e.clientY // Mouse Y position
        // });
    };

    const Draw = (e: MouseEvent<HTMLCanvasElement>) => {
        if (e.buttons !== 1) return; // The left mouse button should be pressed
        const { x: posX, y: posY } = {...getMousePos(e)};
        const ctx = canvasCTX!; // Our saved context
        ctx.beginPath(); // Start the line
        ctx.moveTo(mouseData.x, mouseData.y); // Move the line to the saved mouse location

        // setMouseData({
        //     x: e.clientX, // Update the mouse location
        //     y: e.clientY // ^^^^^^^^^^^^^^^^^^^^^^^^^^^
        // });
        setMouseData({
            x: posX!, // Update the mouse location
            y: posY! // ^^^^^^^^^^^^^^^^^^^^^^^^^^^
        });
        // updateMousePos(e);
        // ctx.lineTo(e.clientX, e.clientY); // Again draw a line to the mouse postion
        ctx.lineTo(posX!, posY!);
        ctx.strokeStyle = appState.brushState.type === 'pen' ? appState.brushState.color : '#FFFFFF'; // Set the color as the saved context
        ctx.lineWidth = appState.brushState.size; // Set the size to the saved context
        // Set the line cap to round
        ctx.lineCap = 'round';
        ctx.stroke(); // Draw it!S

        setAppState({
            ...appState, 
            isClearable: true // To unlock the clear button
        });
    };

    const setCTXSize = () => {
        if(canvasRef.current && divRef.current){
            canvasRef.current.width = divRef.current.clientWidth; // Set width of the canvas to the width of the screen
            canvasRef.current.height = divRef.current.clientHeight; // Set height of the canvas to the height of the screen
        }
    }

    // Set the canvas ctx as the state
    useEffect(() => {
        const canvas = canvasRef.current; // Select the canvas element
        const div = divRef.current;
        if(canvas && div){
            const ctx = canvas.getContext('2d'); // The canvas context
            setCanvasCTX(ctx); // Finally, set the state
            // Setting the Context
            setAppState({
                ...appState,
                context: ctx,
                canvas
            });
            //window.addEventListener('resize', handleResize);
            setCTXSize();
        }

        // Cleanup function: Remove the event listener when the component unmounts
        // return () => {
        //     window.removeEventListener('resize', handleResize);
        // };

    }, [canvasRef, divRef]);

    return (
        <div className='w-full h-full' ref={divRef}>
            <canvas 
                className='w-full h-full' 
                ref={canvasRef}
                onMouseEnter={(e) => SetPos(e)}
                onMouseMove={(e) => {SetPos(e); Draw(e)}}
                onMouseDown={(e) => SetPos(e)}
            >
            </canvas>
        </div>
    )
}

export default Artboard