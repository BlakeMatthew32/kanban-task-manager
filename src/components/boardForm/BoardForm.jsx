import { useState } from "react"
import { v4 as uuid } from 'uuid'
import { addBoard } from "../../../firebaseAPI"

import "./boardForm.css"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const BoardForm = ({ toggleModal }) => {

    //using an object to allow for future fields 
    const [formData, setFormData] = useState({name: ""}) 
    const queryClient = useQueryClient()

    const createBoardMutation = useMutation({
        mutationFn: addBoard,
        onSuccess: data => {
            queryClient.invalidateQueries(["boards"])
        }
    })

    const onSubmit = (event) => {
        //columns to be user input eventually
        event.preventDefault()
        const board = {
            name: formData.name,
            columns: ["Todo", "Ongoing", "Done"],
            tasks: [

            ],
            id: uuid(),
        }
        createBoardMutation.mutate(board)
        toggleModal()
    }

    const handleChange = (event) => {
        const name = event.target.value
        setFormData(prev => {return {...prev, name}})
    }

    return (
        <>
            <form onSubmit={onSubmit} className="form">
                <label htmlFor="board-name">Name</label>
                <input 
                    type="text" 
                    placeholder="e.g Web development" 
                    id="board-name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required
                />
                <button className="button__primary form__button">Create New Board</button>
            </form>
        </>
    )
}

export default BoardForm