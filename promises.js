//Promise and their implemations

/*Here is the two-line definition for each Promise static method, focused on their "winning" conditions:
Promise.all: Waits for all promises to fulfill and returns an array of results; it fails fast and rejects immediately if any single promise rejects.

Promise.allSettled: Waits for all promises to finish (either fulfilled or rejected) and returns an array of objects describing the outcome of each.

Promise.any: Returns the value of the first promise to fulfill; it only rejects if every single promise in the iterable fails.

Promise.race: Returns the result (fulfillment or rejection) of the very first promise to settle, regardless of whether it succeeded or failed.



Quick Comparison TableMethodSuccess ConditionFailure ConditionallAll must succeedAny one failsallSettledAlways settlesNever "fails" as a wholeanyFirst one to succeedAll must failraceFirst one to settleFirst one to settle*/

//
