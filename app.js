const API_URL = "https://script.google.com/macros/s/AKfycbw-egYktUhMTe03xCseiM4Dki_rIpYlAA4TlVngzMQAqD4S2A_pibPxK8VzmkcX-631Zg/exec";

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
