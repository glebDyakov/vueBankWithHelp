<template>
  <app-page title="Список заявок">
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
  <request-table :requests="[]"></request-table>
  <teleport to="body">
    <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
      <request-modal></request-modal>
    </app-modal>
  </teleport>
  </app-page>
  <!-- <div class="card">
    <h1 class="card-title">Список заявок</h1>
  </div> -->
</template>

<script>
import AppPage from '../components/ui/AppPage.vue'
import AppModal from '../components/ui/AppModal'
import RequestTable from '../components/request/RequestTable'
import RequestModal from '../components/request/RequestModal'
import {ref} from 'vue'
export default {
  
  setup(){
    const modal = ref(false)

    return {
      modal,
      
    }
  },
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal
  },
}
</script>
