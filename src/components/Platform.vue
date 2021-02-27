<template>
    <div>
        <section class="cont">
            <section class="plat">
                <div class="three">3 platforms to choose from</div>

                <ul class="list-cont mt-4">
                    <div class="flex">
                        <p></p>
                        <li>
                            <div class="bullet"></div>
                            <div>
                                <b>MT4 Platform: </b> <span>Trade the global <br> markets using USD.</span> 
                            </div>
                        </li>
                    </div>
                    <div class="flex">
                        <p></p>
                        <li>
                            <div class="a bullet"></div>
                            <div>
                                <b>Cloudtrade: </b> <span>Trade the Global Markets <br> on a Simplified Platform
                                Using Naira.</span> 
                            </div>
                        </li>
                    </div>
                    <div class="flex">
                        <p class="p"></p>
                        <li>
                            <div class="a bullet"></div>
                            <div>
                                <b>Copytrade: </b> <span>Make the same moves as <br> professionals, make money they do.</span>
                            </div>
                        </li>
                    </div>
                   
                </ul>
            </section>
            <section class="spacer"></section>
            <section class="plat-images">
                <div class="img-cont">
                    <img src="../assets/image-sec.png" alt="">
                </div>
            </section>
        </section>
        <div class="svg">

        </div>
    </div>
</template>

<style scoped>

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
        background: #146CE2;
        height: 11px;
        width: 11px;
        border-radius: 50%;
        margin-top: 10px;
        margin-right: 20px;
    }

    li {
        display: flex;
        align-items: flex-start;
        /* flex-direction: column; */
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
        /* max-width: 580px; */
        list-style: none;
    }

    li {
        color: blue;
        margin-top: 20px;
    }

    b, span {
        color: black !important;
        font-size: 21px;
    }

    b {
        font-family: 'Proxima Nova SemiBold';
    }

    span {
        font-family: 'Proxima Nova Light';
    }

    @media screen and (max-width: 700px) {
        .three {
            font-size: 28px;
            text-align: center;
            font-weight: 500;
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
        }

        span {
            font-size: 18px;
        }
        
        .spacer {
            display: none;
        }

        .svg {
            background: #146CE2;
            height: 140px;
            margin-top: -30px;
            width: 100%;
        }
    }

    @media screen and (max-width: 1199px) and (min-width: 850px) {
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

    @media screen and (max-width: 850px) and (min-width: 701px) {
        .svg{
            height: 120px;
            margin-top: 0;
        }

        .spacer {
            display: none;
        }

        .img-cont {
            width: 100%;
            margin-top: 60px;
        }

        .img-cont img {
            width: 100%;
        }

        .cont {
            flex-wrap: nowrap ;
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

            .bullet {
                background: #146CE2;
                border-radius: 50%;
                height: 11px;
                width: 11.74px;
                margin-top: 10px;
                margin-right: 20px;
            }

            .a {
                height: 11px !important;
                width: 13.8px !important;
            }
        }
</style>