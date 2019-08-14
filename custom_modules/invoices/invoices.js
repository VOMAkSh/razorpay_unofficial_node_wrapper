const axios = require('axios');
const { baseUrl, keyId, keySecret } = require('../../config/config');
const invoicesUrl = baseUrl + "invoices";
const auth = { username: keyId, password: keySecret };
const headers = { "Content-Type": "application/json" };

const createInvoice = async invoiceDetails => {
  try {
    let { data } = await axios({
      method: 'post',
      url: invoicesUrl,
      auth,
      headers,
      data: invoiceDetails
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error) });
  }
}

const updateInvoice = async (invoiceId, updatedInvoiceDetails) => {
  try {
    let { data } = await axios({
      method: 'patch',
      url: `${invoicesUrl}/${invoiceId}`,
      auth,
      headers,
      data: updatedInvoiceDetails
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

const issueInvoice = async invoiceId => {
  try {
    let { data } = await axios({
      method: 'post',
      url: `${invoicesUrl}/${invoiceId}/issue`,
      auth,
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

const deleteInvoice = async invoiceId => {
  try {
    let { data } = await axios({
      method: 'delete',
      url: `${invoicesUrl}/${invoiceId}`,
      auth,
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

const fetchInvoice = async invoiceId => {
  try {
    let { data } = await axios({
      method: 'get',
      url: `${invoicesUrl}/${invoiceId}`,
      auth,
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

const fetchAllInvoices = async () => {
  try {
    let { data } = await axios({
      method: 'get',
      url: `${invoicesUrl}`,
      auth,
      headers
    });
    return new Promise((resolve, reject) => { resolve(data) });
  } catch (error) {
    return new Promise((resolve, reject) => { reject(error.message) });
  }
}

module.exports = {
  createInvoice,
  fetchAllInvoices,
  fetchInvoice,
  deleteInvoice,
  issueInvoice,
  updateInvoice
}