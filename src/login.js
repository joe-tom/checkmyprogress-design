
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

        request.send()
    })
}








var Login = new Vue({
    el: '#login__container',
    data: {
        district: 0,
        school: 0,
        lastname: '',
        password: '',
    },
    methods: {
        login: null,
        fetch: null
    }
})



Login.login = function () {

}

Login.fetch = function () {
    Ajax
    .get({
        type: 'GET',
        url: '/districts'
    })
    .then(data => {

    })
    .catch(request => {

    })

}




// Start everything off with getting the districts.
Login.fetch()
