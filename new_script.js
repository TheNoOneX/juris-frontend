/*************************
 * JURIS-AI Frontend JavaScript (OPTIMIZED & FIXED)
 * 

/*************************
 * GLOBAL CONFIG
 *************************/


const API_BASE = (() => {
  // Check if we're in production (HTTPS) or development (HTTP)
  const hostname = window.location.hostname;
  
  // Production
  if (hostname.includes('netlify.app') || hostname.includes('vercel.app')) {
    return 'https://juris-backend-glpe.onrender.com'; // Replace with your actual backend URL
  }
  
  // Local development
  return 'http://127.0.0.1:8000';
})();

// Request state management (prevents duplicate requests)
let isRequestInProgress = false;

// Constants
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const MAX_RETRY_ATTEMPTS = 2;


/*************************
 * UTILITY FUNCTIONS
 *************************/

/**
 * Safely escapes HTML to prevent XSS attacks
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Validates file size before upload
 */
function validateFileSize(file) {
  if (file.size > MAX_FILE_SIZE_BYTES) {
    alert(`File too large! Maximum size is ${MAX_FILE_SIZE_MB}MB`);
    return false;
  }
  return true;
}

/**
 * Gets verbosity level from UI
 * ✅ FIXED: Properly extracts selected verbosity
 */
function getVerbosityLevel() {
  const selected = document.querySelector('input[name="verbosity"]:checked');
  return selected ? selected.value : 'basic';
}

/**
 * Disables/enables buttons to prevent duplicate requests
 */
function setButtonState(disabled) {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.disabled = disabled;
    btn.style.opacity = disabled ? '0.6' : '1';
    btn.style.cursor = disabled ? 'not-allowed' : 'pointer';
  });
}


/*************************
 * LANGUAGE SELECTION
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
    final_summary_title: "Final Decision Summary",
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
    final_summary_title: "अंतिम निर्णय सारांश",
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
    final_summary_title: "अंतिम निर्णय सारांश",
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
    final_summary_title: "చివరి నిర్ణయ సారాంశం",
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
    final_summary_title: "இறுதி முடிவு சுருக்கம்",
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


/*************************
 * LANGUAGE FUNCTIONS
 *************************/

/**
 * Applies translations to all elements with data-i18n attribute
 */
function applyLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dictionary[key]) {
      el.innerText = dictionary[key];
    }
  });

  // Update placeholder attributes
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dictionary[key]) {
      el.placeholder = dictionary[key];
    }
  });
}

/**
 * Handles language change from dropdown
 */
function onLanguageChange() {
  const langSelect = document.getElementById("language");
  if (!langSelect) return;
  
  const lang = langSelect.value;
  localStorage.setItem("selectedLanguage", lang);
  applyLanguage(lang);
}

/**
 * Navigates to action page after language selection
 */
function goNext() {
  const langSelect = document.getElementById("language");
  if (!langSelect) return;

  localStorage.setItem("selectedLanguage", langSelect.value);
  window.location.href = "action.html";
}


/*************************
 * FILE INPUT HANDLER
 *************************/
document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("documentFile");
  const fileNameText = document.getElementById("fileName");

  if (fileInput && fileNameText) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileNameText.innerText = `Selected: ${file.name}`;
        
        // Validate file size
        if (!validateFileSize(file)) {
          fileInput.value = '';
          fileNameText.innerText = '';
        }
      } else {
        fileNameText.innerText = "";
      }
    });
  }
});


/*************************
 * INITIALIZATION
 *************************/
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
    langText.innerText = `Language: ${savedLang}`;
  }
});


/*************************
 * LOADER FUNCTIONS (IMPROVED)
 *************************/

/**
 * Shows loading overlay with custom message
 */
function showLoader(message = "Please wait...") {
  const loader = document.getElementById("loader");
  const text = document.getElementById("loaderText");

  if (!loader) return;

  if (text) text.innerText = message;
  loader.classList.remove("hidden");
  
  // Disable all buttons
  setButtonState(true);
}

/**
 * Hides loading overlay
 */
function hideLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  
  loader.classList.add("hidden");
  
  // Re-enable all buttons
  setButtonState(false);
}


/*************************
 * API REQUEST WRAPPER (NEW)
 *************************/

/**
 * Makes API request with retry logic and better error handling
 * ✅ NEW: Centralized API call function
 */
