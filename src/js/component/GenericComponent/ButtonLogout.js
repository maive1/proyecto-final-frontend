import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/AppContext';

class ButtonLogout extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          store: {},
          actions: {},
      }
  }
  static contextType = Context;

  handleSubmitLogout = (e) => {
    e.preventDefault();

    const { store, actions } = this.context;
    this.setState({store, actions});

    actions.logout();
};

  render() {

    return (
        <>
        <div className="col s">
          <Link className="icon-exit color-icons waves-effect waves-circle btn-small lighten-2" onClick={e => this.handleSubmitLogout(e)} to="/">
            <i className="material-icons">
              {this.props.iconname}</i>
          </Link>
        </div>
      </>
        )
      }
  }
  
  export default ButtonLogout;
