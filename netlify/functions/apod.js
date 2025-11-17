export default async (req, context) => {
  const NASA_API_KEY = Netlify.env.get('NASA_API_KEY')
  
  if (!NASA_API_KEY) {
    return new Response(JSON.stringify({ error: 'NASA_API_KEY not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
    const data = await response.json()
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
