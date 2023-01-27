const { createApp} = Vue;

createApp({

    data() {
        return {
            currentMessage: 0,
            dt: null,
            inputSearch: '',
            inputText: '',
            active: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropdown: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            dropdown: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropdown: false
                        },

                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            dropdown: false

                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            dropdown: false

                        },

                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            dropdown: false
                        },

                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            dropdown: false

                        },

                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,

                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            dropdown: false
                    
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            dropdown: false
                        },

                    ],
                },
            ],
        }


    },
    methods: {
        addInput: function (active) {

            if (this.inputText != '') {
                const newMessage = {
                    // date: this.dt.now().c.hour + ':' + this.dt.now().c.minute,
                    date: this.dt.now().toLocaleString(this.dt.DATETIME_SHORT_WITH_SECONDS),
                    message: this.inputText,
                    status: 'sent',
                    dropdown: false
                }

                // Push 
            this.contacts[active].messages.push(newMessage);

            this.inputText = '';

            // Dopo 1 secondo aggiungi un altro oggetto all'array messages OK
            // setTimeout (this.prova, 1000);
            setTimeout (() => {
                this.addAnswer(active)
            }, 1000);
            }

        },
        addAnswer: function (active) {

            const newAnswer = {
                // date: this.dt.now().c.hour + ':' + this.dt.now().c.minute,
                date: this.dt.now().toLocaleString(this.dt.DATETIME_SHORT_WITH_SECONDS),
                message: 'Ok',
                status: 'received',
                dropdown: false
            }

            this.contacts[active].messages.push(newAnswer);          

        },
        deleteMessage: function (active, indexMessage) {

                this.contacts[active].messages.splice(indexMessage, 1);
        },
    },
    computed: {

        // Non funziona caseSensitive
        contactsList () {
            if(this.inputSearch.length > 0) {
                return this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.inputSearch))
            }
            return this.contacts
            

        },
        // lastDate () {
        //     // Da modificare
        //     // this.contacts[active].messages[this.messages.length - 1].date;
        //     // if(this.messages.length - 1) {
        //     //     return this.messages[this.messages.length].date;
        //     // }
        //     // return this.date
            

        // },
        // dateVisualization (element) {

        //     // console.log(this.messages.date = this.dt.toLocaleString(DateTime.TIME_24_SIMPLE));
        //     return this.messages.date = this.date.toLocaleString(DateTime.TIME_24_SIMPLE);

        // }
    },
    mounted() {
        this.dt = luxon.DateTime;
    },
}).mount('#app')


