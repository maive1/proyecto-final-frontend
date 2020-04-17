import React from "react";
import '../../../styles/ProfilePro/Profilepro.css';
import { Context } from '../../store/AppContext';
import Profilepro from "../../component/Perfil/ProfilePro";
import ModalFiles from "../../component/Perfil/ModalFiles";


class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["vero", "jose", "juan"]
    };
  }
  static contextType = Context;

  //componentDidMount() {
  //  const { store, actions } = this.context;
   //  actions.isUserAuthenticated();
   //  if (store.isAuthenticated !== "true") this.props.history.push('/');
 //
  // }

  // componentDidUpdate() {
  //   const { store, actions } = this.context;
  //   actions.isUserAuthenticated();
   //  if (store.isAuthenticated !== "true") this.props.history.push('/');

   //}

  render() {
    return (
      <div>
        <Profilepro />
        
        <ModalFiles />
      </div>
    );
  }
}
export default Perfil;