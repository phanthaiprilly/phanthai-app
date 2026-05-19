const API_URL = "https://script.google.com/macros/s/AKfycby3vUE-cAAdfuXJj5mRvRpyz5qIkZ4G75s6hlimCjZ6AqbF6883MtSb5LlhVSxMCgxCvw/exec";

async function apiCall(payload) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    return await res.json();
  } catch (e) {
    return { ok: false, message: "Erreur réseau : " + e.message };
  }
}
