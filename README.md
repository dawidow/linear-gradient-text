# What is that ?

A simple library for creating gradient-filled texts.

# How to use ?

` npm i lineargradienttext `

Then...

In html
```
class="gradient-text"
```

In javascript
```
import { gradientText } from 'gradienttextlib';

gradientText({
	primaryColor: '#323',
	secondaryColor: '#e2e',
	direction: 'right',
})
```

Of course, please specify your own properties as a value.

# Options

gradienttextlib supports 4 options, each of which is optional.

* *primaryColor* - '#color' (Defaults to #fff (white))
* *secondaryColor* - '#color' (Defaults to #000 (black))
* *direction* - 'top' | 'right' | 'bottom' | 'left' (Defaults to bottom)