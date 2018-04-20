# eslint-plugin-no-parameter-e

Not allow parameter named e, confused with event and error

## Why

Developers usually want to use short, simple and meaningful names.
Sometimes they use short form, event shorten to only 1 character.
And in somecases, one character name still readable.
But there are two common variable: `event` and `error`. Both starts with letter `e`.
If they all use short form. Developers might confused what it is.

This plugin is to prevent any function parameter use the name `e`.
Which will confuse developers.

## Installation

Install local plugin:

```sh
$ npm install eslint-plugin-no-parameter-e --save-dev
```

If you use global eslint, you need install this plugin global too.

## Configuration

Add plugin and rule:

```json
{
  "plugins": [
    "no-parameter-e"
  ],

  "rules": {
    "no-parameter-e": 2
}
```
