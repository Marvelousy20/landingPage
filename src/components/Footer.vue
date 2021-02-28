<template>
    <div class="container-fluid">
        <span class="bold">Risk warning:</span> <span>Investing in Eagle Global Markets derivative products 
        carries significant risks and is not suitable for all investors. <br> 
        You could lose more than your deposits.You do not own, or have any interest in, 
        the underlying assets. We recommend that you seek independent advice and ensure you 
        fully understand the risks involved before trading. Spreads may widen depending on 
        liquidity and market volatility. <br> <br class="mobile"> The information on this website is prepared without 
        considering your objectives, financial situation or needs. Consequently, you should 
        consider the information in light of your objectives, financial situation and needs.</span> 
        <br> 
        <br>
        <br>
        <span class="bold">Address:</span> <span>Eagle Global Markets is a trading name of Eagle GM Limited, a company 
        registered in Nigeria with RC 1322866 at address Floor 4, The Bureau, 28 Raymond Njoku 
        Street, S.W. Ikoyi, Lagos. </span>
        <br>
        <br>
        <br>
        <span class="bold">Eagle Global Markets (PTY) LTD</span>, <span class="nowrap"> registered company number 
        2010/010099/07 of The Business Exchange, 150 Rivonia Road,<wbr> 
        Sandton, 2057 
        Eagle Global Markets (PTY) LTD is a juristic representative of Blackstone 
        Maketing SA (PTY) LTD (registration number 2009/002519/23),
        authorised and regulated by the Financial Services Board (FSB), Registration number 38782 </span>
        
        <div class="hr">
            <hr>
        </div>

        <div class="footer">
            <div class="desktop"><img src="../assets/logo.png" alt=""></div>
            <div class="mobile"><img src="../assets/mobile_logo.png" alt=""></div>
            <div class="web">
                <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="#"><i class="fab fa-youtube fa-2x"></i></a>
                <a href="#"><i class="fab fa-twitter fa-2x"></i></a> 
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container-fluid {
        background: #010C13;
        color: #fff;
        padding-top: 180px !important;
        padding-bottom: 100px;
        padding-left: 128px;
        padding: 128px;
        margin-top: -5px;
    }

    .hr {
        margin: 100px 0;
    }

    .bold {
        font-family: 'Proxima Nova';
        font-size: 21px;
        opacity: 1;
    }

    .nowrap {
        font-size: 19.9px;
    }

    span {
        font-family: 'Proxima Nova Light';
        font-size: 20px;
        opacity: .8;
    }

    .web a{
        font-family: 'Proxima Nova Light';
        /* font-size: 15px; */
        color: #fff;
        opacity: .8;
        margin-right: 25px;
    }

    hr {
        background: #fff;
        opacity: .5;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 700px) {
        .container-fluid {
            padding: 91px 2rem;
            padding-bottom: 3rem !important;
        }

        .web {
            display: none;
        }

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .hr {
            margin: 80px 0;
        }
    }

    @media screen and (max-width: 500px) {
        span {
            font-family: 'Proxima Nova Light';
            font-size: 18px !important;
            opacity: .8;
        }
    }
</style>