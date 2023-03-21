import '@master/css';

const Branding = () => {

    const brandNames = [
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/brand-logos/brand-01.png' alt='open-ai'/>,
            name:"Open AI"
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/brand-logos/brand-02.png' alt='open-ai'/>,
            name:"Stability AI"
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/brand-logos/brand-03.png' alt='open-ai'/>,
            name:"Price.com"
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/brand-logos/brand-04.png' alt='open-ai'/>,
            name:"Looria"
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/brand-logos/brand-05.png' alt='open-ai'/>,
            name:"Unstoppable Domains"
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/brand-logos/brand-06.png' alt='open-ai'/>,
            name:"EVRTHN"
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/brand-logos/brand-07.png' alt='open-ai'/>,
            name:"Listen notes"
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/brand-logos/brand-08.png' alt='open-ai'/>,
            name:"Lexica"
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/brand-logos/brand-09.png' alt='open-ai'/>,
            name:"Genius"
        },
        {
            logo:<img src='https://cdn.you.com/img/images/developers-page/brand-logos/brand-10.png' alt='open-ai'/>,
            name:"Rye"
        },
    ]

    return(
        <>
        <div className="w:100% flex flex-direction:column justify-content:center py:4em bg:gray-90">
            <h2 className='color:gray-50 text-align:center mb:1.4em'>250+ successful businesses and counting</h2>
            <div className='brands w:100% w:200%@<sm flex justify-content:space-evenly color:gray-60'>
                {brandNames.map(e=>{
                    return(
                        <div className='flex flex-direction:column align-items:center justify-content:center w:8%'>
                            {e.logo}
                            <p className='word-break:break-all text-align:center'>{e.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Branding;