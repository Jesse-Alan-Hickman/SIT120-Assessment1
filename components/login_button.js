Vue.component('login-button', {
    template: '<button class="accessButton">{{ buttonText }}</button>',
    props: {
        buttonText: {
            type: String,
            default: () => "Error",
        }
    },
})