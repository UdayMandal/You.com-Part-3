import '@master/css';
import Branding from './Branding';
import WhyBuild from './WhyBuildOnYou';
import SuccessStory from './successStoryContainers/SuccessStory';
import Loved from './lovedbyeveryone/LovedByEveryone';
import GetMain from './getstarted/GetMain';

const Container = () => {
    return(
        <main className='w:100%'>
            <Branding/>
            <WhyBuild/>
            <SuccessStory/>
            <Loved/>
            <GetMain />
        </main>
    )
}

export default Container;