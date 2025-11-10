import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const aboutFilePath = path.resolve(process.cwd(), "data/about.json");

export async function GET() {
  try {
    const fileContent = fs.readFileSync(aboutFilePath, "utf-8");
    const data = JSON.parse(fileContent);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "Error reading about data",  error}, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    fs.writeFileSync(aboutFilePath, JSON.stringify(newData, null, 2));
    return NextResponse.json({ message: "About data updated successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error updating about data", error }, { status: 500 });
  }
}
