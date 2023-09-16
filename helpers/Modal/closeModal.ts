const closeModal = (modal) => {
    if (!modal.isCloseableRef.value) return;
    modal.hide();
}

export default closeModal;
