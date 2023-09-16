import {Ref} from "@vue/reactivity";

export interface ModalOptions {
    isOpened?: boolean;
    isCloseable?: boolean;
    closeWait?: number;
    showClose?: boolean;
}

export interface ModalOptionsProp {
    isOpenedRef: Ref<boolean>;
    isCloseableRef: Ref<boolean>;
    closeWaitRef: Ref<number>;
    isCloseButtonShowed: Ref<boolean>;
    show: () => void;
    hide: () => void;
}
