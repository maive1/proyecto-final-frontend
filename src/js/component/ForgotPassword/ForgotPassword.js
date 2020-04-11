import React from 'react';
import { Link } from 'react-router-dom';
import { GenerateInput } from "../../component/GenericComponent/InputGenerator"
import "../../../styles/Login/Login.css"

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
        <Link className="link-style-back" to="/"><div className="icon-back-letter">volver</div><i className="material-icons icon-back">keyboard_arrow_left</i></Link>
        <div className="login">
          <h2 className="title-forgot color-text">Recuperar Password</h2>
          <div className="form-container format">
            <GenerateInput id="login-email" placeholder="Email" type="email" />
            <Link className="link" to="/" >
              <button id="signin" className="iniciate-but-user button-letters btn waves-effect waves-light" type="submit" name="action">Solicitar</button>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
export default ForgotPassword;