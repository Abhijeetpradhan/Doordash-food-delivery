import React from 'react'
import './Menu.css';
import { menu_list } from '../../assets/assets';

const Menu = (props) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Cravings don’t wait—why should you? Get your favorite food delivered fast and fresh!</p>
        <div className='explore-menu-list'>
            {
                menu_list && menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>props.setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} key={index} className='explore-menu-list-items'>
                            <img className={props.category === item.menu_name ? "active" : ""} src={item.menu_image} alt='img' />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>

        <hr />
    </div>
  )
}

export default Menu