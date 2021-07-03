import React from 'react'
import tw from 'twin.macro';
import styled from 'styled-components';
import { Logo } from '../logo';

const FooterContainer = styled.div`
    min-height: 30em;
    background-color: rgba(31 42 76);
    ${tw`
        flex
        flex-wrap
        min-w-full
        pt-7
        pb-1
    `};
`;

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
    `};
`;

export function Footer() {
    return <FooterContainer>
        <AboutContainer>
            <Logo color="white" bgColor="dark" />
        </AboutContainer>
    </FooterContainer>
}
