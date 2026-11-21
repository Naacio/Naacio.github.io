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
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const media = id => `./media/${id}`;
const footer = `<footer class="footer"><span>© ${new Date().getFullYear()} 周志儒</span><span>视频创作 · 剪辑 · 内容运营</span></footer>`;

function card(work) {
  return `<a class="card" href="#/work/${work.slug}" aria-label="查看分类：${escapeHtml(work.title)}">
    <img src="${media(work.cover)}.jpg" alt="${escapeHtml(work.title)}作品画面" loading="lazy">
    <span class="card-inner"><span class="card-tag">${work.label}</span><span class="card-bottom"><span><span class="card-title">${escapeHtml(work.title)}</span><br><span class="card-count">精选 ${work.videos.length} 部作品</span></span><span class="card-arrow" aria-hidden="true">↗</span></span></span>
  </a>`;
}

function renderHome() {
  main.innerHTML = `<div class="page">
    <section class="hero" aria-labelledby="hero-title">
      <div class="eyebrow"><span class="line"></span> 周志儒 / 视频创作与剪辑</div>
      <h1 id="hero-title"><span class="hero-prefix">个人作品集</span><span class="hero-tagline">让每一帧，<br>都更有<em>表达。</em></span></h1>
      <div class="hero-copy"><p>我是周志儒，本科就读于浙江大学国际新闻专业，现为浙江大学戏剧与影视专业硕士在读。曾参与留学博主账号运营、浙江省林业融媒体中心内容制作及校园影像项目，积累了选题策划、脚本撰写、拍摄剪辑与内容复盘的实践经验。</p><small>向下探索作品 ↓</small></div>
    </section>
    <section id="work" aria-labelledby="work-title"><div class="section-head"><h2 id="work-title">精选作品 / WORK</h2><p>五个方向，了解我的创作实践</p></div><div class="work-grid">${works.map(card).join('')}</div></section>
    <section class="info-strip" aria-label="个人简介"><div><div class="info-label">目前</div><p>浙江大学<br>戏剧与影视专业硕士在读</p></div><div><div class="info-label">关注领域</div><p>视频剪辑、内容策划<br>新媒体运营<br>公众号文案与排版</p></div><div><div class="info-label">联系</div><p class="contact-lines"><a href="tel:+8619838878929">198 3887 8929</a><br><a href="mailto:19838878929@163.com">19838878929@163.com</a></p></div></section>
    ${footer}
  </div>`;
  document.title = '周志儒｜视频创作与剪辑作品集';
}

function videoCard(video) {
  return `<article class="video-card"><div class="video-frame ${video.portrait ? 'portrait' : ''}"><video controls playsinline preload="none" poster="${media(video.id)}.jpg" aria-label="播放${escapeHtml(video.title)}"><source src="${media(video.id)}.mp4" type="video/mp4">你的浏览器暂不支持视频播放。</video></div><div class="video-copy"><div><h2>${escapeHtml(video.title)}</h2><p>${escapeHtml(video.source)}</p></div><span>VIDEO</span></div></article>`;
}

function renderBrandProcess() {
  return `<section class="process-gallery" aria-labelledby="process-title">
    <div class="process-head"><h2 id="process-title">部分项目的品牌沟通策划和脚本截图</h2><p>策划 / 大纲 / 脚本 / 交付</p></div>
    ${brandProcess.map(group => `<div class="process-stage"><h3>${escapeHtml(group.stage)}</h3><div class="process-images">${group.images.map(item => `<a class="process-item" href="${media(`process/${item.file}`)}" target="_blank" rel="noopener noreferrer" aria-label="查看原图：${escapeHtml(item.title)}"><span class="process-shot"><img src="${media(`process/${item.file}`)}" alt="${escapeHtml(item.title)}截图" loading="lazy" decoding="async"></span><span class="process-caption"><span>${escapeHtml(item.title)}</span><small>查看原图</small></span></a>`).join('')}</div></div>`).join('')}
  </section>`;
}

function renderDetail(work) {
  const next = works[(works.indexOf(work) + 1) % works.length];
  main.innerHTML = `<div class="page">
    <section class="detail-hero"><a class="back-link" href="#/work">← 返回全部作品</a><div class="eyebrow"><span class="line"></span>${work.label}</div><h1>${escapeHtml(work.title)}</h1><div class="detail-meta"><p>${escapeHtml(work.intro)}</p><span>精选 ${work.videos.length} 部作品</span></div></section>
    <section class="video-grid" aria-label="${escapeHtml(work.title)}视频">${work.videos.map(videoCard).join('')}</section>
    <section class="detail-note"><h2>项目背景</h2><p>${escapeHtml(work.note)}</p></section>
    ${work.slug === 'brand' ? renderBrandProcess() : ''}
    <a class="next-work" href="#/work/${next.slug}"><span><small>继续浏览</small><br><strong>${escapeHtml(next.title)}</strong></span><strong aria-hidden="true">↗</strong></a>
    ${footer}
  </div>`;
  document.title = `${work.title}｜周志儒作品集`;
}

function renderAbout() {
  main.innerHTML = `<div class="page"><section class="detail-hero"><a class="back-link" href="#/">← 返回首页</a><div class="eyebrow"><span class="line"></span>ABOUT ME</div><h1>关于我</h1></section>
    <div class="about-layout"><span class="about-label">周志儒 / VIDEO EDITOR</span><p class="about-text">我本科就读于浙江大学国际新闻专业，现为浙江大学戏剧与影视专业硕士在读。曾参与留学博主账号运营、林业融媒体中心内容制作及校园影像项目，持续探索不同平台上的内容叙事与影像表达。</p></div>
    <div class="about-details"><section><h2>教育经历</h2><p>浙江大学 · 国际新闻本科<br><small>2022.09 — 2026.06</small></p><p>浙江大学 · 戏剧与影视专业硕士在读<br><small>2026.06 — 至今</small></p></section><section><h2>相关实践</h2><p>海外留学博主账号运营<br><small>Mavis 在麻省理工 / Cindy 留学</small></p><p>浙江省林业融媒体中心<br><small>新闻与新媒体运营实习</small></p><p>上海梅维若有所思教育科技有限公司<br><small>产品运营实习</small></p></section></div>
    <section class="info-strip"><div><div class="info-label">工作方向</div><p>视频创作与剪辑<br>内容策划与运营<br>公众号文案与排版</p></div><div style="grid-column:span 2"><div class="info-label">联系我</div><a class="email-link" href="tel:+8619838878929">198 3887 8929</a><br><a class="email-link" href="mailto:19838878929@163.com">19838878929@163.com</a></div></section>${footer}</div>`;
  document.title = '关于周志儒｜视频作品集';
}

function render() {
  const route = location.hash.slice(1) || '/';
  const work = works.find(item => route === `/work/${item.slug}`);
  if (work) renderDetail(work);
  else if (route === '/about') renderAbout();
  else renderHome();
  const active = route === '/about' ? 'about' : route.startsWith('/work') ? 'work' : 'home';
  document.querySelectorAll('.floating-nav a').forEach(a => { a.classList.toggle('active', a.dataset.nav === active); if (a.dataset.nav === active) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  requestAnimationFrame(() => { if (route === '/work') document.querySelector('#work')?.scrollIntoView(); else window.scrollTo(0, 0); });
}

function clock() {
  document.querySelector('#local-time').textContent = new Intl.DateTimeFormat('zh-CN', {hour:'2-digit', minute:'2-digit', hour12:false, timeZone:'Asia/Shanghai'}).format(new Date());
}
window.addEventListener('hashchange', render);
clock(); setInterval(clock, 60000); render();
