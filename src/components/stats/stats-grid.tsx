import { StatsItem } from "./stats-item";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-1 mb-6">
      <StatsItem />
      <StatsItem />
      <StatsItem />
      <StatsItem />
    </div>
  );
}
