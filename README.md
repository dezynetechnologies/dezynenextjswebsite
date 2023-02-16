# Nextjs-React-Redux-Example

A Simple Counter App made with next.js, react and redux. 

To run the app:

```
export NODE_OPTIONS=--openssl-legacy-provider
npm install
npm run dev

```
Steps to update website

1. Make changes to source code
2. Run npm run dev to test on localhost:3030
3. Post testing build and push by npm run push, This shall push the code to S3 bucket dezyne.in using aws cli
4. Invalidate cloudfront cache through aws console(we can use some command line feature also for the same)


[Detailed Explanation](https://dev.to/waqasabbasi/server-side-rendered-app-with-next-js-react-and-redux-38gf)
