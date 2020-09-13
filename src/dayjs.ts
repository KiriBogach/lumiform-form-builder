import Vue from "vue";
import dayjs from 'dayjs';
Vue.prototype.$dayjs = dayjs;

declare module 'vue/types/vue' {
    // 3. Declare augmentation for Vue
    interface Vue {
        $dayjs(date?: dayjs.ConfigType, option?: dayjs.OptionType, locale?: string): dayjs.Dayjs;
    }
}