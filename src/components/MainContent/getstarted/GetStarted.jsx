import '@master/css';

const GetStarted = () => {
    return(
        <div className='bg:gray-90 w:100% py:10em flex justify-content:center align-items:center flex-direction:column'>
            <h1 className='text-align:center font:35px color:gray-22 m:0 mb:1.6em'>Get Started</h1>
            <div className='w:75% bg:white box-shadow:0|0|0.8em|gray-62 r:0.8em flex justify-content:space-between align-items:center py:1em px:1.5em'>
                <img src='https://cdn.you.com/img/images/developers-page/developers-documentation-image.png'alt='get-started' className='w:45% mr:0.5em' />
                <div className='pl:1em py:0.8em'>
                    <h2 className='40px m:0'>Documentation</h2>
                    <p className='font:15px color:gray-32 display:inline-block my:1em'>Our team created comprehensive and user-friendly documentation for you. It will help you focus on what's important — developing your product.</p>
                    <div className='w:100% flex justify-content:center mt:2em'>
                        <button className='bg:linear-gradient(45deg,blue-48,sky-62) b:none outline:none px:2em py:1em color:white font-weight:600 font:20px r:3em cursor:pointer bg:linear-gradient(45deg,blue-40,sky-56):hover'>Start Building</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default GetStarted;