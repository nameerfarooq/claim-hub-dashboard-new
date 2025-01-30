import { cloneElement } from 'react'
import type { CommonProps } from '@/@types/common'
import authscreenlogo from '@/assets/Images/authscreenlogo.svg'
type SideProps = CommonProps

const Side = ({ children, ...rest }: SideProps) => {
    return (
        <div className="flex h-full p-6 bg-white dark:bg-gray-800">
            <div className="bg-custom-gradient flex-col justify-center gap-[30px] items-center py-6 px-10 lg:flex  flex-1  hidden rounded-3xl  relative xl:max-w-[520px] 2xl:max-w-[720px]">
                <img src={authscreenlogo} className="" />
                
                <p className='font-bold text-white text-[26px] 2xl:text-[36px] drop-shadow-lg 2xl:px-8 px-4 leading-[30px] 2xl:leading-[50px] text-center '>Restoration job documentation all in one place</p>
                <p className='font-bold text-white text-[14px] leading-[21px] text-center '>(Instead off all over the place)</p>
            </div>
            <div className=" flex flex-col justify-center items-center flex-1">
                <div className="w-full xl:max-w-[450px] px-8 max-w-[380px]">
                    {children
                        ? cloneElement(children as React.ReactElement, {
                              ...rest,
                          })
                        : null}
                </div>
            </div>
        </div>
    )
}

export default Side
