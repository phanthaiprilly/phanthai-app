const API_URL = "https://script.google.com/macros/s/AKfycbxZ18JlxXMzjT1Y-s8b1M2lgYSU4ZIknPv6RTIYkzN3uDV0SGL9gYgF2f9g0I82RXQY/exec";

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


