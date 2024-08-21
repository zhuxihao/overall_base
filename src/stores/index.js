
import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useLoginStore = defineStore('useLoginStore', () => {

    const loginVisible = ref(false)

    const isLoginVisible = computed(() => loginVisible.value)

    function onLoginVisible(visible) {
        console.log(visible)
        loginVisible.value = visible
    }


    return { loginVisible, isLoginVisible, onLoginVisible }
})