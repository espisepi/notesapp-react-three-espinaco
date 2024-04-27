import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import AppThree from './AppThree'
import { Provider } from "react-redux";
import { store } from "./framework/presentation/store/store";


createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      {/* <AppThree /> */}
    </Provider>
  </StrictMode>
)
