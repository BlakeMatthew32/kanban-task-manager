
import { useQuery } from "@tanstack/react-query"
import "./boards.css"
import { getBoards } from "../../../firebaseAPI"
import { NavLink } from "react-router-dom"

// boards will take in the data from the database/localstorage passed as props/context

const Boards = ({ createBoardClick }) => {

    const { data: boards } = useQuery({
        queryKey: ["boards"],
        queryFn: getBoards
    })

    const boardsElms = boards?.map(element => 
        <li>
            <NavLink to={`boards/${element.id}`} key={element.id}>{element.name}</NavLink>
        </li>
    )

    return (
        <div className="boards">
            <p className="boards__total">ALL BOARDS <span>({boardsElms?.length})</span></p>
            <ul className="boards__list">
                {boardsElms}
            </ul>
            <button className="boards__create-button" onClick={createBoardClick}>+ Create New Board</button>
        </div>
    )
}

export default Boards