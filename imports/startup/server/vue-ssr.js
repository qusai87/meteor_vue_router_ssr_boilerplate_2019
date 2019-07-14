import CreateApp from '../app.js'
import App from '../client-vue/ui/layouts/App.vue'
import Home from '../client-vue/ui/pages/Home.vue'

const isDev = process.env.NODE_ENV !== 'production'

// Simple createApp
VueSSR.createApp = function (context) {
  return new Promise((resolve, reject) => {
    const { app, router } = CreateApp()
    // Set the URL in the router
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      // no matched routes
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }

      // Can use components prefetch here...
      // console.log('matchedComponents', matchedComponents.length, matchedComponents);
      
      // Called when Vue app has finished rendering
      context.rendered = () => {
        // Inject some arbitrary JS
        context.js = `console.log('hello')`
      }

      resolve(app)
    })
  })
}


// This will be called each time the app is rendered
// VueSSR.createApp = function (context) {
//   const s = isDev && Date.now()

//   return new Promise((resolve, reject) => {
//     const { app, router, store, apolloProvider } = CreateApp({
//       ssr: true,
//     })

//     // set router's location
//     router.push(context.url)

//     // wait until router has resolved possible async hooks
//     router.onReady(() => {
//       const matchedComponents = router.getMatchedComponents()

//       // no matched routes
//       if (!matchedComponents.length) {
//         reject({ code: 404 })
//       }

//       context.js = ''

//       // Call preFetch hooks on components matched by the route.
//       // A preFetch hook dispatches a store action and returns a Promise,
//       // which is resolved when the action is complete and store state has been
//       // updated.
//       // Vuex Store prefetch
//       Promise.all(matchedComponents.map(component => {
//         return component.asyncData && component.asyncData({
//           store,
//           route: router.currentRoute,
//         })
//       })).then(() => {
//         context.rendered = () => {
//           isDev && console.log(`[SSR] Data prefetch: ${Date.now() - s}ms`)

//           // After all preFetch hooks are resolved, our store is now
//           // filled with the state needed to render the app.
//           // Expose the state on the render context, and let the request handler
//           // inline the state in the HTML response. This allows the client-side
//           // store to pick-up the server-side state without having to duplicate
//           // the initial data fetching on the client.

//           context.js += `window.__INITIAL_STATE__=${JSON.stringify(store.state)};`
//           context.js += ApolloSSR.exportStates(apolloProvider)

//         }
//         resolve(app)
//       }).catch(reject)
//     })
//   })
// }