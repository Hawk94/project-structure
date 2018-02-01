import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import { unregister } from './registerServiceWorker'
import { configureStore } from './configs/stores'

import './index.css'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

unregister()
