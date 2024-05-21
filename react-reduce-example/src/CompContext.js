import { createContext, useContext } from "react"
const themeDefault = { border: '10px solid green' }

//1단계 : 생성
const themeContext = createContext(themeDefault)


export default function App(){
    return (
        <div className="root">
            <h1>Hello</h1>
            <themeContext.Provider value={{border: '10px solid blue'}}>
                <Sub1/>
            </themeContext.Provider>
        </div>
    )
}

function Sub1(){
    return (
        <div>
            <h1>sub1</h1>
            <Sub2/>
        </div>
    )
}

function Sub2(){
    return (
        <div>
            <h1>sub2</h1>
            <Sub3></Sub3>
        </div>
    )
}
function Sub3(){
    const theme = useContext(themeContext);
    return (
        <div style={theme}>
            <h1>sub3</h1>
        </div>
    )
}
