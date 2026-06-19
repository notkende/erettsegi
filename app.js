// literaErettsegi - Alkalmazás Logika

// -------------------------------------------------------------
// 1. GLOBÁLIS ÁLLAPOT (STATE)
// -------------------------------------------------------------
const state = {
  currentSubject: 'literature', // 'literature' | 'grammar' | 'history'
  topicsMetadata: {
    literature: [],
    grammar: [],
    history: []
  },
  loadedTopicsData: {
    literature: {},
    grammar: {},
    history: {}
  },
  currentTopicId: null,   // Selected topic ID (1-20)
  currentCardIndex: 0,    // Flashcard pointer
  quizState: {
    active: false,
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false
  },
  theme: 'dark',          // 'dark' | 'light'
  pomoTimer: {
    timerId: null,
    duration: 1500,       // 25 minutes default (seconds)
    timeRemaining: 1500,
    running: false,
    currentMode: 'focus'  // 'focus' | 'break'
  },
  
  // Belépés és Szinkron
  currentUser: null,
  supabaseClient: null,
  
  // Gyorstanulás
  isBionicActive: false,
  originalReadingHtml: {},
  speedReaderState: {
    playing: false,
    timer: null,
    words: [],
    currentIndex: 0
  },
  
  // Gamifikáció és Haladás
  gamification: {
    xp: 0,
    level: 1,
    streak: 0,
    lastActivityDate: null,
    unlockedBadges: [],
    lastStudiedTimes: {} // topicKey -> timestamp (pl. "literature_1" -> timestamp)
  }
};

// Alapértelmezett Supabase konfiguráció
const DEFAULT_SUPABASE_URL = 'https://buioukaqazxdzmxleool.supabase.co';
const DEFAULT_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aW91a2FxYXp4ZHpteGxlb29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODMyMDksImV4cCI6MjA5NzQ1OTIwOX0.i9eLEeCtZMDlP9LW_1NxPO5l8VIhzzVW5Z3S81yIs6M';

// -------------------------------------------------------------
// 2. DOM ELEMEK REFERENCIÁI
// -------------------------------------------------------------
const DOM = {
  // Nézetek
  viewDashboard: document.getElementById('view-dashboard'),
  viewWorkspace: document.getElementById('view-topic-workspace'),
  
  // Főoldal
  topicsGrid: document.getElementById('topics-grid'),
  searchInput: document.getElementById('search-input'),
  categoryFilters: document.getElementById('category-filters'),
  subjectSelector: document.getElementById('subject-selector'),
  subjectButtons: document.querySelectorAll('.subject-btn'),
  sortSelect: document.getElementById('sort-select'),
  logo: document.getElementById('btn-logo'),
  
  // Haladás Statisztika
  statNotStarted: document.getElementById('stat-not-started'),
  statInProgress: document.getElementById('stat-in-progress'),
  statMastered: document.getElementById('stat-mastered'),
  progressBarGlobal: document.getElementById('progress-bar-global-val'),
  welcomeTitle: document.getElementById('welcome-title'),
  
  // Workspace fejléc
  btnBack: document.getElementById('btn-back'),
  topicBadgeCategory: document.getElementById('topic-badge-category'),
  topicBadgeEra: document.getElementById('topic-badge-era'),
  topicBadgeTime: document.getElementById('topic-badge-time'),
  workspaceTopicTitle: document.getElementById('workspace-topic-title'),
  workspaceTopicAuthor: document.getElementById('workspace-topic-author'),
  statusSelect: document.getElementById('status-select'),
  btnPrint: document.getElementById('btn-print'),
  
  // Tabok & Panelek
  tabButtons: document.querySelectorAll('.tab-btn'),
  tabPanes: document.querySelectorAll('.tab-pane'),
  tabFlashcardsBtn: document.getElementById('tab-flashcards-btn'),
  tabQuizBtn: document.getElementById('tab-quiz-btn'),
  
  // Olvasó fül
  outlineList: document.getElementById('outline-list'),
  contentIntro: document.getElementById('content-intro'),
  contentBiography: document.getElementById('content-biography'),
  tocBioLink: document.getElementById('toc-bio-link'),
  secBiography: document.getElementById('sec-biography'),
  contentWorks: document.getElementById('content-works'),
  contentStyle: document.getElementById('content-style'),
  contentConclusion: document.getElementById('content-conclusion'),
  tocLinks: document.querySelectorAll('.toc-link'),
  readingArticle: document.getElementById('reading-article-content'),
  
  // Flashcards fül
  flashcard: document.getElementById('active-flashcard'),
  flashcardQuestion: document.getElementById('flashcard-question'),
  flashcardAnswer: document.getElementById('flashcard-answer'),
  btnPrevCard: document.getElementById('btn-prev-card'),
  btnNextCard: document.getElementById('btn-next-card'),
  cardCounter: document.getElementById('card-counter'),
  
  // Kvíz fül
  quizStartView: document.getElementById('quiz-start-view'),
  quizQuestionView: document.getElementById('quiz-question-view'),
  quizResultView: document.getElementById('quiz-result-view'),
  btnStartQuiz: document.getElementById('btn-start-quiz'),
  btnRestartQuiz: document.getElementById('btn-restart-quiz'),
  btnQuizBackToReading: document.getElementById('btn-quiz-back-to-reading'),
  quizProgressFill: document.getElementById('quiz-progress-fill'),
  quizQuestionNumber: document.getElementById('quiz-question-number'),
  quizScoreLive: document.getElementById('quiz-score-live'),
  quizQuestionText: document.getElementById('quiz-question-text'),
  quizOptionsList: document.getElementById('quiz-options-list'),
  quizFeedbackBox: document.getElementById('quiz-feedback-box'),
  quizFeedbackTitle: document.getElementById('quiz-feedback-title'),
  quizFeedbackExplanation: document.getElementById('quiz-feedback-explanation'),
  btnNextQuestion: document.getElementById('btn-next-question'),
  quizResultScore: document.getElementById('quiz-result-score'),
  quizResultText: document.getElementById('quiz-result-text'),
  
  // Jegyzetek fül
  notesTextarea: document.getElementById('notes-textarea'),
  notesSaveStatus: document.getElementById('notes-save-status'),
  btnClearNotes: document.getElementById('btn-clear-notes'),
  
  // Pomodoro
  pomoWidget: document.getElementById('pomodoro'),
  btnPomoToggle: document.getElementById('pomo-toggle'),
  pomoDropdown: document.getElementById('pomo-dropdown'),
  btnClosePomo: document.getElementById('close-pomo'),
  pomoTimerDisplay: document.getElementById('pomo-timer-display'),
  pomoTimerHuge: document.getElementById('pomo-timer-huge'),
  btnPomoFocus: document.getElementById('btn-pomo-focus'),
  btnPomoBreak: document.getElementById('btn-pomo-break'),
  btnPomoStart: document.getElementById('pomo-start'),
  btnPomoPause: document.getElementById('pomo-pause'),
  btnPomoReset: document.getElementById('pomo-reset'),
  
  // Téma
  btnThemeToggle: document.getElementById('theme-toggle'),
  sunIcon: document.querySelector('.sun-icon'),
  moonIcon: document.querySelector('.moon-icon'),
  
  // TTS Vezérlők
  ttsPlayPause: document.getElementById('tts-play-pause'),
  ttsStop: document.getElementById('tts-stop'),
  ttsStatus: document.getElementById('tts-status'),
  ttsTrackTitle: document.getElementById('tts-track-title'),
  ttsVoiceSelect: document.getElementById('tts-voice-select'),
  ttsSpeedSelect: document.getElementById('tts-speed-select'),
  ttsWarning: document.getElementById('tts-warning'),

  // Bejelentkező Felület
  viewLogin: document.getElementById('view-login'),
  loginForm: document.getElementById('login-form'),
  loginName: document.getElementById('login-name'),
  loginEmail: document.getElementById('login-email'),
  loginPassword: document.getElementById('login-password'),
  btnLoginSubmit: document.getElementById('btn-login-submit'),
  linkSwitchSignup: document.getElementById('link-switch-signup'),
  groupName: document.getElementById('group-name'),
  loginSwitchText: document.getElementById('login-switch-text'),

  // Profil Widget és dropdown
  profileWidget: document.getElementById('profile-widget'),
  btnProfileToggle: document.getElementById('btn-profile-toggle'),
  profileDropdown: document.getElementById('profile-dropdown'),
  profileUserName: document.getElementById('profile-user-name'),
  profileUserEmail: document.getElementById('profile-user-email'),
  supabaseUrl: document.getElementById('supabase-url'),
  supabaseKey: document.getElementById('supabase-key'),
  btnSaveSync: document.getElementById('btn-save-sync'),
  syncStatus: document.getElementById('sync-status'),
  btnLogout: document.getElementById('btn-logout'),
  userDisplayName: document.getElementById('user-display-name'),

  // Gyorstolvasó Vezérlők
  btnToggleBionic: document.getElementById('btn-toggle-bionic'),
  btnSpeedReader: document.getElementById('btn-speed-reader'),
  speedReaderOverlay: document.getElementById('speed-reader-overlay'),
  btnCloseSpeedReader: document.getElementById('btn-close-speed-reader'),
  speedReaderWord: document.getElementById('speed-reader-word'),
  speedReaderProgress: document.getElementById('speed-reader-progress'),
  btnSpeedReaderPlay: document.getElementById('btn-speed-reader-play'),
  btnSpeedReaderPause: document.getElementById('btn-speed-reader-pause'),
  btnSpeedReaderReset: document.getElementById('btn-speed-reader-reset'),
  speedReaderWpm: document.getElementById('speed-reader-wpm'),

  // Gyorstanuló és Gamifikációs hivatkozások
  gamificationHeaderWidget: document.getElementById('gamification-header-widget'),
  headerStreakVal: document.getElementById('header-streak-val'),
  headerXpVal: document.getElementById('header-xp-val'),
  headerLevelVal: document.getElementById('header-level-val'),
  badgeReviewDue: document.getElementById('badge-review-due'),
  btnMarkReviewed: document.getElementById('btn-mark-reviewed'),
  btnToggleMindmap: document.getElementById('btn-toggle-mindmap'),
  mindmapPanel: document.getElementById('mindmap-panel'),
  btnCloseMindmap: document.getElementById('btn-close-mindmap'),
  mindmapSvg: document.getElementById('mindmap-svg'),
  coachBubble: document.getElementById('coach-bubble'),
  badgesGrid: document.getElementById('badges-grid'),
  badgesCountText: document.getElementById('badges-count-text'),
  leaderboardList: document.getElementById('leaderboard-list')
};

// Kategóriák definíciója tantárgyanként
const categories = {
  literature: [
    { id: 'all', label: 'Mind' },
    { id: 'Líra', label: 'Líra' },
    { id: 'Epika', label: 'Epika' },
    { id: 'Dráma', label: 'Dráma' },
    { id: 'Irodalomelmélet', label: 'Elmélet' }
  ],
  grammar: [
    { id: 'all', label: 'Mind' },
    { id: 'Kommunikáció', label: 'Kommunikáció' },
    { id: 'Nyelvtörténet', label: 'Nyelvtörténet' },
    { id: 'Társadalom', label: 'Társadalom' },
    { id: 'Leíró nyelvtan', label: 'Leíró' },
    { id: 'Szövegtan', label: 'Szövegtan' },
    { id: 'Retorika', label: 'Retorika' },
    { id: 'Stilisztika', label: 'Stilisztika' },
    { id: 'Infó. társadalom', label: 'Infó. társ.' }
  ],
  history: [
    { id: 'all', label: 'Mind' },
    { id: 'Ókor', label: 'Ókor' },
    { id: 'Középkor', label: 'Középkor' },
    { id: 'Középkori Magyarország', label: 'Középkori Mo.' },
    { id: 'Újkor', label: 'Újkor' },
    { id: 'Újkori Magyarország', label: 'Újkori Mo.' },
    { id: 'Magyarország a 19. sz.', label: '19. sz. Mo.' },
    { id: '20. század', label: '20. sz. világ' },
    { id: 'Magyarország 1945 után', label: '1945 után Mo.' },
    { id: 'Állampolgári ism.', label: 'Állampolgári' }
  ]
};

// -------------------------------------------------------------
// 12. TEXT-TO-SPEECH (TTS) HANGOS FELOLVASÓ LOGIKA
// -------------------------------------------------------------
const ttsState = {
  synth: window.speechSynthesis,
  utterance: null,
  onlineAudio: null, // HTML5 Audio referencia az online módhoz
  isPlaying: false,
  isPaused: false,
  textChunks: [],
  currentChunkIndex: 0,
  voices: [],
  selectedVoice: null
};

// Magyar hangok és lista feltöltése
let voiceLoadRetries = 0;
function loadVoices() {
  if (!DOM.ttsVoiceSelect) return;
  DOM.ttsVoiceSelect.innerHTML = '';
  
  // 1. Első, ajánlott opcióként a Google Online felolvasót adjuk hozzá
  const googleOpt = document.createElement('option');
  googleOpt.value = "google-online";
  googleOpt.textContent = "Google Online (Ajánlott)";
  DOM.ttsVoiceSelect.appendChild(googleOpt);
  
  if (ttsState.synth) {
    ttsState.voices = ttsState.synth.getVoices();
    
    // Chrome/Edge aszinkron betöltés kezelése retrying-gal
    if (ttsState.voices.length === 0 && voiceLoadRetries < 10) {
      voiceLoadRetries++;
      setTimeout(loadVoices, 150);
      return;
    }
    
    // Szűrjük a magyar hangokat
    const huVoices = ttsState.voices.filter(v => v.lang.toLowerCase().includes('hu'));
    
    // Rendszerhangok hozzáadása a listához
    huVoices.forEach(v => {
      const option = document.createElement('option');
      option.value = v.name;
      option.textContent = `${v.name} (Offline)`;
      DOM.ttsVoiceSelect.appendChild(option);
    });
    
    if (huVoices.length > 0) {
      ttsState.selectedVoice = huVoices[0];
    }
  }
  
  // Mivel a Google Online elérhető hálózat esetén, a figyelmeztetést elrejtjük
  if (DOM.ttsWarning) {
    DOM.ttsWarning.style.display = 'none';
  }
}

// Inicializálás a böngésző voice change eseményére
if (ttsState.synth) {
  if (ttsState.synth.onvoiceschanged !== undefined) {
    ttsState.synth.onvoiceschanged = loadVoices;
  }
}
loadVoices();

