const axios = require('axios');
const { baseUrl, keyId, keySecret } = require('../../config/config');
const subscriptionUrl = baseUrl + "subscription";
const auth = { username: keyId, password: keySecret };
const headers = { "Content-Type": "application/json" };

const getSubscription = async subscriptionId => {
  try {
    let { data } = await axios({
      url: `${subscriptionUrl}/${subscriptionId}`,
      auth,
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error) });
  }
}

const getAllSubscriptions = async () => {
  try {
    let { data } = await axios({
      url: subscriptionUrl,
      auth,
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error) });
  }
}

const cancelSubscription = async subscriptionId => {
  try {
    let { data } = axios({
      url: `${subscriptionUrl}/${subscriptionId}/cancel`,
      auth,
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

module.exports = {
  getSubscription,
  getAllSubscriptions,
  cancelSubscription
}