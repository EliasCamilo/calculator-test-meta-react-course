export default function Button(props) {

    function defineTotalValue() {
        if (props.totalValue !== undefined && props.totalValue.toString().length < 9) {
            props.setTotalValue(props.totalValue !== 0 ? parseFloat(props.totalValue.toString() + props.value.toString()) : parseFloat(props.value.toString()));
        }
    }

    return (
        <>
            <div className="flex justify-center items-center bg-[#24231f] rounded-t-2xl rounded-b-xl pt-0.5 pb-3 px-1 hover:pb-2 hover:pt-1 before:w-full before:h-full before:bg-black/10 before:absolute relative before:translate-x-1 before:translate-y-3 before:rounded-2xl hover:before:translate-y-2" style={{ gridColumn: props.colSpan && `span ${props.colSpan} / span ${props.colSpan}`, gridRow: props.rowSpan && `span ${props.rowSpan} / span ${props.rowSpan}` }} onClick={defineTotalValue}>
                <button className="w-full h-full text-2xl text-white py-3 rounded-xl" style={{ backgroundColor: props.color }}>{props.value}</button>
            </div>
        </>
    )
}