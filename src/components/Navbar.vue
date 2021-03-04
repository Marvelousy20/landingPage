<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <img src="../assets/mobile/newlogo.svg" class="logo" alt="svg">
                    </li>
                    <li class="spacer"></li>
                    <li class="line"><span class="contact"> Contact :</span> <span class="number"><a href="https://wa.link/3kimvi" target="_blank">090 829 08871</a></span></li>
                    <li><span class="email"> Email : </span> <span class="mail"><a href="mailto: support@eagleglobalmarkets.com">support@eagleglobalmarkets.com</a></span></li>
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
        height: 70px;
        width: 140.5px;
    }

    header {
        height: 100px;
        background: #010C13;
        color: #fff;
        font-family: 'Proxima Nova Light' !important;
    }

    a {
        color: #fff;
    }

    a:hover {
        /* color: #146CE2; */
        color: #fff;
        text-decoration: none;
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

    .email, .contact {
        opacity: .9;
    }

    .number, .mail {
        font-family: 'Proximal Nova Light' !important;
        font-size: 15px;
        opacity: .9;
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

        .logo {
            height: 36px;
            width: 74.5px;
        }

        .number, .mail {
            font-family: 'Proximal Nova Light' !important;
            font-size: 12px;
            opacity: .9;
        }

        .email {
            font-size: 12px;
            opacity: .9;
        }
    }

    @media screen and (max-width: 850px) and (min-width: 701px) {
        .line {
            display: none;
        }

        .mail {
            font-family: 'Proximal Nova Light' !important;
            font-size: 21px !important;
            opacity: .9;
        }

        .email {
            font-size: 21px !important;
            opacity: .9;
        }
    }

    @media screen and (max-width: 360px) {
        .logo {
            height: 36px;
            width: 74.5px;
        }

        .number, .mail {
            font-family: 'Proximal Nova Light' !important;
            font-size: 10px !important;
            opacity: .9;
        }

        .email {
            font-size: 12px !important;
            opacity: .9;
        }
    }
</style>