import React  from 'react';
import './search_box.styles.css';

const SearchBox = ({placeHolder,  handleChange }) => {

   return (
     <div>
     <input type="search"  className="search"
       placeholder = { placeHolder }
       onChange={ handleChange } />
     </div>
   )

}

export default SearchBox;
