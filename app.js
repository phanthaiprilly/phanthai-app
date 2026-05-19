const API_URL = "https://script.google.com/macros/s/AKfycby3vUE-cAAdfuXJj5mRvRpyz5qIkZ4G75s6hlimCjZ6AqbF6883MtSb5LlhVSxMCgxCvw/exec";

async function apiCall(payload) {
  const formData = new FormData();
  formData.append("data", JSON.stringify(payload));

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: formData
    });

    const text = await res.text();
    return JSON.parse(text);

  } catch (e) {
    return { ok: false, message: "Erreur réseau : " + e.message };
  }
}

