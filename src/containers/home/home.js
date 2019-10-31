import React from 'react';
import Layout from '../../Components/layout/layout';
import SectionOne from '../../Components/sectionOne/sectionOne'
import MemberSection from '../../Components/membersSection/membersSection'
import ChapterSection from '../../Components/ChapterOne-Section/ChapterOne'
import BelowMap from '../../Components/BelowMap/BelowMap'
import BelowSlider from '../../Components/BelowSlider/BelowSlider-Form'
import Section6 from '../../Components/Section.6/Section6'
import Section7 from '../../Components/Section7/section7'
import Sectioneight from '../../Components/sectionEight/sectionEight'
import SectionNine from '../../Components/sectionNine/sectionNine'
import SectionTen from '../../Components/sectionten/sectionTen'
import Section11 from '../../Components/section11/Section11'
import Section12 from '../../Components/section12/section12'

export default () => {
    return (
        <Layout>

            <MemberSection/>
            <ChapterSection/> 
            <SectionOne/>
            <BelowMap/>
            <BelowSlider/>
            <Section6/>
            <Section7/>
            <Sectioneight/>
            <SectionNine/>
            <SectionTen/>
            <Section11/>
            <Section12/>

        </Layout>
    );
}