import { createContext, HTMLAttributes, ReactNode, useState } from "react";

type BrushType = {
    color: string,
    size: number
}

interface iBrushContext {
    state: BrushType,
    setState: (newState: BrushType) => void;
}

const brushState: BrushType = {
    color: "#000000",
    size: 10
};

export const BrushContext = createContext<iBrushContext>({
    state: brushState,
    setState: () => {}
});


export function AppProvider(props: HTMLAttributes<HTMLDivElement>): ReactNode {
    const [state, setState] = useState<BrushType>({
        ...brushState
    });

    return(
        <BrushContext.Provider value={{ state, setState }}>
            { props.children }
        </BrushContext.Provider>
    )
}

