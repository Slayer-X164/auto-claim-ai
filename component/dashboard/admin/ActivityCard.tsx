import Image from "next/image";

const activities = [
  {
    icon: "check-circle",
    text: "Sarah Chen approved CLM-134",
    time: "2 min ago"
  },
  {
    icon: "alert-circle",
    text: "John Mathew requested more evidence for CLM-131",
    time: "8 min ago"
  },
  {
    icon: "zap",
    text: "CLM-128 was automatically approved by AI",
    time: "15 min ago"
  },
  {
    icon: "user-plus",
    text: "New reviewer Priya Shah joined",
    time: "1 hour ago"
  }
];

export default function ActivityCard() {
  return (
    <div className="flex flex-col p-6 gap-4 bg-white border border-[#E2E8F0] rounded-xl w-[380px] shrink-0">
      <h2 className="font-instrument font-bold text-[16px] text-[#0F172A]">Recent Activity</h2>
      
      <div className="flex flex-col gap-3.5 w-full">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-[14px] bg-[#F1F5F9] flex items-center justify-center shrink-0">
              <Image src={`/icons/${activity.icon}.svg`} alt="Activity Icon" width={14} height={14} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-instrument font-medium text-[13px] text-[#0F172A] leading-tight">
                {activity.text}
              </span>
              <span className="font-instrument font-regular text-[11px] text-[#94A3B8]">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
