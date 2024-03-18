
import useArray from "./useArray"
import useModal from "./useModal"

// Look at potential way to make this more generic  

const useBoard = () => {
    
    const {modalOpen, toggleModal} = useModal(false)

    const {value: boardList, push } = useArray([])

    const createBoardClick = () => {
        toggleModal()
    }
    
    const createBoard = (board) => {
        push(board)
        toggleModal()
    }

    return {modalOpen, boardList, createBoardClick, createBoard, toggleModal}
}

export default useBoard