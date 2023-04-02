import React from 'react';
import ReactDOM from 'react-dom/client';
import { FilterTableWithData } from './components/FilterTable';
import { TableWithData } from './components/Table';

class App extends React.Component{
    render() {
        return (
            <div>
                <TableWithData/>
                <FilterTableWithData/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)