<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="title">Людмила Краусе — Художник, преподаватель, арт-терапевт</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header" id="header">
        <div class="container header-inner">
            <a href="#" class="logo">
                <img src="images/logo.jpg" alt="Logo" class="logo-img" id="logoImg" onerror="this.style.display='none'">
                <span class="logo-text" data-i18n="logo">Мила Краузе</span>
            </a>
            <nav class="nav" id="nav">
                <a href="#about" data-i18n="nav_about">Обо мне</a>
                <a href="#services" data-i18n="nav_services">Услуги</a>
                <a href="#gallery" data-i18n="nav_gallery">Галерея</a>
                <a href="#contact" data-i18n="nav_contact">Контакты</a>
            </nav>
            <div class="header-right">
                <a href="#contact" class="btn btn-small btn-header" data-i18n="btn_contact">Связаться</a>
                <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                    <svg class="sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                    <svg class="moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                </button>
                <div class="lang-dropdown">
                    <button class="lang-switch" id="langSwitch">
                        <span class="lang-current" id="langCurrent">RU</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    <div class="lang-menu" id="langMenu">
                        <button class="lang-option" data-lang="ru">🇷🇺 Русский</button>
                        <button class="lang-option" data-lang="de">🇩🇪 Deutsch</button>
                    </div>
                </div>
                <button class="menu-toggle" id="menuToggle" aria-label="Меню">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero -->
    <section class="hero">
        <div class="hero-gradient"></div>
        <div class="hero-blob hero-blob-1"></div>
        <div class="hero-blob hero-blob-2"></div>
        <div class="hero-pattern"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge" data-i18n="hero_badge">Художник с 20-летним стажем</div>
                <h1 class="hero-title" data-i18n="hero_title">Раскрываю талант каждого ребёнка через творчество</h1>
                <p class="hero-text" data-i18n="hero_text">Художественные занятия для детей, арт-терапия, нейрографика и консультации по астрогенетике. Работаю в Ойскирхене и онлайн с русско- и украиноязычными семьями в Германии и за рубежом.</p>
                <div class="hero-badges">
                    <div class="badge badge-coral">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <span data-i18n="badge_1">Индивидуальный подход</span>
                    </div>
                    <div class="badge badge-purple">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                        <span data-i18n="badge_2">Онлайн и офлайн</span>
                    </div>
                    <div class="badge badge-gold">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        <span data-i18n="badge_3">Для детей и взрослых</span>
                    </div>
                </div>
                <a href="#contact" class="btn btn-primary" data-i18n="btn_cta">Записаться на занятие</a>
            </div>
        </div>
        <div class="hero-scroll">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
        </div>
    </section>

    <!-- Services -->
    <section class="services" id="services">
        <div class="services-blob"></div>
        <div class="container">
            <div class="section-header">
                <span class="section-label" data-i18n="services_label">Услуги</span>
                <h2 class="section-title" data-i18n="services_title">Чем я занимаюсь</h2>
                <p class="section-subtitle" data-i18n="services_subtitle">Уроки рисования, терапевтические практики и консультации для детей и взрослых</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-tag" data-i18n="tag_kids">5–15 лет</div>
                    <div class="service-icon service-icon-coral">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                    </div>
                    <h3 data-i18n="service_1_title">Рисование для детей</h3>
                    <p data-i18n="service_1_desc">Занятия для детей от 5 до 15 лет. Карандаш, акварель, акрил и развитие творческого мышления.</p>
                </div>
                <div class="service-card">
                    <div class="service-tag" data-i18n="tag_teens">от 10 лет</div>
                    <div class="service-icon service-icon-purple">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    </div>
                    <h3 data-i18n="service_2_title">Масляная живопись</h3>
                    <p data-i18n="service_2_desc">Серьёзные занятия для подростков на холсте маслом. Техника, цвет, композиция.</p>
                </div>
                <div class="service-card">
                    <div class="service-tag" data-i18n="tag_all">для всех</div>
                    <div class="service-icon service-icon-rose">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </div>
                    <h3 data-i18n="service_3_title">Арт-терапия</h3>
                    <p data-i18n="service_3_desc">Снятие стресса и эмоциональная гармонизация через творчество. Для детей и взрослых.</p>
                </div>
                <div class="service-card">
                    <div class="service-tag" data-i18n="tag_online">онлайн</div>
                    <div class="service-icon service-icon-blue">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                    </div>
                    <h3 data-i18n="service_4_title">Нейрографика онлайн</h3>
                    <p data-i18n="service_4_desc">Практика, которая помогает проработать запросы и найти решения через рисунок. Доступно дистанционно.</p>
                </div>
                <div class="service-card">
                    <div class="service-tag" data-i18n="tag_consult">консультация</div>
                    <div class="service-icon service-icon-gold">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    </div>
                    <h3 data-i18n="service_5_title">Астрогенетика</h3>
                    <p data-i18n="service_5_desc">Раскрытие планетарного потенциала ребёнка по дате рождения. Понимание сильных сторон и талантов.</p>
                </div>
                <div class="service-card">
                    <div class="service-tag" data-i18n="tag_individual">индивидуально</div>
                    <div class="service-icon service-icon-teal">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v18"/><path d="M3 12h18"/><circle cx="12" cy="12" r="9"/></svg>
                    </div>
                    <h3 data-i18n="service_6_title">Световые карты</h3>
                    <p data-i18n="service_6_desc">Индивидуальные световые карты для поддержки гармонии, намерений и внутреннего баланса.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About -->
    <section class="about" id="about">
        <div class="about-blob"></div>
        <div class="container">
            <div class="about-grid">
                <div class="about-visual">
                    <div class="about-frame" id="aboutFrame">
                        <div class="about-placeholder">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <span data-i18n="photo_placeholder">Фото художника</span>
                        </div>
                    </div>
                    <div class="about-float-card">
                        <span class="about-float-number">20+</span>
                        <span class="about-float-text" data-i18n="float_years">лет опыта</span>
                    </div>
                </div>
                <div class="about-content">
                    <span class="section-label" data-i18n="about_label">Обо мне</span>
                    <h2 class="section-title" data-i18n="about_title">Творчество как путь к себе</h2>
                    <p data-i18n="about_p1">Я художник с 20-летним стажем. Верю, что каждый ребёнок талантлив по-своему, и моя задача — помочь этот талант раскрыть. Учу детей рисовать карандашом, акрилом, маслом на холсте, развиваю творческое мышление и уверенность в себе.</p>
                    <p data-i18n="about_p2">Помимо изобразительного искусства, я провожу арт-терапевтические занятия и нейрографику для детей и взрослых, помогаю снять стресс через творчество. Для родителей раскрываю планетарный потенциал детей по дате рождения.</p>
                    <blockquote data-i18n="quote">«Каждый ребёнок талантлив по-своему, и я готова помочь раскрыть его потенциал.»</blockquote>
                    <div class="stats">
                        <div class="stat stat-coral">
                            <span class="stat-number">20+</span>
                            <span class="stat-label" data-i18n="stat_1">лет творческого опыта</span>
                        </div>
                        <div class="stat stat-purple">
                            <span class="stat-number">5–15</span>
                            <span class="stat-label" data-i18n="stat_2">лет — возраст учеников</span>
                        </div>
                        <div class="stat stat-gold">
                            <span class="stat-number">3+</span>
                            <span class="stat-label" data-i18n="stat_3">направления искусства</span>
                        </div>
                        <div class="stat stat-blue">
                            <span class="stat-number">DE/RU</span>
                            <span class="stat-label" data-i18n="stat_4">языки консультаций</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery -->
    <section class="gallery" id="gallery">
        <div class="gallery-blob"></div>
        <div class="container">
            <div class="section-header">
                <span class="section-label" data-i18n="gallery_label">Портфолио</span>
                <h2 class="section-title" data-i18n="gallery_title">Галерея работ</h2>
                <p class="section-subtitle" data-i18n="gallery_subtitle">Фрагменты работ и ученических проектов в разных техниках</p>
            </div>
            <div class="gallery-grid" id="galleryGrid">
                <!-- Фото загружаются динамически из images.json -->
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section class="contact" id="contact">
        <div class="contact-blob"></div>
        <div class="container">
            <div class="section-header">
                <span class="section-label" data-i18n="contact_label">Контакты</span>
                <h2 class="section-title" data-i18n="contact_title">Свяжитесь со мной</h2>
                <p class="section-subtitle" data-i18n="contact_subtitle">Запишитесь на пробное занятие, задайте вопрос или узнайте больше об услугах</p>
            </div>
            <div class="contact-grid">
                <div class="contact-info">
                    <h3 data-i18n="contact_info_title">Контакты</h3>
                    <p data-i18n="contact_info_text">Пишите или звоните — отвечу в удобное для вас время.</p>
                    <div class="contact-links">
                        <a href="https://t.me/milakrause_neuro" target="_blank" class="contact-link contact-link-tg">
                            <span class="contact-link-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                            </span>
                            <span>Telegram</span>
                        </a>
                        <a href="https://wa.me/491722977828" target="_blank" class="contact-link contact-link-wa">
                            <span class="contact-link-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            </span>
                            <span>WhatsApp</span>
                            <span class="contact-link-detail">+49 172 297 78 28</span>
                        </a>
                        <a href="mailto:ludmilakrause900@gmail.com" class="contact-link contact-link-email" onclick="copyEmail(event)">
                            <span class="contact-link-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            </span>
                            <span>Email</span>
                            <span class="contact-link-detail" id="emailText">ludmilakrause900@gmail.com</span>
                            <span class="copy-tooltip" id="emailTooltip">Скопировано!</span>
                        </a>
                    </div>
                </div>
                <div class="contact-form-wrap">
                    <h3 data-i18n="form_title">Записаться на занятие</h3>
                    <p data-i18n="form_text">Напишите мне в Telegram или WhatsApp, и мы договоримся о времени и формате.</p>
                    <div class="contact-note">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        <span data-i18n="form_note">Занятия проходят в Ойскирхене или онлайн. Первое знакомство — возможно в формате консультации, чтобы выбрать подходящий формат.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-inner">
                <p data-i18n="footer_text">© 2026 Людмила Краусе. Все права защищены.</p>
                <div class="footer-socials">
                    <a href="https://t.me/milakrause_neuro" target="_blank" class="footer-social" aria-label="Telegram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                    <a href="https://youtube.com/@mila-blogerscha-na-velike?si=p_dONf7LQTGXQcqg" target="_blank" class="footer-social" aria-label="YouTube">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>