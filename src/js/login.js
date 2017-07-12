const BASE_URL = 'https://checkmyprogress.ca'

const ACCOUNT_TYPES = [
    'Student / Parent',
    'Teacher',
    'Case Mgr',
    'Admin'
]

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
        request.setRequestHeader('Content-Type', 'application/json')
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








var Login = new Vue({
    el: '#login__container',
    data: {
        ACCOUNT_TYPES: ACCOUNT_TYPES,
        lists: {
            districts: [],
            schools: []
        },
        district: 0,
        school: 0,
        type: '',
        lastname: '',
        password: '',
    },
    methods: {
        login: null,
        fetch: null
    }
})



Login.login = function () {
    var packet = {
        '!apiRequest'       : 'loginCheck',
        '!userType'         : this.type,
        '!districtAutoID'   : this.district,
        '!schoolAutoID'     : this.school,
        '!username'         : this.lastname,
        '!password'         : this.password
    }


    Ajax({
        type: 'POST',
        url: BASE_URL + '/api/login.php',
        data: JSON.stringify(packet)
    })
    .then(data => {

    })
    .catch(req => {

    })

}

Login.fetch = function () {
    var self = this

    Ajax({
        type: 'POST',
        url: BASE_URL + '/api/login.php',
        data: JSON.stringify({appRequest: 'getDistrictsSchools'})
    })
    .then(data => {
        data = JSON.parse(data)
        data.districts.forEach(dist => (self.lists.districts.push(dist)))
    })
    .catch(req => {

    })
}




// Start everything off with getting the districts.
Login.fetch()
