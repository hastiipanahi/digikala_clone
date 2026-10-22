
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './components/App/App';
import store from './components/Redux/Store';



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
