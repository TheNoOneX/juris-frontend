/*************************
 * GLOBAL CONFIG
 *************************/
const API_BASE = "https://juris-backend-glpe.onrender.com";

/*************************
 * LANGUAGE SELECTION
 * 
 * 
 * 
 * 
 * 
 *************************/
const translations = {
  English: {
    /* ===== INDEX / COMMON ===== */
    app_name: "Democratizing Justice for the New India",
    tagline: "Legal help made simple",
    select_language: "Select your language",
    continue: "Continue",

    /* ===== ACTION PAGE ===== */
    choose_help: "How can we help?",
    write_problem: "Write your problem",
    upload_document: "Upload document",
    speak_problem: "Speak your problem",

    /* ===== WRITE PAGE ===== */
    write_title: "✍️ Write Your Problem",
    write_placeholder: "Write your problem here...",
    write_example: "Example: My landlord is not returning my deposit",
    write_output_level_title: "Output Detail Level",
    write_level_basic: "Basic",
    write_level_medium: "Medium",
    write_level_advanced: "Advanced",

    /* ===== UPLOAD PAGE ===== */
    upload_title: "📄 Upload Document",
    upload_text: "Take a photo or upload a document",
    upload_output_level_title: "Output Detail Level",
    upload_level_basic: "Basic",
    upload_level_medium: "Medium",
    upload_level_advanced: "Advanced",

    /* ===== VOICE PAGE ===== */
    voice_title: "🎙️ Speak Your Problem",
    voice_hint: "Tap the mic and speak",
    what_we_heard: "What we heard:",
    voice_output_level_title: "Output Detail Level",
    voice_level_basic: "Basic",
    voice_level_medium: "Medium",
    voice_level_advanced: "Advanced",

    /* ===== RESULT PAGE ===== */
    result_title: "📄 Your Legal Help",
    based_on_law: "Based on Indian law",
    summary: "Summary",
    what_wrong: "What is wrong",
    law_applied: "Law Applied",
    law_source: "Source: Government of India",
    next_steps: "What you should do",
    references: "References",

    /* ===== BUTTONS ===== */
    copy: "Copy",
    print: "Print"
   },

  Hindi: {
    app_name: "नए भारत के लिए न्याय को सरल बनाना",
    tagline: "कानूनी सहायता अब आसान",
    select_language: "भाषा चुनें",
    continue: "आगे बढ़ें",

    choose_help: "हम आपकी कैसे मदद कर सकते हैं?",
    write_problem: "अपनी समस्या लिखें",
    upload_document: "दस्तावेज़ अपलोड करें",
    speak_problem: "अपनी समस्या बोलें",

    write_title: "✍️ अपनी समस्या लिखें",
    write_placeholder: "यहाँ अपनी समस्या लिखें...",
    write_example: "उदाहरण: मेरा मकान मालिक मेरी जमा राशि वापस नहीं दे रहा है",
    write_output_level_title: "आउटपुट विवरण स्तर",
    write_level_basic: "मूल",
    write_level_medium: "मध्यम",
    write_level_advanced: "उन्नत",

    upload_title: "📄 दस्तावेज़ अपलोड करें",
    upload_text: "फोटो लें या दस्तावेज़ अपलोड करें",
    upload_output_level_title: "आउटपुट विवरण स्तर",
    upload_level_basic: "मूल",
    upload_level_medium: "मध्यम",
    upload_level_advanced: "उन्नत",

    voice_title: "🎙️ अपनी समस्या बोलें",
    voice_hint: "माइक दबाएँ और बोलें",
    what_we_heard: "हमने यह सुना:",
    voice_output_level_title: "आउटपुट विवरण स्तर",
    voice_level_basic: "मूल",
    voice_level_medium: "मध्यम",
    voice_level_advanced: "उन्नत",

    result_title: "📄 आपकी कानूनी सहायता",
    based_on_law: "भारतीय कानून पर आधारित",
    summary: "सारांश",
    what_wrong: "क्या गलत है",
    law_applied: "लागू कानून",
    law_source: "स्रोत: भारत सरकार",
    next_steps: "अब आपको क्या करना चाहिए",
    references: "संदर्भ",

    copy: "कॉपी करें",
    print: "प्रिंट करें"
   },

  Marathi: {
    app_name: "नवीन भारतासाठी न्याय सुलभ करणे",
    tagline: "सोप्या पद्धतीने कायदेशीर मदत",
    select_language: "भाषा निवडा",
    continue: "पुढे जा",

    choose_help: "आम्ही तुम्हाला कशी मदत करू?",
    write_problem: "तुमची समस्या लिहा",
    upload_document: "दस्तऐवज अपलोड करा",
    speak_problem: "तुमची समस्या बोला",

    write_title: "✍️ तुमची समस्या लिहा",
    write_placeholder: "येथे तुमची समस्या लिहा...",
    write_example: "उदाहरण: घरमालक माझी ठेव परत देत नाही",
    write_output_level_title: "आउटपुट तपशील स्तर",
    write_level_basic: "मूलभूत",
    write_level_medium: "मध्यम",
    write_level_advanced: "प्रगत",

    upload_title: "📄 दस्तऐवज अपलोड करा",
    upload_text: "फोटो घ्या किंवा दस्तऐवज अपलोड करा",
    upload_output_level_title: "आउटपुट तपशील स्तर",
    upload_level_basic: "मूलभूत",
    upload_level_medium: "मध्यम",
    upload_level_advanced: "प्रगत",

    voice_title: "🎙️ तुमची समस्या बोला",
    voice_hint: "माइक दाबा आणि बोला",
    what_we_heard: "आम्ही ऐकले:",
    voice_output_level_title: "आउटपुट तपशील स्तर",
    voice_level_basic: "मूलभूत",
    voice_level_medium: "मध्यम",
    voice_level_advanced: "प्रगत",

    result_title: "📄 तुमची कायदेशीर मदत",
    based_on_law: "भारतीय कायद्यावर आधारित",
    summary: "सारांश",
    what_wrong: "काय चुकीचे आहे",
    law_applied: "लागू कायदा",
    law_source: "स्रोत: भारत सरकार",
    next_steps: "आता काय करावे",
    references: "संदर्भ",

    copy: "कॉपी करा",
    print: "प्रिंट करा"
  },

  Telugu: { 
    app_name: "కొత్త భారతదేశానికి న్యాయాన్ని సులభతరం చేయడం",
    tagline: "చట్టపరమైన సహాయం సులభంగా",
    select_language: "మీ భాషను ఎంచుకోండి",
    continue: "కొనసాగించండి",

    choose_help: "మేము మీకు ఎలా సహాయం చేయగలము?",
    write_problem: "మీ సమస్యను వ్రాయండి",
    upload_document: "డాక్యుమెంట్ అప్‌లోడ్ చేయండి",
    speak_problem: "మీ సమస్యను మాట్లాడండి",

    write_title: "✍️ మీ సమస్యను వ్రాయండి",
    write_placeholder: "ఇక్కడ మీ సమస్యను వ్రాయండి...",
    write_example: "ఉదాహరణ: నా ఇంటి యజమాని డిపాజిట్ తిరిగి ఇవ్వడం లేదు",
    write_output_level_title: "ఫలిత వివరాల స్థాయి",
    write_level_basic: "ప్రాథమిక",
    write_level_medium: "మధ్యస్థ",
    write_level_advanced: "ఉన్నత",

    upload_title: "📄 డాక్యుమెంట్ అప్‌లోడ్ చేయండి",
    upload_text: "ఫోటో తీయండి లేదా డాక్యుమెంట్ అప్‌లోడ్ చేయండి",
    upload_output_level_title: "ఫలిత వివరాల స్థాయి",
    upload_level_basic: "ప్రాథమిక",
    upload_level_medium: "మధ్యస్థ",
    upload_level_advanced: "ఉన్నత",

    voice_title: "🎙️ మీ సమస్యను మాట్లాడండి",
    voice_hint: "మైక్ నొక్కి మాట్లాడండి",
    what_we_heard: "మేము విన్నది:",
    voice_output_level_title: "ఫలిత వివరాల స్థాయి",
    voice_level_basic: "ప్రాథమిక",
    voice_level_medium: "మధ్యస్థ",
    voice_level_advanced: "ఉన్నత",

    result_title: "📄 మీ చట్టపరమైన సహాయం",
    based_on_law: "భారతీయ చట్టాల ఆధారంగా",
    summary: "సారాంశం",
    what_wrong: "ఏం తప్పు జరిగింది",
    law_applied: "వర్తించే చట్టం",
    law_source: "మూలం: భారత ప్రభుత్వం",
    next_steps: "మీరు చేయాల్సినది",
    references: "సూచనలు",

    copy: "కాపీ చేయండి",
    print: "ప్రింట్ చేయండి"
  },

  Tamil: {
    app_name: "புதிய இந்தியாவிற்கான நீதியை எளிமைப்படுத்துதல்",
    tagline: "சட்ட உதவி எளிதாக",
    select_language: "உங்கள் மொழியை தேர்வு செய்யவும்",
    continue: "தொடரவும்",

    choose_help: "நாங்கள் உங்களுக்கு எப்படி உதவலாம்?",
    write_problem: "உங்கள் பிரச்சினையை எழுதுங்கள்",
    upload_document: "ஆவணத்தை பதிவேற்றவும்",
    speak_problem: "உங்கள் பிரச்சினையை பேசுங்கள்",

    write_title: "✍️ உங்கள் பிரச்சினையை எழுதுங்கள்",
    write_placeholder: "இங்கே உங்கள் பிரச்சினையை எழுதுங்கள்...",
    write_example: "உதாரணம்: என் வீட்டு உரிமையாளர் வைப்பு தொகையை திருப்பி தரவில்லை",
    write_output_level_title: "விளைவின் விவர நிலை",
    write_level_basic: "அடிப்படை",
    write_level_medium: "நடுத்தர",
    write_level_advanced: "மேம்பட்ட",

    upload_title: "📄 ஆவணத்தை பதிவேற்றவும்",
    upload_text: "புகைப்படம் எடுக்கவும் அல்லது ஆவணத்தை பதிவேற்றவும்",
    upload_output_level_title: "விளைவின் விவர நிலை",
    upload_level_basic: "அடிப்படை",
    upload_level_medium: "நடுத்தர",
    upload_level_advanced: "மேம்பட்ட",

    voice_title: "🎙️ உங்கள் பிரச்சினையை பேசுங்கள்",
    voice_hint: "மைக் அழுத்தி பேசுங்கள்",
    what_we_heard: "நாங்கள் கேட்டது:",
    voice_output_level_title: "விளைவின் விவர நிலை",
    voice_level_basic: "அடிப்படை",
    voice_level_medium: "நடுத்தர",
    voice_level_advanced: "மேம்பட்ட",

    result_title: "📄 உங்கள் சட்ட உதவி",
    based_on_law: "இந்திய சட்டத்தின் அடிப்படையில்",
    summary: "சுருக்கம்",
    what_wrong: "எது தவறு",
    law_applied: "பயன்படும் சட்டம்",
    law_source: "மூலம்: இந்திய அரசு",
    next_steps: "நீங்கள் செய்ய வேண்டியது",
    references: "ஆதாரங்கள்",

    copy: "நகலெடுக்க",
    print: "அச்சிடு"
  }
};



