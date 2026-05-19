const API_URL = "https://script.google.com/macros/s/AKfycbz3MeJdT74q894UIfCDHRIlWXq1n6NgywGr7eyRPTMpTv4VuT7i_K2fx3kUdW2uMpon/exec";

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


