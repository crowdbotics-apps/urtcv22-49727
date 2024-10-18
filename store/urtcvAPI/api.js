import axios from "axios"
const urtcvAPI = axios.create({
  baseURL: "https://urtcv22-49727.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return urtcvAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return urtcvAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return urtcvAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_yncbdh_list(payload) {
  return urtcvAPI.get(`/api/v1/yncbdh/`)
}
function api_v1_yncbdh_create(payload) {
  return urtcvAPI.post(`/api/v1/yncbdh/`, payload)
}
function api_v1_yncbdh_retrieve(payload) {
  return urtcvAPI.get(`/api/v1/yncbdh/${payload.id}/`)
}
function api_v1_yncbdh_update(payload) {
  return urtcvAPI.put(`/api/v1/yncbdh/${payload.id}/`, payload)
}
function api_v1_yncbdh_partial_update(payload) {
  return urtcvAPI.patch(`/api/v1/yncbdh/${payload.id}/`, payload)
}
function api_v1_yncbdh_destroy(payload) {
  return urtcvAPI.delete(`/api/v1/yncbdh/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return urtcvAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return urtcvAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return urtcvAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return urtcvAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return urtcvAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return urtcvAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return urtcvAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return urtcvAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return urtcvAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return urtcvAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return urtcvAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_yncbdh_list,
  api_v1_yncbdh_create,
  api_v1_yncbdh_retrieve,
  api_v1_yncbdh_update,
  api_v1_yncbdh_partial_update,
  api_v1_yncbdh_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
