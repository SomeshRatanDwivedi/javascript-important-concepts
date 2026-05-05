//Promise and their implemations

/*Here is the two-line definition for each Promise static method, focused on their "winning" conditions:
Promise.all: Waits for all promises to fulfill and returns an array of results; it fails fast and rejects immediately if any single promise rejects.

Promise.allSettled: Waits for all promises to finish (either fulfilled or rejected) and returns an array of objects describing the outcome of each.

Promise.any: Returns the value of the first promise to fulfill; it only rejects if every single promise in the iterable fails.

Promise.race: Returns the result (fulfillment or rejection) of the very first promise to settle, regardless of whether it succeeded or failed.



Quick Comparison TableMethodSuccess ConditionFailure ConditionallAll must succeedAny one failsallSettledAlways settlesNever "fails" as a wholeanyFirst one to succeedAll must failraceFirst one to settleFirst one to settle*/

//


const [profile, orders, deals] = await Promise.all([
  fetch('/api/profile').then(res => res.json()),
  fetch('/api/orders').then(res => res.json()),
  fetch('/api/deals').then(res => res.json())
]);
// Update state once with all data
setData({ profile, orders, deals });


const endpoints = ['/api/profile', '/api/orders', '/api/deals', '/api/settings'];

const fetchData = async () => {
  try {
    // 1. Map the strings into an array of Promises
    const promiseArray = endpoints.map(url => 
      fetch(url).then(res => res.json())
    );

    // 2. Wait for all of them
    const results = await Promise.all(promiseArray);

    // 3. results is now an array: [profileData, ordersData, dealsData, settingsData]
    setData(results); 
  } catch (error) {
    console.error("At least one API failed", error);
  }
};



const resources = [
  { key: 'profile', url: '/api/profile' },
  { key: 'orders', url: '/api/orders' },
  { key: 'deals', url: '/api/deals' }
];

const fetchData = async () => {
  const keys = resources.map(r => r.key);
  const promises = resources.map(r => fetch(r.url).then(res => res.json()));

  const values = await Promise.all(promises);

  // Combine keys and values into one object
  const combinedData = keys.reduce((acc, key, index) => {
    acc[key] = values[index];
    return acc;
  }, {});

  setData(combinedData); 
  // Result: { profile: {...}, orders: [...], deals: [...] }
};


const results = await Promise.allSettled(promiseArray);

// results looks like: 
// [{ status: 'fulfilled', value: ... }, { status: 'rejected', reason: ... }]

const successfulData = results
  .filter(item => item.status === 'fulfilled')
  .map(item => item.value);

setData(successfulData);
