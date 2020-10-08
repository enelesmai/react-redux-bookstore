import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  
class BooksForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createBook({id: parseInt(Math.random() * 1000, 10), title: this.state.title, category: this.state.category});
    this.setState({
      title: '',
      category: ''
    });
  }

  render() {
    return (
      <form id="Form" onSubmit={this.handleSubmit}>
        <label htmlFor="Form">
          Title
          <input name="title" value={this.state.title} id="title" type="text" onChange={this.handleChange} />
        </label>
        <label htmlFor="Form">
          Category
          <select name="category" value={this.state.category} id="category" onChange={this.handleChange}>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const matchDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null,matchDispatchToProps)(BooksForm);
