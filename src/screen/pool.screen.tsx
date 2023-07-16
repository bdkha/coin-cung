import { IoFileTrayOutline } from 'react-icons/io5'
import { BehaviorSubject } from 'rxjs';

interface Props {
    sidebarSubject: BehaviorSubject<boolean>
}

export const PoolScreen = ({ sidebarSubject }: Props) => {

    const onOpenWallet = () => {
        sidebarSubject.next(true)
    }

    return (
        <div className="w-full h-full items-center justify-center flex bg-slate-900">
            <div className="flex w-[32rem] flex-col">
                <div className="flex text-white font-medium text-3xl py-4">Pools</div>
                <div className='flex justify-center items-center p-5 flex-col rounded-2xl border-2 border-solid border-orange-600 bg-slate-800'>
                    <IoFileTrayOutline color='white' size={'5rem'} />
                    <div className='flex px-16   py-3 bg-orange-600 rounded-full my-4 font-normal text-white text-xl cursor-pointer' onClick={onOpenWallet}>
                        Connect a wallet
                    </div>
                </div>
            </div>
        </div >
    )
}