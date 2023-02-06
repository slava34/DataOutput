<template>
  <div>
    <div class="accordion accordion-flush" v-for="group in groups" :key="group.id" :id="`group-${group.id}`">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#body-${group.id}`">
            {{ group.name }}
          </button>
        </h2>
        <div :id="`body-${group.id}`" class="accordion-collapse collapse" :data-bs-parent="`#group-${group.id}`">
          <div class="accordion-body">
            <ul
                v-if="group.items && group.items.length > 0"
                class="list-group"
            >
              <li
                  v-for="item in group.items" :key="item.id"
                  class="list-group-item"
              >
                <app-modal-window :item="item"></app-modal-window>
              </li>
            </ul>
            <h3 v-else>Нет Подгруппы</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppModalWindow from "@/components/AppModalWindow";
export default {
name: "AppGroupsList",
  components: {AppModalWindow},
  props: ['groups', 'items']
}
</script>

<style scoped>

</style>