import React, { useContext } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { StoreContext } from '../../context/Context'

const Home = () => {

const {category,setCategory} = useContext(StoreContext);
  return (
    <div>
        <Header/>
        <Menu category={category} setCategory={setCategory} />
        {/* <FoodDisplay category={category} /> */}
    </div>
  )
}

export default Home