<template>
    <footer class="footer">
        <div class="container">
            <div class="bg"></div>
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="text-light bg-success"><span class="text-norm">Контакты</span></h2>
                    <h3>Адрес</h3>
                    <p>г. Нур-Cултан<br>
                        ул. Кабанбай батыра, д. 6/2, оф.212</p>

                    <h3>Телефон</h3>
                    <a href="tel:+77172576300">+7(7172) 576-300</a><br>
                    <a href="tel:+77003100707">+ 7 700 310 0707 <img src="../assets/whatsapp.png" alt=""></a>
                    <div class="footer__price">
                        <a href="Lift-Media-2019.xlsx" class="price"><span>Прайс-лист</span></a>
                    </div>
                </div>
                <div class="w-100"></div>
                <div class="col-lg-6 col-sm-6">
                    <div class="logo">
                        <img src="../assets/lift-logo.svg" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 text-right align-self-center">
                    &copy;&nbsp;2019 Lift Media. Все права защищены.
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped lang="scss">
    .footer {
        position: relative;
        padding-bottom: 20px;
        margin: 50px 0 0;
        overflow: hidden;
        .bg {
            background-image: url("../assets/footer.png");
            background-position: top center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 1152px;
            height: 581px;
            position: absolute;
            right: 0;
            left: 0;
            margin: 0 auto;
            &:before{
                content: '';
                position: absolute;
                left: -100%;
                bottom: -2px;
                background-image: url("../assets/footer-bottom.png");
                width: 100%;
                height: 136px;
            }
            &:after{
                content: '';
                position: absolute;
                right: -100%;
                bottom: -2px;
                background-image: url("../assets/footer-bottom.png");
                width: 100%;
                height: 136px;
            }
        }

        .logo {
            max-width: 180px;
        }

        p, a {
            color: #000;
            font-size: 25px;
            text-decoration: none;
        }

        &__price {
            margin-top: 40px;
            margin-bottom: 80px;
        }
        .price {
            position: relative;
            padding-left: 50px;
            color: #000;
            text-decoration: none;

            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0,-50%);
                background-image: url("../assets/price.png");
                background-size: 100%;
                width: 37px;
                height: 49px;
            }

            span {
                border-bottom: 1px dashed;
            }
        }
        @media (max-width: 868px){
            .bg {
                right: 0;
                left: -286px;
            }
        }
    }
</style>