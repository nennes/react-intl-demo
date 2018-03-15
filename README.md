## I18N

This is a demo application for playing around with the `react-intl` library.

### Why internationalisation?

In the UK alone, more than 5 million people do not speak English as a first language. Worldwide, only 25% of Internet users speak English. Unfortunately, more than half of the websites are written in English, presenting a huge barrier for most people on Earth ([link](https://en.wikipedia.org/wiki/Languages_used_on_the_Internet#Content_languages_for_websites)).

### Quickstart

To start, clone this repo and type `yarn start` or `npm start`.
It will open a browser and the page will refresh automatically when you make changes to the files.

### TL;DR aka how does it work?

There is a project called "Unicode CLDR", whose purpose is to provide building blocks so that software can support the world's languages. 

They do this by releasing an big XML file ([link](http://cldr.unicode.org/index/charts), 40+ MB) that contains all the country specific information required to create internationalised software:

* Locale-specific formatting
	* Dates / times / timezones
	* Numbers
	* Currency
* Translations
	* Spoken languages
	* Countries / Cities
	* Months / Weekdays
* Language and scripts
	* Characters used
	* Writing direction
	* Capitalization
	* Plural cases
	* Sorting rules
* Country Info
	* Language usage
	* Currency
	* Telephone codes
	* Calendar conventions

That data is being exposed via the [ICU project](http://site.icu-project.org/) Java and C/C++ libraries, providing Unicode and Globalization support to various projects.

The JavaScript Internationalisation API ([`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)) relies on the ICU libraries which in turn rely on the CLDR data. Most browsers support it and hence allow for I18n in the front-end. For the ones that do not, there are [polyfills](https://cdn.polyfill.io/v2/docs/) that fill the gap.

On top of `Intl`, one finds [FormatJS](https://formatjs.io/), which also adds integration for other libraries, like React.

The React integration comes in the form of [`react-intl`](https://github.com/yahoo/react-intl), which provides React components ready to be added to any app. 

Some of the most notable components are:

* FormattedDate
* FormattedTime
* FormattedRelative (i.e. 1 minute ago)
* FormattedNumber (includes currency formatting)
* FormattedPlural (adds pluralisation support, i.e no comments, 1 comment, 1,000 comments)
* FormattedMessage (mostly used for selecting the correct translation)

The above can be nested, a common example being a `FormattedMessage` that contains a `FormattedNumber`.








 