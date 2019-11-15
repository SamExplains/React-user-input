import React from "react";

class Searchbar extends React.Component{

  state = { term: ''};

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return <div className='ui segment'>
            <form className='ui form' onSubmit={this.onFormSubmit}>
              <div className='field'>
                <label>Image Search</label>
                <input value={this.state.term} onChange={(e) => this.setState({ term: e.target.value.toLocaleUpperCase()}) } type="text"/>
              </div>
            </form>
          </div>
  }

}

export default Searchbar;