// A felolvasandó tétel szövegének összefűzése
function getTopicTextToRead() {
  const meta = state.topicsMetadata[state.currentSubject].find(t => t.id === state.currentTopicId);
  const data = state.loadedTopicsData[state.currentSubject][state.currentTopicId];
  if (!data || !meta) return "";
  
  let text = `${meta.title}. `;
  
  const ignoreAuthors = ["Szerző", "Kommunikáció", "Nyelvtörténet", "Retorika", "Stilisztika", "Szövegtan", "Információs társadalom", "Leíró nyelvtan", "Nyelv és társadalom", "Történelem"];
  if (meta.author && !ignoreAuthors.includes(meta.author)) {
    text += `Írta: ${meta.author}. `;
  }
  
  text += "Vázlatpontok. ";
  if (data.outline) {
    text += data.outline.join(". ") + ". ";
  }
  
  const stripHtml = (htmlString) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || "";
  };
  
  if (data.introduction) {
    text += "Bevezetés. " + stripHtml(data.introduction) + " ";
  }
  
  if (data.biography && data.biography.trim() !== '') {
    text += "Történelmi és irodalmi háttér. " + stripHtml(data.biography) + " ";
  }
  
  if (data.keyWorks && data.keyWorks.length > 0) {
    text += "Részletes kidolgozás. ";
    data.keyWorks.forEach(work => {
      text += work.title + ". " + stripHtml(work.analysis) + " ";
    });
  }
  
  if (data.styleAndForm) {
    text += "Stílus és forma. " + stripHtml(data.styleAndForm) + " ";
  }
  
  if (data.conclusion) {
    text += "Összegzés és befejezés. " + stripHtml(data.conclusion) + " ";
  }
  
  return text;
}

// Mondatokra bontás és max karakterhossz szerinti darabolás a Google TTS-hez
function splitTextIntoSentenceChunks(text) {
  const regex = /([^.!?\n]+[.!?\n]\s*)/g;
  const matches = text.match(regex);
  if (!matches) return [text];
  return matches.map(m => m.trim()).filter(m => m.length > 0);
}

function splitTextForTTS(text, maxLength = 180) {
  const sentences = splitTextIntoSentenceChunks(text);
  const chunks = [];
  
  sentences.forEach(sentence => {
    if (sentence.length <= maxLength) {
      chunks.push(sentence);
    } else {
      const words = sentence.split(/\s+/);
      let currentChunk = '';
      words.forEach(word => {
        if ((currentChunk + ' ' + word).trim().length <= maxLength) {
          currentChunk = (currentChunk + ' ' + word).trim();
        } else {
          if (currentChunk) chunks.push(currentChunk);
          currentChunk = word;
        }
      });
      if (currentChunk) chunks.push(currentChunk);
    }
  });
  
  return chunks;
}

// Következő mondat lejátszása (Hibrid)
function playNextChunk() {
  if (!ttsState.isPlaying) return;
  
  if (ttsState.currentChunkIndex >= ttsState.textChunks.length) {
    stopSpeaking();
    return;
  }
  
  const chunkText = ttsState.textChunks[ttsState.currentChunkIndex];
  if (!chunkText || chunkText.trim() === '') {
    ttsState.currentChunkIndex++;
    playNextChunk();
    return;
  }
  
  speakChunk(chunkText);
}

