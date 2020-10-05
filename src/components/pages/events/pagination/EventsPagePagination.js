import React, { useState, useEffect } from "react";
import axios from "axios";
import Events2 from "./Events2";
import Pagination from "./Pagination";

const EventsPagePagination = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(3);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5021/event");
      setEvents(res.data);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  // Get current events
  const indexOfLastPost = currentPage * eventsPerPage;
  const indexOfFirstPost = indexOfLastPost - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // console.log(events);

  return (
    <div className="container mt-5">
      <h1>Pagination</h1>
      <Events2 events={currentEvents} loading={loading} />
      <Pagination
        eventsPerPage={eventsPerPage}
        totalEvents={events.length}
        paginate={paginate}
      />
    </div>
  );
};

export default EventsPagePagination;
