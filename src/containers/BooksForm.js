import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { createBook } = this.props;
    const { title, category } = this.state;
    createBook({
      id: parseInt(Math.random() * 1000, 10),
      title,
      category,
    });
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form className="book-form" id="Form" onSubmit={this.handleSubmit}>
        <label htmlFor="Form">
          <input className="bookform-input" name="title" value={title} id="title" type="text" onChange={this.handleChange} placeholder="Book title" />
        </label>
        <label htmlFor="Form">
          <select className="bookform-select" name="category" value={category} id="category" onChange={this.handleChange}>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
        <button className="button-book" type="submit">ADD BOOK</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
