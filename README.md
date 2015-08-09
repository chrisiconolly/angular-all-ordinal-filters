Angual ordinal filters
===========

This module provides two ordinal filters:
```html
{{number | ordinal}} // 1 -> 1st
```
```html
{{number | ordinalOnly}} // 1 -> st
```

Setup
------------

In order to set the project up follow the guide below.

Clone the project and then install with npm and bower

```sh
npm install
bower install
```

You can use Grunt to build and test at this point, grunt test will also build the project. To run the current test suite run the following command

```sh
grunt test
```

Project background
------------

I've started this project as I couldn't find an angular filter which provided me with what I needed for another project. The following stackoverflow (http://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number) page has multiple different functions to create get an ordinal value for a given number.

I decided to take these solutions write tests and measure their performance, the winner would then be the base for what I needed.

With this information I was able to choose my favourite function which was used to drive these ordinal filters. The one I went with is a modified version of johnny's solution. His native solution didn't pass the unit tests but that was corrected when I added the following commit: https://github.com/chrisiconolly/angular-all-ordinal-filters/commit/515a562ff86be1dec2bf5eca674bd333e2d03028