const rule = require('../rule.js')

const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6
  }
})

const message = 'Not allow parameter named e, confused with event and error'

ruleTester.run('no-parameter-e', rule, {
  valid: [
    'function a (event) {}',
    'function b (error) {}',
    'function c (evt) {}',
    'function d (err) {}',
  ],
  invalid: [
    {
      code: 'function e (e) {}',
      errors: [{ message }],
    }
  ],
});
