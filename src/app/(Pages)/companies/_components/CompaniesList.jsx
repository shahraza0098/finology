import CompanyCard from "./CompanyCard";

export default function CompaniesList({ businesses }) {
  if (!businesses.length) {
    return <div>No companies found.</div>;
  }

  return (
    <div className="space-y-6">
      {businesses.map((biz) => (
        <CompanyCard key={biz.id} business={biz} />
      ))}
    </div>
  );
}
