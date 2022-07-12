import { Component } from 'react';
//import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

class App extends Component {
  render() {
    return <IterationSample />;
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
//         <button
//           onClick={() => {
//             this.ScrollBox.scrollToBottom();
//           }}
//         >
//           To bottom
//         </button>
//       </div>
//     );
//   }
// }

export default App;
