import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";

export default function Page() {
  return (
    <div>
      <section>
        <h1 className="text-center">
          The Hub for Every Dev <br /> Event You Can't Miss
        </h1>
        <p className="text-center mt-5">
          Hacathons, Meetup, and Coonference, All in One Place
        </p>

        <ExploreBtn />

        <div className="p-10 ">
          <div className="mt-20  space-x-7">
            <h3>Featured Events</h3>
            <h3>Featured Products</h3>

            <ul className="events">
              {events.map((event) => (
                <li key={event.title}>
                  <EventCard {...event} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
