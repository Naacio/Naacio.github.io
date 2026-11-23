const works = [
  {
    slug: 'campus', title: '校内宣传作品', label: 'CAMPUS FILMS',
    intro: '用影像记录校园里的集体记忆与现场情绪。',
    note: '浙江大学军训视频项目中，参与内容策划、素材筛选与剪辑，并协同团队推进成片交付；其他校园影像作为精选作品呈现。',
    cover: 'training',
    videos: [
      { id: 'training', title: '涌动｜浙江大学军训视频', source: '浙江大学校园项目', portrait: false },
      { id: 'cheer', title: '听，浙大在为你加油！', source: '浙江大学校园项目', portrait: false }
    ]
  },
  {
    slug: 'brand', title: '商单短视频', label: 'COMMERCIAL VIDEO',
    intro: '在品牌需求与账号表达之间，找到适合短视频的叙事节奏。',
    note: '来自 Mavis 在麻省理工账号运营期间的产出，主要负责前期策划、脚本撰写、视频剪辑和品牌沟通。',
    cover: 'pingan',
    videos: [
      { id: 'pingan', title: '平安万事达｜商业合作视频', source: 'Mavis 在麻省理工', portrait: true },
      { id: 'hailuo', title: '海螺 AI｜商业合作视频', source: 'Mavis 在麻省理工', portrait: true },
      { id: 'doubao', title: '豆包 AI｜商业合作视频', source: 'Mavis 在麻省理工', portrait: true },
      { id: 'diamond', title: '天然钻石｜商业合作视频', source: 'Mavis 在麻省理工', portrait: true },
      { id: 'cathay', title: '国泰学生惠｜商业合作视频', source: 'Mavis 在麻省理工', portrait: true },
      { id: 'night', title: '夜曲编程｜商业合作视频', source: 'Mavis 在麻省理工', portrait: true },
      { id: 'baidu', title: '百度翻译｜商业合作视频', source: 'Mavis 在麻省理工', portrait: true },
      { id: 'xianyu', title: '闲鱼｜商业合作视频', source: 'Mavis 在麻省理工', portrait: true }
    ]
  },
  {
    slug: 'creative', title: 'MV 与创意短片', label: 'MUSIC & MOTION',
    intro: '在音乐、节奏与动态图形之间探索新的画面语言。',
    note: '选自校园个人作品。这里集中展示音乐影像与动画创作，方便观看不同题材的视听表达。',
    cover: 'echo',
    videos: [
      { id: 'echo', title: '回响｜校园十佳歌手大赛原创主题曲 MV', source: '浙江大学校园项目', portrait: false },
      { id: 'box', title: '方块动画接力｜求是潮 Box', source: '浙江大学校园项目', portrait: false }
    ]
  },
  {
    slug: 'social', title: '日常生活与 Vlog', label: 'LIFE & VLOG',
    intro: '记录真实生活，在细节中寻找自然的叙事节奏。',
    note: '选自 Mavis 在麻省理工与 Cindy 留学账号的日常内容，包含生活记录与人物分享。',
    cover: 'cindy-vlog',
    videos: [
      { id: 'cindy-vlog', title: '日常 Vlog', source: 'Cindy 留学', portrait: true },
      { id: 'friend', title: '朋友分享', source: 'Mavis 在麻省理工', portrait: true }
    ]
  },
  {
    slug: 'documentary', title: '纪录与文旅影像', label: 'DOCUMENTARY',
    intro: '从人物与地方出发，保留故事本身的质感。',
    note: '包括浙江省林业融媒体中心实习作品与校园支教纪实影像。侧重人物、地域与真实场景的内容呈现。',
    cover: 'rainbow',
    videos: [
      { id: 'rainbow', title: '七彩梦｜浙大三农暑假支教日记', source: '浙江大学校园项目', portrait: false },
      { id: 'qianjiangyuan', title: '钱江源', source: '浙江省林业融媒体中心', portrait: false }
    ]
  }
];

