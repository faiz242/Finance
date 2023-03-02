import React from 'react'
import BackedSection from './landingPage/BackedSection'
import FooterSection from './landingPage/FooterSection'
import HeroModuleContainer from './landingPage/HeroModuleContainer'
import PortfolioCardContainer from './landingPage/PortfolioCardContainer'
import TeamMemberSection from './landingPage/TeamMemberSection'

function Home() {
    return (
        <div>
            <HeroModuleContainer />
            <PortfolioCardContainer />
            <TeamMemberSection />
            <BackedSection />
            <FooterSection />
        </div>
    )
}

export default Home