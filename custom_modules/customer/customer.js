const axios = require('axios');
const { baseUrl, keyId, keySecret } = require('../../config/config');
const customerUrl = baseUrl + "customers";
const auth = { username: keyId, password: keySecret };
const headers = { "Content-Type": "application/json" };

const createCustomer = async customerDetails => {
  if (!typeof customerDetails === "object" ) throw Error("Please give valid user details");
  try {
    let { data } = await axios({
      url: customerUrl,
      auth,
      method: 'post',
      headers,
      data: customerDetails
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

const getCustomer = async customerId => {
  try {
    let { data } = await axios({
      url: customerUrl + `/${customerId}`,
      auth,
      method: 'post',
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

const editCustomer = async (customerId, updateCustomerData) => {
  try {
    let { data } = await axios({
      url: customerUrl + `/${customerId}`,
      auth,
      method: 'put',
      headers,
      data: updateCustomerData
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

const getAllCustomers = async () => {
  try {
    let { data } = await axios({
      url: customerUrl,
      auth,
      method: 'get',
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

module.exports = {
  createCustomer,
  getCustomer,
  editCustomer,
  getAllCustomers
}