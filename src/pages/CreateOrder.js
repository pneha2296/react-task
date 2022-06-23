import React, { useState } from 'react'
import { CreateOrders } from '../utils/createOrder'
import {
    Plus,
    Minus
} from "react-feather";

export default function CreateOrder() {

    const [kgValue, setKgValue] = useState(1)

    const incrementItem = () => {
        setKgValue(kgValue + 1)
    }
    const decreaseItem = () => {
        if (kgValue !== 1) {
            setKgValue(kgValue - 1)
        }
    }

    return (
        <div>
            <div className='px-4 pb-20 sm:px-6 lg:px-8 xl:px-20'>
                <div className='flex mb-4 justify-between items-center'>
                    <header>
                        <div className='text-3xl font-bold'>Add Items To Order</div>
                    </header>
                </div>
                <div>
                    <div className='mb-10'>
                        <input
                            type='textarea'
                            className='border border-black-400 w-full py-2 px-1'
                            placeholder='Order Description'
                        />
                    </div>

                    <div className='space-y-8'>
                        {CreateOrders.allItems.map((data, index) => (
                            <div className='bg-slate-200 border border-black' key={index}>
                                <div className='border-b mb-6 flex items-center px-6 justify-between border-black'>
                                    <div>
                                        <div className='text-blue-600'>{data.itemName}</div>
                                        <div>{data.temDescription}</div>
                                    </div>
                                    <div className='border w-24 h-8 flex border-black'>
                                        <button className='bg-blue-600 inline-flex items-center justify-center w-full text-white'>Y</button>
                                        <button className='bg-white w-full inline-flex items-center justify-center text-black'>N</button>
                                    </div>
                                </div>
                                <div className='mb-6 px-6 w-full space-y-1'>
                                    {Object.keys(data.itemSpecifications ? data.itemSpecifications : {}).map((iData, index) => (
                                        <>
                                            <div className='items-center grid grid-cols-3' key={index}>
                                                {/* {console.log(data.itemSpecifications[iData], index)}
                                                {console.log(iData, "iData")} */}
                                                {iData === "memory" &&
                                                    <>
                                                        <div>
                                                            Please Select Memory
                                                        </div>
                                                        <div className='flex col-span-2 items-end font-medium space-x-3'>
                                                            <div>128 GB</div>
                                                            <div>256 GB</div>
                                                            <div className='text-xl text-blue-600'>512 GB</div>
                                                            <div>1024 GB</div>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                            <div className='items-center grid grid-cols-3' key={index}>
                                                {iData === "colorChoice" &&
                                                    <>
                                                        <div>
                                                            Do You want to choose color?
                                                        </div>
                                                        <div className='border w-24 h-8 flex border-black'>
                                                            <button className='bg-blue-600 inline-flex items-center justify-center w-full text-white'>Y</button>
                                                            <button className='bg-white w-full inline-flex items-center justify-center text-black'>N</button>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                            <div className='items-center grid grid-cols-4' key={index}>
                                                {iData === "color" &&
                                                    <>
                                                        <div>
                                                            Please Choose Colours
                                                        </div>
                                                        {data.itemSpecifications[iData].map((color, i) => (
                                                            <div className='border w-24 h-8 flex border-black' key={i}>
                                                                <button className='bg-blue-600 inline-flex items-center justify-center w-full text-white'>{color}</button>
                                                            </div>

                                                        ))}
                                                    </>
                                                }
                                            </div>
                                            <div className='items-center grid grid-cols-3' key={index}>
                                                {iData === "sizeInKG" &&
                                                    <>
                                                        <div>
                                                            Select the pack size in KG
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <Minus size={16}
                                                                className="mr-2 cursor-pointer"
                                                                onClick={() => {
                                                                    decreaseItem()
                                                                }}
                                                            />
                                                            <div className='border w-10 h-8 flex border-black'>
                                                                <button className='bg-white-600 inline-flex items-center justify-center w-full'>{kgValue}</button>
                                                            </div>
                                                            <Plus size={16}
                                                                className="ml-2 cursor-pointer"
                                                                onClick={() => {
                                                                    incrementItem()
                                                                }}
                                                            />
                                                            <label className="ml-6 text-blue-600">
                                                                KG
                                                            </label>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='items-center mt-10 grid grid-cols-2 space-x-4' >

                        <button className='border bg-yellow-200 w-full inline-flex py-2 items-center justify-center text-black border-black' >Cancel</button>

                        <button className='border bg-green-200 w-full inline-flex py-2 items-center justify-center text-black border-black' >Book Order</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