async function makeApiRequest(url, formData, retryCount = 0) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `Server error: ${response.status}`);
    }

    return await response.json();
    
  } catch (error) {
    // Retry logic for network errors
    if (retryCount < MAX_RETRY_ATTEMPTS && error.message.includes('fetch')) {
      console.log(`Retrying... Attempt ${retryCount + 1}/${MAX_RETRY_ATTEMPTS}`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      return makeApiRequest(url, formData, retryCount + 1);
    }
    
    throw error;
  }
}


/*************************
 * TEXT INPUT HANDLER
 * ✅ FIXED: Now properly sends verbosity parameter
 *************************/

/**
 * Analyzes user-typed problem text
 */
async function saveProblem() {
  // Prevent duplicate requests
  if (isRequestInProgress) {
    console.log("Request already in progress");
    return;
  }

  const input = document.getElementById("userProblem");
  if (!input) return;

  const text = input.value.trim();
  
  // Validate input
  if (!text) {
    alert("Please write your problem first");
    return;
  }

  if (text.length < 10) {
    alert("Please provide more details about your problem");
    return;
  }

  isRequestInProgress = true;
  const lang = localStorage.getItem("selectedLanguage") || "English";
  
  // ✅ FIXED: Get verbosity from UI
  const verbosity = getVerbosityLevel();

  showLoader("Analyzing your legal issue...");

  try {
    // Build form data
    const formData = new FormData();
    formData.append("problem", text);
    formData.append("language", lang);
    formData.append("verbosity", verbosity); // ✅ NOW PROPERLY SENT

    console.log(`Sending request: lang=${lang}, verbosity=${verbosity}`);

    // Make API call with retry
    const data = await makeApiRequest(`${API_BASE}/api/analyze-text`, formData);

    // Save and navigate
    localStorage.setItem("aiResult", JSON.stringify(data));
    window.location.href = "result.html";
    
  } catch (error) {
    hideLoader();
    console.error("Error:", error);
    
    // User-friendly error messages
    if (error.message.includes('fetch')) {
      alert("Network error. Please check your internet connection and try again.");
    } else {
      alert(`Analysis failed: ${error.message}`);
    }
    
  } finally {
    isRequestInProgress = false;
  }
}


/*************************
 * VOICE INPUT HANDLER
 * ✅ FIXED: Now properly sends verbosity parameter
 *************************/

let recognition;
let isRecording = false;
let finalTranscript = "";

/**
 * Initializes voice recognition
 */
function initVoiceRecognition() {
  const micBtn = document.getElementById("micButton");
  if (!micBtn) return;

  // Check browser support
  if (!("webkitSpeechRecognition" in window)) {
    alert("Voice input not supported in this browser. Please use Chrome or Edge.");
    micBtn.style.display = "none";
    return;
  }

  // Language mapping for speech recognition
  const langMap = {
    English: "en-IN",
    Hindi: "hi-IN",
    Marathi: "mr-IN",
    Telugu: "te-IN",
    Tamil: "ta-IN"
  };

  recognition = new webkitSpeechRecognition();
  const selectedLang = localStorage.getItem("selectedLanguage") || "English";
  recognition.lang = langMap[selectedLang] || "en-IN";
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    let interim = "";
    
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      
      if (event.results[i].isFinal) {
        finalTranscript += transcript + " ";
      } else {
        interim += transcript;
      }
    }

    // Update UI
    const spokenEl = document.getElementById("spokenText");
    const statusEl = document.getElementById("voiceStatus");
    
    if (spokenEl) {
      spokenEl.innerText = finalTranscript + interim;
    }
    
    if (statusEl) {
      statusEl.innerText = "Listening... Speak naturally.";
    }
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    stopRecordingUI();
    
    if (event.error === 'no-speech') {
      alert("No speech detected. Please try again.");
    } else if (event.error === 'not-allowed') {
      alert("Microphone access denied. Please enable it in your browser settings.");
    }
  };

  recognition.onend = () => {
    if (isRecording) {
      // Auto-restart if still recording
      try {
        recognition.start();
      } catch (e) {
        console.log("Recognition restart failed:", e);
      }
    }
  };
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initVoiceRecognition);

/**
 * Toggles voice recording on/off
 */
