import '@master/css';

const GetInTouch = () => {
    return(
        <div className='w:100% py:6.2em flex justify-content:center align-items:center flex-direction:column'>
            <h1 className='text-align:center font:35px color:gray-22 m:0 mb:0.8em'>Get Started</h1>

            <span className='text-align:center w:80% d:inline-block mb:1.8em'>Join the community of developers building the next generation of search. Engage the you.com team with questions or concerns.</span>
            
            <button className='bg:linear-gradient(45deg,blue-48,sky-62) b:none outline:none px:0.8em py:0.4em color:white font-weight:600  r:3em cursor:pointer bg:linear-gradient(45deg,blue-40,sky-56):hover flex justify-content:space-between align-items:center font:35px'>
                <ion-icon name="logo-discord"></ion-icon>
                <span className='ml:0.5em font:20px'>Join Our Discord</span>
            </button>
        </div>
    )
}

export default GetInTouch;