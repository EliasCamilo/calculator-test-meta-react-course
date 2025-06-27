import { useState } from "react";
import Display from "./display";
import Keyboard from "./keyboard/keyboard";

export default function Calculator() {
    let [values, setValues] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])

    return (
        <>
            <div className="before:w-full before:h-full before:bg-black/10 before:absolute relative before:translate-x-1 before:translate-y-5 before:rounded-[1.7rem]">
                <div className="bg-[#24231f] rounded-[1.7rem] pb-4 z-10 relative">
                    <Display values={values} />
                    <Keyboard setValues={setValues} />
                </div>
            </div>
        </>
    )
}