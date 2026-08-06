const apps = [
  {
    name: "wtmux", symbol: ">_", version: "3.2.2", updated: "2026-08-06", language: "Rust",
    platforms: ["Windows", "macOS", "Linux"], filters: ["cross", "terminal"], color: "#c9ff45",
    ja: "tmuxの操作感を、Windows・macOS・Linuxへ。ペイン、タブ、コピー、検索をひとつの端末で。",
    en: "A tmux-like terminal multiplexer for Windows, macOS, and Linux with panes, tabs, copy mode, and search."
  },
  {
    name: "Gforth for Windows", repo: "gforth_for_windows", symbol: "F>", version: "0.7.9_20260708+fukuyori.3.1", updated: "2026-08-01", language: "Forth",
    platforms: ["Windows"], filters: ["windows", "terminal"], color: "#c9ff45",
    ja: "MSYS2やMinGWのランタイムを必要とせず、Windows上でネイティブに動作するGforth。",
    en: "A native Windows build of Gforth with no MSYS2 or MinGW runtime requirement."
  },
  {
    name: "rakukan", symbol: "あ", version: "0.10.2", updated: "2026-08-04", language: "Rust",
    platforms: ["Windows"], filters: ["windows", "ai"], color: "#cbb7ff",
    ja: "小型ローカルLLMと辞書を組み合わせた、実験的なWindows向け日本語IME。",
    en: "An experimental Japanese IME for Windows combining a small local LLM with dictionary conversion."
  },
  {
    name: "tfx", symbol: "//", version: "0.9.10", updated: "2026-07-26", language: "Swift",
    platforms: ["macOS"], filters: ["macos"], color: "#91c8ff",
    ja: "ターミナルに着想を得た、キーボード中心のmacOSファイルマネージャー。",
    en: "A keyboard-first macOS file manager with a terminal-inspired interface and workflow."
  },
  {
    name: "tfx-for-windows", symbol: "C:\\", version: "0.9.16", updated: "2026-08-06", language: "C#",
    platforms: ["Windows"], filters: ["windows"], color: "#91c8ff",
    ja: "分割ペイン、プレビュー、内蔵端末を備えたWindows向けtfx。",
    en: "The Windows edition of tfx, with split panes, rich previews, and a built-in terminal."
  },
  {
    name: "tfx-for-linux", symbol: "~/", version: "0.8.3", updated: "2026-07-30", language: "C++ / Qt",
    platforms: ["Linux"], filters: ["linux"], color: "#91c8ff",
    ja: "ドッキング可能なペイン、プレビュー、内蔵端末を備えたLinux向けtfx。",
    en: "The Linux edition of tfx, with dockable panes, previews, and an integrated terminal."
  },
  {
    name: "Spindle", symbol: "Aa", version: "0.7.3", updated: "2026-07-29", language: "C++ / Qt",
    platforms: ["Windows", "macOS", "Linux"], filters: ["cross", "reading", "ai"], color: "#ff9c68",
    ja: "縦書き・固定レイアウト・ローカルAI翻訳に対応するネイティブEPUBリーダー。",
    en: "A native EPUB reader with vertical writing, fixed-layout support, and local AI translation."
  },
  {
    name: "mdv", symbol: "#", version: "0.5.3", updated: "2026-08-06", language: "C++ / Qt",
    platforms: ["Windows", "macOS"], filters: ["cross", "reading"], color: "#a7e8cf",
    ja: "書く画面と読む画面を軽快に行き来できる、シンプルなMarkdownビューアー／エディター。",
    en: "A focused Markdown viewer and editor for moving fluidly between writing and reading."
  },
  {
    name: "pdr", symbol: "PDF", version: "0.1.8", updated: "2026-07-23", language: "Rust / egui",
    platforms: ["Windows", "Linux"], filters: ["cross", "reading"], color: "#ff9c68",
    ja: "見開き、左右綴じ、目次、画像補正、適応解像度レンダリングに対応する軽快なPDFリーダー。",
    en: "A responsive PDF reader with spreads, left/right binding, outlines, image correction, and adaptive rendering."
  },
  {
    name: "EpubFabric", symbol: "▤", version: "0.2.3", updated: "2026-07-28", language: "C#",
    platforms: ["Windows"], filters: ["windows", "reading", "ai"], color: "#f8b8d0",
    ja: "PDFを、検索・選択・読み上げ可能なEPUB 3へ変換する制作環境。",
    en: "A production tool that turns PDFs into searchable, selectable, and accessible EPUB 3 books."
  },
  {
    name: "Mycel", symbol: "⌘", version: "0.9.4", updated: "2026-08-05", language: "C++ / Qt",
    platforms: ["Windows"], filters: ["windows"], color: "#ffda72",
    ja: "既存のフォルダとファイルをそのままノードとして扱うマインドマップツールです。独自形式への変換が不要なため、他のアプリケーションとの併用も容易です。将来的には、ファイルと処理をつなぐパイプライン用途への拡張も検討しています。",
    en: "A mind-mapping tool that treats existing folders and files as nodes without converting them to a proprietary format, making it easy to use alongside other applications. Future plans include exploring its use as a pipeline that connects files and processes."
  },
  {
    name: "BatchLock", symbol: "◆", version: "2.1.0", updated: "2026-08-05", language: "C# / WPF",
    platforms: ["Windows"], filters: ["windows"], color: "#ff9c68",
    ja: "Office・PDF・ZIPファイルをまとめて暗号化／解除する、ローカル完結型ツール。",
    en: "A local-only utility for encrypting and decrypting Office, PDF, and ZIP files in batches."
  },
  {
    name: "Tomatone", symbol: "25", version: "0.1.1", updated: "2026-07-28", language: "Go",
    platforms: ["Windows", "macOS", "Linux"], filters: ["cross", "terminal"], color: "#ff826f",
    ja: "YouTubeやインターネットラジオの環境音と作業する、CUIポモドーロタイマー。",
    en: "A CUI Pomodoro timer paired with ambience from YouTube and internet radio."
  },
  {
    name: "SideBox", symbol: "☀", version: "0.1.5", updated: "2026-08-05", preRelease: true, language: "Go / Win32",
    platforms: ["Windows"], filters: ["windows"], color: "#ffda72",
    ja: "時計と気象庁の天気予報を静かに置ける、軽量デスクトップウィジェット。",
    en: "A lightweight desktop widget for a digital clock and Japan Meteorological Agency forecasts."
  },
  {
    name: "VirtualTouchpadEngine", symbol: "↗", version: "0.2.6", updated: "2026-08-04", preRelease: true, language: "Rust",
    platforms: ["Windows"], filters: ["windows"], color: "#a7e8cf",
    ja: "タッチ対応サブモニターを、メイン画面用の仮想タッチパッドへ変える常駐ツール。",
    en: "A resident utility that turns a touch-enabled secondary display into a touchpad for the main screen."
  },
  {
    name: "AudioLens", symbol: "≈", version: "0.2.2", updated: "2026-08-06", language: "C++ / Qt",
    platforms: ["Windows"], filters: ["windows"], color: "#cbb7ff",
    ja: "会話・講義・映画などに合わせてPC音声を聞き取りやすく整えるオーディオ補助アプリ。",
    en: "An audio accessibility tool that makes PC sound easier to hear with purpose-built presets."
  },
  {
    name: "Gaze", repo: "gaze", symbol: "◉◉", version: "0.1.5", updated: "2026-08-02", language: "Rust / egui",
    platforms: ["Windows"], filters: ["windows"], color: "#f8b8d0",
    ja: "マウスカーソルを目で追い、瞬きや休息もする、xeyes風のWindowsデスクトップアプリ。",
    en: "An expressive xeyes-style Windows desktop app that follows the cursor, blinks, rests, and sleeps."
  },
  {
    name: "j-cmd", symbol: "j>", version: "2.2.1", updated: "2026-07-31", language: "Rust",
    platforms: ["Windows", "macOS", "Linux"], filters: ["cross", "terminal"], color: "#c9ff45",
    ja: "パスではなくキーワードで移動する、Windows・macOS・Linux向けの高速ディレクトリジャンプコマンド。",
    en: "A fast directory-jump command for Windows, macOS, and Linux: jump by keyword, not by path."
  },
  {
    name: "Agent-Resume", symbol: "↻", version: "0.3.0", updated: "2026-07-24", language: "Go",
    platforms: ["Windows", "macOS", "Linux"], filters: ["cross", "terminal", "ai"], color: "#cbb7ff",
    ja: "現在のディレクトリに関連する複数のCLIコーディングエージェントのセッションを探し、選んで再開するツール。",
    en: "A CLI for finding and resuming sessions from multiple coding agents associated with the current directory."
  }
];

