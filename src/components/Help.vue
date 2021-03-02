<template>
    <div>
        <div class="svg"></div>
        <div class="cont">
            <div class="img-cont">
                <img src="../assets/Component 6 – 1.png" alt="img">
            </div>
            <div class="text-cont">
                <div class="help">Still need help?</div>
                <p class="par">Kindly reach us if you would like to learn more about our services & 
                    how you can make money from the financial markets.
                </p>

                <ul>
                    <div class="flex e mt-5">
                        <p></p>
                        <li>
                            <span>
                                <a href="#"><span class="span">Email:</span> support@eagleglobalmarkets.com</a>
                            </span>
                        </li>
                    </div>
                    <div class="flex mt-4 whatsapp">
                        <p></p>
                        <li>
                            <span>
                                <a href="#"><span class="span">WhatsApp:</span> 090 829 08871</a>
                            </span>
                        </li>
                    </div>
                </ul>
            </div>
            <div class="mobile">
                <img src="../assets/Component 6 – 1.png" alt="img">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .help {
        font-size: 3.56em;
        font-family: 'Proxima Nova SemiBold';
        margin-bottom: 5px;
    }

    .flex {
        display: flex;
        align-items: center !important;
    }

    .flex p {
        height: 8px;
        width: 8px;
        background: #146CE2;
        border-radius: 50%;
        margin:0;
        margin-right: 20px;
    }

    p {
        font-size: 21px;
        font-family: 'Proxima Nova Light';
    }

    ul {
        list-style: none;
        line-height: 20px;
    }

    span a {
        color: black;
    }

    span a:hover {
        color: #146CE2;
        text-decoration: none;
    }

    span {
        font-size: 21px;
        font-family: 'Proxima Nova Light';
    }

    .span {
        font-family: 'Proxima Nova SemiBold';
    }

    .cont {
        display: flex;
        flex-wrap: wrap;
        text-align: left !important;
    }

    .text-cont {
        align-self: center;
        max-width: 435px;
        margin: 0 auto;
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 950px) {
        .img-cont img {
            display: none;
        }

        .help {
            font-size: 26px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 30px;
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .mobile {
            display: block;
            width: 100%;
        }

        .mobile img {
            width: 100%;
        }

        .text-cont {
            padding: 4rem 2.5rem;
        }

        .par {
            font-family: 'Proxima Nova Regular';
            font-size: 17px;
        }

        .cont {
            display: flex;
            flex-wrap: wrap;
            text-align: center !important;
        }

        span {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1199px) and (min-width: 950px) {
        .img-cont {
           width: 49%;
        }

        .img-cont img {
           width: 100%;
        }

        .help {
           text-align: center;
           margin-bottom: 20px;
        }

        .par {
            font-family: 'Proxima Nova Regular';
            max-width: 300px;
        }

        .e {
            margin-top: 30px !important;
        }
    }

    @media screen and (max-width: 950px) and (min-width: 701px) {
       .text-cont {
            align-self: center;
            max-width: 100% !important;
            margin: 0 auto;
        }

        .text-cont {
            padding: 6rem 2.5rem;
        }

        .help {
            font-size: 5.5vw;
        }

        .flex p {
            height: 11px !important;
            width: 11px !important;
            background: #146CE2;
            border-radius: 50%;
            margin:0;
            margin-right: 20px;
        }

        .par {
            max-width: 600px;
            font-size: 29px;
            font-family: 'Proxima Nova Regular';
        }

        span {
            font-size: 28px;
        }

    }

    @media screen and (max-width: 420px) {
        span a {
           font-size: 15px;
        }
    }

    @media screen and (max-width: 320px) {
        .flex p {
            display: none;
        }

        ul {
            /* list-style: disc; */
            list-style: none;
            /* margin-left: 10px; */
            line-height: 3px;
        }

        li:before {
            content: '.';
            color: #146CE2;
            font-size: 50px;
            margin-top: 10px !important;
            margin-right: 10px;
        }

        span, span a {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 380px) {
        span a {
           font-size: 13.5px;
        }

        .span {
            font-size: 14px;
        }
    }
</style>