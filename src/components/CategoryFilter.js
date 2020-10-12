import React from 'react';

const categoryFilter = () => {
  const CATEGORIES = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <select name="category" id="category">
      {CATEGORIES.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  )
};

export default categoryFilter;