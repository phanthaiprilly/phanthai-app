const API_URL = "https://script.google.com/macros/s/AKfycbxzPKRbz7T4Ctb0p2d7NcJaT6b442-E1O2uyACer8saQBQXG7UfE3r43MX9jAxu3Rek/exec";

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


