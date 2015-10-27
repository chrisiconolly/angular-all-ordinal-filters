Angular ordinal filters
===========

[![Build Status](https://travis-ci.org/chrisiconolly/angular-all-ordinal-filters.svg?branch=master)](https://travis-ci.org/chrisiconolly/angular-all-ordinal-filters)

This module provides two ordinal filters:
```html
{{number | ordinal}} // 1 -> 1st
```
```html
{{number | ordinalOnly}} // 1 -> st
```

Usage
------------
Bower:

```sh
bower install --save angular-all-ordinal
```

Add the following line to the `<head>` section of your index.html

```html
<script src="path/to/angular-all-ordinal.min.js"></script>
```

Add the `ordinal` directive as a dependency in your application:

```javascript
angular.module('demo', ['ordinal'])
```

You can now use the two filters as above! Enjoy young grasshopper!

Setup
------------

In order to set the project up follow the guide below.

Clone the project and then install with npm and bower

```sh
npm install
bower install
```

You can use Gulp to build and test at this point, gulp test will also build the project. To run the current test suite run the following command

```sh
gulp test
```

If you want to work on the filters then there is a workflow:dev task, this will build and run tests, create a server and connect to it and also watch for any changes. Changes will trigger a rebuild and test as well as livereloading the browser.

```sh
gulp workflow:dev
```

Project background
------------

I've started this project as I couldn't find an angular filter which provided me with what I needed for another project. Ordinal filters do exist but didnt give me what I needed. The following stackoverflow (http://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number) page has multiple different functions to create get an ordinal value for a given number.

I decided to take these solutions write tests and measure their performance, the winner would then be the base for what I needed.

With this information I was able to choose my favourite function which was used to drive these ordinal filters. The one I went with is a modified version of johnny's solution. His native solution didn't pass the unit tests but that was corrected when I added the following commit: https://github.com/chrisiconolly/angular-all-ordinal-filters/commit/515a562ff86be1dec2bf5eca674bd333e2d03028