/*************************
 * FALLBACK LEGAL REFERENCES
 *************************/
const FALLBACK_REFERENCES = [
  {
    title: "India Code – Central Acts",
    url: "https://www.indiacode.nic.in"
  },
  {
    title: "Supreme Court of India",
    url: "https://www.sci.gov.in/"
  },
  {
    title: "National Legal Services Authority",
    url: "https://nalsa.gov.in/"
  },
  {
    title: "Law Commission of India",
    url: "https://lawcommissionofindia.nic.in/"
  }
];




// LANGUAGE CHANGE FUNCTIONS


function applyLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dictionary[key]) {
      el.innerText = dictionary[key];
    }
  });
}


function onLanguageChange() {
  const lang = document.getElementById("language").value;
  localStorage.setItem("selectedLanguage", lang);
  applyLanguage(lang);
}



function goNext() {
  const langSelect = document.getElementById("language");
  if (!langSelect) return;

  localStorage.setItem("selectedLanguage", langSelect.value);
  window.location.href = "action.html";
}



document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("documentFile");
  const fileNameText = document.getElementById("fileName");

  if (!fileInput || !fileNameText) return;

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      fileNameText.innerText = "Selected: " + fileInput.files[0].name;
    } else {
      fileNameText.innerText = "";
    }
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "English";

  // Apply language globally
  applyLanguage(savedLang);

  // Update dropdown if exists
  const langSelect = document.getElementById("language");
  if (langSelect) {
    langSelect.value = savedLang;
  }

  // Show language text if exists
  const langText = document.getElementById("langText");
  if (langText) {
    langText.innerText = "Language: " + savedLang;
  }
});

