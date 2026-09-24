'use strict';

/* =========================================================
   実績データ
   ここを書き換えると、カードとモーダルの両方に反映されます。
   ※ 現在の内容はすべてダミーです。実案件に差し替えてください。
   image：差し替え時は 'images/works/project-01.jpg' のようにパスを指定
   ========================================================= */
const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E2E8F2'/%3E%3Ctext x='400' y='300' fill='%235A6478' font-family='Montserrat,sans-serif' font-size='28' font-weight='700' letter-spacing='6' text-anchor='middle' dominant-baseline='middle'%3EIMAGE%3C/text%3E%3C/svg%3E";

const works = [
  {
    id: 'project-01',
    title: 'Project 01',
    category: '業務自動化',
    summary: '（ダミー）月次の売上集計をExcelの手作業からPythonスクリプトに置き換え、レポート作成を短縮した事例。',
    image: PLACEHOLDER_IMAGE,
    alt: 'Project 01 のサムネイル画像',
    role: '現状ヒアリング／集計スクリプト作成／手順書作成',
    challenge: '（ダミー）複数のExcelファイルを毎月手作業で集計しており、作業時間と転記ミスが課題になっていた。',
    solution: '（ダミー）pandasで読み込み・集計・出力までを1本のスクリプトにまとめ、実行手順を手順書として残した。',
    tools: ['Python', 'pandas', 'Excel', '業務自動化'],
    url: '#',
  },
  {
    id: 'project-02',
    title: 'Project 02',
    category: 'データクレンジング',
    summary: '（ダミー）表記ゆれや重複が混ざった顧客リストを、集計に使える状態まで整えた事例。',
    image: PLACEHOLDER_IMAGE,
    alt: 'Project 02 のサムネイル画像',
    role: 'データ確認／クレンジング処理の作成／修正ログの作成',
    challenge: '（ダミー）会社名や住所の表記が統一されておらず、重複件数も把握できていなかった。',
    solution: '（ダミー）正規化ルールを決めて処理をスクリプト化し、修正内容を一覧で確認できる形にした。',
    tools: ['Python', 'pandas', 'スプレッドシート'],
    url: '#',
  },
  {
    id: 'project-03',
    title: 'Project 03',
    category: '可視化・レポート',
    summary: '（ダミー）売上推移と商品別の構成をグラフにまとめ、会議でそのまま使えるレポートにした事例。',
    image: PLACEHOLDER_IMAGE,
    alt: 'Project 03 のサムネイル画像',
    role: '指標の整理／グラフ作成／解説文の作成',
    challenge: '（ダミー）数字の表はあるものの、どこに注目すべきかが伝わりにくかった。',
    solution: '（ダミー）判断に必要な指標を絞り、グラフごとに一言の解説を添えた構成にした。',
    tools: ['Python', 'pandas', '可視化', 'スプレッドシート'],
    url: '#',
  },
  {
    id: 'project-04',
    title: 'Project 04',
    category: 'Excel改善',
    summary: '（ダミー）複雑になった集計ファイルの関数とシート構成を見直し、引き継ぎやすくした事例。',
    image: PLACEHOLDER_IMAGE,
    alt: 'Project 04 のサムネイル画像',
    role: '現状ファイルの調査／シート構成の再設計／関数の整理',
    challenge: '（ダミー）作成者しか中身が分からず、行を追加すると数式が壊れることがあった。',
    solution: '（ダミー）入力・計算・出力のシートを分け、参照範囲をテーブル化して壊れにくくした。',
    tools: ['Excel', 'スプレッドシート'],
    url: '#',
  },
  {
    id: 'project-05',
    title: 'Project 05',
    category: '生成AI活用',
    summary: '（ダミー）定型の報告文づくりに生成AIを組み込み、下書き作成の時間を減らした事例。',
    image: PLACEHOLDER_IMAGE,
    alt: 'Project 05 のサムネイル画像',
    role: '業務の洗い出し／プロンプト設計／確認手順の作成',
    challenge: '（ダミー）毎週の報告文を一から書いており、担当者によって品質にばらつきがあった。',
    solution: '（ダミー）入力項目とプロンプトをテンプレート化し、人が確認する観点をチェックリストにした。',
    tools: ['生成AI', 'スプレッドシート', '業務自動化'],
    url: '#',
  },
  {
    id: 'project-06',
    title: 'Project 06',
    category: 'ドキュメント化',
    summary: '（ダミー）属人化していた集計業務を棚卸しし、誰でも回せる手順書にまとめた事例。',
    image: PLACEHOLDER_IMAGE,
    alt: 'Project 06 のサムネイル画像',
    role: 'ヒアリング／業務フロー図の作成／手順書の作成',
    challenge: '（ダミー）担当者の不在時に作業が止まり、手順も口頭でしか共有されていなかった。',
    solution: '（ダミー）作業を工程ごとに分解し、画面キャプチャ付きの手順書として整備した。',
    tools: ['業務フロー', 'ドキュメント', 'Excel'],
    url: '#',
  },
];

/* =========================================================
   Utility
   ========================================================= */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

// スクロール固定（スクロールバー分のズレを補正）
const lockScroll = () => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : '';
  document.body.style.overflow = 'hidden';
};

const unlockScroll = () => {
  document.body.style.paddingRight = '';
  document.body.style.overflow = '';
};

/* =========================================================
   Header：スクロールで背景切り替え
   ========================================================= */
const initHeader = () => {
  const header = document.getElementById('header');
  if (!header) return;

  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
};

/* =========================================================
   Hamburger Menu
   ========================================================= */
