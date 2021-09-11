const Header = () => {

    function toggleNightMode () {
        //toggle classes that switch into dark mode
        document.querySelector('body').classList.toggle('dark-mode')
    }

    return (
        <header>
          <h1>TODO</h1>
          <button id="night-mode" onClick={toggleNightMode} >NightMode</button>
        </header>
    )
}

export default Header
