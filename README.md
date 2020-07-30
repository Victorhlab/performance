# What is this?

Measure the run time performance of your code. This is done by 
measuring the time at a starting point and at the end point.
The performance time is then calculated and returned for your usage.
Measurements are in milliseconds (ms).

# Installation 

`npm i performance --save`

# Usage
```
import { performance } from 'performance'

time = {start, end};
performanceStart(time);
delay(1000);
performanceTime = performanceEnd(time);
console.log("Execution time = ", performanceTime);
```

OR

```
import { performance } from 'performance'

time = {start, end};
performanceStart(time);
delay(1000);
performanceEnd(time);

console.log("Execution time = ", performanceTime(time));
```