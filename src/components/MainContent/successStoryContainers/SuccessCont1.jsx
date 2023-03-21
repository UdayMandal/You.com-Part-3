import '@master/css';

const Container = () => {
    return(
        <div className="w:100% h:100% color:gray-48 position:relative">
            <p>Consumers face many challenges in the current environment, including inflation and other issues straining their budgets. Allowing shoppers to discover the best prices directly on You.com is amazing.</p>

            <div className="position:absolute bottom:0 left:0 w:100% ">
                <h2 className="m:0 ml:1.5em color:gray-40" >RJ Jain</h2>
                <div className="flex justify-content:space-evenly align-items:center">
                    <span className='color:gray-48'>Founder & CEO of Price.com</span>
                    <span><img src='https://cdn.you.com/img/images/developers-page/success-story-logos/price-logo.png' alt='price.com'/></span>
                </div>
            </div>
        </div>
    )
}

export default Container;
