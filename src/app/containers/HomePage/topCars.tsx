import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ICar } from '../../../typings/car';
import { Car } from '../../components/car';
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';
import carService from '../../services/carService';
import { GetCars_cars } from '../../services/carService/-watch/GetCars';
import { setTopCars } from './slice';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectTopCars } from './selectors';

const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `};
`;

const Title = styled.h2`
    ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `};
`;

const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
    setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
    topCars
}));

export function TopCars() {
    const [current, setCurrent] = useState(0);

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    const { topCars } = useSelector(stateSelector);

    const { setTopCars } = actionDispatch(useDispatch());

    const fetchTopCars = async () => {
        const cars = await carService.getCars().catch((err) => {
            console.log("Error: ", err);
        });

        console.log("Cars: ", cars);
        
        if(cars) {
            setTopCars(cars);
        }
    };

    const testCar: ICar = {
        name: "Audi S3 Car",
        mileage: "10K",
        thumbnailSrc: "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol"
    };

    const testCar2: ICar = {
      name: "HONDA cITY 5 Seater Car",
      mileage: "20k",
      thumbnailSrc:
        "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
      dailyPrice: 50,
      monthlyPrice: 1500,
      gearType: "Auto",
      gas: "Petrol",
    };

    useEffect(() => {
        fetchTopCars();
    }, []);

    const isEmptyTopCars = !topCars || topCars.length === 0;
    console.log("Top Cars: "+ topCars);

    // const carss = (!isEmptyTopCars && topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl} />)) || [];

    // const cars = !isEmptyTopCars && topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl} />) || [];

    console.log("Is Empty Top Cars: "+ isEmptyTopCars);

    const cars = [
        (<Car {...testCar2} />), 
        (<Car {...testCar} />), 
        (<Car {...testCar2} />), 
        (<Car {...testCar} />), 
        (<Car {...testCar2} />) 
    ];

    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    if (isEmptyTopCars) return null;

    return <TopCarsContainer>
        <Title>Export Our Top Deals</Title>
        <CarsContainer>
            <Carousel value={current} 
                onChange={setCurrent} 
                slides={ cars }
                plugins={[
                    "clickToChange",
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3,
                        }
                    }
                ]}
                breakpoints={{
                    640: {
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 1,
                                }
                            },
                        ]
                    },
                    900: {
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 2,
                                }
                            },
                        ]
                    }
                }}
            />
            <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
    </TopCarsContainer>
}
