import { useMemo } from "react";

const intervals = 15;
const minutesInDay = 60 * 24;
const startTime = "00:00";
const endTime = "24:00";

const columns = 6;
const rows = 100;

const timeToMinutes = (time: string) => {
  let split: string[] = time.split(":");

  return parseInt(split[0], 10) * 60 + parseInt(split[1]);
};

const assert = (cond: boolean, string: string) => {
  if (cond) {
    throw new Error(string);
  }
};

const SleepPeriod = ({ length }: { length: number }) => {
  return (
    <div
      className={`bg-green-500 rounded-lg shadow-xl basis-[${length}%] w-full`}
    >
      6h
    </div>
  );
};

function Sleep() {
  // const day = useMemo(() => {
  //   let dayRanges = [];
  //   let start = timeToMinutes(startTime);
  //   let end = timeToMinutes(endTime);

  //   while (start < end) {
  //     dayRanges.push()
  //   }
  // }, []);

  assert(intervals > 60, "Intervals must be less than major intervals");

  return (
    // <div
    //   className={`grid gap-x-2 grid-rows-${rows} grid-flow-col gap-y-3 h-max mx-5`}
    // >
    //   <div className="bg-yellow-500 rounded-lg shadow-xl row-span-50">6h</div>
    // </div>

    <div className="flex flex-col h-full">
      <SleepPeriod length={20} />
      <SleepPeriod length={5} />
      <SleepPeriod length={75} />
    </div>
  );
}

export default Sleep;
