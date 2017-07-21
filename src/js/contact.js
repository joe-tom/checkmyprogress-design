
const LOAD_CHARACTER = 'O'

var Contact = new Vue({
    el: '#contact__form',
    data: {
        form: {
            name: '',
            email: '',
            school: '',
            district: '',
            phone: '',
            subject: '',
            message: ''
        },
        sendVal: 'SEND',
        disabled: false,
        interval: 0
    },
    methods: {
        check: null,
        post: null,
        send: null,
        report: null,
        startL: null,
        endL: null
    }
})

Contact.send = function () {
    Contact
    .check()
    .then(() => {
        Contact.startL()
        Contact
        .post()
        .then(() => {
            Contact.endL()
        })
        .catch(() => {
            Contact.endL()
        })
    })
    .catch((field) => {
        Contact.report(field)
    })

}

Contact.startL = function () {
    var self = this
    
    // Don't double click.
    this.disabled = true

    // Denotes the number of O's
    var x = 0

    // Add all the O's while this going on.
    this.interval = setInterval(function () {
        if ((x++) % 4 == 0) {
            self.sendVal = ''
        } else {
            self.sendVal += LOAD_CHARACTER
        }
    }, 200)
}

Contact.endL = function () {
    var self = this

    clearInterval(this.interval)
    this.sendVal = 'SENT!'

    setTimeout(function () {
        self.disabled = false
        self.sendVal = 'SEND'
    }, 1000)
}

Contact.report = function () {

}