/*************************
 * LOADER (SAFE)
 *************************/
function showLoader(message = "Please wait...") {
  const loader = document.getElementById("loader");
  const text = document.getElementById("loaderText");

  if (!loader) return; // ✅ prevents crash

  if (text) text.innerText = message;
  loader.classList.remove("hidden");
}

function hideLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  loader.classList.add("hidden");
}

/*************************
 * TEXT INPUT
 *************************/
function saveProblem() {
  const input = document.getElementById("userProblem");
  if (!input) return;

  const text = input.value.trim();
  if (!text) {
    alert("Please write your problem");
    return;
  }

  const lang = localStorage.getItem("selectedLanguage") || "English";

  showLoader("Checking the law for you...");

  const formData = new FormData();
  formData.append("problem", text);
  formData.append("language", lang);

  fetch(`${API_BASE}/api/analyze-text`, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      hideLoader();
      localStorage.setItem("aiResult", JSON.stringify(data)); // ✅ FIX
      window.location.href = "result.html";
    })
    .catch(err => {
      hideLoader();
      alert("Something went wrong. Please try again.");
      console.error(err);
    });
}

/*************************
 * VOICE INPUT
 *************************/
/*************************
 * VOICE INPUT (FIXED)
 *************************/
let recognition;
let isRecording = false;
let finalTranscript = "";

