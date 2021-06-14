import React from 'react'
import FooterComp from './FooterComp/FooterComp'
import { FooterBottom, FooterContainer, FooterIcons, FooterLeft, FooterMain, FooterRight, FooterRound, FooterTop, LeftContainerOne, LeftContainertwo, RightContainerOne, RightContainertwo } from './FooterStyles'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
    return (
        <FooterMain>
            <FooterContainer>
                {/* LeftContiner Main */}
                <FooterLeft>
                    <FooterTop>
                        {/* LeftContainer Address*/}
                        <LeftContainerOne>
                            <FooterComp
                                title="OurAddress"
                                Icon={LocationOnIcon}
                                detail="Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                            />
                        </LeftContainerOne>
                        {/* LeftContainer Callus*/}
                        <LeftContainertwo>
                            <FooterComp
                                title="OurAddress"
                                Icon={LocationOnIcon}
                                detail="Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                            />
                        </LeftContainertwo>
                    </FooterTop>
                    <FooterBottom>
                        {/* LeftContainer Email US*/}
                        <LeftContainerOne>
                            <FooterComp
                                title="OurAddress"
                                Icon={LocationOnIcon}
                                detail="Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                            />
                        </LeftContainerOne>
                        {/* LeftContainer Open Hours*/}
                        <LeftContainertwo>
                            <FooterComp
                                title="OurAddress"
                                Icon={LocationOnIcon}
                                detail="Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                            />
                        </LeftContainertwo>
                    </FooterBottom>

                </FooterLeft>
                {/* Right Container */}
                <FooterRight>

                    <FooterIcons>
                        {/* Facebook */}
                        <FooterRound>
                            <FacebookIcon />
                        </FooterRound>
                    </FooterIcons>

                    <FooterIcons>
                        {/* Insta */}
                        <FooterRound>
                            <InstagramIcon />
                        </FooterRound>
                    </FooterIcons>

                    <FooterIcons>
                        {/* Linked */}
                        <FooterRound>
                            <LinkedInIcon />
                        </FooterRound>
                    </FooterIcons>
                </FooterRight>
            </FooterContainer>
        </FooterMain>
    )
}

export default Footer

