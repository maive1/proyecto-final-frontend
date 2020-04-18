import React from 'react';
import MessageHome from '../../component/Home/MessageHome';
import { Context } from '../../store/AppContext';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: {},
            actions: {},
        }
    }

    static contextType = Context;

    componentDidMount() {
        const { store, actions } = this.context;
        actions.isUserAuthenticated();
    
        if (store.isAuthenticated ===  "true" && store.currentUser && store.currentUser.user_type === "professional"){
          this.props.history.push('/perfil');
        } else if (store.isAuthenticated ===  "true" && store.currentUser && store.currentUser.user_type === "patient"){
            this.props.history.push('/homemenu');
        };
      }
    
    

    render() {

        return (
        <>
            <div className="container">
                <MessageHome />
            </div>
        </>
        )
    }
}

export default Home;