const brandProcess = [
  { stage: '策划', images: [
    { file: 'plan-jingdong.png', title: '京东数码节 · 内容方向' },
    { file: 'plan-cueme.png', title: 'CueMe · 选题 Brief' }
  ] },
  { stage: '大纲', images: [
    { file: 'outline-toefl.png', title: '托福家考 · 内容大纲' },
    { file: 'outline-time.png', title: '时间管理 · 选题大纲' }
  ] },
  { stage: '脚本', images: [
    { file: 'script-toefl.png', title: '托福家考 · 分镜脚本' },
    { file: 'script-doubao.png', title: '豆包 · 视频脚本' }
  ] },
  { stage: '交付', images: [
    { file: 'delivery-toefl.png', title: '托福家考 · 交付审核记录' }
  ] }
];


const main = document.querySelector('#main');
const nav = [...document.querySelectorAll('[data-nav]')];
const phone = { label: '198 3887 8929', url: 'tel:+8619838878929' };
const email = { label: '19838878929@163.com', url: 'mailto:19838878929@163.com' };
const featured = works.flatMap(work => work.videos.map(video => ({
  ...video,
  caption: video.title.split('｜')[0],
  category: work.title,
  poster: `./media/${video.id}.jpg`,
  href: `#/work/${work.slug}/${video.id}`
})));
const totalVideos = featured.length;
const isLocalPreview = location.protocol === 'file:' || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
const videoDirectory = isLocalPreview ? 'https://naacio.github.io/media/' : './media/';

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

const contactLinks = `<a href="${phone.url}">${phone.label}</a><a href="${email.url}">${email.label}</a>`;
const footer = `<footer class="site-footer">
  <span>© ${new Date().getFullYear()} 周志儒</span>
  <a href="#/about/contact">联系方式</a>
</footer>`;

function workCard(work, headingLevel) {
  const isPortrait = work.videos.find(video => video.id === work.cover).portrait;
  return `<a class="work-card work-card--${work.slug}" href="#/work/${work.slug}">
    <div class="work-cover${isPortrait ? ' work-cover--portrait' : ''}" style="--cover: url('./media/${work.cover}.jpg')">
      <img src="./media/${work.cover}.jpg" alt="" loading="lazy" decoding="async">
      <span class="work-count">${work.videos.length} 部视频</span>
    </div>
    <div class="work-caption">
      <div>
        <p class="section-label">${work.label}</p>
        <${headingLevel}>${escapeHtml(work.title)}</${headingLevel}>
        <p class="work-description">${escapeHtml(work.intro)}</p>
      </div>
      <span class="card-action" aria-hidden="true">查看</span>
    </div>
  </a>`;
}

function workGrid(headingLevel = 'h3') {
  return `<div class="work-grid">${works.map(work => workCard(work, headingLevel)).join('')}</div>`;
}

