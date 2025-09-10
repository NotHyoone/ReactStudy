import { useState } from 'react';
import Greeting from './Greeting';

function Day2ex() {
    // 이름 상태
    const [name, setName] = useState('');
    // 카운터 상태
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Day2 Example</h2>
            <input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {name && <Greeting name={name} />}
            <h3>Counter: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <div>
                <h4>Hello{name}!</h4>
                <button onClick={ () => setName('') }>Clear Name</button>
            </div>
        </div>
    );
} 
export default Day2ex;