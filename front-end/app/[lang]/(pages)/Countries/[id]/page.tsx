import CountryContent from "./CountryContent";

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CountryContent id={id} />;
}
