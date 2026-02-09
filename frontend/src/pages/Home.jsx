import React from 'react'
import FullPageHero from '../components/FullPageHero'
import MobileHero from '../components/MobileHero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
    return (
        <div>
            <div className="hidden md:block">
                <FullPageHero />
            </div>
            <div className="block md:hidden">
                <MobileHero />
            </div>
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsletterBox />
        </div>
    )
}

export default Home