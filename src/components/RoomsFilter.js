import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const getUniqueValues = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
    let types = getUniqueValues(rooms, "type")
    let people = getUniqueValues(rooms, "capacity")
    types = ["all", ...types]
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    })
    people = people.map((item, index) => {
        return (
            <option key={index} value={item}>{item}</option>
        )
    })

    return (
        <section className='filter-container'>
            <Title title="search rooms" />
            <form className='filter-form'>
                {/*select section*/}
                <div className='form-group'>
                    <label htmlFor='type'>Room Type</label>
                    <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end select section*/}
                {/*guest section*/}
                <div className='form-group'>
                    <label htmlFor='capacity'>guests</label>
                    <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/*end guest section*/}
                {/*room price section*/}
                <div className='form-group'>
                    <label htmlFor='price'>room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/*end room price section*/}
                {/*size section*/}
                <div className='form-group'>
                    <label htmlFor='size'>room size</label>
                    <div className='size-inputs'>
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="msize" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/*end size section*/}
                {/*extras section*/}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type="checkbox" name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange}/>
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input type="checkbox" name='pets' id='pets' checked={pets} onChange={handleChange}/>
                        <label htmlFor='pets'>pets</label>
                    </div>
                </div>
                {/*end extras section*/}
            </form>
        </section>
    )
}

export default RoomsFilter;