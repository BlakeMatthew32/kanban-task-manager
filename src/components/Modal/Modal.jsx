import "./modal.css"

const Modal = ({ children, title, closeModal }) => {
    return <div className="modal__background">
        <div className="modal__content">
            <div className="modal__title-close">
                <h3 className="modal__title">{title}</h3>
                <button 
                    className="modal__close" 
                    onClick={() => {closeModal()}}> 
                        ✖ 
                </button>
            </div>
            {children}
        </div>
    </div>
}

export default Modal