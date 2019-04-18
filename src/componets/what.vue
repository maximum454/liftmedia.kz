<template>
    <section class="what">
        <div class="container">
            <h2>
                <div class="text-light bg-success"><span class="text-norm">Почему реклама</span></div>
                <br>
                <span class="ml-5">в лифтах работает?</span>
            </h2>
            <p>Реклама в&nbsp;лифтах воздействует в&nbsp;спокойной обстановке, при расслабленном внимании. Она не&nbsp;воспринимается
                как информационный шум.
                <nobr>ТВ-рекламу</nobr>
                легко переключить, реклама на&nbsp;радио прослушивается в&nbsp;фоновом режиме, в&nbsp;интернете ее&nbsp;можно
                выключить, а&nbsp;наружную рекламу читают бегло, на&nbsp;ходу. А&nbsp;яркая, динамичная реклама в&nbsp;лифтах
                обращает на&nbsp;себя внимание жильцов, желающих скоротать время поездки на&nbsp;нужный этаж.
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'what',
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .what {
        position: relative;
        padding-bottom: 50px;

        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background-image: url("../assets/bg.png");
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            width: 100%;
            height: 728px;
        }
        p {
            font-size: 23px;
        }
    }
</style>