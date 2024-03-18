
import "./boards.css"

// boards will take in the data from the database/localstorage passed as props/context

const Boards = ({boards, createBoardClick}) => {

    const boardsElms = boards.map(element => <p key={element.id}>{element.name}</p>)

    return (
        <div className="boards">
            <p className="boards__total">ALL BOARDS <span>({boards.length})</span></p>
            <ul>
                {...boardsElms}
            </ul>
            <button className="boards__create-button" onClick={createBoardClick}>+ Create New Board</button>
        </div>
    )
}

export default Boards