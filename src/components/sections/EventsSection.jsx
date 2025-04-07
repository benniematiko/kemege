import { Events } from "../../data/Events";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  EventDetails,
  EventImage,
  EventListContainer,
  EventReadMore,
  EventWrapper,
  SeeAllEvents,
  StyledEventsSection,
} from "../styles/sections/EventsSections.styled";

export const EventsSection = () => {
  return (
    <StyledEventsSection>
      <SectionHeading>
        <h1>Upcoming Events, News & Updates</h1>
        <p>Activities, News & Events Planned ahead</p>
      </SectionHeading>

      <SeeAllEvents>
        <p>Event | Activity Name</p> <button>See All Events</button>
      </SeeAllEvents>

      <EventWrapper>
        <EventListContainer>
          {Events &&
            Events.map((event, index) => (
              <EventDetails key={index}>
                <h1>No#: {event.number}</h1>

                <p>Date: {event.date}</p>

                <p>{event.title}</p>

                <p>Activity: {event.desc}</p>
                <p>Location: {event.location}</p>
                <p><EventReadMore href="#">{event.eventlink}</EventReadMore></p>
              </EventDetails>
            ))}
        </EventListContainer>
        <EventImage>
          <img src="./images/logo.jpg" alt="" />
        </EventImage>
      </EventWrapper>

      {/* <div>
        {Events &&
          Events.map((event, index) => (
            <SingleEvent key={index}>
              <EventContainer>
                {event.number}
                {event.title}
                </EventContainer>
            </SingleEvent>
          ))}
      </div> */}
    </StyledEventsSection>
  );
};
