<template>
    <div class="container-fluid">
        <div class="uncover-cont">
            <div class="uncover desktop d">
                Uncover a trading experience <br> that’s built just for you.
            </div>
        </div>
        
        <div class="uncover mobile uncover-mobile">Uncover a trading <br> experience that’s built <br> just for you.</div>
        
        <div class="img-text-cont mt-5">
            <div>
                <img class="img left desktop" src="../assets/XMLID_806_.svg" alt="">
                <img class="img mobile" src="../assets/mobile/XMLID_806_.png" alt="">
                <div class="text mt-3">Fast trade execution <br> &lt; 12.00 ms</div>
            </div>
            
            <div class="line">
                <img class="desktop a" src="../assets/Component 3 – 1.svg" alt="">
                <img class="mobile" src="../assets/Component 2 – 2.svg" alt="">
            </div>

            <div class="central">
                <img class="img desktop" src="../assets/stock-market (2).svg" alt="">
                <img class="img mobile" src="../assets/mobile/stock-market (2).png" alt="">
                <div class="text mt-3">1000+ Assets to trade <br> on 3 unique platforms</div>
            </div>

            <div class="line">
                <img class="desktop a" src="../assets/Component 3 – 1.svg" alt="">
                <img class="mobile" src="../assets/Component 2 – 2.svg" alt="">
            </div>

            <div>
                <img class="img desktop" src="../assets/wallet.svg" alt="">
                <img class="img mobile" src="../assets/mobile/wallet.png" alt="">
                <div class="text mt-3">100% funds safety <br> guaranteed</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container-fluid {
        color: #fff;
        background-image: url('../assets/MaskGroup5.svg');
        background-color:rgb(1,12,19);
        padding: 120px 0;
    }

    .uncover {
        font-size: 3.5vw;
        text-align: center;
        margin: 20px 0;
        margin-bottom: 120px;
        font-family: 'Proxima Nova SemiBold';
        line-height: 63px;
    }

    .d {
        margin-left: 90px;
    }

    .mobile {
        display: none;
    }

    .img-text-cont {
        display: flex;
        text-align: center;
        margin-left: 100px !important;
        margin-right: 100px !important;
        justify-content: space-between;
        margin: 0 auto;
        font-family: 'Proxima Nova Regular';
        font-weight: 100 !important;
    }

    .img-text-cont div>div {
        max-width: 400px;
        font-size: 29px;
    }

    .img {
        margin-bottom: 25px;
    }

    @media screen and (max-width: 700px) {
        .container-fluid {
            padding-top: 60px;
            padding-bottom: 60px ;
        }

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .img {
            text-align: center !important;
            margin: 0 auto;
            margin-bottom: 26px;
        }

        .img-text-cont {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .img-text-cont div {
            margin: 25px 0;
        }

        .uncover {
            font-size: 26px;
            margin-bottom: 46px;
            line-height: 40px;
        }

        .img-text-cont div>div {
            font-size: 19px;
        }

        .text {
            max-width: 200px !important;
        }
    }

    .left {
        margin-left: -20px !important;
    }

    @media screen and (max-width: 1199px) and (min-width: 850px) {
        .img-text-cont div>div {
            max-width: 250px;
            font-size: 24px;
        }
    }

    @media screen and (max-width: 850px) and (min-width: 700px) {
        .desktop {
            display: none;
        }

        .img-text-cont {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .mobile {
            display: block;
        }

        .img {
            text-align: center !important;
            margin: 0 auto;
            margin-bottom: 26px;
        }

        .img-text-cont div {
            margin-top: 50px;
        }

        .uncover {
            font-size: 34px;
            margin-bottom: 56px;
            line-height: 50px;
        }
    }

    @media screen and (min-width: 1600px) {
        .uncover {
            font-family: 'Proxima Nova SemiBold' !important;
        }
    }

    @media screen and (max-width: 390px) {
        .img-text-cont {
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
    }
    
    @media screen and (max-width: 800px) {
        .container-fluid {
            background-image: none;
        }
    }
</style>