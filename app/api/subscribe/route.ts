import { NextRequest, NextResponse } from 'next/server'

// Single opt-in: the contact is added to the list immediately, no confirmation email.
// Env vars required (in .env.local and, later, in your host):
//   BREVO_API_KEY  — from Brevo → SMTP & API → API Keys
//   BREVO_LIST_ID  — numeric ID of the "The Workflow" list (yours is 6)

export async function POST(request: NextRequest) {
  try {
    const { name, email, business } = await request.json()

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.BREVO_API_KEY
    const listId = Number(process.env.BREVO_LIST_ID)

    if (!apiKey || !listId) {
      console.error('Brevo env vars missing (BREVO_API_KEY / BREVO_LIST_ID)')
      return NextResponse.json(
        { error: 'Newsletter is not configured yet. Please try again later.' },
        { status: 500 }
      )
    }

    // Create-or-update the contact and add them straight to the list.
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name,
          BUSINESS: business || '',
        },
        listIds: [listId],
        updateEnabled: true, // if they already exist, update instead of erroring
      }),
    })

    // 201 = created, 204 = updated. Both are success.
    if (res.status === 201 || res.status === 204) {
      return NextResponse.json({ success: true })
    }

    const data = await res.json().catch(() => ({}))

    // Someone re-subscribing is a friendly success, not an error.
    if (data?.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true, already: true })
    }

    console.error('Brevo error:', data)
    return NextResponse.json(
      { error: 'Something went wrong signing you up. Please try again.' },
      { status: 502 }
    )
  } catch (error) {
    console.error('Subscribe route error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
