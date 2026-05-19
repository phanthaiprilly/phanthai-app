const API_URL = "https://script.google.com/macros/s/AKfycbzxNmgBtj3-eKJqT6YaaZ3j8YbY10BFA70duLYT71KI2BZMMS4IMLZoNE9GCa3ayFhw/exec";

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


