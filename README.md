# react-custom-element

HOC to register a custom element which will wrap a React component.

## Usage

Install `react-custom-element` via npm. Also install `webcomponents.js` if you require a polyfill. (http://caniuse.com/#search=custom%20elements)
```bash
npm install react-custom-element webcomponents.js
```

```javascript
import { registerCustomElement } from 'react-custom-element';
import 'webcomponents.js';

const HelloWord = ({ name = "World" }) => (
  <span>Hello, {name}!</span>
);

registerCustomElement(HelloWorld, "my-hello-world");
```

Use it in HTML, passing any props as attributes:

```html
<my-hello-world></my-hello-world><!-- <span>Hello, World</span> -->

<my-hello-world name="Bradley"></my-hello-world><!-- <span>Hello, Bradley</span> -->
```

## Related

[preact-custom-element](https://github.com/bspaulding/preact-custom-element)
