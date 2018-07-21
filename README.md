# Project Overview

This project implements tests of a web-based application that reads RSS feeds
using [Jasmine](http://jasmine.github.io/). In addition,
[Gulp](https://gulpjs.com/) is employed to automate the applicaiton build
process.

This project is part of the Udacity
[Front End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001)
program. You can learn more about the requirements for this project in the
[Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)
and the
[required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).

# How to Run These Tests

The first step in running these tests is to to build the app on your local
computer. Start by opening a new terminal window and follow the steps shown
below.

| # | Command | Comments |
|:-:|:--------|:---------|
| 1 | `cd <parent-destination-directory>` | Navigate to the directory that will contain the application's sub-directory. |
| 2 | `git clone https://github.com/jdmedlock/frontend-nanodegree-feedreader.git` | This creates the application sub-directory and populates it with the source code and documentation for the current release maintained on GitHub. |
| 3 | `gulp` | Use this command will build the development version of the app. This also watches for any subsequent changes in the app source files and automatically rebuilds the app. |
| 4 | `gulp dist` | Use this command when you are ready to build the production version of the app |

At this point the app will be located at the directory
`<parent-destination-directory>/frontend-nanodegree-feedreader` on your
computer. You can run these tests from your browsers File menu by opening
`index.html` located in the application directory you created above.

Scrolling to the end of the page will reveal the results of the Jasmine tests.

# Test Coverage

Tests are maintained in the source file `jasmine/spec/feedreader.js` in the
project directory. These tests and their objectives are shown below.

| Test Suite | Test Case | Additional Comments |
|:-----------|:----------|:--------------------|
| RSS Feeds | are defined | Inspects `allReads` in `app.js` to ensure that it is properly defined and contains at least on entry |
| | validate allFeeds name key/value pairs | |
| | ...element #n should have a 'name' attribute | Inspects all `allReads` entries in `app.js` |
| | ...element #n should have a nonblank 'name' attribute  | Inspects all `allReads` entries in `app.js` |
| | validate allFeeds url key/value pairs | |
| | ...element #n should have a 'url' attribute | Inspects all `allReads` entries in `app.js` |
| | ...element #n should have a nonblank 'url' attribute  | Inspects all `allReads` entries in `app.js` |
| The menu | menu is hidden by default | When the page is initially display the menu is hidden |
| | menu visibility toggles when clicked | When the menu icon is clicked the feed list display is toggled |
| Initial Entries | should have at least one .entry element | The `loadFeed(...)` function generates at least one feed entry |
| New Feed Selection | should populate the feed with a different set of contents | Different calls to `loadFeed(...)` populate the feed with different contents |
