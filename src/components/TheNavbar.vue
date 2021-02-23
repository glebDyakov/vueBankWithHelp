<template>
    <nav class="navbar">
        <ul class="navbar menu">
            <li>
                <a href="#">Заявки</a>
            </li>
            <li>
                <a href="#">Помощь</a>
            </li>
            <li>
                <a href="#">Сообщения</a>
            </li>
            <li>
                <a href="#" @click="logout">Выход</a>
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