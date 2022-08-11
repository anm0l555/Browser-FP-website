import FingerprintJS from './dist2/fp.cjs.js';
// import FingerprintJS from 'dist/src/index.js';
const UseFingerprint = async () => {
  // Initialize the agent at application startup.
  let fpPromise;
  try {
    fpPromise = FingerprintJS.load();
  } catch (err) {
    console.log(err);
  }

  // Get the visitor identifier when you need it.
  const fp = await fpPromise;
  const result = await fp.get();
  console.log(result.visitorId);
  console.log(fp);
  return result;
  // fpPromise
  //   .then((fp) => {
  //     console.log(fp);
  //     return fp.get();
  //   })
  //   .then((result) => {
  //     // This is the visitor identifier:
  //     console.log("Hello")
  //     const visitorId = result.visitorId;
  //     console.log(result)
  //     console.log("This is visitor id" + visitorId);
  //   });
  //   return result;
};

export default UseFingerprint;