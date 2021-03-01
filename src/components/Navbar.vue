<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <!-- <img src="../assets/logo.png" class="desktop logo" alt="logo"> -->
                        <img src="../assets/mobile/newlogo.svg" class="logo" alt="svg">
                        <!-- <img src="../assets/mobile/newlogo.svg" class="desktop logo" alt="logo"> -->
                        <!-- <img src="../assets/mobile/EGM_.jpg" class="mobile" alt="logo"> -->
                    </li>
                    <li class="spacer"></li>
                    <li class="line"><span class="contact"> Contact :</span> <span class="number">0803 513 8790</span></li>
                    <li><span class="email"> Email : </span> <span class="mail">support@eagleglobalmarkets.com</span></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<style scoped>
    body {
        font-family: 'Proxima Nova Light' !important;
    }

    .logo {
        height: 60px;
        width: 120px;
    }

    header {
        height: 100px;
        background: #010C13;
        color: #fff;
        font-family: 'Proxima Nova Light' !important;
    }

    .contact, .email {
        font-family: 'Proxina Nova' !important;
        font-size: 15px;
    }

    .mobile {
        display: none;
    }

    nav {
        height: 100%;
    }

    ul {
        list-style: none;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between !important;
        padding: 0 100px;
    }

    .line::after {
        content: '|';
        padding: 15px;
    }

    .spacer {
        flex: 1;
    }

    .number, .mail {
        font-family: 'Proximal Nova Light' !important;
        font-size: 15px;
        /* opacity: .9; */
    }

    @media screen and (max-width: 700px) {
        header {
            height: 80px;
        }

        .desktop {
            display: none;
        }
        .mobile {
            display: block;
            height: 36px;
            width: 75px;
            object-fit: cover;
        }

        ul {
            list-style: none;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding: 0 20px;
        }

        .line {
            display: none;
        }
    }

    @media screen and (max-width: 850px) and (min-width: 701px) {
        .line {
            display: none;
        }
    }
</style>