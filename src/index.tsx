import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

// app
import AppBook from './features/book/AppBook'
import AppThree from './AppThree'
import AppNote from './features/note/AppNote'

// redux
import { Provider } from "react-redux";
import { store } from './common/framework/presentation/store/store';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
      <Provider store={store}>
        <AppNote />
        <AppBook />
        <AppThree />
      </Provider>
  </StrictMode>
)
