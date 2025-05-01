import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { topic, tone, length } = await req.json();

  const prompt = `Write a ${length.toLowerCase()} blog post in a ${tone.toLowerCase()} tone about "${topic}".`;
  console.log('API Key:', process.env.OPENAI_API_KEY?.slice(0, 6));


  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });
    
    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    return NextResponse.json({ content });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}
