import "./header.css"

import Logo from "../Logo/logo"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

const Header = () => {

    const params = useParams()

    const { data: board } = useQuery({
        queryKey: ["boards", params.id],
        queryFn: () => {
            return getBoard(params.id)
        }
    })

    return (
        <header className="Header">
            {/* h2 is place holder that will be set depending on current board */}
            <h2>{board?.name}</h2> 
            <button className="header__button">+ Add new task</button>
        </header>
    )
}

export default Header