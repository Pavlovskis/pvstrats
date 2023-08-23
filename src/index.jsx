/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App.jsx';
import { createRoot } from 'solid-js';

const root = document.getElementById('root');
// const rt = createRoot(root);

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <App />, root);
