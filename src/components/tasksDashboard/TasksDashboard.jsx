import "./tasksDashboard.css"

import { useMutation, useQuery } from "@tanstack/react-query"
import { Link, useOutletContext } from "react-router-dom"
import { getBoards } from "../../../firebaseAPI"

const TasksDashboard = () => {

    const { toggleModal } = useOutletContext()

    const { data: boards } = useQuery({
        queryKey: ["boards"]
    })

    const boardCardsElms = boards?.map((element, index) => {
        return (
            <div className="taskDashboard__card">
                <Link key={index} to={`boards/${element.id}`}>
                    
                    <h3>{element.name}</h3>
                    <p>- Todo: {element.tasks.todo.length}</p>
                    <p>- ongoing: {element.tasks.ongoing.length}</p>
                    <p>- done: {element.tasks.done.length}</p>
                </Link>
            </div>
        )
    })

    return (
        <main>
            {boards?.length <= 0 ? 
                <div>
                    <h2>Looks like you don't have any boards yet.</h2>
                    <button onClick={ toggleModal }>+ Create New Board</button>
                </div> 
                : 
                <div className="taskDashboard__card-wrapper">{boardCardsElms}</div>
            }
        </main>
    )
}

export default TasksDashboard