function toggleRecording() {
  const micBtn = document.getElementById("micButton");
  const statusEl = document.getElementById("voiceStatus");

  if (!isRecording) {
    // Start recording
    finalTranscript = "";
    isRecording = true;
    
    try {
      recognition.start();
      micBtn.classList.add("recording");
      if (statusEl) statusEl.innerText = "Listening...";
    } catch (e) {
      console.error("Failed to start recognition:", e);
      stopRecordingUI();
    }
    
  } else {
    // Stop recording
    isRecording = false;
    recognition.stop();
    stopRecordingUI();
  }
}

/**
 * Updates UI when recording stops
 */
function stopRecordingUI() {
  const micBtn = document.getElementById("micButton");
  const statusEl = document.getElementById("voiceStatus");
  
  if (micBtn) micBtn.classList.remove("recording");
  if (statusEl) statusEl.innerText = "Review your text and press Continue";
}

/**
 * Sends voice input for analysis
 * ✅ FIXED: Now properly sends verbosity parameter
 */
async function saveVoiceText() {
  // Prevent duplicate requests
  if (isRequestInProgress) return;

  const cleanedText = finalTranscript.replace(/\s+/g, " ").trim();
  
  // Validate input
  if (!cleanedText) {
    alert("Please speak your problem first");
    return;
  }

  if (cleanedText.length < 10) {
    alert("Please provide more details. Speak longer.");
    return;
  }

  isRequestInProgress = true;
  const lang = localStorage.getItem("selectedLanguage") || "English";
  
  // ✅ FIXED: Get verbosity from UI
  const verbosity = getVerbosityLevel();

  showLoader("Analyzing your voice input...");

  try {
    // Build form data
    const formData = new FormData();
    formData.append("problem", cleanedText);
    formData.append("language", lang);
    formData.append("verbosity", verbosity); // ✅ NOW PROPERLY SENT

    console.log(`Sending request: lang=${lang}, verbosity=${verbosity}`);

    // Make API call with retry
    const data = await makeApiRequest(`${API_BASE}/api/analyze-text`, formData);

    // Save and navigate
    localStorage.setItem("aiResult", JSON.stringify(data));
    window.location.href = "result.html";
    
  } catch (error) {
    hideLoader();
    console.error("Error:", error);
    alert(`Voice processing failed: ${error.message}`);
    
  } finally {
    isRequestInProgress = false;
  }
}


/*************************
 * DOCUMENT UPLOAD HANDLER
 * ✅ FIXED: Now properly sends verbosity parameter
 *************************/

/**
 * Uploads and analyzes document
 */
async function saveDocument() {
  // Prevent duplicate requests
  if (isRequestInProgress) return;

  const input = document.getElementById("documentFile");

  if (!input || !input.files.length) {
    alert("Please upload a document first");
    return;
  }

  const file = input.files[0];
  
  // Validate file type
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/webp",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  if (!allowedTypes.includes(file.type)) {
    alert("Unsupported file type. Please upload: JPG, PNG, PDF, or Word file.");
    return;
  }

  // Validate file size
  if (!validateFileSize(file)) {
    return;
  }

  isRequestInProgress = true;
  const lang = localStorage.getItem("selectedLanguage") || "English";
  
  // ✅ FIXED: Get verbosity from UI
  const verbosity = getVerbosityLevel();

  showLoader("Analyzing your document...");

  try {
    // Build form data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", lang);
    formData.append("verbosity", verbosity); // ✅ NOW PROPERLY SENT

    console.log(`Sending request: file=${file.name}, lang=${lang}, verbosity=${verbosity}`);

    // Make API call with retry
    const data = await makeApiRequest(`${API_BASE}/api/analyze-image`, formData);

    // Save and navigate
    localStorage.setItem("aiResult", JSON.stringify(data));
    window.location.href = "result.html";
    
  } catch (error) {
    hideLoader();
    console.error("Error:", error);
    
    // User-friendly error messages
    if (error.message.includes('413')) {
      alert(`File too large! Maximum size is ${MAX_FILE_SIZE_MB}MB`);
    } else if (error.message.includes('fetch')) {
      alert("Network error. Please check your internet connection.");
    } else {
      alert(`Document analysis failed: ${error.message}`);
    }
    
  } finally {
    isRequestInProgress = false;
  }
}


/*************************
 * RESULT PAGE RENDERING
 *************************/

/**
 * Fills a list element with array data
 * ✅ IMPROVED: Better handling of different data formats
 */
