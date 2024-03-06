import { fetchJSON } from "./fetchJSON";

export async function fetchCategories() {
  return await fetchJSON(`/api/category`);
}
export async function fetchFollow() {
  return await fetchJSON(`/api/follow`);
}
export async function fetchImpact() {
  return await fetchJSON(`/api/impact`);
}
export async function fetchImpactByProject(id) {
  return await fetchJSON(`/api/impact/project/${id}`);
}
export async function fetchLogin() {
  return await fetchJSON("/api/login");
}
export async function fetchUserInfo() {
  return await fetchJSON("/api/user");
}
export async function fetchSpecificPaymentPlan(id) {
  return await fetchJSON(`/api/paymentplan/plan/${id}`);
}
export async function fetchAllProjects() {
  return await fetchJSON(`/api/project`);
}
export async function fetchProject(id) {
  return await fetchJSON(`/api/project/${id}`);
}
export async function fetchProjectsByCategory(id) {
  return await fetchJSON(`/api/project/category/${id}`);
}
export async function fetchSupporter(id) {
  return await fetchJSON(`/api/support/${id}`);
}
export async function fetchActivePaymentplans() {
  return await fetchJSON(`/api/paymentplan/active`);
}
export async function fetchTestimonials() {
  return await fetchJSON(`/api/testimonial`);
}
export async function fetchProjectStatistics(id) {
  return await fetchJSON(`/api/transaction/all/${id}`);
}
export async function fetchTransactions() {
  return await fetchJSON(`/api/transaction`);
}
export async function fetchTransactionsByProjectId(id) {
  return await fetchJSON(`/api/transaction/project/${id}`);
}
export async function fetchProjectsDonatedTo() {
  return await fetchJSON(`/api/transaction/donated`);
}
export async function fetchStatistics() {
  return await fetchJSON(`/api/transaction/statistics`);
}
export async function fetchProjectTotalDonated(id) {
  return await fetchJSON(`/api/transaction/projectDonated/${id}`);
}
export async function fetchConsent() {
  return await fetchJSON(`/api/consent/user`);
}
export async function fetchUserImpact() {
  return await fetchJSON(`/api/userimpact/all`);
}
export async function fetchUserImpactByProjectId(id) {
  return await fetchJSON(`/api/userimpact/project/${id}`);
}
