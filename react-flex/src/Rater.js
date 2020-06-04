import React, { useState } from 'react'
import {FaStarHalf} from "react-icons/all";
import './Rater.css'


const Rater = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [value] = useState(100)
    const [iconValue, setIconValue] = useState(5)


    return (
        <div>
            <select onChange={(e) =>
            {setIconValue(Number(e.target.value))}}>
                { Array.from(new Array(value),(value, index) =>
                    index + 1).map(value => <option
                    key={value} value={value}>{value}</option>) }
            </select>
            <h1> Select Amount of Icons </h1>


            {[... Array(iconValue)].map((icon, i) => {
                const value = i + 1

                return (
                    <label>
                        <input type='radio'
                               name='rating'
                               value={value}
                               onClick={() => setRating(value)}


                        />
                        <FaStarHalf
                        className='star'
                        color={value <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                        size={100}
                        onMouseEnter={() => setHover(value)}
                        onMouseLeave={() => setHover(null)}
                    />
                    </label>
                )
            })}
            {[... Array(iconValue)].map((icon, i) => {
                const value = i + 1

                return (
                    <label>
                        <input type='radio'
                               name='rating'
                               value={value}
                               onClick={() => setRating(value)}


                        />
                        <FaStarHalf
                            className='star-left'
                            color={value <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            size={100}
                            onMouseEnter={() => setHover(value)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </div>
    )

}

export default Rater
