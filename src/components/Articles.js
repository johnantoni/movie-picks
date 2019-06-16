import React, { Component } from 'react';
import Link from "./Link";

const Articles = ({ list }) => (
  <div>
  { list.map(item => (
      <article key={item}>
        <header>
          <h3>{item.display_title}</h3>
        </header>
        <section className="headline">{item.headline}</section>
        <section className="summary">{item.summary_short}</section>
        <footer>
          <Link to={item.link.url} isExternal="true">{item.link.suggested_link_text}</Link> 
        </footer>
      </article>
  ))}
  </div>
);

export default Articles;