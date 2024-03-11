import "../App.css"

const Header = () => {
    return (
        <div className="Header">
            {/* h2 is place holder that will be set debending on current board */}
            <h2>Platform Launch</h2> 
            <button className="header__button">+ Add new task</button>
        </div>
    )
}

export default Header