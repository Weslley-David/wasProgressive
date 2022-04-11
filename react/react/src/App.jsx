import './App.scss'
import Kanban from './components/kanban'

function App() {
    return (
        <div style={{ padding: '10px',
                        paddingLeft:'20px' }}>
            <h1 style={{ marginBottom: '20px' }}>
                Progressive
            </h1>
            <Kanban />
        </div>
    )
}

export default App
