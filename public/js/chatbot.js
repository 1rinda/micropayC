/**
 * Micropay Chatbot
 * A specialized chatbot for handling Micropay-related queries with strict scope enforcement
 */
class MicropayChatbot {
  constructor() {
    this.API_URL = '/api/chatbot';
    this.CHARACTER_LIMIT = 1000;
    this.TRUNCATE_LIMIT = 2000;
    
    // COMPREHENSIVE Micropay knowledge base
    this.micropayKnowledge = {
      // Company Information
      company: {
        name: "MicroPay",
        fullName: "MicroPay Mobile Money",
        description: "A Financial Technology (FINTECH) Company licensed and regulated by the Bank of Uganda as a Payment Service Provider (PSP) and Payment Service Operator (PSO).",
        founded: "2012",
        years: "11 years in operation",
        mission: "Focus on transactions (not just lending/borrowing) while ensuring shareholder returns",
        vision: "To be the leading provider of digital payments and remittances in the region",
        registration: "MicroPay (U) Ltd, registered office at Plot 31, Kanjokya Street, Kamwokya, P.O Box 4593, Kampala"
      },
      
      // Services
      services: {
        core: [
          "Send/receive money (Peer-to-Peer transfers)",
          "Buy airtime across all telecom networks (MTN, Airtel, etc.)",
          "Pay utility bills (UMEME electricity, NWSC water, pay TV like DStv, GOtv)",
          "Pay tuition and school fees",
          "Micro Insurance payments",
          "Entertainment and event tickets"
        ],
        banking: [
          "Agency banking services (cash deposits/withdrawals)",
          "Point of Sale and Merchant Payments",
          "Payroll Direct Deposits",
          "Fundraising and donations"
        ]
      },
      
      // Registration & Setup
      registration: {
        process: "1. Visit any MicroPay agent with your valid National ID\n2. Fill the registration form\n3. Download the MicroPay app from Google Play Store\n4. Activate your account and start transacting",
        requirements: "• Your Full Names\n• Your Physical address\n• Your Mobile Phone Number\n• Your Valid Identity cards\n• Next of KIN\n• Date of birth",
        fee: "Registration is completely FREE",
        ussd: "Use USSD code *256# for basic transactions without the app"
      },
      
      // Transaction Information
      transactions: {
        limits: "Transaction limits apply based on account tier (Basic/Verified). Check the app for your specific limits. MicroPay may apply daily, weekly, or monthly transaction limits and wallet balance caps.",
        fees: {
          sending: "UGX 1,000 – 50,000: UGX 500 fee\nUGX 50,001 – 200,000: UGX 1,000 fee\nCheck app for complete fee structure",
          receiving: "Free to receive money",
          balance: "Balance inquiries are FREE",
          airtime: "Small fee applies for airtime purchases",
          note: "All fees are non-refundable once a transaction has been successfully processed. Fees may vary based on service type, transaction amount, or partner network."
        },
        whatCanDo: [
          "Cash deposits through authorized MicroPay Cash Agents",
          "Send Money to another mobile subscriber",
          "Cash out money at registered MicroPay Cash Agents",
          "Obtain a balance enquiry",
          "Request a mini statement",
          "Change your own PIN"
        ]
      },
      
      // App & Technology
      technology: {
        app: "Available on Google Play Store: https://play.google.com/store/apps/details?id=com.agentbanking.micropay",
        ussd: "USSD code: *256# (works on all networks)",
        features: [
          "Works across ALL networks (MTN, Airtel, etc.)",
          "Single account for all services",
          "Secure with encryption and PIN protection",
          "Real-time SMS alerts for all transactions"
        ]
      },
      
      // Contact Information
      contact: {
        phone: "+256 760 009 339",
        phone2: "+256 702 461 049",
        email: "info@micropay.co.ug",
        website: "https://micropay.co.ug/",
        address: {
          headOffice: "Plot 31 Kanjokya Street, Kamwokya, 3rd Floor The Wildlife Tower building, Kampala",
          postal: "P.O. Box 126642 GPO Kampala"
        },
        social: {
          facebook: "MicroPay mobile Money",
          instagram: "Micropay_Ug",
          twitter: "Micropay_Ug",
          tiktok: "Micropay_Ug"
        },
        customerCare: "Call Centre: +256 760 009 339 (Customer Service Centre at Plot 61 Kanjokya Street, Kampala)"
      },
      
      // Branches & Locations
      branches: [
        "Kamwokya opposite the Police Post",
        "Mbarara City Market 4th Level, Room No. 80A &B",
        "GN Associates Forest Mall opposite Centenary Bank",
        "GN Associates in Rubaare at Meru Petrol station along Mbarara – Kabale road"
      ],
      
      // Agents Information
      agents: {
        becomeAgent: "To become a MicroPay agent:\n1. Visit our HQ in Kampala\n2. Requirements: Business location, valid ID, LC1 letter, trading license\n3. Minimum float: UGX 500,000 (individual) or UGX 1,000,000 (company)\n4. Need Android phone version 10+ and Bluetooth printer",
        superAgent: "For super agents: Minimum float UGX 1,500,000",
        commission: "Commission is paid by the 2nd day of every month",
        earnings: "Agents earn commissions on all transactions (deposits, withdrawals, airtime sales, registrations)",
        whatTheyDo: [
          "Register you for the Service",
          "Provide a cash-in and cash-out service",
          "Provide all other MicroPay services"
        ],
        verification: "If unsure about an agent's validity, do not conduct transactions and notify MicroPay immediately. To verify an Agent, contact our Call Centre."
      },
      
      // Security
      security: {
        measures: "End-to-end encryption, PIN authentication, SMS alerts, regulated by Bank of Uganda",
        forgotPin: "Visit any agent or contact customer support to reset your PIN",
        fraud: "Call +256 760 009 339 immediately to block your account if you suspect fraud",
        safety: "Your money is safe! All transactions are encrypted and monitored. MicroPay is regulated by Bank of Uganda.",
        customerResponsibilities: [
          "Safeguarding your PINs, passwords, and authentication credentials",
          "All transactions conducted through your account",
          "Promptly reporting any unauthorized access, suspected fraud, or security breach"
        ],
        unauthorizedUse: "If your SIM card or PIN is stolen or compromised, contact the call centre immediately. You remain responsible for all transactions until your account is stopped."
      },
      
      // Terms and Conditions (NEW)
      termsAndConditions: {
        introduction: "MicroPay is an electronic payments system owned and operated by MicroPay (U) Ltd. By accessing or using MicroPay services, you agree to be bound by the Terms and Conditions.",
        serviceDescription: "MicroPay Money is an electronic payments system that provides tools for mobile and online payments to transfer money value. Cash payments are held in a trust account maintained by Centenary Rural Development Bank.",
        definitions: {
          account: "Your MicroPay Mobile Payment Account record",
          agent: "Person registered by MicroPay to provide Mobile Payment Services",
          balance: "Amount of money standing to the credit of your Account",
          charges: "Tariffs and other charges payable for the Mobile Payment Services",
          eFloat: "Stock value representing cash paid to authorized MicroPay agents",
          mobilePayment: "Electronic money/stock issued by MicroPay",
          pin: "Your personal identification number to access your account"
        },
        registration: "Prospective subscribers must read and FULLY understand the Terms and Conditions before subscribing. Registration is FREE.",
        accountClosure: "Accounts may be closed upon written request, or if used fraudulently, negligently, or for illegal activities. Inactive accounts (120 days) may have funds transferred to a holding account.",
        dataProtection: "MicroPay collects and processes personal data in accordance with Ugandan data protection laws.",
        liability: "MicroPay's total liability shall not exceed the value of the disputed transaction.",
        governingLaw: "Terms are governed by Ugandan laws, with disputes subject to Ugandan courts jurisdiction.",
        acceptance: "By using MicroPay Service, you agree to be bound by the Terms and Conditions."
      },
      
      // Common Questions
      commonQuestions: {
        transferToBank: "Yes! You can transfer funds from your MicroPay wallet to your Centenary bank account",
        sendToNonRegistered: "Yes! Non-registered users receive a voucher number which they can redeem at any agent",
        futureServices: "Coming soon: Airtel mobile money, URA payments, Watu, Mogo, Tugende services",
        inactiveAccount: "If you don't use your account for 120 consecutive days, electronic money will be transferred to a holding account. Visit Customer Service Centre with proof of identity to access funds.",
        serviceAvailability: "MicroPay endeavours to provide continuous access but does not guarantee uninterrupted availability. Not liable for network failures, system maintenance, or third-party outages."
      }
    };
    
    this.initializeElements();
    this.bindEvents();
    this.greetUser();
    
    this.contextHistory = [];
    this.CONTEXT_LIMIT = 3;
    this.DEBUG = false;
  }