// Lejátszás végrehajtó elosztó
function speakChunk(text) {
  const isOnline = DOM.ttsVoiceSelect && DOM.ttsVoiceSelect.value === "google-online";
  const speed = DOM.ttsSpeedSelect ? parseFloat(DOM.ttsSpeedSelect.value) || 1.0 : 1.0;
  
  if (isOnline) {
    // Esetleges futó offline beszéd leállítása
    if (ttsState.synth) ttsState.synth.cancel();
    
    // Leképezés Google TTS sebességre (0.3 - 1.0)
    let onlineSpeed = 1.0;
    if (speed < 1.0) onlineSpeed = 0.8;
    else if (speed > 1.2) onlineSpeed = 1.0;
    
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=hu&client=tw-ob&ttsspeed=${onlineSpeed}&q=${encodeURIComponent(text)}`;
    
    if (ttsState.onlineAudio) {
      ttsState.onlineAudio.pause();
      ttsState.onlineAudio = null;
    }
    
    ttsState.onlineAudio = new Audio(url);
    
    ttsState.onlineAudio.onended = () => {
      ttsState.currentChunkIndex++;
      playNextChunk();
    };
    
    ttsState.onlineAudio.onerror = (e) => {
      console.warn("Google TTS hiba, átváltás offline felolvasásra...", e);
      speakOfflineChunk(text);
    };
    
    ttsState.onlineAudio.play().catch(err => {
      console.warn("Google TTS lejátszási hiba, átváltás offline-ra...", err);
      speakOfflineChunk(text);
    });
    
  } else {
    // Esetleges futó online beszéd leállítása
    if (ttsState.onlineAudio) {
      ttsState.onlineAudio.pause();
      ttsState.onlineAudio = null;
    }
    
    speakOfflineChunk(text);
  }
  
  updateTTSVisuals();
}

// Offline felolvasó lejátszás
function speakOfflineChunk(text) {
  if (!ttsState.synth) {
    ttsState.currentChunkIndex++;
    playNextChunk();
    return;
  }
  
  ttsState.utterance = new SpeechSynthesisUtterance(text);
  ttsState.utterance.lang = 'hu-HU';
  
  // Választott hang beállítása
  let voiceSet = false;
  if (DOM.ttsVoiceSelect && DOM.ttsVoiceSelect.value && DOM.ttsVoiceSelect.value !== "google-online") {
    const selectedVoiceName = DOM.ttsVoiceSelect.value;
    const foundVoice = ttsState.voices.find(v => v.name === selectedVoiceName);
    if (foundVoice) {
      ttsState.utterance.voice = foundVoice;
      voiceSet = true;
    }
  }
  
  // Kényszerítsünk magyar hangot, ha nincs explicit választva vagy alapértelmezetten maradt
  if (!voiceSet) {
    const huVoice = ttsState.voices.find(v => v.lang.toLowerCase().includes('hu'));
    if (huVoice) {
      ttsState.utterance.voice = huVoice;
    }
  }
  
  // Választott sebesség beállítása
  if (DOM.ttsSpeedSelect) {
    ttsState.utterance.rate = parseFloat(DOM.ttsSpeedSelect.value) || 1.0;
  }
  
  ttsState.utterance.onend = () => {
    ttsState.currentChunkIndex++;
    playNextChunk();
  };
  
  ttsState.utterance.onerror = (e) => {
    console.warn("Offline TTS mondat lejátszási hiba:", e);
    ttsState.currentChunkIndex++;
    playNextChunk();
  };
  
  ttsState.synth.speak(ttsState.utterance);
}

// Indítás vagy Szünet/Folytatás kezelése
function togglePlayPause() {
  if (!ttsState.isPlaying) {
    // Teljesen új lejátszás indítása
    if (ttsState.synth) ttsState.synth.cancel();
    if (ttsState.onlineAudio) {
      ttsState.onlineAudio.pause();
      ttsState.onlineAudio = null;
    }
    
    const text = getTopicTextToRead();
    if (!text || text.trim() === '') return;
    
    ttsState.textChunks = splitTextForTTS(text);
    ttsState.currentChunkIndex = 0;
    ttsState.isPlaying = true;
    ttsState.isPaused = false;
    
    playNextChunk();
  } else if (ttsState.isPaused) {
    // Folytatás szünet után
    const isOnline = DOM.ttsVoiceSelect && DOM.ttsVoiceSelect.value === "google-online";
    if (isOnline) {
      if (ttsState.onlineAudio) ttsState.onlineAudio.play();
    } else {
      if (ttsState.synth) ttsState.synth.resume();
    }
    ttsState.isPaused = false;
    updateTTSVisuals();
  } else {
    // Szüneteltetés
    const isOnline = DOM.ttsVoiceSelect && DOM.ttsVoiceSelect.value === "google-online";
    if (isOnline) {
      if (ttsState.onlineAudio) ttsState.onlineAudio.pause();
    } else {
      if (ttsState.synth) ttsState.synth.pause();
    }
    ttsState.isPaused = true;
    updateTTSVisuals();
  }
}

// Teljes leállítás
function stopSpeaking() {
  if (ttsState.synth) ttsState.synth.cancel();
  if (ttsState.onlineAudio) {
    ttsState.onlineAudio.pause();
    ttsState.onlineAudio = null;
  }
  
  ttsState.isPlaying = false;
  ttsState.isPaused = false;
  ttsState.currentChunkIndex = 0;
  ttsState.textChunks = [];
  ttsState.utterance = null;
  
  updateTTSVisuals();
}

// Vizuális állapotok és gombok frissítése
function updateTTSVisuals() {
  if (!DOM.ttsPlayPause || !DOM.ttsStop || !DOM.ttsStatus || !DOM.ttsTrackTitle) return;
  
  const playIcon = DOM.ttsPlayPause.querySelector('.icon-play');
  const pauseIcon = DOM.ttsPlayPause.querySelector('.icon-pause');
  
  if (ttsState.isPlaying) {
    DOM.ttsStop.disabled = false;
    
    if (ttsState.isPaused) {
      if (playIcon) playIcon.style.display = 'block';
      if (pauseIcon) pauseIcon.style.display = 'none';
      DOM.ttsStatus.textContent = "Felfüggesztve";
      DOM.ttsStatus.style.color = "var(--status-in-progress)";
    } else {
      if (playIcon) playIcon.style.display = 'none';
      if (pauseIcon) pauseIcon.style.display = 'block';
      DOM.ttsStatus.textContent = "Felolvasás...";
      DOM.ttsStatus.style.color = "var(--system-blue)";
      
      // Megjelenítjük az aktuális tétel nevét a sávban
      const meta = state.topicsMetadata[state.currentSubject].find(t => t.id === state.currentTopicId);
      if (meta) {
        DOM.ttsTrackTitle.textContent = meta.title;
      }
    }
  } else {
    DOM.ttsStop.disabled = true;
    if (playIcon) playIcon.style.display = 'block';
    if (pauseIcon) pauseIcon.style.display = 'none';
    DOM.ttsStatus.textContent = "Felolvasó";
    DOM.ttsStatus.style.color = "var(--text-muted)";
    DOM.ttsTrackTitle.textContent = "Tétel lejátszása";
  }
}

// -------------------------------------------------------------
// 3. INICIALIZÁLÁS (STARTUP)
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Téma betöltése
  initTheme();
  
  // Betöltjük a metaadatokat
  if (window.literatureTopicsMetadata) {
    state.topicsMetadata.literature = window.literatureTopicsMetadata;
  }
  if (window.grammarTopicsMetadata) {
    state.topicsMetadata.grammar = window.grammarTopicsMetadata;
  }
  if (window.historyTopicsMetadata) {
    state.topicsMetadata.history = window.historyTopicsMetadata;
  }
  
  // Supabase inicializálása
  initSupabase();
  
  // Bejelentkezés ellenőrzése
  checkUserLogin();
  
  // Eseménykezelők feliratkozása
  setupEventListeners();
  initPomodoro();
});

function renderCategoryFilters() {
  const list = categories[state.currentSubject];
  DOM.categoryFilters.innerHTML = '';
  list.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.className = 'pill' + (idx === 0 ? ' active' : '');
    btn.dataset.category = cat.id;
    btn.textContent = cat.label;
    DOM.categoryFilters.appendChild(btn);
  });
}

// Napszaknak megfelelő üdvözlő szöveg beállítása
function setWelcomeMessage() {
  const hr = new Date().getHours();
  let greeting = "Szia!";
  if (hr >= 5 && hr < 12) greeting = "Jó reggelt! Sikeres felkészülést!";
  else if (hr >= 12 && hr < 18) greeting = "Szia! Kellemes tanulást!";
  else greeting = "Jó estét! Jó felkészülést a holnapi napra!";
  
  DOM.welcomeTitle.textContent = greeting;
}

// -------------------------------------------------------------
// 4. KÉPERNYŐ NAVIGÁCIÓ (VIEW SWITCHING)
// -------------------------------------------------------------
function showDashboard() {
  stopSpeaking(); // Elnémítjuk a felolvasást a főoldalra lépéskor
  DOM.viewWorkspace.style.display = 'none';
  DOM.viewDashboard.style.display = 'block';
  state.currentTopicId = null;
  window.scrollTo(0, 0);
  
  // Főoldal frissítése (pl. státuszok változhattak)
  renderDashboardGrid();
  updateGlobalProgress();
  
  if (state.currentUser) {
    renderBadges();
    renderLeaderboard();
  }
}

function showWorkspace(topicId) {
  stopSpeaking(); // Elnémítjuk az előző felolvasást új tétel megnyitásakor
  state.currentTopicId = topicId;
  DOM.viewDashboard.style.display = 'none';
  DOM.viewWorkspace.style.display = 'block';
  window.scrollTo(0, 0);
  
  // Aktív tétel metaadatainak kinyerése
  const meta = state.topicsMetadata[state.currentSubject].find(t => t.id === topicId);
  DOM.workspaceTopicTitle.textContent = meta.title;
  DOM.workspaceTopicAuthor.textContent = meta.author;
  DOM.topicBadgeCategory.textContent = meta.category;
  DOM.topicBadgeEra.textContent = meta.era;
  DOM.topicBadgeTime.textContent = meta.duration;
  
  // Betöltjük a lokálisan tárolt státuszt
  const statusKey = `${state.currentSubject}_status_${topicId}`;
  const status = localStorage.getItem(statusKey) || 'not-started';
  DOM.statusSelect.value = status;
  
  // Alapértelmezett fül beállítása (Kidolgozott tétel)
  switchTab('reading');
  
  // Jegyzetek betöltése
  const notesKey = `${state.currentSubject}_notes_${topicId}`;
  const savedNotes = localStorage.getItem(notesKey) || '';
  DOM.notesTextarea.value = savedNotes;
  DOM.notesSaveStatus.textContent = "Minden módosítás mentve.";

  // Spinner megjelenítése a tétel szövegénél amíg töltődik a fájl
  renderSpinner();
  
  // Dinamikusan behúzzuk az adott tétel JavaScript fájlját
  loadTopicDataScript(topicId);
}

// Spinners
function renderSpinner() {
  const spinnerHTML = `<div class="loading-spinner">Tétel adatok betöltése offline...</div>`;
  DOM.outlineList.innerHTML = '<li>Töltés...</li>';
  DOM.contentIntro.innerHTML = spinnerHTML;
  DOM.contentBiography.innerHTML = spinnerHTML;
  DOM.contentWorks.innerHTML = spinnerHTML;
  DOM.contentStyle.innerHTML = spinnerHTML;
  DOM.contentConclusion.innerHTML = spinnerHTML;
}

// Dinamikus Script tag beillesztés (offline CORS barát betöltő)
function loadTopicDataScript(topicId) {
  const currentSubject = state.currentSubject;
  
  // Ha már be van töltve és gyorsítótárazva az adat, azonnal renderelhetjük
  if (state.loadedTopicsData[currentSubject][topicId]) {
    renderTopicContent(topicId, state.loadedTopicsData[currentSubject][topicId]);
    return;
  }
  
  const paddedId = String(topicId).padStart(2, '0');
  const filePrefix = currentSubject === 'grammar' ? 'grammar' : (currentSubject === 'history' ? 'history' : 'topic');
  const scriptPath = `${filePrefix}-${paddedId}.js`;
  
  // Keresünk már meglévő script taget ehhez az id-hoz és töröljük (ha pl. újra be akarnánk tölteni)
  const existingScript = document.getElementById(`${currentSubject}-script-${topicId}`);
  if (existingScript) {
    existingScript.remove();
  }
  
  const script = document.createElement('script');
  script.src = scriptPath;
  script.id = `${currentSubject}-script-${topicId}`;
  script.onerror = () => {
    DOM.contentIntro.innerHTML = `
      <div class="glass-panel" style="padding: 20px; border-color: var(--status-not-started); text-align: center;">
        <h3 style="color: var(--status-not-started); margin-bottom: 10px;">Hiba történt</h3>
        <p>Nem sikerült betölteni a tétel fájlját: <code>${scriptPath}</code>.<br>Kérlek, ellenőrizd, hogy a fájl létezik-e a megadott útvonalon!</p>
      </div>
    `;
  };
  
  document.body.appendChild(script);
}

// A dinamikus fájlok ezt a függvényt hívják meg a betöltődésükkor
window.loadTopicData = function(topicId, data) {
  // Eltároljuk a gyorsítótárban
  state.loadedTopicsData.literature[topicId] = data;
  
  // Ha jelenleg is ez a tétel van megnyitva, rendereljük
  if (state.currentTopicId === topicId && state.currentSubject === 'literature') {
    renderTopicContent(topicId, data);
  }
};

window.loadGrammarData = function(topicId, data) {
  // Eltároljuk a gyorsítótárban
  state.loadedTopicsData.grammar[topicId] = data;
  
  // Ha jelenleg is ez a tétel van megnyitva, rendereljük
  if (state.currentTopicId === topicId && state.currentSubject === 'grammar') {
    renderTopicContent(topicId, data);
  }
};

window.loadHistoryData = function(topicId, data) {
  // Eltároljuk a gyorsítótárban
  state.loadedTopicsData.history[topicId] = data;
  
  // Ha jelenleg is ez a tétel van megnyitva, rendereljük
  if (state.currentTopicId === topicId && state.currentSubject === 'history') {
    renderTopicContent(topicId, data);
  }
};

// -------------------------------------------------------------
// 5. TARTALOM RENDERELÉSE A WORKSPACE-EN
// -------------------------------------------------------------
function renderTopicContent(topicId, data) {
  // 1. Rövid vázlat renderelése
  DOM.outlineList.innerHTML = '';
  if (data.outline && data.outline.length > 0) {
    data.outline.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      DOM.outlineList.appendChild(li);
    });
  } else {
    DOM.outlineList.innerHTML = '<li>Nincs megadva vázlat.</li>';
  }

  // 2. Bevezetés
  DOM.contentIntro.innerHTML = data.introduction || '<p>Nincs adat.</p>';

  // 3. Életrajzi és történelmi háttér (ha nincs megadva, elrejtjük a szakosztályt és a TOC linket)
  if (data.biography && data.biography.trim() !== '') {
    DOM.secBiography.style.display = 'block';
    if (DOM.tocBioLink) DOM.tocBioLink.style.display = 'block';
    DOM.contentBiography.innerHTML = data.biography;
  } else {
    DOM.secBiography.style.display = 'none';
    if (DOM.tocBioLink) DOM.tocBioLink.style.display = 'none';
  }

  // 4. Művek elemzése
  DOM.contentWorks.innerHTML = '';
  if (data.keyWorks && data.keyWorks.length > 0) {
    data.keyWorks.forEach(work => {
      const workDiv = document.createElement('div');
      workDiv.className = 'work-item-analysis';
      workDiv.innerHTML = `
        <h3 class="work-title-heading">${work.title}</h3>
        <div class="section-content-text">${work.analysis}</div>
      `;
      DOM.contentWorks.appendChild(workDiv);
    });
  } else {
    DOM.contentWorks.innerHTML = '<p>Nincs elemzett mű ehhez a tételhez.</p>';
  }

  // 5. Stílus és műfaj
  DOM.contentStyle.innerHTML = data.styleAndForm || '<p>Nincs adat.</p>';

  // 6. Befejezés
  DOM.contentConclusion.innerHTML = data.conclusion || '<p>Nincs adat.</p>';

  // Villámkártyák előkészítése
  if (data.flashcards && data.flashcards.length > 0) {
    state.currentCardIndex = 0;
    DOM.tabFlashcardsBtn.style.display = 'flex';
    renderFlashcard();
  } else {
    DOM.tabFlashcardsBtn.style.display = 'none';
  }

  // Kvíz előkészítése
  if (data.quiz && data.quiz.length > 0) {
    DOM.tabQuizBtn.style.display = 'flex';
    resetQuizState(data.quiz);
  } else {
    DOM.tabQuizBtn.style.display = 'none';
  }

  // TOC Scrollspy visszaállítás
  resetScrollspy();

  // Coach és mindmap visszaállítás
  resetCoachBubble();
  if (DOM.mindmapPanel) DOM.mindmapPanel.style.display = 'none';
  
  // Spaced repetition ellenőrzés
  checkSpacedRepetition(topicId);
  
  if (state.pendingChallengeQuiz) {
    state.pendingChallengeQuiz = false;
    setTimeout(() => {
      switchTab('quiz');
      startQuiz();
    }, 100);
  }
}

// -------------------------------------------------------------
// 6. DASHBOARD GENERÁLÁS, KERESÉS ÉS SZŰRÉS
// -------------------------------------------------------------
function renderDashboardGrid() {
  const searchQuery = DOM.searchInput.value.toLowerCase().trim();
  const activeCategory = DOM.categoryFilters.querySelector('.pill.active') ? DOM.categoryFilters.querySelector('.pill.active').dataset.category : 'all';
  
  DOM.topicsGrid.innerHTML = '';
  
  const filtered = state.topicsMetadata[state.currentSubject].filter(topic => {
    // 1. Kategória szűrés
    if (activeCategory !== 'all' && topic.category !== activeCategory && !topic.category.includes(activeCategory)) {
      return false;
    }
    
    // 2. Kereső szűrés (Cím, Szerző, Címkék)
    if (searchQuery !== '') {
      const matchTitle = topic.title.toLowerCase().includes(searchQuery);
      const matchAuthor = topic.author.toLowerCase().includes(searchQuery);
      const matchTags = topic.tags.some(tag => tag.toLowerCase().includes(searchQuery));
      return matchTitle || matchAuthor || matchTags;
    }
    
    return true;
  });

  // 3. Rendezés
  const sortVal = DOM.sortSelect ? DOM.sortSelect.value : 'id-asc';
  filtered.sort((a, b) => {
    if (sortVal === 'time-asc' || sortVal === 'time-desc') {
      const timeA = parseInt(a.duration) || 0;
      const timeB = parseInt(b.duration) || 0;
      if (timeA !== timeB) {
        return sortVal === 'time-asc' ? timeA - timeB : timeB - timeA;
      }
      return a.id - b.id; // secondary sort by ID
    } else {
      return a.id - b.id; // default ID ascending
    }
  });

  if (filtered.length === 0) {
    DOM.topicsGrid.innerHTML = `<div class="loading-spinner">Nincs a keresési feltételeknek megfelelő tétel.</div>`;
    return;
  }

  filtered.forEach(topic => {
    // Lokális státusz betöltése
    const statusKey = `${state.currentSubject}_status_${topic.id}`;
    const status = localStorage.getItem(statusKey) || 'not-started';
    let statusClass = '';
    let statusText = 'Nem elkezdett';
    
    if (status === 'in-progress') {
      statusClass = 'in-progress';
      statusText = 'Folyamatban';
    } else if (status === 'mastered') {
      statusClass = 'mastered';
      statusText = 'Megtanult';
    }

    // Ebbinghaus Felejtési görbe számítás a kártyán
    const topicKey = `${state.currentSubject}_${topic.id}`;
    let reviewDueHtml = '';
    if (status === 'mastered' || status === 'in-progress') {
      const retention = calculateRetention(topicKey, status);
      if (retention < 60) {
        reviewDueHtml = `<span style="font-size: 0.65rem; color: var(--system-red); font-weight: bold; background: rgba(255, 59, 48, 0.12); padding: 2px 6px; border-radius: 4px; margin-left: 6px;">⚠️ ISMÉTLÉS!</span>`;
      }
    }

    const card = document.createElement('div');
    card.className = 'topic-card glass-panel';
    card.innerHTML = `
      <div class="card-num" style="display: flex; align-items: center;">${topic.id}. Tétel ${reviewDueHtml}</div>
      <h3 class="card-title">${topic.title}</h3>
      <div class="card-author">${topic.author}</div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="card-meta-category">${topic.category}</span>
          <span class="card-meta-time">${topic.duration}</span>
        </div>
        <div class="card-status-dot ${statusClass}" title="${statusText}"></div>
      </div>
    `;
    
    card.addEventListener('click', () => showWorkspace(topic.id));
    DOM.topicsGrid.appendChild(card);
  });
}

// Statisztikák frissítése a fejlécben és dashboard-on
function updateGlobalProgress() {
  let notStarted = 0;
  let inProgress = 0;
  let mastered = 0;
  
  state.topicsMetadata[state.currentSubject].forEach(topic => {
    const statusKey = `${state.currentSubject}_status_${topic.id}`;
    const status = localStorage.getItem(statusKey) || 'not-started';
    if (status === 'not-started') notStarted++;
    else if (status === 'in-progress') inProgress++;
    else if (status === 'mastered') mastered++;
  });
  
  DOM.statNotStarted.textContent = notStarted;
  DOM.statInProgress.textContent = inProgress;
  DOM.statMastered.textContent = mastered;
  
  // Számoljuk ki a százalékos haladást (Megtanult = 100%, Folyamatban = 40%)
  const total = state.topicsMetadata[state.currentSubject].length;
  if (total > 0) {
    const progressVal = ((mastered * 1 + inProgress * 0.4) / total) * 100;
    DOM.progressBarGlobal.style.width = `${progressVal}%`;
    const percentEl = document.getElementById('stat-progress-percent');
    if (percentEl) {
      percentEl.textContent = `${Math.round(progressVal)}%`;
    }
  }
}

// -------------------------------------------------------------
// 7. VILLÁMKÁRTYÁK KISZOLGÁLÁSA
// -------------------------------------------------------------
function renderFlashcard() {
  const topicData = state.loadedTopicsData[state.currentSubject][state.currentTopicId];
  if (!topicData || !topicData.flashcards) return;
  
  const card = topicData.flashcards[state.currentCardIndex];
  
  // Visszaállítjuk a kártyát forgásmentes állapotba
  DOM.flashcard.classList.remove('is-flipped');
  
  // Várunk egy picit az érték megváltoztatásával, hogy ne lehessen látni a flip animáció alatt a változást
  setTimeout(() => {
    DOM.flashcardQuestion.textContent = card.question;
    DOM.flashcardAnswer.textContent = card.answer;
  }, 150);
  
  // Számláló frissítése
  DOM.cardCounter.textContent = `${state.currentCardIndex + 1} / ${topicData.flashcards.length}`;
}

// -------------------------------------------------------------
// 8. KVÍZ LOGIKA
// -------------------------------------------------------------
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function resetQuizState(questions) {
  state.quizState = {
    active: false,
    questions: questions,
    currentIndex: 0,
    score: 0,
    answered: false
  };
  
  DOM.quizStartView.style.display = 'block';
  DOM.quizQuestionView.style.display = 'none';
  DOM.quizResultView.style.display = 'none';
}

function startQuiz() {
  const topicData = state.loadedTopicsData[state.currentSubject][state.currentTopicId];
  const allQuestions = (topicData && topicData.quiz && topicData.quiz.length > 0) ? topicData.quiz : state.quizState.questions;
  
  if (allQuestions && allQuestions.length > 0) {
    // 1. Kérdések számának meghatározása
    let chosenCount = 5;
    if (state.activeChallenge && state.activeChallenge.topicId === state.currentTopicId && state.activeChallenge.subject === state.currentSubject) {
      chosenCount = state.activeChallenge.senderTotal;
    } else {
      const countSelect = document.getElementById('quiz-question-count');
      chosenCount = countSelect ? parseInt(countSelect.value) : 5;
    }
    
    // 2. Kérdések összekeverése és méretének korlátozása (max 20)
    const shuffled = shuffleArray(allQuestions);
    const maxLimit = Math.min(shuffled.length, chosenCount, 20);
    const selectedQuestions = shuffled.slice(0, maxLimit);
    
    state.quizState.questions = selectedQuestions;
    state.quizState.currentIndex = 0;
    state.quizState.score = 0;
    state.quizState.answered = false;
  }

  state.quizState.active = true;
  DOM.quizStartView.style.display = 'none';
  DOM.quizQuestionView.style.display = 'block';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qState = state.quizState;
  const q = qState.questions[qState.currentIndex];
  qState.answered = false;
  
  // Felület visszaállítás
  DOM.quizFeedbackBox.style.display = 'none';
  
  // Haladás és pontszám frissítés
  const progressPercent = ((qState.currentIndex) / qState.questions.length) * 100;
  DOM.quizProgressFill.style.width = `${progressPercent}%`;
  DOM.quizQuestionNumber.textContent = `${qState.currentIndex + 1} / ${qState.questions.length} kérdés`;
  DOM.quizScoreLive.textContent = `Aktuális pontszám: ${qState.score}`;
  
  // Kérdés és opciók renderelése
  DOM.quizQuestionText.textContent = q.question;
  DOM.quizOptionsList.innerHTML = '';
  
  q.options.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx); // A, B, C, D...
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.innerHTML = `<span class="option-letter">${letter}</span> <span class="option-text">${opt}</span>`;
    btn.addEventListener('click', () => selectQuizAnswer(idx));
    DOM.quizOptionsList.appendChild(btn);
  });
}

function selectQuizAnswer(selectedIdx) {
  const qState = state.quizState;
  if (qState.answered) return;
  qState.answered = true;
  
  const q = qState.questions[qState.currentIndex];
  const buttons = DOM.quizOptionsList.querySelectorAll('.quiz-option-btn');
  
  // Letiltunk minden gombot
  buttons.forEach(btn => btn.disabled = true);
  
  const isCorrect = (selectedIdx === q.correctIndex);
  
  // Gombok stílusozása
  buttons[selectedIdx].classList.add(isCorrect ? 'correct' : 'incorrect');
  if (!isCorrect) {
    buttons[q.correctIndex].classList.add('correct');
  }
  
  // Pont növelése
  if (isCorrect) {
    qState.score++;
    DOM.quizScoreLive.textContent = `Aktuális pontszám: ${qState.score}`;
  }
  
  // Visszajelzés ablak beállítása és megjelenítése
  DOM.quizFeedbackBox.className = 'quiz-feedback-box glass-panel ' + (isCorrect ? 'correct-style' : 'incorrect-style');
  DOM.quizFeedbackTitle.textContent = isCorrect ? 'Helyes válasz!' : 'Helytelen válasz!';
  DOM.quizFeedbackExplanation.textContent = q.explanation;
  DOM.quizFeedbackBox.style.display = 'block';
  
  // Ha ez az utolsó kérdés, a gomb szövege változzon eredményekre
  if (qState.currentIndex === qState.questions.length - 1) {
    DOM.btnNextQuestion.textContent = 'Eredmények megtekintése';
  } else {
    DOM.btnNextQuestion.textContent = 'Következő kérdés';
  }
}

function nextQuizQuestion() {
  const qState = state.quizState;
  
  if (qState.currentIndex < qState.questions.length - 1) {
    qState.currentIndex++;
    renderQuizQuestion();
  } else {
    // Kvíz vége - Eredmény nézet
    DOM.quizQuestionView.style.display = 'none';
    DOM.quizResultView.style.display = 'block';
    
    DOM.quizResultScore.textContent = `${qState.score} / ${qState.questions.length}`;
    
    // Százalékos értékelés szövege
    const pct = (qState.score / qState.questions.length) * 100;
    
    // XP jutalom és Jelvények
    let earnedXP = 50;
    
    // Ha párbaj kihívásban vagyunk
    if (state.activeChallenge && state.activeChallenge.topicId === state.currentTopicId && state.activeChallenge.subject === state.currentSubject) {
      const challenge = state.activeChallenge;
      
      if (qState.score > challenge.senderScore) {
        earnedXP += 40; // Győzelmi bónusz XP
        DOM.quizResultText.textContent = `🎉 Megnyerted a párbajt! Legyőzted ${challenge.senderName}-t (${qState.score} vs ${challenge.senderScore})! Jár a +40 bónusz XP!`;
        broadcastActivity('⚔️', `legyőzte ${challenge.senderName}-t egy párbajban a(z) "${DOM.workspaceTopicTitle.textContent}" kvízen! (${qState.score} vs ${challenge.senderScore})`);
      } else if (qState.score === challenge.senderScore) {
        earnedXP += 20; // Döntetlen bónusz
        DOM.quizResultText.textContent = `🤝 Döntetlen! Ugyanannyi pontot értél el, mint ${challenge.senderName} (${qState.score} vs ${challenge.senderScore}). Jár a +20 bónusz XP!`;
        broadcastActivity('🤝', `döntetlent játszott ${challenge.senderName}-vel egy párbajban a(z) "${DOM.workspaceTopicTitle.textContent}" kvízen! (${qState.score} vs ${challenge.senderScore})`);
      } else {
        DOM.quizResultText.textContent = `😢 Ezt a párbajt elveszítetted. ${challenge.senderName} jobb volt nálad (${challenge.senderScore} vs ${qState.score}). Legközelebb jobban sikerül!`;
        broadcastActivity('🛡️', `elveszítette a párbajt ${challenge.senderName} ellen a(z) "${DOM.workspaceTopicTitle.textContent}" kvízen! (${qState.score} vs ${challenge.senderScore})`);
      }
      
      addXP(earnedXP, `Kvíz párbaj teljesítés`);
      state.activeChallenge = null;
    } else {
      if (pct === 100) {
        earnedXP += 30;
        addXP(earnedXP, "Kvíz 100% megoldás");
        unlockBadge('quiz_champion');
      } else {
        addXP(earnedXP, `Kvíz teljesítés (${qState.score}/${qState.questions.length})`);
      }
      
      let evaluation = '';
      if (pct === 100) evaluation = 'Tökéletes megoldás! Kiválóan tudod ezt a tételt! Állítsd a státuszát "Megtanult"-ra!';
      else if (pct >= 80) evaluation = 'Nagyszerű eredmény! Már nagyon jól megy a tétel, csak így tovább!';
      else if (pct >= 50) evaluation = 'Jó alap, de érdemes még átolvasnod a kidolgozott anyagot és a villámkártyákat!';
      else evaluation = 'Ez most nem sikerült túl jól, de ne csüggedj! Olvasd át újra a tételt, és próbáld meg újra a kvízt!';
      
      DOM.quizResultText.textContent = evaluation;
    }
    
    // Ha jó lett az eredmény (>= 80%), és eddig nem volt megtanult, ajánljuk fel a státusz frissítést
    if (pct >= 80) {
      const statusKey = `${state.currentSubject}_status_${state.currentTopicId}`;
      const curStatus = localStorage.getItem(statusKey) || 'not-started';
      if (curStatus !== 'mastered') {
        localStorage.setItem(statusKey, 'mastered');
        DOM.statusSelect.value = 'mastered';
        updateGlobalProgress();
      }
    }
  }
}

// -------------------------------------------------------------
// 9. SAJÁT JEGYZETEK AUTO-SAVE ÉS DEBOUNCE
// -------------------------------------------------------------
let saveTimeout = null;
function handleNotesInput() {
  DOM.notesSaveStatus.textContent = "Mentés folyamatban...";
  
  if (saveTimeout) clearTimeout(saveTimeout);
  
  saveTimeout = setTimeout(() => {
    if (state.currentTopicId) {
      const notesKey = `${state.currentSubject}_notes_${state.currentTopicId}`;
      const isNewNote = !localStorage.getItem(notesKey) && DOM.notesTextarea.value.trim().length > 5;
      
      localStorage.setItem(notesKey, DOM.notesTextarea.value);
      DOM.notesSaveStatus.textContent = "Minden módosítás mentve.";
      syncDataToCloud(notesKey, DOM.notesTextarea.value);
      
      if (isNewNote && state.currentUser) {
        addXP(20, "Jegyzet készítése");
      }
    }
  }, 800); // Debounce 800ms
}

function clearNotes() {
  if (confirm("Biztosan törölni szeretnéd az összes jegyzetedet ehhez a tételhez? Ez a művelet nem vonható vissza.")) {
    DOM.notesTextarea.value = '';
    if (state.currentTopicId) {
      const notesKey = `${state.currentSubject}_notes_${state.currentTopicId}`;
      localStorage.removeItem(notesKey);
      DOM.notesSaveStatus.textContent = "Jegyzetek törölve.";
      syncDataToCloud(notesKey, null);
    }
  }
}

// -------------------------------------------------------------
// 10. POMODORO IDŐZÍTŐ FUNKCIÓK
// -------------------------------------------------------------
function initPomodoro() {
  // Megnyitás/zárás dropdown
  DOM.btnPomoToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.pomoDropdown.classList.toggle('active');
  });
  
  DOM.btnClosePomo.addEventListener('click', () => {
    DOM.pomoDropdown.classList.remove('active');
  });
  
  // Kattintás a dropdownon kívül bezárja azt
  document.addEventListener('click', (e) => {
    if (!DOM.pomoWidget.contains(e.target)) {
      DOM.pomoDropdown.classList.remove('active');
    }
  });
  
  // Módváltások (Fókusz vs Szünet)
  DOM.btnPomoFocus.addEventListener('click', () => setPomoMode('focus', 1500));
  DOM.btnPomoBreak.addEventListener('click', () => setPomoMode('break', 300));
  
  // Vezérlők
  DOM.btnPomoStart.addEventListener('click', startPomo);
  DOM.btnPomoPause.addEventListener('click', pausePomo);
  DOM.btnPomoReset.addEventListener('click', resetPomo);
  
  updatePomoDisplays();
}

function setPomoMode(mode, seconds) {
  pausePomo();
  state.pomoTimer.currentMode = mode;
  state.pomoTimer.duration = seconds;
  state.pomoTimer.timeRemaining = seconds;
  
  DOM.btnPomoFocus.classList.toggle('active', mode === 'focus');
  DOM.btnPomoBreak.classList.toggle('active', mode === 'break');
  
  updatePomoDisplays();
}

function startPomo() {
  if (state.pomoTimer.running) return;
  
  state.pomoTimer.running = true;
  DOM.btnPomoStart.style.display = 'none';
  DOM.btnPomoPause.style.display = 'inline-flex';
  
  state.pomoTimer.timerId = setInterval(() => {
    state.pomoTimer.timeRemaining--;
    updatePomoDisplays();
    
    if (state.pomoTimer.timeRemaining <= 0) {
      clearInterval(state.pomoTimer.timerId);
      state.pomoTimer.running = false;
      playBeep(); // Beépített hangjelzés
      
      alert(state.pomoTimer.currentMode === 'focus' ? 'Fókusz idő lezárult! Tarts egy kis szünetet!' : 'Szünet vége! Ideje újra fókuszálni!');
      
      // Automatikus átváltás a másik módra
      if (state.pomoTimer.currentMode === 'focus') {
        setPomoMode('break', 300);
      } else {
        setPomoMode('focus', 1500);
      }
    }
  }, 1000);
}

function pausePomo() {
  if (!state.pomoTimer.running) return;
  
  clearInterval(state.pomoTimer.timerId);
  state.pomoTimer.running = false;
  DOM.btnPomoPause.style.display = 'none';
  DOM.btnPomoStart.style.display = 'inline-flex';
}

function resetPomo() {
  pausePomo();
  state.pomoTimer.timeRemaining = state.pomoTimer.duration;
  updatePomoDisplays();
}

function updatePomoDisplays() {
  const min = Math.floor(state.pomoTimer.timeRemaining / 60);
  const sec = state.pomoTimer.timeRemaining % 60;
  const timeStr = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  
  DOM.pomoTimerDisplay.textContent = timeStr;
  DOM.pomoTimerHuge.textContent = timeStr;
  
  // Kis felirat frissítése a módnak megfelelően
  DOM.pomoWidget.querySelector('.pomo-status-txt').textContent = state.pomoTimer.currentMode === 'focus' ? 'Fókusz' : 'Szünet';
}

// Bíp hang generálása Web Audio API-val ( offline működésért )
function playBeep() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 hang
    
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
    
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.8);
  } catch (e) {
    console.log("AudioContext hang lejátszása sikertelen: ", e);
  }
}

// -------------------------------------------------------------
// 11. TÉMA VÁLTÁS (DARK/LIGHT MODE)
// -------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  state.theme = savedTheme;
  
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    DOM.sunIcon.style.display = 'none';
    DOM.moonIcon.style.display = 'block';
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    DOM.sunIcon.style.display = 'block';
    DOM.moonIcon.style.display = 'none';
  }
}

function toggleTheme() {
  if (state.theme === 'dark') {
    state.theme = 'light';
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    DOM.sunIcon.style.display = 'none';
    DOM.moonIcon.style.display = 'block';
  } else {
    state.theme = 'dark';
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    DOM.sunIcon.style.display = 'block';
    DOM.moonIcon.style.display = 'none';
  }
  
  localStorage.setItem('theme', state.theme);
}

// -------------------------------------------------------------
// 12. FÜLEK VÁLTÁSA (TABS) A WORKSPACE-EN
// -------------------------------------------------------------
function switchTab(tabId) {
  // Gombok osztályának frissítése
  DOM.tabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  
  // Panelek megjelenítése/elrejtése
  DOM.tabPanes.forEach(pane => {
    pane.classList.toggle('active', pane.id === `pane-${tabId}`);
  });
  
  // Ha a kvíz fülre váltunk és még nem aktív a kvíz, állítsuk alaphelyzetbe
  if (tabId === 'quiz' && !state.quizState.active) {
    const topicData = state.loadedTopicsData[state.currentSubject][state.currentTopicId];
    if (topicData) {
      resetQuizState(topicData.quiz);
    }
  }
}

// -------------------------------------------------------------
// 13. TOC SCROLLSPY (Aktív fejezet követése görgetéskor)
// -------------------------------------------------------------
function setupScrollspy() {
  const sections = DOM.readingArticle.querySelectorAll('.article-section');
  const tocLinks = document.querySelectorAll('.toc-link');
  let isScrolling = false;
  
  window.addEventListener('scroll', () => {
    if (DOM.viewWorkspace.style.display === 'none') return;
    
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 180; // Eltolás a sticky fejléchez képest
        
        sections.forEach(section => {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSectionId = section.getAttribute('id');
          }
        });
        
        if (currentSectionId) {
          tocLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
          });
        }
        isScrolling = false;
      });
      isScrolling = true;
    }
  });
}

function resetScrollspy() {
  const tocLinks = document.querySelectorAll('.toc-link');
  tocLinks.forEach((link, idx) => {
    link.classList.toggle('active', idx === 0);
  });
}

// -------------------------------------------------------------
// 14. ESEMÉNYKEZELŐK FELIRATKOZÁSA
// -------------------------------------------------------------
function setupEventListeners() {
  // Logo és vissza gomb kattintás -> Dashboard
  DOM.logo.addEventListener('click', showDashboard);
  DOM.btnBack.addEventListener('click', showDashboard);
  
  // Keresés
  DOM.searchInput.addEventListener('input', renderDashboardGrid);
  
  // Szűrők
  DOM.categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('pill')) {
      DOM.categoryFilters.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      renderDashboardGrid();
    }
  });

  // Rendezés
  if (DOM.sortSelect) {
    DOM.sortSelect.addEventListener('change', renderDashboardGrid);
  }
  
  // Téma váltás
  DOM.btnThemeToggle.addEventListener('click', toggleTheme);
  
  // Tantárgyválasztó segmented control kattintás
  DOM.subjectSelector.addEventListener('click', (e) => {
    if (e.target.classList.contains('subject-btn')) {
      DOM.subjectButtons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      
      state.currentSubject = e.target.dataset.subject;
      
      // Frissítjük a kategóriákat és a rácsot
      renderCategoryFilters();
      renderDashboardGrid();
      updateGlobalProgress();
    }
  });

  // Tétel státusz váltása
  DOM.statusSelect.addEventListener('change', () => {
    if (state.currentTopicId) {
      const statusKey = `${state.currentSubject}_status_${state.currentTopicId}`;
      const oldStatus = localStorage.getItem(statusKey);
      const newStatus = DOM.statusSelect.value;
      
      localStorage.setItem(statusKey, newStatus);
      updateGlobalProgress();
      syncDataToCloud(statusKey, newStatus);
      
      // Spaced repetition: elmentjük a tanulási időt
      if (newStatus === 'mastered' || newStatus === 'in-progress') {
        const topicKey = `${state.currentSubject}_${state.currentTopicId}`;
        state.gamification.lastStudiedTimes[topicKey] = Date.now();
        saveGamification();
        checkSpacedRepetition(state.currentTopicId);
      }
      
      // XP jutalom ha most lett először mastered
      if (newStatus === 'mastered' && oldStatus !== 'mastered') {
        addXP(30, "Tétel megtanulva");
        const topicMeta = state.topicsMetadata[state.currentSubject].find(t => t.id === state.currentTopicId);
        const topicTitle = topicMeta ? topicMeta.title : `tétel (${state.currentTopicId})`;
        broadcastActivity('📚', `elsajátította a(z) "${topicTitle}" tételt!`);
      }
    }
  });
  
  // Nyomtatás gomb
  DOM.btnPrint.addEventListener('click', () => {
    window.print();
  });
  
  // Tab váltások
  DOM.tabButtons.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
  
  // Flashcard pörgetés
  DOM.flashcard.addEventListener('click', () => {
    const isFlipped = DOM.flashcard.classList.toggle('is-flipped');
    if (isFlipped && state.currentUser) {
      const cardKey = `${state.currentSubject}_${state.currentTopicId}_${state.currentCardIndex}`;
      if (!state.gamification.flippedCardsTracked) state.gamification.flippedCardsTracked = [];
      if (!state.gamification.flippedCardsTracked.includes(cardKey)) {
        state.gamification.flippedCardsTracked.push(cardKey);
        addXP(5, "Tanulókártya átfordítás");
      }
    }
  });
  
  DOM.btnPrevCard.addEventListener('click', () => {
    if (state.currentCardIndex > 0) {
      state.currentCardIndex--;
      renderFlashcard();
    }
  });
  
  DOM.btnNextCard.addEventListener('click', () => {
    const topicData = state.loadedTopicsData[state.currentSubject][state.currentTopicId];
    if (topicData && state.currentCardIndex < topicData.flashcards.length - 1) {
      state.currentCardIndex++;
      renderFlashcard();
    }
  });
  
  // Kvíz vezérlők
  DOM.btnStartQuiz.addEventListener('click', startQuiz);
  DOM.btnRestartQuiz.addEventListener('click', () => {
    const topicData = state.loadedTopicsData[state.currentSubject][state.currentTopicId];
    if (topicData) {
      resetQuizState(topicData.quiz);
      startQuiz();
    }
  });
  DOM.btnQuizBackToReading.addEventListener('click', () => switchTab('reading'));
  DOM.btnNextQuestion.addEventListener('click', nextQuizQuestion);
  
  // Jegyzet szerkesztés és mentés
  DOM.notesTextarea.addEventListener('input', handleNotesInput);
  DOM.btnClearNotes.addEventListener('click', clearNotes);
  
  // TTS Lejátszó események
  if (DOM.ttsPlayPause) {
    DOM.ttsPlayPause.addEventListener('click', togglePlayPause);
  }
  if (DOM.ttsStop) {
    DOM.ttsStop.addEventListener('click', stopSpeaking);
  }
  if (DOM.ttsSpeedSelect) {
    DOM.ttsSpeedSelect.addEventListener('change', () => {
      if (ttsState.isPlaying && !ttsState.isPaused) {
        if (ttsState.synth) ttsState.synth.cancel();
        playNextChunk();
      }
    });
  }
  
  // TOC kattintáskor finom görgetés eltolással a header miatt
  const tocLinks = document.querySelectorAll('.toc-link');
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSec = document.querySelector(targetId);
      if (targetSec) {
        const headerOffset = 90;
        const elementPosition = targetSec.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
  
  // Scrollspy elindítása
  setupScrollspy();

  // --- Belépés / Regisztráció eseménykezelők ---
  if (DOM.loginForm) {
    DOM.loginForm.addEventListener('submit', handleLoginFormSubmit);
  }
  if (DOM.linkSwitchSignup) {
    DOM.linkSwitchSignup.addEventListener('click', switchAuthMode);
  }
  if (DOM.btnProfileToggle) {
    DOM.btnProfileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      DOM.profileDropdown.classList.toggle('active');
    });
    // Bezárás külső kattintásra
    document.addEventListener('click', (e) => {
      if (DOM.profileDropdown && !DOM.profileWidget.contains(e.target)) {
        DOM.profileDropdown.classList.remove('active');
      }
    });
  }
  if (DOM.btnLogout) {
    DOM.btnLogout.addEventListener('click', logout);
  }
  if (DOM.btnSaveSync) {
    DOM.btnSaveSync.addEventListener('click', saveSupabaseConfig);
  }

  // --- Gyorstanulás (Bionikus & RSVP) eseménykezelők ---
  if (DOM.btnToggleBionic) {
    DOM.btnToggleBionic.addEventListener('click', toggleBionicMode);
  }
  if (DOM.btnSpeedReader) {
    DOM.btnSpeedReader.addEventListener('click', initSpeedReader);
  }
  if (DOM.btnCloseSpeedReader) {
    DOM.btnCloseSpeedReader.addEventListener('click', closeSpeedReader);
  }
  if (DOM.btnSpeedReaderPlay) {
    DOM.btnSpeedReaderPlay.addEventListener('click', playSpeedReader);
  }
  if (DOM.btnSpeedReaderPause) {
    DOM.btnSpeedReaderPause.addEventListener('click', pauseSpeedReader);
  }
  if (DOM.btnSpeedReaderReset) {
    DOM.btnSpeedReaderReset.addEventListener('click', resetSpeedReader);
  }
  if (DOM.speedReaderWpm) {
    DOM.speedReaderWpm.addEventListener('change', () => {
      if (state.speedReaderState.playing) {
        pauseSpeedReader();
        playSpeedReader();
      }
    });
  }

  if (DOM.btnToggleMindmap) {
    DOM.btnToggleMindmap.addEventListener('click', toggleMindMap);
  }
  if (DOM.btnCloseMindmap) {
    DOM.btnCloseMindmap.addEventListener('click', () => {
      if (DOM.mindmapPanel) DOM.mindmapPanel.style.display = 'none';
    });
  }
  if (DOM.btnMarkReviewed) {
    DOM.btnMarkReviewed.addEventListener('click', () => {
      if (state.currentTopicId) markTopicReviewed(state.currentTopicId);
    });
  }
  
  // AI Tanár kérdések bekötése
  document.querySelectorAll('.coach-q-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const questionType = e.currentTarget.dataset.q;
      handleCoachQuestion(questionType);
    });
  });

  // --- Social & Competitive Event Listeners ---
  const groupCodeInput = document.getElementById('profile-group-code');
  if (groupCodeInput) {
    groupCodeInput.addEventListener('change', () => {
      state.gamification.groupCode = groupCodeInput.value.trim();
      saveGamification();
      renderLeaderboard();
    });
  }

  const btnGlobal = document.getElementById('btn-leaderboard-global');
  const btnGroup = document.getElementById('btn-leaderboard-group');
  if (btnGlobal && btnGroup) {
    btnGlobal.addEventListener('click', () => {
      btnGlobal.classList.add('active');
      btnGroup.classList.remove('active');
      state.leaderboardFilter = 'global';
      renderLeaderboard();
    });
    btnGroup.addEventListener('click', () => {
      btnGroup.classList.add('active');
      btnGlobal.classList.remove('active');
      state.leaderboardFilter = 'group';
      renderLeaderboard();
    });
  }

  const btnRefreshFeed = document.getElementById('btn-refresh-feed');
  if (btnRefreshFeed) {
    btnRefreshFeed.addEventListener('click', () => {
      fetchActivityFeed();
    });
  }

  const btnQuizChallenge = document.getElementById('btn-quiz-challenge');
  if (btnQuizChallenge) {
    btnQuizChallenge.addEventListener('click', () => {
      copyChallengeLink();
    });
  }

  const btnAcceptChallenge = document.getElementById('btn-accept-challenge');
  const btnDeclineChallenge = document.getElementById('btn-decline-challenge');
  const challengeOverlay = document.getElementById('challenge-overlay');
  
  if (btnAcceptChallenge && challengeOverlay) {
    btnAcceptChallenge.addEventListener('click', () => {
      challengeOverlay.style.display = 'none';
      if (state.activeChallenge) {
        changeSubject(state.activeChallenge.subject);
        state.pendingChallengeQuiz = true;
        showWorkspace(state.activeChallenge.topicId);
      }
    });
  }
  
  if (btnDeclineChallenge && challengeOverlay) {
    btnDeclineChallenge.addEventListener('click', () => {
      challengeOverlay.style.display = 'none';
      state.activeChallenge = null;
    });
  }
}

// -------------------------------------------------------------
// 15. BEJELENTKEZÉS ÉS PROFIL LOGIKA
// -------------------------------------------------------------
function checkUserLogin() {
  const profileJson = localStorage.getItem('litera_user_profile');
  if (profileJson) {
    state.currentUser = JSON.parse(profileJson);
    
    DOM.viewLogin.style.display = 'none';
    DOM.viewDashboard.style.display = 'block';
    DOM.profileWidget.style.display = 'block';
    
    DOM.userDisplayName.textContent = state.currentUser.name;
    DOM.profileUserName.textContent = state.currentUser.name;
    DOM.profileUserEmail.textContent = state.currentUser.email;
    
    const subUrl = localStorage.getItem('supabase_url');
    const subKey = localStorage.getItem('supabase_key');
    if (DOM.supabaseUrl) DOM.supabaseUrl.value = (subUrl !== null && subUrl !== 'none') ? subUrl : (subUrl === 'none' ? '' : DEFAULT_SUPABASE_URL);
    if (DOM.supabaseKey) DOM.supabaseKey.value = (subKey !== null && subKey !== 'none') ? subKey : (subKey === 'none' ? '' : DEFAULT_SUPABASE_KEY);
    
    // Gamifikáció betöltése
    initGamification();
    
    renderCategoryFilters();
    renderDashboardGrid();
    updateGlobalProgress();
    setWelcomeMessage();
    
    syncDataFromCloud();
    checkUrlChallenge();
  } else {
    state.currentUser = null;
    DOM.viewLogin.style.display = 'block';
    DOM.viewDashboard.style.display = 'none';
    DOM.viewWorkspace.style.display = 'none';
    DOM.profileWidget.style.display = 'none';
    if (DOM.gamificationHeaderWidget) {
      DOM.gamificationHeaderWidget.style.display = 'none';
    }
  }
}

let isSignUpMode = false;
function handleLoginFormSubmit(e) {
  e.preventDefault();
  const name = DOM.loginName.value.trim();
  const email = DOM.loginEmail.value.trim();
  
  const profile = { name: isSignUpMode ? name : email.split('@')[0], email };
  localStorage.setItem('litera_user_profile', JSON.stringify(profile));
  
  DOM.loginName.value = '';
  DOM.loginEmail.value = '';
  DOM.loginPassword.value = '';
  
  checkUserLogin();
}

function switchAuthMode(e) {
  e.preventDefault();
  isSignUpMode = !isSignUpMode;
  
  if (isSignUpMode) {
    DOM.groupName.style.display = 'flex';
    DOM.btnLoginSubmit.textContent = "Regisztráció";
    DOM.loginSwitchText.innerHTML = `Már van fiókod? <a href="#" id="link-switch-signup">Bejelentkezés</a>`;
  } else {
    DOM.groupName.style.display = 'none';
    DOM.btnLoginSubmit.textContent = "Bejelentkezés";
    DOM.loginSwitchText.innerHTML = `Nincs még fiókod? <a href="#" id="link-switch-signup">Regisztráció</a>`;
  }
  
  document.getElementById('link-switch-signup').addEventListener('click', switchAuthMode);
}

function logout() {
  if (confirm("Biztosan ki szeretnél jelentkezni?")) {
    stopSpeaking();
    localStorage.removeItem('litera_user_profile');
    if (DOM.gamificationHeaderWidget) {
      DOM.gamificationHeaderWidget.style.display = 'none';
    }
    checkUserLogin();
  }
}

// -------------------------------------------------------------
// 16. SUPABASE SZINKRONIZÁLÁS LOGIKA
// -------------------------------------------------------------
function initSupabase() {
  const url = localStorage.getItem('supabase_url');
  const key = localStorage.getItem('supabase_key');
  
  const activeUrl = url !== null ? url : DEFAULT_SUPABASE_URL;
  const activeKey = key !== null ? key : DEFAULT_SUPABASE_KEY;
  
  if (activeUrl && activeKey && activeUrl !== 'none' && activeKey !== 'none' && window.supabase) {
    try {
      state.supabaseClient = window.supabase.createClient(activeUrl, activeKey);
      updateSyncStatus("Kapcsolódva a Supabase-hez.", "var(--system-green)");
    } catch (err) {
      console.error("Supabase init error:", err);
      updateSyncStatus("Hibás Supabase konfiguráció!", "var(--system-red)");
    }
  } else {
    state.supabaseClient = null;
    updateSyncStatus("Csak lokális tárolás aktív.", "var(--text-muted)");
  }
}

function updateSyncStatus(text, color) {
  if (DOM.syncStatus) {
    DOM.syncStatus.textContent = text;
    DOM.syncStatus.style.color = color;
  }
}

function saveSupabaseConfig() {
  const url = DOM.supabaseUrl.value.trim();
  const key = DOM.supabaseKey.value.trim();
  
  if (url && key) {
    localStorage.setItem('supabase_url', url);
    localStorage.setItem('supabase_key', key);
    initSupabase();
    syncDataFromCloud();
  } else {
    localStorage.setItem('supabase_url', 'none');
    localStorage.setItem('supabase_key', 'none');
    state.supabaseClient = null;
    initSupabase();
  }
}

async function syncDataFromCloud() {
  if (!state.supabaseClient || !state.currentUser) return;
  
  updateSyncStatus("Szinkronizálás...", "var(--status-in-progress)");
  
  try {
    const { data, error } = await state.supabaseClient
      .from('litera_user_data')
      .select('data')
      .eq('email', state.currentUser.email)
      .single();
      
    if (error) {
      if (error.code === 'PGRST116') {
        uploadAllLocalDataToCloud();
      } else {
        throw error;
      }
    } else if (data && data.data) {
      const cloudData = data.data;
      Object.keys(cloudData).forEach(key => {
        localStorage.setItem(key, cloudData[key]);
      });
      
      // Újratöltjük a gamifikációs adatokat
      initGamification();
      
      updateSyncStatus("Sikeres szinkronizálás!", "var(--system-green)");
      if (DOM.viewDashboard.style.display === 'block') {
        renderDashboardGrid();
        updateGlobalProgress();
      }
    }
  } catch (err) {
    console.warn("Felhő szinkronizációs hiba:", err);
    const msg = err.message || "Ismeretlen hiba";
    updateSyncStatus(`Hiba: ${msg}`, "var(--system-red)");
  }
}

async function uploadAllLocalDataToCloud() {
  if (!state.supabaseClient || !state.currentUser) return;
  
  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes('_status_') || key.includes('_notes_') || key.includes('litera_gamification_')) {
      allData[key] = localStorage.getItem(key);
    }
  }
  
  try {
    await state.supabaseClient
      .from('litera_user_data')
      .upsert({ email: state.currentUser.email, data: allData });
    updateSyncStatus("Lokális adatok feltöltve.", "var(--system-green)");
  } catch (err) {
    console.error("Adatfeltöltési hiba:", err);
  }
}

async function syncDataToCloud(key, value) {
  if (!state.supabaseClient || !state.currentUser) return;
  
  try {
    const { data } = await state.supabaseClient
      .from('litera_user_data')
      .select('data')
      .eq('email', state.currentUser.email)
      .single();
      
    const currentData = data ? data.data : {};
    if (value === null) {
      delete currentData[key];
    } else {
      currentData[key] = value;
    }
    
    await state.supabaseClient
      .from('litera_user_data')
      .upsert({ email: state.currentUser.email, data: currentData });
    updateSyncStatus("Felhő frissítve.", "var(--system-green)");
  } catch (err) {
    console.warn("Nem sikerült szinkronizálni:", err);
    const msg = err.message || "Szinkron hiba";
    updateSyncStatus(`Hiba: ${msg}`, "var(--system-red)");
  }
}

// -------------------------------------------------------------
// 17. BIONIKUS OLVASÁS LOGIKA
// -------------------------------------------------------------
function convertToBionicText(htmlContent) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const words = text.split(/(\s+)/);
      const processedWords = words.map(w => {
        if (w.trim().length === 0 || !/[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]/.test(w)) return w;
        
        const len = w.length;
        let boldLen = Math.ceil(len * 0.4);
        if (len <= 3) boldLen = 1;
        else if (len <= 5) boldLen = 2;
        
        return `<b>${w.substring(0, boldLen)}</b>${w.substring(boldLen)}`;
      });
      const span = document.createElement('span');
      span.innerHTML = processedWords.join('');
      node.parentNode.replaceChild(span, node);
    } else if (node.nodeName !== 'B' && node.nodeName !== 'STRONG') {
      const children = Array.from(node.childNodes);
      children.forEach(processNode);
    }
  }
  
  processNode(tempDiv);
  return tempDiv.innerHTML;
}

function toggleBionicMode() {
  const sections = [
    { el: DOM.contentIntro, key: 'intro' },
    { el: DOM.contentBiography, key: 'bio' },
    { el: DOM.contentWorks, key: 'works' },
    { el: DOM.contentStyle, key: 'style' },
    { el: DOM.contentConclusion, key: 'conclusion' }
  ];
  
  if (!state.isBionicActive) {
    // Mentés és átalakítás
    state.originalReadingHtml = {};
    sections.forEach(sec => {
      if (sec.el) {
        state.originalReadingHtml[sec.key] = sec.el.innerHTML;
        sec.el.innerHTML = convertToBionicText(sec.el.innerHTML);
      }
    });
    
    state.isBionicActive = true;
    if (DOM.btnToggleBionic) DOM.btnToggleBionic.classList.add('active');
  } else {
    // Visszaállítás
    sections.forEach(sec => {
      if (sec.el && state.originalReadingHtml[sec.key] !== undefined) {
        sec.el.innerHTML = state.originalReadingHtml[sec.key];
      }
    });
    
    state.isBionicActive = false;
    if (DOM.btnToggleBionic) DOM.btnToggleBionic.classList.remove('active');
  }
}

// -------------------------------------------------------------
// 18. RSVP SPEED READER (GYORSTOLVASÓ OVERLAY) LOGIKA
// -------------------------------------------------------------
function initSpeedReader() {
  stopSpeaking(); // TTS leállítása gyorstolvasáskor
  
  const text = getTopicTextToRead();
  if (!text || text.trim() === '') return;
  
  // Szavakra bontás
  const rawWords = text.replace(/[\n\r]+/g, ' ').split(/\s+/);
  state.speedReaderState.words = rawWords.filter(w => w.trim().length > 0);
  state.speedReaderState.currentIndex = 0;
  state.speedReaderState.playing = false;
  
  if (state.speedReaderState.timer) {
    clearInterval(state.speedReaderState.timer);
    state.speedReaderState.timer = null;
  }
  
  if (DOM.speedReaderOverlay) {
    DOM.speedReaderOverlay.style.display = 'flex';
  }
  
  resetSpeedReader();
}

function playSpeedReader() {
  if (state.speedReaderState.playing) return;
  
  state.speedReaderState.playing = true;
  DOM.btnSpeedReaderPlay.style.display = 'none';
  DOM.btnSpeedReaderPause.style.display = 'inline-flex';
  
  const wpm = parseInt(DOM.speedReaderWpm.value) || 300;
  const intervalMs = (60 * 1000) / wpm;
  
  state.speedReaderState.timer = setInterval(stepSpeedReader, intervalMs);
}

function pauseSpeedReader() {
  if (!state.speedReaderState.playing) return;
  
  state.speedReaderState.playing = false;
  DOM.btnSpeedReaderPlay.style.display = 'inline-flex';
  DOM.btnSpeedReaderPause.style.display = 'none';
  
  if (state.speedReaderState.timer) {
    clearInterval(state.speedReaderState.timer);
    state.speedReaderState.timer = null;
  }
}

function resetSpeedReader() {
  pauseSpeedReader();
  state.speedReaderState.currentIndex = 0;
  
  if (state.speedReaderState.words.length > 0) {
    DOM.speedReaderWord.textContent = state.speedReaderState.words[0];
  } else {
    DOM.speedReaderWord.textContent = "Nincs szöveg";
  }
  
  DOM.speedReaderProgress.style.width = '0%';
}

function stepSpeedReader() {
  const stateRef = state.speedReaderState;
  stateRef.currentIndex++;
  
  if (stateRef.currentIndex >= stateRef.words.length) {
    pauseSpeedReader();
    DOM.speedReaderWord.textContent = "Vége!";
    DOM.speedReaderProgress.style.width = '100%';
    return;
  }
  
  DOM.speedReaderWord.textContent = stateRef.words[stateRef.currentIndex];
  
  const percent = (stateRef.currentIndex / stateRef.words.length) * 100;
  DOM.speedReaderProgress.style.width = `${percent}%`;
}

function closeSpeedReader() {
  pauseSpeedReader();
  if (DOM.speedReaderOverlay) {
    DOM.speedReaderOverlay.style.display = 'none';
  }
}

// -------------------------------------------------------------
// 19. AI-SZIMULÁLT FELKÉSZÍTŐ TANÁR (PREP COACH) LOGIKA
// -------------------------------------------------------------
const COACH_DATABASE = {
  literature_1: {
    summary: "Petőfi a tájat nem háttérként, hanem az emberi szabadság és a hazaszeretet belső tereként ábrázolja, szakítva a romantika vadregényes tájideáljával az Alföld síkságának javára.",
    tricks: "Gyakori vizsgahiba azt hinni, hogy az Alföld leírása csak egyszerű leíró líra. Valójában ez a szabadság és a végtelenség szimbóluma. Kérdezhetik a Kiskunság és az Alföld tájábrázolásának különbségét is!",
    analogy: "Képzeld el, mintha a bezárt romantikus kastélyok helyett egy hatalmas, nyitott ablakú szobát választanál: a végtelen síkság a lélek korlátlan szabadságát fejezi ki."
  },
  literature_2: {
    summary: "Arany balladái a sűrített drámaiságot, a bűn és bűnhődés belső lélektani folyamatát mutatják be, gyakran a Bach-korszak elnyomása elleni burkolt nemzeti ellenállással ötvözve.",
    tricks: "Vigyázz! A walesi bárdok nem egyszerű történelmi ének – ez a nemzeti megalkuvás-ellenesség és a zsarnokság elutasításának legfőbb allegóriája a Bach-korszakban.",
    analogy: "Olyan ez, mint egy modern pszichológiai thriller: a cselekmény lényege nem maga a tett, hanem a bűntudat miatti elmebeli leépülés (pl. Ágnes asszony végtelenített lepedőmosása)."
  },
  literature_3: {
    summary: "Ady szerelmi költészete szakít a biedermeier idilljével; a szerelem nála diszharmónia, harc, és a megváltás vággyal teli állandó vívódása (Léda- és Csinszka-versek).",
    tricks: "A vizsgáztatók szeretik megkérdezni a Léda- és a Csinszka-szerelem közötti különbséget. Léda a viharos harc, a háborús pusztulás, míg Csinszka a megérkezés, a menedék és a béke szimbóluma.",
    analogy: "A Léda-szerelem olyan, mint egy tomboló nyári zivatar villámokkal, a Csinszka pedig mint a meleg tea egy hideg téli estén, a kandalló mellett."
  },
  grammar_1: {
    summary: "A nonverbális kommunikáció során a szavakon túli csatornák (testbeszéd, mimika, térköz, gesztusok) sokkal több valódi érzelmet közvetítenek, mint maga a kimondott beszéd.",
    tricks: "Beugratós kérdés lehet: 'A csend vajon kommunikáció?' Igen! A nonverbális csatornák része a hallgatás, a hanghordozás, de még az öltözködésünk és a testtartásunk is.",
    analogy: "A nonverbális jelek olyanok, mint a filmben a háttérzene: a szavak (verbális csatorna) adják a szöveget, de a zene határozza meg a jelenet valódi hangulatát és mélységét."
  }
};

function resetCoachBubble() {
  if (DOM.coachBubble) {
    DOM.coachBubble.textContent = "Szia! Én vagyok a felkészítő tanárod. Kattints az alábbi kérdések egyikére, hogy segítsek a tétel gyors megértésében!";
  }
}

function handleCoachQuestion(type) {
  if (!state.currentTopicId) return;
  
  const subject = state.currentSubject;
  const topicId = state.currentTopicId;
  const topicKey = `${subject}_${topicId}`;
  
  const meta = state.topicsMetadata[subject].find(t => t.id === topicId);
  const data = state.loadedTopicsData[subject][topicId];
  if (!meta || !data) return;
  
  let response = "";
  
  // 1. Megnézzük, van-e kézzel írt válasz
  if (COACH_DATABASE[topicKey] && COACH_DATABASE[topicKey][type]) {
    response = COACH_DATABASE[topicKey][type];
  } else {
    // 2. Fallback AI generátor
    const author = meta.author || "a szerző";
    const title = meta.title;
    const era = meta.era;
    const tags = meta.tags ? meta.tags.join(', ') : '';
    const tagList = meta.tags || [];
    
    if (type === 'summary') {
      if (subject === 'literature') {
        response = `A tétel központi témája ${author} munkássága, kifejezetten a(z) "${title}" szemszögéből, ami a ${era} korszakában a következő kulcsfogalmakat járja körül: ${tags}.`;
      } else if (subject === 'history') {
        response = `Ez a történelem tétel a(z) ${meta.category} témakörét fejti ki részletesen, bemutatva a(z) ${tags} történelmi folyamatait, okait és következményeit a(z) ${era} időszakában.`;
      } else {
        response = `Ez a nyelvtan tétel a(z) ${meta.category} témakörét fejti ki részletesen, bemutatva a(z) ${tags} fogalmak elméleti alapjait és gyakorlati használatát.`;
      }
    } else if (type === 'tricks') {
      const trickTag1 = tagList[0] || 'korszak sajátosságai';
      const trickTag2 = tagList[1] || 'műfaji határok';
      response = `1. Vigyázz! A vizsgán könnyen beugrathatnak azzal, ha nem tudod pontosan elválasztani a(z) ${trickTag1} és a(z) ${trickTag2} közötti különbséget.\n2. Figyelj rá, hogy a(z) "${title}" esetében ne csak a cselekményt meséld el, hanem a mögöttes szerkezeti és esztétikai elemeket (pl. a(z) ${era} hatásait) is elemezd!`;
    } else if (type === 'analogy') {
      const analogyTag = tagList[0] || 'témakör';
      if (subject === 'literature') {
        response = `Képzeld el ${author} ezen témáját úgy, mint egy korabeli 'személyes blogot': a versek és művek nem száraz leírások, hanem pillanatképek a szerző legbelső érzelmeiről és reakcióiról a világ eseményeire.`;
      } else if (subject === 'history') {
        response = `Gondolj a(z) "${title}" eseményeire úgy, mint egy dominósorra: minden egyes döntés, csata vagy reform egy-egy lökés volt, ami elindította a következő történelmi fordulatot.`;
      } else {
        response = `Gondolj a(z) ${analogyTag} rendszerére úgy, mint a közúti KRESZ szabályokra: ha mindenki ismeri és betartja a szabályokat (a nyelvi normákat), a forgalom (a kommunikáció) balesetmentesen és gördülékenyen halad.`;
      }
    }
  }
  
  if (DOM.coachBubble) {
    DOM.coachBubble.innerHTML = `<strong>Tanár:</strong> ${response.replace(/\n/g, '<br>')}`;
    // XP adható a kérdezésért (pl. +2 XP, egyszer kérdésenként)
    addXP(2, "AI Tanár tanácsának megkérdezése");
  }
}

// -------------------------------------------------------------
// 20. FELEJTÉSI GÖRBE ÉS LEITNER-ISMÉTLÉS (SPACED REPETITION)
// -------------------------------------------------------------
function calculateRetention(topicKey, status) {
  const lastStudied = state.gamification.lastStudiedTimes[topicKey];
  if (!lastStudied) return 0;
  
  const elapsedDays = (Date.now() - lastStudied) / (1000 * 60 * 60 * 24);
  
  // Hermann Ebbinghaus felejtési görbe képlete: R = e^(-t/S)
  // S = a memória erőssége (mastered esetén 4 nap, in-progress esetén 1.5 nap)
  const strength = (status === 'mastered') ? 4.0 : 1.5;
  const retention = Math.exp(-elapsedDays / strength) * 100;
  
  return Math.max(0, Math.min(100, Math.round(retention)));
}

function checkSpacedRepetition(topicId) {
  if (!state.currentUser) return;
  
  const subject = state.currentSubject;
  const topicKey = `${subject}_${topicId}`;
  const statusKey = `${subject}_status_${topicId}`;
  const status = localStorage.getItem(statusKey) || 'not-started';
  
  const badge = DOM.badgeReviewDue;
  const btn = DOM.btnMarkReviewed;
  
  if (status === 'mastered' || status === 'in-progress') {
    const retention = calculateRetention(topicKey, status);
    
    if (retention < 60) {
      if (badge) badge.style.display = 'inline-flex';
      if (btn) btn.style.display = 'inline-flex';
    } else {
      if (badge) badge.style.display = 'none';
      if (btn) btn.style.display = 'none';
    }
  } else {
    if (badge) badge.style.display = 'none';
    if (btn) btn.style.display = 'none';
  }
}

function markTopicReviewed(topicId) {
  if (!state.currentUser) return;
  
  const subject = state.currentSubject;
  const topicKey = `${subject}_${topicId}`;
  
  state.gamification.lastStudiedTimes[topicKey] = Date.now();
  saveGamification();
  
  // Visszajelzés a UI-nak
  if (DOM.badgeReviewDue) DOM.badgeReviewDue.style.display = 'none';
  if (DOM.btnMarkReviewed) DOM.btnMarkReviewed.style.display = 'none';
  
  addXP(15, "Ismétlés megerősítése");
  alert("Ismétlés rögzítve! A felejtési görbe időzítője visszaállt 100%-ra ehhez a tételhez.");
  
  // Frissítjük a kártyát
  renderDashboardGrid();
}

// -------------------------------------------------------------
// 21. GAMIFIKÁCIÓ (XP, STREAK, SZINTEK ÉS JELVÉNYEK)
// -------------------------------------------------------------
function initGamification() {
  if (!state.currentUser) return;
  
  const key = `litera_gamification_${state.currentUser.email}`;
  const dataJson = localStorage.getItem(key);
  
  if (dataJson) {
    state.gamification = JSON.parse(dataJson);
    // Biztosítsuk az új tömböket
    if (!state.gamification.unlockedBadges) state.gamification.unlockedBadges = [];
    if (!state.gamification.lastStudiedTimes) state.gamification.lastStudiedTimes = {};
    if (!state.gamification.flippedCardsTracked) state.gamification.flippedCardsTracked = [];
  } else {
    state.gamification = {
      xp: 0,
      level: 1,
      streak: 0,
      lastActivityDate: null,
      unlockedBadges: [],
      lastStudiedTimes: {},
      flippedCardsTracked: []
    };
  }
  
  // Név mentése a felhőbe szinkronizáláshoz
  state.gamification.name = state.currentUser.name;
  
  // Streak frissítése napi bejelentkezés alapján
  updateStreak();
  
  // Kijelzők frissítése
  updateGamificationUI();
  
  // Csoportkód beállítása a beviteli mezőben
  const groupCodeInput = document.getElementById('profile-group-code');
  if (groupCodeInput) {
    groupCodeInput.value = state.gamification.groupCode || '';
  }
  
  // Dashboard widgetek kirajzolása
  renderBadges();
  renderLeaderboard();
}

function saveGamification() {
  if (!state.currentUser) return;
  
  const key = `litera_gamification_${state.currentUser.email}`;
  const dataStr = JSON.stringify(state.gamification);
  localStorage.setItem(key, dataStr);
  
  // Felhő szinkronizáció
  syncDataToCloud(key, dataStr);
  
  // Kijelzők frissítése
  updateGamificationUI();
  renderBadges();
}

function updateGamificationUI() {
  if (!state.currentUser) return;
  
  if (DOM.gamificationHeaderWidget) {
    DOM.gamificationHeaderWidget.style.display = 'flex';
  }
  if (DOM.headerStreakVal) DOM.headerStreakVal.textContent = state.gamification.streak;
  if (DOM.headerXpVal) DOM.headerXpVal.textContent = state.gamification.xp;
  if (DOM.headerLevelVal) DOM.headerLevelVal.textContent = state.gamification.level;
}

function addXP(amount, reason) {
  if (!state.currentUser) return;
  
  // Streak szorzó meghatározása
  const streak = state.gamification.streak || 0;
  let multiplier = 1.0;
  if (streak >= 14) {
    multiplier = 2.0;
  } else if (streak >= 7) {
    multiplier = 1.5;
  } else if (streak >= 3) {
    multiplier = 1.2;
  }
  
  const finalAmount = Math.round(amount * multiplier);
  state.gamification.xp += finalAmount;
  
  // Szint ellenőrzése
  checkLevelUp();
  
  // Jelvények ellenőrzése
  checkBadges();
  
  // Mentés
  saveGamification();
  
  // Úszó visszajelzés vagy save status frissítés
  if (DOM.notesSaveStatus) {
    const multText = multiplier > 1.0 ? ` (${multiplier}x szorzó)` : '';
    DOM.notesSaveStatus.textContent = `+${finalAmount} XP szerzve: ${reason}${multText}`;
    setTimeout(() => {
      if (DOM.notesSaveStatus.textContent.includes("XP")) {
        DOM.notesSaveStatus.textContent = "Minden módosítás mentve.";
      }
    }, 2500);
  }
}

function checkLevelUp() {
  const xp = state.gamification.xp;
  let newLevel = 1;
  
  if (xp > 1500) newLevel = 5;
  else if (xp > 800) newLevel = 4;
  else if (xp > 400) newLevel = 3;
  else if (xp > 150) newLevel = 2;
  
  if (newLevel > state.gamification.level) {
    state.gamification.level = newLevel;
    alert(`🎉 Szintet léptél! Gratulálunk, mostantól ${newLevel}. szintű tanuló vagy!`);
    broadcastActivity('⭐', `szintet lépett! Új szint: ${newLevel}`);
  }
}

function updateStreak() {
  const gami = state.gamification;
  const todayStr = new Date().toDateString();
  
  if (gami.lastActivityDate) {
    const lastDate = new Date(gami.lastActivityDate);
    const today = new Date(todayStr);
    const diffTime = Math.abs(today - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      // Tegnap volt az utolsó aktivitás -> streak növekedés
      gami.streak += 1;
      gami.lastActivityDate = todayStr;
      addXP(10, "Napi tanulási sorozat folytatása");
    } else if (diffDays > 1) {
      // Kimaradt egy nap -> reset 1-re
      gami.streak = 1;
      gami.lastActivityDate = todayStr;
    }
    // Ha diffDays === 0, akkor ma már volt aktivitás, a streak nem változik
  } else {
    // Első aktivitás
    gami.streak = 1;
    gami.lastActivityDate = todayStr;
    addXP(10, "Első tanulási nap");
  }
}

const BADGES_LIST = [
  { id: "first_step", title: "Első Lépés", icon: "🚀", desc: "Fejezz be legalább 1 tételt (státusz: Megtanult)!", color: "badge-blue" },
  { id: "quiz_champion", title: "Kvíz Bajnok", icon: "🏆", desc: "Érj el 100%-os eredményt egy feleletválasztós kvízben!", color: "badge-gold" },
  { id: "lyric_knight", title: "Líra Lovagja", icon: "⚔️", desc: "sajátíts el (mastered) legalább 5 Líra kategóriájú tételt!", color: "badge-purple" },
  { id: "night_owl", title: "Éjszakai Bagoly", icon: "🦉", desc: "Tanulj éjszaka (este 10 és hajnali 4 között)!", color: "badge-blue" },
  { id: "streak_champion", title: "Streak Bajnok", icon: "🔥", desc: "Érj el legalább 3 napos tanulási sorozatot (Streak)!", color: "badge-gold" }
];

function checkBadges() {
  const gami = state.gamification;
  if (!gami.unlockedBadges) gami.unlockedBadges = [];
  
  // 1. Első Lépés
  if (!gami.unlockedBadges.includes("first_step")) {
    let masteredCount = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.includes('_status_') && localStorage.getItem(key) === 'mastered') {
        masteredCount++;
      }
    }
    if (masteredCount >= 1) {
      unlockBadge("first_step");
    }
  }
  
  // 2. Líra Lovagja (5 mastered Líra tétel)
  if (!gami.unlockedBadges.includes("lyric_knight")) {
    let masteredLira = 0;
    state.topicsMetadata.literature.forEach(topic => {
      if (topic.category.includes("Líra")) {
        const key = `literature_status_${topic.id}`;
        if (localStorage.getItem(key) === 'mastered') {
          masteredLira++;
        }
      }
    });
    if (masteredLira >= 5) {
      unlockBadge("lyric_knight");
    }
  }
  
  // 3. Éjszakai bagoly (este 10 és hajnali 4 között)
  if (!gami.unlockedBadges.includes("night_owl")) {
    const hr = new Date().getHours();
    if (hr >= 22 || hr < 4) {
      unlockBadge("night_owl");
    }
  }
  
  // 4. Streak Bajnok (Streak >= 3)
  if (!gami.unlockedBadges.includes("streak_champion")) {
    if (gami.streak >= 3) {
      unlockBadge("streak_champion");
    }
  }
}

function unlockBadge(id) {
  const gami = state.gamification;
  if (!gami.unlockedBadges.includes(id)) {
    gami.unlockedBadges.push(id);
    const badge = BADGES_LIST.find(b => b.id === id);
    if (badge) {
      alert(`🏅 Jelvényt szereztél: ${badge.title}!\n"${badge.desc}"`);
      addXP(50, `Jelvény feloldása: ${badge.title}`);
      broadcastActivity('🏅', `feloldotta a(z) "${badge.title}" jelvényt!`);
    }
  }
}

function renderBadges() {
  if (!DOM.badgesGrid || !state.currentUser) return;
  DOM.badgesGrid.innerHTML = '';
  
  const unlocked = state.gamification.unlockedBadges || [];
  
  BADGES_LIST.forEach(b => {
    const isUnlocked = unlocked.includes(b.id);
    const div = document.createElement('div');
    div.className = `badge-item ${isUnlocked ? 'unlocked ' + b.color : 'locked'}`;
    div.setAttribute('data-tooltip', `${b.title}: ${b.desc} (${isUnlocked ? 'FELOLDVA' : 'ZÁROLVA'})`);
    
    div.innerHTML = `
      <div class="badge-icon-circle">${b.icon}</div>
      <div class="badge-title">${b.title}</div>
    `;
    
    DOM.badgesGrid.appendChild(div);
  });
  
  if (DOM.badgesCountText) {
    DOM.badgesCountText.textContent = `${unlocked.length} / ${BADGES_LIST.length} jelvény feloldva`;
  }
}

// -------------------------------------------------------------
// 22. GLOBÁLIS RANGLISTA (LEADERBOARD) LOGIKA
// -------------------------------------------------------------
async function renderLeaderboard() {
  if (!DOM.leaderboardList) return;
  DOM.leaderboardList.innerHTML = '<div class="loading-spinner" style="font-size:0.8rem;">Ranglista betöltése...</div>';
  
  let list = [];
  
  // 1. Megpróbáljuk betölteni Supabase-ből a felhőadatokat
  if (state.supabaseClient) {
    try {
      const { data, error } = await state.supabaseClient
        .from('litera_user_data')
        .select('email, data');
        
      if (!error && data) {
        data.forEach(row => {
          if (row.email === 'system_activity_feed') return; // Kihagyjuk a hírcsatornát a ranglistáról!
          
          const parsedData = row.data || {};
          const gKey = `litera_gamification_${row.email}`;
          let gData = {};
          
          if (parsedData[gKey]) {
            gData = typeof parsedData[gKey] === 'string' ? JSON.parse(parsedData[gKey]) : parsedData[gKey];
          }
          
          if (gData.xp !== undefined) {
            list.push({
              name: gData.name || row.email.split('@')[0],
              email: row.email,
              xp: gData.xp || 0,
              streak: gData.streak || 0,
              groupCode: gData.groupCode || ''
            });
          }
        });
      }
    } catch (e) {
      console.warn("Nem sikerült lekérni a felhő ranglistát:", e);
    }
  }
  
  // 2. Ha üres maradt a lista (pl. offline mód, vagy nincs Supabase), feltöltjük szimulált adatokkal
  if (list.length === 0) {
    const mockUsers = [
      { name: "Kovács Anna", email: "kovacsanna@pelda.hu", xp: 1240, streak: 5, groupCode: "12B_ELIT" },
      { name: "Nagy Péter", email: "nagypeter@pelda.hu", xp: 950, streak: 3, groupCode: "12B_ELIT" },
      { name: "Szabó Bence", email: "szabobence@pelda.hu", xp: 810, streak: 4, groupCode: "baratok" },
      { name: "Tóth Zsófia", email: "tothzsofia@pelda.hu", xp: 420, streak: 1, groupCode: "" }
    ];
    list = [...mockUsers];
    
    // Hozzáadjuk a jelenlegi felhasználót is a mock listához
    if (state.currentUser) {
      list.push({
        name: state.currentUser.name,
        email: state.currentUser.email,
        xp: state.gamification.xp,
        streak: state.gamification.streak,
        groupCode: state.gamification.groupCode || ''
      });
    }
  } else {
    // Ha van felhő lista, de a saját aktuális gyorstárazott adatunk még nem mentődött fel, cseréljük/illesszük be a legfrissebbet
    if (state.currentUser) {
      const selfIndex = list.findIndex(u => u.email === state.currentUser.email);
      const selfObj = {
        name: state.currentUser.name,
        email: state.currentUser.email,
        xp: state.gamification.xp,
        streak: state.gamification.streak,
        groupCode: state.gamification.groupCode || ''
      };
      if (selfIndex !== -1) {
        list[selfIndex] = selfObj;
      } else {
        list.push(selfObj);
      }
    }
  }
  
  // 3. Rendezés XP alapján csökkenő sorrendbe
  list.sort((a, b) => b.xp - a.xp);
  
  // Nap Királya detektálása a globális listából
  const kingUser = list[0];
  const kingBanner = document.getElementById('king-of-the-day-banner');
  const kingText = document.getElementById('king-text');
  
  if (kingBanner && kingText && kingUser && kingUser.xp > 0) {
    kingBanner.style.display = 'flex';
    const isSelfKing = state.currentUser && kingUser.email === state.currentUser.email;
    if (isSelfKing) {
      kingText.innerHTML = `👑 <strong>TE VAGY A NAP KIRÁLYA!</strong> Védd meg a trónodat! (${kingUser.xp} XP, 🔥 ${kingUser.streak} nap)`;
    } else {
      kingText.innerHTML = `🏆 <strong>A NAP KIRÁLYA:</strong> ${kingUser.name} (${kingUser.xp} XP, 🔥 ${kingUser.streak} nap) – Előzd meg a ranglistán!`;
    }
  } else if (kingBanner) {
    kingBanner.style.display = 'none';
  }
  
  // Szűrés Csoportkód alapján, ha a csoportos fül aktív
  let filteredList = list;
  const currentFilter = state.leaderboardFilter || 'global';
  
  const lbTitle = document.getElementById('leaderboard-title');
  const lbSubtitle = document.getElementById('leaderboard-subtitle');
  
  if (currentFilter === 'group') {
    if (lbTitle) lbTitle.textContent = '🏆 Csoportos Ranglista';
    const myGroup = (state.gamification.groupCode || '').trim();
    if (lbSubtitle) lbSubtitle.textContent = myGroup ? `Csoport: ${myGroup}` : 'Nincs csoportkód megadva';
    
    if (!myGroup) {
      DOM.leaderboardList.innerHTML = '<div style="font-size:0.8rem; text-align:center; color:var(--text-muted); padding:20px 10px;">Adj meg egy csoportkódot a profilodban a szűréshez!</div>';
      return;
    }
    
    filteredList = list.filter(item => (item.groupCode || '').trim().toLowerCase() === myGroup.toLowerCase());
  } else {
    if (lbTitle) lbTitle.textContent = '🏆 Országos Ranglista';
    if (lbSubtitle) lbSubtitle.textContent = 'A legtöbb XP-vel rendelkező diákok';
  }
  
  // 4. Kirajzolás
  DOM.leaderboardList.innerHTML = '';
  if (filteredList.length === 0) {
    DOM.leaderboardList.innerHTML = '<div style="font-size:0.8rem; text-align:center; color:var(--text-muted); padding:20px 10px;">A csoportod még üres. Hívd meg a barátaidat!</div>';
  } else {
    filteredList.slice(0, 10).forEach((item, index) => {
      const isSelf = state.currentUser && item.email === state.currentUser.email;
      const rankInfo = getRankTitle(index + 1);
      
      const div = document.createElement('div');
      div.className = `leaderboard-item ${isSelf ? 'me' : ''}`;
      div.innerHTML = `
        <div class="leaderboard-left" style="display:flex; align-items:center; gap:8px; flex-grow:1;">
          <span class="leaderboard-position leaderboard-position-${index + 1}">${index + 1}</span>
          <div style="display:flex; flex-direction:column; gap:2px; align-items:flex-start;">
            <span class="leaderboard-name" style="font-weight:600; font-size:0.85rem;">${item.name} ${isSelf ? ' (Te)' : ''}</span>
            <span class="rank-badge ${rankInfo.class}" style="font-size:0.6rem; align-self:flex-start;">${rankInfo.icon} ${rankInfo.title}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:12px; shrink:0;">
          <span style="font-size:0.7rem; color:#ff9500;" title="Streak">🔥 ${item.streak}</span>
          <span class="leaderboard-xp" style="font-weight:700; color:var(--text-main); font-size:0.85rem;">${item.xp} XP</span>
        </div>
      `;
      DOM.leaderboardList.appendChild(div);
    });
  }
  
  // Lekérjük és frissítjük az aktivitási feed-et is
  fetchActivityFeed();
}

// -------------------------------------------------------------
// 23. INTERAKTÍV FOGALOMTÉRKÉP (MIND MAP) LOGIKA
// -------------------------------------------------------------
function toggleMindMap() {
  if (!state.currentTopicId) return;
  const panel = DOM.mindmapPanel;
  if (!panel) return;
  
  const isHidden = panel.style.display === 'none';
  panel.style.display = isHidden ? 'block' : 'none';
  
  if (isHidden) {
    const subject = state.currentSubject;
    const topicId = state.currentTopicId;
    const data = state.loadedTopicsData[subject][topicId];
    if (data) {
      drawMindMap(topicId, data, subject);
    }
  }
}

function drawMindMap(topicId, data, subject) {
  const svg = DOM.mindmapSvg;
  if (!svg) return;
  svg.innerHTML = ''; // clear
  
  const width = svg.clientWidth || svg.getBoundingClientRect().width || 600;
  const height = svg.clientHeight || svg.getBoundingClientRect().height || 350;
  const cx = width / 2;
  const cy = height / 2;
  
  const meta = state.topicsMetadata[subject].find(t => t.id === topicId);
  const title = meta ? meta.title : "Tétel";
  
  // Neon glow filterek definiálása
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <filter id="glow-blue-mm" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  `;
  svg.appendChild(defs);
  
  // Fő ágak
  const branches = [
    { label: "Vázlat", color: "var(--system-blue)", tags: meta ? meta.tags.slice(0, 2) : [] },
    { label: "Bevezetés", color: "var(--system-purple)", tags: ["Tétel-cél", "Fő téma"] },
    { label: "Háttér", color: "var(--system-green)", tags: meta ? [meta.era.split('/')[0].trim()] : ["Korszak"] },
    { label: "Elemzés", color: "var(--system-blue)", tags: data.keyWorks && data.keyWorks.length > 0 ? data.keyWorks.slice(0, 2).map(w => w.title.substring(0, 10) + "..") : ["Művek"] },
    { label: "Összegzés", color: "var(--system-purple)", tags: ["Befejezés", "Hatás"] }
  ];
  
  // 1. Vonalak kirajzolása (hogy a körök a vonalak felett legyenek)
  branches.forEach((b, idx) => {
    const angle = (idx * 2 * Math.PI) / branches.length - Math.PI / 2;
    const bx = cx + Math.cos(angle) * 105;
    const by = cy + Math.sin(angle) * 105;
    
    // Fő vonal a középpontból az ágba
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", cx);
    line.setAttribute("y1", cy);
    line.setAttribute("x2", bx);
    line.setAttribute("y2", by);
    line.setAttribute("class", "mindmap-link active");
    line.setAttribute("style", `stroke: ${b.color};`);
    svg.appendChild(line);
    
    // Levél vonalak (keywords)
    b.tags.forEach((tag, tIdx) => {
      const tAngle = angle + (tIdx - (b.tags.length - 1) / 2) * 0.55;
      const lx = bx + Math.cos(tAngle) * 55;
      const ly = by + Math.sin(tAngle) * 55;
      
      const leafLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
      leafLine.setAttribute("x1", bx);
      leafLine.setAttribute("y1", by);
      leafLine.setAttribute("x2", lx);
      leafLine.setAttribute("y2", ly);
      leafLine.setAttribute("class", "mindmap-link");
      leafLine.setAttribute("style", `stroke: ${b.color}; opacity: 0.6;`);
      svg.appendChild(leafLine);
      
      // Levél node rajzolása
      const leafNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
      leafNode.setAttribute("class", "mindmap-node leaf");
      
      const leafCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      leafCircle.setAttribute("cx", lx);
      leafCircle.setAttribute("cy", ly);
      leafCircle.setAttribute("r", 5);
      leafCircle.setAttribute("style", `stroke: ${b.color};`);
      leafNode.appendChild(leafCircle);
      
      const leafText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      leafText.setAttribute("x", lx);
      leafText.setAttribute("y", ly + 14);
      leafText.setAttribute("class", "mindmap-text");
      leafText.textContent = tag;
      leafNode.appendChild(leafText);
      
      svg.appendChild(leafNode);
    });
  });
  
  // 2. Fő ág körök rajzolása
  branches.forEach((b, idx) => {
    const angle = (idx * 2 * Math.PI) / branches.length - Math.PI / 2;
    const bx = cx + Math.cos(angle) * 105;
    const by = cy + Math.sin(angle) * 105;
    
    const branchG = document.createElementNS("http://www.w3.org/2000/svg", "g");
    branchG.setAttribute("class", "mindmap-node branch");
    
    const branchCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    branchCircle.setAttribute("cx", bx);
    branchCircle.setAttribute("cy", by);
    branchCircle.setAttribute("r", 20);
    branchCircle.setAttribute("style", `stroke: ${b.color};`);
    branchG.appendChild(branchCircle);
    
    const branchText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    branchText.setAttribute("x", bx);
    branchText.setAttribute("y", by + 3);
    branchText.setAttribute("class", "mindmap-text");
    branchText.textContent = b.label;
    branchG.appendChild(branchText);
    
    svg.appendChild(branchG);
  });
  
  // 3. Központi tétel kör rajzolása
  const centerG = document.createElementNS("http://www.w3.org/2000/svg", "g");
  centerG.setAttribute("class", "mindmap-node center");
  centerG.setAttribute("filter", "url(#glow-blue-mm)");
  
  const centerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  centerCircle.setAttribute("cx", cx);
  centerCircle.setAttribute("cy", cy);
  centerCircle.setAttribute("r", 34);
  centerG.appendChild(centerCircle);
  
  const centerText = document.createElementNS("http://www.w3.org/2000/svg", "text");
  centerText.setAttribute("x", cx);
  centerText.setAttribute("y", cy + 4);
  centerText.setAttribute("class", "mindmap-text");
  
  // Rövidített tétel cím középre
  const displayTitle = title.length > 9 ? title.substring(0, 7) + ".." : title;
  centerText.textContent = displayTitle;
  centerG.appendChild(centerText);
  svg.appendChild(centerG);
}

// =============================================================
// SZOCIÁLIS ÉS KOMPETITÍV BARÁTI REND-FUNKCIÓK SEGÉDFÜGGVÉNYEI
// =============================================================

function getRankTitle(rank) {
  if (rank === 1) return { title: 'Dux (Császár)', class: 'rank-dux', icon: '👑' };
  if (rank <= 3) return { title: 'Optimates (Elit)', class: 'rank-optimates', icon: '⚡' };
  if (rank <= 10) return { title: 'Cohors (Harcos)', class: 'rank-cohors', icon: '⚔️' };
  return { title: 'Tiro (Újonc)', class: 'rank-tiro', icon: '🛡️' };
}

async function broadcastActivity(icon, text) {
  if (!state.supabaseClient || !state.currentUser) return;
  try {
    const { data, error } = await state.supabaseClient
      .from('litera_user_data')
      .select('data')
      .eq('email', 'system_activity_feed')
      .single();
      
    let feed = [];
    if (!error && data && data.data && data.data.feed) {
      feed = Array.isArray(data.data.feed) ? data.data.feed : [];
    }
    
    const newItem = {
      id: Date.now() + Math.random().toString(36).substr(2, 4),
      user: state.currentUser.name,
      groupCode: state.gamification.groupCode || '',
      icon: icon,
      text: text,
      timestamp: new Date().toISOString()
    };
    
    feed.unshift(newItem);
    if (feed.length > 35) {
      feed = feed.slice(0, 35);
    }
    
    await state.supabaseClient
      .from('litera_user_data')
      .upsert({ email: 'system_activity_feed', data: { feed: feed } });
      
    renderActivityFeed(feed);
  } catch (err) {
    console.warn("Nem sikerült az aktivitás megosztása:", err);
  }
}

function renderActivityFeed(feed) {
  const feedList = document.getElementById('feed-list');
  if (!feedList) return;
  
  if (!feed || feed.length === 0) {
    feedList.innerHTML = '<div class="feed-item text-muted" style="font-size:0.8rem; text-align:center; padding:12px 0; width:100%;">Nincs friss aktivitás. Kezdjetek el tanulni!</div>';
    return;
  }
  
  const myGroup = (state.gamification.groupCode || '').trim().toLowerCase();
  
  // Ha Csoportos módban vagyunk, vagy a felhasználónak be van állítva csoportkódja,
  // szűrjük a feedet, hogy csak a csoporttagok aktivitása jelenjen meg.
  let displayFeed = feed;
  if (myGroup) {
    displayFeed = feed.filter(item => {
      const itemGroup = (item.groupCode || '').trim().toLowerCase();
      return itemGroup === myGroup;
    });
  }
  
  if (displayFeed.length === 0) {
    feedList.innerHTML = '<div class="feed-item text-muted" style="font-size:0.8rem; text-align:center; padding:12px 0; width:100%;">Nincs csoportos aktivitás. Legyél te az első!</div>';
    return;
  }
  
  feedList.innerHTML = '';
  displayFeed.slice(0, 10).forEach(item => {
    const div = document.createElement('div');
    div.className = 'feed-item';
    div.style.width = '100%';
    
    const timeStr = formatTimeAgo(new Date(item.timestamp));
    
    div.innerHTML = `
      <span class="feed-item-icon">${item.icon}</span>
      <div style="display:flex; flex-direction:column; gap:2px; align-items:flex-start;">
        <span style="font-weight:700; font-size:0.8rem; color:var(--text-main);">${item.user}</span>
        <span style="font-size:0.75rem; color:var(--text-muted); text-align:left;">${item.text}</span>
      </div>
      <span class="feed-item-time" style="margin-left:auto; font-size:0.65rem; color:var(--text-muted);">${timeStr}</span>
    `;
    feedList.appendChild(div);
  });
}

function formatTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return 'most';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}p`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}ó`;
  return date.toLocaleDateString('hu-HU', { month: 'short', day: 'numeric' });
}

