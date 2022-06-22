import React from 'react'

const Sidebar = () => {
  return (
    <aside className='w-60 px-8'>
        <div className='px-10 font-semibold uppercase'>ItemType</div>
        <div>
          <label>
            <input type='checkbox' className='mr-3' checked disabled/>
            Eelctronics
          </label>
          <br/>
          <label>
            <input type='checkbox' className='mr-3' checked disabled/>
            Groceries
          </label>
        </div>
    </aside>
  )
}

export default Sidebar