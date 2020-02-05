You can find the library on [npmjs](https://www.npmjs.com/package/linear-gradient-text)

# What is that ?

A simple library for creating gradient-filled texts.

# How to use ?

` npm i linear-gradient-text `

Then...

In html just add a simple class...
```
class="gradient-text"
```

...and configure it in javascript
```
import { gradientText } from 'linear-gradient-text';

gradientText({
	primaryColor: '#323',
	secondaryColor: '#e2e',
	direction: 'bottom',
})
```

Of course, please specify your own properties as a value.

# Options

lineargradienttext supports 3 options, each of which is optional.

* *primaryColor* - '#color' (Defaults to #fff (white))
* *secondaryColor* - '#color' (Defaults to #000 (black))
* *direction* - 'top' | 'right' | 'bottom' | 'left' (Defaults to bottom)*

\* - *Read the important section*

# IMPORTANT!

When using a single word that has display by default: block. The gradient works but fills all available space. It is then recommended to use display: inline.

This problem only affects left and right directions.