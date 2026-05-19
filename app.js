const API_URL = "https://script.google.com/macros/s/AKfycbxACUI5of6Rt2-b92jS4Fk80X7lc14PvLm4vHKZOopzAJnqXlvZNJXTt05s_ybMamHI/exec";

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


