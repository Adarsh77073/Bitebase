import React, { useEffect, useState } from 'react'
import './FoodDisplay.css'
import axios from 'axios'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
  const [foodList, setFoodList] = useState([])

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/food/list')
        console.log("Fetched food list:", response.data.data);
        setFoodList(response.data.data)
      } catch (err) {
        console.error("Error fetching food list", err)
      }
    }

    fetchFood()
  }, [])

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {foodList
          .filter(item => category === "All" || item.category === category)
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={`http://localhost:5001/${item.image}`}
            />
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay
