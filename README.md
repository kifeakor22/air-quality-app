# Air Quality App

![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)

## A React based app which allows a user to search their location for Air Quality information for both current and forecasted air quality. The app also provides a visual dashboard to help inform users about whether it would be safe for different outdoor activities.

<!-- TABLE OF CONTENTS -->
  <details>
    <summary>Table of Contents</summary>
    <ol>
          <li><a href="#about-the-project">About The Project</a></li>
          <li><a href="#deployment">Deployment / Code Repository</a></li>
          <li><a href="#screenshot">Screenshot</a></li>
          <li><a href="#scope-and-purpose">Scope and Purpose</a></li>
          <li><a href="#usage">Usage</a></li>
          <li><a href="#credits">Credits</a></li>
          <li><a href="#installation">Installation</a></li>
          <li><a href="#questions">Questions</a></li>
          <li><a href="#contributions">Contributions</a></li>
          <li><a href="#tests">Tests</a></li>
          <li><a href="#suggested-future-changes">Suggested Future Changes</a></li>
          <li><a href="#license">License</a></li>
        </ol>
  </details>

  <!-- About the Project -->

## About the Project

### Deployment / Code Repository

[Live Deployment](https://kifeakor22.github.io/air-quality-app/)

[Repository](https://github.com/kifeakor22/air-quality-app)

### Screenshot

Working version of the app should look like this:
<img src="../assets/screenshot.png" alt="Working version of project" style="max-width: 800px;">

### Scope and Purpose

Build an interactive web app based in React, which allows for dashboard components to be displayed on screen from an air quality api data fetch. The user searches for their location, which begins filtering from a list of cities after their first three characters, and changes the selection options with every key stroke. The selected city then uses stored latitude and longitude data to fetch api data for the nearest aqi station. The use case for this app is mainly for asthma sufferers to know whether it is safe to exercise outdoors in their area today, and for the 5 days ahead.

### Usage

This site and its contents are for educational purposes only. You should have Node.js installed to be able to run this program.

### Credits

The following people have contributed to this app:

- [jbkennaugh](https://github.com/jbkennaugh)
- [kifeakor22](https://github.com/kifeakor22)
- [lauren-mac](https://github.com/lauren-mac)
- [Saadu10002](https://github.com/Saadu10002)
- [TweetingCynical](https://github.com/TweetingCynical)

### Installation

To install the necessary tendencies, you must run the following command:

```
npm i
```

### Questions

If you have any questions or to report bugs, please [open a new issue](https://github.com/kifeakor22/air-quality-app/issues/new) or [email us](mailto:jon@exce-ed.com?subject=air-quality-app)

### Contributing

Please create a fork to contribute to our project.

### Tests

To run tests, run the following command:

```
npm test
```

### Suggested Future Changes

- ✅ ~~Hide all dashboard data until the api fetches data;~~
- ✅ ~~Create a 5 day forecast from the api;~~
- ✅ ~~Change Search so that the user is presented with options from a list as they type;~~
- ✅ ~~Change API request so that it fetches the nearest AQI station instead of an exact city match to prevent 'No Data Available' return;~~
- Add an map api for showing a weather forecast style implementation for current aqi values;
- Potential for importing news stories about climate issues from the local area;
- Potential to pull in articles about top tips for staying healthy;

### License

MIT License

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
