import React from 'react'; // Add this line to import React
import { createRoot } from 'react-dom/client';
import TodoTable from "./js/components/TodoTable";
import TodoContextProvider from "./js/contexts/TodoContext";

class App extends React.Component {
    render() {
        return (
            <TodoContextProvider>
                <TodoTable/>
            </TodoContextProvider>

        );
    }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="index"/>);
