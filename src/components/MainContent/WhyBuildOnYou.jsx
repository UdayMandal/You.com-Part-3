import '@master/css';

const WhyBuild = () => {

    const whyDesc = [
        {
            logo:<img className='w:45px' src='https://cdn.you.com/img/images/developers-page/developers-why-build-exposure.svg' alt='why-logo'/>,
            heading:"Get more traffic and exposure",
            desc:"The you.com community of consumers, engineers, scientists, students and marketers is eagerly waiting for the next tool to try, test, and promote. Make the tool, we'll distribute it, at no additional expense."
        },
        {
            logo:<img className='w:45px' src='https://cdn.you.com/img/images/developers-page/developers-why-build-future.svg' alt='why-logo'/>,
            heading:"Build future of search",
            desc:"Build the most innovative app that shows up in the search results. Join us in building a better internet together."
        },
        {
            logo:<img className='w:45px' src='https://cdn.you.com/img/images/developers-page/developers-why-build-grow-revenue.svg' alt='why-logo'/>,
            heading:"Grow your revenue",
            desc:"More users means more revenue streams. We'll feature your app in search results, on front page, and in our communications."
        }
    ]

    return(
        <div className='mt:2em mt:6em@<sm h:700px h:auto@<sm flex flex-direction:column align-items:center justify-content:center'>
            <h1 className='font:35px text-align:center mb:1.5em'>Why build on you.com?</h1>
            <div className='flex h:320px h:auto@<sm justify-content:space-evenly flex-direction:column@<sm align-items:center w:100% mt:2em@<sm'>
                {whyDesc.map(e=>{
                    return(
                        <div className='w:30% w:60%@<sm py:2em px:1em h:100% mb:2.4em@<sm'>
                            <span className='w:100% display:inline-block text-align:center'>{e.logo}</span>
                            <h2 className='text-align:center m:0 my:0.6em '>{e.heading}</h2>
                            <p className='font:16px color:gray-12 text-align:center'>{e.desc}</p>
                        </div>
                    )
                })}
            </div>
            <div className='w:100% flex justify-content:center mb:5em@<sm mt:0.8em@<sm'>
                <button className=' bg:linear-gradient(45deg,blue-48,sky-62) b:none outline:none px:2em py:1em color:white font-weight:600 font:20px r:3em cursor:pointer bg:linear-gradient(45deg,blue-40,sky-56):hover'>Start Building</button>
            </div>
            
        </div>
    )
}

export default WhyBuild;