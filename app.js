// literaErettsegi - Alkalmazás Logika

// -------------------------------------------------------------
// 1. GLOBÁLIS ÁLLAPOT (STATE)
// -------------------------------------------------------------
const state = {
  currentSubject: 'literature', // 'literature' | 'grammar'
  topicsMetadata: {
    literature: [],
    grammar: []
  },
  loadedTopicsData: {
    literature: {},
    grammar: {}
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
  }
};

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
  moonIcon: document.querySelector('.moon-icon')
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
  ]
};

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
  
  // Dinamikus kategóriák feltöltése
  renderCategoryFilters();
  
  // Felület renderelése
  renderDashboardGrid();
  updateGlobalProgress();
  setWelcomeMessage();
  
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
  DOM.viewWorkspace.style.display = 'none';
  DOM.viewDashboard.style.display = 'block';
  state.currentTopicId = null;
  window.scrollTo(0, 0);
  
  // Főoldal frissítése (pl. státuszok változhattak)
  renderDashboardGrid();
  updateGlobalProgress();
}

function showWorkspace(topicId) {
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
  const filePrefix = currentSubject === 'grammar' ? 'grammar' : 'topic';
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

    const card = document.createElement('div');
    card.className = 'topic-card glass-panel';
    card.innerHTML = `
      <div class="card-num">${topic.id}. Tétel</div>
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
    let evaluation = '';
    if (pct === 100) evaluation = 'Tökéletes megoldás! Kiválóan tudod ezt a tételt! Állítsd a státuszát "Megtanult"-ra!';
    else if (pct >= 80) evaluation = 'Nagyszerű eredmény! Már nagyon jól megy a tétel, csak így tovább!';
    else if (pct >= 50) evaluation = 'Jó alap, de érdemes még átolvasnod a kidolgozott anyagot és a villámkártyákat!';
    else evaluation = 'Ez most nem sikerült túl jól, de ne csüggedj! Olvasd át újra a tételt, és próbáld meg újra a kvízt!';
    
    DOM.quizResultText.textContent = evaluation;
    
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
      localStorage.setItem(notesKey, DOM.notesTextarea.value);
      DOM.notesSaveStatus.textContent = "Minden módosítás mentve.";
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
      localStorage.setItem(statusKey, DOM.statusSelect.value);
      updateGlobalProgress();
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
    DOM.flashcard.classList.toggle('is-flipped');
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
}
