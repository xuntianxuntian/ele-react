import * as React from 'react';
import Button from 'react-bootstrap/Button'

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}


function Welcom(props:any) {
    console.log(props)
    const{enthusiasmLevel} = props
    console.log(enthusiasmLevel)
    const [count, setCount] = React.useState(0)
    return (
        <div className="App">
            <div className="App-header">
                <h2>Welcome to React ...{enthusiasmLevel}</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
                {name}...
            </p>
            <button onClick={props.onIncrement}>+</button>
            <button onClick={props.onDecrement}>-</button>
            <button onClick={() => setCount(count + 1)}>++++++++</button>
            {count}

            <Button>asdasdasd</Button>
        </div>
    )
}

export default Welcom;

