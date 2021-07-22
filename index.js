const MyfirstVue = {
    data() {
        return {
            name: 'taro'
        }
    },
    methods: {
        onButtonClicked() {
            alert(`${this.name} さん、Vue.jsの世界にようこそ!`)
        }
    }
}
Vue.createApp(MyfirstVue).mount('#my-first-vue')