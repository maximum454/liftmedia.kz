<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12">

                    <h1 class="header__title">
                        <div class="text-dark bg-light"><span class="text-norm">Динамичная</span></div>
                        <br>
                        <div class="text-light bg-success"><span class="text-norm">реклама</span></div>
                        <br>
                        в лифтах
                    </h1>
                    <p class="header__anons">
                        Размещение рекламы на&nbsp;мониторах в&nbsp;лифтах
                        жилых домов, премиум и&nbsp;бизнес класса /
                        в&nbsp;деловых центрах категории&nbsp;А+
                    </p>
                </div>
                <div class="col-lg-6 col-sm-12">

                    <!-- Button trigger modal -->
                    <div class="header__play" data-toggle="modal" data-target="#ModalVideo">
                        <p><b>Посмотрите видео</b><br>
                            о деятельности<br>
                            нашей компании
                        </p>
                    </div>

                    <!-- Modal -->
                    <div class="modal fade" id="ModalVideo" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <video id="video" width="100%" height="280" controls="controls" poster="">
                                    <source src="Lift_media.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                                </video>

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
        name: 'header',
        data() {
            return {}
        }
    }

    $('#ModalVideo').on('hidden.bs.modal', function (e) {
        console.log('1111111');
    })
</script>

<style scoped lang="scss">
    .header {
        background-image: url("../assets/header.jpg");
        background-position: center top;
        background-size: cover;
        padding: 120px 0 68px;
        overflow: hidden;
        &__anons {
            font-size: 21px;
            line-height: 1.3;
        }

        &__play {
            color: #fff;
            position: relative;
            align-self: center;
            margin-top: 290px;
            margin-left: 50px;
            cursor: pointer;

            &:after {
                content: '';
                position: absolute;
                top: -192px;
                left: 54px;
                background-image: url("../assets/play-tv.png");
                width: 344px;
                height: 290px;
                z-index: 0;
            }

            p {
                position: relative;
                font-size: 16px;
                line-height: 18px;
                z-index: 10;
            }
        }
        .close{
            position: absolute;
            top: -30px;
            right: 0;
            color: #fff;
        }
        @media (max-width: 376px){
            &__anons {
                font-size: 16px;
            }
            &__play {
                color: #fff;
                position: relative;
                align-self: center;
                margin-top: 140px;
                margin-left: 0;
                cursor: pointer;

                &:after {
                    content: '';
                    position: absolute;
                    top: -192px;
                    left: 54px;
                    background-image: url("../assets/play-tv.png");
                    width: 344px;
                    height: 290px;
                    z-index: 0;
                }

                p {
                    position: relative;
                    font-size: 16px;
                    line-height: 18px;
                    z-index: 10;
                }
            }
        }
    }
</style>