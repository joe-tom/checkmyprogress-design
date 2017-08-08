
/**
 * Performs an AJAX request on the current Checkmyprogress API.
 * @param  {Object} e - contains all the information:
 *     @key url - the URL of the AJAX request.
 *     @key type - the type of AJAX request.
 *     @key data - the data if this a post request.
 *     
 * @return {Promise}
 */
var Ajax = (e) => {
    var request = new XMLHttpRequest()
    request.open(e.type, e.url , true)

    if (e.type == 'POST') {
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    }

    return new Promise((resolve, reject) => {

        request.onload = () => {
          if (request.status >= 200 && request.status < 400) {
            resolve(request.responseText)
          } else {
            reject(request)
          }
        }

        request.onerror = () => {
            reject(request)
        }

        request.send(e.data)
    })
}






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
            message: '',
            contactSubmit: 'Send Message'
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
Contact.check = function () {
    return new Promise ((resolve, reject) => {
        resolve()
    }) 
}


Contact.post = function () {
    var data = ''

    for (var type in this.form) {
        data += (type + '=' + this.form[type] + '&')
    }
    data = data.slice(0,-1)
    console.log(data)
    return Ajax({
        url: '/login.post',
        type: 'POST',
        data: data
    })
}