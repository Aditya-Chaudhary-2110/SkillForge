const UploadTipsCard = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-900">
        Before You Upload
      </h2>

      <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
        <li>• Upload your latest resume in PDF format.</li>

        <li>• Keep your resume ATS-friendly and easy to scan.</li>

        <li>• Include projects, technical skills and achievements.</li>

        <li>• Avoid images, tables and fancy layouts.</li>
      </ul>
    </div>
  );
};

export default UploadTipsCard;
