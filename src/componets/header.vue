<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div class="logo"><img src="../assets/lift-logo.svg" alt=""></div>
                    <h1 class="header__title">
                        <div class="text-dark bg-light"><span class="text-norm">Динамичная</span></div><br>
                        <div  class="text-light bg-success"><span class="text-norm">реклама</span></div><br>
                        в лифтах</h1>
                    <p class="header__anons">
                        Размещение рекламы на мониторах в лифтах<br> жилых домов, премиум и бизнес класса /<br> в деловых центрах категории А+
                    </p>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <div class="header__phone">
                        <a href="#" class="phone-num"><i class="fa fa-phone"></i>576-300</a>
                        <span class="phone-text">заказать рекламу</span>
                    </div>
                    

                    <!-- Button trigger modal -->
                    <div class="header__play"  data-toggle="modal" data-target="#exampleModalCenter">
                        <p><b>Посмотрите видео</b><br>
                        о деятельности<br>
                        нашей компании
                        </p>
                    </div>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'headerbar',
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        background-image: url("../assets/header.jpg");
        background-position: center top;
        background-size: cover;
        padding: 14px 0 68px;
        .logo{
            max-width: 220px;
            margin-bottom: 67px;
        }
        &__anons{
            font-size: 21px;
        }
        &__phone{
            position: absolute;
            top: -14px;
            right: 0;
            background-color: #fff;
            width: 100%;
            max-width: 150px;
            padding: 5px;
            border-radius: 0 0 20px 20px;
            text-align: center;
            color: #000;
        }
        .phone-num{
            color: #1e9c3c;
            font-size: 27px;
            line-height: 1;
            font-weight: bold;
            display: block;
        }
        .phone-text{
            color: #000;
            font-size: 16px;
            border-bottom: 2px solid ;
        }
        &__play{
            color: #fff;
            position: relative;
            align-self: center;
            margin-top: 290px;
            margin-left: 50px;
            cursor: pointer;
            &:after{
                content: '';
                position: absolute;
                top: -192px;
                left: 54px;
                background-image: url("../assets/play-tv.png");
                width: 344px;
                height: 290px;
                z-index: 0;
            }
            p{
                position: relative;
                font-size: 16px;
                line-height: 18px;
                z-index: 10;
            }
        }
        .fa-phone{
            display: inline-block;
            margin-right: 4px;
            background-image: url("../assets/fa-phone.png");
            width: 16px;
            height: 22px;
        }
    }
</style>