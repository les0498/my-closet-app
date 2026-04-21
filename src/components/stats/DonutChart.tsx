'use client';

const COLORS = ['#000000', '#555555', '#888888', '#AAAAAA', '#CCCCCC', '#EEEEEE'];

export default function DonutChart({ data }: { data: { tag: string; percent: number }[] }) {
  const radius = 60;
  const stroke = 20;
  const cx = 80;
  const cy = 80;
  const circumference = 2 * Math.PI * radius;

  let cumulative = 0;

  return (
    <svg width={160} height={160}>
      {data.map((item, i) => {
        const dashArray = (item.percent / 100) * circumference;
        const dashOffset = circumference - (cumulative * circumference) / 100;
        cumulative += item.percent;

        return (
          <circle
            key={item.tag}
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={COLORS[i % COLORS.length]}
            strokeWidth={stroke}
            strokeDasharray={`${dashArray} ${circumference - dashArray}`}
            strokeDashoffset={dashOffset}
          />
        );
      })}
    </svg>
  );
}
