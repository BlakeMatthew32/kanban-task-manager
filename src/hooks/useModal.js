import { useState } from "react"

const useModal = () => {

    const [modalOpen, setModalOpen] = useState(false)

    // is this the best way?
    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }

    return {modalOpen, toggleModal}
}

export default useModal