function initVoiceRecognition() {
  const micBtn = document.getElementById("micButton");
  if (!micBtn) return;

  if (!("webkitSpeechRecognition" in window)) {
    alert("Voice input not supported in this browser");
    return;
  }

  const langMap = {
    English: "en-IN",
    Hindi: "hi-IN",
    Marathi: "mr-IN",
    Telugu: "te-IN",
    Tamil: "ta-IN"
  };

  recognition = new webkitSpeechRecognition();
  recognition.lang = langMap[localStorage.getItem("selectedLanguage")] || "en-IN";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onresult = (event) => {
    let interim = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const text = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += text + " ";
      } else {
        interim += text;
      }
    }

    const spoken = document.getElementById("spokenText");
    const status = document.getElementById("voiceStatus");
    if (spoken) spoken.innerText = finalTranscript + interim;
    if (status) status.innerText = "Listening… speak naturally. Press Continue when done.";
  };

  recognition.onerror = () => {
    stopRecordingUI();
  };

  recognition.onend = () => {
    if (isRecording) recognition.start(); // ✅ auto-continue on silence
  };
}

document.addEventListener("DOMContentLoaded", initVoiceRecognition);

function toggleRecording() {
  const micBtn = document.getElementById("micButton");
  const status = document.getElementById("voiceStatus");

  if (!isRecording) {
    finalTranscript = "";
    isRecording = true;
    recognition.start();
    micBtn.classList.add("recording");
    if (status) status.innerText = "Listening...";
  } else {
    isRecording = false;
    recognition.stop();
    stopRecordingUI();
  }
}