const initNav = () => {
  const header = document.getElementById('header');
  const button = document.getElementById('hamburger');
  const nav = document.getElementById('global-nav');
  if (!header || !button || !nav) return;

  const spQuery = window.matchMedia('(max-width: 768px)');

  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    nav.classList.toggle('is-open', open);
    header.classList.toggle('is-menu-open', open);
    open ? lockScroll() : unlockScroll();
  };

  const isOpen = () => button.getAttribute('aria-expanded') === 'true';

  button.addEventListener('click', () => setOpen(!isOpen()));

  // リンククリックで閉じる
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (isOpen()) setOpen(false);
    });
  });

  // Escキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      button.focus();
    }
  });

  // PC幅に戻ったら状態をリセット
  spQuery.addEventListener('change', (e) => {
    if (!e.matches && isOpen()) setOpen(false);
  });
};

/* =========================================================
   Works：カード生成
   ========================================================= */
const renderWorks = () => {
  const list = document.getElementById('works-list');
  if (!list) return;

  list.innerHTML = works
    .map((work, index) => {
      const tags = work.tools.map((tool) => `<li class="tag">${escapeHtml(tool)}</li>`).join('');
      return `
        <li class="works__item js-fade" style="--delay: ${(index % 3) * 0.1}s">
          <article class="work-card">
            <div class="work-card__thumb">
              <img src="${escapeHtml(work.image)}" alt="${escapeHtml(work.alt)}" width="800" height="500" loading="lazy">
            </div>
            <div class="work-card__body">
              <p class="work-card__category">${escapeHtml(work.category)}</p>
              <h3 class="work-card__title">
                <button type="button" class="work-card__button" data-work-id="${escapeHtml(work.id)}"
                  aria-haspopup="dialog" aria-expanded="false" aria-controls="work-modal">${escapeHtml(work.title)}</button>
              </h3>
              <p class="work-card__summary">${escapeHtml(work.summary)}</p>
              <ul class="tag-list" aria-label="使用ツール・スキル">${tags}</ul>
              <span class="work-card__more" aria-hidden="true">
                VIEW MORE
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </span>
            </div>
          </article>
        </li>`;
    })
    .join('');
};

/* =========================================================
   Works：モーダル
   ========================================================= */
const initModal = () => {
  const modal = document.getElementById('work-modal');
  const list = document.getElementById('works-list');
  if (!modal || !list) return;

  const dialog = modal.querySelector('.modal__dialog');
  const el = {
    image: document.getElementById('modal-image'),
    category: document.getElementById('modal-category'),
    title: document.getElementById('modal-title'),
    role: document.getElementById('modal-role'),
    challenge: document.getElementById('modal-challenge'),
    solution: document.getElementById('modal-solution'),
    tools: document.getElementById('modal-tools'),
    link: document.getElementById('modal-link'),
  };

  let lastTrigger = null;

  const fill = (work) => {
    el.image.src = work.image;
    el.image.alt = work.alt;
    el.category.textContent = work.category;
    el.title.textContent = work.title;
    el.role.textContent = work.role;
    el.challenge.textContent = work.challenge;
    el.solution.textContent = work.solution;
    el.tools.replaceChildren(
      ...work.tools.map((tool) => {
        const li = document.createElement('li');
        li.className = 'tag';
        li.textContent = tool;
        return li;
      })
    );
    el.link.href = work.url || '#';
    el.link.hidden = !work.url;
  };

  const open = (work, trigger) => {
    fill(work);
    lastTrigger = trigger;
    trigger.setAttribute('aria-expanded', 'true');
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.modal__content').scrollTop = 0;
    lockScroll();
    modal.querySelector('.modal__close').focus();
  };

  const close = () => {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    unlockScroll();
    if (lastTrigger) {
      lastTrigger.setAttribute('aria-expanded', 'false');
      lastTrigger.focus();
      lastTrigger = null;
    }
  };

  // カードクリック（イベント委譲）
  list.addEventListener('click', (e) => {
    const trigger = e.target.closest('.work-card__button');
    if (!trigger) return;
    const work = works.find((w) => w.id === trigger.dataset.workId);
    if (work) open(work, trigger);
  });

  // 背景・閉じるボタンで閉じる
  modal.querySelectorAll('[data-modal-close]').forEach((node) => {
    node.addEventListener('click', close);
  });

  // Escで閉じる／Tabでフォーカスをモーダル内に閉じ込める
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      close();
      return;
    }

    if (e.key === 'Tab') {
      const focusables = [...dialog.querySelectorAll(FOCUSABLE_SELECTOR)].filter((node) => !node.hidden);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
};

/* =========================================================
   FAQ：アコーディオン（開くのは常に1つだけ）
   ========================================================= */
const initFaq = () => {
  const items = document.querySelectorAll('.faq-item');

  const setOpen = (item, open) => {
    item.classList.toggle('is-open', open);
    item.querySelector('.faq-item__button').setAttribute('aria-expanded', String(open));
  };

  items.forEach((item) => {
    const button = item.querySelector('.faq-item__button');
    button.addEventListener('click', () => {
      const wasOpen = button.getAttribute('aria-expanded') === 'true';
      items.forEach((other) => setOpen(other, false));
      if (!wasOpen) setOpen(item, true);
    });
  });
};

/* =========================================================
   Page Top
   ========================================================= */
const initPageTop = () => {
  const button = document.getElementById('page-top');
  if (!button) return;

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    document.getElementById('header-logo')?.focus({ preventScroll: true });
  });
};

/* =========================================================
   Scroll Fade-in（IntersectionObserver）
   ========================================================= */
const initFadeIn = () => {
  const targets = document.querySelectorAll('.js-fade');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );

  targets.forEach((target) => observer.observe(target));
};

/* =========================================================
   Init
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderWorks();
  initHeader();
  initNav();
  initModal();
  initFaq();
  initPageTop();
  initFadeIn();
});