function renderHome() {
  const first = featured[0];
  main.innerHTML = `<div class="page">
    <section class="showcase" aria-labelledby="hero-title">
      <div class="hero">
        <div class="hero-copy">
          <p class="section-label hero-label">VIDEO EDITOR <span aria-hidden="true">/</span> CONTENT CREATOR</p>
          <h1 id="hero-title">周志儒</h1>
          <p class="hero-role">视频创作与剪辑</p>
          <p class="hero-intro">浙江大学戏剧与影视专业硕士在读。参与过校园影像、留学博主账号运营和融媒体内容制作，实践涵盖选题策划、脚本撰写、拍摄剪辑和内容复盘。</p>
          <div class="hero-actions">
            <a class="button button--accent" href="#/work">浏览作品</a>
            <a class="button button--light" href="#/about">查看简历</a>
          </div>
        </div>
        <div class="hero-art${first.portrait ? ' hero-art--portrait' : ''}" aria-hidden="true" style="--feature-poster: url('${first.poster}')">
          <img class="hero-still" src="${first.poster}" alt="" fetchpriority="high">
        </div>
        <div class="hero-feature">
          <div class="feature-copy" aria-live="polite">
            <strong id="feature-title">《${escapeHtml(first.caption)}》</strong>
            <span id="feature-source">${escapeHtml(first.source)}</span>
          </div>
          <a class="feature-play" id="feature-play" href="${first.href}" aria-label="观看《${escapeHtml(first.title)}》"><span class="play-icon" aria-hidden="true"></span></a>
        </div>
      </div>
      <div class="feature-picker">
        <div class="feature-picker-head">
          <p><strong>全部作品</strong> <span>${totalVideos} 部</span></p>
          <div class="feature-scroll-actions">
            <button type="button" data-feature-scroll="-1" aria-controls="feature-strip" aria-disabled="true">上一组</button>
            <button type="button" data-feature-scroll="1" aria-controls="feature-strip">下一组</button>
          </div>
        </div>
        <div class="feature-strip" id="feature-strip" role="group" aria-label="切换封面作品">
          ${featured.map((item, index) => `<button class="feature-choice" type="button" data-feature="${index}" aria-pressed="${index === 0}" title="${escapeHtml(item.title)}">
            <img src="${item.poster}" alt="" width="64" height="40" loading="lazy" decoding="async">
            <span><strong>${escapeHtml(item.caption)}</strong><small>${escapeHtml(item.category)}</small></span>
          </button>`).join('')}
        </div>
      </div>
    </section>
    <section class="home-work" aria-labelledby="work-title">
      <div class="section-heading">
        <div><p class="section-label">SELECTED WORK</p><h2 id="work-title">精选作品</h2></div>
        <p class="section-count">${works.length} 类创作 <span aria-hidden="true">/</span> ${totalVideos} 部视频</p>
      </div>
      ${workGrid()}
    </section>
    <section class="home-profile" aria-labelledby="profile-title">
      <div>
        <p class="section-label">PROFILE</p>
        <h2 id="profile-title">个人简历</h2>
        <p>浙江大学国际新闻本科、戏剧与影视专业硕士在读。实践方向包括视频剪辑、内容策划、新媒体运营和公众号文案与排版。</p>
        <a class="button button--outline" href="#/about">教育与实践经历</a>
      </div>
      <div class="home-contact"><h3>联系方式</h3>${contactLinks}</div>
    </section>
    ${footer}
  </div>`;
  document.title = '周志儒｜视频创作与剪辑作品集';
  document.getElementById('feature-strip').addEventListener('scroll', updateFeatureScroll, { passive: true });
  updateFeatureScroll();
}

function selectFeature(index) {
  const item = featured[index];
  main.querySelector('#feature-title').textContent = `《${item.caption}》`;
  main.querySelector('#feature-source').textContent = item.source;
  const playLink = main.querySelector('#feature-play');
  playLink.href = item.href;
  playLink.setAttribute('aria-label', `观看《${item.title}》`);
  const art = main.querySelector('.hero-art');
  art.classList.toggle('hero-art--portrait', item.portrait);
  art.style.setProperty('--feature-poster', `url('${item.poster}')`);
  art.querySelector('img').src = item.poster;
  main.querySelectorAll('.feature-choice').forEach((button, position) => {
    button.setAttribute('aria-pressed', String(position === index));
  });
}

function updateFeatureScroll() {
  const strip = document.getElementById('feature-strip');
  if (!strip) return;
  const [previous, next] = main.querySelectorAll('[data-feature-scroll]');
  previous.setAttribute('aria-disabled', String(strip.scrollLeft <= 1));
  next.setAttribute('aria-disabled', String(strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 1));
}

function renderWork() {
  main.innerHTML = `<div class="page">
    <header class="page-heading">
      <p class="section-label">PORTFOLIO</p>
      <h1>作品目录</h1>
      <p>按类别浏览 ${totalVideos} 部视频。</p>
    </header>
    <section aria-label="作品分类">${workGrid('h2')}</section>
    ${footer}
  </div>`;
  document.title = '作品目录｜周志儒';
}

