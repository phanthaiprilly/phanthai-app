const API_URL = "https://script.google.com/macros/s/AKfycbzjSDvRUKzzSIuRWKAUL2Ww5r1Qt9tcN-fBSjRIAXfBVT_ICd9tJ4GQ9yVvvoCoPf96/exec";

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


