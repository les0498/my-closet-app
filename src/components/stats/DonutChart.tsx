'use client';

const COLORS = ['#000000', '#555555', '#888888', '#AAAAAA', '#CCCCCC', '#EEEEEE'];

export default function DonutChart({ data }: { data: { tag: string; percent: number }[] }) {
  const radius = 60;
  const stroke = 20;
  const cx = 80;
  const cy = 80;
  const circumference = 2 * Math.PI * radius;

  const segments = data.map((item, i) => {
    const prevPercent = data.slice(0, i).reduce((acc, cur) => acc + cur.percent, 0);

    return {
      ...item,
      dashArray: (item.percent / 100) * circumference,
      dashOffset: circumference - (prevPercent / 100) * circumference,
    };
  });

  return (
    <svg width={160} height={160}>
      {segments.map((item, i) => (
        <circle
          key={item.tag}
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={COLORS[i % COLORS.length]}
          strokeWidth={stroke}
          strokeDasharray={`${item.dashArray} ${circumference - item.dashArray}`}
          strokeDashoffset={item.dashOffset}
        />
      ))}
    </svg>
  );
}
