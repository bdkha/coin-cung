import { useState } from "react"
import { Dropdown } from "../component/common/dropdown.component"
import { TokenTableItem } from "../component/tokens/tokens-table.component"

export const Token = () => {
    const [timeValue, setTime] = useState(1)
    const timeOption = [
        { value: 1, label: '1D' },
        { value: 2, label: '1W' },
        { value: 3, label: '1M' },
        { value: 4, label: '1Y' },
    ]
    return (
        <div className="w-full h-full items-center flex bg-slate-900 py-10 px-36 flex-col pt-40 ">
            <div className=" text-white text-4xl w-full mb-2">Top tokens</div>
            <div className=' flex flex-row justify-start w-full mt-3'>
                <div className=' mr-4'>
                    <Dropdown value={timeValue} options={timeOption} onSelectValue={value => setTime(+value)} />
                </div>
            </div>
            <div className="rounded-xl border-2 border-slate-800 w-full mt-4">
            <table className=" w-full p-4">
                <thead className=" text-slate-400 py-2 border-b-2 border-slate-800 px-2">
                    <tr >
                        <th className=" text-lg py-2 text-right px-2">#</th>
                        <th className=" text-lg py-2 text-left px-2">Token name</th>
                        <th className=" text-lg py-2 text-right px-2">Price</th>
                        <th className=" text-lg py-2 text-right px-2">Change</th>
                        <th className=" text-lg py-2 text-right px-2">TVL</th>
                        <th className=" text-lg py-2 text-right px-2">Volume</th>
                        <th className=" text-lg py-2 text-right px-2"></th>
                    </tr>
                </thead>
                <tbody>
                    <TokenTableItem />
                </tbody>
            </table>
            </div>
        </div>
    )
}