import '../styles.css';

export default function PortfolioDeLucasFSilva() {
  return (
    <div className="portfolio-de-lucas-f-silva">
      <div className="hero">
        <nav className="navigation">
          <div className="brand">
            <div className="monogram">
              <p className="initials">LF</p>
            </div>
            <p className="name">Lucas F Silva</p>
          </div>
          <ul className="navigation-links">
            <li>
              <p className="navigation-link">Sobre</p>
            </li>
            <li>
              <p className="navigation-link">Projetos</p>
            </li>
            <li>
              <p className="navigation-link">Experiência</p>
            </li>
            <li>
              <p className="navigation-link">Stack</p>
            </li>
          </ul>
          <div className="action">
            <label className="label">Vamos conversar</label>
            <img className="message-circle" src="/assets/message-circle.svg" alt="message-circle" />
          </div>
        </nav>
        <div className="hero-content">
          <div className="positioning">
            <section className="section-label">
              <label className="label-2">Desenvolvedor de software · Goiânia—GO</label>
            </section>
            <p className="headline">Código que transforma processos em produtos úteis.</p>
            <p className="introduction">Desenvolvimento web, backend e automação com foco em resolver problemas de forma clara, prática e sustentável.</p>
            <div className="hero-actions">
              <div className="action-2">
                <label className="label-3">Explorar projetos</label>
                <img className="message-circle" src="/assets/arrow-down-right.svg" alt="arrow-down-right" />
              </div>
              <div className="action">
                <label className="label">Entrar em contato</label>
                <img className="message-circle" src="/assets/mail.svg" alt="mail" />
              </div>
            </div>
            <div className="section-label">
              <div className="status"></div>
              <p className="navigation-link">Aberto a oportunidades e novos projetos</p>
            </div>
          </div>
          <div className="development-workspace">
            <div className="window-bar">
              <div className="window-controls">
                <div className="control"></div>
                <div className="control-2"></div>
                <div className="status"></div>
              </div>
              <p className="filename">lucas.profile.ts</p>
              <img className="code-2" src="/assets/code-2.svg" alt="code-2" />
            </div>
            <div className="editor">
              <div className="line-numbers">
                <p className="line-number">1</p>
                <p className="line-number">2</p>
                <p className="line-number">3</p>
                <p className="line-number">4</p>
                <p className="line-number">5</p>
                <p className="line-number">6</p>
                <p className="line-number">7</p>
                <p className="line-number">8</p>
                <p className="line-number">9</p>
                <p className="line-number">10</p>
              </div>
              <div className="code">
                <p className="navigation-link">const developer = {'{'}</p>
                <p className="code-line-2"><span className="code-line-2-span-1">  name: </span>“Lucas F Silva”<span className="code-line-2-span-1">,</span></p>
                <p className="code-line-2"><span className="code-line-3-span-1">  base: </span>“Goiânia — GO”<span className="code-line-3-span-1">,</span></p>
                <p className="code-line-4">  focus: [</p>
                <p className="code-line-2">    “web”, “backend”, “automação”</p>
                <p className="code-line-4">  ],</p>
                <p className="code-line-7"><span className="code-line-7-span-1">  stack: </span>“JavaScript + Node.js”<span className="code-line-7-span-1">,</span></p>
                <p className="code-line-2"><span className="code-line-8-span-1">  status: </span>“disponível”</p>
                <p className="navigation-link">{'}'}</p>
                <div className="console-message">
                  <div className="status-2"></div>
                  <p className="filename">ready to build</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accent-rule"></div>
      </div>
      <div className="sobre-e-experiencia">
        <div className="about">
          <div className="about-heading">
            <section className="section-label">
              <p className="index">01</p>
              <label className="label-5">Sobre</label>
            </section>
            <p className="heading">Construir, aprender e simplificar.</p>
          </div>
          <div className="positioning">
            <p className="statement">Sou Lucas F Silva, desenvolvedor de software em Goiânia—GO. Minha trajetória reúne aplicações web, backend e automação de processos.</p>
            <p className="supporting-copy">Gosto de transformar necessidades em fluxos objetivos, interfaces legíveis e soluções que possam evoluir com clareza. Cada projeto deste portfólio registra uma etapa prática desse aprendizado.</p>
            <div className="professional-skills">
              <div className="working-principle">
                <img className="users" src="/assets/users.svg" alt="users" />
                <p className="title">Colaboração</p>
                <p className="description">Trabalho em equipe e facilidade de comunicação.</p>
              </div>
              <div className="working-principle">
                <img className="users" src="/assets/list-checks.svg" alt="list-checks" />
                <p className="title">Organização</p>
                <p className="description">Organização e comprometimento com resultados.</p>
              </div>
              <div className="working-principle">
                <img className="users" src="/assets/scan-search.svg" alt="scan-search" />
                <p className="title">Análise</p>
                <p className="description">Resiliência e capacidade analítica para resolver problemas.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-card">
          <div className="experience-summary">
            <div className="experience-title">
              <label className="section-label-3">Experiência profissional</label>
              <p className="impact">+7 mil</p>
              <label className="impact-label">equipamentos contemplados pela automação de reset</label>
            </div>
            <div className="section-label">
              <img className="bot" src="/assets/bot.svg" alt="bot" />
              <p className="note">Automação aplicada em contexto real</p>
            </div>
          </div>
          <div className="experience-details">
            <header className="role-header">
              <div className="role">
                <p className="role-title">Estágio em Análise de Sistemas Tele-controlados</p>
                <p className="company">Celg-D</p>
              </div>
              <p className="period">abr/2022 — abr/2023</p>
            </header>
            <div className="divider"></div>
            <p className="experience-description">Atuação com análise e automação de rotinas ligadas a sistemas tele-controlados. A experiência incluiu o uso de RPA, Python e Selenium, além de Excel e VBA, com destaque para a automação do reset de mais de 7 mil equipamentos.</p>
            <div className="experience-technologies">
              <div className="technology-tag">
                <label className="label-6">Excel</label>
              </div>
              <div className="technology-tag">
                <label className="label-6">VBA</label>
              </div>
              <div className="technology-tag">
                <label className="label-6">Python</label>
              </div>
              <div className="technology-tag">
                <label className="label-6">Selenium</label>
              </div>
              <div className="technology-tag">
                <label className="label-6">RPA</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projetos-em-destaque">
        <header className="projects-header">
          <div className="projects-title">
            <section className="section-label">
              <p className="index-2">02</p>
              <label className="label-2">Projetos selecionados</label>
            </section>
            <p className="heading-2">Prática aplicada, do front-end à integração.</p>
          </div>
          <p className="projects-introduction">Uma seleção de projetos que percorre interfaces web, consumo de API, jogos e operações CRUD.</p>
        </header>
        <div className="featured-projects">
          <div className="project-case-study">
            <div className="project-preview">
              <div className="browser">
                <div className="browser-bar">
                  <div className="control-4"></div>
                  <div className="control-4"></div>
                  <div className="control-4"></div>
                </div>
                <div className="clinic-interface">
                  <div className="working-principle">
                    <div className="logo">
                      <img className="heart-pulse" src="/assets/heart-pulse.svg" alt="heart-pulse" />
                      <p className="clinic-name">CM LIFE</p>
                    </div>
                    <div className="title-line"></div>
                    <div className="copy-line"></div>
                    <div className="copy-line-2"></div>
                    <div className="clinic-action">
                      <label className="action-label">AGENDAR</label>
                    </div>
                  </div>
                  <img className="medical-symbol" src="/assets/medical-symbol.svg" alt="Medical symbol" />
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-metadata">
                <p className="project-number">01</p>
                <p className="project-category">Aplicação web</p>
              </div>
              <p className="project-title">Clínica Médica CM Life</p>
              <p className="project-description">Projeto web para uma clínica médica, com conteúdo organizado em uma experiência de navegação direta.</p>
              <footer className="project-metadata">
                <div className="window-controls">
                  <div className="technology-tag">
                    <label className="label-6">HTML</label>
                  </div>
                  <div className="technology-tag">
                    <label className="label-6">CSS</label>
                  </div>
                  <div className="technology-tag">
                    <label className="label-6">JavaScript</label>
                  </div>
                </div>
                <a className="project-link" href="#">
                  <span className="code-line-4">Ver projeto</span>
                  <img className="message-circle" src="/assets/arrow-up-right.svg" alt="arrow-up-right" />
                </a>
              </footer>
            </div>
          </div>
          <div className="project-case-study">
            <div className="project-preview-2">
              <div className="travel-interface">
                <header className="role-header">
                  <p className="brand-2">VOA.</p>
                  <img className="code-2" src="/assets/menu.svg" alt="menu" />
                </header>
                <div className="travel-copy">
                  <label className="destination-label">PRÓXIMO DESTINO</label>
                  <p className="travel-title">Descubra novas rotas.</p>
                  <div className="travel-action"></div>
                </div>
                <div className="role-header">
                  <p className="meta">Praia · Cidade · Natureza</p>
                  <img className="code-2" src="/assets/arrow-right.svg" alt="arrow-right" />
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-metadata">
                <p className="project-number">02</p>
                <p className="project-category">Website</p>
              </div>
              <p className="project-title">Agência de Viagens</p>
              <p className="project-description">Experiência digital de agência de viagens voltada à apresentação visual de destinos e descoberta de roteiros.</p>
              <footer className="project-metadata">
                <div className="window-controls">
                  <div className="technology-tag">
                    <label className="label-6">HTML</label>
                  </div>
                  <div className="technology-tag">
                    <label className="label-6">CSS</label>
                  </div>
                  <div className="technology-tag">
                    <label className="label-6">JavaScript</label>
                  </div>
                </div>
                <a className="project-link" href="#">
                  <span className="code-line-4">Ver projeto</span>
                  <img className="message-circle" src="/assets/arrow-up-right-2.svg" alt="arrow-up-right" />
                </a>
              </footer>
            </div>
          </div>
        </div>
        <div className="featured-projects">
          <div className="project-case-study-3">
            <div className="project-preview-3">
              <div className="product-tile">
                <header className="role-header">
                  <p className="preview-title">API CONNECTED</p>
                  <div className="status-2"></div>
                </header>
                <img className="preview-icon" src="/assets/preview-icon.svg" alt="Preview icon" />
                <div className="interface-line"></div>
              </div>
            </div>
            <div className="project-content-3">
              <div className="project-metadata">
                <p className="project-number">03</p>
                <p className="project-category">Integração de API</p>
              </div>
              <p className="project-title-3">Consumindo API PokeAPI</p>
              <p className="project-description">Projeto de consumo da PokeAPI para praticar requisições e exibição de dados externos.</p>
              <footer className="project-metadata">
                <div className="window-controls">
                  <div className="technology-tag">
                    <label className="label-6">JavaScript</label>
                  </div>
                  <div className="technology-tag">
                    <label className="label-6">API</label>
                  </div>
                </div>
                <a className="project-link" href="#">
                  <span className="code-line-4">Ver projeto</span>
                  <img className="message-circle" src="/assets/arrow-up-right-3.svg" alt="arrow-up-right" />
                </a>
              </footer>
            </div>
          </div>
          <div className="project-case-study-3">
            <div className="project-preview-4">
              <div className="product-tile">
                <header className="role-header">
                  <p className="preview-title">START GAME</p>
                  <div className="status-2"></div>
                </header>
                <img className="preview-icon" src="/assets/preview-icon-2.svg" alt="Preview icon" />
                <div className="interface-line"></div>
              </div>
            </div>
            <div className="project-content-3">
              <div className="project-metadata">
                <p className="project-number">04</p>
                <p className="project-category">Jogo web</p>
              </div>
              <p className="project-title-3">Jogo de Naves</p>
              <p className="project-description">Experiência interativa em formato de jogo de naves desenvolvida para o navegador.</p>
              <footer className="project-metadata">
                <div className="window-controls">
                  <div className="technology-tag">
                    <label className="label-6">HTML</label>
                  </div>
                  <div className="technology-tag">
                    <label className="label-6">CSS</label>
                  </div>
                  <div className="technology-tag">
                    <label className="label-6">JavaScript</label>
                  </div>
                </div>
                <a className="project-link" href="#">
                  <span className="code-line-4">Ver projeto</span>
                  <img className="message-circle" src="/assets/arrow-up-right-4.svg" alt="arrow-up-right" />
                </a>
              </footer>
            </div>
          </div>
          <div className="project-case-study-3">
            <div className="project-preview-5">
              <div className="product-tile">
                <header className="role-header">
                  <p className="preview-title">TASKS / TODAY</p>
                  <div className="status-2"></div>
                </header>
                <img className="preview-icon" src="/assets/preview-icon-3.svg" alt="Preview icon" />
                <div className="interface-line"></div>
              </div>
            </div>
            <div className="project-content-3">
              <div className="project-metadata">
                <p className="project-number">05</p>
                <p className="project-category">Aplicação CRUD</p>
              </div>
              <p className="project-title-3">CRUD Todo App em Java</p>
              <p className="project-description">Aplicação de tarefas em Java com operações de criação, leitura, atualização e exclusão.</p>
              <footer className="project-metadata">
                <div className="window-controls">
                  <div className="technology-tag">
                    <label className="label-6">Java</label>
                  </div>
                  <div className="technology-tag">
                    <label className="label-6">CRUD</label>
                  </div>
                </div>
                <a className="project-link" href="#">
                  <span className="code-line-4">Ver projeto</span>
                  <img className="message-circle" src="/assets/arrow-up-right-5.svg" alt="arrow-up-right" />
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div className="stack-formacao-e-idiomas">
        <section className="stack-section">
          <div className="stack-heading">
            <section className="section-label">
              <p className="index">03</p>
              <label className="label-5">Stack técnica</label>
            </section>
            <p className="heading-3">Ferramentas para construir de ponta a ponta.</p>
            <p className="description-4">Tecnologias presentes na formação, nos projetos e na experiência profissional.</p>
          </div>
          <div className="stack-cards">
            <div className="stack-group">
              <img className="stack-icon" src="/assets/stack-icon.svg" alt="Stack icon" />
              <div className="stack-copy">
                <label className="group-label">Front-end</label>
                <p className="technologies">JavaScript\nHTML · CSS</p>
              </div>
            </div>
            <div className="stack-group">
              <img className="stack-icon" src="/assets/stack-icon-2.svg" alt="Stack icon" />
              <div className="stack-copy">
                <label className="group-label">Backend e dados</label>
                <p className="technologies">Node.js · Java\nPostgreSQL</p>
              </div>
            </div>
            <div className="stack-group">
              <img className="stack-icon" src="/assets/stack-icon-3.svg" alt="Stack icon" />
              <div className="stack-copy">
                <label className="group-label">Código e colaboração</label>
                <p className="technologies">GitHub\nVersionamento</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-divider"></section>
        <div className="featured-projects">
          <div className="education">
            <header className="project-metadata">
              <label className="section-label-6">Formação</label>
              <img className="graduation-cap" src="/assets/graduation-cap.svg" alt="graduation-cap" />
            </header>
            <div className="education-content">
              <p className="institution">Uni-Goiás</p>
              <p className="institution-detail">Centro Universitário de Goiás</p>
              <div className="education-period">
                <img className="calendar-days" src="/assets/calendar-days.svg" alt="calendar-days" />
                <p className="code-line-4">agosto de 2021 — julho de 2024</p>
              </div>
            </div>
          </div>
          <div className="languages">
            <header className="project-metadata">
              <label className="section-label-3">Idiomas</label>
              <img className="languages-2" src="/assets/languages.svg" alt="languages" />
            </header>
            <div className="language">
              <div className="language-label">
                <p className="language-name">Português</p>
                <p className="level">Nativo</p>
              </div>
              <div className="proficiency">
                <div className="level-bar"></div>
                <div className="level-bar"></div>
                <div className="level-bar"></div>
                <div className="level-bar"></div>
              </div>
            </div>
            <div className="language">
              <div className="language-label">
                <p className="language-name">Inglês</p>
                <p className="level">Básico</p>
              </div>
              <div className="proficiency">
                <div className="level-bar"></div>
                <div className="level-bar-6"></div>
                <div className="level-bar-6"></div>
                <div className="level-bar-6"></div>
              </div>
            </div>
            <div className="language">
              <div className="language-label">
                <p className="language-name">Espanhol</p>
                <p className="level">Básico</p>
              </div>
              <div className="proficiency">
                <div className="level-bar"></div>
                <div className="level-bar-6"></div>
                <div className="level-bar-6"></div>
                <div className="level-bar-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="certificacoes">
        <header className="projects-header">
          <div className="certifications-title">
            <section className="section-label">
              <p className="index-2">04</p>
              <label className="label-2">Certificações e formação contínua</label>
            </section>
            <p className="heading-4">Aprendizado contínuo, validado na prática.</p>
          </div>
          <p className="certifications-intro">Bootcamps e programas concluídos em parceria com empresas de referência no mercado. O curso de React JS está em andamento.</p>
        </header>
        <div className="completed-certifications">
          <div className="cert-card">
            <header className="project-metadata">
              <div className="issuer-badge">
                <p className="issuer-initials">DIO</p>
              </div>
              <div className="completed-badge">
                <label className="badge-label">Concluído</label>
              </div>
            </header>
            <div className="card-body">
              <p className="cert-title">Claro — Java com Spring Boot</p>
              <p className="cert-institution">DIO</p>
              <p className="cert-date">Emitido em jul/2024 · Expira em set/2034</p>
            </div>
            <div className="divider"></div>
            <div className="skills">
              <div className="skill-tag">
                <label className="label-6">Java</label>
              </div>
              <div className="skill-tag">
                <label className="label-6">Spring Boot</label>
              </div>
              <div className="skill-tag">
                <label className="label-6">+6 competências</label>
              </div>
            </div>
          </div>
          <div className="cert-card">
            <header className="project-metadata">
              <div className="issuer-badge-2">
                <p className="issuer-initials-2">ALURA</p>
              </div>
              <div className="completed-badge">
                <label className="badge-label">Concluído</label>
              </div>
            </header>
            <div className="card-body">
              <p className="cert-title">Oracle Next Education F2 T6 Back-end</p>
              <p className="cert-institution-2">Oracle + Alura</p>
              <p className="cert-date">Emitido em jul/2024</p>
            </div>
            <div className="divider"></div>
            <div className="skills">
              <div className="skill-tag">
                <label className="label-6">Java</label>
              </div>
              <div className="skill-tag">
                <label className="label-6">Testes</label>
              </div>
              <div className="skill-tag">
                <label className="label-6">+9 competências</label>
              </div>
            </div>
          </div>
          <div className="cert-card">
            <header className="project-metadata">
              <div className="issuer-badge">
                <p className="issuer-initials">DIO</p>
              </div>
              <div className="completed-badge">
                <label className="badge-label">Concluído</label>
              </div>
            </header>
            <div className="card-body">
              <p className="cert-title">Desenvolvimento Frontend com Angular</p>
              <p className="cert-institution">DIO</p>
              <p className="cert-date">Emitido em fev/2024</p>
            </div>
            <div className="divider"></div>
            <div className="skills">
              <div className="skill-tag">
                <label className="label-6">JSON</label>
              </div>
              <div className="skill-tag">
                <label className="label-6">AngularJS</label>
              </div>
              <div className="skill-tag">
                <label className="label-6">+2 competências</label>
              </div>
            </div>
          </div>
        </div>
        <div className="completed-certifications">
          <div className="cert-card-4">
            <header className="project-metadata">
              <div className="issuer-badge-4">
                <p className="issuer-initials-4">DIO</p>
              </div>
              <div className="completed-badge-4">
                <label className="badge-label-4">Concluído</label>
              </div>
            </header>
            <div className="stack-copy">
              <p className="cert-title-4">Banco Pan Java Developer</p>
              <p className="cert-institution">DIO</p>
              <p className="cert-date">Emitido em abr/2023</p>
            </div>
            <div className="skills">
              <div className="skill-tag-10">
                <label className="label-6">Java</label>
              </div>
              <div className="skill-tag-10">
                <label className="label-6">Spring Boot</label>
              </div>
            </div>
          </div>
          <div className="cert-card-4">
            <header className="project-metadata">
              <div className="issuer-badge-4">
                <p className="issuer-initials-4">DIO</p>
              </div>
              <div className="completed-badge-4">
                <label className="badge-label-4">Concluído</label>
              </div>
            </header>
            <div className="stack-copy">
              <p className="cert-title-4">GFT Start #3 .NET</p>
              <p className="cert-institution">DIO</p>
              <p className="cert-date">Emitido em jan/2022</p>
            </div>
            <div className="skills">
              <div className="skill-tag-10">
                <label className="label-6">.NET</label>
              </div>
              <div className="skill-tag-10">
                <label className="label-6">C#</label>
              </div>
            </div>
          </div>
          <div className="cert-card-in-progress">
            <header className="project-metadata">
              <div className="issuer-badge-6">
                <p className="issuer-initials-6">CURSO</p>
              </div>
              <div className="in-progress-badge">
                <div className="pulse"></div>
                <label className="badge-label-4">Em andamento</label>
              </div>
            </header>
            <div className="stack-copy">
              <p className="cert-title-4">Front-end com React JS</p>
              <p className="cert-institution">Curso em progresso</p>
              <p className="cert-date">8 de 11 módulos concluídos · 73%</p>
            </div>
            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
            <div className="skills">
              <div className="skill-tag-10">
                <label className="label-6">React JS</label>
              </div>
              <div className="skill-tag-10">
                <label className="label-6">JavaScript</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contato-e-rodape">
        <div className="contact">
          <div className="contact-callout">
            <div className="contact-heading">
              <section className="section-label">
                <p className="index">05</p>
                <label className="label-5">Contato</label>
              </section>
              <p className="heading-5">Vamos construir algo útil juntos?</p>
              <p className="description-5">Se você tem uma oportunidade, projeto ou conversa em mente, meus canais estão abertos.</p>
            </div>
            <div className="primary-contact-action">
              <div className="action-4">
                <label className="label-3">Enviar um e-mail</label>
                <img className="message-circle" src="/assets/send.svg" alt="send" />
              </div>
              <div className="education-period">
                <div className="status-6"></div>
                <p className="note-2">Disponível para conversar</p>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <header className="project-metadata">
              <p className="card-title">Fale com Lucas</p>
              <img className="graduation-cap" src="/assets/message-square-text.svg" alt="message-square-text" />
            </header>
            <div className="divider"></div>
            <div className="contact-item">
              <img className="icon-tile" src="/assets/icon-tile.svg" alt="Icon tile" />
              <div className="contact-copy">
                <label className="label-44">E-mail</label>
                <p className="value">needslucas944@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <img className="icon-tile" src="/assets/icon-tile-2.svg" alt="Icon tile" />
              <div className="contact-copy">
                <label className="label-44">Telefone</label>
                <p className="value">(62) 9 9492-3612</p>
              </div>
            </div>
            <div className="contact-item">
              <img className="icon-tile" src="/assets/icon-tile-3.svg" alt="Icon tile" />
              <div className="contact-copy">
                <label className="label-44">Localização</label>
                <p className="value">Goiânia—GO</p>
              </div>
            </div>
            <ul className="social-links">
              <li>
                <a className="social-link" href="#">
                  <img className="message-circle" src="/assets/github.svg" alt="github" />
                  <span className="code-line-4">GitHub</span>
                </a>
              </li>
              <li>
                <a className="social-link" href="#">
                  <img className="message-circle" src="/assets/linkedin.svg" alt="linkedin" />
                  <span className="code-line-4">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer className="footer">
          <footer className="project-metadata">
            <footer className="brand">
              <div className="monogram">
                <p className="initials">LF</p>
              </div>
              <div className="brand-copy">
                <p className="name-2">Lucas F Silva</p>
                <p className="role-2">Desenvolvedor de software</p>
              </div>
            </footer>
            <footer className="footer-navigation">
              <p className="period">Sobre</p>
              <p className="period">Projetos</p>
              <p className="period">Experiência</p>
              <p className="period">Stack</p>
              <p className="period">Contato</p>
            </footer>
          </footer>
          <div className="divider"></div>
          <footer className="project-metadata">
            <p className="copyright">© 2026 Lucas F Silva</p>
            <div className="project-link">
              <img className="map-pin" src="/assets/map-pin.svg" alt="map-pin" />
              <p className="role-2">Goiânia—GO · Brasil</p>
            </div>
          </footer>
        </footer>
      </div>
    </div>
  );
}
