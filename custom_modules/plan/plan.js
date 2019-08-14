const axios = require('axios');
const { baseUrl, keyId, keySecret } = require('../../config/config');
const plansUrl = baseUrl + "plans";
const auth = { username: keyId, password: keySecret };
const headers = { "Content-Type": "application/json" };

const createPlan = async planDetails => {
  try {
    const { data } = await axios({
      url: plansUrl,
      auth,
      headers,
      data: planDetails,
      method: 'post'
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error) });
  }
}

const getPlan = planId => {
  try {
    let { data } = await axios({
      url: `${plansUrl}/${planId}`,
      auth,
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

const getAllPlans = async () => {
  try {
    const { data } = await axios({
      url: plansUrl,
      auth,
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

module.exports = {
  createPlan,
  getPlan,
  getAllPlans
}