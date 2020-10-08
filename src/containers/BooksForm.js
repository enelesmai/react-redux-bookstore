import React from 'react';

const BooksForm = () =>{
  const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  return(
    <form>
      <label>
        Title
      </label>
        <input>
        </input>
    <label>
      Category
    </label>
      <select>
          {CATEGORIES.map((category)=> (
            <option key={parseInt(Math.random() * 1000, 10)} value={category}>{category}</option>
          ))}
      </select>
    <button type= 'submit'>Submit</button>
    </form>
  )
}

export default BooksForm;