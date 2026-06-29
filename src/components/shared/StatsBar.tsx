interface StatItem {
  value: number | string;
  suffix?: string;
  label: string;
}

interface StatsBarProps {
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: "10 Lakh+", label: "Events Powered" },
  { value: 5000, suffix: "+", label: "Happy Clients" },
  { value: 4.9, suffix: "★", label: "Average Rating" },
];

const StatsBar = ({ stats = defaultStats }: StatsBarProps) => {
  return (
    <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-vibrant">
              {stat.value}{stat.suffix || ""}
            </div>
            <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
