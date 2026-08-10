import ResumeUploadCard from "./ResumeUploadCard";
import UploadTipsCard from "./UploadTipsCard";
import PrivacyCard from "./PrivacyCard";

const ResumeWorkspace = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_320px]">
      {/* Left */}
      <div className="min-w-0">
        <ResumeUploadCard />
      </div>

      {/* Right */}
      <div className="flex min-w-0 flex-col gap-5">
        <UploadTipsCard />
        <PrivacyCard />
      </div>
    </div>
  );
};

export default ResumeWorkspace;
