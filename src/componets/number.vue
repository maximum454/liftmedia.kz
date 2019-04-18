<template>
    <section class="number">
        <div class="container">
            <ul class="number__list">
                <li>
                    <p class="name">рекламных<br> мониторов</p>
                    <div class="line"></div>
                    <div class="num">1000</div>
                </li>
                <li><p class="name">жилых <br>домов</p>
                    <div class="line"></div>
                    <div class="num">150</div>
                </li>
                <li><p class="name">длительность ролика <br>(сек)</p>
                    <div class="line"></div>
                    <div class="num">15</div>
                </li>
                <li><p class="name">длительность<br> рекламного блока (мин)</p>
                    <div class="line"></div>
                    <div class="num">4</div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "number"
    }
</script>

<style scoped lang="scss">
    .number {
        background-image: url("../assets/number-bg.jpg");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        padding: 37px 0;

        &__list {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
            max-width: 690px;
            line-height: 1;

            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                padding-left: 86px;
                color: #fff;

                &:before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translate(0, -50%);
                    background-image: url("../assets/list.png");
                    width: 53px;
                    height: 34px;
                }
            }

            .name {
                font-size: 27px;
                font-weight: bold;
                position: relative;
                flex-shrink: 0;
                padding-right: 10px;
            }

            .line {
                background-color: #fff;
                width: 100%;
                height: 1px;
            }
            .num {
                flex-shrink: 0;
                width: 230px;
                padding-left: 10px;
                text-align: left;
                font-size: 91px;
                font-weight: bold;
            }
        }
    }
</style>