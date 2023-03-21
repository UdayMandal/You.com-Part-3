import '@master/css';

const NavBar = () => {
    return(
        <nav className="box:border w:100% flex justify-content:space-between">
            <div className='w:100% bg:url("https://cdn.you.com/img/images/developers-page/developers-hero-top-bg.png") bg:no-repeat'>

                <div className='w:100% h:100px px:2.5em flex justify-content:space-between align-items:center flex-direction:column@<sm justify-content:center@<sm mt:1.2em@<sm'> 
                    <div className='w:40% flex justify-content:center@<sm w:100%@<sm my:1.5em@<sm'>
                        <img src='https://cdn.you.com/img/images/developers-page/developers-header-logo.png' alt='you-platform'></img>
                    </div>

                    <div className='w:60% w:100%@<sm flex justify-content:flex-end align=items:center font:15px font-weight:600 justify-content:center@<sm letter-spacing:0.4px '>
                        <a href='/you.com' className='color:gray-12 mr:2em'>You.com</a>
                        <a href='/about-me' className='color:gray-12 mr:2em'>About Me</a>
                    </div>
                </div>

                <div className='w:100% h:580px flex justify-content:space-between align-items:center position:relative bg:url("https://cdn.you.com/img/images/developers-page/developers-hero-bottom-bg.png") bg:no-repeat bg:bottom'>
                    <div className='w:70% w:100%@<sm h:70% z-index:1 px:4em pl:6em py:1em'>
                        <h1 className='text-align:center@<sm font:50px font:28px@<sm mb:0.8em'>Grow your business</h1>
                        <p className='font:26px mb:1.5em font:18px@<sm color:gray-50 text-align:center@<sm'>Create a search app, get discovered by millions of users, and generate revenue with you.com</p>
                        <div className='w:100%@<sm flex justify-content:center'>
                            <button className='bg:linear-gradient(45deg,blue-48,sky-62) b:none outline:none px:2em py:1em color:white font-weight:600 font:20px r:3em cursor:pointer bg:linear-gradient(45deg,blue-40,sky-56):hover'>Start Building</button>
                        </div>
                        
                    </div>
                    <div className='position:absolute right:0 bottom:0'>
                        <img className='w:800px w:500px@<sm bg:contain' src='https://cdn.you.com/img/images/developers-page/developers-hero.png' alt='you'/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;