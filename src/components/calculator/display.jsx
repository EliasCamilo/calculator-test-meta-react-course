export default function Display(props) {
    return (
        <>
            <div className="bg-[#c7c48f] p-5 pt-2 border-4 border-b-8 border-[#24231f] flex justify-center items-start flex-col gap-1 rounded-t-3xl">
                <div className="flex justify-between items-end w-full">
                    <h1 className="text-xl font-bold uppercase tracking-wide">Simple<strong className="text-[#c9493a]">Calculator</strong></h1>
                    <span className="font-semibold opacity-60 text-sm">By Elias Camilo</span>
                </div>
                <div className="w-full display text-[5rem] leading-[4rem] bg-[#78896b] border-4 border-[#24231f] p-5 rounded-2xl after:w-full after:h-full after:bg-[#a7b89a] after:absolute after:top-0 after:left-0 relative after:translate-x-1 after:translate-y-1 after:rounded-2xl overflow-hidden">
                    <div className="w-full h-full grid grid-cols-9 z-10 relative min-h-16">
                        {props.values.map((value, i) => (
                            <div className="flex justify-center items-center">
                                <span className="w-11 flex justify-end items-center before:content-['8'] before:absolute relative before:opacity-10">
                                    {value !== 0 && value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}