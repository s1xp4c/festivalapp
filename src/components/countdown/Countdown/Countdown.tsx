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
} from "date-fns";
import { zonedTimeToUtc, utcToZonedTime } from "date-fns-tz";

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
}

const CountdownTile: React.FC<CountdownTileProps> = ({ value, unit }) => (
  <div className="flex flex-col items-center justify-center flex-1">
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        className="bg-gradient-to-r from-indigo-600/30 to-indigo-800/30 shadow rounded-lg px-2 py-1"
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.85 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-bold text-[0.65rem] text-foreground">
          {value.toString().padStart(2, "0")}
        </span>
      </motion.span>
    </AnimatePresence>
    <span className="text-[0.65rem] text-foreground uppercase">{unit}</span>
  </div>
);

const getTargetDate = (timeZone: string) => {
  const now = new Date();
  const currentYear = getYear(now);
  const currentWeekNumber = getISOWeek(now);
  const targetYear = currentWeekNumber > 29 ? currentYear + 1 : currentYear;
  let firstDayOfTargetYear = startOfWeek(new Date(targetYear, 0, 1));
  let targetDate = setDay(addDays(firstDayOfTargetYear, (29 - 1) * 7), 4); // Thursday
  targetDate = setHours(targetDate, 12); // 12:00 PM
  targetDate = setMinutes(targetDate, 0); // 00 Minutes
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
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-background/50 sm:hidden w-full border-t-[.1rem] border-indigo-700 rounded-[15px] -mt-5 z-50 flex justify-between p-1 items-center">
      <CountdownTile
        key={`week-${countdown.weeks}`}
        value={countdown.weeks}
        unit="Uger"
      />
      <CountdownTile
        key={`day-${countdown.days}`}
        value={countdown.days}
        unit="Dage"
      />
      <CountdownTile
        key={`hour-${countdown.hours}`}
        value={countdown.hours}
        unit="Timer"
      />
      <CountdownTile
        key={`minute-${countdown.minutes}`}
        value={countdown.minutes}
        unit="Min."
      />
      <CountdownTile
        key={`second-${countdown.seconds}`}
        value={countdown.seconds}
        unit="Sek."
      />
    </div>
  );
};

export default Countdown;