function fillList(id, items = []) {
  const ul = document.getElementById(id);
  if (!ul) return;

  ul.innerHTML = "";

  // Handle empty or invalid data
  if (!Array.isArray(items) || items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No information available.";
    ul.appendChild(li);
    return;
  }

  // Process each item
  items.forEach(item => {
    const li = document.createElement("li");
    let text = "";

    // Handle different data formats
    if (item.title && item.reason) {
      // Red flags format
      text = `${item.title}: ${item.reason}`;
    } else if (item.step && item.why) {
      // Actions format
      text = `${item.step} – ${item.why}`;
    } else if (item.act && item.section) {
      // Law format
      text = `${item.act} (${item.section})`;
      if (item.explanation) {
        text += ` – ${item.explanation}`;
      }
    } else if (typeof item === "string") {
      // Simple string
      text = item;
    } else if (item.text) {
      // Fallback text property
      text = item.text;
    }

    // Only add meaningful content
    if (text.trim()) {
      li.textContent = text; // Use textContent for XSS safety
      ul.appendChild(li);
    }
  });
}

/**
 * Fills references list with links
 * ✅ IMPROVED: Better reference parsing
 */
function fillReferences(id, refs = []) {
  const ul = document.getElementById(id);
  if (!ul) return;

  ul.innerHTML = "";

  let finalRefs = [];

  // Parse references from different formats
  if (Array.isArray(refs)) {
    refs.forEach(ref => {
      if (typeof ref === "string") {
        // Parse "URL - Title" format
        const parts = ref.split(' - ');
        if (parts.length >= 2) {
          finalRefs.push({
            url: parts[0].trim(),
            title: parts.slice(1).join(' - ').trim()
          });
        } else if (ref.startsWith('http')) {
          finalRefs.push({
            url: ref,
            title: ref
          });
        }
      } else if (typeof ref === "object" && ref.url) {
        finalRefs.push(ref);
      }
    });
  }

  // Add fallback references if needed
  if (finalRefs.length < 2) {
    FALLBACK_REFERENCES.forEach(fallback => {
      if (!finalRefs.some(r => r.url === fallback.url)) {
        finalRefs.push(fallback);
      }
    });
  }

  // Render references (max 5)
  finalRefs.slice(0, 5).forEach(ref => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = ref.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = ref.title || ref.url;

    li.appendChild(a);
    ul.appendChild(li);
  });
}

/**
 * Renders risk indicator (kept from original)
 */
function renderRisk(riskLevel, riskScore) {
  const badge = document.getElementById("riskBadge");
  const scoreText = document.getElementById("riskScoreText");

  if (!badge || riskScore == null) return;

  // Set badge text
  badge.innerText =
    riskLevel === "LOW" ? "SAFE" :
    riskLevel === "MEDIUM" ? "RISKY" :
    "HIGH RISK – AVOID";

  // Remove old classes
  badge.classList.remove("risk-low", "risk-medium", "risk-high");

  // Add appropriate class
  if (riskLevel === "LOW") badge.classList.add("risk-low");
  if (riskLevel === "MEDIUM") badge.classList.add("risk-medium");
  if (riskLevel === "HIGH") badge.classList.add("risk-high");

  // Set score text
  if (scoreText) {
    scoreText.innerText = `Risk Score: ${riskScore}%`;
  }
}

/**
 * Copies result summary to clipboard
 */
function copyResult() {
  const summary = document.getElementById("summaryText");
  if (!summary) return;

  const text = summary.textContent;
  
  // Modern clipboard API
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch(() => alert("Failed to copy"));
  } else {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copied to clipboard!");
  }
}


/*************************
 * TEXT-TO-SPEECH (SPEAKER)
 * ✅ FIXED: Better memory management
 *************************/

let activeUtterance = null;
let activeSpeakerBtn = null;

/**
 * Toggles text-to-speech for a section
 */
function toggleSpeak(button) {
  const targetId = button.getAttribute("data-speak-target");
  if (!targetId) return;

  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  let text = "";

  // Extract text based on element type
  if (targetEl.tagName === "UL") {
    text = Array.from(targetEl.querySelectorAll("li"))
      .map(li => li.textContent)
      .join(". ");
  } else {
    text = targetEl.textContent;
  }

  text = text.trim();
  
  if (!text) {
    alert("Nothing to read here.");
    return;
  }

  // If same button clicked again, stop
  if (activeSpeakerBtn === button) {
    stopSpeaking();
    return;
  }

  // Stop any existing speech
  stopSpeaking();

  // Create new speech
  const utterance = new SpeechSynthesisUtterance(text);

  // Language mapping
  const langMap = {
    English: "en-IN",
    Hindi: "hi-IN",
    Marathi: "mr-IN",
    Telugu: "te-IN",
    Tamil: "ta-IN"
  };

  const selectedLang = localStorage.getItem("selectedLanguage") || "English";
  utterance.lang = langMap[selectedLang] || "en-IN";
  utterance.rate = 0.95;
  utterance.pitch = 1;

  // Clean up when finished
  utterance.onend = () => {
    stopSpeaking();
  };

  // Start speaking
  activeUtterance = utterance;
  activeSpeakerBtn = button;
  button.classList.add("active");

  window.speechSynthesis.speak(utterance);
}

