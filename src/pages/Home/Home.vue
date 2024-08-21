<template>
    123
    <div>321</div>
    <div @click="test">1234</div>
    <div @click="test2">4321</div>
</template>

<script setup>
import { useLoginStore } from '../../stores';
import { decrypt, enCrypto } from '../../utils/crypto';
import request from '../../utils/request';

const store = useLoginStore()

const test = () => {
    console.log(store)
    // store.onLoginVisible(true)
    request.get().then((res) => {
        console.log(res)
    })
    
    // console.log(decrypt('+JXTslZQTrrjPmsjzY7YQkQdxMCLN60N7+KWxDxLZSs='))
}

const test2 = () => {
    request.post('/login', {
        data: enCrypto(JSON.stringify({ phone: 17333890934 }))
    }).then(() => {})
}

</script>