function stopRecordingUI() {
  const micBtn = document.getElementById("micButton");
  const status = document.getElementById("voiceStatus");
  if (micBtn) micBtn.classList.remove("recording");
  if (status) status.innerText = "Review text and press Continue";
}

function saveVoiceText() {
  const cleanedText = finalTranscript.replace(/\s+/g, " ").trim();
  if (!cleanedText) {
    alert("Please speak your problem first");
    return;
  }

  const lang = localStorage.getItem("selectedLanguage") || "English";
  showLoader("Understanding your voice...");

  const formData = new FormData();
  formData.append("problem", cleanedText);
  formData.append("language", lang);

  fetch(`${API_BASE}/api/analyze-text`, { method: "POST", body: formData })
    .then(res => res.json())
    .then(data => {
      hideLoader();
      localStorage.setItem("aiResult", JSON.stringify(data));
      window.location.href = "result.html";
    })
    .catch(() => {
      hideLoader();
      alert("Voice processing failed");
    });
}



/*************************
 * DOCUMENT UPLOAD
 *************************/
function saveDocument() {
  const input = document.getElementById("documentFile");

  if (!input || !input.files.length) {
    alert("Please upload a document");
    return;
  }

  const file = input.files[0];
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  if (!allowedTypes.includes(file.type)) {
    alert("Unsupported file type. Please upload image, PDF, or Word file.");
    return;
  }

  showLoader("Reading your document...");

  const formData = new FormData();
  formData.append("file", file);
  const lang = localStorage.getItem("selectedLanguage") || "English";
  formData.append("language", lang);


  fetch(`${API_BASE}/api/analyze-image`, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      hideLoader();
      localStorage.setItem("aiResult", JSON.stringify(data));
      window.location.href = "result.html";
    })
    .catch(err => {
      hideLoader();
      alert("Document analysis failed");
      console.error(err);
    });
}


/*************************
 * RESULT PAGE
 *************************/
document.addEventListener("DOMContentLoaded", () => {
  const summary = document.getElementById("summaryText");
  if (!summary) return; // ✅ only result page

  const raw = localStorage.getItem("aiResult");
  if (!raw || raw === "undefined") {
    summary.innerText = "No result found. Please try again.";
    return;
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    summary.innerText = "Error reading result.";
    return;
  }

  summary.innerText = data.summary || "No summary available";

  renderRisk(data.risk_level, data.risk_score);

  fillList("redFlags", data.red_flags);
  fillList("lawList", data.laws);
  fillList("nextSteps", data.actions);
  fillList("finalSummary", data.final_summary);
  fillReferences("references", data.references);
});



function fillList(id, items = []) {
  const ul = document.getElementById(id);
  if (!ul) return;

  ul.innerHTML = "";

  if (!Array.isArray(items) || items.length === 0) {
    const li = document.createElement("li");
    li.innerText = "No information available.";
    ul.appendChild(li);
    return;
  }

  items.forEach(item => {
    const li = document.createElement("li");
    let text = "";

    // -------- RED FLAGS --------
    if (item.title && item.reason) {
      text = `${item.title}: ${item.reason}`;
    }

    // -------- ACTIONS --------
    else if (item.step && item.why) {
      text = `${item.step} – ${item.why}`;
    }

    // -------- LAW OBJECT --------
    else if (item.act && item.section) {
      text = `${item.act} (${item.section})`;
      if (item.explanation) {
        text += ` – ${item.explanation}`;
      }
    }

    // -------- SIMPLE STRING --------
    else if (typeof item === "string") {
      text = item;
    }

    // -------- FALLBACK --------
    else if (item.text) {
      text = item.text;
    }

    // Render only meaningful content
    if (text.trim() !== "") {
      li.innerText = text;
      ul.appendChild(li);
    }
  });
}




