// # Module pep
//
// No-frills string interpolation
//
// :licence: MIT
//   Copyright (c) 2013 Quildreen "Sorella" Motta
//   Copyright (c) 2015 James J. Womack
//
//   Permission is hereby granted, free of charge, to any person
//   obtaining a copy of this software and associated documentation
//   files (the "Software"), to deal in the Software without
//   restriction, including without limitation the rights to use, copy,
//   modify, merge, publish, distribute, sublicense, and/or sell copies
//   of the Software, and to permit persons to whom the Software is
//   furnished to do so, subject to the following conditions:
//
//   The above copyright notice and this permission notice shall be
//   included in all copies or substantial portions of the Software.
//
//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//   NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
//   BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
//   ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
//   CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//   SOFTWARE.

var inflect = require('i')(true);
var Ephemeral = require('ephemeral');

// Add articlize capability
var articles = require('articles');
Object.defineProperty(String.prototype, 'articlize', {
  get: function(){
    return articles.articlize(this);
  }
});
inflect.articlize = articles.articlize;

// -- Constants & Aliases
var templateRE = /{(\\?:)([^}]+)}/g;


// -- Helpers

// ### Function isCallable
//
// Is a subject callable?
//
// :: A -> bool
function isCallable(subject) {
  return typeof subject === 'function';
}


// ### Function asValue
//
// Returns the actual substitution for the given value/key.
//
// :: template-value, string -> string
function asValue(value, key) {
  return isCallable(value) ?  value(key) : value;
}



// ### Interface template-value
//
// :: string | (string -> string)


// -- Core implementation

// ### Function format
//
// Performs string interpolation given a template string as basis, and a
// substitution map.
//
// If a mapping is not given, we assume it to be empty, in which case
// the template variables are simply stripped away.
//
// A template variable is a special construct in the form:
//
//     <template-variable> ::= "{:" <any but "}"> "}"
//
// For example, to provide a "Hello, world!" template, that adjusts to a
// given name, one could write:
//
//     format("Hello, {:subject}!", { subject: "world" })
//     // => "Hello, world!"
//
// A template variable can be escaped by placing a backslash between the
// open-curly braces and the colon, such that the construct would be
// output verbatim:
//
//     format("Hello, {\\:subject}!", { subject: "world" })
//     // => "Hello, {:subject}!"
//
//     // Remember that backslashes must be escaped inside String
//     // literals.
//
// :: string, { string -> template-value } -> string
function format(string, mappings) {
  mappings = mappings || {};

  return string.replace(templateRE, function (match, mod, key, index) {
    var inflectMethodNames = [];
    const keyComponents = key.split('|');
    var returnString = '';

    if (keyComponents.length > 1) {
      key = keyComponents[0];
      inflectMethodNames = keyComponents.slice(1);
    }

    var templateDelimiterIsEscaped = (mod == '\\:');

    if (templateDelimiterIsEscaped) {
      returnString = '{:' + key + '}';
    } else {
      var value = asValue(mappings[key], key);
      if (key in mappings) {
        if (value instanceof Date) {
          var ephemeralMethodName = inflectMethodNames[0];
          var ephemeral = new Ephemeral(value);
          var ephemeralMethod = ephemeral[ephemeralMethodName];
          if (ephemeralMethod) {
            if (index) {
              returnString = ephemeralMethod.call(ephemeral);
            } else {
              returnString = ephemeralMethod.call(ephemeral, true);
            }
          } else {
            if (index) {
              returnString = ephemeral.formattedDateWithPreposition(ephemeralMethodName);
            } else {
              returnString = ephemeral.formattedDate(ephemeralMethodName);
            }
          }
        } else {
          returnString = value;
          for (var inflectionIndex in inflectMethodNames) {
            var inflectMethodName = inflectMethodNames[inflectionIndex];
            var inflectMethod = inflect[inflectMethodName];
            if (inflectMethod) {
              returnString = inflect[inflectMethodName](returnString);
            }
          }
        }
      }
    }

    return returnString;
  });
}

module.exports = format;
