Angual ordinal filters
===========


Project status
------------
Using all the proposed solutions from http://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number. My object is to create each of these functions as angular filters, test them all and then performance test them.

Currently implemented:
- Salman A
- nick



In order to set the project up follow the guide below

Setup
------------

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