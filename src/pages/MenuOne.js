import React, { useState } from 'react'
import DataTable from "react-data-table-component"
import { AllOrders } from '../utils/allorders';
import {
  Edit2,
  Trash2
} from "react-feather";
import Moment from 'moment';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

function MenuOne() {

  const navigate = useNavigate();
  const [data, setData] = useState(AllOrders.response);
  const [searchText, setSearchText] = useState("");
  const objectLength = obj => Object.entries(obj).length;

  const columns = [
    {
      name: 'Order Id',
      selector: 'id',
      sortable: false,
      minWidth: '100px'
    },
    {
      name: 'Order Description',
      selector: 'orderDescription',
      sortable: false,
      minWidth: '100px'
    },
    {
      name: 'Count Of Item Types include in order',
      allowOverflow: true,
      cell: row => {
        return (
          <div className='space-x-4 flex'>
            {Object.keys(row.countOfItemTypes).map((key, index) => {
              return (
                <div key={index} className={clsx(row.countOfItemTypes[key] === 0 ? 'text-red-600' : 'text-green-600', 'border inline-flex whitespace-nowrap border-black-200')}>
                  {key}: {row.countOfItemTypes[key]}
                </div>
              )
            })}
          </div>
        )
      }
    },
    {
      name: '% of ElectronicsItems',
      allowOverflow: true,
      cell: row => {
        const totalItems = objectLength(row.countOfItemTypes);
        let sum = 0; 
        for (const key in row.countOfItemTypes) {
          if(key === "Electronics"){
              sum += row.countOfItemTypes[key]
          }
        }
        return (
          <div className='space-x-4 flex'>
            {sum / totalItems * 100} %
            {/* (count of electronics itmes /total count f items * 100) */}
          </div>
        )
      }
    },
    {
      name: 'CreatedBy',
      selector: 'createdBy',
      sortable: false,
      minWidth: '100px'
    },
    {
      name: 'CreatedAt',
      sortable: false,
      minWidth: '100px',
      allowOverflow: true,
      cell: row => {
        return (
          <>
            <div>
              {Moment(row.createdAt).format('YYYY-MM-DD')}
            </div>
          </>
        )
      }
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: row => {
        return (
          <div className='space-x-4 flex'>
            <Edit2 size={20}
              className="mr-4 cursor-pointer"
              onClick={() => {
              }}
            />
            <Trash2 size={20}
              className="cursor-pointer"
              onClick={() => {
              }}
            />
          </div>
        )
      }
    }
  ];

  const onSearchChange = (value) => {
    console.log(value, "searching...")
    if (value === "") {
      setData(AllOrders.response)
    } else {
      const filteredData = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(value.toLowerCase())
      })
      setData(filteredData)
    }
  }

  return (
    <div className='px-4 sm:px-6 lg:px-8 xl:px-20'>
      <div className='flex mb-4 justify-between items-center'>
        <header>
          <div className='text-3xl font-bold'>Order Management System</div>
        </header>
        <div>
          <input
            className='border border-black'
            type='text'
            value={searchText}
            placeholder=' search by order description '
            onChange={(e) => (
              setSearchText(e.target.value),
              onSearchChange(e.target.value)
            )}
          />
        </div>
      </div>
      <div>
        <DataTable
          noHeader
          columns={columns}
          paginationPerPage={10}
          className='react-dataTable'
          defaultSortField="id"
          defaultSortAsc={false}
          data={data.length ? data : []}
        />
      </div>
      <div className='mt-10'>
        <button class="px-12 py-2.5 font-bold bg-blue-500 text-white" onClick={(e) => navigate('/create')}>Create New Order</button>
      </div>
    </div>
  )
}

export default MenuOne