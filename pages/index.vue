<template>
  <Container class="container">
    <Button variant="info" @click="modal.show">Open modal 1</Button>
    <Button variant="info" @click="modal2.show">Open modal 2</Button>
    <Button variant="info" @click="modal3.show">Open modal 3</Button>
    <Modal :modal="modal">
      <ModalHeader>
        <ModalHeaderTitle>Название окна</ModalHeaderTitle>
      </ModalHeader>
      <ModalBody>
        <Text align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo urna, tristique lacinia feugiat
          hendrerit,
          accumsan sit amet arcu. Suspendisse in nulla turpis. Etiam fringilla scelerisque sem accumsan aliquam. Vivamus
          pharetra, leo in interdum lacinia, massa nulla vestibulum leo, et fringilla mi tortor sed tortor.
        </Text>
      </ModalBody>
    </Modal>

    <Modal :modal="modal2">
      <ModalHeader>
        <ModalHeaderTitle>Название окна</ModalHeaderTitle>
      </ModalHeader>
      <ModalBody>
        <Text align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo urna, tristique lacinia feugiat
          hendrerit,
          accumsan sit amet arcu. Suspendisse in nulla turpis. Etiam fringilla scelerisque sem accumsan aliquam. Vivamus
          pharetra, leo in interdum lacinia, massa nulla vestibulum leo, et fringilla mi tortor sed tortor.
        </Text>
      </ModalBody>
      <ModalFooter justifyContent="center" gap="10px">
        <Button variant="error" @click="modal2.hide" :disabled="!modal2.isCloseableRef.value">No</Button>
        <Button variant="success" @click="modal2.hide" :disabled="!modal2.isCloseableRef.value">Yes</Button>
      </ModalFooter>
    </Modal>

    <Modal :modal="modal3">
      <ModalHeader>
        <ModalHeaderTitle>Почта для чека</ModalHeaderTitle>
      </ModalHeader>
      <ModalBody>
        <Text align="center">
          Введите email, на который мы пришлем вам электронный чек
        </Text>
        <Input placeholder="example@email.com" pattern="mail" width="100%" required/>
      </ModalBody>
      <ModalFooter justifyContent="center">
        <Button type="submit" variant="info" @click="modal3.hide">Отправить</Button>
      </ModalFooter>
    </Modal>
  </Container>
</template>

<script setup lang="ts">
import useModal from "~/composables/useModal";
import Button from "~/components/UI/Button.vue";
import Container from "~/components/UI/Container.vue";
import Input from "~/components/UI/Input.vue";
import Text from "~/components/UI/Text.vue";

definePageMeta({
  layout: false,
  title: "Modals",
});

const modal = useModal({closeWait: 2});
const modal2 = useModal({closeWait: 10, isCloseable: true});
const modal3 = useModal({closeWait: 2, showClose: false});
</script>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap
}
</style>