const browserExtensions = [
  {
    name: "YoutubeGrid", symbol: "▶", updated: "2026-08-06", language: "JavaScript",
    platforms: ["Firefox", "Chrome"], color: "#ff826f",
    ja: "YouTubeのグリッド列数や検索結果の表示を調整し、指定キーワード、Shorts、ゲームルームを非表示にする機能拡張。",
    en: "A browser extension for customizing YouTube grids and search results, with filters for keywords, Shorts, and Game Room sections."
  },
  {
    name: "X-MaskWord", symbol: "X", updated: "2026-08-06", language: "JavaScript",
    platforms: ["Firefox"], color: "#91c8ff",
    ja: "指定した言葉や反応数を含むXの投稿・メッセージを非表示またはハイライトするFirefox機能拡張。",
    en: "A Firefox extension that hides or highlights X posts and messages based on configured words or engagement counts."
  }
];

const lang = document.documentElement.lang === "en" ? "en" : "ja";
const grid = document.querySelector("[data-app-grid]");
const extensionGrid = document.querySelector("[data-extension-grid]");
const count = document.querySelector("[data-catalog-count]");

function cardMarkup(app, includeFilters = false) {
  const meta = [...app.platforms, app.language]
    .map((item) => `<span>${item}</span>`).join("");
  const filterList = includeFilters ? ` data-filters="${["all", ...app.filters].join(" ")}"` : "";
  const version = app.preRelease ? "Pre-release" : app.version ? `v${app.version}` : "GitHub";
  const versionClass = app.preRelease ? "app-version pre-release" : "app-version";
  const updatedLabel = lang === "ja" ? `最終更新日 ${app.updated}` : `Last updated ${app.updated}`;
  const repo = app.repo || app.name;
  const label = lang === "ja" ? `${app.name}のGitHubリポジトリを開く` : `Open the ${app.name} GitHub repository`;

  return `
    <a class="app-card reveal" href="https://github.com/fukuyori/${repo}" target="_blank" rel="noreferrer"${filterList}
       aria-label="${label}" style="--card-accent:${app.color}">
      <div class="app-card-header">
        <span class="app-symbol" aria-hidden="true">${app.symbol}</span>
        <span class="app-release">
          <span class="${versionClass}">${version} ↗</span>
          <time class="app-updated" datetime="${app.updated}" title="${updatedLabel}">${app.updated}</time>
        </span>
      </div>
      <h3>${app.name}</h3>
      <p>${app[lang]}</p>
      <div class="app-meta">${meta}</div>
    </a>`;
}

function renderApps() {
  if (!grid) return;
  grid.innerHTML = apps.map((app) => cardMarkup(app, true)).join("");
  updateCount(apps.length);
  observeReveals();
}

function renderBrowserExtensions() {
  if (!extensionGrid) return;
  extensionGrid.innerHTML = browserExtensions.map((extension) => cardMarkup(extension)).join("");
  observeReveals();
}

function updateCount(value) {
  if (!count) return;
  count.textContent = lang === "ja" ? `${value} APP${value === 1 ? "" : "S"} 表示中` : `SHOWING ${value} APP${value === 1 ? "" : "S"}`;
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const active = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    let visible = 0;
    grid.querySelectorAll(".app-card").forEach((card) => {
      const show = active === "all" || card.dataset.filters.split(" ").includes(active);
      card.hidden = !show;
      if (show) visible += 1;
    });
    updateCount(visible);
  });
});

const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-site-nav]");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  elements.forEach((element) => observer.observe(element));
}

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

renderApps();
renderBrowserExtensions();
observeReveals();
