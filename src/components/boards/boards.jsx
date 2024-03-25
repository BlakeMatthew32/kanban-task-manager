
import { useQuery } from "@tanstack/react-query"
import "./boards.css"
import { getBoards } from "../../../firebaseAPI"
import { NavLink } from "react-router-dom"

// need to add loading comps for when connection is slow 

const Boards = ({ toggleModal }) => {

    const { data: boards } = useQuery({
        queryKey: ["boards"],
        queryFn: getBoards
    })

    const boardsElms = boards?.map((element, index) => 
        <li key={index}>
            <NavLink to={`boards/${element.id}`}>{element.name}</NavLink>
        </li>
    )

    return (
        <div className="boards">
            <p className="boards__total">ALL BOARDS <span>({boardsElms?.length})</span></p>
            <ul className="boards__list">
                {boardsElms}
            </ul>
            <button className="boards__create-button" onClick={toggleModal}>+ Create New Board</button>
        </div>
    )
}

export default Boards