function fillReferences(id, refs = []) {
  const ul = document.getElementById(id);
  if (!ul) return;

  ul.innerHTML = "";

  let finalRefs = [];

  // 1️⃣ Accept backend references (new object format)
  if (Array.isArray(refs)) {
    refs.forEach(ref => {
      if (typeof ref === "object" && ref.url) {
        finalRefs.push(ref);
      }
    });
  }

  // 2️⃣ Ensure minimum 2 references (fallback safety)
  if (finalRefs.length < 4) { 
    FALLBACK_REFERENCES.forEach(fallback => {
      if (!finalRefs.some(r => r.url === fallback.url)) {
        finalRefs.push(fallback);
      }
    });
  }

  // 3️⃣ Render references
  finalRefs.slice(0, 4).forEach(ref => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = ref.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerText = ref.title;

    li.appendChild(a);
    ul.appendChild(li);
  });
}



function renderRisk(riskLevel, riskScore) {
  const badge = document.getElementById("riskBadge");
  const scoreText = document.getElementById("riskScoreText");

  if (!badge || riskScore == null) return;

  badge.innerText =
    riskLevel === "LOW" ? "SAFE" :
    riskLevel === "MEDIUM" ? "RISKY" :
    "HIGH RISK – AVOID";

  badge.classList.remove("risk-low", "risk-medium", "risk-high");

  if (riskLevel === "LOW") badge.classList.add("risk-low");
  if (riskLevel === "MEDIUM") badge.classList.add("risk-medium");
  if (riskLevel === "HIGH") badge.classList.add("risk-high");

  scoreText.innerText = `Risk Score: ${riskScore}%`;
}


function copyResult() {
  const summary = document.getElementById("summaryText");
  if (!summary) return;

  navigator.clipboard.writeText(summary.innerText);
  alert("Copied to clipboard");
}


/*************************
 * GLOBAL SPEAKER CONTROLLER
 *************************/
let activeUtterance = null;
let activeSpeakerBtn = null;

function toggleSpeak(button) {
  const targetId = button.getAttribute("data-speak-target");
  if (!targetId) return;

  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  let text = "";

  // Handle list vs paragraph
  if (targetEl.tagName === "UL") {
    text = Array.from(targetEl.querySelectorAll("li"))
      .map(li => li.innerText)
      .join(". ");
  } else {
    text = targetEl.innerText;
  }

  text = text.trim();
  if (!text) {
    alert("Nothing to read here.");
    return;
  }

  // 🔁 If same button clicked again → stop
  if (activeSpeakerBtn === button) {
    stopSpeaking();
    return;
  }

  // 🛑 Stop any existing speech
  stopSpeaking();

  // 🎙️ Create new speech
  const utterance = new SpeechSynthesisUtterance(text);

  const langMap = {
    English: "en-IN",
    Hindi: "hi-IN",
    Marathi: "mr-IN",
    Telugu: "te-IN",
    Tamil: "ta-IN"
  };

  const selectedLang = localStorage.getItem("selectedLanguage") || "English";
  utterance.lang = langMap[selectedLang] || "en-IN";
  utterance.rate = 0.99;
  utterance.pitch = 1;

  utterance.onend = () => {
    stopSpeaking();
  };

  activeUtterance = utterance;
  activeSpeakerBtn = button;
  button.classList.add("active");

  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if (activeUtterance) {
    window.speechSynthesis.cancel();
    activeUtterance = null;
  }

  if (activeSpeakerBtn) {
    activeSpeakerBtn.classList.remove("active");
    activeSpeakerBtn = null;
  }
}





/*************************
 * RISK ANIMATION LOGIC
 *************************/
