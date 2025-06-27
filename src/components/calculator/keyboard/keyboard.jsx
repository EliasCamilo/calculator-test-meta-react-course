import { useEffect, useState } from "react";
import Button from "./button";

import { useDebounce } from "use-debounce";

export default function Keyboard(props) {
    const [totalValue, setTotalValue] = useState(0);
    const [debounceValue] = useDebounce(totalValue, 500);

    function defineTotalValue(e) {
        if (debounceValue != null) {
            if (totalValue !== undefined && totalValue.toString().length < 9) {
                setTotalValue(totalValue !== 0 ? parseFloat(totalValue.toString() + e.key.toString()) : parseFloat(e.key.toString()));
            }
        }
    }

    useEffect(() => {
        let numbers = totalValue
            .toString()
            .split('')
            .map(Number);

        while (numbers.length < 9) {
            numbers.unshift(0);
        }

        props.setValues(numbers);

        window.addEventListener("keydown", defineTotalValue)
    }, [totalValue]);

    return (
        <>
            <div className="bg-[#e7e4b1] p-5 border-4 border-t-8 border-[#24231f] flex justify-center items-start flex-col gap-1 rounded-b-3xl w-full">
                <div className="grid grid-cols-4 w-full gap-x-2 gap-y-3 relative">
                    <Button value="C" color="#f05c4a" />
                    <Button value="%" color="#3e3d37" />
                    <Button value="÷" color="#e09543" />
                    <Button value="×" color="#e09543" />
                    <Button setTotalValue={setTotalValue} totalValue={totalValue} value="7" color="#646155" />
                    <Button setTotalValue={setTotalValue} totalValue={totalValue} value="8" color="#646155" />
                    <Button setTotalValue={setTotalValue} totalValue={totalValue} value="9" color="#646155" />
                    <Button value="-" color="#e09543" />
                    <Button setTotalValue={setTotalValue} totalValue={totalValue} value="4" color="#646155" />
                    <Button setTotalValue={setTotalValue} totalValue={totalValue} value="5" color="#646155" />
                    <Button setTotalValue={setTotalValue} totalValue={totalValue} value="6" color="#646155" />
                    <Button value="+" color="#e09543" />
                    <Button setTotalValue={setTotalValue} totalValue={totalValue} value="1" color="#646155" />
                    <Button setTotalValue={setTotalValue} totalValue={totalValue} value="2" color="#646155" />
                    <Button setTotalValue={setTotalValue} totalValue={totalValue} value="3" color="#646155" />
                    <Button value="=" color="#30c9c2" rowSpan="2" />
                    <Button setTotalValue={setTotalValue} totalValue={totalValue} value="0" color="#646155" colSpan="2" />
                    <Button value="." color="#646155" />
                </div>
            </div>
        </>
    )
}