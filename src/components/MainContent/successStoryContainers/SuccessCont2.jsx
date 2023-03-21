import '@master/css';
const Container = () => {
    return(
        <div className="w:100% h:100% color:gray-48 position:relative">
            <p>With You.com integrating Unstoppable Web3 domain results into their innovative search platform, we're bringing Web3 domains to the people instead of having them come to us!</p>

            <div className="position:absolute bottom:0 left:0 w:100% ">
                <h2 className="m:0 ml:1.5em color:gray-40">Sandy Carter</h2>
                <div className="flex justify-content:space-evenly align-items:center">
                    <span className='color:gray-48'>SVP at Unstoppable Domains</span>
                    <span>
                        <img src='https://cdn.you.com/img/images/developers-page/success-story-logos/unstoppable-logo.png' alt='unstoppable domains'/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Container;