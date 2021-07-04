import React from 'react'
import tw from 'twin.macro';
import styled from 'styled-components';
import { Logo } from '../logo';

const FooterContainer = styled.div`
    min-height: 30em;
    background-color: rgba(31 42 76);
    ${tw`
        flex
        min-w-full
        pt-7
        pb-1
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        max-w-screen-2xl
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
        <InnerContainer>
            <AboutContainer>
                <Logo color="white" bgColor="dark" />
            </AboutContainer>
        </InnerContainer>
    </FooterContainer>
}
