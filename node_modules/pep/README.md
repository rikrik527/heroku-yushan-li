Pep
=====

[![Build Status](https://travis-ci.org/jameswomack/pep.svg?branch=master)](https://travis-ci.org/jameswomack/pep)

A peppy string interpolation library with filters for inflection, articlization, titleization & more.

`npm i pep -SE`

```js
var pep = require('pep');
pep('Hello, {:subject|pluralize|titleize}!', { subject: 'world' });
// => (string) "Hello, Worlds!"
```

Or, alternatively, mess with the `String#prototype`:

```js
var pep = require('pep');
String.prototype.format = function(mappings) {
  return pep(this, mappings);
}

'Hello, {:subject}!'.format({
  subject: 'world'
});
// => (string) "Hello, world!"
```


## Installing

The easiest way is to grab it from NPM (use [browserify][] if you're on a
Browser):

    $ npm i pep
    # Then require it as usual
    node> var pep = require('pep')
    
If you **really** want to suffer with old and terrible module/no-module
formats, you can run `make bundle` yourself:

    $ git clone git://github.com/jameswomack/pep
    $ cd pep
    $ npm install
    $ make bundle
    # And incldue `dist/pep.umd.js` on your AMD/script tag/whatever.


[browserify]: https://github.com/substack/node-browserify

## API

### `format(string, mappings)`

Performs string interpolation, given a template string as basis, and a
substitution map.

```hs
template-value: string | (string -> string)
format: string, { string -> template-value } -> string
```

If a mapping is not given, we assume it to be an empty object, in which case
the template variables are just stripped away.

A template variable is a special construct in the form:

    <template-variable> ::= "{:" (any but "}") "}"
    
For example, to provide a "Hello, world!" template, that adjusts to a given
name, one could write:

```js
format("Hello, {:subject}!", { subject: "world" })
// => "Hello, world!"
```

A template variable can be escaped by placing a backslash between the
open-curly braces and the colon, such that the construct would be output
verbatim:

```js
format("Hello, {\\:subject}!", { subject: "world" })
// => "Hello, {:subject}!"
```


## Platform support

ES3 and beyond!

[![browser support](https://ci.testling.com/jameswomack/pep.png)](http://ci.testling.com/jameswomack/pep)


## Testing

For Node, just:

    $ npm test
    
    
For the browser:

    $ npm install -g brofist-browser
    $ make test
    $ brofist-browser serve test/specs
    # Then point your browsers to the URL on yer console.
    

## Licence

MIT/X11. Just do whatever you want to.

    $ less LICENCE
