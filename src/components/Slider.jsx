import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
// import slider style
import "../styles/slider.css"

function cards(cardsArray, cardNumber){
    return cardsArray.slice(0, cardNumber)
}

class Slider extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        const cardsArray = [
            {
                "img": "https://picsum.photos/200/300",
                "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                "subtitle": "1 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "I love bonbon oat cake caramels",
                "subtitle": "2 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/chi-siamo/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Tootsie roll I love fruitcake pastry tart jelly",
                "subtitle": "3 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/user-experience-design-roma/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                "subtitle": "4 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "I love bonbon oat cake caramels",
                "subtitle": "5 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/chi-siamo/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Tootsie roll I love fruitcake pastry tart jelly",
                "subtitle": "6 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/user-experience-design-roma/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                "subtitle": "7 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "I love bonbon oat cake caramels",
                "subtitle": "8 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/chi-siamo/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Tootsie roll I love fruitcake pastry tart jelly",
                "subtitle": "9 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/user-experience-design-roma/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                "subtitle": "10 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "I love bonbon oat cake caramels",
                "subtitle": "11 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/chi-siamo/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Tootsie roll I love fruitcake pastry tart jelly",
                "subtitle": "12 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/user-experience-design-roma/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                "subtitle": "13 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "I love bonbon oat cake caramels",
                "subtitle": "14 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/chi-siamo/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Tootsie roll I love fruitcake pastry tart jelly",
                "subtitle": "15 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/user-experience-design-roma/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                "subtitle": "16 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "I love bonbon oat cake caramels",
                "subtitle": "17 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/chi-siamo/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Tootsie roll I love fruitcake pastry tart jelly",
                "subtitle": "18 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/user-experience-design-roma/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                "subtitle": "19 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/"
            },
            {
                "img": "https://picsum.photos/200/300",
                "title": "I love bonbon oat cake caramels",
                "subtitle": "20 icing toffee sweet rool tootsie roll jelly apple pie.",
                "link": "https://www.nois3.it/chi-siamo/"
            },
        ];
                
        return (
            <div className='relative'>
                <Swiper
                slidesPerView={1}
                spaceBetween={50}
                centeredSlides={true}
                loop={true}
                pagination={{
                  clickable: true
                }}
                navigation={ true}
                modules={[ Pagination, Navigation]}
                breakpoints={{
                    481: {
                        slidesPerView: 2
                    },
                    768:{
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                  }}
                className="mySwiper"
                >

                {cards(cardsArray, this.props.cardNumber).map((card, i) => {
                return (
                    <SwiperSlide key={i}>
                        <div className="card-container bg-white p-6 flex flex-col rounded-3xl h-full justify-between text-center shadow-xl">
                            <img src={card.img} alt={card.title} className="rounded-full mx-auto"/>
                            <div>
                                <p className="text-2xl pb-2 font-semibold">{card.title}</p>
                                <p className="text-xl">{card.subtitle}</p>
                            </div>
                            <a href={card.link} className="btn rounded-lg self-center bg-btn text-white active:bg-white">Button</a>
                        </div>
                    </SwiperSlide>
                );
                })}
                </Swiper>
            </div>
        );
    }
};

export default Slider;