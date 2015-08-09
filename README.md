Angual ordinal filters
===========


Project status
------------

I have taken 4 solutions from http://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number. I've now use these to create angular filters they all have unit tests and are now performance tested here: http://jsfiddle.net/cconolly/jybxyxrm/

With this information I now am able to choose my favourite function which will be used to drive these ordinal filters. The one I'm going to go with is a modified version of johnny's solution. His native solution didn't pass the unit tests but that was corrected when I added the following commit: https://github.com/chrisiconolly/angular-all-ordinal-filters/commit/515a562ff86be1dec2bf5eca674bd333e2d03028

Setup
------------

In order to set the project up follow the guide below.

Clone the project and then install with npm and bower

```sh
npm install
bower install
```

You can use Grunt to build and test at this point, grunt test will also build the project. To run the current test suite on our one filter run the following command

```sh
grunt test
```

Project background
------------

I've started this project as I couldn't find an angular filter which provided me with what I needed for another project. The following stackoverflow (http://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number) page has multiple different functions to create get an ordinal value for a given number.

I decided to take these solutions write tests and measure their performance, the winner would then be the base for what I needed.