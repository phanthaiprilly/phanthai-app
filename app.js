const API_URL = "https://script.google.com/macros/s/AKfycbxVno1IBEgvhSRq5_Q01htIWIV_TU4JlI_Mi1KPDL9aaYmsYOEOKAvxJq-5NwwzZRCp/exec";

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


