import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';
import el from 'react-intl/locale-data/el';
import hi from 'react-intl/locale-data/hi';
import ru from 'react-intl/locale-data/ru';
import pl from 'react-intl/locale-data/pl';

import App from './components/App';

addLocaleData([...en, ...fr, ...es, ...el, ...hi, ...ru, ...pl]);

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: 'en',
    }
  }

  renderForLocale(locale) {
    return (
      <div>
        <h4>Selected locale: {locale}</h4>
        <hr />
        <br />
        <IntlProvider locale={locale}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </IntlProvider>
      </div>
    )
  }

  render() {
    const locales = [en, fr, es, el, hi, ru, pl]
    return (<div>
      {locales.map((loc, index) => (
        <span key={index}>
          <button name={loc[0].locale} onClick={() => this.setState({locale: loc[0].locale})}>{loc[0].locale}</button>
          {
            // eye candy!
            console.table(loc)
          }
        </span>
      ))}
      {this.renderForLocale(this.state.locale)}
    </div>)
  }


}


ReactDOM.render(
  <Demo />,
  document.getElementById('root')
);
