import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getBoard } from "../../../firebaseAPI"

const TaskBoard = () => {

    const params = useParams()

    const { data: board } = useQuery({
        queryKey: ["boards", params.id],
        queryFn: () => {
            return getBoard(params.id) 
        }
    })
    

    // if the current board does not exist add button to return to boards dashboard
    return <div>{board?.name || board}</div>
}

export default TaskBoard