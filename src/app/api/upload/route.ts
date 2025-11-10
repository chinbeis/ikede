import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, message: "No file found" });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(process.cwd(), "public/uploads", file.name);
    await writeFile(filePath, buffer);

    return NextResponse.json({ success: true, path: `/uploads/${file.name}` });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error uploading file", error }, { status: 500 });
  }
}
