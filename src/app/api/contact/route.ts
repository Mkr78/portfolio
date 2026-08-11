import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

async function readPayload(request: Request): Promise<ContactPayload> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as ContactPayload;
  }

  const formData = await request.formData();
  return {
    name: formData.get("name")?.toString(),
    email: formData.get("email")?.toString(),
    message: formData.get("message")?.toString()
  };
}

export async function POST(request: Request) {
  const payload = await readPayload(request);

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { ok: false, message: "Nom, email et message sont requis." },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message:
        "Message reçu côté API. Branchez un service d'emailing ou configurez NEXT_PUBLIC_FORMSPREE_ENDPOINT."
    },
    { status: 200 }
  );
}
