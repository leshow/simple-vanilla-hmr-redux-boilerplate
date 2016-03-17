let loadedModule = null;

if (process.env.NODE_ENV === 'production') {
  loadedModule = require('./Root.prod.js').default;
} else {
  loadedModule = require('./Root.dev.js').default;
}

// export const Root = loadedModule;
export default loadedModule;
