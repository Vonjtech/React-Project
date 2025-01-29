import "react";
import Song from "./Song";
import Podcast from "./Podcast";

const Playlist = () => {
  const items = [
    { type: "song", title: "Blinding Lights", artist: "The Weeknd", year: 2019 },
    { type: "podcast", episodeTitle: "Tech Trends", season: 1, episode: 5 },
    { type: "song", title: "Shape of You", artist: "Ed Sheeran", year: 2017 },
    { type: "podcast", episodeTitle: "Vonjoe Revolution", episode: 101 }, // No season
    { type: "song", title: "Levitating", artist: "Dua Lipa", year: 2020 },
    { type: "podcast", episodeTitle: "Cybercrime 101", season: 3, episode: 2 },
  ];

  // Shuffle playlist on each reload
  const shuffledItems = [...items].sort(() => Math.random() - 0.5);

  return (
    <div className="playlist">
      <h2>🎵 Playlist (Shuffled on Reload)</h2>
      {shuffledItems.map((item, index) =>
        item.type === "song" ? (
          <Song key={index} {...item} />
        ) : (
          <Podcast key={index} {...item} />
        )
      )}
    </div>
  );
};

export default Playlist;
