import React from 'react';
import Acceptance from './Acceptance';
import Rejection from './Rejection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: false
    }

    this.handleLetterChanger = this.handleLetterChanger.bind(this)

  }

  handleLetterChanger(event) {
    this.setState({ accepted: !this.state.accepted })
  };

  render() {
    let letter = null;

    if (this.state.accepted) {
      letter = <Rejection />
    } else {
      letter = <Acceptance />
    }

    return (
      <div>
        <div className="letter-body">
          <div className="small-11 small-centered text-center columns">
            <label>
              <input type="checkbox" checked={this.state.accepted} onChange={this.handleLetterChanger} />
            </label>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" id="hogwarts-logo"/>
          <h1>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h1>
          <br />
          <h3 id="headmaster-name">Headmaster: Albus Dumbledore</h3>
          <p id="merlin-order">
            (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of Wizards)
          </p>
          <br />
          <p>Dear Addressee,</p>
          <div>
            {letter}
          </div>
          <p>Yours sincerely,</p>
          <br />
          <h3>Minerva McGonagall</h3>
          <h3>Deputy Headmistress</h3>
        </div>
      </div>
    );
  };
};

export default App;
