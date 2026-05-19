const API_URL = "https://script.google.com/macros/s/AKfycbzLedIVQNejiWevtaKDkYD-iNgHobBYLV6Mmlc-WrRYq_nJnohGPQX2Bf9O1_4Va_u6/exec";

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


