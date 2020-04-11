import React from 'react';
import "../../../styles/Registers/ProfessionalRegister.css"

class ScrollTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }

    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button title='Back to top' className='scroll'
        onClick={() => { this.scrollToTop(); }}>
        <i className="material-icons arrow-up">arrow_upward</i>
      </button>
    )
  }
}

export default ScrollTop;