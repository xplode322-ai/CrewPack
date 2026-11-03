/**
 * Localization dictionary.
 *
 * Every user-facing string in the presentation lives here, keyed by language.
 * Brand terminology — "WebMasters" and "WebSites" — intentionally stays in
 * English across ALL locales (per product requirement). Category/brand terms
 * such as "Crypto", "iGaming", "Nutra", "KOL", "CPM/CPC" are likewise kept as-is.
 *
 * Layout metadata (Tailwind classes, image URLs, numeric stat values, Lucide
 * icon references) is NOT translated and remains in the component/data files.
 */

export type Language = "en" | "ru" | "es" | "ua";

export interface LanguageOption {
  code: Language;
  label: string;
  short: string;
}

export const languages: LanguageOption[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "es", label: "Español", short: "ES" },
  { code: "ua", label: "Українська", short: "UA" },
];

export interface ServiceCopy {
  title: string;
  description: string;
  statLabel?: string;
  tags?: string[];
}

export interface ProjectCopy {
  category: string;
  title: string;
  description: string;
  statLabels: string[];
}

export interface Dictionary {
  nav: {
    links: { label: string; href: string }[];
    getTraffic: string;
  };
  hero: {
    badge: string;
    headline: { line1: string; line2: string; accentWords: string[] };
    subheadline: string;
    cta: { primary: string; secondary: string };
    statLabels: string[];
    ticker: string[];
  };
  adFormats: {
    eyebrow: string;
    title: { line1: string; accent: string };
    description: string;
    formats: { name: string; description: string }[];
  };
  services: {
    eyebrow: string;
    title: { line1: string; accent: string };
    description: string;
    items: Record<string, ServiceCopy>;
  };
  influencers: {
    eyebrow: string;
    title: { line1: string; accent: string };
    description: string;
    membersLine: string;
    microStats: string[];
    more: string;
  };
  projects: {
    eyebrow: string;
    title: { line1: string; accent: string };
    description: string;
    items: Record<string, ProjectCopy>;
  };
  cta: {
    eyebrow: string;
    title: { line1: string; accent: string };
    description: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

export const dictionaries: Record<Language, Dictionary> = {
  /* ------------------------------------------------------------------ */
  /* ENGLISH                                                             */
  /* ------------------------------------------------------------------ */
  en: {
    nav: {
      links: [
        { label: "Ad Formats", href: "#ad-formats" },
        { label: "Services", href: "#services" },
        { label: "Influencers", href: "#influencers" },
        { label: "Verticals", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      getTraffic: "Get Traffic",
    },
    hero: {
      badge: "Worldwide coverage · Crypto · iGaming · Nutra",
      headline: {
        line1: "Global Web Traffic",
        line2: "Buying Agency",
        accentWords: ["Agency"],
      },
      subheadline:
        "Exclusive organic traffic direct from WebMasters. Worldwide coverage, lowest market commissions.",
      cta: { primary: "Get Traffic", secondary: "Become a Partner" },
      statLabels: [
        "Exclusive WebSites",
        "Countries covered",
        "Direct with WebMasters",
      ],
      ticker: [
        "Crypto",
        "iGaming",
        "Nutra",
        "Organic Traffic",
        "Direct WebMasters",
        "Lowest Commissions",
        "Worldwide Coverage",
        "2500+ Exclusive WebSites",
      ],
    },
    adFormats: {
      eyebrow: "Ad Formats",
      title: { line1: "High-Converting", accent: "Ad Formats" },
      description: "Five battle-tested formats engineered for conversion.",
      formats: [
        {
          name: "Display & Site Branding",
          description:
            "Premium banners and full-site branding for maximum visibility.",
        },
        {
          name: "Interactive & Video",
          description:
            "Persistent Catfish/Stickers and captive in-player video ads (Pre-roll/Pause-roll).",
        },
        {
          name: "Native PR & SEO",
          description:
            "Custom articles, deep-dive reviews, and linkbuilding on trusted WebSites.",
        },
        {
          name: "Viral Social",
          description: "Massive top-of-funnel reach via TikTok Clippers.",
        },
        {
          name: "KOL & Streamers",
          description:
            "Direct endorsements and ambassadorships across Twitch, Kick, Telegram, X, and TikTok.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: { line1: "Built to move", accent: "high-intent traffic" },
      description:
        "A full-stack media buying operation — from exclusive inventory to transparent reporting.",
      items: {
        "direct-admin-deals": {
          title: "Direct WebMaster Deals",
          description:
            "No middlemen. No inflated margins. We handle all payments via local solutions for WebMaster convenience (USDT, bank transfers, local cards), assist with ad code installation, and negotiate exclusive cooperation terms (prepayment, or post-payment based on advertiser statistics). Our team operates 24/7, always online to onboard new WebMasters and advertisers seamlessly.",
          statLabel:
            "Exclusive WebSites negotiated directly with WebMasters",
          tags: [
            "Sports News",
            "Global News",
            "Crypto WebSites",
            "Adult",
            "File Sharing",
            "Forums",
            "Rating WebSites",
            "Linkbuilding",
            "Social Media",
            "TikTok Clippers",
          ],
        },
        "verticals": {
          title: "High-Intent Verticals",
          description: "Three niches, one standard: Crypto, iGaming, Nutra.",
        },
        "global-coverage": {
          title: "Global Coverage",
          description: "Worldwide reach, localized execution.",
          statLabel: "countries covered",
        },
        "scraping": {
          title: "Proprietary Scraping",
          description:
            "Custom-built scrapers find the exact WebSites you need, anywhere.",
        },
        "pricing": {
          title: "Flexible Pricing",
          description:
            "We operate exclusively on CPM, CPC, and Flat Fee models. While many WebMasters require prepayment, we negotiate exceptions for post-payment based on advertiser statistics.",
        },
      },
    },
    influencers: {
      eyebrow: "Influencer & Web3 Marketing",
      title: { line1: "Communities that", accent: "convert" },
      description:
        "We recruit KOLs, build owned communities across the platforms that actually move attention, and maintain a dedicated database of TikTok clippers to scale advertiser brands.",
      membersLine:
        "Organic members, scaled per campaign — from niche KOL seeding to full-blown community takeovers.",
      microStats: ["Avg. growth", "Launch window", "Organic"],
      more: "+ more",
    },
    projects: {
      eyebrow: "Verticals & Results",
      title: { line1: "Selected", accent: "playbooks" },
      description:
        "Campaigns engineered for high-intent audiences across crypto, iGaming and nutra.",
      items: {
        sportsbook: {
          category: "iGaming",
          title: "Sportsbook Scale-Up",
          description:
            "Casino and sportsbook audiences that convert around the clock — fuelled by high-stakes matchday moments. We leverage dynamic odds integration, real-time trigger events, and VIP retention strategies to maximize player LTV and scale first-time deposits.",
          statLabels: ["Impressions / mo", "Avg. CTR", "Geos"],
        },
        exchange: {
          category: "Crypto",
          title: "Exchange Launch",
          description:
            "High-intent traders and Web3 audiences across tier-1 and emerging markets.",
          statLabels: ["Impressions / mo", "Avg. CTR", "Geos"],
        },
        nutra: {
          category: "Nutra",
          title: "Direct-Response Nutra",
          description:
            "Health, beauty and wellness buyers ready for direct-response offers.",
          statLabels: ["Impressions / mo", "Avg. CTR", "Geos"],
        },
      },
    },
    cta: {
      eyebrow: "Contact",
      title: { line1: "Ready for", accent: "exclusive deals?" },
      description:
        "Tell us your niche, geo and volumes — our team will get back to you with the best placements and the lowest market commissions.",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Global Web Traffic Buying Agency",
    },
  },

  /* ------------------------------------------------------------------ */
  /* RUSSIAN                                                            */
  /* ------------------------------------------------------------------ */
  ru: {
    nav: {
      links: [
        { label: "Форматы рекламы", href: "#ad-formats" },
        { label: "Услуги", href: "#services" },
        { label: "Инфлюенсеры", href: "#influencers" },
        { label: "Вертикали", href: "#projects" },
        { label: "Контакты", href: "#contact" },
      ],
      getTraffic: "Получить трафик",
    },
    hero: {
      badge: "Глобальный охват · Crypto · iGaming · Nutra",
      headline: {
        line1: "Глобальный веб-трафик",
        line2: "Байинг Агентство",
        accentWords: ["Агентство"],
      },
      subheadline:
        "Эксклюзивный органический трафик напрямую от WebMasters. Глобальный охват и самые низкие комиссии на рынке.",
      cta: { primary: "Получить трафик", secondary: "Стать партнёром" },
      statLabels: [
        "Эксклюзивные WebSites",
        "Стран покрыто",
        "Напрямую с WebMasters",
      ],
      ticker: [
        "Crypto",
        "iGaming",
        "Nutra",
        "Органический трафик",
        "Прямые WebMasters",
        "Минимальные комиссии",
        "Глобальный охват",
        "2500+ эксклюзивных WebSites",
      ],
    },
    adFormats: {
      eyebrow: "Форматы рекламы",
      title: { line1: "Высококонверсионные", accent: "форматы рекламы" },
      description: "Пять проверенных в бою форматов, созданных для конверсии.",
      formats: [
        {
          name: "Display и брендинг WebSite",
          description:
            "Премиальные баннеры и полный брендинг WebSite для максимальной заметности.",
        },
        {
          name: "Интерактив и видео",
          description:
            "Постоянные Catfish/Stickers и захватывающая видеореклама в плеере (Pre-roll/Pause-roll).",
        },
        {
          name: "Нативные PR и SEO",
          description:
            "Авторские статьи, глубокие обзоры и линкбилдинг на доверенных WebSites.",
        },
        {
          name: "Вирусный social",
          description:
            "Массивный охват верхней воронки через TikTok Clippers.",
        },
        {
          name: "KOL и стримеры",
          description:
            "Прямые интеграции и амбассадорства на Twitch, Kick, Telegram, X и TikTok.",
        },
      ],
    },
    services: {
      eyebrow: "Услуги",
      title: { line1: "Созданы, чтобы двигать", accent: "высокоинтентный трафик" },
      description:
        "Полноценная медиабаинговая операция — от эксклюзивного инвентаря до прозрачной отчётности.",
      items: {
        "direct-admin-deals": {
          title: "Прямые сделки с WebMaster",
          description:
            "Без посредников. Без завышенных комиссий. Мы проводим все платежи через локальные решения для удобства WebMaster (USDT, банковские переводы, локальные карты), помогаем с установкой рекламного кода и договариваемся об эксклюзивных условиях сотрудничества (предоплата или постоплата по статистике рекламодателя). Наша команда работает 24/7 и всегда на связи, чтобы беспрепятственно подключать новых WebMasters и рекламодателей.",
          statLabel:
            "Эксклюзивные WebSites по договорённости напрямую с WebMasters",
          tags: [
            "Новости спорта",
            "Мировые новости",
            "Crypto WebSites",
            "Adult",
            "Файлообменники",
            "Форумы",
            "Рейтинговые WebSites",
            "Линкбилдинг",
            "Соцсети",
            "TikTok Clippers",
          ],
        },
        "verticals": {
          title: "Высокоинтентные вертикали",
          description: "Три ниши, один стандарт: Crypto, iGaming, Nutra.",
        },
        "global-coverage": {
          title: "Глобальный охват",
          description: "Мировой охват, локальное исполнение.",
          statLabel: "стран покрыто",
        },
        "scraping": {
          title: "Собственный скрейпинг",
          description:
            "Собственные скрейперы находят именно те WebSites, которые вам нужны, в любой точке мира.",
        },
        "pricing": {
          title: "Гибкие цены",
          description:
            "Мы работаем исключительно по моделям CPM, CPC и Flat Fee. Хотя многие WebMasters требуют предоплату, мы договариваемся об исключениях для постоплаты по статистике рекламодателя.",
        },
      },
    },
    influencers: {
      eyebrow: "Инфлюенсеры и Web3-маркетинг",
      title: { line1: "Сообщества, которые", accent: "конвертят" },
      description:
        "Мы привлекаем KOL, строим собственные сообщества на платформах, которые реально двигают внимание, и ведём собственную базу TikTok-клипперов для масштабирования брендов рекламодателей.",
      membersLine:
        "Органические участники, масштабируемые под кампанию — от точечного посева в нишевых KOL до полного захвата сообществ.",
      microStats: ["Ср. рост", "Окно запуска", "Органика"],
      more: "+ ещё",
    },
    projects: {
      eyebrow: "Вертикали и результаты",
      title: { line1: "Избранные", accent: "плейбуки" },
      description:
        "Кампании, созданные для высокоинтентной аудитории в crypto, iGaming и nutra.",
      items: {
        sportsbook: {
          category: "iGaming",
          title: "Масштабирование Sportsbook",
          description:
            "Аудитории казино и sportsbook, которые конвертируют круглосуточно — подогреваемые моментами матчей с высокими ставками. Мы используем динамическую интеграцию коэффициентов, триггерные события в реальном времени и стратегии удержания VIP, чтобы максимизировать LTV игроков и масштабировать первые депозиты.",
          statLabels: ["Показы / мес", "Ср. CTR", "Гео"],
        },
        exchange: {
          category: "Crypto",
          title: "Запуск биржи",
          description:
            "Высокоинтентные трейдеры и Web3-аудитории на рынках первого эшелона и развивающихся рынках.",
          statLabels: ["Показы / мес", "Ср. CTR", "Гео"],
        },
        nutra: {
          category: "Nutra",
          title: "Direct-response Nutra",
          description:
            "Покупатели в категориях здоровья, красоты и wellness, готовые к direct-response офферам.",
          statLabels: ["Показы / мес", "Ср. CTR", "Гео"],
        },
      },
    },
    cta: {
      eyebrow: "Контакты",
      title: { line1: "Готовы к", accent: "эксклюзивным сделкам?" },
      description:
        "Расскажите нам о своей нише, гео и объёмах — наша команда вернётся к вам с лучшими площадками и самыми низкими комиссиями на рынке.",
    },
    footer: {
      rights: "Все права защищены.",
      tagline: "Агентство по закупке глобального веб-трафика",
    },
  },

  /* ------------------------------------------------------------------ */
  /* SPANISH                                                            */
  /* ------------------------------------------------------------------ */
  es: {
    nav: {
      links: [
        { label: "Formatos de anuncios", href: "#ad-formats" },
        { label: "Servicios", href: "#services" },
        { label: "Influencers", href: "#influencers" },
        { label: "Verticales", href: "#projects" },
        { label: "Contacto", href: "#contact" },
      ],
      getTraffic: "Consigue tráfico",
    },
    hero: {
      badge: "Cobertura mundial · Crypto · iGaming · Nutra",
      headline: {
        line1: "Tráfico web global",
        line2: "Agencia de compra",
        accentWords: ["Agencia"],
      },
      subheadline:
        "Tráfico orgánico exclusivo directo de WebMasters. Cobertura mundial y las comisiones más bajas del mercado.",
      cta: { primary: "Consigue tráfico", secondary: "Conviértete en socio" },
      statLabels: [
        "WebSites exclusivos",
        "Países cubiertos",
        "Directo con WebMasters",
      ],
      ticker: [
        "Crypto",
        "iGaming",
        "Nutra",
        "Tráfico orgánico",
        "WebMasters directos",
        "Comisiones mínimas",
        "Cobertura mundial",
        "2500+ WebSites exclusivos",
      ],
    },
    adFormats: {
      eyebrow: "Formatos de anuncios",
      title: { line1: "Formatos de anuncios", accent: "de alta conversión" },
      description:
        "Cinco formatos probados en batalla, diseñados para convertir.",
      formats: [
        {
          name: "Display y branding del WebSite",
          description:
            "Banners premium y branding completo del WebSite para máxima visibilidad.",
        },
        {
          name: "Interactivo y vídeo",
          description:
            "Catfish/Stickers persistentes y anuncios de vídeo in-player (Pre-roll/Pause-roll).",
        },
        {
          name: "PR nativo y SEO",
          description:
            "Artículos a medida, reseñas en profundidad y linkbuilding en WebSites de confianza.",
        },
        {
          name: "Social viral",
          description:
            "Alcance masivo de embudo superior vía TikTok Clippers.",
        },
        {
          name: "KOL y streamers",
          description:
            "Endorsos directos y embajadas en Twitch, Kick, Telegram, X y TikTok.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: {
        line1: "Diseñados para mover",
        accent: "tráfico de alta intención",
      },
      description:
        "Una operación full-stack de media buying — desde inventario exclusivo hasta reporting transparente.",
      items: {
        "direct-admin-deals": {
          title: "Tratos directos con WebMaster",
          description:
            "Sin intermediarios. Sin márgenes inflados. Gestionamos todos los pagos mediante soluciones locales para comodidad del WebMaster (USDT, transferencias bancarias, tarjetas locales), ayudamos con la instalación del código publicitario y negociamos condiciones de cooperación exclusivas (prepago o postpago según las estadísticas del anunciante). Nuestro equipo opera 24/7, siempre en línea para incorporar nuevos WebMasters y anunciantes sin fricción.",
          statLabel:
            "WebSites exclusivos negociados directamente con WebMasters",
          tags: [
            "Noticias de deporte",
            "Noticias globales",
            "Crypto WebSites",
            "Adult",
            "Compartición de archivos",
            "Foros",
            "WebSites de ratings",
            "Linkbuilding",
            "Redes sociales",
            "TikTok Clippers",
          ],
        },
        "verticals": {
          title: "Verticales de alta intención",
          description: "Tres nichos, un estándar: Crypto, iGaming, Nutra.",
        },
        "global-coverage": {
          title: "Cobertura global",
          description: "Alcance mundial, ejecución localizada.",
          statLabel: "países cubiertos",
        },
        "scraping": {
          title: "Scraping propio",
          description:
            "Scrapers hechos a medida encuentran exactamente los WebSites que necesitas, en cualquier parte del mundo.",
        },
        "pricing": {
          title: "Precios flexibles",
          description:
            "Operamos exclusivamente con modelos CPM, CPC y Flat Fee. Aunque muchos WebMasters exigen prepago, negociamos excepciones de postpago basadas en las estadísticas del anunciante.",
        },
      },
    },
    influencers: {
      eyebrow: "Marketing de influencers y Web3",
      title: { line1: "Comunidades que", accent: "convierten" },
      description:
        "Reclutamos KOLs, construimos comunidades propias en las plataformas que realmente mueven la atención y mantenemos una base de datos dedicada de TikTok clippers para escalar marcas de anunciantes.",
      membersLine:
        "Miembros orgánicos, escalados por campaña — desde seeding de KOLs de nicho hasta adquisiciones completas de comunidades.",
      microStats: ["Crec. medio", "Ventana de lanzamiento", "Orgánico"],
      more: "+ más",
    },
    projects: {
      eyebrow: "Verticales y resultados",
      title: { line1: "Playbooks", accent: "seleccionados" },
      description:
        "Campañas diseñadas para audiencias de alta intención en crypto, iGaming y nutra.",
      items: {
        sportsbook: {
          category: "iGaming",
          title: "Escalado de Sportsbook",
          description:
            "Audiencias de casino y sportsbook que convierten las 24 horas — impulsadas por momentos de partido de alto riesgo. Aprovechamos la integración dinámica de cuotas, eventos de activación en tiempo real y estrategias de retención VIP para maximizar el LTV del jugador y escalar los primeros depósitos.",
          statLabels: ["Impresiones / mes", "CTR medio", "Geos"],
        },
        exchange: {
          category: "Crypto",
          title: "Lanzamiento de exchange",
          description:
            "Traders de alta intención y audiencias Web3 en mercados tier-1 y emergentes.",
          statLabels: ["Impresiones / mes", "CTR medio", "Geos"],
        },
        nutra: {
          category: "Nutra",
          title: "Nutra de respuesta directa",
          description:
            "Compradores de salud, belleza y bienestar listos para ofertas de respuesta directa.",
          statLabels: ["Impresiones / mes", "CTR medio", "Geos"],
        },
      },
    },
    cta: {
      eyebrow: "Contacto",
      title: { line1: "¿Listo para", accent: "ofertas exclusivas?" },
      description:
        "Cuéntanos tu nicho, geo y volúmenes — nuestro equipo te responderá con los mejores placements y las comisiones más bajas del mercado.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Agencia de compra de tráfico web global",
    },
  },

  /* ------------------------------------------------------------------ */
  /* UKRAINIAN                                                          */
  /* ------------------------------------------------------------------ */
  ua: {
    nav: {
      links: [
        { label: "Формати реклами", href: "#ad-formats" },
        { label: "Послуги", href: "#services" },
        { label: "Інфлюенсери", href: "#influencers" },
        { label: "Вертикалі", href: "#projects" },
        { label: "Контакти", href: "#contact" },
      ],
      getTraffic: "Отримати трафік",
    },
    hero: {
      badge: "Глобальне охоплення · Crypto · iGaming · Nutra",
      headline: {
        line1: "Глобальний веб-трафік",
        line2: "Байінг Агенція",
        accentWords: ["Агенція"],
      },
      subheadline:
        "Ексклюзивний органічний трафік напряму від WebMasters. Глобальне охоплення та найнижчі комісії на ринку.",
      cta: { primary: "Отримати трафік", secondary: "Стати партнером" },
      statLabels: [
        "Ексклюзивні WebSites",
        "Країн охоплено",
        "Напряму з WebMasters",
      ],
      ticker: [
        "Crypto",
        "iGaming",
        "Nutra",
        "Органічний трафік",
        "Прямі WebMasters",
        "Найнижчі комісії",
        "Глобальне охоплення",
        "2500+ ексклюзивних WebSites",
      ],
    },
    adFormats: {
      eyebrow: "Формати реклами",
      title: { line1: "Висококонверсійні", accent: "формати реклами" },
      description:
        "П'ять перевірених у бою форматів, створених для конверсії.",
      formats: [
        {
          name: "Display і брендинг WebSite",
          description:
            "Преміальні банери та повний брендинг WebSite для максимальної помітності.",
        },
        {
          name: "Інтерактив і відео",
          description:
            "Постійні Catfish/Stickers і захоплива відеореклама в плеєрі (Pre-roll/Pause-roll).",
        },
        {
          name: "Нативні PR і SEO",
          description:
            "Авторські статті, глибокі огляди та лінкбілдинг на довірених WebSites.",
        },
        {
          name: "Вірусний social",
          description:
            "Масивне охоплення верхньої воронки через TikTok Clippers.",
        },
        {
          name: "KOL і стрімери",
          description:
            "Прямі інтеграції та амбасадорства на Twitch, Kick, Telegram, X і TikTok.",
        },
      ],
    },
    services: {
      eyebrow: "Послуги",
      title: {
        line1: "Створені, щоб рухати",
        accent: "високоінтентний трафік",
      },
      description:
        "Повноцінна медіабаїнгова операція — від ексклюзивного інвентарю до прозорої звітності.",
      items: {
        "direct-admin-deals": {
          title: "Прямі угоди з WebMaster",
          description:
            "Без посередників. Без завищених комісій. Ми проводимо всі платежі через локальні рішення для зручності WebMaster (USDT, банківські перекази, локальні картки), допомагаємо зі встановленням рекламного коду та домовляємось про ексклюзивні умови співпраці (передоплата або постоплата за статистикою рекламодавця). Наша команда працює 24/7 і завжди на зв'язку, щоб безперешкодно підключати нових WebMasters і рекламодавців.",
          statLabel:
            "Ексклюзивні WebSites за домовленістю напряму з WebMasters",
          tags: [
            "Новини спорту",
            "Світові новини",
            "Crypto WebSites",
            "Adult",
            "Файлообмінники",
            "Форуми",
            "Рейтингові WebSites",
            "Лінкбілдинг",
            "Соцмережі",
            "TikTok Clippers",
          ],
        },
        "verticals": {
          title: "Високоінтентні вертикалі",
          description: "Три ніші, один стандарт: Crypto, iGaming, Nutra.",
        },
        "global-coverage": {
          title: "Глобальне охоплення",
          description: "Світове охоплення, локальне виконання.",
          statLabel: "країн охоплено",
        },
        "scraping": {
          title: "Власний скрейпінг",
          description:
            "Власні скрейпери знаходять саме ті WebSites, які вам потрібні, будь-де у світі.",
        },
        "pricing": {
          title: "Гнучкі ціни",
          description:
            "Ми працюємо виключно за моделями CPM, CPC і Flat Fee. Хоча багато WebMasters вимагають передоплату, ми домовляємось про винятки для постоплати за статистикою рекламодавця.",
        },
      },
    },
    influencers: {
      eyebrow: "Інфлюенсери та Web3-маркетинг",
      title: { line1: "Спільноти, які", accent: "конвертують" },
      description:
        "Ми залучаємо KOL, будуємо власні спільноти на платформах, які реально рухають увагу, і ведемо власну базу TikTok-кліперів для масштабування брендів рекламодавців.",
      membersLine:
        "Органічні учасники, масштабовані під кампанію — від точкового посіву в нішевих KOL до повного захоплення спільнот.",
      microStats: ["Сер. зростання", "Вікно запуску", "Органіка"],
      more: "+ більше",
    },
    projects: {
      eyebrow: "Вертикалі та результати",
      title: { line1: "Обрані", accent: "плейбуки" },
      description:
        "Кампанії, створені для високоінтентної аудиторії у crypto, iGaming і nutra.",
      items: {
        sportsbook: {
          category: "iGaming",
          title: "Масштабування Sportsbook",
          description:
            "Аудиторії казино та sportsbook, які конвертують цілодобово — підігрівані моментами матчів з високими ставками. Ми використовуємо динамічну інтеграцію коефіцієнтів, тригерні події в реальному часі та стратегії утримання VIP, щоб максимізувати LTV гравців і масштабувати перші депозити.",
          statLabels: ["Покази / міс", "Сер. CTR", "Гео"],
        },
        exchange: {
          category: "Crypto",
          title: "Запуск біржі",
          description:
            "Високоінтентні трейдери та Web3-аудиторії на ринках першого ешелону та ринках, що розвиваються.",
          statLabels: ["Покази / міс", "Сер. CTR", "Гео"],
        },
        nutra: {
          category: "Nutra",
          title: "Direct-response Nutra",
          description:
            "Покупці у категоріях здоров'я, краси та wellness, готові до direct-response оферів.",
          statLabels: ["Покази / міс", "Сер. CTR", "Гео"],
        },
      },
    },
    cta: {
      eyebrow: "Контакти",
      title: { line1: "Готові до", accent: "ексклюзивних угод?" },
      description:
        "Розкажіть нам про свою нішу, гео та обсяги — наша команда повернеться до вас із найкращими майданчиками та найнижчими комісіями на ринку.",
    },
    footer: {
      rights: "Усі права захищені.",
      tagline: "Агенція із закупівлі глобального веб-трафіку",
    },
  },
};
