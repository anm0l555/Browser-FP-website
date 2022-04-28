// import FingerprintJS from "../src/browser-fp/dist/src/index.js";
import FingerprintJS from 'browser-fp';

export const UseFingerprint = () => {
  // Initialize the agent at application startup.
  let fpPromise;
  try {
    fpPromise = FingerprintJS.load();
  } catch (err) {
    console.log(err);
  }

  // Get the visitor identifier when you need it.

  fpPromise
    .then((fp) => {
      console.log(fp);
      return fp.get();
    })
    .then((result) => {
      // This is the visitor identifier:
      const visitorId = result.visitorId;
      console.log(visitorId);
    });
};
