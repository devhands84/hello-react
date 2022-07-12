import PropTypes from 'prop-types';
import { Component } from 'react';

class MyComponent extends Component {
  render() {
    const { name, num, children } = this.props;
    return (
      <div>
        name : {name}, children : {children}, number :{num}
      </div>
    );
  }
}
// const MyComponent = ({ name, num, children }) => {
//   return (
//     <div>
//       my comp is {name}
//       <br />
//       children is {children}
//       <br />
//       Number : {num}
//     </div>
//   );
// };
MyComponent.defaultProps = {
  name: 'basic',
};
MyComponent.propTypes = {
  name: PropTypes.string,
  num: PropTypes.number.isRequired,
};
export default MyComponent;
