
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Tic-Tac-Toe/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Tic-Tac-Toe/game",
    "route": "/Program%20Files/Git/Tic-Tac-Toe"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Tic-Tac-Toe/game"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Tic-Tac-Toe/game",
    "route": "/Program%20Files/Git/Tic-Tac-Toe/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 525, hash: '631407372441ed8ec6063cdd508cab11176f5bb4201887097710956b4c8a5419', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1038, hash: '984edeeb01d3a070e046f7bda066f8ac87e9adc72cbc37c0d9004d00e07a8eee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
