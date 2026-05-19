const API_URL = "https://script.google.com/macros/s/AKfycbxf-UH3WNXr_FaLnFt0c5AZLcldHsLutEgQu2n08sldMotW4yTVBhhN0FrH4nuMh1ld/exec";

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


