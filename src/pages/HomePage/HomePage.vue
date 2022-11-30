
<template lang="pug">
.home_wrapper
    section.hero_banner
        .hero_banner__content
            h1 Калькулятор пазогребневых гипсовых плит
            p Быстро рассчитайте количество требуемых ПГП для выкладки стены с учётом проёмов и общий вес стены.
            router-link(to="/calc")
                BaseButton Рассчитать
        .hero_banner__img
            img(src="../../assets/room.png")
</template>

<script>
import { BaseButton } from '@/shared/ui/BaseButton';
    export default {
        name: 'HomePage',
        components: {BaseButton}
    }
</script>

<style lang="scss" scoped>
.home_wrapper{
    .hero_banner{
        background-color: $card-bg-color;
        border-radius: $border-radius;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        .hero_banner__content{
            margin-bottom: 30px;
            flex-basis: auto;
            max-width: 500px;
        }
        .hero_banner__img{
            flex-basis: auto;
            img{
                max-height: 250px;
                width: auto;
            }
        }
    }
}

@media (min-width: 768px) { 
    .home_wrapper{
        .hero_banner{
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        .hero_banner__content{
            flex-basis: 1/2;
        }
        .hero_banner__img{
            flex-basis: 1/2;
            img{
                max-height: 400px;
            }
        }
    }
    }
}
</style>