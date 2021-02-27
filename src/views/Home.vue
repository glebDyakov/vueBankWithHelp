<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="Список заявок" v-else>
    <template #header>
      <button @click="modal = true" class="btn primary">Создать</button>
    </template>
    <!-- <table>
      <thead>
        <th>1</th>
        <th>2</th>
      </thead>
    </table>
   -->
  <!-- <request-filter v-model="filter" ></request-filter> -->
  <request-table :requests="requests"></request-table>
  
  <teleport to="body">
    <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
      <request-modal @created="modal = false"></request-modal>
    </app-modal>
  </teleport>
</app-page>
  <!-- <div class="card">
    <h1 class="card-title">Список заявок</h1>
  </div> -->
</template>

<script>
import AppPage from '../components/ui/AppPage.vue'
import AppLoader from '../components/ui/AppLoader.vue'
import AppModal from '../components/ui/AppModal'
import RequestTable from '../components/request/RequestTable'
import RequestModal from '../components/request/RequestModal'
import RequestFilter from '../components/request/RequestFilter'
import {ref, computed, onMounted, watch} from 'vue'
import { useStore } from 'vuex'
export default {
  
  setup(){
    const store = useStore()
    const modal = ref(false)
    const loading = ref(false)
    const filter = ref({})

    watch(filter, val => console.log(val))

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
      console.log("store.getters[requests]", store.getters['requests'])
    })
    const requests = computed(() => store.getters['requests']
    // .filter(request => {
    //   if(filter.value.name){
    //     return request.fio.includes(filter.value.name)
    //   }
    //   return request
    // }).filter(request => {
    //   if(filter.value.status){
    //     return filter.value.status === request.status
    //   }
    //   return request
    // })
    )

    return {
      modal,
      requests,
      loading,
      filter
    }
  },
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal,
    AppLoader,
    RequestFilter

  },
  
}
</script>
