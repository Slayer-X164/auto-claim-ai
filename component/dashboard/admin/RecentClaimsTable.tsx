import Image from "next/image";

const claims = [
  {
    id: "CLM-134",
    customer: "Ravi Malhotra",
    vehicle: "Hyundai Creta 2022",
    status: "Needs Review",
    statusColors: "bg-[#FEF3C7] border-[#F59E0B] text-[#F59E0B]",
    aiRec: "Approve",
    aiRecColor: "text-[#10B981]",
    assigned: "Sarah Chen",
  },
  {
    id: "CLM-133",
    customer: "Ananya Bose",
    vehicle: "Tata Nexon 2021",
    status: "Processing",
    statusColors: "bg-[#DBEAFE] border-[#3B82F6] text-[#3B82F6]",
    aiRec: "—",
    aiRecColor: "text-[#10B981]",
    assigned: "Unassigned",
  },
  {
    id: "CLM-132",
    customer: "Devansh Kapoor",
    vehicle: "Maruti Baleno 2023",
    status: "Approved",
    statusColors: "bg-[#D1FAE5] border-[#10B981] text-[#10B981]",
    aiRec: "Approve",
    aiRecColor: "text-[#10B981]",
    assigned: "John Mathew",
  },
  {
    id: "CLM-131",
    customer: "Meera Joshi",
    vehicle: "Honda City 2020",
    status: "Rejected",
    statusColors: "bg-[#FEE2E2] border-[#EF4444] text-[#EF4444]",
    aiRec: "Reject",
    aiRecColor: "text-[#EF4444]",
    assigned: "Sarah Chen",
  },
  {
    id: "CLM-130",
    customer: "Arjun Patel",
    vehicle: "Kia Seltos 2023",
    status: "Auto Approved",
    statusColors: "bg-[#EDE9FE] border-[#8B5CF6] text-[#8B5CF6]",
    aiRec: "Approve",
    aiRecColor: "text-[#10B981]",
    assigned: "—",
  },
];

export default function RecentClaimsTable() {
  return (
    <div className="flex-1 flex flex-col p-6 gap-4 bg-white border border-[#E2E8F0] rounded-xl">
      <h2 className="font-instrument font-bold text-[18px] text-[#0F172A]">Recent Claims</h2>
      
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-[100px_1fr_1fr_140px_140px_1fr] px-4 py-3 bg-[#F8FAFC] rounded-md mb-2">
          <span className="font-instrument font-bold text-[12px] text-[#475569]">CLAIM</span>
          <span className="font-instrument font-bold text-[12px] text-[#475569]">CUSTOMER</span>
          <span className="font-instrument font-bold text-[12px] text-[#475569]">VEHICLE</span>
          <span className="font-instrument font-bold text-[12px] text-[#475569]">STATUS</span>
          <span className="font-instrument font-bold text-[12px] text-[#475569]">AI REC.</span>
          <span className="font-instrument font-bold text-[12px] text-[#475569]">ASSIGNED</span>
        </div>

        {claims.map((claim, index) => (
          <div key={index} className="grid grid-cols-[100px_1fr_1fr_140px_140px_1fr] items-center px-4 py-4 border-b border-[#E2E8F0] last:border-0 hover:bg-gray-50 transition-colors">
            <span className="font-instrument font-semibold text-[14px] text-[#1F66FF]">{claim.id}</span>
            <span className="font-instrument font-medium text-[14px] text-[#0F172A]">{claim.customer}</span>
            <span className="font-instrument font-regular text-[14px] text-[#475569]">{claim.vehicle}</span>
            
            <div className="flex">
              <div className={`px-2.5 py-1 border rounded-md flex items-center justify-center ${claim.statusColors}`}>
                <span className="font-instrument font-semibold text-[12px]">{claim.status}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Image src="/icons/star.svg" alt="AI Rec" width={14} height={14} />
              <span className={`font-instrument font-semibold text-[14px] ${claim.aiRecColor}`}>{claim.aiRec}</span>
            </div>
            
            <span className="font-instrument font-medium text-[14px] text-[#0F172A]">{claim.assigned}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
