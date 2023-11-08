import { z } from "zod";
import data from "../data.json";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
): Promise<Response> {
  const slug = z.string().parse(params.slug);

  const product = data.products.find((p) => p.slug === slug);

  return product
    ? Response.json(product)
    : Response.json({ message: "Product not found." }, { status: 400 });
}
