import { useState } from "react"
import useArray from "./useArray"

// Look at potential way to make this more generic  

const useBoard = () => {

    const [isCreateBoard, setIsCreateBoard] = useState(false)
    const {value: boardList, push } = useArray([])

    const createBoardClick = () => {
        setIsCreateBoard(true)
    }
    
    const createBoard = (board) => {
        push(board)
        setIsCreateBoard(false)
    }

    return {isCreateBoard, boardList, createBoardClick, createBoard}
}

export default useBoard