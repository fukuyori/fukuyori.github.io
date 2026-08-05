const apps = [
  {
    name: "wtmux", symbol: ">_", version: "3.2.2", language: "Rust",
    platforms: ["Windows", "macOS", "Linux"], filters: ["cross", "terminal"], color: "#c9ff45",
    ja: "tmuxの操作感を、Windows・macOS・Linuxへ。ペイン、タブ、コピー、検索をひとつの端末で。",
    en: "A tmux-like terminal multiplexer for Windows, macOS, and Linux with panes, tabs, copy mode, and search."
  },
  {
    name: "Gforth for Windows", repo: "gforth_for_windows", symbol: "F>", version: "0.7.9_20260708+fukuyori.3.1", language: "Forth",
    platforms: ["Windows"], filters: ["windows", "terminal"], color: "#c9ff45",
    ja: "MSYS2やMinGWのランタイムを必要とせず、Windows上でネイティブに動作するGforth。",
    en: "A native Windows build of Gforth with no MSYS2 or MinGW runtime requirement."
  },
  {
    name: "rakukan", symbol: "あ", version: "0.10.2", language: "Rust",
    platforms: ["Windows"], filters: ["windows", "ai"], color: "#cbb7ff",
    ja: "小型ローカルLLMと辞書を組み合わせた、実験的なWindows向け日本語IME。",
    en: "An experimental Japanese IME for Windows combining a small local LLM with dictionary conversion."
  },
  {
    name: "tfx", symbol: "//", version: "0.9.10", language: "Swift",
    platforms: ["macOS"], filters: ["macos"], color: "#91c8ff",
    ja: "ターミナルに着想を得た、キーボード中心のmacOSファイルマネージャー。",
    en: "A keyboard-first macOS file manager with a terminal-inspired interface and workflow."
  },
  {
    name: "tfx-for-windows", symbol: "C:\\", version: "0.9.15", language: "C#",
    platforms: ["Windows"], filters: ["windows"], color: "#91c8ff",
    ja: "分割ペイン、プレビュー、内蔵端末を備えたWindows向けtfx。",
    en: "The Windows edition of tfx, with split panes, rich previews, and a built-in terminal."
  },
  {
    name: "tfx-for-linux", symbol: "~/", version: "0.8.3", language: "C++ / Qt",
    platforms: ["Linux"], filters: ["linux"], color: "#91c8ff",
    ja: "ドッキング可能なペイン、プレビュー、内蔵端末を備えたLinux向けtfx。",
    en: "The Linux edition of tfx, with dockable panes, previews, and an integrated terminal."
  },
  {
    name: "Spindle", symbol: "Aa", version: "0.7.3", language: "C++ / Qt",
    platforms: ["Windows", "macOS", "Linux"], filters: ["cross", "reading", "ai"], color: "#ff9c68",
    ja: "縦書き・固定レイアウト・ローカルAI翻訳に対応するネイティブEPUBリーダー。",
    en: "A native EPUB reader with vertical writing, fixed-layout support, and local AI translation."
  },
  {
    name: "Mycel", symbol: "⌘", version: "0.9.4", language: "C++ / Qt",
    platforms: ["Windows"], filters: ["windows"], color: "#ffda72",
    ja: "既存のフォルダとファイルをそのままノードとして扱うマインドマップツールです。独自形式への変換が不要なため、他のアプリケーションとの併用も容易です。将来的には、ファイルと処理をつなぐパイプライン用途への拡張も検討しています。",
    en: "A mind-mapping tool that treats existing folders and files as nodes without converting them to a proprietary format, making it easy to use alongside other applications. Future plans include exploring its use as a pipeline that connects files and processes."
  },
  {
    name: "mdv", symbol: "#", version: "0.5.1", language: "C++ / Qt",
    platforms: ["Windows", "macOS"], filters: ["cross", "reading"], color: "#a7e8cf",
    ja: "書く画面と読む画面を軽快に行き来できる、シンプルなMarkdownビューアー／エディター。",
    en: "A focused Markdown viewer and editor for moving fluidly between writing and reading."
  },
  {
    name: "BatchLock", symbol: "◆", version: "2.1.0", language: "C# / WPF",
    platforms: ["Windows"], filters: ["windows"], color: "#ff9c68",
    ja: "Office・PDF・ZIPファイルをまとめて暗号化／解除する、ローカル完結型ツール。",
    en: "A local-only utility for encrypting and decrypting Office, PDF, and ZIP files in batches."
  },
  {
    name: "EpubFabric", symbol: "▤", version: "0.2.3", language: "C#",
    platforms: ["Windows"], filters: ["windows", "reading", "ai"], color: "#f8b8d0",
    ja: "PDFを、検索・選択・読み上げ可能なEPUB 3へ変換する制作環境。",
    en: "A production tool that turns PDFs into searchable, selectable, and accessible EPUB 3 books."
  },
  {
    name: "Tomatone", symbol: "25", version: "0.1.1", language: "Go",
    platforms: ["Windows", "macOS", "Linux"], filters: ["cross", "terminal"], color: "#ff826f",
    ja: "YouTubeやインターネットラジオの環境音と作業する、CUIポモドーロタイマー。",
    en: "A CUI Pomodoro timer paired with ambience from YouTube and internet radio."
  },
  {
    name: "SideBox", symbol: "☀", version: "0.1.3", preRelease: true, language: "Go / Win32",
    platforms: ["Windows"], filters: ["windows"], color: "#ffda72",
    ja: "時計と気象庁の天気予報を静かに置ける、軽量デスクトップウィジェット。",
    en: "A lightweight desktop widget for a digital clock and Japan Meteorological Agency forecasts."
  },
  {
    name: "VirtualTouchpadEngine", symbol: "↗", version: "0.2.6", preRelease: true, language: "Rust",
    platforms: ["Windows"], filters: ["windows"], color: "#a7e8cf",
    ja: "タッチ対応サブモニターを、メイン画面用の仮想タッチパッドへ変える常駐ツール。",
    en: "A resident utility that turns a touch-enabled secondary display into a touchpad for the main screen."
  },
  {
    name: "AudioLens", symbol: "≈", version: "0.1.7", preRelease: true, language: "C++ / Qt",
    platforms: ["Windows"], filters: ["windows"], color: "#cbb7ff",
    ja: "会話・講義・映画などに合わせてPC音声を聞き取りやすく整えるオーディオ補助アプリ。",
    en: "An audio accessibility tool that makes PC sound easier to hear with purpose-built presets."
  }
];

