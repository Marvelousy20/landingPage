<template functional>
    <div>
        <section class="cont">
            <section class="plat">
                <div class="three">3 platforms to <br class="mobile-b"> choose from</div>

                <ul class="list-cont mt-4">
                    <div class="flex">
                        <p></p>
                        <li>
                            <div class="bullet"></div>
                            <div class="desktop-b">
                                <b>MT4 Platform: </b> <span>Trade the global <br> markets using USD.</span> 
                            </div>
                            <div class="mobile-b">
                                <b>MT4 Platform: </b> <span>Trade the global markets using USD.</span> 
                            </div>
                        </li>
                    </div>
                    <div class="flex mt-2">
                        <p></p>
                        <li>
                            <div class="a bullet"></div>
                            <div class="desktop-b">
                                <b>Cloudtrade: </b> <span>Trade the Global Markets <br> on a Simplified Platform
                                Using Naira.</span> 
                            </div>
                            <div class="mobile-b">
                                <b>Cloudtrade: </b> <span>Trade the Global Markets on a Simplified Platform
                                Using Naira.</span> 
                            </div>
                        </li>
                    </div>
                    <div class="flex mt-2">
                        <p class="p"></p>
                        <li>
                            <div class="a bullet"></div>
                            <div class="desktop-b">
                                <b>Copytrade: </b> <span>Make the same moves as <br> professionals, make money they do.</span>
                            </div>
                            <div class="mobile-b">
                                <b>Copytrade: </b> <span>Make the same moves as professionals, make money they do.</span>
                            </div>
                        </li>
                    </div>
                   
                </ul>
            </section>
            <section class="spacer"></section>
            <section class="plat-images">
                <div class="img-cont">
                    <picture class="desktop-b">
                        <source srcset="../assets/image-sec.webp" type="image/webp">
                        <source srcset="../assets/image-sec.png" type="image/png"> 
                        <img src="../assets/image-sec.png" alt="Image">
                    </picture>
                    <picture class="mobile-b">
                        <source srcset="../assets/image-sec2.webp" type="image/webp">
                        <source srcset="../assets/image-sec2.png" type="image/png"> 
                        <img src="../assets/image-sec2.png" alt="Image">
                    </picture>
                </div>
            </section>
        </section>
        <div class="svg">

        </div>
    </div>
</template>

<style scoped>

    .mobile-b {
        display: list-item;                                                 
        list-style-type: disc;       
        list-style-position: inside;
    }
    
    .svg {
        background: #146CE2;
        height: 240px;
        margin-top: -60px;
        width: 100%;
    }

    .flex {
        display: flex;
        align-items: center;
    }

    .cont {
        margin-top: 160px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .bullet {
        display: list-item;                                                 
        list-style-type: disc;       
        list-style-position: inside;
        font-size: 24px;
        margin-top: -3px;
    }

    .mobile-b {
        display: none;
    }

    li {
        display: flex;
        align-items: flex-start;
    }

    .spacer {
        flex-grow: 1;
    }

    .plat-images {
        position: relative;
    }

    .plat {
        padding-left: 6em;
    }

    .img-cont {
        padding-left: 0 !important;
    }

    .desktop {
        position: relative;
    }

    .desktop img {
        object-fit: cover;
        width: 100%;
    }

    .mobile {
        position: relative;
    }

    .mobile img {
        position: absolute;
        object-fit: cover;
    }

   .three {
       max-width: 400px;
       font-size: 3.56em;
       font-weight: 600;
       line-height: 65px;
       font-family: 'Proxima Nova SemiBold';
    }

    ul {
        list-style: none;
    }

    li {
        color: #146CE2;
        margin-top: 20px;
    }

    b, span {
        color: black !important;
        font-size: 21px !important;
    }

    b {
        font-family: 'Proxima Nova SemiBold';
    }

    span {
        font-family: 'Proxima Nova Light';
    }

    @media screen and (max-width: 700px) {
        .three {
            font-size: 36px;
            text-align: center;
            line-height: 40px;
            font-weight: 500;
        }

        .cont {
            margin-top: 80px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        .img-cont {
            width: 100%;
            margin-top: 40px;
        }

        .img-cont img {
            width: 100%;
        }

        .plat {
            padding-left: 0;
        }

        ul {
            max-width: 100%;
            padding:0 50px;
            margin-bottom: 0;
        }

        .plat-images {
            margin-top: -20px !important;
        }

        span {
            font-size: 18px !important;
        }
        
        .spacer {
            display: none;
        }

        .svg {
            background: #146CE2;
            height: 87px;
            /* margin-top: -40px; */
            margin-top: -33px;
            width: 100%;
        }

        .mobile-b {
            display: block;
        }

        .desktop-b {
            display: none;
        }
    }

    @media screen and (max-width: 1199px) and (min-width: 950px) {
        .plat-images {
            width: 50%;
        }

        .plat-images img {
            width: 100%;
        }

        .plat {
            padding-left: 1.5rem;
        }

        .svg {
            background: #146CE2;
            height: 120px;
            margin-top: -20px;
            width: 100%;
        }
    }

    @media screen and (max-width: 950px) and (min-width: 701px) {
        .three {
            font-size: 50px !important;
            font-weight: 500;
            max-width: 100%;
        }

        .bullet {
            display: list-item;                                                 
            list-style-type: disc;       
            list-style-position: inside;
            font-size: 35px;
            margin-top: -3px;
        }

        .cont {
            margin-top: 140px;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .plat-images {
            width: 100%;
        }

        .plat-images img {
            width: 100%;
        }

        .img-cont {
            width: 100%;
            margin-top: 90px;
        }

        .img-cont img {
            width: 100%;
        }

        .plat {
            padding-left: 0;
        }

        ul {
            max-width: 100%;
        }

        b, span {
            font-size: 25px !important;
        }
        
        .spacer {
            display: none;
        }

        .svg {
            background: #146CE2;
            height: 87px;
            margin-top: 0;
            width: 100%;
        }

        li {
            margin-top: 30px;
        }
    }


    @media screen and (min-width: 1500px){
        .plat {
            padding-left:13rem;
        }
    }

    @media screen and (max-width: 414px) {
        .flex {
            display: flex;
            align-items: flex-start;
        }
    }

    @media screen and (max-width: 440px) {
         .desktop-b {
            display: none;
        }

        .mobile-b {
            display: block;
        }
    }
</style>