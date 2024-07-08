import type { Check } from '@/types'

const apiUrl = import.meta.env.VITE_API_URL
if (!apiUrl) {
  throw new Error('Please create .env file')
}

async function request(path: string): Promise<any> {
  const response = await fetch(apiUrl + path, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  if (!response.ok) {
    throw await response.text()
  }
  return await response.json()
}

export async function getChecks() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (await request('/checks')) as Promise<Check[]>
}
