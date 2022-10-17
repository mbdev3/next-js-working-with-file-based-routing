import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
const SingleEvent = () => {
  const router = useRouter();
  const id = router.query.id;
  const event = getEventById(id);
  if (!event) {
    return (
      <div>
        <h1>No event found.</h1>
      </div>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default SingleEvent;
