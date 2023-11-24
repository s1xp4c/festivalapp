// use-client.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getISOWeek,
  startOfWeek,
  setHours,
  setMinutes,
  differenceInSeconds,
  addDays,
  getYear,
  setDay,
  isAfter,
} from "date-fns";
import { zonedTimeToUtc, utcToZonedTime } from "date-fns-tz";
import eventData from ":/constants/countdown.json";

interface CountdownValues {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTileProps {
  value: number;
  unit: string;
  animate: boolean;
  isFirst: boolean;
  isLast: boolean;
}

const countdownUnits: Array<keyof CountdownValues> = [
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
];

const unitTranslations: { [unit: string]: string } = {
  Weeks: "Uger",
  Days: "Dage",
  Hours: "Timer",
  Minutes: "Min.",
  Seconds: "Sek.",
};

const CountdownTile: React.FC<CountdownTileProps> = ({
  value,
  unit,
  animate,
  isFirst,
  isLast,
}) => {
  // Conditional classes for the first and last tile

  const borderRadiusClass = isFirst
    ? "rounded-l-xl  "
    : isLast
    ? "rounded-r-xl "
    : "rounded-r-sm ";
  return (
    <div className="flex flex-col items-center justify-center text-center w-full mx-[.12rem]">
      <div
        className={`flex flex-row  items-center justify-center w-full h-3 bg-indigo-600/30 rounded-sm border border-indigo-700/80 ${borderRadiusClass}`}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            className={`items-center ml-2`}
            initial={{ y: -2.8 }}
            animate={animate ? { rotateY: 360 } : { rotateX: -360 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-bold text-[0.70rem] text-foreground/70  justify-center">
              {value.toString().padStart(1, "0")}
            </span>
          </motion.span>
        </AnimatePresence>

        <span className="text-[0.70rem] text-foreground/80 uppercase w-full mb-[0.1rem]">
          {unitTranslations[unit]}
        </span>
      </div>
    </div>
  );
};

const getTargetDate = (timeZone: string) => {
  const now = new Date();
  const currentYear = getYear(now);
  const currentWeekNumber = getISOWeek(now);
  let targetYear =
    currentWeekNumber > 29 ||
    (currentWeekNumber === 29 &&
      isAfter(
        now,
        setMinutes(
          setHours(setDay(startOfWeek(new Date(currentYear, 0, 1)), 4), 12),
          0
        )
      ))
      ? currentYear + 1
      : currentYear;
  let targetDate = setMinutes(
    setHours(
      setDay(addDays(startOfWeek(new Date(targetYear, 0, 1)), (29 - 1) * 7), 4),
      12
    ),
    0
  );
  const utcDate = zonedTimeToUtc(targetDate, timeZone);
  return utcToZonedTime(utcDate, timeZone);
};

const Countdown: React.FC = () => {
  const [countdown, setCountdown] = useState<CountdownValues>({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timeZone = "Europe/Copenhagen";
    const targetDate = getTargetDate(timeZone);

    const intervalId = setInterval(() => {
      const nowInTimeZone = utcToZonedTime(new Date(), timeZone);
      const totalSeconds = differenceInSeconds(targetDate, nowInTimeZone);

      if (totalSeconds <= 0) {
        clearInterval(intervalId);
        setCountdown({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const weeks = Math.floor(totalSeconds / (60 * 60 * 24 * 7));
        const days = Math.floor(
          (totalSeconds % (60 * 60 * 24 * 7)) / (60 * 60 * 24)
        );
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        setCountdown({ weeks, days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-background/50 sm:hidden w-full border-t-[.1rem] border-indigo-700 rounded-[15px] -mt-5 z-50 flex justify-between p-1 items-center -px-1">
      {countdownUnits.map((unit, index, array) => (
        <CountdownTile
          key={unit}
          value={countdown[unit]}
          unit={unit.charAt(0).toUpperCase() + unit.slice(1)}
          animate
          isFirst={index === 0} // True if this is the first element
          isLast={index === array.length - 1} // True if this is the last element
        />
      ))}
    </div>
  );
};

export default Countdown;
