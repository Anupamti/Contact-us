import React from 'react'
import { FooterBottom, FooterContainer, FooterLeft, FooterTop, LeftContainerOne, LeftContainertwo } from '../FooterStyles'


function FooterComp({ title, Icon, detail }) {

    return (
        <FooterLeft>
            <FooterTop>
                <LeftContainerOne bold={true}>
                    {title}
                </LeftContainerOne>
                <LeftContainertwo>
                    {/* {Icon} */}
                </LeftContainertwo>

            </FooterTop>
            <FooterBottom>
                {detail}
            </FooterBottom>
        </FooterLeft>
    )
}

export default FooterComp
