
import { useState } from 'react';

function Project1234567890() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You have clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}