function videoCard(video) {
  const title = escapeHtml(video.title);
  return `<article class="video-card" id="video-${video.id}" tabindex="-1">
    <div class="video-frame${video.portrait ? ' video-frame--portrait' : ''}">
      <video controls playsinline preload="none" poster="./media/${video.id}.jpg" aria-label="播放 ${title}">
        <source src="${videoDirectory}${video.id}.mp4" type="video/mp4">
        你的浏览器暂不支持视频播放。
      </video>
    </div>
    <div class="video-copy"><h2>${title}</h2><p>${escapeHtml(video.source)}</p>
      <a class="video-fallback" href="${videoDirectory}${video.id}.mp4" target="_blank" rel="noopener" hidden>在新标签页打开视频</a>
    </div>
  </article>`;
}

function renderBrandProcess() {
  return `<section class="process-gallery" aria-labelledby="process-title">
    <div class="section-heading"><div><p class="section-label">PRODUCTION PROCESS</p><h2 id="process-title">商单制作流程</h2></div></div>
    ${brandProcess.map(group => `<div class="process-stage">
      <h3>${escapeHtml(group.stage)}</h3>
      <div class="process-images">${group.images.map(item => `<a class="process-item" href="./media/process/${item.file}" target="_blank" rel="noopener" data-title="${escapeHtml(item.title)}">
        <span class="process-shot"><img src="./media/process/${item.file}" alt="" loading="lazy" decoding="async"></span>
        <span class="process-caption">${escapeHtml(item.title)} <small>放大查看</small></span>
      </a>`).join('')}</div>
    </div>`).join('')}
  </section>`;
}

function renderDetail(work) {
  const next = works[(works.indexOf(work) + 1) % works.length];
  const portrait = work.videos.every(video => video.portrait);
  main.innerHTML = `<div class="page">
    <header class="page-heading">
      <a class="back-link" href="#/work">全部作品</a>
      <p class="section-label">${work.label}</p>
      <h1>${escapeHtml(work.title)}</h1>
      <p>${escapeHtml(work.intro)}</p>
      <nav class="category-nav" aria-label="作品分类">
        ${works.map(category => `<a href="#/work/${category.slug}"${category === work ? ' aria-current="page"' : ''}>${escapeHtml(category.title)}</a>`).join('')}
      </nav>
    </header>
    <section class="video-grid${portrait ? ' video-grid--portrait' : ''}" aria-label="${escapeHtml(work.title)}视频">${work.videos.map(videoCard).join('')}</section>
    <section class="detail-note">
      <h2>项目背景</h2>
      <p>${escapeHtml(work.note)}</p>
    </section>
    ${work.slug === 'brand' ? renderBrandProcess() : ''}
    <a class="next-work" href="#/work/${next.slug}"><span class="section-label">下一类作品</span><strong>${escapeHtml(next.title)}</strong></a>
    ${footer}
  </div>`;
  document.title = `${work.title}｜周志儒作品集`;
}

function renderAbout() {
  main.innerHTML = `<div class="page">
    <header class="page-heading">
      <p class="section-label">ABOUT</p>
      <h1>周志儒 · 简历</h1>
      <p>我本科就读于浙江大学国际新闻专业，现为浙江大学戏剧与影视专业硕士在读。曾参与留学博主账号运营、林业融媒体中心内容制作及校园影像项目，持续探索不同平台上的内容叙事与影像表达。</p>
    </header>
    <div class="resume-grid">
      <section class="resume-section">
        <p class="section-label">EDUCATION</p><h2>教育经历</h2>
        <ul class="resume-list">
          <li><small>2026.06 — 至今</small><h3>浙江大学</h3><p>戏剧与影视专业 · 硕士在读</p></li>
          <li><small>2022.09 — 2026.06</small><h3>浙江大学</h3><p>国际新闻专业 · 本科</p></li>
        </ul>
      </section>
      <section class="resume-section">
        <p class="section-label">EXPERIENCE</p><h2>相关实践</h2>
        <ul class="resume-list">
          <li><h3>海外留学博主账号运营</h3><p>Mavis 在麻省理工 / Cindy 留学</p></li>
          <li><h3>浙江省林业融媒体中心</h3><p>新闻与新媒体运营实习</p></li>
          <li><h3>上海梅维若有所思教育科技有限公司</h3><p>产品运营实习</p></li>
        </ul>
      </section>
    </div>
    <div class="resume-bottom">
      <section class="resume-section">
        <p class="section-label">FOCUS</p><h2>工作方向</h2>
        <ul class="skills"><li>视频创作与剪辑</li><li>内容策划与运营</li><li>公众号文案与排版</li></ul>
      </section>
      <section class="resume-section resume-contact" id="contact" tabindex="-1">
        <p class="section-label">CONTACT</p><h2>联系方式</h2>
        ${contactLinks}
      </section>
    </div>
    ${footer}
  </div>`;
  document.title = '关于周志儒｜视频作品集';
}

