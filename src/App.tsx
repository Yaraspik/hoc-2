import "./style.css";
import React, { useState } from "react";

import dayjs from "dayjs";
import "dayjs/locale/ru";
import relativeTime from "dayjs/plugin/relativeTime";

function DateTimePretty(Component: React.FunctionComponent<{ date: string }>) {
  return class extends React.Component<{ date: string }> {
    render() {
      dayjs.locale("ru");
      dayjs.extend(relativeTime);
      const dateDiff = dayjs(new Date(this.props.date)).fromNow();
      return (
        <>
          <Component {...this.props} date={dateDiff} />;
        </>
      );
    }
  };
}

const TimeAgo = DateTimePretty(DateTime);

function DateTime({ date }: { date: string }) {
  return <p className="date">{date}</p>;
}

function Video(props: Item): JSX.Element {
  return (
    <div className="video">
      <iframe
        src={props.url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <TimeAgo date={props.date} />
    </div>
  );
}

type Item = {
  url: string;
  date: string;
};

function VideoList({ list }: { list: Array<Item> }): JSX.Element {
  return (
    <>
      {list.map((item, index) => (
        <Video url={item.url} date={item.date} key={index} />
      ))}
    </>
  );
}

export default function App() {
  const [list] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-07-31 13:24:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2021-03-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-02-03 23:16:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-01-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2024-02-02 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
    },
  ]);

  return <VideoList list={list} />;
}
