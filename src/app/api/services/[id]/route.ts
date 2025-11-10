import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const servicesFilePath = path.resolve(process.cwd(), "data/services.json");

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

const getServices = (): Service[] => {
  const fileContent = fs.readFileSync(servicesFilePath, "utf-8");
  return JSON.parse(fileContent);
};

const saveServices = (services: Service[]) => {
  fs.writeFileSync(servicesFilePath, JSON.stringify(services, null, 2));
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const services = getServices();
    const service = services.find((s) => s.id === params.id);
    if (service) {
      return NextResponse.json(service);
    } else {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error reading services data", error }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const updatedService = await request.json();
    const services = getServices();
    const index = services.findIndex((s) => s.id === params.id);
    if (index !== -1) {
      services[index] = updatedService;
      saveServices(services);
      return NextResponse.json(updatedService);
    } else {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error updating service", error }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const services = getServices();
    const filteredServices = services.filter((s) => s.id !== params.id);
    if (services.length !== filteredServices.length) {
      saveServices(filteredServices);
      return NextResponse.json({ message: "Service deleted successfully" });
    } else {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error deleting service", error }, { status: 500 });
  }
}
