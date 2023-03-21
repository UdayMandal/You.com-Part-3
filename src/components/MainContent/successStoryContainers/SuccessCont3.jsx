import '@master/css';
const Container = () => {
    return(
        <div className="w:100% h:100% color:gray-48 position:relative">
            <p>Podcast is an important media format on modern Internet. Being able to discover podcasts directly on You.com is awesome! The You.com team was very helpful and responsive when we integrated our Podcast API to You.com.</p>
            <div className="position:absolute bottom:0 left:0 w:100% ">
                <h2 className="m:0 ml:1.5em color:gray-40">Wenbin Fang</h2>
                <div className="flex justify-content:space-evenly align-items:center">
                    <span className='color:gray-48'>Founder & CEO at ListenNotes.com</span>
                    <span>
                        <img src='https://cdn.you.com/img/images/developers-page/success-story-logos/listennotes-logo.png' alt='listen notes'/>
                    </span>
                </div>
            </div>
            
            
        </div>
    )
}

export default Container;