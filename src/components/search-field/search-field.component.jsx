import React from 'react'
import './search-field.style.css'

export const SearchField = ({ placeholder, handleChange }) => {
    return(
        <input 
            type='search' 
            placeholder={ placeholder }
            className='searchField'
            onChange={ handleChange }    
        />
    )
    
}