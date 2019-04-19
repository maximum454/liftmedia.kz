<template>
    <section class="what">
        <div class="container">
            <h2>
                <div class="text-light bg-success"><span class="text-norm">Почему реклама</span></div>
                <br>
                <span class="ml-lg-5 ml-xs-0">в лифтах работает?</span>
            </h2>
            <p>- монитор всегда перед глазами потенциальных клиентов;</p>
            <p>    - реклама в жилых домах адресная и подходит для тех, кто хочет охватить жителей одного района или даже нескольких домов;</p>
            <p>   - доступная стоимость, гибкость и оперативность размещения удобны как для крупного бизнеса, так и для индивидуальных предпринимателей.</p>
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
            pointer-events: none;
        }
        p {
            font-size: 23px;
        }
        @media (max-width: 376px){
            p {
                font-size: 18px;
            }
        }
    }
</style>