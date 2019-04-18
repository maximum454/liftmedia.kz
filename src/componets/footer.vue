<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h2>Контакты</h2>
                    <h3>Адрес</h3>
                    <p>г. Нур-Cултан<br>
                        ул. Кабанбай батыра, д. 6/2, оф.212</p>

                    <h3>Телефон</h3>
                    <a href="#">+7(7172) 576-300</a><br>
                    <a href="#">+ 7 700 310 0707</a>

                    <div>
                        Прайс-лист
                    </div>
                </div>
                <div class="w-100"></div>
                <div class="col-lg-6">
                    <div class="logo">
                        <img src="../assets/lift-logo.svg" alt="">
                    </div>
                </div>
                <div class="col-lg-6 text-right">
                    &copy;&nbsp;2018 Lift Media. Все права защищены.
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "footerbar"
    }
</script>

<style scoped lang="scss">
    .footer{
        background-image: url("../assets/footer.jpg");
        background-position: top center;
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 50px 0 25px;
        .logo{
            max-width: 180px;
        }
    }
</style>