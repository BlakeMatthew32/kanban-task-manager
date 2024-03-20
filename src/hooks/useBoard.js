
import useArray from "./useArray"
import useToggle from "./useToggle"
import { useEffect } from "react"
import { getBoards } from "../../firebaseAPI"

// Look at potential way to make this more generic  

const useBoard = () => {

    const [modalOpen, toggleModal] = useToggle(false)

    const {value: boardList, setValue, push } = useArray([])

    useEffect(() => {
        async function loadBoards() {
            const data = await getBoards()
            setValue(data)
        }
        loadBoards()
    }, [])

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