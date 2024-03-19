import { useOutletContext } from "react-router-dom"

const TasksDashboard = () => {

    const {boardListEmpty, createBoardClick} = useOutletContext()
    
    return (
        <main>
            {boardListEmpty ? 
                <div>
                    <h2>Looks like you don't have any boards yet.</h2>
                    <button onClick={createBoardClick}>+ Create New Board</button>
                </div> 
                : 
                <h2>Tasks Dashboard</h2>
            }
        </main>
    )
}

export default TasksDashboard