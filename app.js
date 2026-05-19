const API_URL = "https://script.google.com/macros/s/AKfycbxhuUNCZdwyGBI4rBEdK26weGVYFYiFrp_dJQDEwbs4xUZVFu2h_bqlrhlMVbbsjU3pMA/exec";

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
