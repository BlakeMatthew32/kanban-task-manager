import { useState } from "react"
import { v4 as uuid } from 'uuid'

import "./boardForm.css"

const BoardForm = ({ createBoard }) => {

    //using an object to allow for future fields 
    const [formData, setFormData] = useState({name: ""}) 

    const onSubmit = (event) => {
        //columns to be user input eventually
        event.preventDefault()
        const board = {
            name: formData.name,
            columns: ["Todo", "Ongoing", "Done"],
            tasks: [],
            id: uuid(),
        }

        createBoard(board)
    }

    const handleChange = (event) => {
        const name = event.target.value
        setFormData(prev => {return {...prev, name}})
    }

    return (
        <div className="form__wrapper">
            <h3>Add New Board</h3>
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
        </div>
    )
}

export default BoardForm