// Language support for Islamic Inheritance Calculator
const translations = {
    en: {
        // Navigation
        home: "🏠 Home",
        about: "ℹ️ About",
        contact: "📞 Contact",
        privacy: "🔒 Privacy",
        
        // Main page
        title: "📋 Islamic Inheritance Calculator",
        subtitle: "Easy-to-use calculator for Islamic inheritance distribution",
        instructions_title: "📝 How to Use This Calculator",
        step1: "Enter the total value of the estate (property, money, etc.)",
        step2: "Add family members who are alive and eligible for inheritance",
        step3: "Click \"Calculate Inheritance\" to see the distribution",
        
        // Form sections
        estate_value: "💰 Estate Value",
        total_estate: "Total Estate Value (PKR)",
        estate_placeholder: "Enter total estate value",
        estate_help: "Include all property, money, and assets",
        
        gold_silver: "🥇 Gold & Silver Assets",
        gold_weight: "Gold Weight (in grams)",
        silver_weight: "Silver Weight (in grams)",
        gold_placeholder: "Enter gold weight",
        silver_placeholder: "Enter silver weight",
        gold_help: "Leave empty if no gold",
        silver_help: "Leave empty if no silver",
        gold_rate: "💛 Gold Rate:",
        silver_rate: "🤍 Silver Rate:",
        loading: "Loading...",
        
        family_members: "👨‍👩‍👧‍👦 Family Members",
        parents: "👴👵 Parents",
        father_alive: "Father is alive",
        mother_alive: "Mother is alive",
        
        spouse: "💑 Spouse",
        spouse_alive: "Spouse is alive",
        spouse_type: "Spouse Type",
        select_spouse: "Select Spouse Type",
        husband: "Husband",
        wife: "Wife",
        
        children: "👶 Children",
        sons_count: "Number of Sons",
        daughters_count: "Number of Daughters",
        sons_placeholder: "Enter number of sons",
        daughters_placeholder: "Enter number of daughters",
        sons_details: "👦 Sons Details",
        daughters_details: "👧 Daughters Details",
        son_name: "Son",
        daughter_name: "Daughter",
        name_placeholder: "Name (optional)",
        
        extended_family: "👨‍👩‍👧‍👦 Extended Family",
        grandfather_alive: "Grandfather is alive",
        grandmother_alive: "Grandmother is alive",
        brothers_alive: "Brothers are alive",
        sisters_alive: "Sisters are alive",
        
        calculate_btn: "🧮 Calculate Inheritance Distribution",
        
        // Results
        results_title: "📊 Islamic Inheritance Distribution",
        total_estate_value: "💰 Total Estate Value:",
        asset_breakdown: "🥇 Asset Breakdown",
        cash_property: "Cash/Property:",
        gold_asset: "Gold",
        silver_asset: "Silver",
        remaining: "Remaining (Unallocated)",
        summary: "📋 Summary:",
        distributed: "distributed out of",
        
        // Footer
        quick_links: "Quick Links",
        features: "Features",
        contact_info: "Contact Info",
        built_by: "Built with ❤️ by",
        
        // About page
        about_title: "ℹ️ About Us",
        about_subtitle: "Learn about our mission and the Islamic Inheritance Calculator",
        mission: "Our Mission",
        mission_text: "We are dedicated to providing accurate and easy-to-use Islamic inheritance calculations. Our goal is to help families understand and implement Islamic inheritance laws correctly, ensuring fair distribution of assets according to Islamic principles.",
        what_we_do: "What We Do",
        accurate_calculations: "Accurate Calculations",
        accurate_desc: "Our calculator follows authentic Islamic inheritance laws and provides precise distribution calculations.",
        live_rates: "Live Gold & Silver Rates",
        rates_desc: "Get real-time precious metal rates to calculate the value of gold and silver assets accurately.",
        multiple_languages: "Multiple Languages",
        languages_desc: "Available in 10+ languages to serve the global Muslim community effectively.",
        mobile_friendly: "Mobile Friendly",
        mobile_desc: "Works perfectly on all devices - smartphones, tablets, and computers.",
        
        principles: "Islamic Inheritance Principles",
        spouse_inheritance: "Spouse Inheritance",
        spouse_husband: "Husband gets 1/4 if there are children, 1/2 if no children",
        spouse_wife: "Wife gets 1/8 if there are children, 1/4 if no children",
        parents_inheritance: "Parents Inheritance",
        father_inheritance: "Father gets 1/6 if there are children, 1/3 if no children",
        mother_inheritance: "Mother gets 1/6 if there are children, 1/3 if no children",
        children_inheritance: "Children Inheritance",
        sons_inheritance: "Sons get 2 shares each",
        daughters_inheritance: "Daughters get 1 share each",
        children_remaining: "Remaining goes to children in this ratio",
        
        team: "Our Team",
        team_text: "This application is developed by DeepVidia.com, a technology company committed to creating useful tools for the Muslim community. Our team combines expertise in Islamic law, software development, and user experience design to deliver the best possible inheritance calculator.",
        
        why_choose: "Why Choose Our Calculator?",
        reliable: "Reliable & Accurate",
        reliable_desc: "Based on authentic Islamic inheritance laws and verified by scholars",
        easy_use: "Easy to Use",
        easy_desc: "Simple interface designed for users of all education levels",
        comprehensive: "Comprehensive",
        comprehensive_desc: "Includes all family members and asset types (cash, property, gold, silver)",
        free: "Free to Use",
        free_desc: "No registration required, completely free for everyone",
        
        ready_calculate: "Ready to Calculate Your Inheritance?",
        ready_text: "Start using our calculator now to get accurate Islamic inheritance distribution for your family.",
        start_calculator: "🧮 Start Calculator",
        
        // Contact page
        contact_title: "📞 Contact Us",
        contact_subtitle: "Get in touch with our team for support and feedback",
        get_touch: "Get in Touch",
        touch_text: "We're here to help! Whether you have questions about Islamic inheritance, need technical support, or want to provide feedback, we'd love to hear from you.",
        email: "Email",
        website: "Website",
        response_time: "Response Time",
        respond_24: "We typically respond within 24 hours",
        visit_website: "Visit our main website for more information",
        aim_respond: "We aim to respond to all inquiries quickly",
        
        send_message: "Send us a Message",
        full_name: "Full Name *",
        email_address: "Email Address *",
        subject: "Subject *",
        message: "Message *",
        name_placeholder: "Enter your full name",
        email_placeholder: "Enter your email address",
        select_subject: "Select a subject",
        general_inquiry: "General Inquiry",
        technical_support: "Technical Support",
        feedback: "Feedback",
        report_bug: "Report a Bug",
        feature_request: "Feature Request",
        other: "Other",
        message_placeholder: "Please describe your inquiry or feedback in detail...",
        send_btn: "📤 Send Message",
        
        faq: "Frequently Asked Questions",
        faq_accuracy: "How accurate is the inheritance calculation?",
        faq_accuracy_ans: "Our calculator follows authentic Islamic inheritance laws and has been verified by Islamic scholars. However, for legal matters, we recommend consulting with a qualified Islamic scholar or lawyer.",
        faq_rates: "Are the gold and silver rates real-time?",
        faq_rates_ans: "Yes, we fetch live rates from reliable sources. The rates are updated regularly to ensure accurate calculations for precious metals.",
        faq_free: "Is this calculator free to use?",
        faq_free_ans: "Absolutely! Our Islamic Inheritance Calculator is completely free to use. No registration or payment required.",
        faq_legal: "Can I use this for legal purposes?",
        faq_legal_ans: "While our calculations are accurate, we recommend using this as a reference tool. For legal inheritance matters, please consult with qualified legal professionals.",
        faq_languages: "Do you support multiple languages?",
        faq_languages_ans: "Yes! Our calculator is available in 10+ languages including Arabic, Urdu, French, Spanish, German, Chinese, Hindi, Turkish, and Indonesian.",
        faq_bug: "How can I report a bug or suggest a feature?",
        faq_bug_ans: "You can use the contact form above or email us directly at info@deepvidia.com. We welcome all feedback and suggestions!",
        
        // Privacy page
        privacy_title: "🔒 Privacy Policy",
        privacy_subtitle: "How we protect your data and maintain your privacy",
        last_updated: "Last Updated:",
        introduction: "Introduction",
        intro_text: "At Islamic Inheritance Calculator, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our inheritance calculator.",
        
        info_collect: "Information We Collect",
        calculator_data: "📊 Calculator Data",
        calculator_data_items: [
            "Estate values and asset information you enter",
            "Family member details for inheritance calculations",
            "Calculation results and distribution data"
        ],
        calculator_note: "Note: This data is processed locally in your browser and is not stored on our servers.",
        
        usage_info: "🌐 Usage Information",
        usage_items: [
            "Browser type and version",
            "Device information (mobile, desktop, tablet)",
            "Language preferences",
            "Pages visited and time spent"
        ],
        
        contact_info: "📧 Contact Information",
        contact_items: [
            "Name and email address (only when you contact us)",
            "Message content and subject",
            "Contact form submissions"
        ],
        
        how_use: "How We Use Your Information",
        primary_purposes: "🎯 Primary Purposes",
        primary_items: [
            "Provide inheritance calculations based on Islamic law",
            "Display live gold and silver rates",
            "Improve calculator functionality and accuracy",
            "Respond to your inquiries and support requests"
        ],
        
        analytics: "📈 Analytics & Improvement",
        analytics_items: [
            "Analyze usage patterns to improve our service",
            "Identify and fix technical issues",
            "Develop new features and functionality",
            "Ensure website performance and security"
        ],
        
        data_security: "Data Security",
        encryption: "🔐 Encryption",
        encryption_desc: "All data transmission is encrypted using HTTPS/SSL protocols",
        local_processing: "🏠 Local Processing",
        local_desc: "Calculator data is processed locally in your browser, not on our servers",
        no_storage: "🛡️ No Storage",
        no_storage_desc: "We do not store your inheritance calculations or personal data",
        secure_servers: "🔒 Secure Servers",
        secure_desc: "Our servers are protected with industry-standard security measures",
        
        third_party: "Third-Party Services",
        third_party_text: "We may use the following third-party services to improve our website:",
        analytics_service: "Analytics: Google Analytics (anonymized data only)",
        hosting_service: "Hosting: Secure cloud hosting services",
        rates_service: "Rates API: For live gold and silver rates",
        third_party_note: "These services have their own privacy policies, and we recommend reviewing them.",
        
        your_rights: "Your Rights",
        right_access: "👁️ Right to Access",
        right_access_desc: "You can request information about what data we have about you",
        right_rectification: "✏️ Right to Rectification",
        right_rect_desc: "You can request correction of inaccurate personal data",
        right_erasure: "🗑️ Right to Erasure",
        right_erasure_desc: "You can request deletion of your personal data",
        right_object: "🚫 Right to Object",
        right_object_desc: "You can object to processing of your personal data",
        
        cookies: "Cookies Policy",
        cookies_text: "We use minimal cookies for essential website functionality:",
        essential_cookies: "Essential Cookies: Required for basic website operation",
        analytics_cookies: "Analytics Cookies: Help us understand how visitors use our site",
        preference_cookies: "Preference Cookies: Remember your language and settings",
        cookies_note: "You can disable cookies in your browser settings, though this may affect website functionality.",
        
        children_privacy: "Children's Privacy",
        children_text: "Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.",
        
        international: "International Data Transfers",
        international_text: "Our services may be accessed from countries around the world. By using our website, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws.",
        
        changes: "Changes to This Policy",
        changes_text: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date. We encourage you to review this Privacy Policy periodically.",
        
        contact_privacy: "Contact Us",
        contact_privacy_text: "If you have any questions about this Privacy Policy or our data practices, please contact us:",
        contact_email: "📧 Email: info@deepvidia.com",
        contact_website: "🌐 Website: www.deepvidia.com",
        contact_form: "📞 Contact Form: Contact Us Page",
        
        legal_notice: "Legal Notice",
        legal_text: "This Privacy Policy is provided for informational purposes only and does not constitute legal advice. For legal matters regarding data protection and privacy, please consult with qualified legal professionals."
    },
    
    ar: {
        // Arabic translations
        home: "🏠 الرئيسية",
        about: "ℹ️ حول",
        contact: "📞 اتصل بنا",
        privacy: "🔒 الخصوصية",
        title: "📋 حاسبة الميراث الإسلامية",
        subtitle: "حاسبة سهلة الاستخدام لتوزيع الميراث الإسلامي",
        // Add more Arabic translations as needed
    },
    
    ur: {
        // Urdu translations
        home: "🏠 ہوم",
        about: "ℹ️ ہمارے بارے میں",
        contact: "📞 رابطہ",
        privacy: "🔒 رازداری",
        title: "📋 اسلامی وراثت کیلکولیٹر",
        subtitle: "اسلامی وراثت کی تقسیم کے لیے آسان استعمال کیلکولیٹر",
        // Add more Urdu translations as needed
    },
    
    fr: {
        // French translations
        home: "🏠 Accueil",
        about: "ℹ️ À propos",
        contact: "📞 Contact",
        privacy: "🔒 Confidentialité",
        title: "📋 Calculateur d'Héritage Islamique",
        subtitle: "Calculateur facile à utiliser pour la distribution d'héritage islamique",
        // Add more French translations as needed
    },
    
    es: {
        // Spanish translations
        home: "🏠 Inicio",
        about: "ℹ️ Acerca de",
        contact: "📞 Contacto",
        privacy: "🔒 Privacidad",
        title: "📋 Calculadora de Herencia Islámica",
        subtitle: "Calculadora fácil de usar para la distribución de herencia islámica",
        // Add more Spanish translations as needed
    },
    
    de: {
        // German translations
        home: "🏠 Startseite",
        about: "ℹ️ Über uns",
        contact: "📞 Kontakt",
        privacy: "🔒 Datenschutz",
        title: "📋 Islamischer Erbrechner",
        subtitle: "Einfach zu bedienender Rechner für islamische Erbverteilung",
        // Add more German translations as needed
    },
    
    zh: {
        // Chinese translations
        home: "🏠 首页",
        about: "ℹ️ 关于",
        contact: "📞 联系",
        privacy: "🔒 隐私",
        title: "📋 伊斯兰继承计算器",
        subtitle: "易于使用的伊斯兰继承分配计算器",
        // Add more Chinese translations as needed
    },
    
    hi: {
        // Hindi translations
        home: "🏠 होम",
        about: "ℹ️ हमारे बारे में",
        contact: "📞 संपर्क",
        privacy: "🔒 गोपनीयता",
        title: "📋 इस्लामिक वारिस कैलकुलेटर",
        subtitle: "इस्लामिक वारिस वितरण के लिए आसान उपयोग कैलकुलेटर",
        // Add more Hindi translations as needed
    },
    
    tr: {
        // Turkish translations
        home: "🏠 Ana Sayfa",
        about: "ℹ️ Hakkımızda",
        contact: "📞 İletişim",
        privacy: "🔒 Gizlilik",
        title: "📋 İslami Miras Hesaplayıcısı",
        subtitle: "İslami miras dağıtımı için kolay kullanımlı hesaplayıcı",
        // Add more Turkish translations as needed
    },
    
    id: {
        // Indonesian translations
        home: "🏠 Beranda",
        about: "ℹ️ Tentang",
        contact: "📞 Kontak",
        privacy: "🔒 Privasi",
        title: "📋 Kalkulator Warisan Islam",
        subtitle: "Kalkulator mudah digunakan untuk distribusi warisan Islam",
        // Add more Indonesian translations as needed
    }
};

