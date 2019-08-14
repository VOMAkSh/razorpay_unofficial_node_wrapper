const { createCustomer, getCustomer, editCustomer, getAllCustomers } = require('./custom_modules/customer/customer');
const { getSubscription, getAllSubscriptions, cancelSubscription } = require('./custom_modules/subscription/subscription');;
const { createInvoice, fetchAllInvoices, fetchInvoice, deleteInvoice, issueInvoice, updateInvoice } = require('./custom_modules/invoices/invoices');
const { createPlan, getPlan, getAllPlans } = require('./custom_modules/plan/plan');
const { createCredentials } = require('./config/config');

const init = (id, secret) => createCredentials(id, secret)

module.exports = {
  createCustomer, 
  getCustomer, 
  editCustomer, 
  getAllCustomers,
  getSubscription,
  getAllSubscriptions,
  cancelSubscription,
  createInvoice,
  fetchAllInvoices,
  fetchInvoice,
  deleteInvoice,
  issueInvoice,
  updateInvoice,
  createPlan,
  getPlan,
  getAllPlans,
  init
}