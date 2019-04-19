<template>
    <section class="map">
        <div class="container">
            <form class="map__form">
                <input type="text" class="form-control" placeholder="Поиск по ЖК">
                <input type="submit" class="btn btn-success" value="Найти">
            </form>
            <div class="d-flex justify-content-between align-items-center mb-1">
                <div class="map__num">150 жилых комплексов</div>
                <a href="Lift-Media-2019.xlsx" class="map__price"><span>Прайс-лист</span></a>
            </div>
            <div class="map__map">
                <div id="map"></div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: 'map',
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .map {
        padding: 57px 0;
        position: relative;
        &__num {
            color: #000;
            font-size: 21px;
            line-height: 1;
            font-weight: bold;
        }
        #map {
            width: 100%; height: 350px; padding: 0; margin: 0;
        }
        &__price {
            position: relative;
            padding-right: 23px;
            color: #000;
            text-decoration: none;
            flex-shrink: 0;
            &:after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                background-image: url("../assets/price.png");
                background-size: 100%;
                width: 17px;
                height: 23px;
            }

            span {
                border-bottom: 1px solid;
            }
        }

        &__map {
            width: 100%;
            margin: 0 auto;
            text-align: center;
        }

        &__form {
            position: absolute;
            top: -35px;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            background-color: #fff;
            max-width: 570px;
            width: 100%;
            margin: 0 auto;
            padding: 15px 25px 15px 67px;
            border-radius: 50px;
            box-shadow: 0 2px 14px rgba(#d7eef6, 8);
            &:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 25px;
                transform: translate(0,-50%);
                background-image: url("../assets/search.svg");
                width: 20px;
                height: 21px;
            }
        }

        .form-control {
            border: none;
            &:focus{
                border: none;
                box-shadow: none;
            }
        }

        .btn {
            border-radius: 18px;
            padding-left: 30px;
            padding-right: 30px;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: bold;
        }
        @media (max-width: 376px){
            &__form {
                position: absolute;
                top: -35px;
                left: 0;
                right: 0;
                display: flex;
                align-items: center;
                background-color: #fff;
                max-width: 570px;
                width: 100%;
                margin: 0 auto;
                padding: 10px 10px 10px 47px;
                border-radius: 50px;
                box-shadow: 0 2px 14px rgba(#d7eef6, 8);
                &:before{
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 25px;
                    transform: translate(0,-50%);
                    background-image: url("../assets/search.svg");
                    width: 20px;
                    height: 21px;
                }
            }
        }
    }
</style>