// Current language
let currentLanguage = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    updatePageContent();
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Function to update page content
function updatePageContent() {
    const t = translations[currentLanguage] || translations.en;
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = t.home;
        else if (href === 'about.html') link.textContent = t.about;
        else if (href === 'contact.html') link.textContent = t.contact;
        else if (href === 'privacy.html') link.textContent = t.privacy;
    });
    
    // Update main page content
    const title = document.querySelector('h1');
    if (title && title.textContent.includes('Islamic Inheritance Calculator')) {
        title.textContent = t.title;
    }
    
    const subtitle = document.querySelector('.header p');
    if (subtitle) {
        subtitle.textContent = t.subtitle;
    }
    
    // Update form labels and placeholders
    updateFormElements(t);
    
    // Update footer
    updateFooter(t);
}

// Function to update form elements
function updateFormElements(t) {
    // Update labels
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        const forAttr = label.getAttribute('for');
        if (forAttr === 'totalEstate') label.textContent = t.total_estate;
        else if (forAttr === 'goldWeight') label.textContent = t.gold_weight;
        else if (forAttr === 'silverWeight') label.textContent = t.silver_weight;
        else if (forAttr === 'sonsCount') label.textContent = t.sons_count;
        else if (forAttr === 'daughtersCount') label.textContent = t.daughters_count;
        else if (forAttr === 'father') label.textContent = t.father_alive;
        else if (forAttr === 'mother') label.textContent = t.mother_alive;
        else if (forAttr === 'spouse') label.textContent = t.spouse_alive;
        else if (forAttr === 'spouseType') label.textContent = t.spouse_type;
        else if (forAttr === 'grandfather') label.textContent = t.grandfather_alive;
        else if (forAttr === 'grandmother') label.textContent = t.grandmother_alive;
        else if (forAttr === 'brothers') label.textContent = t.brothers_alive;
        else if (forAttr === 'sisters') label.textContent = t.sisters_alive;
    });
    
    // Update placeholders
    const inputs = document.querySelectorAll('input[placeholder]');
    inputs.forEach(input => {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder.includes('total estate value')) input.placeholder = t.estate_placeholder;
        else if (placeholder.includes('gold weight')) input.placeholder = t.gold_placeholder;
        else if (placeholder.includes('silver weight')) input.placeholder = t.silver_placeholder;
        else if (placeholder.includes('number of sons')) input.placeholder = t.sons_placeholder;
        else if (placeholder.includes('number of daughters')) input.placeholder = t.daughters_placeholder;
    });
    
    // Update help text
    const helpTexts = document.querySelectorAll('.help-text');
    helpTexts.forEach(help => {
        if (help.textContent.includes('Include all property')) help.textContent = t.estate_help;
        else if (help.textContent.includes('Leave empty if no gold')) help.textContent = t.gold_help;
        else if (help.textContent.includes('Leave empty if no silver')) help.textContent = t.silver_help;
    });
    
    // Update button text
    const calculateBtn = document.querySelector('.btn');
    if (calculateBtn && calculateBtn.textContent.includes('Calculate')) {
        calculateBtn.textContent = t.calculate_btn;
    }
}

// Function to update footer
function updateFooter(t) {
    const footerSections = document.querySelectorAll('.footer-section h4');
    footerSections.forEach(section => {
        if (section.textContent === 'Quick Links') section.textContent = t.quick_links;
        else if (section.textContent === 'Features') section.textContent = t.features;
        else if (section.textContent === 'Contact Info') section.textContent = t.contact_info;
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = savedLanguage;
    }
    
    // Update page content
    updatePageContent();
}); 