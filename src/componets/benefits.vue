<template>
    <section class="benefits">
        <div class="container">
            <div class="arrow"></div>
            <h2 class="title text-light bg-success">
                <span class="text-norm">Преимущества</span>
            </h2>
            <div class="row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="item">
                        <div class="img">
                            <img src="../assets/benefist-1.png" alt="">
                        </div>
                        <div class="txt">
                            <h4 class="name">Высокая заметность</h4>
                            <p class="anons">Картинка + звук + движение = реклама привлекает внимание!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="item">
                        <div class="img">
                            <img src="../assets/benefist-2.png" alt="">
                        </div>
                        <div class="txt">
                            <h4 class="name">Гарантированное воздействие</h4>
                            <p class="anons">Трансляция в&nbsp;замкнутом пространстве, где нет возможности выключить,
                                перемотать или
                                переключить рекламу</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="item">
                        <div class="img">
                            <img src="../assets/communication-tower.png" alt="">
                        </div>
                        <div class="txt">
                            <h4 class="name">Частота и длительность контакта</h4>
                            <p class="anons">Рекламные блоки повторяются круглосуточно каждые 4 минуты</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="item">
                        <div class="img">
                            <img src="../assets/target.png" alt="">
                        </div>
                        <div class="txt">
                            <h4 class="name">Эффективное таргетирование</h4>
                            <p class="anons">Охват населения с высоким
                                и средним уровнем дохода
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="item">
                        <div class="img">
                            <img src="../assets/fireworks.png" alt="">
                        </div>
                        <div class="txt">
                            <h4 class="name">Развлекательный эффект</h4>
                            <p class="anons">В лифте люди хотят сократить время ожидания и готовы к восприятию
                                информации</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="item">
                        <div class="img">
                            <img src="../assets/team.png" alt="">
                        </div>
                        <div class="txt">
                            <h4 class="name">Презентабельное впечатление</h4>
                            <p class="anons">Реклама на современных мониторах выглядит солидно, вызывает доверие и
                                уважение</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: 'benefits',
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .benefits {
        margin-bottom: 40px;
        position: relative;
        .container{
            position: relative;
        }
        .arrow{
            position: absolute;
            bottom: 0;
            right: 0;
            background-image: url("../assets/benefist-arrow.png");
            width: 52px;
            height: 451px;
        }
        .title{
            margin-bottom: 50px;
        }
        .item {
            display: flex;
        }

        .img {
            width: 80px;
            flex-shrink: 0;
            margin-right: 30px;
        }

        .txt {
            max-width: 288px;
        }

        .name {
            font-size: 27px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .anons {
            font-size: 16px;
            line-height: 1.3;
        }
    }
</style>