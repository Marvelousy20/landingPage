<template>
    <section class="section-one-cont">
        <div class="explore">
            <div class="explore-topic">
                Explore Opportunities <br> In the Global Markets
            </div>
            <div class="explore-img small">
                <img src="../assets/Green stroke 1.svg" alt="stroke">
            </div>
             <div class="explore-img large">
                <img src="../assets/Green stroke 1.svg" alt="stroke">
            </div>
        </div>
        
        <!-- <div class="explore-img large">
            <img src="../assets/Green stroke 1.svg" alt="stroke">
        </div> -->

        <div class="sub-topic desktop">
            Join millions of smart Nigerians currently earning extra income from trading.
        </div>

        <div class="sub-topic mobile">
            Join millions of smart Nigerians <br> currently earning extra income <br> from trading.
        </div>
        
        <div class="button-cont">
            <!-- <a href="#"> 
                <img src="../assets/Button without padding.svg" alt="button.png">
            </a> -->
            <a href="#" class="btn-primary button">Open an account</a>
        </div>
        
        <!-- <div class="desktop balls">
            <div class="first-ball"><img src="../assets/Oil.png" alt="oil.png"></div>
            <div class="second-ball"><img src="../assets/Gold.png" alt="gold.png"></div>
            <div class="third-ball"><img src="../assets/EUR-USD.png" alt="euro.png"></div>
        </div> -->
         <!-- <div class="balls mobile">
            <div class="first-ball"><img src="../assets/Oil mobile.svg" alt="oil.png"></div>
            <div class="second-ball"><img src="../assets/Gold mobile.svg" alt="gold.png"></div>
            <div class="third-ball"><img src="../assets/EUR-USD mobile.svg" alt="euro.png"></div>
        </div> -->
    </section>
</template>

<style scoped>
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
        max-width: 41.5rem;
    }

    .mobile {
        display: none;
    }

    .large {
        display: none;
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

    .explore-img {
        align-self: flex-end !important;
        width: 63%;
        margin-right: 70px !important;
    }

    .explore-img img {
        width: 100%;
    }

    .sub-topic {
        font-family: 'Proxima Nova Light';
        font-size: 34px;
        font-weight: 300;
        max-width: 625px;
    }
/* 
    .first-ball {
        position: absolute;
        top: 55%;
        bottom: 0;
        left: 50%;
        right: 0;
    }

    .second-ball {
        position: absolute;
        top: 43.9%;
        bottom: 0;
        left: 58%;
        right: 0;
    }

    .third-ball {
        position: absolute;
        top: 54%;
        bottom: 0;
        left: 67%;
        right: 0;
    } */

    @media screen and (max-width: 700px) {
        .desktop {
            display: none;
        }

        .explore-topic {
            font-size: 7vw;
            text-align: center;
            font-family: 'Proxima Nova';
            line-height: 40px !important;
        }

        .explore-img {
            align-self: flex-end !important;
            max-width: 400px; 
        }

        .explore-img img {
            width: 80%;
            float: right;
        }

        .mobile {
            display: block;
        }

        .sub-topic {
            font-size: 1.7rem;
            /* max-width: 300px; */
            text-align: center;
            margin: 0 auto;
        }

        .section-one-cont {
            background: url('../assets/mobile/MH.png');
            background-repeat: no-repeat;
            background-position-x: right;
            background-size: cover;
            height: 1394.5px !important;
            color: #fff;
            /* position: relative; */
            padding: 165px 30px
        }

        .button {
            padding: 1.6rem 2rem;
        }

        .button-cont {
            text-align: center;
        }
    
        .button-cont, .sub-topic {
            margin-top: 70px;
        }
    }
    
    @media screen and (max-width: 1199px) and (min-width: 850px) {
       .section-one-cont {
            background: url('../assets/MH.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position-y: bottom;
        }

        .explore-img {
            width: 50%;
            padding-right: 50px;
        }

        .explore-img img {
            width: 100%;
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
        .section-one-cont {
            background: url('../assets/MH.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position-y: bottom;
        }

        .explore-img {
            width: 50%;
            padding-right: 50px;
        }

        .explore-img img {
            width: 100%;
        }

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .second-ball {
            top: 60%;
            left: 55%;
        }

        .third-ball {
            top: 65%;
            left: 66%;
        }

        .first-ball {
            top: 70% ;
            left: 45%;
        }
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
        .explore-img {
            align-self: flex-start !important;
            width: 50%;
            margin-right: 65px !important;
        }

        .explore-img {
            max-width: 850px;
        }

        .explore-img img {
            width: 70%;
            float: right;
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

    @media screen and (max-width: 414px) {
        .section-one-cont {
            background: url('../assets/MH.png');
            background-repeat: no-repeat;
            background-position: right;
            background-size: cover;
            padding: 105px 30px;
            height: 200vh !important;
        }

        .sub-topic {
            font-size: 1.2rem;
            max-width: 300px;
            line-height: 30px;
            text-align: center;
            margin: 50px auto;
        }

        .button {
            padding: 1.2rem 1.7rem;
        }

        .explore-img {
            align-self: flex-end !important;
            max-width: 500px; 
            position: absolute;
            top: 250px;
            left: 80px;
        }

        .explore-img img {
            width: 75%;
            float: right;
        }

        .button-cont a {
            font-family: 'Proxima Nova Light';
            font-size: 22px;
        }
    }
</style>