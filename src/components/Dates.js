import React, {Component} from 'react'
import {
  FormattedMessage,
  FormattedNumber,
  FormattedRelative,
  FormattedDate
} from 'react-intl'

class Dates extends Component {
  constructor(props) {
      super(props);

      const day = 1000 * 3600 * 24

      this.state = {
        buildLastGreen: Date.parse('23 Feb 2018 11:36:36'),
        nextSunshine: Date.now() + day * 0,
        user: {
            name         : 'Teresa',
            unreadCount  : 4,
            lastLoginTime: Date.now() - 1000 * 5
        },
      };
  }

  render() {
    return (
      <div>
        <h2>Hey ma, nesting works too!</h2>
        <p>
          <FormattedMessage 
            id="greeting.welcome_message"
            defaultMessage={`
                Welcome {name}, you have received {unreadCount, plural,
                    =0 {no new messages}
                    one {{formattedUnreadCount} new message}
                    other {{formattedUnreadCount} new messages}
                } since {formattedLastLoginTime}.
            `}
            values={{
                name: <b>{this.state.user.name}</b>,
                unreadCount: this.state.user.unreadCount,
                formattedUnreadCount: (
                    <b>
                        <FormattedNumber value={this.state.user.unreadCount} />
                    </b>
                ),
                formattedLastLoginTime: (
                    <FormattedRelative
                        value={this.state.user.lastLoginTime}
                        updateInterval={1000}
                    />
                ),
            }}
          />
      </p>
      <p>
        BTW, the date is <FormattedDate value={Date.now()} />
      </p>
      <div>
        <p>
          <span>And last time the build was green was </span>
          <FormattedRelative value={this.state.buildLastGreen}/>
        </p>
        <p>
          <span>To be more precise, the last glorious success was exactly </span>
          <FormattedRelative value={this.state.buildLastGreen} units="hour" />
        </p>
        <p>
          <span>At least it's going to be sunny </span>
          <FormattedRelative value={this.state.nextSunshine} />
          {console.error('Stacktrace! Wow! :)')}
        </p>
      </div>
    </div>
    );
  }
}

export default Dates;
