import { createContext, Dispatch, SetStateAction } from "react";

export type tApp = {
    brushState: {
        color: string,
        size: number,
        type: 'eraser' | 'pen'
    },
    isClearable: boolean,
    context: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement | null
}

export interface iApp {
    appState: tApp,
    setAppState: Dispatch<SetStateAction<tApp>>;
}

export const initialState: tApp = {
    brushState: {
        color: "#000000",
        size: 20,
        type: 'pen'
    },
    isClearable: false,
    context: null,
    canvas: null
}

export const AppContext = createContext<iApp>({
    appState: { ...initialState },
    setAppState: () => {}
});