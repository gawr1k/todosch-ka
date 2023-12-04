import ReactDOM from 'react-dom/client';

import { App } from './components/app/app.jsx';
import './style/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <section className="todoapp">
        <App />
    </section>,
);
