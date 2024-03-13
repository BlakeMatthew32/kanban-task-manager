
import "./boards.css"
import useArray from "../../hooks/useArray"

// boards will take in the data from the database/localstorage passed as props

const Boards = ({boardListTitles, activeBoard, createBoardClick}) => {

    const boardsListElements = boardListTitles.value.map((element, index) => <p key={index}>{element}</p>)

    return (
        <div className="boards">
            <p className="boards__total">ALL BOARDS <span>({boardsListElements.length})</span></p>
            <ul>
                {...boardsListElements}
            </ul>
            <button onClick={ () => createBoardClick(boardsListElements.length + 1) }>+ Create New Board</button>
            <button onClick={ () => boardListTitles.remove(boardsListElements.length - 1) }>+ delete last</button>
        </div>
    )
}

export default Boards