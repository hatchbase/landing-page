const crypto = require('crypto')
const axios = require('axios')

const apiRoot = 'https://us18.api.mailchimp.com/3.0/lists/c212cae123/members/'

exports.handler = (event) => {
  try {
    const email = event.queryStringParameters.email
    if (!email) {
      return {
        statusCode: 500,
        body: 'email query paramter required',
      }
    }
    const tag = event.queryStringParameters.tag

    // https://gist.github.com/kitek/1579117
    const emailhash = crypto.createHash('md5').update(email).digest('hex')

    return axios({
      method: 'put',
      url: apiRoot + emailhash,
      data: {
        email_address: email,
        tags: [tag],
        status: 'subscribed',
      },
      auth: {
        username: 'danrocha',
        password: process.env.MAILCHIMP_API_KEY,
      },
    })
      .then((res) => {
        return {
          statusCode: 200,
          body: JSON.stringify(res.data),
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('returning from here', err.response.data.detail)
        return { statusCode: 500, body: JSON.stringify(err.response.data) }
      })
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
