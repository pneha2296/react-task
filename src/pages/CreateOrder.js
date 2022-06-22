import React from 'react'
import { CreateOrders } from '../utils/createOrder'

export default function CreateOrder() {
    return (
        <div>
            <div className='px-4 sm:px-6 lg:px-8 xl:px-20'>
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
                                <div className='mb-6 px-6 w-full'>
                                    {Object.keys(data.itemSpecifications ? data.itemSpecifications : {}).map((iData, index) => (
                                        <>
                                            <div className='items-center grid grid-cols-3' key={index}>
                                                {console.log(data.itemSpecifications[iData],index)}
                                                {iData?.memory !== "" &&
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
                                            {iData?.colorChoice == true &&
                                                <div>
                                                    <div>
                                                        Please Choose Colours
                                                    </div>
                                                </div>
                                            }
                                            {iData?.sizeInKG &&
                                                <div>
                                                    <div>
                                                        Select the pack size in KG
                                                    </div>
                                                </div>
                                            }
                                        </>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
