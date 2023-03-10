const { createApp} = Vue;

createApp( {
    
    data() {
        return {
            // currentMessage: 0,
            arrayMessages: [],
            arrayDates: [],
            dt: null,
            inputMessages: '',
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
                            message: 'Ciao Claudia, hai novita???',
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
                            message: 'Fai gli auguri a Martina che e?? il suo compleanno!',
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
                            message: 'No, l\'ho gia?? mangiata ieri, ordiniamo sushi!',
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
                    date: this.dt.now().toLocaleString(this.dt.DATETIME_SHORT_WITH_SECONDS),
                    message: this.inputText,
                    status: 'sent',
                    dropdown: false
                }

                // Push 
            this.contacts[active].messages.push(newMessage);

            this.inputText = '';

            setTimeout (() => {
                this.addAnswer(active)
            }, 1000);
            }

        },
        addAnswer: function (active) {

            const newAnswer = {
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
        changeFormatDate: function (element) {

            const formatDate = element.date;

            return formatDate.slice(11, 16);

        },
        getlastDate: function (contact) {

            const myMessages = contact.messages;
            

            const myDate = myMessages[myMessages.length - 1].date;
            const myFormatDate = myDate;

            return myFormatDate.slice(11, 16);

        },
        getlastMessage: function (contact) {

            const myNewMessages = contact.messages;
            

            const myMessage = myNewMessages[myNewMessages.length - 1].message;

            let reducedMessage = myMessage;

            if (reducedMessage.length > 30) {
                return reducedMessage = myMessage.substring(0, 40) + '...';
            }
            else {
                return reducedMessage = myMessage.substring(0, 40);
            }


        },
        searchMessages: function () {

            // Prendi sezione 2 e riduci la larghezza a 40%.
            document.getElementById('section-2').style.width = '40%';

            // Al click togliere dalla sezione 3 la classe not-visible
            document.getElementById('section-3').classList.remove('not-visible');
        },
        closeSearchMessages: function () {

            // Prendi sezione 2 e ripristina la larghezza a 70%.
            document.getElementById('section-2').style.width = '70%';

            // Al click aggiungi dalla sezione 3 la classe not-visible
            document.getElementById('section-3').classList.add('not-visible');
        },   
    },
    computed: {

        contactsList () {
            if(this.inputSearch.length > 0) {

                // Soluzione con problema lowerCase perch?? associato a contact.name
                // return this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.inputSearch))

                // Soluzione senza problema toLowerCase
                return this.contacts.filter((contact) => {
                return this.inputSearch
                .toLowerCase()
                .split(" ")
                .every((v) => contact.name.toLowerCase().includes(v));
                })
                
            }
            return this.contacts
        },
        messagesList () {

            if(this.inputMessages.length > 0) {

                const arrayMessage = [];

                for (let i = 0; i < this.contacts[this.active].messages.length; i++) {

                    const object = {
                        message: this.contacts[this.active].messages[i].message,
                        date: this.contacts[this.active].messages[i].date.slice(11, 16)
                    }

                    arrayMessage.push(object);
                }

                console.log(arrayMessage);

                const arrayFiltrato = (arrayMessage.filter((object) => {
                    return this.inputMessages
                    .toLowerCase()
                    .split(" ")
                    .every((v) => object.message.toLowerCase().includes(v));
                    }));

                console.log(arrayFiltrato);
                return arrayFiltrato;

                
            }
        },
    },
    mounted() {
        this.dt = luxon.DateTime;
    },
}
).mount('#app')


