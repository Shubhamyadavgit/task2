import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="categories">
        <h3>Categories</h3>
        <ul>
          <li>General</li>
          <li>Ghost Sightings</li>
          <li>UFO Crashes</li>
          <li>Government Coverups</li>
          <li>International Conspiracies</li>
        </ul>
      </section>

      <section className="categories">
        <h3>Recent Posts</h3>
        <ul>
          <li>Ghost Sighting in Mansion</li>
          <li>UFO picked up by satellites</li>
          <li>Mutants among us?</li>
          <li>Bigfoot: Fact or Fiction?</li>
        </ul>
      </section>

      <section className="categories">
        <h3>Archives</h3>
        <ul>
          <li>June 2008</li>
          <li>May 2008</li>
          <li>April 2008</li>
          <li>March 2008</li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
