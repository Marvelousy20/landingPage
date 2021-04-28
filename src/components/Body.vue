<template functional>
    <section class="section-one-cont">
        <div class="explore">
            <picture class="desktop">
                <source srcset="../assets/hero.webp" type="image/webp">
                <source srcset="../assets/hero.png" type="image/png"> 
                <img src="../assets/hero.png" alt="Image">
            </picture>
            <div class="explore-topic mb-2">
                Explore Opportunities <br> In the <span class="global">Global Markets
                    <img src="../assets/Green stroke 1.svg" class="stroke" alt="stroke">
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
            <a href="https://clients.eagleglobalmarkets.com/#/" class="btn-primary button">Open an account</a>
        </div>
    </section>
</template>

<style scoped>
    .global {
        position: relative;
    }

    picture {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
    }

    picture source, img {
        width: 100%;
        /* height: 929px; */
    }

    .global img {
        position: absolute;
        top: 3.7rem;
        left: 0;
        width: 100%;
    }

    .section-one-cont {
        /* background: url('../assets/hero.webp'); */
        /* background-repeat: no-repeat;
        background-position-x: right;
        background-size: cover; */
        /* height: 929px; */
        color: #fff;
        position: relative;
        padding: 6.25em;
        padding-top: 5em;
        /* bottom: 100px; */
        margin-bottom: 120px;
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
        position: relative;
    }

    .button-cont {
        margin-top: 90px;
        position: relative;
    }

    .button-cont a {
        font-family: 'Proxima Nova Regular';
        font-size: 24px;
    }

    .explore-topic {
        font-family: 'Proxima Nova Bold';
        font-size: 4.5vw;
        line-height: 75px !important;
        position: relative;
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
            font-family: 'Proxima Nova Bold';
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
            /* background: url('../assets/mobile/heroa.png'); */
            background-repeat: no-repeat;
            background-position-x: right;
            background-size: cover;
            padding: 25px 30px;
            /* height: 1000px;  */
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
            background: url('../assets/mobile/new.png');
            background-repeat: no-repeat;
            background-position: right;
            background-size: cover;
            padding: 5px 30px;
            height: 1250px !important;
            line-height: 45px !important;
        }

        .explore {
            display: flex;
            flex-direction: column;
            margin-top: 100px;
        }

        .explore-topic {
            line-height: 3.5rem !important;
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
            background-repeat: no-repeat;
            background-size: cover;
            height: 1200px;
            background-position-y: bottom;
        }

        .explore-topic {
            line-height: 65px !important;
        }
    }

    @media screen and (max-width: 850px) and (min-width: 701px) {
        .section-one-cont {
            /* background: url('../assets/mobile/b.png'); */
            /* background: url('../assets/mobile/new.png'); */
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right;
            height: 1750px; 
            color: #fff;
        }

        .explore-topic {
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
        }

        .button {
            padding: 1.9rem 2.4rem;
        }

        .button-cont a {
            font-size: 24px;
        }
    }

    @media screen and (min-width: 1400px){
        .explore-topic {
            font-family: 'Proxima Nova Bold' !important;
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
            font-family: 'Proxima Nova Bold' !important;
            line-height: 90px !important;
        }

        .stroke {
            display: inline-block;
            margin-top: 10px !important;
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

     @media screen and (max-width: 500px) {
        .section-one-cont {
            background: url('../assets/mobile/new.webp');
            background-repeat: no-repeat;
            background-position: right;
            background-size: cover;
            padding: 5px 30px;
            height: 1100px !important;
            line-height: 45px !important;
            margin-bottom: 0;
        }

        .explore {
            margin-top: 100px;
        }

        .sub-topic {
            margin-top: 50px;
        }

        .button-cont, .sub-topic {
            margin-top: 50px;
        }

        .button {
            padding: 1.3rem 2.7rem;
            background: #146CE2;
            border-radius: 12px;
            outline: none;
            border: none;
        }

        .global img {
            position: absolute;
            top: 2.3rem;
            left: 0;
            width: 100%;
        }

        .button-cont a {
            font-size: 17px;
        }
    }

    @media screen and (max-width: 375px) {
        .section-one-cont {
            height: 1000px !important;
        }

        .explore {
            margin-top: 50px !important;
        }
    }

    @media screen and (max-width: 350px) {
        .section-one-cont {
            height: 850px !important;
        }

        .explore {
            margin-top: 40px !important;
        }
    }
</style>