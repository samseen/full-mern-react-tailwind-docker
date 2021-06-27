import React from "react";
import styled from "styled-components";
import { ICar } from "../../../typings/car";
import tw from 'twin.macro';

interface ICarProps extends ICar {

}

const CarContainer = styled.div`
    min-width: 16.5em;
    min-height: 22.2em; 
    max-height: 22.2em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);

    ${tw`
        flex
        flex-col
        item-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `};
`;

export function Car(props: ICarProps) {

}