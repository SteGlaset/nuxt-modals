import { ref } from 'vue';
import {ModalOptions} from "~/types/types";
const useModal = <Props>(options: ModalOptions) => {
    const isOpenedRef = ref(options?.isOpened ?? false);
    const isCloseButtonShowedRef = ref(options?.showClose ?? true);
    const isCloseableRef = ref(options?.isCloseable ?? true);
    const closeWaitRef = ref(options?.closeWait ?? 0);
    const show = () => {
        isOpenedRef.value = true;
    };

    const hide = () => {
        isOpenedRef.value = false;
    };

    return {
        isCloseableRef,
        closeWaitRef,
        isOpenedRef,
        isCloseButtonShowedRef,
        show,
        hide,
    };
};

export default useModal;
