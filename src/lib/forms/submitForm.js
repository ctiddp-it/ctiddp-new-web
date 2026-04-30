export async function submitForm({ baseUrl, path, payload, signal }) {
  const url = `${String(baseUrl || '').replace(/\/$/, '')}/${String(path || '').replace(/^\//, '')}`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    signal,
  })

  const body = await response.json().catch(() => ({}))

  if (!response.ok) {
    // Never expose raw backend errors to users.
    return { ok: false, message: body?.message || 'Something went wrong. Please try again.' }
  }

  return {
    ok: true,
    message: body?.message || 'Form submitted successfully',
    data: body?.data,
  }
}

