import { HTMLAttributes, ReactNode, useState } from "react";
import { AppContext, initialState, tApp } from "../contexts/AppContext";



export const AppProvider = (props: HTMLAttributes<HTMLDivElement>): ReactNode => {
    const [state, setState] = useState<tApp>({...initialState});

    return(
        <AppContext.Provider value={{appState: state, setAppState: setState}}>
            { props.children }
        </AppContext.Provider> 
    )
}