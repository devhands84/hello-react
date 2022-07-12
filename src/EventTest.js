import { Component } from 'react';

class EventTest extends Component {
  state = { message: '' };

  render() {
    return (
      <div>
        <h1> Event Test</h1>
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
        />
        <button
          onClick={() => {
            console.log(this.state.message);
            this.setState({ message: '' });
          }}
        >
          Print
        </button>
      </div>
    );
  }
}

export default EventTest;
