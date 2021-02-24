<template>
    <nav class="navbar">
        <ul class="navbar menu">
            <li>
                <router-link to="/">Заявки</router-link>
            </li>
            <li>
                <router-link to="/help">Помощь</router-link>
            </li>
            <li>
                <router-link to="/">Сообщения</router-link>
            </li>
            <li>
                <router-link to="/" @click="logout">Выход</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        const store = useStore()

        return {
            logout: () => {
                store.commit('auth/logout')
                router.push('/auth')
            }
        }
    }
}
</script>