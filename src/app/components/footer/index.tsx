import React from 'react'
import tw from 'twin.macro';
import styled from 'styled-components';

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

export function Footer() {
    return <FooterContainer>
        Container
    </FooterContainer>
}
