
import { LuSearch } from "react-icons/lu";

export default function ClaimsList() {

  const claims = [
    { id: "CLM-134", customer: "Ravi Malhotra", vehicle: "Hyundai Creta 2022", status: "Needs Review", reviewer: "Unassigned", aiConfidence: "92%", created: "Aug 4, 2026" },
    { id: "CLM-131", customer: "Meera Joshi", vehicle: "Honda City 2020", status: "Rejected", reviewer: "Unassigned", aiConfidence: "88%", created: "Aug 3, 2026" },
    { id: "CLM-130", customer: "Arjun Patel", vehicle: "Kia Seltos 2023", status: "Auto Approved", reviewer: "AI Agent", aiConfidence: "99%", created: "Aug 2, 2026" },
    { id: "CLM-164", customer: "Ravi Malhotra", vehicle: "Hyundai Creta 2022", status: "Needs Review", reviewer: "Unassigned", aiConfidence: "92%", created: "Aug 4, 2026" },
    { id: "CLM-119", customer: "Priya Sharma", vehicle: "Mahindra XUV700", status: "Approved", reviewer: "Priya Shah", aiConfidence: "95%", created: "Aug 2, 2026" },

   ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Needs Review": return "bg-amber-100 text-amber-500 border-amber-500";
      case "Processing": return "bg-blue-100 text-blue-500 border-blue-500";
      case "Approved": return "bg-emerald-100 text-emerald-500 border-emerald-500";
      case "Rejected": return "bg-red-100 text-red-500 border-red-500";
      case "Auto Approved": return "bg-violet-100 text-violet-500 border-violet-500";
      default: return "bg-gray-100 text-gray-500 border-gray-500";
    }
  };

  return (
    <div className="flex flex-col items-start gap-4 w-full p-6 ">
      {/* Header */}
      <div className="flex items-center justify-between h-[35px]">
        <h1 className="font-instrument font-bold text-[28px] text-[#0F172A]">Claims</h1>
      </div>

      {/* Control Bar */}
      <div className="flex flex-row-reverse justify-between w-full gap-4">
        <div className="flex items-center gap-3 px-4 h-10 w-[300px] bg-white border border-[#E2E8F0] rounded-lg">
          <LuSearch className="text-[#94A3B8]" size={16} />
          <input
            type="text"
            placeholder="Search claims, customers or vehicles..."
            className="flex-1 bg-transparent border-none outline-none text-neutral-500 font-instrument text-[14px]"
          />
        </div>

        <div className="flex gap-2">
          {["All", "Processing", "Needs Review", "Approved", "Rejected", "Auto Approved"].map((tab, idx) => (
            <button
              key={tab}
              className={`px-3 cursor-pointer py-1 rounded-full font-instrument text-[12px] font-medium border ${
                idx === 0
                  ? 'bg-[#1F66FF] text-white border-[#1F66FF] font-semibold'
                  : 'bg-white text-[#475569] border-[#E2E8F0]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table Card */}
              <div className="flex flex-col p-6 bg-white w-full max-h-[480px] overflow-y-auto border-1 border-neutral-300 rounded-xl gap-5">
        <div className="flex flex-col w-full ">
          {/* Table Header */}
          <div className="flex items-center px-4 py-3 bg-neutral-200 rounded-md font-instrument font-bold text-[12px] text-black">
            <div className="w-[120px]">CLAIM ID</div>
            <div className="flex-1">CUSTOMER</div>
            <div className="flex-1">VEHICLE</div>
            <div className="w-[140px]">STATUS</div>
            <div className="flex-1">REVIEWER</div>
            <div className="w-[120px]">AI CONFIDENCE</div>
            <div className="w-[120px]">CREATED</div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col divide-y divide-[#E2E8F0]">
            {claims.map((claim) => (
              <div key={claim.id} className="flex items-center px-4 py-4 font-instrument text-[14px]">
                <div className="w-[120px] font-semibold text-[#1F66FF]">{claim.id}</div>
                <div className="flex-1 font-medium text-[#0F172A]">{claim.customer}</div>
                <div className="flex-1 text-[#475569]">{claim.vehicle}</div>
                <div className="w-[140px]">
                  <span className={`inline-flex items-center justify-center px-2.5 py-1 text-[12px] font-semibold border rounded-md ${getStatusStyles(claim.status)}`}>
                    {claim.status}
                  </span>
                </div>
                <div className="flex-1 font-medium text-[#0F172A]">{claim.reviewer}</div>
                <div className="w-[120px] font-semibold text-[#10B981]">{claim.aiConfidence}</div>
                <div className="w-[120px] text-[#475569]">{claim.created}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-3 font-instrument text-[14px] text-[#475569]">
          <span className="font-semibold">Showing <span className="text-[#0F172A]">1-7</span> of <span className="text-[#0F172A]">128</span> claims</span>
          <div className="flex gap-2">
            <button className="px-3 py-2 border-1 border-neutral-400/80 bg-white rounded-md font-medium">Previous</button>
            <button className="px-3 py-2 bg-neutral-800 text-white rounded-md font-semibold">1</button>
            <button className="px-3 py-2 border-1 border-neutral-400/80 bg-white rounded-md font-medium text-[#475569]">2</button>
            <button className="px-3 py-2 border-1 border-neutral-400/80 bg-white rounded-md font-medium">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}