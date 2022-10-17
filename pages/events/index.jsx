import React from 'react';
import EventList from '../../components/events/eventList';
import { getAllEvents } from '../../data';

const EventMainPage = () => {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default EventMainPage;
