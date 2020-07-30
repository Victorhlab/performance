# What is this?

Measure the run time performance of your code. This is done by 
measuring the time at a starting point and at the end point.
The performance time is then calculated and returned for your usage.
Measurements are in milliseconds (ms).

# Installation 

`npm i runtime-performance --save`

# Usage 
Example 1
```
import {performanceStart, performanceEnd, performanceTime} from 'runtime-performance';

runtime = {start:0, end:0};
performanceStart(runtime);

#
# your code block to measure: delay(1000);
#

performanceTime = performanceEnd(runtime);
console.log("Execution time = " + performanceTime);

```

Example 2
```
import {performanceStart, performanceEnd, performanceTime} from 'runtime-performance';

runtime = {start:0, end:0};

performanceStart(runtime);

#
# your code block to measure: delay(1000);
#

performanceEnd(runtime);

console.log("Execution time = " + performanceTime(runtime));
```