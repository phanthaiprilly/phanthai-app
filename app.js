const API_URL = "https://script.google.com/macros/s/AKfycbykHYDJLpUBA_QgUm-r1YEL4Ftc4gMdonzkkh-SQQUgCIoKWzKt9cCqlcbhL9VdpsGs6w/exec";

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
