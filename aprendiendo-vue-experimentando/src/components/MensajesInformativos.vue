<template>
  <div v-if="modalVisible" class="modal fade show" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Título del Modal</h5>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{ mensaje }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Cerrar</button>
          <button type="button" class="btn btn-primary" @click="closeModal">Guardar cambios</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    mensaje: {
      type: String,
      default: "Mensaje por defecto"
    },
    modalVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:modalVisible', false);
    }
  }
});
</script>