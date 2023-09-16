import {Ref} from "@vue/reactivity";

const useTimer = (wait: number) => {
    const timer: Ref<number> = ref(0);
    const startTimer = () => {
        if (wait <= 0) return;

        timer.value = wait;
        const interval = setInterval(() => {
            timer.value--;

            if (timer.value <= 0) {
                clearInterval(interval);
            }
        }, 1000);
    };


    onMounted(() => {
        startTimer();
    });

    return [timer];
}

export default useTimer;
