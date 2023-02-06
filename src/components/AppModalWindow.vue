<template>
  <div>
    <!-- Кнопка-триггер модального окна -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#item-${item.id}`">
      {{ item.name }}
    </button>

    <!-- Модальное окно -->
    <div class="modal fade" :id="`item-${item.id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ item.name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
          </div>
          <div class="modal-body">
            {{ item.description }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "AppModalWindow",
  props: ['item']
}
</script>

<style scoped>

</style>