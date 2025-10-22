/* ...existing code... */
(() => {
  // Channel list (as provided)
  const channels = [
  {
    "name": "Sports TV",
    "link": "https://spstr.abntv.live/hls/psstream.m3u8",
    "icon": "https://img.freepik.com/premium-vector/soccer-television-logo-template-design_316488-547.jpg?semt=ais_hybrid&w=740"
  },
  {
    "name": "Dodoma TV",
    "link": "https://goliveafrica.media:9998/live/625965017ed69/index.m3u8",
    "icon": "https://yt3.googleusercontent.com/tlIkQ73h3Zj3-ruMpfgCjvFyWJ6o2fUX7vMwU4omL4iTnjTUuSkK0n0c1XVVT_9MINuUuQlpXg=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Romanza+",
    "link": "https://origin3.afxp.telemedia.co.za/PremiumFree/romanza/abr_satellitechannel/satch_romanza_360p/chunks.m3u8",
    "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Romanza%2B%C3%81frica_logo.jpg/250px-Romanza%2B%C3%81frica_logo.jpg"
  },
  {
    "name": "1KZN",
    "link": "https://cdn.freevisiontv.co.za/sttv/smil:1kzn.stream.smil/chunklist_b480000.m3u8",
    "icon": "https://starsat.co.za/wp-content/uploads/2023/08/1KZN-TV.png"
  },
  {
    "name": "CapeTown TV",
    "link": "https://cdn.freevisiontv.co.za/sttv/smil:ctv.stream.smil/chunklist_b480000.m3u8",
    "icon": "https://capetowntv.org/wp-content/uploads/2023/01/cropped-Web-icon.png"
  },
  {
    "name": "SABC News",
    "link": "https://sabconetanw.cdn.mangomolo.com/news/smil:news.stream.smil/chunklist_b250000_t64MjQwcA==.m3u8",
    "icon": "https://yt3.googleusercontent.com/x5Bgc7UBYZvOHvp3UG91lZbV6ND0YCOi2a026vLPDGIU5GF2qp5JnHnCeLyPegWhEjM5njpN=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Soweto TV",
    "link": "https://cdn.freevisiontv.co.za/sttv/smil:soweto.stream.smil/chunklist_b480000.m3u8",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIRfIk1qiekejwXNifTZCXGm0hS1cLmxiqg&s"
  },
  {
    "name": "Sport Connect",
    "link": "https://origin3.afxp.telemedia.co.za/PremiumFree/sportsconnect/abr_satellitechannel/satch_sportsconnect_360p/chunks.m3u8",
    "icon": "https://sportsconnect.uk/wp-content/uploads/2024/04/Blue-Modern-Geometric-Initials-X-with-Home-Real-Estate-Logo-6.png"
  },
  {
    "name": "Aljazeera",
    "link": "https://live-hls-web-aje.getaj.net/AJE/index.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/images-6.png"
  },
  {
    "name": "Always Funny Videos",
    "link": "https://apollo.production-public.tubi.io/live/ac-afv.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/images-7.png"
  },
  {
    "name": "Afro Sport Nigeria",
    "link": "https://newproxy3.vidivu.tv/vidivu_afrosport/tracks-v1a1/mono.ts.m3u8",
    "icon": "https://imagecdn.websitebuilder.prositehosting.co.uk/15/c0/15c0fb9b-b930-48ff-8f8b-d967dde48a93.png"
  },
  {
    "name": "BBC News",
    "link": "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8",
    "icon": "https://yt3.googleusercontent.com/v4JamQ9B-PUiJHjmZQs9UwTaoLQW8vijJMMpV5QvA2wHQ6iwWM8Q1s6O4jgTl0dtDigVWAi7SA=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Wild TV",
    "link": "https://dfhsahpa45kk2.cloudfront.net/scheduler/scheduleMaster/476/variant/22100055.m3u8",
    "icon": "https://yt3.googleusercontent.com/ZBZVBI42wYc6U1UTNnIkdjrdtB1WKUeAXDhbTwvDk8zjbeGIvMmdxAHOtzOzC75wHtITnqvSGw=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Love Nature",
    "link": "https://fl1.moveonjoy.com/LOVE_NATURE/tracks-v1a1/mono.m3u8",
    "icon": "https://blueantmedia.com/wp-content/uploads/2020/01/brand_love-nature.jpg"
  },
  {
    "name": "Arryadia",
    "link": "https://cdn.live.easybroadcast.io/abr_corp/73_arryadia_k2tgcj0/corp/73_arryadia_k2tgcj0_240p/chunks_dvr.m3u8",
    "icon": "https://yt3.googleusercontent.com/ZvdsfeYl_U-N1ECyfqJPWYYswIc9eHE6sVd2qP5sPq7cq0hm401BE_H6RYlju3V1juC9p_Cl=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Bloomberg",
    "link": "https://bloomberg-bloomberg-3-br.samsung.wurl.tv/manifest/92ebf7f86a6f6e0663f032358ba58cd1.m3u8",
    "icon": "https://m.media-amazon.com/images/I/31Ja06sm51L.png"
  },
  {
    "name": "Boxing TV",
    "link": "https://1180885077.rsc.cdn77.org/HLS/BOXINGTV_v0.m3u8",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3RyYjwVRpBZ0clJiWO5ZYlwLzJryHHpKT3Q&s"
  },
  {
    "name": "Disney Channel",
    "link": "https://fl5.moveonjoy.com/DISNEY/tracks-v1a1/mono.ts.m3u8",
    "icon": "https://yt3.googleusercontent.com/NyNEDUf6vZUw91UA78V8mbKfalM9ufJ2laC5FmPkofOAA6fW9aXRJvOEfeIUkAEI41Yax0xA=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "KIX",
    "link": "https://streams2.sofast.tv/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/06862a07-6a92-4b4d-abc3-5fea131713b5/42a1946c-9002-4b2b-b0cf-ac5a54946f7a/0.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/unnamed-1-1.jpg"
  },
  {
    "name": "MR Beast",
    "link": "https://apollo.production-public.tubi.io/live/ac-mr-beast.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/MrBeast-Logo-1.webp"
  },
  {
    "name": "NBA TV",
    "link": "https://fl3.moveonjoy.com/NBA_TV/tracks-v1a1/mono.ts.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/images-8.png"
  },
  {
    "name": "Korean Movies",
    "link": "https://ec3b4b7e.wurl.com/manifest/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X05FV0tNT1ZJRVNfSExT/348da8bd-839c-4e5e-ac5c-d053218f5fb5/2.m3u8",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwchmh5a03i13DkiCJzSL90CfAs0kxdcjPw&s"
  },
  {
    "name": "NFL Network",
    "link": "https://fl3.moveonjoy.com/NFL_NETWORK/tracks-v1a1/mono.ts.m3u8",
    "icon": "https://static.www.nfl.com/image/private/f_auto/league/khjxu70iiu14uvxridek"
  },
  {
    "name": "NickToons",
    "link": "https://fl1.moveonjoy.com/NICKTOONS/tracks-v1a1/mono.m3u8",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6XxsgaPOn4kMq2LBgifIWwPIw7zBG5b4yw&s"
  },
  {
    "name": "Racing America",
    "link": "https://livetv-fa.tubi.video/racing-america/playlistR240p.m3u8",
    "icon": "https://yt3.googleusercontent.com/KJ6In-ckR9EEZbwwujO2SHG55NW3zb9RFPidkfk63yISw62kYIz_4R2QD6tN2jPg_x56m4tBhXQ=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Yahoo Finance",
    "link": "https://d1ewctnvcwvvvu.cloudfront.net/240p-cc/index.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/images-22.jpg"
  },
  {
    "name": "CNN",
    "link": "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8",
    "icon": "https://cdn-1.webcatalog.io/catalog/cnn-international/cnn-international-icon-unplated.png?v=1716987984587"
  },
  {
    "name": "Africa 24",
    "link": "https://edge12.vedge.infomaniak.com/livecast/ik:africa24/manifest.m3u8",
    "icon": "https://yt3.googleusercontent.com/ytc/AIdro_lCoQndMtEMGu-QzZQ7zI-FZeqOVvtaMxQvx9aCBzIJpg=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Gospel Cartoon",
    "link": "https://stmv1.srvif.com/gospelcartoon/gospelcartoon/playlist.m3u8",
    "icon": "https://www.cxtv.com.br/img/Tvs/Logo/webp-l/f0a3c3c7b9a651e847d86dd71bbb5551.webp"
  },
  {
    "name": "MBC 3",
    "link": "https://mbc-3-usa-ak.akamaized.net/out/v1/8bbfec9446d84c9ea0dfa34edede6db9/index.m3u8",
    "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/MBC_3_Logo.svg/250px-MBC_3_Logo.svg.png"
  },
  {
    "name": "MBC Bollywood",
    "link": "https://shls-mbcbollywood-prod-dub.shahid.net/out/v1/a79c9d7ef2a64a54a64d5c4567b3462a/index.m3u8",
    "icon": "https://i1.sndcdn.com/avatars-000393801480-ppmlje-t1080x1080.jpg"
  }
];

  // DOM refs
  const loader = document.getElementById('loader');
  const grid = document.getElementById('channel-grid');
  const tpl = document.getElementById('channel-card');
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const closeNav = document.getElementById('closeNav');
  const channelTitle = document.getElementById('channel-title');
  const playerStatus = document.getElementById('player-status');
  const reloadBtn = document.getElementById('reloadBtn');
  const muteBtn = document.getElementById('muteBtn');

  // Video.js player init
  const player = videojs('tweve-player', {
    controls: true,
    autoplay: false,
    fluid: true,
    preload: 'auto'
  });

  // Auto-reload config
  let currentStream = null;
  let retryCount = 0;
  const MAX_RETRIES = 5;
  const RETRY_BASE_MS = 1500;
  let reloadTimer = null;

  function setStatus(text){
    playerStatus.textContent = text;
  }

  function playStream(channel){
    if(!channel || !channel.link) return;
    currentStream = channel;
    retryCount = 0;
    channelTitle.textContent = `${channel.name} • LIVE`;
    setStatus('Loading…');
    // set source and attempt play
    player.src({ src: channel.link, type: 'application/x-mpegURL' });
    player.poster = channel.icon || '';
    player.load();
    player.play().then(()=> {
      setStatus('Playing');
    }).catch(err=>{
      console.warn('Playback start error', err);
      setStatus('Playback blocked or failed — attempting reload');
      scheduleReload();
    });
  }

  // reload attempt with exponential backoff
  function scheduleReload(){
    if(retryCount >= MAX_RETRIES){
      setStatus('Stream unavailable — reached retry limit.');
      return;
    }
    retryCount++;
    const delay = RETRY_BASE_MS * Math.pow(1.8, retryCount);
    setStatus(`Attempting reload in ${Math.round(delay/1000)}s (try ${retryCount}/${MAX_RETRIES})`);
    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(()=> {
      if(!currentStream) return;
      player.src({ src: currentStream.link, type: 'application/x-mpegURL' });
      player.load();
      player.play().then(()=> setStatus('Playing')).catch(()=>{
        scheduleReload();
      });
    }, delay);
  }

  // Create channel cards
  function renderChannels(){
    channels.forEach((ch, idx) => {
      const node = tpl.content.cloneNode(true);
      const card = node.querySelector('.card');
      const img = node.querySelector('.thumb');
      const title = node.querySelector('.card-title');
      const btn = node.querySelector('.play-btn');

      img.src = ch.icon;
      img.onerror = () => { img.src = ''; img.style.background = 'linear-gradient(90deg,var(--neon-blue),var(--neon-purple))'; }
      title.textContent = ch.name;

      function start(){
        playStream(ch);
      }

      btn.addEventListener('click', (e) => { e.stopPropagation(); start(); });
      card.addEventListener('click', start);

      grid.appendChild(node);
    });
  }

  // Player event listeners - handle errors & stalls
  player.on('error', () => {
    console.error('Player error', player.error());
    setStatus('Error detected — scheduling reload');
    scheduleReload();
  });

  player.on('stalled', () => {
    setStatus('Stalled — checking connection');
    scheduleReload();
  });

  player.on('waiting', () => {
    setStatus('Buffering…');
    // if buffering long, attempt a reload after short wait
    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(()=> {
      if(player.paused()) scheduleReload();
    }, 5000);
  });

  // UI controls
  reloadBtn.addEventListener('click', () => {
    if(currentStream) {
      retryCount = 0;
      setStatus('Manual reload…');
      player.src({ src: currentStream.link, type: 'application/x-mpegURL' });
      player.load();
      player.play().catch(()=> scheduleReload());
    }
  });

  muteBtn.addEventListener('click', () => {
    player.muted(!player.muted());
    muteBtn.textContent = player.muted() ? 'Unmute' : 'Mute';
  });

  // Navigation open/close
  hamburger.addEventListener('click', ()=> { nav.classList.add('open'); nav.setAttribute('aria-hidden','false'); });
  closeNav.addEventListener('click', ()=> { nav.classList.remove('open'); nav.setAttribute('aria-hidden','true'); });
  // clicking LIVE in nav scrolls to section
  nav.querySelectorAll('a[data-section]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      nav.classList.remove('open');
      document.getElementById('channels').scrollIntoView({behavior:'smooth'});
    });
  });

  // Hide loader after ready
  window.addEventListener('load', () => {
    setTimeout(()=> {
      loader.style.opacity = 0;
      loader.style.pointerEvents = 'none';
      setTimeout(()=> loader.remove(), 600);
    }, 750);
  });

  // Boot
  renderChannels();

  // Expose for debugging
  window.TWEVE = {
    player, playStream, channels
  };
})();
```// filepath: c:\TWEVL\script.js
/* ...existing code... */
(() => {
  // Channel list (as provided)
  const channels = [
  {
    "name": "Sports TV",
    "link": "https://spstr.abntv.live/hls/psstream.m3u8",
    "icon": "https://img.freepik.com/premium-vector/soccer-television-logo-template-design_316488-547.jpg?semt=ais_hybrid&w=740"
  },
  {
    "name": "Dodoma TV",
    "link": "https://goliveafrica.media:9998/live/625965017ed69/index.m3u8",
    "icon": "https://yt3.googleusercontent.com/tlIkQ73h3Zj3-ruMpfgCjvFyWJ6o2fUX7vMwU4omL4iTnjTUuSkK0n0c1XVVT_9MINuUuQlpXg=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Romanza+",
    "link": "https://origin3.afxp.telemedia.co.za/PremiumFree/romanza/abr_satellitechannel/satch_romanza_360p/chunks.m3u8",
    "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Romanza%2B%C3%81frica_logo.jpg/250px-Romanza%2B%C3%81frica_logo.jpg"
  },
  {
    "name": "1KZN",
    "link": "https://cdn.freevisiontv.co.za/sttv/smil:1kzn.stream.smil/chunklist_b480000.m3u8",
    "icon": "https://starsat.co.za/wp-content/uploads/2023/08/1KZN-TV.png"
  },
  {
    "name": "CapeTown TV",
    "link": "https://cdn.freevisiontv.co.za/sttv/smil:ctv.stream.smil/chunklist_b480000.m3u8",
    "icon": "https://capetowntv.org/wp-content/uploads/2023/01/cropped-Web-icon.png"
  },
  {
    "name": "SABC News",
    "link": "https://sabconetanw.cdn.mangomolo.com/news/smil:news.stream.smil/chunklist_b250000_t64MjQwcA==.m3u8",
    "icon": "https://yt3.googleusercontent.com/x5Bgc7UBYZvOHvp3UG91lZbV6ND0YCOi2a026vLPDGIU5GF2qp5JnHnCeLyPegWhEjM5njpN=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Soweto TV",
    "link": "https://cdn.freevisiontv.co.za/sttv/smil:soweto.stream.smil/chunklist_b480000.m3u8",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIRfIk1qiekejwXNifTZCXGm0hS1cLmxiqg&s"
  },
  {
    "name": "Sport Connect",
    "link": "https://origin3.afxp.telemedia.co.za/PremiumFree/sportsconnect/abr_satellitechannel/satch_sportsconnect_360p/chunks.m3u8",
    "icon": "https://sportsconnect.uk/wp-content/uploads/2024/04/Blue-Modern-Geometric-Initials-X-with-Home-Real-Estate-Logo-6.png"
  },
  {
    "name": "Aljazeera",
    "link": "https://live-hls-web-aje.getaj.net/AJE/index.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/images-6.png"
  },
  {
    "name": "Always Funny Videos",
    "link": "https://apollo.production-public.tubi.io/live/ac-afv.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/images-7.png"
  },
  {
    "name": "Afro Sport Nigeria",
    "link": "https://newproxy3.vidivu.tv/vidivu_afrosport/tracks-v1a1/mono.ts.m3u8",
    "icon": "https://imagecdn.websitebuilder.prositehosting.co.uk/15/c0/15c0fb9b-b930-48ff-8f8b-d967dde48a93.png"
  },
  {
    "name": "BBC News",
    "link": "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8",
    "icon": "https://yt3.googleusercontent.com/v4JamQ9B-PUiJHjmZQs9UwTaoLQW8vijJMMpV5QvA2wHQ6iwWM8Q1s6O4jgTl0dtDigVWAi7SA=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Wild TV",
    "link": "https://dfhsahpa45kk2.cloudfront.net/scheduler/scheduleMaster/476/variant/22100055.m3u8",
    "icon": "https://yt3.googleusercontent.com/ZBZVBI42wYc6U1UTNnIkdjrdtB1WKUeAXDhbTwvDk8zjbeGIvMmdxAHOtzOzC75wHtITnqvSGw=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Love Nature",
    "link": "https://fl1.moveonjoy.com/LOVE_NATURE/tracks-v1a1/mono.m3u8",
    "icon": "https://blueantmedia.com/wp-content/uploads/2020/01/brand_love-nature.jpg"
  },
  {
    "name": "Arryadia",
    "link": "https://cdn.live.easybroadcast.io/abr_corp/73_arryadia_k2tgcj0/corp/73_arryadia_k2tgcj0_240p/chunks_dvr.m3u8",
    "icon": "https://yt3.googleusercontent.com/ZvdsfeYl_U-N1ECyfqJPWYYswIc9eHE6sVd2qP5sPq7cq0hm401BE_H6RYlju3V1juC9p_Cl=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Bloomberg",
    "link": "https://bloomberg-bloomberg-3-br.samsung.wurl.tv/manifest/92ebf7f86a6f6e0663f032358ba58cd1.m3u8",
    "icon": "https://m.media-amazon.com/images/I/31Ja06sm51L.png"
  },
  {
    "name": "Boxing TV",
    "link": "https://1180885077.rsc.cdn77.org/HLS/BOXINGTV_v0.m3u8",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3RyYjwVRpBZ0clJiWO5ZYlwLzJryHHpKT3Q&s"
  },
  {
    "name": "Disney Channel",
    "link": "https://fl5.moveonjoy.com/DISNEY/tracks-v1a1/mono.ts.m3u8",
    "icon": "https://yt3.googleusercontent.com/NyNEDUf6vZUw91UA78V8mbKfalM9ufJ2laC5FmPkofOAA6fW9aXRJvOEfeIUkAEI41Yax0xA=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "KIX",
    "link": "https://streams2.sofast.tv/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/06862a07-6a92-4b4d-abc3-5fea131713b5/42a1946c-9002-4b2b-b0cf-ac5a54946f7a/0.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/unnamed-1-1.jpg"
  },
  {
    "name": "MR Beast",
    "link": "https://apollo.production-public.tubi.io/live/ac-mr-beast.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/MrBeast-Logo-1.webp"
  },
  {
    "name": "NBA TV",
    "link": "https://fl3.moveonjoy.com/NBA_TV/tracks-v1a1/mono.ts.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/images-8.png"
  },
  {
    "name": "Korean Movies",
    "link": "https://ec3b4b7e.wurl.com/manifest/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X05FV0tNT1ZJRVNfSExT/348da8bd-839c-4e5e-ac5c-d053218f5fb5/2.m3u8",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwchmh5a03i13DkiCJzSL90CfAs0kxdcjPw&s"
  },
  {
    "name": "NFL Network",
    "link": "https://fl3.moveonjoy.com/NFL_NETWORK/tracks-v1a1/mono.ts.m3u8",
    "icon": "https://static.www.nfl.com/image/private/f_auto/league/khjxu70iiu14uvxridek"
  },
  {
    "name": "NickToons",
    "link": "https://fl1.moveonjoy.com/NICKTOONS/tracks-v1a1/mono.m3u8",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6XxsgaPOn4kMq2LBgifIWwPIw7zBG5b4yw&s"
  },
  {
    "name": "Racing America",
    "link": "https://livetv-fa.tubi.video/racing-america/playlistR240p.m3u8",
    "icon": "https://yt3.googleusercontent.com/KJ6In-ckR9EEZbwwujO2SHG55NW3zb9RFPidkfk63yISw62kYIz_4R2QD6tN2jPg_x56m4tBhXQ=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Yahoo Finance",
    "link": "https://d1ewctnvcwvvvu.cloudfront.net/240p-cc/index.m3u8",
    "icon": "https://enjoysurfing.online/wp-content/uploads/2025/03/images-22.jpg"
  },
  {
    "name": "CNN",
    "link": "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8",
    "icon": "https://cdn-1.webcatalog.io/catalog/cnn-international/cnn-international-icon-unplated.png?v=1716987984587"
  },
  {
    "name": "Africa 24",
    "link": "https://edge12.vedge.infomaniak.com/livecast/ik:africa24/manifest.m3u8",
    "icon": "https://yt3.googleusercontent.com/ytc/AIdro_lCoQndMtEMGu-QzZQ7zI-FZeqOVvtaMxQvx9aCBzIJpg=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Gospel Cartoon",
    "link": "https://stmv1.srvif.com/gospelcartoon/gospelcartoon/playlist.m3u8",
    "icon": "https://www.cxtv.com.br/img/Tvs/Logo/webp-l/f0a3c3c7b9a651e847d86dd71bbb5551.webp"
  },
  {
    "name": "MBC 3",
    "link": "https://mbc-3-usa-ak.akamaized.net/out/v1/8bbfec9446d84c9ea0dfa34edede6db9/index.m3u8",
    "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/MBC_3_Logo.svg/250px-MBC_3_Logo.svg.png"
  },
  {
    "name": "MBC Bollywood",
    "link": "https://shls-mbcbollywood-prod-dub.shahid.net/out/v1/a79c9d7ef2a64a54a64d5c4567b3462a/index.m3u8",
    "icon": "https://i1.sndcdn.com/avatars-000393801480-ppmlje-t1080x1080.jpg"
  }
];

  // DOM refs
  const loader = document.getElementById('loader');
  const grid = document.getElementById('channel-grid');
  const tpl = document.getElementById('channel-card');
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const closeNav = document.getElementById('closeNav');
  const channelTitle = document.getElementById('channel-title');
  const playerStatus = document.getElementById('player-status');
  const reloadBtn = document.getElementById('reloadBtn');
  const muteBtn = document.getElementById('muteBtn');

  // Video.js player init
  const player = videojs('tweve-player', {
    controls: true,
    autoplay: false,
    fluid: true,
    preload: 'auto'
  });

  // Auto-reload config
  let currentStream = null;
  let retryCount = 0;
  const MAX_RETRIES = 5;
  const RETRY_BASE_MS = 1500;
  let reloadTimer = null;

  function setStatus(text){
    playerStatus.textContent = text;
  }

  function playStream(channel){
    if(!channel || !channel.link) return;
    currentStream = channel;
    retryCount = 0;
    channelTitle.textContent = `${channel.name} • LIVE`;
    setStatus('Loading…');
    // set source and attempt play
    player.src({ src: channel.link, type: 'application/x-mpegURL' });
    player.poster = channel.icon || '';
    player.load();
    player.play().then(()=> {
      setStatus('Playing');
    }).catch(err=>{
      console.warn('Playback start error', err);
      setStatus('Playback blocked or failed — attempting reload');
      scheduleReload();
    });
  }

  // reload attempt with exponential backoff
  function scheduleReload(){
    if(retryCount >= MAX_RETRIES){
      setStatus('Stream unavailable — reached retry limit.');
      return;
    }
    retryCount++;
    const delay = RETRY_BASE_MS * Math.pow(1.8, retryCount);
    setStatus(`Attempting reload in ${Math.round(delay/1000)}s (try ${retryCount}/${MAX_RETRIES})`);
    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(()=> {
      if(!currentStream) return;
      player.src({ src: currentStream.link, type: 'application/x-mpegURL' });
      player.load();
      player.play().then(()=> setStatus('Playing')).catch(()=>{
        scheduleReload();
      });
    }, delay);
  }

  // Create channel cards
  function renderChannels(){
    channels.forEach((ch, idx) => {
      const node = tpl.content.cloneNode(true);
      const card = node.querySelector('.card');
      const img = node.querySelector('.thumb');
      const title = node.querySelector('.card-title');
      const btn = node.querySelector('.play-btn');

      img.src = ch.icon;
      img.onerror = () => { img.src = ''; img.style.background = 'linear-gradient(90deg,var(--neon-blue),var(--neon-purple))'; }
      title.textContent = ch.name;

      function start(){
        playStream(ch);
      }

      btn.addEventListener('click', (e) => { e.stopPropagation(); start(); });
      card.addEventListener('click', start);

      grid.appendChild(node);
    });
  }

  // Player event listeners - handle errors & stalls
  player.on('error', () => {
    console.error('Player error', player.error());
    setStatus('Error detected — scheduling reload');
    scheduleReload();
  });

  player.on('stalled', () => {
    setStatus('Stalled — checking connection');
    scheduleReload();
  });

  player.on('waiting', () => {
    setStatus('Buffering…');
    // if buffering long, attempt a reload after short wait
    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(()=> {
      if(player.paused()) scheduleReload();
    }, 5000);
  });

  // UI controls
  reloadBtn.addEventListener('click', () => {
    if(currentStream) {
      retryCount = 0;
      setStatus('Manual reload…');
      player.src({ src: currentStream.link, type: 'application/x-mpegURL' });
      player.load();
      player.play().catch(()=> scheduleReload());
    }
  });

  muteBtn.addEventListener('click', () => {
    player.muted(!player.muted());
    muteBtn.textContent = player.muted() ? 'Unmute' : 'Mute';
  });

  // Navigation open/close
  hamburger.addEventListener('click', ()=> { nav.classList.add('open'); nav.setAttribute('aria-hidden','false'); });
  closeNav.addEventListener('click', ()=> { nav.classList.remove('open'); nav.setAttribute('aria-hidden','true'); });
  // clicking LIVE in nav scrolls to section
  nav.querySelectorAll('a[data-section]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      nav.classList.remove('open');
      document.getElementById('channels').scrollIntoView({behavior:'smooth'});
    });
  });

  // Hide loader after ready
  window.addEventListener('load', () => {
    setTimeout(()=> {
      loader.style.opacity = 0;
      loader.style.pointerEvents = 'none';
      setTimeout(()=> loader.remove(), 600);
    }, 750);
  });

  // Boot
  renderChannels();

  // Expose for debugging
  window.TWEVE = {
    player, playStream, channels
  };
})();
