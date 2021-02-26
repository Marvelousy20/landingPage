<template>
    <section class="section-one-cont">
        <div class="explore">
            <div class="explore-topic mb-2">
                Explore Opportunities <br> In the <span class="global">Global Markets
                    <img src="../assets/Green stroke 1.svg" alt="stroke">
                </span>
            </div>
        </div>

        <div class="sub-topic desktop">
            Join millions of smart Nigerians currently earning extra income from trading.
        </div>

        <div class="sub-topic mobile">
            Join millions of smart Nigerians <br> currently earning extra income <br> from trading.
        </div>
        
        <div class="button-cont">
            <a href="#" class="btn-primary button">Open an account</a>
        </div>
        
        <div class="balls mobile phone">
            <div class="first-ball"><img src="../assets/Oil mobile.svg" alt="oil.png"></div>
            <div class="second-ball"><img src="../assets/Gold mobile.svg" alt="gold.png"></div>
            <div class="third-ball"><img src="../assets/EUR-USD mobile.svg" alt="euro.png"></div>
        </div>
    </section>
</template>

<style scoped>
    .global {
        position: relative;
    }

    .global img {
        position: absolute;
        top: 3.7rem;
        left: 0;
        width: 100%;
    }

    .section-one-cont {
        /* background: url('../assets/Component 7 – 1.png'); */
        background: url('../assets/hero.png');
        background-repeat: no-repeat;
        background-position-x: right;
        background-size: cover;
        height: 929px;
        color: #fff;
        position: relative;
        padding: 6.25em;
    }

    .button {
        padding: 1.6rem 3rem;
        background: #146CE2;
        border-radius: 20px;
        outline: none;
        border: none;
    }

    .mobile {
        display: none;
    }

    .button:hover {
        text-decoration: none;
    }

    .explore {
        display: flex;
        flex-direction: column;
        margin-top: 70px;
    }

    .sub-topic {
        margin-top: 70px;
        line-height: 44px;
    }

    .button-cont {
        margin-top: 90px;
    }

    .button-cont a {
        font-family: 'Proxima Nova Light';
        font-size: 24px;
    }

    .explore-topic {
        font-family: 'Proxima Nova';
        font-size: 4.5vw;
        line-height: 75px !important;
    }

    .sub-topic {
        font-family: 'Proxima Nova Light';
        font-size: 34px;
        font-weight: 300;
        max-width: 625px;
    }

    @media screen and (max-width: 700px) {
        .desktop {
            display: none;
        }

        .phone {
            display: none !important;
        }

        .explore-topic {
            font-size: 8vw;
            text-align: center;
            font-family: 'Proxima Nova';
            line-height: 2.5rem !important;
        }

        .mobile {
            display: block;
        }

        .sub-topic {
            font-size: 5vw !important;
            text-align: center;
            margin: 0 auto;
            line-height: 2rem;
        }

        .section-one-cont {
            background: url('../assets/mobile/herob.png');
            background-repeat: no-repeat;
            background-position-x: right;
            background-size: cover;
            padding: 25px 30px;
            height: 1000px; 
            color: #fff;
        }

        .button {
            padding: 1.3rem 1.8rem;
        }

        .button-cont a {
            font-size: 19px;
        }

        .button-cont {
            text-align: center;
        }
    
        .button-cont, .sub-topic {
            margin-top: 70px;
        }
    }

    @media screen and (max-width: 700px) and (min-width: 500px) {
        .section-one-cont {
            background: url('../assets/medium.png');
            background-size: cover;
            color: #fff;
        }

        .explore-topic {
            line-height: 3.5rem !important;
        }

        .explore {
            /* margin-top: 8rem; */
        }

        .button {
            padding: 1.3rem 1.8rem;
        }

        .button-cont a {
            font-size: 19px;
        }
    }
    
    @media screen and (max-width: 1199px) and (min-width: 850px) {
       .section-one-cont {
            background: url('../assets/MH.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position-y: bottom;
        }

        .second-ball {
            top: 55%;
            left: 55%;
        }

        .third-ball {
            top: 64%;
            left: 70%;
        }

        .first-ball {
            top: 70% ;
            left: 45%;
        }
    }

    @media screen and (max-width: 850px) and (min-width: 700px) {
        /* .section-one-cont {
            background: url('../assets/mobile/herob.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position-y: bottom;
            height: 1500px;
            padding-top: 50px !important;
        } */

        /* .explore-topic {
            line-height: 55px !important;
            font-size: 50px !important;
            text-align: center;
        }

        .sub-topic {
            text-align: center;
        }

        .button-cont {
            text-align: center;
        }

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .balls {
            display: none;
        } */
    }

    @media screen and (min-width: 1400px){
        .explore-topic {
            font-family: 'Proxima Nova';
            font-size: 4.5vw;
            line-height: 75px !important;
        }

        .explore {
            max-width: 100%;
        }
    
        .large {
            display: block;
        }

        .small {
            display: none;
        }
    }

    @media screen and (min-width: 1500px) {
        .explore-topic {
            font-family: 'Proxima Nova';
            line-height: 90px !important;
        }
    }

    @media screen and (max-width: 700px) {
        .section-one-cont {
            /* background: url('../assets/MH.png'); */
            /* background: url('../assets/mobile/herob.png');
            background-repeat: no-repeat;
            background-position: right;
            background-size: cover;
            padding: 25px 30px;
            height: 1000px !important; */
            /* line-height: 45px !important; */
        }

        /* .sub-topic {
            font-size: 21px;
            max-width: 300px;
            line-height: 30px !important;
            text-align: center;
            margin: 65px auto;
        } */

        .explore-topic {
            /* line-height: 40px !important; */
        }

        /* .button {
            padding: 1.2rem 1.7rem;
        }

        .button-cont a {
            font-family: 'Proxima Nova Light';
            font-size: 22px;
        } */

        .first-ball {
            position: absolute;
            top: 120%;
            bottom: 0;
            left: 30%;
            right: 0;
        }

        .second-ball {
            position: absolute;
            top: 210px;
            bottom: 0;
            left: 180px;
            right: 0;
        }

        .third-ball {
            position: absolute;
            top: 54%;
            bottom: 0;
            left: 67%;
            right: 0;
        }
    }

    @media screen and (max-width: 650px) {
        .global img {
            position: absolute;
            top: 3rem;
            left: 0;
            width: 100%;
        }
    }

     @media screen and (max-width: 450px) {
        .global img {
            position: absolute;
            top: 2.3rem;
            left: 0;
            width: 100%;
        }
    }
</style>