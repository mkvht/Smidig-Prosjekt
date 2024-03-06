import { postJSON } from "./postJSON";

export async function attemptLogin(provider, login) {
  return await postJSON(`/api/login/${provider}`, login);
}
export async function patchUserDetails(userDetails) {
  return await postJSON(`/api/user`, userDetails, "PATCH");
}
export async function postFollowProject(id) {
  return await postJSON(`/api/follow`, { project_id: id });
}
export async function unFollowProject(id) {
  return await postJSON(`/api/follow`, { project_id: id }, "DELETE");
}
export async function postPaymentplan(paymentplan) {
  return await postJSON(`/api/paymentplan`, paymentplan, "POST");
}
export async function patchPaymentplan(paymentplan_id, paymentplan) {
  return await postJSON(
    `/api/paymentplan/plan/${paymentplan_id}`,
    paymentplan,
    "PATCH"
  );
}
export function setPaymentPlanInactive(paymentplan_id) {
  return postJSON(`/api/paymentplan/inactive/${paymentplan_id}`, {}, "PATCH");
}
export async function putChangeConsent(consent) {
  return await postJSON(`/api/consent`, consent, "PUT");
}
