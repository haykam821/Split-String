# String Splitter

Many utility functions for splitting a string.

## Installation

Install it with NPM:

    npm install string-splitter

## Usage

Require the package and then use one of the functions:

```js
const stringSplitter = require("string-splitter");

stringSplitter.split("Hello world!", " "); // ["Hello", "world!"]
stringSplitter.splitCaps("HiThere"); // ["Hi", "There"]
```