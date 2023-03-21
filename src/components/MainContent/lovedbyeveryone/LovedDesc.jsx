import '@master/css';

const LovedDesc = () => {
    return(
        <div className='w:100% flex justify-content:center py:3em'>
            <div className='w:90% w:100%@<sm flex justify-content:space-between align-items:center flex-direction:column@<sm bb:0.8px|solid|gray-22 py:5em py:3em@<sm'> 
                <div className='w:50% w:100%@<sm flex justify-content:flex-end mb:2em@<sm'> 
                    <div className='w:80% w:90%@<sm py:2em px:1em px:0@<sm'>
                        <h1 className='font:40px font:35@<sm'>Apps made easy!</h1>
                        <p className='mt:1em w:85%@<sm display:inline-block font:1.2em color:gray-28 font:1em@<sm'>We offer a flexible set of UI components so you can construct the app that is most suitable for your domain and data.</p>
                        <div className='w:90% w:100%@<sm flex flex-direction:column gap:0.6em gap:1em@<sm mt:0.7em mt:1em@<sm '>
                            <div className='flex align-items:center font:23px color:blue-58'>
                                <ion-icon name="time"></ion-icon>
                                <span className='ml:0.7em font:14px color:gray-28 font:12.8px@<sm'>Create low-code apps in minutes using our custom templating language</span>
                            </div>
                            <div className='flex align-items:center font:23px color:blue-58'>
                                <ion-icon name="magnet"></ion-icon>
                                <span className='ml:0.7em font:14px color:gray-28 font:12.8px@<sm'>Access fully featured APIs and documentation</span>
                            </div>
                            <div className='flex align-items:center font:23px color:blue-58'>
                                <ion-icon name="laptop"></ion-icon>
                                <span className='ml:0.7em font:14px color:gray-28 font:12.8px@<sm'>Easily manage your apps with your Developer Dashboard</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w:50% w:100%@<sm h:200px flex justify-content:center my:3em@<sm'>
                    <div className='w:60% r:2em box-shadow:0|0|0.7em|0.01em|gray-30 flex flex-direction:column justify-content:center px:2em'>
                        <span className='font:18px color:gray-38 display:inline-block mb:0.8em'>Developers</span>
                        <span className='font:23.5px font-weight:600 color:gray-28'>Average time to build an app</span>
                        <h1 className='m:0 mt:0.2em font:50px  color:gray-24'>45 min</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LovedDesc;