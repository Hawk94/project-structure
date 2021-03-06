import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Root from './components/root'
import { configureStore } from './configs/stores'

import './index.css'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
