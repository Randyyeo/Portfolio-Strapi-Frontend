<template>
    <v-app>
        <v-container class="text-center">
            <h2 class="text-center text">Thank you for your email. I will reply to you as soon as possible 😊</h2>
            <v-btn class="mt-5" @click="goTo">Back to Homepage</v-btn>
        </v-container>
        
    </v-app>
</template>

<script>
    export default {
        methods:{
            goTo(){
                this.$router.push("/")
            }
        }
    }
</script>

<style lang="scss" scoped>
.text{
    margin-top: 4cm;
}
</style>