  initializeElements() {
    this.toggleBtn = document.getElementById('micropay-chatbot-toggle');
    this.panel = document.getElementById('micropay-chatbot-panel');
    this.closeBtn = document.getElementById('micropay-chatbot-close');
    this.messages = document.getElementById('micropay-chatbot-messages');
    this.form = document.getElementById('micropay-chatbot-form');
    this.input = document.getElementById('micropay-chatbot-input');

    if (this.toggleBtn) {
      this.toggleBtn.title = 'Ask me about Micropay';
    }
  }

  bindEvents() {
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => {
        if (this.panel && !this.panel.hidden) {
          this.closePanel();
        } else {
          this.openPanel();
        }
      });
    }
    
    this.closeBtn?.addEventListener('click', () => this.closePanel());
    this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
    this.input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleSubmit(e);
      }
    });
  }

  openPanel() {
    if (this.panel) {
      this.panel.hidden = false;
      setTimeout(() => {
        this.input?.focus();
      }, 200);
    }
  }

  closePanel() {
    if (this.panel) {
      this.panel.hidden = true;
    }
  }

  addMessage(text, sender = 'bot') {
    if (!this.messages) return;

    const messageElement = document.createElement('div');
    messageElement.className = `micropay-chatbot-message ${sender}`;

    const bubble = document.createElement('div');
    bubble.className = 'micropay-chatbot-bubble';
    
    if (sender === 'bot') {
      // Format URLs as links and preserve line breaks
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      let html = text.replace(urlRegex, url => `<a href="${url}" target="_blank" style="color: #007bff; text-decoration: underline;">${url}</a>`);
      
      // Convert line breaks to <br> tags
      html = html.replace(/\n/g, '<br>');
      
      // Format section headers (lines with ═══)
      html = html.replace(/═══+[^═]*═══+/g, match => `<span class="chat-header">${match}</span>`);
      
      // Format numbered lists (1. 2. 3. etc)
      html = html.replace(/(\d+)\.\s+([^\n<]+)/g, '<span class="chat-list-item">$1. $2</span>');
      
      // Format bullet points
      html = html.replace(/^•\s+(.+)$/gm, '<span class="chat-list-item">✓ $1</span>');
      
      // Format emoji-prefixed lines for better spacing
      html = html.replace(/([^\n]*[📌📊💰🏦💼⭐💵✅🔍📱⚠️💡✍️🚫📄🏛️🚨❌📝📍🔒🔑❓☎️]+[^\n]*)/g, '<span class="chat-line">$1</span>');
      
      bubble.innerHTML = html;
    } else {
      bubble.textContent = text;
    }

    messageElement.appendChild(bubble);
    this.messages.appendChild(messageElement);
    
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.messages) {
      this.messages.scrollTop = this.messages.scrollHeight;
    }
  }

  removeLoadingMessage() {
    const loadingMessage = this.messages?.querySelector('.micropay-chatbot-message.bot:last-child');
    if (loadingMessage && loadingMessage.textContent.includes('...')) {
      loadingMessage.remove();
    }
  }

  // Check if question is about MicroPay
  isAboutMicropay(userText) {
    const lowerText = userText.toLowerCase();
    const micropayKeywords = [
      'micropay', 'micro pay', 'mobile money', 'send money', 'receive money',
      'airtime', 'utility', 'bill', 'payment', 'transfer', 'wallet',
      'agent', 'register', 'account', 'pin', 'ussd', 'fee', 'charge',
      'kampala', 'uganda', 'fintech', 'banking', 'deposit', 'withdraw'
    ];
    
    return micropayKeywords.some(keyword => lowerText.includes(keyword));
  }

  // Create keyword-to-topic mapping for intelligent single-word matching
  getKeywordTopicMap() {
    return {
      // Services & Features
      'airtime': 'services',
      'bills': 'services',
      'utility': 'services',
      'electricity': 'services',
      'water': 'services',
      'insurance': 'services',
      'tickets': 'services',
      'transfer': 'services',
      'send': 'services',
      'receive': 'services',
      'payment': 'services',
      'transaction': 'services',
      'deposit': 'services',
      'withdraw': 'services',
      
      // Registration & Account
      'register': 'registration',
      'signup': 'registration',
      'join': 'registration',
      'account': 'registration',
      'create': 'registration',
      
      // Locations
      'location': 'branches',
      'branch': 'branches',
      'office': 'contact',
      'headquarters': 'branches',
      'kampala': 'branches',
      'mbarara': 'branches',
      'address': 'contact',
      'where': 'branches',
      'visit': 'branches',
      
      // Contact & Support
      'contact': 'contact',
      'phone': 'contact',
      'email': 'contact',
      'support': 'contact',
      'help': 'contact',
      'call': 'contact',
      'website': 'contact',
      'social': 'contact',
      
      // Fees & Pricing
      'fee': 'fees',
      'charge': 'fees',
      'cost': 'fees',
      'price': 'fees',
      'tariff': 'fees',
      'expensive': 'fees',
      
      // App & Technology
      'app': 'app',
      'download': 'app',
      'ussd': 'app',
      'mobile': 'app',
      'install': 'app',
      
      // Agents
      'agent': 'agents',
      'partner': 'agents',
      'commission': 'agents',
      'earn': 'agents',
      'super': 'agents',
      
      // Security
      'safe': 'security',
      'secure': 'security',
      'fraud': 'security',
      'security': 'security',
      'pin': 'security',
      'password': 'security',
      'protection': 'security',
      
      // Terms
      'terms': 'terms',
      'conditions': 'terms',
      'policy': 'terms',
      'agreement': 'terms',
      
      // Company Info
      'about': 'company',
      'company': 'company',
      'who': 'company',
      'mission': 'company',
      'vision': 'company',
      'founded': 'company',
      'ceo': 'company',
      'information': 'company',
      'background': 'company',
      
      // Limits
      'limit': 'limits',
      'maximum': 'limits',
      'maximum amount': 'limits',
      
      // Bank
      'bank': 'bank',
      'centenary': 'bank',
      
      // Inactive
      'inactive': 'inactive',
      'dormant': 'inactive',
      
      // Availability
      'availability': 'availability',
      'downtime': 'availability',
      'working': 'availability'
    };
  }

  // Enhanced knowledge base response with better organization and ordering
  getKnowledgeBaseResponse(userText) {
    const lowerText = userText.toLowerCase().trim();
    
    // Check if question is about MicroPay
    if (!this.isAboutMicropay(userText)) {
      return "I'm sorry, I can only provide information about MicroPay services. Please ask me about MicroPay mobile money, registration, services, fees, or any other MicroPay-related questions.";
    }
    
    // 1. Greetings
    if (/(hello|hi|hey|good morning|good afternoon|good evening|thanks|thank you)/i.test(lowerText)) {
      return "Hello! Welcome to MicroPay. I'm here to help you with information about our services, registration, fees, terms and conditions, and more. How can I assist you today?";
    }
    
    // Smart single-keyword matching
    const keywordMap = this.getKeywordTopicMap();
    const singleWord = lowerText.split(/\s+/)[0]; // Get first word
    const matchedTopic = keywordMap[singleWord];
    
    // If single word matches a topic, jump directly to that section
    if (matchedTopic && userText.split(/\s+/).length <= 2) {
      switch(matchedTopic) {
        case 'services':
          const core = this.micropayKnowledge.services.core;
          const banking = this.micropayKnowledge.services.banking;
          return `═══════════════════════════════════════\n` +
                 `MICROPAY SERVICES\n` +
                 `═══════════════════════════════════════\n\n` +
                 `💰 CORE PAYMENT SERVICES:\n` +
                 `${core.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\n` +
                 `🏦 BANKING SERVICES:\n` +
                 `${banking.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\n` +
                 `📱 ACCESS METHODS:\n` +
                 `• Mobile App: Google Play Store\n` +
                 `• USSD: Dial *256# from any network`;
        
        case 'registration':
          const reg = this.micropayKnowledge.registration;
          return `═══════════════════════════════════════\n` +
                 `MICROPAY REGISTRATION GUIDE\n` +
                 `═══════════════════════════════════════\n\n` +
                 `✅ REGISTRATION PROCESS:\n${reg.process}\n\n` +
                 `📋 REQUIRED DOCUMENTS:\n${reg.requirements}\n\n` +
                 `💵 COST: ${reg.fee}\n\n` +
                 `☎️ ALTERNATIVE (USSD):\n${reg.ussd}`;
        
        case 'branches':
          const branches = this.micropayKnowledge.branches;
          const contact1 = this.micropayKnowledge.contact;
          return `═══════════════════════════════════════\n` +
                 `MICROPAY LOCATIONS\n` +
                 `═══════════════════════════════════════\n\n` +
                 `🏢 BRANCH LOCATIONS:\n` +
                 `${branches.map((b, i) => `${i + 1}. ${b}`).join('\n')}\n\n` +
                 `🏛️ HEAD OFFICE:\n${contact1.address.headOffice}\n\n` +
                 `📞 FOR MORE LOCATIONS:\nCall us at ${contact1.phone}`;
        
        case 'contact':
          const contact = this.micropayKnowledge.contact;
          return `═══════════════════════════════════════\n` +
                 `CONTACT MICROPAY\n` +
                 `═══════════════════════════════════════\n\n` +
                 `☎️ PHONE NUMBERS:\n` +
                 `• Main: ${contact.phone}\n` +
                 `• Alternative: ${contact.phone2}\n\n` +
                 `📧 EMAIL:\n${contact.email}\n\n` +
                 `🌐 WEBSITE:\n${contact.website}\n\n` +
                 `🏢 HEAD OFFICE:\n${contact.address.headOffice}\n\n` +
                 `📮 POSTAL ADDRESS:\n${contact.address.postal}\n\n` +
                 `📲 SOCIAL MEDIA:\n` +
                 `• Facebook: ${contact.social.facebook}\n` +
                 `• Instagram: @${contact.social.instagram}\n` +
                 `• Twitter: @${contact.social.twitter}\n` +
                 `• TikTok: @${contact.social.tiktok}`;
        
        case 'fees':
          const fees = this.micropayKnowledge.transactions.fees;
          return `═══════════════════════════════════════\n` +
                 `MICROPAY TRANSACTION FEES\n` +
                 `═══════════════════════════════════════\n\n` +
                 `💵 SENDING MONEY:\n${fees.sending}\n\n` +
                 `✅ RECEIVING MONEY:\n${fees.receiving}\n\n` +
                 `🔍 BALANCE CHECK:\n${fees.balance}\n\n` +
                 `📱 AIRTIME PURCHASE:\n${fees.airtime}\n\n` +
                 `⚠️ IMPORTANT NOTE:\n${fees.note}\n\n` +
                 `📲 TIP:\nDownload the MicroPay app for the complete and updated fee structure.`;
        
        case 'app':
          const tech = this.micropayKnowledge.technology;
          return `═══════════════════════════════════════\n` +
                 `GET MICROPAY\n` +
                 `═══════════════════════════════════════\n\n` +
                 `📱 MOBILE APP DOWNLOAD:\n${tech.app}\n\n` +
                 `📟 NO SMARTPHONE? USE USSD:\nDial: ${tech.ussd}\n(Works on all networks)\n\n` +
                 `✨ APP FEATURES:\n` +
                 `${tech.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}\n\n` +
                 `🎯 REQUIREMENTS:\n• Valid National ID\n• Active Phone Line\n• Internet Access (for app)`;
        
        case 'agents':
          const agents = this.micropayKnowledge.agents;
          return `═══════════════════════════════════════\n` +
                 `MICROPAY AGENT INFORMATION\n` +
                 `═══════════════════════════════════════\n\n` +
                 `💼 HOW TO BECOME AN AGENT:\n${agents.becomeAgent}\n\n` +
                 `⭐ SUPER AGENT OPTION:\n${agents.superAgent}\n\n` +
                 `💰 EARNINGS:\n${agents.earnings}\n\n` +
                 `📊 COMMISSION:\n${agents.commission}\n\n` +
                 `🎯 AGENT DUTIES:\n` +
                 `${agents.whatTheyDo.map((d, i) => `${i + 1}. ${d}`).join('\n')}\n\n` +
                 `✔️ AGENT VERIFICATION:\n${agents.verification}`;
        
        case 'security':
          const security = this.micropayKnowledge.security;
          return `═══════════════════════════════════════\n` +
                 `SECURITY & SAFETY\n` +
                 `═══════════════════════════════════════\n\n` +
                 `🔒 SECURITY MEASURES:\n${security.measures}\n\n` +
                 `✅ YOUR SAFETY:\n${security.safety}\n\n` +
                 `👤 YOUR RESPONSIBILITIES:\n` +
                 `${security.customerResponsibilities.map((r, i) => `${i + 1}. ${r}`).join('\n')}\n\n` +
                 `🔑 FORGOT YOUR PIN?\n${security.forgotPin}\n\n` +
                 `⚠️ SUSPECTED FRAUD?\n${security.fraud}\n\n` +
                 `🚨 UNAUTHORIZED ACCESS:\n${security.unauthorizedUse}`;
        
        case 'terms':
          const terms = this.micropayKnowledge.termsAndConditions;
          return `═══════════════════════════════════════\n` +
                 `TERMS AND CONDITIONS\n` +
                 `═══════════════════════════════════════\n\n` +
                 `📖 OVERVIEW:\n${terms.introduction}\n\n` +
                 `🔍 SERVICE DESCRIPTION:\n${terms.serviceDescription}\n\n` +
                 `📚 KEY DEFINITIONS:\n` +
                 `• Account: ${terms.definitions.account}\n` +
                 `• Agent: ${terms.definitions.agent}\n` +
                 `• Balance: ${terms.definitions.balance}\n` +
                 `• Charges: ${terms.definitions.charges}\n` +
                 `• PIN: ${terms.definitions.pin}\n\n` +
                 `✍️ REGISTRATION:\n${terms.registration}\n\n` +
                 `🚫 ACCOUNT CLOSURE:\n${terms.accountClosure}\n\n` +
                 `📋 DATA PROTECTION:\n${terms.dataProtection}\n\n` +
                 `⚖️ LIABILITY:\n${terms.liability}\n\n` +
                 `🏛️ GOVERNING LAW:\n${terms.governingLaw}\n\n` +
                 `📄 For full details, visit: ${this.micropayKnowledge.contact.website}`;
        
        case 'company':
          const kb = this.micropayKnowledge.company;
          return `═══════════════════════════════════════\n` +
                 `ABOUT MICROPAY\n` +
                 `═══════════════════════════════════════\n\n` +
                 `📌 DESCRIPTION:\n${kb.description}\n\n` +
                 `📊 KEY INFORMATION:\n` +
                 `• Founded: ${kb.founded}\n` +
                 `• Years in Operation: ${kb.years}\n` +
                 `• Mission: ${kb.mission}\n` +
                 `• Vision: ${kb.vision}\n\n` +
                 `🏢 REGISTRATION:\n${kb.registration}`;
        
        case 'limits':
          return `═══════════════════════════════════════\n` +
                 `TRANSACTION LIMITS\n` +
                 `═══════════════════════════════════════\n\n` +
                 `📊 LIMITS:\n${this.micropayKnowledge.transactions.limits}\n\n` +
                 `💡 TIP:\nCheck your MicroPay app to see your personal account limits.`;
        
        case 'bank':
          return `═══════════════════════════════════════\n` +
                 `BANK TRANSFERS\n` +
                 `═══════════════════════════════════════\n\n` +
                 `✅ YES, YOU CAN!\n${this.micropayKnowledge.commonQuestions.transferToBank}\n\n` +
                 `🏦 SUPPORTED BANK:\nCentenary Rural Development Bank\n\n` +
                 `📞 For details, contact: ${this.micropayKnowledge.contact.phone}`;
        
        case 'inactive':
          return `═══════════════════════════════════════\n` +
                 `INACTIVE ACCOUNT\n` +
                 `═══════════════════════════════════════\n\n` +
                 `⏰ IMPORTANT INFO:\n${this.micropayKnowledge.commonQuestions.inactiveAccount}`;
        
        case 'availability':
          return `═══════════════════════════════════════\n` +
                 `SERVICE AVAILABILITY\n` +
                 `═══════════════════════════════════════\n\n` +
                 `📌 INFORMATION:\n${this.micropayKnowledge.commonQuestions.serviceAvailability}`;
      }
    }
    
    // 2. Company Information
    if (/(what is micropay|about micropay|micropay company|who is micropay|tell me|introduce)/i.test(lowerText)) {
      const kb = this.micropayKnowledge.company;
      return `═══════════════════════════════════════\n` +
             `ABOUT MICROPAY\n` +
             `═══════════════════════════════════════\n\n` +
             `📌 DESCRIPTION:\n${kb.description}\n\n` +
             `📊 KEY INFORMATION:\n` +
             `• Founded: ${kb.founded}\n` +
             `• Years in Operation: ${kb.years}\n` +
             `• Mission: ${kb.mission}\n` +
             `• Vision: ${kb.vision}\n\n` +
             `🏢 REGISTRATION:\n${kb.registration}`;
    }
    
    // 3. Services (Most Important)
    if (/(service|offer|provide|what can|do with|capability)/i.test(lowerText) && !/(agent|fee|register|contact|download)/i.test(lowerText)) {
      const core = this.micropayKnowledge.services.core;
      const banking = this.micropayKnowledge.services.banking;
      return `═══════════════════════════════════════\n` +
             `MICROPAY SERVICES\n` +
             `═══════════════════════════════════════\n\n` +
             `💰 CORE PAYMENT SERVICES:\n` +
             `${core.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\n` +
             `🏦 BANKING SERVICES:\n` +
             `${banking.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\n` +
             `📱 ACCESS METHODS:\n` +
             `• Mobile App: Google Play Store\n` +
             `• USSD: Dial *256# from any network`;
    }
    
    // 4. Registration Process (Step by Step)
    if (/(register|join|sign up|become|new account|create account|how do i start)/i.test(lowerText)) {
      const reg = this.micropayKnowledge.registration;
      return `═══════════════════════════════════════\n` +
             `MICROPAY REGISTRATION GUIDE\n` +
             `═══════════════════════════════════════\n\n` +
             `✅ REGISTRATION PROCESS:\n${reg.process}\n\n` +
             `📋 REQUIRED DOCUMENTS:\n${reg.requirements}\n\n` +
             `💵 COST: ${reg.fee}\n\n` +
             `☎️ ALTERNATIVE (USSD):\n${reg.ussd}`;
    }
    
    // 5. Contact Information (Detailed)
    if (/(contact|phone|number|email|address|location|where|office|customer care|support)/i.test(lowerText)) {
      const contact = this.micropayKnowledge.contact;
      return `═══════════════════════════════════════\n` +
             `CONTACT MICROPAY\n` +
             `═══════════════════════════════════════\n\n` +
             `☎️ PHONE NUMBERS:\n` +
             `• Main: ${contact.phone}\n` +
             `• Alternative: ${contact.phone2}\n\n` +
             `📧 EMAIL:\n${contact.email}\n\n` +
             `🌐 WEBSITE:\n${contact.website}\n\n` +
             `🏢 HEAD OFFICE:\n${contact.address.headOffice}\n\n` +
             `📮 POSTAL ADDRESS:\n${contact.address.postal}\n\n` +
             `📲 SOCIAL MEDIA:\n` +
             `• Facebook: ${contact.social.facebook}\n` +
             `• Instagram: @${contact.social.instagram}\n` +
             `• Twitter: @${contact.social.twitter}\n` +
             `• TikTok: @${contact.social.tiktok}`;
    }
    
    // 6. Transaction Fees (Clear and Organized)
    if (/(fee|charge|cost|price|how much|tariff|expensive)/i.test(lowerText)) {
      const fees = this.micropayKnowledge.transactions.fees;
      return `═══════════════════════════════════════\n` +
             `MICROPAY TRANSACTION FEES\n` +
             `═══════════════════════════════════════\n\n` +
             `💵 SENDING MONEY:\n${fees.sending}\n\n` +
             `✅ RECEIVING MONEY:\n${fees.receiving}\n\n` +
             `🔍 BALANCE CHECK:\n${fees.balance}\n\n` +
             `📱 AIRTIME PURCHASE:\n${fees.airtime}\n\n` +
             `⚠️ IMPORTANT NOTE:\n${fees.note}\n\n` +
             `📲 TIP:\nDownload the MicroPay app for the complete and updated fee structure.`;
    }
    
    // 7. App Download (Easy to Follow)
    if (/(download|app|application|install|mobile app|get started|how to use)/i.test(lowerText)) {
      const tech = this.micropayKnowledge.technology;
      return `═══════════════════════════════════════\n` +
             `GET MICROPAY\n` +
             `═══════════════════════════════════════\n\n` +
             `📱 MOBILE APP DOWNLOAD:\n${tech.app}\n\n` +
             `📟 NO SMARTPHONE? USE USSD:\nDial: ${tech.ussd}\n(Works on all networks)\n\n` +
             `✨ APP FEATURES:\n` +
             `${tech.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}\n\n` +
             `🎯 REQUIREMENTS:\n• Valid National ID\n• Active Phone Line\n• Internet Access (for app)`;
    }
    
    // 8. Branches and Locations
    if (/(branch|location|where is|office near|kamwokya|mbarara|physical location|visit us)/i.test(lowerText)) {
      const branches = this.micropayKnowledge.branches;
      const contact = this.micropayKnowledge.contact;
      return `═══════════════════════════════════════\n` +
             `MICROPAY LOCATIONS\n` +
             `═══════════════════════════════════════\n\n` +
             `🏢 BRANCH LOCATIONS:\n` +
             `${branches.map((b, i) => `${i + 1}. ${b}`).join('\n')}\n\n` +
             `🏛️ HEAD OFFICE:\n${contact.address.headOffice}\n\n` +
             `📞 FOR MORE LOCATIONS:\nCall us at ${contact.phone}`;
    }
    
    // 9. Agent Information (Detailed)
    if (/(agent|become agent|super agent|commission|earn|partner)/i.test(lowerText)) {
      const agents = this.micropayKnowledge.agents;
      return `═══════════════════════════════════════\n` +
             `MICROPAY AGENT INFORMATION\n` +
             `═══════════════════════════════════════\n\n` +
             `💼 HOW TO BECOME AN AGENT:\n${agents.becomeAgent}\n\n` +
             `⭐ SUPER AGENT OPTION:\n${agents.superAgent}\n\n` +
             `💰 EARNINGS:\n${agents.earnings}\n\n` +
             `📊 COMMISSION:\n${agents.commission}\n\n` +
             `🎯 AGENT DUTIES:\n` +
             `${agents.whatTheyDo.map((d, i) => `${i + 1}. ${d}`).join('\n')}\n\n` +
             `✔️ AGENT VERIFICATION:\n${agents.verification}`;
    }
    
    // 10. Security and Safety
    if (/(safe|secure|security|fraud|hack|pin|password|protection|safety)/i.test(lowerText)) {
      const security = this.micropayKnowledge.security;
      return `═══════════════════════════════════════\n` +
             `SECURITY & SAFETY\n` +
             `═══════════════════════════════════════\n\n` +
             `🔒 SECURITY MEASURES:\n${security.measures}\n\n` +
             `✅ YOUR SAFETY:\n${security.safety}\n\n` +
             `👤 YOUR RESPONSIBILITIES:\n` +
             `${security.customerResponsibilities.map((r, i) => `${i + 1}. ${r}`).join('\n')}\n\n` +
             `🔑 FORGOT YOUR PIN?\n${security.forgotPin}\n\n` +
             `⚠️ SUSPECTED FRAUD?\n${security.fraud}\n\n` +
             `🚨 UNAUTHORIZED ACCESS:\n${security.unauthorizedUse}`;
    }
    
    // 11. Terms and Conditions
    if (/(terms|conditions|agreement|t&c|terms and conditions|policy)/i.test(lowerText)) {
      const terms = this.micropayKnowledge.termsAndConditions;
      return `═══════════════════════════════════════\n` +
             `TERMS AND CONDITIONS\n` +
             `═══════════════════════════════════════\n\n` +
             `📖 OVERVIEW:\n${terms.introduction}\n\n` +
             `🔍 SERVICE DESCRIPTION:\n${terms.serviceDescription}\n\n` +
             `📚 KEY DEFINITIONS:\n` +
             `• Account: ${terms.definitions.account}\n` +
             `• Agent: ${terms.definitions.agent}\n` +
             `• Balance: ${terms.definitions.balance}\n` +
             `• Charges: ${terms.definitions.charges}\n` +
             `• PIN: ${terms.definitions.pin}\n\n` +
             `✍️ REGISTRATION:\n${terms.registration}\n\n` +
             `🚫 ACCOUNT CLOSURE:\n${terms.accountClosure}\n\n` +
             `📋 DATA PROTECTION:\n${terms.dataProtection}\n\n` +
             `⚖️ LIABILITY:\n${terms.liability}\n\n` +
             `🏛️ GOVERNING LAW:\n${terms.governingLaw}\n\n` +
             `📄 For full details, visit: ${this.micropayKnowledge.contact.website}`;
    }
    
    // 12. Transaction Limits
    if (/(limit|maximum|how much can|max amount|transaction limit)/i.test(lowerText)) {
      return `═══════════════════════════════════════\n` +
             `TRANSACTION LIMITS\n` +
             `═══════════════════════════════════════\n\n` +
             `📊 LIMITS:\n${this.micropayKnowledge.transactions.limits}\n\n` +
             `💡 TIP:\nCheck your MicroPay app to see your personal account limits.`;
    }
    
    // 13. What can you do with MicroPay
    if (/(what can i do|transactions i can do|can i|is it possible)/i.test(lowerText)) {
      const transactions = this.micropayKnowledge.transactions.whatCanDo;
      return `═══════════════════════════════════════\n` +
             `WHAT YOU CAN DO WITH MICROPAY\n` +
             `═══════════════════════════════════════\n\n` +
             `✅ TRANSACTIONS AVAILABLE:\n` +
             `${transactions.map((t, i) => `${i + 1}. ${t}`).join('\n')}`;
    }
    
    // 14. Bank Transfers
    if (/(transfer to bank|centenary bank|withdraw to bank|bank transfer)/i.test(lowerText)) {
      return `═══════════════════════════════════════\n` +
             `BANK TRANSFERS\n` +
             `═══════════════════════════════════════\n\n` +
             `✅ YES, YOU CAN!\n${this.micropayKnowledge.commonQuestions.transferToBank}\n\n` +
             `🏦 SUPPORTED BANK:\nCentenary Rural Development Bank\n\n` +
             `📞 For details, contact: ${this.micropayKnowledge.contact.phone}`;
    }
    
    // 15. Sending to Non-Registered Users
    if (/(send to non|unregistered|voucher|gift)/i.test(lowerText)) {
      return `═══════════════════════════════════════\n` +
             `SENDING TO NON-REGISTERED USERS\n` +
             `═══════════════════════════════════════\n\n` +
             `✅ YES, POSSIBLE!\n${this.micropayKnowledge.commonQuestions.sendToNonRegistered}\n\n` +
             `🎟️ HOW IT WORKS:\nThe recipient can redeem the voucher at any MicroPay agent.`;
    }
    
    // 16. Future Services
    if (/(future|coming soon|new service|add|expand)/i.test(lowerText)) {
      return `═══════════════════════════════════════\n` +
             `COMING SOON\n` +
             `═══════════════════════════════════════\n\n` +
             `🚀 NEW SERVICES:\n${this.micropayKnowledge.commonQuestions.futureServices}`;
    }
    
    // 17. Inactive Account
    if (/(inactive|not used|dormant|haven't used)/i.test(lowerText)) {
      return `═══════════════════════════════════════\n` +
             `INACTIVE ACCOUNT\n` +
             `═══════════════════════════════════════\n\n` +
             `⏰ IMPORTANT INFO:\n${this.micropayKnowledge.commonQuestions.inactiveAccount}`;
    }
    
    // 18. Service Availability
    if (/(availability|downtime|not working|maintenance|issue)/i.test(lowerText)) {
      return `═══════════════════════════════════════\n` +
             `SERVICE AVAILABILITY\n` +
             `═══════════════════════════════════════\n\n` +
             `📌 INFORMATION:\n${this.micropayKnowledge.commonQuestions.serviceAvailability}`;
    }
    
    // 19. Account Closure
    if (/(close account|delete account|suspend account|deactivate)/i.test(lowerText)) {
      const terms = this.micropayKnowledge.termsAndConditions;
      return `═══════════════════════════════════════\n` +
             `ACCOUNT CLOSURE\n` +
             `═══════════════════════════════════════\n\n` +
             `❌ CLOSURE POLICY:\n${terms.accountClosure}\n\n` +
             `📝 HOW TO CLOSE:\nSubmit an official written request or visit a MicroPay Customer Service Centre.\n\n` +
             `📍 Customer Service Centre:\nPlot 61 Kanjokya Street, Kampala`;
    }
    
    // 20. Default - Not found in knowledge base
    return `═══════════════════════════════════════\n` +
           `HELP\n` +
           `═══════════════════════════════════════\n\n` +
           `❓ QUERY:\nI don't have specific information about "${userText}" in my knowledge base.\n\n` +
           `📞 CONTACT SUPPORT:\nPlease reach out to MicroPay Customer Care:\n` +
           `• Phone: ${this.micropayKnowledge.contact.phone}\n` +
           `• Email: ${this.micropayKnowledge.contact.email}\n\n` +
           `🆘 I CAN HELP YOU WITH:\n` +
           `✓ MicroPay services\n` +
           `✓ Registration process\n` +
           `✓ Transaction fees\n` +
           `✓ App download\n` +
           `✓ Terms and conditions\n` +
           `✓ Agent information\n` +
           `✓ Security features\n` +
           `✓ Contact information`;
  }

  async sendMessage(userText) {
    if (!userText?.trim()) return;

    this.addMessage(userText, 'user');
    this.addMessage('...', 'bot');

    try {
      const apiResponse = await this.fetchApiResponse(userText);
      this.removeLoadingMessage();
      this.addMessage(apiResponse, 'bot');

    } catch (error) {
      console.error('Chatbot API Error:', error);

      try {
        const knowledgeResponse = this.getKnowledgeBaseResponse(userText);
        this.removeLoadingMessage();
        this.addMessage(knowledgeResponse, 'bot');
      } catch (fallbackError) {
        console.error('Chatbot Fallback Error:', fallbackError);
        this.removeLoadingMessage();
        this.addMessage("I'm sorry, I'm having trouble responding right now.", 'bot');
      }
    }
  }

  async fetchApiResponse(userText) {
    const response = await fetch(this.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        message: userText
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    if (!data.reply) {
      throw new Error('Chatbot API returned no reply.');
    }

    return data.reply;
  }
  handleSubmit(event) {
    event.preventDefault();
    
    const userText = this.input?.value?.trim();
    if (!userText) return;

    if (this.input) {
      this.input.value = '';
    }

    this.sendMessage(userText);
  }

  greetUser() {
    const greeting = `Hello! I'm your MicroPay assistant. How can I help you today?`;
    this.addMessage(greeting, 'bot');
  }
}

function initializeMicropayChatbot() {
  if (window.micropayChatbot || !document.getElementById('micropay-chatbot-toggle')) {
    return;
  }

  window.micropayChatbot = new MicropayChatbot();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeMicropayChatbot, { once: true });
} else {
  initializeMicropayChatbot();
}
