import { useReactTable } from "@tanstack/react-table"
import { useMemo } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { LineChart, Line } from "recharts";

interface Token {
    index: number;
    name: string;
    price: number;
    change: string;
    tvl: string;
    volumn: string;
    data: any[];
}

interface TableItemProps {
    item?: Token
}

const d: Token = {
    index: 1,
    name: "Etherium",
    price: 1000,
    change: "35.75",
    tvl: "846.9",
    volumn: "444.5",
    data: [{a:11}, {a:12}, {a:13},{a:14},{a:15},{a:16}]
}

export const TokenTableItem = ({item = d}: TableItemProps) => {
    return (
        <tr>
            <td className=" text-right text-white py-2 px-2 text-lg">{item.index}</td>
            <td className=" text-left text-white py-2 px-2 text-lg">{item.name}</td>
            <td className=" text-right text-white py-2 px-2 text-lg">${item.price}</td>
            <td className=" text-right text-white py-2 px-2 text-lg">{item.change}%</td>
            <td className=" text-right text-white py-2 px-2 text-lg"><div className=" flex flex-row items-center justify-end"><FiArrowUpRight color="#ffffff"/>{item.tvl}</div></td>
            <td className=" text-right text-white py-2 px-2 text-lg">{item.volumn}</td>
            <td className=" text-right text-white py-2 px-2 flex justify-center items-center">
                <LineChart data={item.data} width={200} height={40} className=" m-0 -mr-16">
                    <Line type={"natural"} dot={false} stroke="#ffffff" dataKey={"a"}/>
                </LineChart>
            </td>
        </tr>
    )
}