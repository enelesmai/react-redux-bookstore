import React from 'react';

const BooksForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form id="Form">
      <label htmlFor="Form">
        Title
        <input id="Title" type="text" />
      </label>
      <label htmlFor="Form">
        Category
        <select id="Category">
          {CATEGORIES.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