function animateRiskScore(targetScore, riskLevel) {
  const scoreElement = document.getElementById("riskScoreText");
  const badgeElement = document.getElementById("riskBadge");
  const cardElement = document.querySelector(".risk-card");

  if (!scoreElement || !badgeElement) return;

  // 1. Reset state
  let currentScore = 0;
  const duration = 1500; // 1.5 seconds animation
  const intervalTime = 20; 
  const steps = duration / intervalTime;
  const increment = targetScore / steps;

  badgeElement.innerText = "CALCULATING...";
  badgeElement.className = "risk-badge"; // Remove colors initially

  // 2. Animate Numbers
  const timer = setInterval(() => {
    currentScore += increment;
    
    if (currentScore >= targetScore) {
      currentScore = targetScore;
      clearInterval(timer);
      finalizeRiskUI(riskLevel, targetScore);
    }
    
    scoreElement.innerText = Math.floor(currentScore) + "%";
  }, intervalTime);
}

function finalizeRiskUI(level, score) {
  const badge = document.getElementById("riskBadge");
  const card = document.querySelector(".risk-card");
  
  // 3. Remove old classes
  badge.classList.remove("risk-low", "risk-medium", "risk-high");
  
  // 4. Apply Logic based on User Requirements
  // Green = Safe
  // Yellow = Moderate (1-2 Critical issues)
  // Red = High (>2 Critical issues)

  if (level === "LOW") {
    badge.innerText = "SAFE (NO RISK)";
    badge.classList.add("risk-low"); // Bright Green
    if(card) card.style.borderColor = "var(--success)";
  
  } else if (level === "MEDIUM") {
    badge.innerText = "MODERATE RISK";
    badge.classList.add("risk-medium"); // Bright Yellow
    if(card) card.style.borderColor = "var(--warning)";
  
  } else {
    badge.innerText = "HIGH RISK - WARNING";
    badge.classList.add("risk-high"); // Bright Red
    if(card) card.style.borderColor = "var(--danger)";
  }
}

/*************************
 * RESULT PAGE INITIALIZATION
 *************************/
document.addEventListener("DOMContentLoaded", () => {
  const summary = document.getElementById("summaryText");
  if (!summary) return; // Only run on result page

  const raw = localStorage.getItem("aiResult");
  if (!raw || raw === "undefined") {
    summary.innerText = "No result found. Please try again.";
    return;
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    summary.innerText = "Error reading result.";
    return;
  }

  summary.innerText = data.summary || "No summary available";

  // Get Score & Level from Backend (AI Logic)
  const score = data.risk_score !== undefined ? data.risk_score : 0; 
  const level = data.risk_level || "LOW";
  
  // Start Animation
  animateRiskScore(score, level);

  fillList("redFlags", data.red_flags);
  fillList("lawList", data.laws);
  fillList("nextSteps", data.actions);
  fillList("finalSummary", data.final_summary);
  fillReferences("references", data.references);
});

// ... (Keep the rest of your file: fillList, toggleSpeak, etc.) ...

/* =====================================================
   Output Detail Level (Verbosity) – Additive Support
   ===================================================== */

   (function () {
    const STORAGE_KEY = "output_detail_level";
  
    // Default to basic if not set
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, "basic");
    }
  
    // Restore selection on page load
    document.addEventListener("DOMContentLoaded", () => {
      const savedLevel = localStorage.getItem(STORAGE_KEY) || "basic";
      const radios = document.querySelectorAll('input[name="verbosity"]');
  
      radios.forEach(radio => {
        if (radio.value === savedLevel) {
          radio.checked = true;
        }
  
        radio.addEventListener("change", () => {
          localStorage.setItem(STORAGE_KEY, radio.value);
        });
      });
    });
  
    // Optional helper (non-breaking, safe to ignore if unused)
    window.getOutputDetailLevel = function () {
      return localStorage.getItem(STORAGE_KEY) || "basic";
    };
  })();
  





