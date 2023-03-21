import '@master/css';

const LovedTwitter = () => {

    const card = [
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/icon-twitter.svg' alt='twitter-logo' />,
            msg: "This is absolutely amazing. I’ve only used it for a few minutes and it is already clear that YouCode will be part of my workflow from now on. The way we work will be completely unrecognisable in a few years. Can't wait.",
            profilePic:<img src='https://cdn.you.com/img/images/developers-page/testimonials/avatar1.png' alt='profile-pic' />,
            name: "Nicolas J."
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/icon-twitter.svg' alt='twitter-logo' />,
            msg: "I've made @YouSearchEngine the recommended search engine for my employees at my tech startup after using it myself for 3 weeks. It really is the best thing out there for engineers right now.",
            profilePic:<img src='https://cdn.you.com/img/images/developers-page/testimonials/avatar2.png' alt='profile-pic' />,
            name: "Toby T."
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/icon-twitter.svg' alt='twitter-logo' />,
            msg: "First time I didn't get a good result from Google but @YouSearchEngine came to the rescue, the hype is real.",
            profilePic:<img src='https://cdn.you.com/img/images/developers-page/testimonials/avatar3.png' alt='profile-pic' />,
            name: "Joao G."
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/icon-twitter.svg' alt='twitter-logo' />,
            msg: "I wanted to write a referral for a friend and needed to submit some convincing paragraph… so I used @YouSearchEngine's text generation tool (PS: they moved forward with his application :)) )",
            profilePic:<img src='https://cdn.you.com/img/images/developers-page/testimonials/avatar4.png' alt='profile-pic' />,
            name: "Mohamed A. R."
        }
    ]

    return(
        <div className='w:100% py:4em flex flex-direction:column gap:0.5em align-items:center '>
            <div className='mb:5em'>
                <h1 className='text-align:center font:34px'>Built by you.<br/>Loved by everyone.</h1>
            </div>
            <div className='w:100% d:grid grid-auto-flow:row grid-template-columns:repeat(2,1fr) grid-template-columns:repeat(1,1fr)@<sm mb:2.5em@<sm gap:100|0 px:8em px:4em@<sm'>
                {card.map(e=>{
                    return(
                        <div className='w:80% w:100%@<sm min-h:380px position:relative gap:5em r:1.5em bg:white py:2em px:2.2em  box-shadow:0|0|0.8em|gray-72'>
                            <span>{e.logo}</span>
                            <p className='font:18px mt:1.5em'>{e.msg}</p>
                            <div className='w:50% flex position:absolute bottom:0.4em justify-content:flex-start align-items:center mt:1em'>
                                {e.profilePic}
                                <span className='font:15px ml:1em'>{e.name}</span>
                            </div>          
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LovedTwitter;