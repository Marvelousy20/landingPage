<template>
    <div class="trade-cont">
        <div class="trading">Start trading in a few clicks</div>

        <div class="wrapper-cont">
            <div class="wrapper">
                <a href="https://clients.eagleglobalmarkets.com/#/" target="_blank">
                    <div>
                        <p class="a">Complete the Registration form</p>
                    </div>
                    <p>Filling in your details is hassle-free and takes less than a minute to complete.</p>
                </a>
            </div>
            
            <div class="wrapper">
                <a href="https://clients.eagleglobalmarkets.com/#/" target="_blank">
                    <div>
                        <p class="a">Verify your Account</p>
                    </div>
                    <p>Upload your passport, National ID, Driver’s License, <br class="mobile"> or other forms of Identification.</p>
                </a>
            </div>

            <div class="wrapper">
                <a href="https://clients.eagleglobalmarkets.com/#/" target="_blank">
                    <div>
                        <p class="a">Fund your account & start trading</p>
                    </div>
                    <p>Use our range of payment options to start investing to deposit funds to your account.</p>
                </a>
                
            </div>

            <div class="wrapper">
                <a href="https://eepurl.com/hqgVXj" target="_blank">
                    <div>
                    <p class="a">Take our free trainings</p>
                    </div>
                    <p>Get access to free, premium, trading education & resources for both beginners & experts.</p>
                </a>
            </div>
        </div>

        <div class="button-cont">
            <a href="https://clients.eagleglobalmarkets.com/#/" target="_blank" class="btn-primary button">Open an account</a>
        </div>
    </div>
</template>

<style scoped>
    .trade-cont {
        background-image: url('../assets/MaskGroup5.svg');
        font-family: 'Proxima Nova Light';
    }

    p {
        margin-bottom: 0 !important;
    }

    .mobile {
        display: none;
    }

    .trading {
        font-size: 50px;
        text-align: center;
        margin-bottom: 40px;
        padding-top: 100px;
        max-width: 100vw;
        font-family: 'Proxima Nova SemiBold';
    }

    .wrapper {
        border: 1px solid #104EA1;
        border-radius: 10px;
        height: 206px;
        width: 475px;
        margin: 30px 30px;
        padding: 40px 40px;
    }

    .button {
        padding: 1.6rem 3rem;
        background: #146CE2;
        border-radius: 20px;
        outline: none;
        border: none;
        font-weight: 300;
    }

    .button-cont a {
        font-family: 'Proxima Nova Regular';
        font-size: 24px;
    }

    .button-cont {
        text-align: center;
    }

    .a {
        font-size: 24px !important;
        line-height: 30px;
    }

    .button-cont  {
        margin-top: 60px;
    }

    .button:hover {
        text-decoration: none;
    }

    .wrapper div>p {
        color: #104EA1;
        font-family: 'Proxima Nova SemiBold';
    }

    .wrapper div {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .wrapper a>p {
        font-size: 19px;
    }

    .wrapper a {
        color: black;
        text-decoration: none;
    }

    .wrapper:hover {
        background: #104EA1;
    }

    .wrapper:hover, .wrapper:hover * {
        color: #fff !important;
        transition: .2s ease-in-out;
    }

    .wrapper p {
        font-size: 19px;
    }

    .wrapper-cont {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    div.wrapper {
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 700px) {
        .trading {
            font-size: 28px;
        }

        .desktop {
            display: none;
        }

        .wrapper-cont {
            justify-content: center;
        }

        .wrapper p {
            max-width: 100%;
            font-size: 19px;
        }

        .wrapper {
            display: block;
        }

        .wrapper div {
            font-size: 24px;
            max-width: 100%;
        }
        
        .button {
            padding: 1.3rem 1.8rem;
        }

        .button-cont a {
            font-size: 19px;
        }
        
        .wrapper {
            border: 1px solid #104EA1;
            border-radius: 10px;
            margin: 0 0;
            padding: 25px 25px;
            margin: 20px 20px;
            height: 100%;
            width: 100%;
        }

        .button-cont a {
            font-size: 19px;
        }

        .button {
            border-radius: 12px;
        }

        .wrapper p {
            font-size: 17.5px !important;
        }
    }

    @media screen and (max-width: 850px) and (min-width: 701px) {
        .wrapper-cont>* {
            width: 100%;
        }

        .button {
            padding: 1.9rem 2.4rem;
        }

        .desktop {
            display: none;
        }

        .button-cont a {
            font-size: 24px;
        }

        .wrapper {
            padding: 25px 45px;
            margin: 30px 30px;
            height: 100%;
            width: 100%;
        }

        .wrapper p {
            max-width: 100%;
            font-size: 25px !important;
        }

        .wrapper div {
            font-size: 24px;
            max-width: 100%;
            margin-bottom: 20px;
        }
    }


    @media screen and (max-width: 420px) {
        .button {
            padding: 1.3rem 1.8rem;
        }

        .button-cont a {
            font-size: 19px;
        }

        .wrapper p {
            font-size: 3.8vw !important;
        }

        .wrapper div {
            margin-bottom: 5px;
        }
    }

    @media screen and (max-width: 800px) {
        .trade-cont {
            background-image: none;
        }
    }

    @media screen and (max-width: 376px) {
        .wrapper div {
            font-size: 17px !important;
            max-width: 100%;
            margin-bottom: 5px;
        }

        .wrapper a>p {
            font-size: 12px !important;
        }

        .wrapper p {
            font-size: 15px !important;
        }
    }
</style>