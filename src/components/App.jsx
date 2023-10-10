import { fetchResponce } from '../servises/githunState';
import React, { Component } from 'react';

class App extends Component {
  state = {
    users: [],
    searchQuery: '',
  };
  getInfo = () => {
    fetchResponce(this.state.searchQuery).then(elem => {
      console.log(elem);
      const users = elem.items;
      this.setState({
        users,
      });
    });
  };
  render() {
    return (
      <div style={{}}>
        <input
          type="text"
          onChange={event => {
            this.setState({ searchQuery: event.target.value });
          }}
        />
        <button
          onClick={() => {
            this.getInfo();
          }}
        >
          Search
        </button>
        <br />
        <hr />
        {this.state.users.map(el => {
          return (
            <div style={{ margin: 10 }} key={el.id}>
              <img src={el.avatar_url} alt="" width={100} />
              <br />
              <p>{el.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
