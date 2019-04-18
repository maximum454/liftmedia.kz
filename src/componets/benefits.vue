<template>
    <section class="benefits">
        <div class="container">
            <h2 class="title text-light bg-success">
                <span class="text-norm">Преимущества</span>
            </h2>
            <div class="row">
                <div class="col-lg-6">
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
                <div class="col-lg-6">
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
                <div class="col-lg-6">
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
                <div class="col-lg-6">
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
                <div class="col-lg-6">
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
                <div class="col-lg-6">
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
        }

        .anons {
            font-size: 16px;
        }
    }
</style>