const lang = document.documentElement.lang === "en" ? "en" : "ja";
const grid = document.querySelector("[data-app-grid]");
const count = document.querySelector("[data-catalog-count]");

function renderApps() {
  if (!grid) return;
  grid.innerHTML = apps.map((app) => {
    const meta = [...app.platforms, app.language]
      .map((item) => `<span>${item}</span>`).join("");
    const filterList = ["all", ...app.filters].join(" ");
    const version = app.preRelease ? "Pre-release" : app.version ? `v${app.version}` : "GitHub";
    const versionClass = app.preRelease ? "app-version pre-release" : "app-version";
    const repo = app.repo || app.name;
    const label = lang === "ja" ? `${app.name}のGitHubリポジトリを開く` : `Open the ${app.name} GitHub repository`;

    return `
      <a class="app-card reveal" href="https://github.com/fukuyori/${repo}" target="_blank" rel="noreferrer"
         data-filters="${filterList}" aria-label="${label}" style="--card-accent:${app.color}">
        <div class="app-card-header">
          <span class="app-symbol" aria-hidden="true">${app.symbol}</span>
          <span class="${versionClass}">${version} ↗</span>
        </div>
        <h3>${app.name}</h3>
        <p>${app[lang]}</p>
        <div class="app-meta">${meta}</div>
      </a>`;
  }).join("");
  updateCount(apps.length);
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
    document.querySelectorAll(".app-card").forEach((card) => {
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
observeReveals();
