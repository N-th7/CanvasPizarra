import React, {useState} from "react";
export const ExampleContext = React.createContext({})

export default function ExampleContextProvider({}){
    const [color, setColor] = useState("#000000");
    console.log(color);
    return(
        <ExampleContext.Provider Value = {{color, setColor}}>
        
        </ExampleContext.Provider >
    );
}