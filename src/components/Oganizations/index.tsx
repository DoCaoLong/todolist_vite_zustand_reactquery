import React from "react";
import { useCountStore, useOrgsStore } from "../../hooks";
import { shallow } from "zustand/shallow";
export default function Organization() {
    const [orgs, load, orgs2] = useOrgsStore(
        (state: any) => [state.orgs, state.load, state.orgs2],
        shallow
    );
    return (
        <div>
            {load && <h2>Loading...</h2>}
            <ul>
                {orgs2?.map((item: any, index: number) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
