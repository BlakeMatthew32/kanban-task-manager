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
    
    return <div>{board?.name}</div>
}

export default TaskBoard