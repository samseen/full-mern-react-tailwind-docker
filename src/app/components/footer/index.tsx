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
        pt-4
        md:pt-12
        pb-1
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
    ${tw`
        flex
        w-full
        h-full
        max-w-screen-2xl
    `};
`;

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-2
        md:mr-12
    `};
`;

const AboutText = styled.p`
    ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
    `};
`;

const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-3
    `};
`;

const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `};
`;

const ListItem = styled.li`
    ${tw`
        mb-3
    `};

    & > a {
        ${tw`
            text-sm
            text-white
        `};
    }
`;

const HeaderTitle = styled.h3`
    ${tw`
        text-base
        font-bold
        text-white
        mb-3
    `};
`;

export function Footer() {
    return <FooterContainer>
        <InnerContainer>
            <AboutContainer>
                <Logo color="white" bgColor="dark" />
                <AboutText>Yourcar is a Car renting and selling company located in many countries across the world which has high quality cars and top rated service.</AboutText>
            </AboutContainer>
            <SectionContainer>
                <HeaderTitle>Our Links</HeaderTitle>
                <LinksList>
                    <ListItem><a href="#">Home</a></ListItem>
                    <ListItem><a href="#">About Us</a></ListItem>
                    <ListItem><a href="#">Services</a></ListItem>
                    <ListItem><a href="#">Models</a></ListItem>
                    <ListItem><a href="#">Blog</a></ListItem>
                </LinksList>
            </SectionContainer>
        </InnerContainer>
    </FooterContainer>
}
