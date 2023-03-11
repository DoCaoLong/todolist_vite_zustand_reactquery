import React from "react";
import { useCountStore } from "../../hooks";

export function Count() {
    const { increase, decrease, count } = useCountStore((state: any) => state);
    return (
        <div>
            <button onClick={decrease}>-</button>
            {count}
            <button onClick={increase}>+</button>
        </div>
    );
}
