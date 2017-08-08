
    
var BASE_URL = 'https://checkmyprogress.ca'

var ACCOUNT_LOGIN_TYPES = [
    'student',
    'teacher',
    'caseManager',
    'admin'
]

var ACCOUNT_TYPES = [
    'Student / Parent',
    'Teacher',
    'Case Mgr',
    'Admin'
]

ACCOUNT_TYPES = ACCOUNT_TYPES.map((type, i) => ({
    name: type,
    selected: false,
    login: ACCOUNT_LOGIN_TYPES[i]
}))

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
    } else { 
        request.setRequestHeader('Content-Type', 'application/json')
    }

    return new Promise((resolve, reject) => {

        request.onload = () => {
          if (request.status >= 200 && request.status < 400) {
            resolve(request.response)
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
        district: false,
        school: false,
        type: document.location.hash.substr(1),
        lastname: '',
        password: '',
    },
    methods: {
        login: null,
        fetch: null
    }
})

Login.select = function (obj) {
    this.type = obj.login
    document.location.hash = obj.login
}

Login.login = function () {
    var packet = {
        'apiRequest'       : 'loginCheck',
        'userType'         : this.type,
        'districtAutoID'   : this.district,
        'schoolAutoID'     : this.school,
        'username'         : this.lastname,
        'password'         : this.password
    }


    Ajax({
        type: 'POST',
        url: BASE_URL + '/api/login.php',
        data: JSON.stringify(packet)
    })
    .then(data => {
        data = JSON.parse(data)
        console.log(data)
        if (data.token) {
            localStorage['token'] = data.token
            document.location.reload()
        }
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
        data.schools.forEach(dist => (self.lists.schools.push(dist)))
    })
    .catch(req => {

    })
}




// Start everything off with getting the districts.
Login.fetch()
