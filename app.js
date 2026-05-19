const API_URL = "https://script.google.com/macros/s/AKfycbxxzHhezYFUyuDa6mDGk6oGLQiUKjzWgB9NQ4oUZKTYtoA0dEW8jdY7HMjUdsXocho/exec";

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