async function fetchActivityFeed() {
  if (!state.supabaseClient) return;
  try {
    const { data, error } = await state.supabaseClient
      .from('litera_user_data')
      .select('data')
      .eq('email', 'system_activity_feed')
      .single();
      
    if (!error && data && data.data && data.data.feed) {
      renderActivityFeed(data.data.feed);
    } else {
      renderActivityFeed([]);
    }
  } catch (err) {
    console.warn("Nem sikerült lekérni a feedet:", err);
  }
}

function changeSubject(subject) {
  state.currentSubject = subject;
  DOM.subjectButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subject === subject);
  });
  renderCategoryFilters();
  renderDashboardGrid();
  updateGlobalProgress();
}

function checkUrlChallenge() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('challenge') === 'true') {
    const topicId = parseInt(urlParams.get('topic'));
    const subject = urlParams.get('subject') || 'literature';
    const score = parseInt(urlParams.get('score'));
    const total = parseInt(urlParams.get('total'));
    const sender = urlParams.get('sender') || 'Valaki';
    
    state.activeChallenge = {
      topicId,
      subject,
      senderScore: score,
      senderTotal: total,
      senderName: sender
    };
    
    const challengeOverlay = document.getElementById('challenge-overlay');
    const challengeDesc = document.getElementById('challenge-desc');
    const challengeSender = document.getElementById('challenge-sender-name');
    const challengeTopic = document.getElementById('challenge-topic-name');
    const challengeScore = document.getElementById('challenge-sender-score');
    
    if (challengeOverlay) {
      if (challengeSender) challengeSender.textContent = sender;
      if (challengeScore) challengeScore.textContent = `${score} / ${total}`;
      
      const metaArray = state.topicsMetadata[subject];
      const meta = metaArray ? metaArray.find(t => t.id === topicId) : null;
      if (challengeTopic) {
        challengeTopic.textContent = meta ? meta.title : `Tétel #${topicId}`;
      }
      
      if (challengeDesc) {
        challengeDesc.innerHTML = `<strong>${sender}</strong> kihívott egy párbajra! Elért eredménye: <strong>${score} / ${total}</strong>. Elfogadod a kihívást?`;
      }
      
      challengeOverlay.style.display = 'flex';
    }
    
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }
}

function copyChallengeLink() {
  const qState = state.quizState;
  if (!state.currentTopicId) return;
  
  const senderName = state.currentUser ? state.currentUser.name : 'Egyik barátod';
  const topicId = state.currentTopicId;
  const subject = state.currentSubject;
  const score = qState.score;
  const total = qState.questions.length;
  
  const urlObj = new URL(window.location.href);
  urlObj.searchParams.set('challenge', 'true');
  urlObj.searchParams.set('topic', topicId);
  urlObj.searchParams.set('subject', subject);
  urlObj.searchParams.set('score', score);
  urlObj.searchParams.set('total', total);
  urlObj.searchParams.set('sender', senderName);
  
  const challengeUrl = urlObj.toString();
  
  navigator.clipboard.writeText(challengeUrl).then(() => {
    alert("⚔️ Kihívás link kimásolva a vágólapra! Küldd el a barátodnak!");
  }).catch(err => {
    console.error("Hiba a másolásnál:", err);
    prompt("Másold ki a linket manuálisan:", challengeUrl);
  });
}
