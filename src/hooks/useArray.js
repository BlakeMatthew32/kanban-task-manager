import { useState } from "react"

const useArray = (initialValue = []) => {

    const [value, setValue] = useState(initialValue)
    const isEmpty = (value.length === 0)

    const push = (element) => {
        setValue(prev => [...prev, element])
    }

    const remove = (index) => {
        setValue(prev => prev.filter((_, i) => i !== index))
    }

    return {value, setValue, isEmpty, push, remove}
}

export default useArray