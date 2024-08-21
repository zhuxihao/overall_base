<template>
    <div v-if="store.isLoginVisible">
        <div class="login_cover"></div>
        <div class="login_content" @click="login"></div>
    </div>
</template>

<script setup>
import { useLoginStore } from '../../stores';
import { enCrypto } from '../../utils/crypto';

const store = useLoginStore()

const login = () => {
    const info = {
        a: 1,
    }

    const infoStr = JSON.stringify(info)

    console.log(enCrypto(infoStr))

}

</script>

<style scoped lang="less">
.login_cover {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    z-index: 9;
}

.login_content {
    position: fixed;
    height: 400px;
    width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    // background: linear-gradient(-45deg, rgba(31, 6, 246, 0.2), rgba(161, 78, 197, 0.2), rgba(213, 135, 145c, 0.2), rgba(213, 135, 145, 0.2));
    // animation: login_bg_color 6s ease infinite;

    // background: linear-gradient(-45deg, #ee7752, #ce3e75, #6bc9eb, #12df94);
    background: linear-gradient(25deg, #350974, #7b367c, #b76483, #f39587);
    background-size: 400% 400%;
    animation: loginBgColor 10s ease infinite;

}

@keyframes loginBgColor {

    0% {
        background-position: 0% 0%;
    }

    25% {
        background-position: 50% 0%;
    }

    50%{
        background-position: 50% 50%;
    }

    75%{
        background-position: 0% 50%;
    }

    100% {
        background-position: 0% 0%;
    }
}
</style>