/**
 * Stops active speech
 */
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

// Clean up speech on page unload (prevent memory leak)
window.addEventListener("beforeunload", () => {
  stopSpeaking();
});


/*************************
 * RISK SCORE ANIMATION
 *************************/

/**
 * Animates risk score counting up
 */
function animateRiskScore(targetScore, riskLevel) {
  const scoreElement = document.getElementById("riskScoreText");
  const badgeElement = document.getElementById("riskBadge");

  if (!scoreElement || !badgeElement) return;

  // Animation parameters
  let currentScore = 0;
  const duration = 1500; // 1.5 seconds
  const intervalTime = 20;
  const steps = duration / intervalTime;
  const increment = targetScore / steps;

  // Initial state
  badgeElement.innerText = "CALCULATING...";
  badgeElement.className = "risk-badge";

  // Animate counter
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

/**
 * Finalizes risk UI after animation
 */
function finalizeRiskUI(level, score) {
  const badge = document.getElementById("riskBadge");
  const card = document.querySelector(".risk-card");
  
  if (!badge) return;

  // Remove old classes
  badge.classList.remove("risk-low", "risk-medium", "risk-high");
  
  // Apply appropriate styling
  if (level === "LOW") {
    badge.innerText = "SAFE (NO RISK)";
    badge.classList.add("risk-low");
    if (card) card.style.borderColor = "var(--success)";
  
  } else if (level === "MEDIUM") {
    badge.innerText = "MODERATE RISK";
    badge.classList.add("risk-medium");
    if (card) card.style.borderColor = "var(--warning)";
  
  } else {
    badge.innerText = "HIGH RISK - WARNING";
    badge.classList.add("risk-high");
    if (card) card.style.borderColor = "var(--danger)";
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
    summary.textContent = "No result found. Please try again.";
    return;
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse result:", e);
    summary.textContent = "Error reading result.";
    return;
  }

  // Populate summary
  summary.textContent = data.summary || "No summary available";

  // Get risk data
  const score = data.risk_score !== undefined ? data.risk_score : 0;
  const level = data.risk_level || "LOW";
  
  // Start animation
  animateRiskScore(score, level);

  // Fill all sections
  fillList("redFlags", data.red_flags);
  fillList("lawList", data.laws);
  fillList("nextSteps", data.actions);
  fillList("finalSummary", data.final_summary);
  fillReferences("references", data.references);
});


/*************************
 * VERBOSITY LEVEL PERSISTENCE
 * ✅ FIXED: Proper saving and loading
 *************************/
(function () {
  const STORAGE_KEY = "output_detail_level";

  // Set default if not exists
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, "basic");
  }

  // Restore selection on page load
  document.addEventListener("DOMContentLoaded", () => {
    const savedLevel = localStorage.getItem(STORAGE_KEY) || "basic";
    const radios = document.querySelectorAll('input[name="verbosity"]');

    radios.forEach(radio => {
      // Restore saved value
      if (radio.value === savedLevel) {
        radio.checked = true;
      }

      // Save on change
      radio.addEventListener("change", () => {
        localStorage.setItem(STORAGE_KEY, radio.value);
        console.log(`Verbosity changed to: ${radio.value}`);
      });
    });
  });

  // Helper function (accessible globally if needed)
  window.getOutputDetailLevel = function () {
    return localStorage.getItem(STORAGE_KEY) || "basic";
  };
})();


/*************************
 * CONSOLE INFO
 *************************/
console.log(`
╔═══════════════════════════════════════╗
║     JURIS-AI Frontend v6.0           ║
║     Legal Analysis Platform           ║
╠═══════════════════════════════════════╣
║ API Endpoint: ${API_BASE}             
║ Features: Multi-language, Voice,      ║
║           Document Upload, TTS        ║
╚═══════════════════════════════════════╝
`);
