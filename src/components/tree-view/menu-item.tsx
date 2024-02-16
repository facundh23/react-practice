import React, { useState } from 'react'
import MenuList from './menu-list'


const MenuItem = ({item}) => {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    const handleToggleChildren = (currentLabel) => {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [currentLabel] :!displayCurrentChildren[currentLabel],
        })
    }

    console.log(displayCurrentChildren)
    
  return (
    <li className='menu-list-item'>
        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
        <p>{item.label}</p>
        {
            item && item.children && item.children.length > 0 ? <span style={{cursor:'pointer'}} onClick={() => handleToggleChildren(item.label)}>{displayCurrentChildren[item.label] ? '-' : '+'}</span> : null
        }
        </div>
        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? <MenuList list={item.children} /> : null
        }
    </li>
  )
}

export default MenuItem
