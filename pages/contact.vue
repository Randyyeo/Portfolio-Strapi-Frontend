<template>
    <v-app>
        <v-container data-aos="fade-down" class="mt-5">
            <form action="https://formsubmit.co/randallysk@gmail.com" class="w-75 mx-auto" method="POST">
                <h2 class="mb-5 text-center">Have any suggestions or ideas? Feel free to contact me!</h2>
                <v-text-field label="Name" name="name" solo></v-text-field>
                <input type="hidden" name="_subject" value="New submission!">
                <input type="hidden" name="_next" value="https://randyyeo.netlify.app/thanks">
                <v-text-field label="Email" name="email" solo></v-text-field>
                <v-textarea label="Description" name="description" solo></v-textarea>
                <v-btn type="submit">Submit</v-btn>
            </form>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>