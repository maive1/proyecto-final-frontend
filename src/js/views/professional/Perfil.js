import React from "react";
import '../../../styles/ProfilePro/Profilepro.css';
import Profilepro from "../../component/Perfil/Profilepro";
import { Context } from '../../store/AppContext';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["vero", "jose", "juan"]
    };
  }
  static contextType = Context;

  componentDidMount() {
    const { store, actions } = this.context;
    actions.isUserAuthenticated();
    if (store.isAuthenticated !== "true") this.props.history.push('/');

  }

  componentDidUpdate() {
    const { store, actions } = this.context;
    actions.isUserAuthenticated();
    if (store.isAuthenticated !== "true") this.props.history.push('/');

  }

  render() {
    return (
      <div>
        <Profilepro />
      </div>
    );
  }
}
export default Perfil;