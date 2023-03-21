import '@master/css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './success.css'
import SuccessStory1 from './SuccessCont1';
import SuccessStory2 from './SuccessCont2';
import SuccessStory3 from './SuccessCont3';

const SuccessStory = () => {

    // const navigate = useNavigate();
    
    // const goBack = () => {
    //     navigate(-1);
    // }

    const items = [
        {
            logo:<img className='w:40px' src='https://cdn.you.com/img/images/developers-page/developers-success-story-chart.svg' alt='you'/>,
            desc:"Get in front of millions of searchers every day"
        },
        {
            logo:<img className='w:40px' src='https://cdn.you.com/img/images/developers-page/developers-success-story-loyalty.svg' alt='you'/>,
            desc:"Grow loyalty with highly engaged users (50% retention)"
        },
        {
            logo:<img className='w:40px' src='https://cdn.you.com/img/images/developers-page/developers-success-story-early-access.svg' alt='you'/>,
            desc:"Get early access (we're growing at over 30% MOM)"
        }
    ]
    return(
        <BrowserRouter>
        <div className='bg:gray-90 w:100% py:7em px:6em'>
            <h1 className='font:34px mb:1em'>Make your app our next success story</h1>
            <p className='font:15.5px w:80% w:95%@<sm mb:4em'>We care about the details, and so do our users. We also care about user choice and privacy, so your app must pass a rigorous vetting process to be equally outstanding. But when it does, you'll be joining the community built on trust, facts, and kindness.</p>

            <div className='flex justify-content:space-between flex-direction:column@<sm w:100% gap:2em'>
                {items.map(e=>{
                    return(
                        <div className='flex align-items:center justify-content:space-between@>=sm py:0.8em px:1em bg:white w:32% w:100%@<sm r:1.2em box-shadow:0|0|0.5em|0.05em|gray-80'>
                            <span className='display:inline-block mr:0.6em'>{e.logo}</span>
                            <span className='display:inline-block font-weight:600 letter-spacing:0.4px color:gray-32 ml:0.8em@<sm'>{e.desc}</span>
                        </div>
                    )
                })}
            </div>

            <div className='flex justify-content:space-between w:100% align-items:center mt:6em flex-direction:column-reverse@<sm py:2em@<sm'>
                <div className='w:52% w:100%@<sm'>
                    <div className="h:250px w:100% px:2.2em py:2em bg:white bg:url('https://cdn.you.com/img/images/developers-page/developers-quote.svg') bg:0|100% background-size:38% bg:no-repeat box-shadow:0|0|0.6em|0.01em|gray-60 r:1.2em">
                        <Routes>
                            <Route index path='/' element={<SuccessStory1/>}/>
                            <Route path='/unstoppable-domains' element={<SuccessStory2/>}/>
                            <Route path='/listen-notes' element={<SuccessStory3/>}/>
                        </Routes>
                    </div>
                    <div className="w:100% py:1.4em flex justify-content:space-between align-items:center">
                        <div className="w:25% h:30px flex justify-content:space-evenly align-items:center">
                            <NavLink className="mr:0.5em bg:white w:15px h:50% r:7em b:0.4px|solid|gray" to='/'></NavLink>
                            <NavLink to='/unstoppable-domains' className="mr:0.5em bg:white w:15px h:50% r:7em b:0.4px|solid|gray"></NavLink>
                            <NavLink to='/listen-notes' className="mr:0.5em bg:white w:15px h:50% r:7em b:0.4px|solid|gray"></NavLink>
                        </div>

                        <div className="w:30% h:40px flex font:35px align-items:center justify-content:space-evenly px:0.7em ">
                            {/* <button to='' className="flex align-items:center bg:transparent b:none outline:none cursor:pointer">
                                <ion-icon name="chevron-back-circle-outline"></ion-icon>
                            </button>
                            <button className="flex align-items:center bg:transparent b:none outline:none cursor:pointer" >
                                <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                            </button> */}
                        </div>
                        
                    </div>
                </div>
                <div className="flex justify-content:center align-items:center mb:1.6em@<sm">
                    <img className='w:80% w:100%@<sm' src='https://cdn.you.com/img/images/developers-page/developers-success-story-screenshot.png' alt='success-story'/>
                </div>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default SuccessStory;