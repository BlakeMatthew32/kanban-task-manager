
import "./boards.css"
import useArray from "../../hooks/useArray"

const Boards = () => {
    const boardsList = useArray([1, 2, 3])

    const boardsListElements = boardsList.value.map((element, index) => <p key={index}>{element}</p>)
    
    const handleClick = () => {
        boardsList.push(boardsList.value.length+1)
    }

    return (
        <div className="boards">
            <p>ALL BOARDS<span>(0)</span></p>
            <ul>
                {...boardsListElements}
            </ul>
            <button onClick={handleClick}> +create New Board</button>
        </div>
    )
}

export default Boards