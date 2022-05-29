import { PLACE_TYPES } from "lib/constants/placeTypes.const";
import React from "react";
import Event from "./event";

const events = [
  {
    name: "Sloga",
    location: "Mehmeda Spahe 20",
    date: "13.05.2022",
    type: PLACE_TYPES.CLUB,
    time: "Start at 20:00h",
  },
  {
    name: "Pivnica",
    location: "Mehmeda Spahe 20",
    date: "13.05.2022",
    type: PLACE_TYPES.PUB,
    time: "Start at 20:00h",
  },
  {
    name: "Theatar",
    location: "Mehmeda Spahe 20",
    date: "13.05.2022",
    type: PLACE_TYPES.CAFFE,
    time: "Start at 20:00h",
  },
  {
    name: "Dorian Gray",
    location: "Mehmeda Spahe 20",
    date: "13.05.2022",
    type: PLACE_TYPES.CLUB,
    time: "Start at 20:00h",
  },
  {
    name: "Kino Bosna",
    location: "Mehmeda Spahe 20",
    date: "13.05.2022",
    type: PLACE_TYPES.CLUB,
    time: "Start at 20:00h",
  },
  {
    name: "City Lounge",
    location: "Zelenih Beretki 14",
    date: "13.05.2022",
    type: PLACE_TYPES.PUB,
    time: "Start at 20:00h",
  },
];

function EventsContainer({ filter }) {
  const filteredEvents = events.filter(
    (x) =>
      x.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      filter.toLocaleLowerCase() === x.type.toLocaleLowerCase()
  );

  return (
    <div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {filteredEvents.map((x, i) => (
          <Event key={`event-item-${i}`} {...x} />
        ))}
      </div>
    </div>
  );
}

export default EventsContainer;
