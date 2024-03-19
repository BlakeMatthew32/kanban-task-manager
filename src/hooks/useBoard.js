
import useArray from "./useArray"
import useToggle from "./useToggle"

// Look at potential way to make this more generic  

const useBoard = () => {
    
    const [modalOpen, toggleModal] = useToggle(false)

    const {value: boardList, push } = useArray([])

    const boardListEmpty = boardList.length <= 0

    const createBoardClick = () => {
        toggleModal()
    }
    
    const createBoard = (board) => {
        push(board)
        toggleModal()
    }

    return {
        modalOpen, 
        boardList, 
        boardListEmpty, 
        createBoardClick, 
        createBoard, 
        toggleModal
    }
}

export default useBoard