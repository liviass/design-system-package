import { App, Plugin } from 'vue'

import Botao from './botao.vue'

export default {
    install(Vue: App) {
        Vue.component(Botao.name, Botao)
    }
} as Plugin

export {
    Botao as DSBotao
}