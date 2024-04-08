const { createApp } = Vue;


//Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// creazione app
createApp({
    data() {
        return {
            emails: [],
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            numbEmails: 10,
            loading: false
        }
    },
    methods: {
        // funzione per generare 10 indirizzi email e stamparli in pagina all'interno di una lista
        generateEmails() {
            this.loading = true;
            for (let i = 0; i < this.numbEmails; i++) {
                axios.get(this.apiUrl).then((response) => {
                    this.emails.push(response.data.response);
                    this.loading = false;
                    console.log(this.emails);
                })
            }
        }
    },
    created() {
        this.generateEmails();
        console.log(this.emails)
    }
}).mount('#app')