# Asynchronous Dialog

Asynchronous version of native dialog functions `alert`, `confirm` and `prompt`.

### Installation

```bash
$ npm install async-dialog
```

### Usage

```js
import { alert, comfirm, prompt } from 'async-dialog'

// Using promises
alert('this is an alert')
  .then()

confirm('I need confirmation to continue')
  .then(() => console.log('confirmed'))
  .catch(reasons => console.error(reasons))

prompt('Tell me something', 'something')
  .then(response => console(response))
  .catch(reasons => console.error(reasons))

// Using await
try {
  await alert('this is an alert')
  await confirm('I need confirmation to continue')
  const response = prompt('Tell me something', 'something')
} catch (reasons) {
  console.error(reasons)
}
```

## License

This package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).