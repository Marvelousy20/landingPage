<template>
    <div class="container-fluid">
        <div class="uncover">Uncover a trading experience <br> that’s built just for you.</div>

        <div class="img-text-cont mt-5">
            <div>
                <img class="img left" src="../assets/XMLID_806_.svg" alt="">
                <div class="text mt-3">Fast trade execution <br> &lt; 12.00 ms</div>
            </div>
            
            <div>
                <img class="desktop" src="../assets/Component 3 – 1.svg" alt="">
                <img class="mobile" src="../assets/Component 2 – 2.svg" alt="">
            </div>

            <div class="central">
                <img class="img" src="../assets/stock-market (2).svg" alt="">
                <div class="text mt-3">1000+ Assets to trade <br> on 3 unique platforms</div>
            </div>

            <div>
                <img class="desktop" src="../assets/Component 3 – 1.svg" alt="">
                <img class="mobile" src="../assets/Component 2 – 2.svg" alt="">
            </div>

            <div>
                <img class="img" src="../assets/wallet.svg" alt="">
                <div class="text mt-3">100% safety <br> guaranteed</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container-fluid {
        color: #fff;
        position: relative;
        background-image: url('../assets/Mask Group 5.svg');
        background-color:rgb(1,12,19);
        padding: 120px 0;
        font-family: 'Proxima Nova Regular';
    }

    .uncover {
        /* max-width: 800px; */
        font-size: 3.5vw;
        text-align: center;
        margin: 20px auto;
        /* margin-left: 300px; */
        margin-bottom: 120px;
        font-family: 'Proxima Nova SemiBold';
        line-height: 63px;
    }

    .img-text-cont {
        display: flex;
        text-align: center;
        /* max-width: 1215px; */
        justify-content: space-between;
        padding: 0 50px;
        margin: 0 auto;
    }

    .img-text-cont div>div {
        max-width: 400px;
        font-size: 29px;
        font-weight: 400px;
    }

    .mobile {
        display: none;
    }

    .desktop, .central {
        margin-left: -60px;
    }

    .img {
        margin-bottom: 25px;
    }

    @media screen and (max-width: 700px) {
        .desktop {
            display: none;
        }

        .img-text-cont {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .img-text-cont div {
            margin-top: 50px;
        }

        .uncover {
            max-width: 256px;
            font-size: 26px;
        }

        .img-text-cont div>div {
            font-size: 19px;
        }

        .mobile {
            display: block !important;
        }

        .text {
            max-width: 200px !important;
        }

        .no-display {
            display: block;
        }
    }

    .left {
        margin-left: -20px !important;
    }

    @media screen and (max-width: 1199px) and (min-width: 850px) {
        .img-text-cont div>div {
            max-width: 250px;
            font-size: 24px;
            font-weight: 400px;
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

        .img-text-cont div {
            margin-top: 50px;
        }
    }


    @media screen and (min-width: 1400px){
        
    }
</style>