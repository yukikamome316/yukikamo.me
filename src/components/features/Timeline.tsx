import React from "react";
import {
  timelineContainer,
  timelineItem,
  timelineDot,
  timelineDate,
  timelineTitle,
  timelineDescription,
} from "../../styles/components/timeline.css";

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  return (
    <div className={timelineContainer}>
      {entries.map((entry, idx) => (
        <div key={idx} className={timelineItem}>
          <div className={timelineDot} />
          <span className={timelineDate}>{entry.date}</span>
          <h3 className={timelineTitle}>{entry.title}</h3>
          <p className={timelineDescription}>{entry.description}</p>
        </div>
      ))}
    </div>
  );
};
