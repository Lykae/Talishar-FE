import React from 'react';
import RoguelikeAnnouncement from 'img/RoguelikeAnnouncement.webp';

const News = () => {
  return (
    <div>
      <hgroup>
        Check out the Team Classic Constructed event commentated by Second Cycle!
        <a href="https://www.youtube.com/watch?v=TVzXNXLowZ0" target="_blank">
          <img
            src="teamccad.jpg"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'cover'
            }}
          />
        </a>
      </hgroup>
      <h3>The roguelike mode is temporarily unavailable</h3>
      <p>Please join our community:</p>
      <ul>
        <li>
          <a href="https://discord.gg/JykuRkdd5S" target="_blank">
            Discord
          </a>
        </li>
        <li>
          <a href="https://twitter.com/talishar_online" target="_blank">
            Twitter
          </a>
        </li>
      </ul>
      <p>Disclaimer:</p>
      <small>
        Talishar is in no way affiliated with Legend Story Studios. Legend Story
        Studios®, Flesh and Blood™, and set names are trademarks of Legend Story
        Studios. Flesh and Blood characters, cards, logos, and art are property
        of Legend Story Studios. Talishar is a fan made project that may have
        bugs; game interactions and rulings are the jurisdiction of LSS and
        judges. Card Images © Legend Story Studios
      </small>
    </div>
  );
};

export default News;
