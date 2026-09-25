(() => {
  "use strict";

  const translations = {
    vi: {
      skip: "Đến nội dung chính",
      "nav.about": "Giới thiệu",
      "nav.experience": "Kinh nghiệm",
      "nav.projects": "Dự án",
      "nav.skills": "Kỹ năng",
      "nav.contact": "Liên hệ",
      "hero.eyebrow": "ĐỊNH HƯỚNG · SOC ANALYST",
      "hero.hello": "Xin chào, tôi là",
      "hero.description":
        "Tôi theo đuổi an toàn thông tin, kết nối phân tích log, giám sát hệ thống và AI để hiểu rõ hơn những gì đang diễn ra phía sau dữ liệu.",
      "hero.projects": "Khám phá dự án",
      download: "Tải CV",
      "hero.location": "Đống Đa, Việt Nam",
      "hero.university": "Sinh viên Đại học CMC",
      "visual.title": "Nhìn sâu vào dữ liệu.<br>Hiểu đúng hệ thống.",
      "visual.bottom": "Con người ở trung tâm quyết định",
      "visual.note": "Điểm giao giữa AI và vận hành",
      "about.kicker": "MỘT CHÚT VỀ TÔI",
      "about.description": "Học từ nền tảng.<br>Trưởng thành qua thực hành.",
      "about.internship": "Kỳ thực tập chuyên môn",
      "about.projects": "Dự án học thuật",
      "about.english": "Trình độ tiếng Anh",
      "experience.kicker": "KINH NGHIỆM",
      "experience.title": "Từ kiến thức<br>đến thực tế.",
      "experience.description":
        "Tiếp cận các bài toán bảo mật, kiến trúc phần mềm và dữ liệu trong môi trường doanh nghiệp.",
      "experience.tag": "THỰC TẬP",
      "experience.role": "Thực tập sinh",
      "experience.pki":
        "Nghiên cứu chữ ký số, chứng thư X.509 và nguyên lý vận hành SSL/TLS trong hệ thống PKI.",
      "experience.javaTitle": "Kiến trúc ứng dụng Java",
      "experience.java":
        "Áp dụng Design Patterns, thiết kế HLD/LLD, xây dựng base code và phát triển các module tính năng.",
      "experience.stix":
        "Nghiên cứu và mô hình hóa dữ liệu chia sẻ mối đe dọa theo tiêu chuẩn STIX 2.",
      "experience.dataTitle": "Phân tích & thiết kế dữ liệu",
      "experience.data":
        "Phân tích yêu cầu, xây dựng tài liệu kỹ thuật và thiết kế mô hình cơ sở dữ liệu quan hệ.",
      "projects.kicker": "DỰ ÁN TIÊU BIỂU",
      "projects.title": "Học bằng cách xây dựng.",
      "projects.count": "04 DỰ ÁN / 2026 PORTFOLIO",
      "projects.thesis": "ĐỀ ÁN TỐT NGHIỆP",
      "projects.featured": "NỔI BẬT",
      "projects.aiopsTitle": "AIOps · Giám sát & tự phục hồi",
      "projects.aiopsDescription":
        "Kết hợp log và LLM để chẩn đoán sự cố, đề xuất kịch bản phục hồi với sự kiểm soát của con người.",
      "projects.details": "Chi tiết dự án",
      "projects.aiopsDetails":
        "Xây dựng pipeline thu thập log tập trung qua Vector vào Elasticsearch, kết hợp Prometheus/Grafana để giám sát hạ tầng. Ứng dụng Qwen2.5 phân tích log và đề xuất kịch bản phục hồi an toàn theo mô hình Human-in-the-Loop.",
      "projects.coursework": "DỰ ÁN HỌC PHẦN",
      "projects.fruitDescription":
        "Nhận diện chủng loại và độ tươi của hoa quả từ hình ảnh bằng Computer Vision và Deep Learning.",
      "projects.fruitDetails":
        "Xây dựng mô hình thị giác máy tính để phân loại hoa quả và nhận diện độ tươi từ dữ liệu hình ảnh.",
      "projects.cinemaTitle": "Cinema · Website đặt vé xem phim",
      "projects.cinemaDescription":
        "Phát triển backend, thiết kế cơ sở dữ liệu và xây dựng RESTful API cho ứng dụng đặt vé xem phim.",
      "projects.cinemaDetails":
        "Tập trung vào hệ thống backend, cấu trúc dữ liệu và các API đáp ứng yêu cầu bảo mật của ứng dụng.",
      "projects.matchTitle": "Match3 · Trò chơi di động",
      "projects.matchDescription":
        "Tham gia kiểm thử, phát hiện và sửa lỗi, triển khai trò chơi Flutter trên thiết bị di động.",
      "projects.matchDetails":
        "Đảm nhiệm kiểm thử phần mềm (QA), phát hiện và sửa lỗi ứng dụng; triển khai thành công sản phẩm trên thiết bị di động.",
      "skills.kicker": "KỸ NĂNG & NỀN TẢNG",
      "skills.title": "Bộ công cụ của tôi.",
      "skills.description":
        "Nền tảng kỹ thuật được tích lũy qua học tập, nghiên cứu và thực hành dự án.",
      "skills.programming": "Lập trình & dữ liệu",
      "skills.systems": "Hệ thống & mạng",
      "skills.security": "An ninh mạng",
      "skills.tls": "SSL/TLS cơ bản",
      "skills.projectTools": "Công nghệ trong dự án",
      "education.kicker": "HỌC VẤN",
      "education.school": "Đại học CMC",
      "education.major": "Chuyên ngành An toàn thông tin",
      "education.english": "TIẾNG ANH · B2",
      "certificate.kicker": "CHỨNG CHỈ CHUYÊN MÔN",
      "contact.kicker": "KẾT NỐI",
      "contact.title": "Bắt đầu một<br>cuộc trò chuyện<span>?</span>",
      "contact.description":
        "Tôi mong muốn tìm kiếm cơ hội Thực tập sinh / Junior SOC Analyst, học hỏi từ đội ngũ và đóng góp vào các bài toán bảo mật thực tế.",
      "contact.emailAction": "Gửi email cho tôi",
      "contact.phone": "ĐIỆN THOẠI",
      "contact.location": "ĐỊA ĐIỂM",
      "contact.cv": "Tải bản CV đầy đủ",
      "footer.label": "Portfolio cá nhân",
      "footer.top": "Về đầu trang",
      "meta.title": "Nguyễn Hoàng Anh · An toàn thông tin",
      "meta.description":
        "Portfolio của Nguyễn Hoàng Anh — sinh viên An toàn thông tin tại Đại học CMC, định hướng SOC Analyst. Kinh nghiệm, dự án AIOps, kỹ năng và CV.",
      "a11y.language": "Chuyển sang tiếng Anh",
      "a11y.menuOpen": "Mở menu",
      "a11y.menuClose": "Đóng menu",
      "a11y.home": "Nguyễn Hoàng Anh — Trang chủ",
      "a11y.navigation": "Điều hướng chính",
      "a11y.mobileNavigation": "Điều hướng trên điện thoại",
      "a11y.visual":
        "Mô hình thu thập log, phân tích và phản hồi với sự kiểm soát của con người",
    },
    en: {
      skip: "Skip to main content",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "hero.eyebrow": "ASPIRING · SOC ANALYST",
      "hero.hello": "Hello, I'm",
      "hero.description":
        "I pursue information security, bringing together log analysis, system monitoring, and AI to understand what is happening behind the data.",
      "hero.projects": "Explore my projects",
      download: "Download CV",
      "hero.location": "Đống Đa, Vietnam",
      "hero.university": "Student at CMC University",
      "visual.title": "Look deeper into data.<br>Understand the system.",
      "visual.bottom": "People at the heart of decisions",
      "visual.note": "Where AI meets operations",
      "about.kicker": "A LITTLE ABOUT ME",
      "about.description": "Learn the foundations.<br>Grow through practice.",
      "about.internship": "Professional internship",
      "about.projects": "Academic projects",
      "about.english": "English proficiency",
      "experience.kicker": "EXPERIENCE",
      "experience.title": "From knowledge<br>to practice.",
      "experience.description":
        "Exploring security, software architecture, and data challenges in a professional environment.",
      "experience.tag": "INTERNSHIP",
      "experience.role": "Intern",
      "experience.pki":
        "Researched digital signatures, X.509 certificates, and how SSL/TLS operates within PKI systems.",
      "experience.javaTitle": "Java application architecture",
      "experience.java":
        "Applied design patterns, created HLD/LLD architecture, built base code, and developed feature modules.",
      "experience.stix":
        "Researched and modeled threat intelligence sharing data using the STIX 2 standard.",
      "experience.dataTitle": "Data analysis & design",
      "experience.data":
        "Analyzed requirements, wrote technical documentation, and designed relational database models.",
      "projects.kicker": "SELECTED PROJECTS",
      "projects.title": "Learning by building.",
      "projects.count": "04 PROJECTS / 2026 PORTFOLIO",
      "projects.thesis": "GRADUATION PROJECT",
      "projects.featured": "FEATURED",
      "projects.aiopsTitle": "AIOps · Monitoring & self-healing",
      "projects.aiopsDescription":
        "Combining logs and an LLM to diagnose incidents and propose recovery actions with human oversight.",
      "projects.details": "Project details",
      "projects.aiopsDetails":
        "Built a centralized log pipeline with Vector and Elasticsearch, alongside infrastructure monitoring through Prometheus and Grafana. Used Qwen2.5 to analyze logs and propose safe recovery actions with human-in-the-loop oversight.",
      "projects.coursework": "COURSE PROJECT",
      "projects.fruitDescription":
        "Identifying fruit types and freshness from images with computer vision and deep learning.",
      "projects.fruitDetails":
        "Built a computer vision model to classify fruit and identify freshness from image data.",
      "projects.cinemaTitle": "Cinema · Ticket booking website",
      "projects.cinemaDescription":
        "Developed the backend, designed the database, and built RESTful APIs for a cinema ticket booking application.",
      "projects.cinemaDetails":
        "Focused on backend development, data structures, and APIs that meet the application's security requirements.",
      "projects.matchTitle": "Match3 · Mobile game",
      "projects.matchDescription":
        "Tested the software, found and fixed bugs, and deployed a Flutter game to mobile devices.",
      "projects.matchDetails":
        "Handled software quality assurance, identified and fixed application bugs, and successfully deployed the product to mobile devices.",
      "skills.kicker": "SKILLS & FOUNDATIONS",
      "skills.title": "My technical toolkit.",
      "skills.description":
        "A technical foundation built through study, research, and hands-on project work.",
      "skills.programming": "Programming & data",
      "skills.systems": "Systems & networking",
      "skills.security": "Cybersecurity",
      "skills.tls": "SSL/TLS fundamentals",
      "skills.projectTools": "Project technologies",
      "education.kicker": "EDUCATION",
      "education.school": "CMC University",
      "education.major": "Major in Information Security",
      "education.english": "ENGLISH · B2",
      "certificate.kicker": "PROFESSIONAL CERTIFICATE",
      "contact.kicker": "GET IN TOUCH",
      "contact.title": "Shall we start<br>a conversation<span>?</span>",
      "contact.description":
        "I'm looking for an internship or Junior SOC Analyst role, where I can learn from the team and contribute to real-world security challenges.",
      "contact.emailAction": "Send me an email",
      "contact.phone": "PHONE",
      "contact.location": "LOCATION",
      "contact.cv": "Download my full CV",
      "footer.label": "Personal portfolio",
      "footer.top": "Back to top",
      "meta.title": "Nguyễn Hoàng Anh · Information Security",
      "meta.description":
        "Nguyễn Hoàng Anh's portfolio — Information Security student at CMC University and aspiring SOC Analyst. Explore experience, AIOps projects, skills, and CV.",
      "a11y.language": "Switch to Vietnamese",
      "a11y.menuOpen": "Open menu",
      "a11y.menuClose": "Close menu",
      "a11y.home": "Nguyễn Hoàng Anh — Home",
      "a11y.navigation": "Main navigation",
      "a11y.mobileNavigation": "Mobile navigation",
      "a11y.visual":
        "Log collection, analysis, and response architecture with human oversight",
    },
  };

  // Only these hardcoded translations contain presentation markup.
  const richTextKeys = new Set([
    "visual.title",
    "about.description",
    "experience.title",
    "contact.title",
  ]);
  const storageKey = "hoang-anh-portfolio-language";
  const languageButton = document.querySelector(".language-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  let language = "vi";

  try {
    const savedLanguage = localStorage.getItem(storageKey);
    if (savedLanguage === "vi" || savedLanguage === "en")
      language = savedLanguage;
  } catch {
    // The portfolio also works when browser storage is unavailable.
  }

  function updateMenuLabel() {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute(
      "aria-label",
      translations[language][
        mobileNav.hidden ? "a11y.menuOpen" : "a11y.menuClose"
      ],
    );
  }

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    const copy = translations[language];
    document.documentElement.lang = language;
    document.title = copy["meta.title"];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (!Object.prototype.hasOwnProperty.call(copy, key)) return;
      if (richTextKeys.has(key)) element.innerHTML = copy[key];
      else element.textContent = copy[key];
    });

    document
      .querySelectorAll(
        'meta[name="description"], meta[property="og:description"]',
      )
      .forEach((meta) =>
        meta.setAttribute("content", copy["meta.description"]),
      );
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", copy["meta.title"]);
    document
      .querySelector(".brand")
      ?.setAttribute("aria-label", copy["a11y.home"]);
    document
      .querySelector(".desktop-nav")
      ?.setAttribute("aria-label", copy["a11y.navigation"]);
    mobileNav?.setAttribute("aria-label", copy["a11y.mobileNavigation"]);
    document
      .querySelector(".hero-visual")
      ?.setAttribute("aria-label", copy["a11y.visual"]);

    if (languageButton) {
      languageButton.setAttribute("aria-label", copy["a11y.language"]);
      languageButton.setAttribute("title", copy["a11y.language"]);
      languageButton
        .querySelector(".lang-vi")
        ?.classList.toggle("active", language === "vi");
      languageButton
        .querySelector(".lang-en")
        ?.classList.toggle("active", language === "en");
    }
    updateMenuLabel();
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // Changing languages does not depend on saving the preference.
    }
    queueNavigationUpdate();
  }

  function setMenuOpen(open, restoreFocus = false) {
    if (!menuButton || !mobileNav) return;
    mobileNav.hidden = !open;
    document.body.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    updateMenuLabel();
    if (restoreFocus) menuButton.focus();
  }

  languageButton?.addEventListener("click", () => {
    applyLanguage(language === "vi" ? "en" : "vi");
  });

  menuButton?.addEventListener("click", () => {
    if (!mobileNav) return;
    setMenuOpen(mobileNav.hidden);
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileNav && !mobileNav.hidden) {
      event.preventDefault();
      setMenuOpen(false, true);
    }
  });
  function closeMenuOutside(event) {
    if (
      mobileNav &&
      !mobileNav.hidden &&
      !mobileNav.contains(event.target) &&
      !menuButton?.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  }
  document.addEventListener("click", closeMenuOutside);
  document.addEventListener("focusin", closeMenuOutside);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) setMenuOpen(false);
    queueNavigationUpdate();
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Highlight the section being read, including long sections and mobile links.
  // Content always stays visible; this enhancement only updates navigation.
  const navLinks = [
    ...document.querySelectorAll(
      '.desktop-nav a[href^="#"], .mobile-nav a[href^="#"], .header-contact[href^="#"]',
    ),
  ];
  const sections = [...document.querySelectorAll("main > section[id]")];
  const headerInner = document.querySelector(".header-inner");
  let navigationFrame = 0;
  let currentSectionId = null;

  function updateNavigation() {
    navigationFrame = 0;
    const marker = Math.min(
      window.innerHeight * 0.3,
      Math.max(100, (headerInner?.getBoundingClientRect().height || 64) + 40),
    );
    let current = sections.findLast(
      (section) => section.getBoundingClientRect().top <= marker,
    );
    if (
      window.scrollY > 0 &&
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
    ) {
      current = sections[sections.length - 1];
    }
    const id = current?.id || "";
    if (id === currentSectionId) return;
    currentSectionId = id;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  function queueNavigationUpdate() {
    if (!navigationFrame)
      navigationFrame = window.requestAnimationFrame(updateNavigation);
  }

  window.addEventListener("scroll", queueNavigationUpdate, { passive: true });
  window.addEventListener("load", queueNavigationUpdate);
  window.addEventListener("hashchange", queueNavigationUpdate);
  document.addEventListener("toggle", queueNavigationUpdate, true);
  document.fonts?.ready.then(queueNavigationUpdate);

  setMenuOpen(false);
  applyLanguage(language);
})();
