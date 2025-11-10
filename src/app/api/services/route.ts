import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const servicesFilePath = path.resolve(process.cwd(), "data/services.json");

const getServices = () => {
  const fileContent = fs.readFileSync(servicesFilePath, "utf-8");
  return JSON.parse(fileContent);
};

interface Service {
  id: string;
  image: string;
  title: {
    en: string;
    ja: string;
    pt: string;
  };
  description: {
    en: string;
    ja: string;
    pt: string;
  };
}

const saveServices = (services: Service[]) => {
  fs.writeFileSync(servicesFilePath, JSON.stringify(services, null, 2));
};

export async function GET() {
  try {
    const services = getServices();
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ message: "Error reading services data", error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newService = await request.json();
    const services = getServices();
    services.push(newService);
    saveServices(services);
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating service", error }, { status: 500 });
  }
}
