const API_URL = "https://script.google.com/macros/s/AKfycbwoAs4IHoBaU-e8MZW8iePJ9zxsyGVHTZmu8AAdp3naQE9UCLt56Q5PdjIBGcw6D8aerg/exec";

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


