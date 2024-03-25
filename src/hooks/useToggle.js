import { useState } from "react"

const useToggle = (
    initialValue = false
) => {

    const [on, setOn] = useState(initialValue)

    // is this the best way?
    const toggle = () => {
        setOn(prev => !prev)
    }

    return [on, toggle]
}

export default useToggle