function render(navigated = false) {
  const route = location.hash.slice(1).replace(/\/$/, '') || '/';
  const [, section, slug, videoId] = route.split('/');
  const work = section === 'work' ? works.find(item => slug === item.slug) : null;
  let active = 'home';
  let destination;

  if (work) {
    renderDetail(work);
    active = 'work';
    if (work.videos.some(video => video.id === videoId)) destination = document.getElementById(`video-${videoId}`);
  } else if (route === '/work') {
    renderWork();
    active = 'work';
  } else if (route === '/about' || route === '/about/contact') {
    renderAbout();
    active = 'about';
    if (route === '/about/contact') destination = document.getElementById('contact');
  } else {
    renderHome();
  }

  nav.forEach(link => {
    if (link.dataset.nav === active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  if (destination) {
    destination.focus({ preventScroll: true });
    destination.scrollIntoView({ block: 'start' });
  } else {
    if (navigated) main.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

document.querySelector('.skip-link').addEventListener('click', event => {
  event.preventDefault();
  main.focus();
});

main.addEventListener('error', event => {
  const video = event.target.closest('video');
  const fallback = video?.closest('.video-card').querySelector('.video-fallback');
  if (fallback) fallback.hidden = false;
}, true);

main.addEventListener('play', event => {
  for (const video of main.querySelectorAll('video')) {
    if (video !== event.target) video.pause();
  }
}, true);

const viewer = document.querySelector('#process-viewer');
const viewerImage = viewer.querySelector('img');
const viewerTitle = viewer.querySelector('#viewer-title');
const viewerCount = viewer.querySelector('#viewer-count');
const viewerOriginal = viewer.querySelector('#viewer-original');
let processLinks = [];
let photoIndex = 0;

function showProcessImage(index) {
  photoIndex = (index + processLinks.length) % processLinks.length;
  const link = processLinks[photoIndex];
  viewerImage.src = link.href;
  viewerImage.alt = link.dataset.title;
  viewerTitle.textContent = link.dataset.title;
  viewerCount.textContent = `${photoIndex + 1} / ${processLinks.length}`;
  viewerOriginal.href = link.href;
}

main.addEventListener('click', event => {
  const feature = event.target.closest('[data-feature]');
  if (feature) selectFeature(Number(feature.dataset.feature));

  const scrollButton = event.target.closest('[data-feature-scroll]');
  if (scrollButton && scrollButton.getAttribute('aria-disabled') !== 'true') {
    const strip = document.getElementById('feature-strip');
    strip.scrollBy({ left: Number(scrollButton.dataset.featureScroll) * strip.clientWidth * .9 });
  }

  const processLink = event.target.closest('.process-item');
  if (!processLink || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof viewer.showModal !== 'function') return;
  event.preventDefault();
  processLinks = [...main.querySelectorAll('.process-item')];
  showProcessImage(processLinks.indexOf(processLink));
  viewer.showModal();
});

viewer.querySelector('#viewer-previous').addEventListener('click', () => showProcessImage(photoIndex - 1));
viewer.querySelector('#viewer-next').addEventListener('click', () => showProcessImage(photoIndex + 1));
viewer.addEventListener('click', event => {
  if (event.target === viewer) viewer.close();
});
viewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showProcessImage(photoIndex + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});

window.addEventListener('hashchange', () => {
  if (viewer.open) viewer.close();
  render(true);
});
window.addEventListener('resize', updateFeatureScroll);
render();
