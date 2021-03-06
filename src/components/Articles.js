import React from 'react';
import Link from "./Link";

const Articles = ({ list }) => (
  <div id="articles">
  { list.map((item, key) => (
      <article key={key}>
        <header>
          <h3>{item.display_title}</h3>
        </header>
        <section className="headline">{item.headline}</section>
        <section className="summary">{item.summary_short}</section>
        <footer>
          <Link to={item.link.url} isexternal="true">{item.link.suggested_link_text}</Link> 
        </footer>
      </article>
  ))}
  </div>
);

export default Articles;