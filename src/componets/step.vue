<template>
    <section class="step">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-sm-12">
                    <h2>
                        <div class="text-light bg-success"><span class="text-norm">3 шага</span></div>
                        <br>
                        для размещения<br>
                        рекламы
                    </h2>
                    <div class="lift">
                        <img src="../assets/lift.png" alt="">
                    </div>

                </div>
                <div class="col-lg-5 col-sm-6">
                    <ul class="list-group">
                        <li>
                            <div class="step__step">1 шаг</div>
                            <p>Выберите количество секторов.</p>
                        </li>
                        <li>
                            <div class="step__step">2 шаг</div>
                            <p>Выберите желаемый<br> период.</p>
                        </li>
                        <li>
                            <div class="step__step text-muted">3 шаг</div>
                            <p  class="text-muted">а) Предоставьте ваш рекламный ролик длительностью 15 сек.</p>
                        </li>
                    </ul>

                </div>
            </div>
            <div class="arrow"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "step"
    }
</script>

<style scoped lang="scss">
    .step {
        padding: 50px 0 75px;
        position: relative;
        .list-group{
            list-style: none;
            margin: 0;
            padding: 0;
            li{
                margin-bottom: 25px;
            }
            p{
                color: #000;
                font-size: 34px;
                line-height: 1.2;
            }
        }
        &__step{
            color: #1e9c3c;
           font-size: 23px;
        }
        .lift{
            position: relative;
            top: -60px;
            left: 276px;
        }
        .arrow{
            position: absolute;
            bottom: 0;
            left: 0;
            background-image: url("../assets/arrow.png");
            width: 52px;
            height: 216px;
        }
        .text-muted{
            color: #aeaeae;
        }
        @media (max-width: 768px){
            padding: 50px 0 0;
            .lift{
                position: absolute;
                top: 230px;
                left: 350px;
            }
            .arrow{
                position: absolute;
                bottom: 0;
                left: auto;
                right: 0;
                background-image: url("../assets/arrow.png");
                width: 52px;
                height: 216px;
            }
        }
    }
</style>