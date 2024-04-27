import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './features/book/AppBook'
import AppThree from './AppThree'

// redux
import { Provider } from "react-redux";
import { store } from './features/book/framework/presentation/store/store';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
      <Provider store={store}>
        <App />
        <AppThree />
      </Provider>
  </StrictMode>
)
