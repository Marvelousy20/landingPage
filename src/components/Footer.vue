<template>
    <div class="container-fluid">
        <span class="bold">Risk warning:</span> <span>Investing in Eagle Global Markets derivative products 
        carries significant risks and is not suitable for all investors. <br class="desktop"> 
        You could lose more than your deposits. You do not own, or have any interest in, 
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
            <div><img src="../assets/mobile/newlogo.svg" class="logo" alt="svg"></div>
            <div class="web desktop">
                <a href="https://web.facebook.com/eagleglobalmarkets" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="https://instagram.com/egmarkets/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.youtube.com/channel/UCygWKOVLhXCZFg8KcLtw7kg"><i class="fab fa-youtube fa-2x"></i></a>
                <a href="https://www.twitter.com/egmarkets" target="_blank"><i class="fab fa-twitter fa-2x"></i></a> 
            </div>

            <div class="web mobile">
                <a href="https://web.facebook.com/eagleglobalmarkets" target="_blank"><i class="fab fa-facebook fa-lg"></i></a>
                <a href="https://instagram.com/egmarkets/" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
                <a href="https://www.youtube.com/channel/UCygWKOVLhXCZFg8KcLtw7kg"><i class="fab fa-youtube fa-lg"></i></a>
                <a href="https://www.twitter.com/egmarkets" target="_blank"><i class="fab fa-twitter fa-lg"></i></a> 
            </div>
        </div>
    </div>
</template>

<style scoped>
    .logo {
        height: 70px;
        width: 140.5px;
    }

    .container-fluid {
        background: #010C13;
        color: #fff;
        padding-top: 180px !important;
        padding-bottom: 100px;
        padding-left: 128px;
        padding: 128px;
        margin-top: -5px;
    }

    .bold {
        font-family: 'Proxima Nova Bold';
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
        color: #fff;
        opacity: .8;
        margin-right: 25px;
    }

    hr {
        background: #fff;
        opacity: .5;
        margin-top: 100px;
        margin-bottom: 67px;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .mobile {
        display: none;
    }

    .web a:hover {
        color: #146CE2;
    }

    @media screen and (max-width: 950px) and (min-width: 701px) {
        .container-fluid {
            padding: 0 70px !important;
            padding-top: 120px !important;
            padding-bottom: 80px;
        }

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        span {
            font-family: 'Proxima Nova Light';
            font-size: 26px !important;
            opacity: .8;
        }
    }

    @media screen and (max-width: 700px) {
        .container-fluid {
            padding: 90px 2rem !important;
            padding-bottom: 3rem !important;
        }

        .logo {
            height: 36px;
            width: 74.5px;
        }

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .hr {
            margin-top: 60px 0;
        }
    }

    @media screen and (max-width: 500px) {
        span {
            font-family: 'Proxima Nova Light';
            font-size: 18px !important;
            opacity: .8;
        }
    }

    @media screen and (max-width: 350px) {
        span {
            font-family: 'Proxima Nova Light';
            font-size: 16px !important;
            opacity: .8;
        }
    }

    @media screen and (max-width: 375px) {
        .web a{
            font-family: 'Proxima Nova Light';
            color: #fff;
            opacity: .8;
            margin-right: 15px;
        }
    }
</style>