<template>
    <section class="section-one-cont">
        <div class="explore">
            <div class="explore-topic">
                Explore Opportunities <br> In the Global Markets
            </div>
            <div class="explore-img">
                <img src="../assets/Green stroke 1.svg" alt="stroke">
            </div>
        </div>
            <div class="sub-topic">
                Join millions of smart Nigerians currently earning extra income from trading.
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
        font-weight: 900;
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
            font-size: 8vw;
            text-align: center;
            font-family: 'Proxima Nova';
            line-height: 55px !important;
        }

        .explore-img {
            width: 60%; 
        }

        .explore-img img {
            width: 100%;
        }

        .mobile {
            display: block;
        }

        .sub-topic {
            font-size: 20px;
        }

        .section-one-cont {
            background: url('../assets/mobile/MH.png');
            background-repeat: no-repeat;
            background-position-x: right;
            background-size: cover;
            height: 929px;
            color: #fff;
            position: relative;
            padding: 60px 44px
        }

        .second-ball {
            top: 65%;
            left: 25%;
        }

        .third-ball {
            top: 72%;
            left: 50%;
        }

        .first-ball {
            top: 75% ;
            left: 5%;
        }
    
        .button-cont, .sub-topic {
            margin-top: 65px;
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
</style>