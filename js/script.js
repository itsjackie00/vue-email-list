const {createApp} = Vue;


//Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// creazione app
createApp({
    data(){
        return {
            emails: [],
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            loading: false
        }
    }
})