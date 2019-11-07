# Expressive modal

> The expressive modal is based on
> [Carbon's Modal component](https://www.carbondesignsystem.com/components/modal/code)
> with slight styling updates to increase readability and reduce strain.

> 💡 Check out
> [Carbon's Modal component](https://www.carbondesignsystem.com/components/modal/code)
> for props and other usage documentation.

## Getting started

Here's a quick example to get you started.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { ExpressiveModal } from '@carbon/ibmdotcom-react';

import '@carbon/ibmdotcom-styles/scss/components/expressive-modal/expressive-modal.scss';

function App() {
  return (
    <>
      <ExpressiveModal open={true}>Hello world!</ExpressiveModal>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

> 💡 Don't forget to import the expressive modal styles from
> [@carbon/ibmdotcom-styles](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/packages/styles).

## Stable selectors

| Name                           | Description |
| ------------------------------ | ----------- |
| `dds--expressive-modal`        | Component   |
| `dds--expressive-modal__close` | Interactive |

## 🙌 Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our
[Contributing Guide](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/.github/CONTRIBUTING.md)!
👀

## 📝 License

Licensed under the
[Apache 2.0 License](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/LICENSE).