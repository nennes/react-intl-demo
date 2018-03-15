import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {FormattedMessage, FormattedNumber} from 'react-intl';

// Just a demo thing, one doesn't simply change currencies
const currencies = { en: 'USD', ru: 'GBP', fr:'EUR', es:'EUR', el: 'EUR', hi: 'INR', pl: 'PLN'};

class Numbers extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name       : 'Donald',
        unreadCount: 0
      };
  }

  render() {
      const {name, unreadCount} = this.state;

      return (
        <div>
            <p>
              <FormattedMessage
                id="welcome"
                defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                  one {message}
                  other {messages}
                }`}
                values={{name: <i>{name}</i>, unreadCount}}
              />
              <span>  </span>
              <span>
                <button onClick={() => this.setState({unreadCount: this.state.unreadCount - 100})}><b>-100</b></button>
                <button onClick={() => this.setState({unreadCount: this.state.unreadCount - 10})}><b>-10</b></button>
                <button onClick={() => this.setState({unreadCount: this.state.unreadCount - 1})}><b>-1</b></button>
                <button onClick={() => this.setState({unreadCount: this.state.unreadCount + 1})}><b>+1</b></button>
                <button onClick={() => this.setState({unreadCount: this.state.unreadCount + 10})}><b>+10</b></button>
                <button onClick={() => this.setState({unreadCount: this.state.unreadCount + 100})}><b>+100</b></button>
              </span>
          </p>
          <p>
            <FormattedMessage
              id="welcome"
              defaultMessage={`Hey {name}, how about some cash?`}
              values={{name: <i>{name}</i>}}
            />
            <span>  </span>
            <span>
              <FormattedNumber
                value="4123.54"
                style="currency"
                currency={currencies[this.context.intl.locale]}/>
            </span>
            {console.log("%cEaster! %cEgg", "color: red; font-size:25px;", "color: green; font-size:20px;")}
          </p>
        </div>
      );
  }
}

Numbers.contextTypes = {
  intl: PropTypes.object
};

export default Numbers;
