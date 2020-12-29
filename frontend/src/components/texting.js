import React, { useState } from 'react';
import { Button } from '@material-ui/core';

export default function Test() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <Button onClick={() => setCount(count + 1)}>
                Click to add
            </Button>
            <Button onClick={() => setCount(count - 1)}>
                Click to remove
            </Button>
        </div>
    );
}