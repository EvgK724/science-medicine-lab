window.COURSE = {
  "id": "science-394-6822",
  "title": "Science: понять и рассказать",
  "subtitle": "AI in Medicine · 22 October 2026 · Vol. 394, Issue 6822",
  "description": "Восемь тем номера: понятный русский разбор, короткое чтение B1–B2, британская учебная озвучка, словарь и практика. Сначала поймите исследование, затем объясните его по-английски.",
  "source": {
    "title": "Science, 22 October 2026, Volume 394, Issue 6822",
    "url": "https://www.science.org/toc/science/394/6822",
    "attribution": "На основе предоставленного пользователем PDF Science. Авторы исследований указаны в уроках. Science и AAAS не являются авторами или партнёрами этого учебного приложения.",
    "note": "Это оригинальные учебные пересказы, а не цитаты или перевод всего номера. Факты сверены с предоставленным PDF; публикационный статус и внешние дополнения по DOI отдельно не проверялись. Медицинские материалы предназначены для чтения исследований, не для назначения лечения."
  },
  "lessons": [
    {
      "id": "dxo",
      "title": "Диагноз шаг за шагом",
      "subtitle": "Sequential diagnosis · ИИ и клиническое мышление",
      "goal": "Объяснить, что измеряет диагностический бенчмарк, и сохранить границы вывода.",
      "minutes": 15,
      "level": "B1–B2",
      "sourcePages": "с. 423–428 · PDF 139–144",
      "source": {
        "title": "Sequential diagnosis with language models",
        "authors": "Harsha Nori et al.",
        "url": "https://doi.org/10.1126/science.aeh7930",
        "printed": "с. 423–428",
        "pdf": "139–144"
      },
      "reading": [
        {
          "en": "A diagnosis often starts with a question, not a complete story. In this study, a language-model system called DxO gathered information step by step. It asked questions, ordered tests, and revised a list of possible diagnoses.",
          "ru": "Диагностика часто начинается с вопроса, когда полной истории ещё нет. В исследовании система языковых моделей DxO собирала информацию поэтапно. Она задавала вопросы, запрашивала исследования и пересматривала список возможных диагнозов.",
          "audioSrc": "./audio/dxo-reading-01.mp3"
        },
        {
          "en": "The researchers used a text-based simulation. DxO reached 83.2% accuracy on NEJM clinical case challenges and 80.3% on MIMIC-IV-ED cases. Participating generalist doctors achieved 36.1% and 46.8%, respectively, with access to reference tools.",
          "ru": "Исследователи использовали текстовую симуляцию. Точность DxO составила 83,2% на клинических задачах NEJM и 80,3% на случаях MIMIC-IV-ED. У участвовавших врачей общего профиля с доступом к справочным инструментам показатели составили 36,1% и 46,8% соответственно.",
          "audioSrc": "./audio/dxo-reading-02.mp3"
        },
        {
          "en": "Accuracy and cost depended on the configuration. With no budget limit, DxO was more accurate but had higher estimated testing costs than the doctors on average. Tighter budgets reduced costs and also reduced accuracy.",
          "ru": "Точность и стоимость зависели от конфигурации. Без ограничения бюджета DxO давала более точные ответы, но расчётная стоимость исследований в среднем была выше, чем у врачей. Более строгие бюджеты снижали и стоимость, и точность.",
          "audioSrc": "./audio/dxo-reading-03.mp3"
        },
        {
          "en": "Think of the benchmark as a flight simulator: it tests selected skills in controlled conditions. It does not reproduce the whole job. The study did not measure patient outcomes or compare DxO with specialist teams in real clinical practice.",
          "ru": "Бенчмарк можно сравнить с авиасимулятором: он проверяет отдельные навыки в контролируемых условиях. Всю работу он не воспроизводит. Исследование не измеряло исходы у пациентов и не сравнивало DxO с командами специалистов в реальной клинической практике.",
          "audioSrc": "./audio/dxo-reading-04.mp3"
        }
      ],
      "vocabulary": [
        {
          "id": "v1",
          "term": "gather information",
          "translation": "собирать информацию",
          "example": "The system gathered information before choosing a test.",
          "exampleRu": "Система собрала информацию перед выбором исследования.",
          "ipa": "/ˈɡæðə ˌɪnfəˈmeɪʃən/",
          "model": "gather + information; information неисчисляемое",
          "audioSrc": "./audio/dxo-vocab-01.mp3"
        },
        {
          "id": "v2",
          "term": "rule out",
          "translation": "исключить возможное объяснение",
          "example": "This result does not rule out another explanation.",
          "exampleRu": "Этот результат не исключает другого объяснения.",
          "ipa": "/ruːl aʊt/",
          "model": "rule out + noun; осторожность: does not rule out",
          "audioSrc": "./audio/dxo-vocab-02.mp3"
        },
        {
          "id": "v3",
          "term": "workup",
          "translation": "диагностическое обследование",
          "example": "The workup included questions and tests.",
          "exampleRu": "Обследование включало вопросы и исследования.",
          "ipa": "/ˈwɜːkʌp/",
          "model": "a diagnostic workup; медицинский регистр",
          "audioSrc": "./audio/dxo-vocab-03.mp3"
        },
        {
          "id": "v4",
          "term": "accuracy",
          "translation": "точность",
          "example": "Accuracy changed with the budget.",
          "exampleRu": "Точность менялась в зависимости от бюджета.",
          "ipa": "/ˈækjərəsi/",
          "model": "diagnostic accuracy; обычно неисчисляемое",
          "audioSrc": "./audio/dxo-vocab-04.mp3"
        },
        {
          "id": "v5",
          "term": "on average",
          "translation": "в среднем",
          "example": "The doctors asked fewer questions on average.",
          "exampleRu": "Врачи в среднем задавали меньше вопросов.",
          "ipa": "/ɒn ˈævərɪdʒ/",
          "model": "on average + clause; про среднее, не каждого участника",
          "audioSrc": "./audio/dxo-vocab-05.mp3"
        },
        {
          "id": "v6",
          "term": "under controlled conditions",
          "translation": "в контролируемых условиях",
          "example": "The system was tested under controlled conditions.",
          "exampleRu": "Систему проверяли в контролируемых условиях.",
          "ipa": "/ˈʌndə kənˈtrəʊld kənˈdɪʃənz/",
          "model": "under + conditions",
          "audioSrc": "./audio/dxo-vocab-06.mp3"
        }
      ],
      "grammar": {
        "title": "Past Simple: что сделали в исследовании",
        "explanation": "Используйте Past Simple для завершённых действий конкретного исследования. Сначала назовите действие, затем его объект.",
        "pattern": "subject + verb-ed / irregular past form",
        "contrast": "Present Simple описывает принцип: The system asks questions. Past Simple описывает эксперимент: It asked questions.",
        "mistake": "После did/did not нужен глагол без -ed: did not measure, а не did not measured.",
        "examples": [
          {
            "en": "The researchers compared two datasets.",
            "ru": "Исследователи сравнили два набора данных.",
            "audioSrc": "./audio/dxo-grammar-01.mp3"
          },
          {
            "en": "DxO asked further questions.",
            "ru": "DxO задала дополнительные вопросы.",
            "audioSrc": "./audio/dxo-grammar-02.mp3"
          },
          {
            "en": "The study did not measure patient outcomes.",
            "ru": "Исследование не измеряло исходы у пациентов.",
            "audioSrc": "./audio/dxo-grammar-03.mp3"
          }
        ]
      },
      "quiz": [
        {
          "id": "q1",
          "question": "Что непосредственно оценивали в SDBench?",
          "options": [
            "Выживаемость пациентов",
            "Диагностическую точность и расчётную стоимость обследования",
            "Результаты лечения инсульта"
          ],
          "answer": 1,
          "explanation": "Это текстовый диагностический бенчмарк. Клинические исходы и качество лечения не оценивали."
        },
        {
          "id": "q2",
          "question": "Выберите грамматически верный вариант.",
          "options": [
            "The study did not measured outcomes.",
            "The study did not measures outcomes.",
            "The study did not measure outcomes."
          ],
          "answer": 2,
          "explanation": "После did not используется начальная форма measure."
        },
        {
          "id": "q3",
          "question": "Что означает on average?",
          "options": [
            "В среднем",
            "У каждого участника",
            "Всегда"
          ],
          "answer": 0,
          "explanation": "Средний результат не означает одинаковый результат у всех участников."
        },
        {
          "id": "q4",
          "question": "Какой вывод соответствует исследованию?",
          "options": [
            "DxO заменяет любую врачебную команду.",
            "DxO была точнее участвовавших врачей в текстовой симуляции.",
            "DxO уже доказанно улучшает исходы у пациентов."
          ],
          "answer": 1,
          "explanation": "Граница вывода: конкретный бенчмарк и участвовавшие врачи общего профиля. Это не клиническое испытание."
        }
      ],
      "practice": {
        "prompt": "Перескажите исследование в двух английских предложениях: результат и ограничение.",
        "sample": "DxO achieved higher accuracy in a text-based benchmark. The study did not measure patient outcomes.",
        "hint": "Начните с DxO achieved... Затем добавьте The study did not..."
      },
      "evidence": {
        "type": "Текстовый диагностический бенчмарк",
        "summary": "Сбор информации оценивали вместе с точностью и расчётной стоимостью.",
        "limitation": "Не клиническое испытание; нет оценки лечения или пользы для пациентов.",
        "analogy": "Авиасимулятор объясняет контролируемую проверку отдельных навыков. Он не доказывает перенос результата в реальную практику."
      },
      "audio": {
        "src": "",
        "voice": "en-GB-RyanNeural",
        "text": "A diagnosis often starts with a question, not a complete story. In this study, a language-model system called DxO gathered information step by step. It asked questions, ordered tests, and revised a list of possible diagnoses.\n\nThe researchers used a text-based simulation. DxO reached 83.2% accuracy on NEJM clinical case challenges and 80.3% on MIMIC-IV-ED cases. Participating generalist doctors achieved 36.1% and 46.8%, respectively, with access to reference tools.\n\nAccuracy and cost depended on the configuration. With no budget limit, DxO was more accurate but had higher estimated testing costs than the doctors on average. Tighter budgets reduced costs and also reduced accuracy.\n\nThink of the benchmark as a flight simulator: it tests selected skills in controlled conditions. It does not reproduce the whole job. The study did not measure patient outcomes or compare DxO with specialist teams in real clinical practice."
      },
      "analysis": {
        "headline": "Важно не только угадать диагноз, но и решить, какую информацию получить следующей и когда её уже достаточно.",
        "whyItMatters": "Чтобы оценивать медицинский ИИ, нужно спросить, как он собирает сведения и что именно считается успехом. Правильное название диагноза не описывает всю работу врача.",
        "design": "SDBench превращает 304 клинико-патологические задачи NEJM и 325 эпизодов поступления из MIMIC-IV-ED в последовательные текстовые встречи. Диагност задаёт вопросы, назначает исследования и завершает обследование. DxO моделирует панель экспертов с разными ролями. Gatekeeper выдаёт запрошенную информацию; при её отсутствии в исходной записи создаёт диагностически нейтральные синтетические ответы. Judge оценивает диагноз по пятиуровневой рубрике; оценки 4–5 считаются правильными.",
        "findings": [
          "На CPC DxO с GPT-5 без бюджетного ограничения: точность 83,2%, средняя модельная стоимость обследования $5431. При ограничении бюджета: 80,9% за $2241 и 79,6% за $1303.",
          "Врачи общего профиля на CPC в open-book режиме: 36,1%, $4725 в среднем. В closed-book режиме: 22,3%, $3049. Для человеческого сравнения использован отдельный набор из 56 CPC-задач; 304: размер исходного корпуса, а не число задач, решённых каждым врачом.",
          "На ED DxO без ограничения бюджета: 80,3%, $4979. Более экономные конфигурации: 73,2% за $2634 и 69,5% за $2037. Врачи: 46,8%, $3400.",
          "На сопоставимых CPC-задачах DxO задавал в среднем 25,5 вопросов до первого исследования, врачи: 5,6. Это иллюстрирует иной порядок сбора информации, а не требование задавать пациенту ровно столько вопросов."
        ],
        "limit": "Это не проспективное клиническое исследование. Не измерены польза для пациентов, ошибки лечения, смертность, функциональные исходы и безопасность лечебных решений. Нет реальных беседы и осмотра, изображений КТ/МРТ, сигналов мониторинга и динамики ответа на лечение. Среда не воспроизводит задержки, шум документации, дефицит ресурсов и клиническую срочность. Сравнение проведено с отдельными врачами общего профиля, а не с профильными специалистами или мультидисциплинарными командами. Авторы прямо предостерегают от такого обобщения. В корпусе только патологические случаи; CPC обогащён сложными диагнозами. Стоимость основана на американских тарифах и не означает фактическую экономию в российском ПСО. Без бюджетного ограничения DxO точнее, но его средняя стоимость выше врачебной в обоих приведённых сравнениях. Фраза «точнее и дешевле» требует указать конфигурацию. Все авторы: сотрудники Microsoft с долями компании; часть авторов указана в связанной патентной заявке. Это раскрытый конфликт интересов, а не само по себе опровержение результатов.",
        "takeaway": "Полезно учиться видеть последовательность: гипотеза, уточняющий вопрос, следующий тест, пересмотр. Перенос показателей бенчмарка в клиническую практику требует отдельной проверки.",
        "sourceNote": "Пересказ предоставленного PDF. Печатные 423–428; PDF 139–144. Внешние дополнения по DOI отдельно не проверялись."
      }
    },
    {
      "id": "virtual",
      "title": "Виртуальная научная команда",
      "subtitle": "The Virtual Biotech · Как соединять доказательства",
      "goal": "Различать ассоциацию, гипотезу и проверенный эффект.",
      "minutes": 15,
      "level": "B1–B2",
      "sourcePages": "с. 399; статья eaeg6779, 1–16 · PDF 69–85",
      "source": {
        "title": "The Virtual Biotech: A multi-agent AI framework for therapeutic discovery and development",
        "authors": "Harrison G. Zhang et al.",
        "url": "https://doi.org/10.1126/science.aeg6779",
        "printed": "с. 399; статья eaeg6779, 1–16",
        "pdf": "69–85"
      },
      "reading": [
        {
          "en": "Drug research brings together many kinds of evidence. The Virtual Biotech divides this work among specialised AI agents. A virtual scientific leader assigns tasks, and a reviewer checks whether the conclusions are supported. Humans guide the research questions.",
          "ru": "В разработке лекарств нужно соединять разные виды данных. Virtual Biotech распределяет эту работу между специализированными ИИ-агентами. Виртуальный научный руководитель назначает задачи, а рецензент проверяет обоснованность выводов. Люди задают направление исследований.",
          "audioSrc": "./audio/virtual-reading-01.mp3"
        },
        {
          "en": "The combined dataset contained 55,984 clinical trials. Drugs with targets that were more specific to particular cell types were associated with better trial outcomes. This was an observational analysis. It did not show that using AI caused more drugs to succeed.",
          "ru": "Объединённый набор включал 55 984 клинических испытания. Препараты с мишенями, более специфичными для отдельных типов клеток, были связаны с лучшими результатами испытаний. Анализ был наблюдательным. Он не показал, что применение ИИ само по себе повысило успешность разработки лекарств.",
          "audioSrc": "./audio/virtual-reading-02.mp3"
        },
        {
          "en": "The team also investigated a lung cancer target and a failed ulcerative colitis trial. For the failed trial, it suggested that several receptors could activate the same downstream pathway. Blocking one entry point might therefore leave other routes open.",
          "ru": "Команда также изучила мишень при раке лёгкого и неудачу испытания при язвенном колите. Для неудачного испытания система предположила, что несколько рецепторов могут активировать один и тот же последующий сигнальный путь. Поэтому блокада одного входа может оставлять другие пути открытыми.",
          "audioSrc": "./audio/virtual-reading-03.mp3"
        },
        {
          "en": "An organised research team is a useful analogy, but these agents did not run laboratory experiments. Experts reproduced eight analyses and agreed with their main conclusions. Biological hypotheses still need independent testing, especially where the available data are limited.",
          "ru": "Аналогия с организованной научной командой помогает понять распределение работы, но агенты не проводили лабораторных экспериментов. Эксперты повторили восемь анализов и согласились с основными выводами. Биологические гипотезы всё ещё требуют независимой проверки, особенно при ограниченных данных.",
          "audioSrc": "./audio/virtual-reading-04.mp3"
        }
      ],
      "vocabulary": [
        {
          "id": "v1",
          "term": "evidence",
          "translation": "данные, свидетельства",
          "example": "The conclusion needs stronger evidence.",
          "exampleRu": "Выводу нужны более убедительные данные.",
          "ipa": "/ˈevɪdəns/",
          "model": "evidence for + noun; неисчисляемое",
          "audioSrc": "./audio/virtual-vocab-01.mp3"
        },
        {
          "id": "v2",
          "term": "be associated with",
          "translation": "быть связанным с",
          "example": "The feature was associated with trial success.",
          "exampleRu": "Признак был связан с успехом испытаний.",
          "ipa": "/bi əˈsəʊsieɪtɪd wɪð/",
          "model": "be associated with + noun; не означает причинность",
          "audioSrc": "./audio/virtual-vocab-02.mp3"
        },
        {
          "id": "v3",
          "term": "drug target",
          "translation": "лекарственная мишень",
          "example": "The agents compared drug targets.",
          "exampleRu": "Агенты сравнили лекарственные мишени.",
          "ipa": "/drʌɡ ˈtɑːɡɪt/",
          "model": "a target for + a treatment",
          "audioSrc": "./audio/virtual-vocab-03.mp3"
        },
        {
          "id": "v4",
          "term": "carry out",
          "translation": "проводить, выполнять",
          "example": "The agents carried out data analyses.",
          "exampleRu": "Агенты выполнили анализы данных.",
          "ipa": "/ˈkæri aʊt/",
          "model": "carry out an analysis / a study",
          "audioSrc": "./audio/virtual-vocab-04.mp3"
        },
        {
          "id": "v5",
          "term": "downstream",
          "translation": "дальше по сигнальному пути",
          "example": "Several receptors may affect the same downstream pathway.",
          "exampleRu": "Несколько рецепторов могут влиять на один и тот же последующий сигнальный путь.",
          "ipa": "/ˌdaʊnˈstriːm/",
          "model": "a downstream pathway; научный регистр",
          "audioSrc": "./audio/virtual-vocab-05.mp3"
        },
        {
          "id": "v6",
          "term": "independent testing",
          "translation": "независимая проверка",
          "example": "The hypothesis still needs independent testing.",
          "exampleRu": "Гипотезе всё ещё нужна независимая проверка.",
          "ipa": "/ˌɪndɪˈpendənt ˈtestɪŋ/",
          "model": "need + noun / need to be tested",
          "audioSrc": "./audio/virtual-vocab-06.mp3"
        }
      ],
      "grammar": {
        "title": "Модальные may, might и could",
        "explanation": "Эти глаголы позволяют передать возможное объяснение без обещания доказанного эффекта. В научном тексте степень уверенности является частью смысла.",
        "pattern": "may / might / could + base verb",
        "contrast": "The feature causes success утверждает причинность. The feature may help predict success выражает возможность.",
        "mistake": "Не добавляйте to или -s после may: may affect, а не may to affect / may affects.",
        "examples": [
          {
            "en": "Several pathways may remain active.",
            "ru": "Несколько путей могут оставаться активными.",
            "audioSrc": "./audio/virtual-grammar-01.mp3"
          },
          {
            "en": "The result might reflect other differences.",
            "ru": "Результат может отражать другие различия.",
            "audioSrc": "./audio/virtual-grammar-02.mp3"
          },
          {
            "en": "The system could support early research.",
            "ru": "Система могла бы поддержать ранние этапы исследования.",
            "audioSrc": "./audio/virtual-grammar-03.mp3"
          }
        ]
      },
      "quiz": [
        {
          "id": "q1",
          "question": "Чему равно число 55 984?",
          "options": [
            "Числу пациентов",
            "Числу новых лекарств",
            "Числу испытаний в объединённом наборе"
          ],
          "answer": 2,
          "explanation": "Это записи клинических испытаний, а не пациенты или созданные системой препараты."
        },
        {
          "id": "q2",
          "question": "Выберите естественную осторожную фразу.",
          "options": [
            "This may explain the result.",
            "This may explains the result.",
            "This may to explain the result."
          ],
          "answer": 0,
          "explanation": "После may нужен глагол в начальной форме explain."
        },
        {
          "id": "q3",
          "question": "Что означает was associated with?",
          "options": [
            "Доказанно вызвало",
            "Было связано с",
            "Полностью исключило"
          ],
          "answer": 1,
          "explanation": "Ассоциация сама по себе не устанавливает причинную связь."
        },
        {
          "id": "q4",
          "question": "Что подтвердила экспертная проверка?",
          "options": [
            "Эффективность нового лечения у людей",
            "Все предложенные биологические механизмы",
            "Основные результаты восьми вычислительных анализов"
          ],
          "answer": 2,
          "explanation": "Эксперты воспроизвели анализы. Биологические гипотезы требуют отдельной проверки."
        }
      ],
      "practice": {
        "prompt": "Объясните по-английски, почему блокада одного рецептора могла не сработать. Сохраните неопределённость.",
        "sample": "Other receptors might activate the same pathway. This hypothesis still needs independent testing.",
        "hint": "Используйте might или may, затем фразу needs independent testing."
      },
      "evidence": {
        "type": "Вычислительный и наблюдательный анализ",
        "summary": "Агенты соединяли данные и предлагали проверяемые гипотезы.",
        "limitation": "Ассоциации не доказывают эффект внедрения ИИ; лабораторные эксперименты вне платформы.",
        "analogy": "Команда с руководителем и рецензентом объясняет организацию работы, но не делает ИИ эквивалентом реальной фармкомпании."
      },
      "audio": {
        "src": "",
        "voice": "en-GB-RyanNeural",
        "text": "Drug research brings together many kinds of evidence. The Virtual Biotech divides this work among specialised AI agents. A virtual scientific leader assigns tasks, and a reviewer checks whether the conclusions are supported. Humans guide the research questions.\n\nThe combined dataset contained 55,984 clinical trials. Drugs with targets that were more specific to particular cell types were associated with better trial outcomes. This was an observational analysis. It did not show that using AI caused more drugs to succeed.\n\nThe team also investigated a lung cancer target and a failed ulcerative colitis trial. For the failed trial, it suggested that several receptors could activate the same downstream pathway. Blocking one entry point might therefore leave other routes open.\n\nAn organised research team is a useful analogy, but these agents did not run laboratory experiments. Experts reproduced eight analyses and agreed with their main conclusions. Biological hypotheses still need independent testing, especially where the available data are limited."
      },
      "analysis": {
        "headline": "Ценность ИИ здесь в связывании разных видов свидетельств и проверяемом анализе, а не в заявлении, что он уже создал успешное лекарство.",
        "whyItMatters": "Одна убедительная связь редко решает вопрос о лекарственной мишени. Здесь интересен способ свести генетические, клеточные и клинические данные в проверяемый анализ.",
        "design": "Виртуальный научный руководитель направляет специализированных агентов к генетическим, single-cell, пространственным и клиническим данным. Отдельный научный рецензент проверяет анализы. Изучены три задачи: выбор мишеней, B7-H3 при раке лёгкого и возможные причины прекращения испытания anti-OSMRβ при язвенном колите.",
        "findings": [
          "37 075 агентов извлекали сведения об исследованиях; итоговый объединённый набор включал 55 984 испытания. Это число записей испытаний, а не пациентов.",
          "В случайной ручной проверке 100 исследований совпадение по первичным исходам составило 88,4% среди 86 применимых записей, по нежелательным явлениям: 92,4% среди 66 записей с точными данными. На 7666 пересекающихся записях с TDC совпадение первичных исходов: 85,6%.",
          "Клеточно-специфичные мишени были связаны с более успешным продвижением препаратов и меньшей частотой нежелательных явлений. Авторы приводят относительные различия 48% для достижения фазы 4 и 32% для частоты нежелательных явлений; это ассоциации, не увеличение вероятности успеха от внедрения ИИ.",
          "В анализе B7-H3 система предложила подход с конъюгатом антитело–препарат, связав экспрессию в фибробластах, пространственное исключение иммунных клеток и исходы. В анализе OSMRβ предположила избыточность путей через общую ось gp130 как объяснение недостаточного эффекта блокады одного рецептора.",
          "Четыре эксперта независимо повторили восемь анализов и подтвердили основные выводы и корректность кода. Это проверка вычислительных результатов, не экспериментальное подтверждение всех биологических гипотез."
        ],
        "limit": "Наблюдательные данные допускают смешение по мишеням, заболеваниям, дизайну исходов и спонсорам; статистические поправки не устраняют все альтернативные объяснения. Результаты зависят от полноты и качества источников; часть сведений извлечена из пресс-релизов и регуляторных сообщений при отсутствии первичных данных. Гипотезы B7-H3 и OSMRβ требуют экспериментальной и клинической проверки. Прекращённое испытание не было повторно проведено системой. Платформа сильнее там, где хорошо представлены человеческие данные. Редкие болезни, плохо аннотированные мишени и недостаточно представленные ткани/популяции ограничивают выводы. Разработка выполнялась с участием человека, выбирающего направления дальнейшего анализа; это не полностью автономная фармкомпания.",
        "takeaway": "Читайте вывод вместе с происхождением данных и воспроизводимым анализом. Убедительная гипотеза остаётся гипотезой до экспериментальной проверки.",
        "sourceNote": "Пересказ предоставленного PDF. Печатные 399; полный текст eaeg6779, 1–16; PDF 69–85. Внешние дополнения по DOI отдельно не проверялись."
      }
    },
    {
      "id": "echo",
      "title": "Глюкоза под электронным контролем",
      "subtitle": "ECHO · Обратная связь в эксперименте на мышах",
      "goal": "Понять замкнутый контур и не смешать два срока наблюдения.",
      "minutes": 15,
      "level": "B1–B2",
      "sourcePages": "с. 400; статья eady8560, 1–14 · PDF 86–100",
      "source": {
        "title": "Wireless electrocatalytic closed-loop system for drug-free management of diabesity",
        "authors": "Debasis Maity et al.",
        "url": "https://doi.org/10.1126/science.ady8560",
        "printed": "с. 400; статья eady8560, 1–14",
        "pdf": "86–100"
      },
      "reading": [
        {
          "en": "ECHO is an experimental implant that uses electrical power to convert glucose into gluconate. The kidneys can remove this product. Researchers tested the device in mice with type 2 diabetes and obesity. It did not deliver insulin.",
          "ru": "ECHO представляет собой экспериментальный имплант, который использует электричество для превращения глюкозы в глюконат. Почки могут выводить этот продукт. Устройство испытывали на мышах с диабетом 2-го типа и ожирением. Инсулин оно не вводило.",
          "audioSrc": "./audio/echo-reading-01.mp3"
        },
        {
          "en": "Repeated daily activation controlled glucose over six weeks. In a separate experiment, a continuous glucose monitor sent feedback to the control system. If glucose rose above a preset threshold, the implant switched on. This automatic closed-loop test lasted twelve days.",
          "ru": "Повторная ежедневная активация обеспечивала контроль глюкозы в течение шести недель. В отдельном эксперименте непрерывный монитор глюкозы передавал обратную связь системе управления. Когда показатель превышал заданный порог, имплант включался. Этот автоматический замкнутый контур испытывали двенадцать дней.",
          "audioSrc": "./audio/echo-reading-02.mp3"
        },
        {
          "en": "The treated mice also used more stored fat and had lower body weight. Researchers did not detect hypoglycaemia under the tested conditions. However, a limited mouse study cannot establish long-term safety or effectiveness in people.",
          "ru": "У получавших воздействие мышей также усилилось использование запасённого жира и снизилась масса тела. В проверенных условиях исследователи не выявили гипогликемии. Однако ограниченное исследование на мышах не устанавливает долгосрочную безопасность или эффективность у людей.",
          "audioSrc": "./audio/echo-reading-03.mp3"
        },
        {
          "en": "A thermostat helps explain feedback: a sensor measures a value, and a controller changes an action. The analogy describes the control loop only. A living body is more complex than a room, and the implant still requires further preclinical development.",
          "ru": "Термостат помогает объяснить обратную связь: датчик измеряет величину, а контроллер меняет действие. Аналогия описывает только контур управления. Живой организм сложнее комнаты, и импланту нужна дальнейшая доклиническая разработка.",
          "audioSrc": "./audio/echo-reading-04.mp3"
        }
      ],
      "vocabulary": [
        {
          "id": "v1",
          "term": "feedback",
          "translation": "обратная связь",
          "example": "The monitor provided feedback to the controller.",
          "exampleRu": "Монитор передавал обратную связь контроллеру.",
          "ipa": "/ˈfiːdbæk/",
          "model": "feedback from / feedback to; неисчисляемое",
          "audioSrc": "./audio/echo-vocab-01.mp3"
        },
        {
          "id": "v2",
          "term": "threshold",
          "translation": "порог",
          "example": "The device switched on above a preset threshold.",
          "exampleRu": "Устройство включалось выше заданного порога.",
          "ipa": "/ˈθreʃhəʊld/",
          "model": "above / below a threshold",
          "audioSrc": "./audio/echo-vocab-02.mp3"
        },
        {
          "id": "v3",
          "term": "switch on",
          "translation": "включаться; включать",
          "example": "The controller switched the implant on.",
          "exampleRu": "Контроллер включил имплант.",
          "ipa": "/swɪtʃ ɒn/",
          "model": "switch something on; switch it on",
          "audioSrc": "./audio/echo-vocab-03.mp3"
        },
        {
          "id": "v4",
          "term": "convert into",
          "translation": "превращать в",
          "example": "The implant converted glucose into gluconate.",
          "exampleRu": "Имплант превращал глюкозу в глюконат.",
          "ipa": "/kənˈvɜːt ˈɪntuː/",
          "model": "convert A into B",
          "audioSrc": "./audio/echo-vocab-04.mp3"
        },
        {
          "id": "v5",
          "term": "under the tested conditions",
          "translation": "в проверенных условиях",
          "example": "No hypoglycaemia was detected under the tested conditions.",
          "exampleRu": "В проверенных условиях гипогликемии не выявили.",
          "ipa": "/ˈʌndə ðə ˈtestɪd kənˈdɪʃənz/",
          "model": "Уточнение области действия результата",
          "audioSrc": "./audio/echo-vocab-05.mp3"
        },
        {
          "id": "v6",
          "term": "stored fat",
          "translation": "запасённый жир",
          "example": "The treated mice used more stored fat.",
          "exampleRu": "Мыши после воздействия использовали больше запасённого жира.",
          "ipa": "/stɔːd fæt/",
          "model": "stored + noun; stored energy / stored data",
          "audioSrc": "./audio/echo-vocab-06.mp3"
        }
      ],
      "grammar": {
        "title": "If и when: условие в описании механизма",
        "explanation": "Для повторяющегося правила используйте Present Simple в обеих частях. If выделяет условие, when обычно указывает, что событие ожидается.",
        "pattern": "If / When + Present Simple, Present Simple",
        "contrast": "If glucose rises... задаёт условие. When glucose rises... описывает ожидаемую ситуацию. В конкретном прошлом эксперименте возможен Past Simple.",
        "mistake": "Для общего правила не требуется will после if: If glucose rises, the device switches on.",
        "examples": [
          {
            "en": "If glucose rises, the controller activates the implant.",
            "ru": "Если глюкоза повышается, контроллер активирует имплант.",
            "audioSrc": "./audio/echo-grammar-01.mp3"
          },
          {
            "en": "When the signal falls, the device switches off.",
            "ru": "Когда сигнал снижается, устройство выключается.",
            "audioSrc": "./audio/echo-grammar-02.mp3"
          },
          {
            "en": "If the sensor fails, the feedback loop may fail.",
            "ru": "Если датчик отказывает, контур обратной связи может нарушиться.",
            "audioSrc": "./audio/echo-grammar-03.mp3"
          }
        ]
      },
      "quiz": [
        {
          "id": "q1",
          "question": "Сколько длился именно автономный этап CGM–ECHO?",
          "options": [
            "Шесть недель",
            "Двенадцать дней",
            "Двенадцать месяцев"
          ],
          "answer": 1,
          "explanation": "Шесть недель относятся к повторной ежедневной активации. Замкнутый контур с CGM проверяли 12 дней."
        },
        {
          "id": "q2",
          "question": "Выберите предложение для повторяющегося правила.",
          "options": [
            "If glucose will rise, the device switches on.",
            "If glucose rising, the device switches on.",
            "If glucose rises, the device switches on."
          ],
          "answer": 2,
          "explanation": "После if в таком правиле нужен Present Simple: rises."
        },
        {
          "id": "q3",
          "question": "Что означает convert A into B?",
          "options": [
            "Превратить A в B",
            "Сравнить A с B",
            "Отделить A от B"
          ],
          "answer": 0,
          "explanation": "Into указывает продукт превращения."
        },
        {
          "id": "q4",
          "question": "Какой вывод корректен?",
          "options": [
            "Отсутствие выявленной гипогликемии доказывает безопасность для всех людей.",
            "Это обнадёживающий доклинический результат на мышах.",
            "Диабет у людей уже можно лечить этим имплантом."
          ],
          "answer": 1,
          "explanation": "Людей в этом исследовании не лечили. Необнаруженный риск не равен отсутствующему риску."
        }
      ],
      "practice": {
        "prompt": "В двух английских предложениях объясните работу контура и назовите модель исследования.",
        "sample": "If glucose rises above the threshold, the implant switches on. The system was tested in mice.",
        "hint": "Используйте If + Present Simple. Не забудьте in mice."
      },
      "evidence": {
        "type": "Доклинический эксперимент на мышах",
        "summary": "Превращение глюкозы в глюконат регулировали электричеством и обратной связью.",
        "limitation": "6 недель повторной активации и 12 дней автоматического контура являются разными этапами. Исследования у людей нет.",
        "analogy": "Термостат объясняет принцип обратной связи, но не сложность обмена веществ или клиническую безопасность."
      },
      "audio": {
        "src": "",
        "voice": "en-GB-RyanNeural",
        "text": "ECHO is an experimental implant that uses electrical power to convert glucose into gluconate. The kidneys can remove this product. Researchers tested the device in mice with type 2 diabetes and obesity. It did not deliver insulin.\n\nRepeated daily activation controlled glucose over six weeks. In a separate experiment, a continuous glucose monitor sent feedback to the control system. If glucose rose above a preset threshold, the implant switched on. This automatic closed-loop test lasted twelve days.\n\nThe treated mice also used more stored fat and had lower body weight. Researchers did not detect hypoglycaemia under the tested conditions. However, a limited mouse study cannot establish long-term safety or effectiveness in people.\n\nA thermostat helps explain feedback: a sensor measures a value, and a controller changes an action. The analogy describes the control loop only. A living body is more complex than a room, and the implant still requires further preclinical development."
      },
      "analysis": {
        "headline": "Устройство регулирует концентрацию метаболита непосредственно: превращает глюкозу в глюконат, а не доставляет инсулин.",
        "whyItMatters": "Работа показывает другой способ воздействовать на метаболит: управлять его химическим превращением по сигналу датчика. Разные режимы испытаний важно читать отдельно.",
        "design": "ECHO: подкожный беспроводно питаемый имплант с золотом и платиной на пористом графите. Электрокатализ превращает глюкозу в глюконат, который выводится почками. В модели db/db-мышей с диабетом и ожирением имплант изучали отдельно и в связке с коммерческим непрерывным монитором глюкозы через смартфон.",
        "findings": [
          "В основном тексте нормогликемия достигалась за 60–90 минут после включения при 0,75 В и 10 мА. Эти параметры: описание эксперимента, не человеческий лечебный режим.",
          "Повторная активация 60 минут в день обеспечивала контроль гликемии в течение 6 недель; масса тела уменьшалась до 10%. В ключевых метаболических экспериментах n = 8 биологических повторов на группу.",
          "Полностью замкнутый контур CGM–ECHO проверен в течение 12 дней, срока службы использованного сенсора. Не следует называть шестинедельный этап шестью неделями автономной замкнутой терапии.",
          "В проверенных условиях не выявлены гипогликемия, выраженные воспалительные или поведенческие изменения. Катализатор сохранял активность после трёх месяцев имплантации, но это отдельная оценка, не трёхмесячное доказательство клинической безопасности."
        ],
        "limit": "Нет исследования у людей, сопоставления долгосрочных клинических исходов или доказательства превосходства над современной терапией диабета. Небольшие группы и ограниченный срок не исключают редкие нежелательные эффекты. «Не обнаружили» не равно «не существует». Для переноса нужны масштабирование производительности, долговременная совместимость с тканями, оценка почечного выведения, ошибок датчика и отказов связи/питания. Снижение глюкозы и массы тела не доказывает снижение риска инсульта или сосудистых осложнений. «Без лекарств» не означает без имплантации, обслуживания и рисков.",
        "takeaway": "Разделяйте шесть недель повторного включения и двенадцать дней замкнутого контроля. Результаты на мышах не обосновывают замену лечения пациентов.",
        "sourceNote": "Пересказ предоставленного PDF. Печатные 400; полный текст eady8560, 1–14; комментарий 382–383; PDF 86–100; комментарий 26–27. Внешние дополнения по DOI отдельно не проверялись."
      }
    },
    {
      "id": "bak",
      "title": "Два пути клеточной гибели",
      "subtitle": "BAK и BAX · Механизм ещё не лечение",
      "goal": "Объяснить различие между выходом двух молекул и назвать уровень доказательств.",
      "minutes": 15,
      "level": "B1–B2",
      "sourcePages": "с. 401; статья eaea2181, 1–15 · PDF 101–116",
      "source": {
        "title": "BAK and BAX form a multiprotein complex to drive mtDNA efflux and caspase-independent cell death",
        "authors": "S. Yang et al.",
        "url": "https://doi.org/10.1126/science.aea2181",
        "printed": "с. 401; статья eaea2181, 1–15",
        "pdf": "101–116"
      },
      "reading": [
        {
          "en": "Mitochondria can help start a cell death programme. Researchers found that BAK and BAX participate in two different protein complexes. One releases cytochrome c, which can activate enzymes called caspases when the usual machinery works.",
          "ru": "Митохондрии могут помогать запускать программу клеточной гибели. Исследователи обнаружили участие BAK и BAX в двух разных белковых комплексах. Один обеспечивает выход цитохрома c, который при работающем обычном механизме может активировать ферменты каспазы.",
          "audioSrc": "./audio/bak-reading-01.mp3"
        },
        {
          "en": "The other complex helps mitochondrial DNA enter the surrounding cell fluid. When the usual caspase pathway cannot work, this release contributes to another form of cell death. The authors call it baciptosis. Its exact downstream death mechanism remains unclear.",
          "ru": "Другой комплекс помогает митохондриальной ДНК выходить в окружающую внутриклеточную жидкость. Когда обычный каспазный путь не работает, этот выход способствует другой форме гибели клетки. Авторы называют её baciptosis. Точный последующий механизм гибели пока неясен.",
          "audioSrc": "./audio/bak-reading-02.mp3"
        },
        {
          "en": "Removing certain partner proteins reduced DNA release without stopping cytochrome c release. This suggests that the two processes require different machinery. Imagine two doors: opening one does not automatically open the other. This image explains the separation, not the full molecular mechanism.",
          "ru": "Удаление некоторых белков-партнёров уменьшало выход ДНК, не останавливая выход цитохрома c. Это указывает на разные механизмы двух процессов. Представьте две двери: открытие одной не открывает другую автоматически. Образ объясняет разделение процессов, но не весь молекулярный механизм.",
          "audioSrc": "./audio/bak-reading-03.mp3"
        },
        {
          "en": "The experiments used isolated cell components and mouse and human cell cultures. A human cancer cell line is still a laboratory model. The study did not test a treatment in patients or show that activating this pathway improves cancer outcomes.",
          "ru": "В опытах использовали выделенные компоненты клеток, а также мышиные и человеческие клеточные культуры. Человеческая опухолевая линия остаётся лабораторной моделью. Исследование не испытывало лечение у пациентов и не показало, что активация этого пути улучшает исходы рака.",
          "audioSrc": "./audio/bak-reading-04.mp3"
        }
      ],
      "vocabulary": [
        {
          "id": "v1",
          "term": "release",
          "translation": "высвобождать; выход вещества",
          "example": "The complex helped release mitochondrial DNA.",
          "exampleRu": "Комплекс помогал высвобождению митохондриальной ДНК.",
          "ipa": "/rɪˈliːs/",
          "model": "release + substance; the release of + noun",
          "audioSrc": "./audio/bak-vocab-01.mp3"
        },
        {
          "id": "v2",
          "term": "pathway",
          "translation": "путь, цепь молекулярных событий",
          "example": "This pathway involves several proteins.",
          "exampleRu": "Этот путь включает несколько белков.",
          "ipa": "/ˈpɑːθweɪ/",
          "model": "a signalling pathway; научный регистр",
          "audioSrc": "./audio/bak-vocab-02.mp3"
        },
        {
          "id": "v3",
          "term": "trigger",
          "translation": "запускать",
          "example": "Cytochrome c can trigger a chain of events.",
          "exampleRu": "Цитохром c может запускать цепь событий.",
          "ipa": "/ˈtrɪɡə/",
          "model": "trigger + event / response",
          "audioSrc": "./audio/bak-vocab-03.mp3"
        },
        {
          "id": "v4",
          "term": "depend on",
          "translation": "зависеть от",
          "example": "The response depends on the experimental conditions.",
          "exampleRu": "Ответ зависит от условий эксперимента.",
          "ipa": "/dɪˈpend ɒn/",
          "model": "depend on, не depend from",
          "audioSrc": "./audio/bak-vocab-04.mp3"
        },
        {
          "id": "v5",
          "term": "cell culture",
          "translation": "клеточная культура",
          "example": "The team studied the process in cell cultures.",
          "exampleRu": "Команда изучала процесс в клеточных культурах.",
          "ipa": "/sel ˈkʌltʃə/",
          "model": "in cell culture / in cell cultures",
          "audioSrc": "./audio/bak-vocab-05.mp3"
        },
        {
          "id": "v6",
          "term": "remain unclear",
          "translation": "оставаться неясным",
          "example": "The final step remains unclear.",
          "exampleRu": "Последний этап остаётся неясным.",
          "ipa": "/rɪˈmeɪn ˌʌnˈklɪə/",
          "model": "remain + adjective; remain unknown",
          "audioSrc": "./audio/bak-vocab-06.mp3"
        }
      ],
      "grammar": {
        "title": "Without + -ing: одно изменилось, другое сохранилось",
        "explanation": "Конструкция показывает, что действие произошло без другого действия. Она полезна, когда нужно разделить два экспериментальных эффекта.",
        "pattern": "without + verb-ing",
        "contrast": "Without stopping the release говорит о сохранённом выходе вещества. To stop the release указывает цель остановить его.",
        "mistake": "После without не используйте to: without stopping, а не without to stop.",
        "examples": [
          {
            "en": "DNA release decreased without stopping cytochrome c release.",
            "ru": "Выход ДНК уменьшился без остановки выхода цитохрома c.",
            "audioSrc": "./audio/bak-grammar-01.mp3"
          },
          {
            "en": "We can describe the result without claiming a cure.",
            "ru": "Мы можем описать результат, не заявляя об излечении.",
            "audioSrc": "./audio/bak-grammar-02.mp3"
          },
          {
            "en": "The team compared the pathways without treating patients.",
            "ru": "Команда сравнила пути, не проводя лечения пациентов.",
            "audioSrc": "./audio/bak-grammar-03.mp3"
          }
        ]
      },
      "quiz": [
        {
          "id": "q1",
          "question": "Где получены данные этой работы?",
          "options": [
            "В клеточных и биохимических системах",
            "В новом клиническом испытании",
            "При лечении живых мышей от рака"
          ],
          "answer": 0,
          "explanation": "Использованы клеточные культуры и выделенные компоненты. Мышиные клетки не означают эксперимент лечения живых мышей."
        },
        {
          "id": "q2",
          "question": "Выберите правильную конструкцию.",
          "options": [
            "without to stop",
            "without stopped",
            "without stopping"
          ],
          "answer": 2,
          "explanation": "После предлога without используем -ing форму."
        },
        {
          "id": "q3",
          "question": "Какой предлог нужен: depends ___ the conditions?",
          "options": [
            "from",
            "on",
            "at"
          ],
          "answer": 1,
          "explanation": "Устойчивое сочетание: depend on."
        },
        {
          "id": "q4",
          "question": "Что пока остаётся неизвестным?",
          "options": [
            "Участвуют ли белки в клеточных процессах",
            "Точный механизм гибели после выхода mtDNA при baciptosis",
            "Существуют ли клеточные культуры"
          ],
          "answer": 1,
          "explanation": "Авторы отделяют выход mtDNA от ещё не объяснённого конечного механизма гибели. Не следует заполнять этот пробел известным воспалительным путём."
        }
      ],
      "practice": {
        "prompt": "Объясните по-английски, что изменилось при удалении белков-партнёров. Используйте without.",
        "sample": "Removing the proteins reduced DNA release without stopping cytochrome c release. This was a cell-culture experiment.",
        "hint": "Модель: reduced A without stopping B. Добавьте уровень доказательств."
      },
      "evidence": {
        "type": "Клеточные культуры и биохимия",
        "summary": "Выход mtDNA и выход цитохрома c зависят от функционально разных белковых комплексов.",
        "limitation": "Это не лечение животных или людей. Конечный механизм baciptosis не установлен.",
        "analogy": "Две двери помогают разделить два выхода; белковые комплексы не являются буквальными дверями."
      },
      "audio": {
        "src": "",
        "voice": "en-GB-RyanNeural",
        "text": "Mitochondria can help start a cell death programme. Researchers found that BAK and BAX participate in two different protein complexes. One releases cytochrome c, which can activate enzymes called caspases when the usual machinery works.\n\nThe other complex helps mitochondrial DNA enter the surrounding cell fluid. When the usual caspase pathway cannot work, this release contributes to another form of cell death. The authors call it baciptosis. Its exact downstream death mechanism remains unclear.\n\nRemoving certain partner proteins reduced DNA release without stopping cytochrome c release. This suggests that the two processes require different machinery. Imagine two doors: opening one does not automatically open the other. This image explains the separation, not the full molecular mechanism.\n\nThe experiments used isolated cell components and mouse and human cell cultures. A human cancer cell line is still a laboratory model. The study did not test a treatment in patients or show that activating this pathway improves cancer outcomes."
      },
      "analysis": {
        "headline": "Выход цитохрома c и выход митохондриальной ДНК: не одна и та же последовательность без дополнительных механизмов.",
        "whyItMatters": "Два события, происходящие при клеточной гибели, могут требовать разных молекулярных механизмов. Разделение этих процессов помогает точнее читать экспериментальные схемы.",
        "design": "Биохимические системы, мышиные клеточные культуры MEF и B16-F10 и человеческие опухолевые линии, включая A498 и PC9. Авторы разделяли вклад белков и изучали выделенные комплексы. Это не лечение живых мышей и не клиническое исследование.",
        "findings": [
          "BAK/BAX участвуют в функционально разных комплексах: один обеспечивает выход цитохрома c, другой основной выход митохондриальной ДНК (mtDNA).",
          "Большой комплекс около 600 кДа включает BAK/BAX, активирующие BH3-белки, VDAC1/2 и PHB1/2. Удаление VDAC1/2 уменьшало выход mtDNA, но не блокировало выход цитохрома c.",
          "При нарушенной работе апоптосомы авторы наблюдали каспазонезависимую форму гибели и назвали её baciptosis. Удаление VDAC1/2 не обеспечивало длительного клоногенного выживания.",
          "Выход mtDNA может включать воспалительный ответ cGAS–STING, но этот путь нельзя считать установленным механизмом самой baciptosis. Непосредственная связь mtDNA с конечной гибелью остаётся неизвестной."
        ],
        "limit": "Механизм исследован в клеточных и биохимических системах. Применение против опухолей остаётся направлением дальнейших исследований. Человеческая опухолевая линия в культуре не доказывает эффективность лечения пациента.",
        "takeaway": "Разделяйте выход цитохрома c, выход mtDNA, воспалительный ответ и конечную гибель. Стрелка между двумя процессами требует собственных данных.",
        "sourceNote": "Пересказ предоставленного PDF. Печатные 401; полный текст eaea2181, 1–15; комментарий 383–384; PDF 101–116; комментарий 27–28. Внешние дополнения по DOI отдельно не проверялись."
      }
    },
    {
      "id": "stat2",
      "title": "Один ген, разные сообщения",
      "subtitle": "STAT2 · РНК и ответ на иммунотерапию",
      "goal": "Различать механизм в клетках и связь с исходами в данных пациентов.",
      "minutes": 15,
      "level": "B1–B2",
      "sourcePages": "с. 397; статья eaea7156, 1–14 · PDF 43–57",
      "source": {
        "title": "Intron retention regulates STAT2 function and associates with immunotherapy response in lung cancer",
        "authors": "R. P. Englander et al.",
        "url": "https://doi.org/10.1126/science.aea7156",
        "printed": "с. 397; статья eaea7156, 1–14",
        "pdf": "43–57"
      },
      "reading": [
        {
          "en": "One gene can produce several versions of an RNA message. During splicing, cells remove sections called introns and join the remaining sections. Researchers studied RNA forms in twelve human lung tumours, then examined how retained introns affect STAT2.",
          "ru": "Один ген может давать несколько вариантов сообщения РНК. При сплайсинге клетка удаляет участки, называемые интронами, и соединяет оставшиеся части. Исследователи изучили формы РНК в двенадцати опухолях лёгкого человека, а затем проверили влияние сохранённых интронов на STAT2.",
          "audioSrc": "./audio/stat2-reading-01.mp3"
        },
        {
          "en": "STAT2 helps transmit interferon signals. When intron 6 or intron 12 remained in its RNA, cells made less full-length STAT2. Under particular conditions, a shortened form linked to intron 12 also interfered with signalling by binding a needed partner.",
          "ru": "STAT2 участвует в передаче интерфероновых сигналов. Когда в его РНК сохранялся интрон 6 или 12, клетки производили меньше полноразмерного STAT2. При определённых условиях укороченная форма, связанная с интроном 12, также мешала передаче сигнала, связывая необходимого партнёра.",
          "audioSrc": "./audio/stat2-reading-02.mp3"
        },
        {
          "en": "In existing clinical-trial data, the balance between the two retained introns was associated with survival after immunotherapy. The pattern may become a useful biomarker. However, the association does not prove that changing RNA splicing would improve a patient’s outcome.",
          "ru": "В данных ранее проведённых клинических испытаний соотношение двух сохранённых интронов было связано с выживаемостью после иммунотерапии. Такая особенность может стать полезным биомаркером. Однако связь не доказывает, что изменение сплайсинга РНК улучшит исход у пациента.",
          "audioSrc": "./audio/stat2-reading-03.mp3"
        },
        {
          "en": "Think of splicing as editing an instruction sheet. Different edits can produce different parts, and an incomplete part may still hold a useful partner. This comparison explains the cell mechanism only. The proposed biomarker still needs prospective validation.",
          "ru": "Представьте сплайсинг как редактирование инструкции. Разные правки могут приводить к разным деталям, а неполная деталь всё ещё может удерживать нужного партнёра. Сравнение объясняет только клеточный механизм. Предложенному биомаркеру ещё нужна проспективная проверка.",
          "audioSrc": "./audio/stat2-reading-04.mp3"
        }
      ],
      "vocabulary": [
        {
          "id": "v1",
          "term": "retain",
          "translation": "сохранять, удерживать",
          "example": "Some RNA messages retained an intron.",
          "exampleRu": "В некоторых сообщениях РНК сохранялся интрон.",
          "ipa": "/rɪˈteɪn/",
          "model": "retain + noun; retained intron",
          "audioSrc": "./audio/stat2-vocab-01.mp3"
        },
        {
          "id": "v2",
          "term": "full-length",
          "translation": "полноразмерный",
          "example": "The cells produced less full-length protein.",
          "exampleRu": "Клетки производили меньше полноразмерного белка.",
          "ipa": "/ˌfʊl ˈleŋθ/",
          "model": "full-length + protein / transcript",
          "audioSrc": "./audio/stat2-vocab-02.mp3"
        },
        {
          "id": "v3",
          "term": "interfere with",
          "translation": "мешать, нарушать работу",
          "example": "The shortened form interfered with signalling.",
          "exampleRu": "Укороченная форма мешала передаче сигнала.",
          "ipa": "/ˌɪntəˈfɪə wɪð/",
          "model": "interfere with + process",
          "audioSrc": "./audio/stat2-vocab-03.mp3"
        },
        {
          "id": "v4",
          "term": "treatment response",
          "translation": "ответ на лечение",
          "example": "The team studied a possible marker of treatment response.",
          "exampleRu": "Команда изучала возможный маркер ответа на лечение.",
          "ipa": "/ˈtriːtmənt rɪˈspɒns/",
          "model": "response to + treatment",
          "audioSrc": "./audio/stat2-vocab-04.mp3"
        },
        {
          "id": "v5",
          "term": "bind",
          "translation": "связываться",
          "example": "The shortened protein still bound a partner.",
          "exampleRu": "Укороченный белок всё ещё связывал партнёра.",
          "ipa": "/baɪnd/",
          "model": "bind – bound – bound; bind to a molecule",
          "audioSrc": "./audio/stat2-vocab-05.mp3"
        },
        {
          "id": "v6",
          "term": "prospective validation",
          "translation": "проспективная проверка",
          "example": "The biomarker needs prospective validation.",
          "exampleRu": "Биомаркеру нужна проспективная проверка.",
          "ipa": "/prəˈspektɪv ˌvælɪˈdeɪʃən/",
          "model": "validation in a new cohort; научный регистр",
          "audioSrc": "./audio/stat2-vocab-06.mp3"
        }
      ],
      "grammar": {
        "title": "Passive voice: что исследовали и с чем связали",
        "explanation": "Пассив удобен, когда в центре внимания образец, процесс или результат. Исполнителя можно добавить с by, если он важен.",
        "pattern": "was / were + past participle",
        "contrast": "Researchers analysed the samples выделяет исследователей. The samples were analysed выделяет образцы. Оба варианта верны.",
        "mistake": "Не пропускайте was/were: The pattern was associated with survival, а не The pattern associated with survival.",
        "examples": [
          {
            "en": "RNA was analysed in twelve tumours.",
            "ru": "РНК проанализировали в двенадцати опухолях.",
            "audioSrc": "./audio/stat2-grammar-01.mp3"
          },
          {
            "en": "The pattern was associated with survival.",
            "ru": "Особенность была связана с выживаемостью.",
            "audioSrc": "./audio/stat2-grammar-02.mp3"
          },
          {
            "en": "The proposed biomarker was not validated prospectively.",
            "ru": "Предложенный биомаркер не был проверен проспективно.",
            "audioSrc": "./audio/stat2-grammar-03.mp3"
          }
        ]
      },
      "quiz": [
        {
          "id": "q1",
          "question": "Что означает intron retention?",
          "options": [
            "Удаление всего гена",
            "Сохранение интрона в РНК",
            "Удвоение числа пациентов"
          ],
          "answer": 1,
          "explanation": "Интрон остаётся в сообщении РНК после сплайсинга."
        },
        {
          "id": "q2",
          "question": "Выберите правильный пассив.",
          "options": [
            "The samples analysed.",
            "The samples was analysed.",
            "The samples were analysed."
          ],
          "answer": 2,
          "explanation": "Samples во множественном числе требует were; analysed является причастием."
        },
        {
          "id": "q3",
          "question": "Interfere with signalling означает:",
          "options": [
            "Мешать передаче сигнала",
            "Гарантировать передачу сигнала",
            "Измерять температуру"
          ],
          "answer": 0,
          "explanation": "Interfere with обозначает вмешательство, которое мешает процессу."
        },
        {
          "id": "q4",
          "question": "Что позволяет сказать анализ клинических данных?",
          "options": [
            "Изменение сплайсинга гарантирует лучший исход.",
            "Найдено соотношение, связанное с исходами, которое требует дальнейшей проверки.",
            "Создан одобренный тест для выбора лечения."
          ],
          "answer": 1,
          "explanation": "Ретроспективная связь является основанием для проверки биомаркера, но не доказывает причинность или клиническую готовность."
        }
      ],
      "practice": {
        "prompt": "Составьте два предложения: что было связано с выживаемостью и чего это не доказывает.",
        "sample": "The RNA pattern was associated with survival after immunotherapy. This does not prove that changing the pattern improves outcomes.",
        "hint": "Начните с was associated with. Во втором предложении используйте does not prove."
      },
      "evidence": {
        "type": "Клеточные механизмы и ретроспективные данные пациентов",
        "summary": "Удержание интронов меняет STAT2; соотношение вариантов связано с исходами после иммунотерапии.",
        "limitation": "Биомаркер не валидирован проспективно. Изменение сплайсинга не испытано здесь как лечение пациентов.",
        "analogy": "Редактирование инструкции поясняет сплайсинг. Из этой аналогии нельзя вывести клинический эффект."
      },
      "audio": {
        "src": "",
        "voice": "en-GB-RyanNeural",
        "text": "One gene can produce several versions of an RNA message. During splicing, cells remove sections called introns and join the remaining sections. Researchers studied RNA forms in twelve human lung tumours, then examined how retained introns affect STAT2.\n\nSTAT2 helps transmit interferon signals. When intron 6 or intron 12 remained in its RNA, cells made less full-length STAT2. Under particular conditions, a shortened form linked to intron 12 also interfered with signalling by binding a needed partner.\n\nIn existing clinical-trial data, the balance between the two retained introns was associated with survival after immunotherapy. The pattern may become a useful biomarker. However, the association does not prove that changing RNA splicing would improve a patient’s outcome.\n\nThink of splicing as editing an instruction sheet. Different edits can produce different parts, and an incomplete part may still hold a useful partner. This comparison explains the cell mechanism only. The proposed biomarker still needs prospective validation."
      },
      "analysis": {
        "headline": "Знать общий уровень экспрессии гена недостаточно: разные изоформы могут не просто терять функцию, но активно подавлять сигнал.",
        "whyItMatters": "Одного названия гена бывает недостаточно: разные варианты его РНК могут давать разные белки и эффекты. При переходе от клеточного механизма к прогнозу лечения нужны отдельные доказательства.",
        "design": "Long-read RNA-seq 12 первичных аденокарцином лёгкого выявил 149 673 полноразмерные изоформы, более половины ранее не аннотированы. Затем авторы исследовали STAT2-ri6 и STAT2-ri12 в клеточных моделях и связали показатели удержания интронов с исходами в ранее проведённых испытаниях.",
        "findings": [
          "Удержание любого из двух интронов уменьшало количество полноразмерного STAT2. Изоформа с интроном 12 при соответствующих условиях распада РНК подавляла интерфероновый сигнал доминантно-негативно, а изоформа с интроном 6 была функционально инертной.",
          "Ретроспективный анализ OAK включал 503 образца: 255 в группе атезолизумаба и 248 в группе доцетаксела. Биомаркер PSIri12−ri6: разность показателей удержания двух интронов, не просто уровень STAT2.",
          "В группе атезолизумаба при высоком показателе (порог ≥5%, n = 43) медиана общей выживаемости составила 24,2 месяца против 12,1 месяца при низком (n = 212), log-rank p = 0,0026.",
          "На рис. 5D сравнение высокобиомаркерной подгруппы атезолизумаба с референсной группой доцетаксела: HR смерти 0,49, 95% ДИ 0,31–0,76; p = 0,001. Это не рандомизированное испытание стратегии назначения по биомаркеру.",
          "Связь с выживаемостью после атезолизумаба воспроизведена в IMvigor210 при уротелиальном раке, с отдельно оптимизированным порогом."
        ],
        "limit": "Биомаркерный анализ ретроспективен; пороги оптимизированы по данным, поэтому нужна проспективная валидация и заранее заданный порог. Механизм в первичных опухолях не полностью подтверждён: изоформы белка не измеряли напрямую из-за отсутствия специфических антител. Нет сопоставимых long-read данных нормальной лёгочной ткани для утверждения, что все найденные изоформы специфичны для рака. Отсутствие статистически значимого преимущества в низкобиомаркерной группе не доказывает нулевой эффект у каждого такого пациента. Сравнение прогностического сигнала с TMB не устанавливает универсальное превосходство нового теста.",
        "takeaway": "Ассоциация может предложить биомаркер, но не доказывает, что изменение этого маркера улучшит исход. Нужна проверка на новых пациентах по заранее заданным правилам.",
        "sourceNote": "Пересказ предоставленного PDF. Печатные 397; полный текст eaea7156, 1–14; PDF 43–57. Внешние дополнения по DOI отдельно не проверялись."
      }
    },
    {
      "id": "crow",
      "title": "Быстрое решение маленького мозга",
      "subtitle": "Вороны · Скорость без громких обобщений",
      "goal": "Описать сравнение и правильно назвать измеряемое время.",
      "minutes": 15,
      "level": "B1–B2",
      "sourcePages": "с. 445–449; комментарий 385 · PDF 161–165; 29",
      "source": {
        "title": "Ultrarapid decision-making in an avian brain",
        "authors": "Philipp Schmidbauer and Andreas Nieder",
        "url": "https://doi.org/10.1126/science.aed6459",
        "printed": "с. 445–449; комментарий 385",
        "pdf": "161–165; 29"
      },
      "reading": [
        {
          "en": "Two trained carrion crows watched moving dots on a screen. They indicated the direction by choosing a target with their beaks. Researchers measured the time from the start of the visual stimulus to the start of the birds’ head movement.",
          "ru": "Две обученные чёрные вороны смотрели на движущиеся точки на экране. Они указывали направление, выбирая цель клювом. Исследователи измеряли время от появления зрительного стимула до начала движения головы птицы.",
          "audioSrc": "./audio/crow-reading-01.mp3"
        },
        {
          "en": "The birds responded in about 235 milliseconds on this measure. Their overall accuracy was about 75% and 73%. Accuracy was much higher when the direction was clearer. The overall response time and the best accuracy should not be combined into one result without describing the conditions.",
          "ru": "По этому показателю птицы отвечали примерно за 235 миллисекунд. Общая точность составила около 75% и 73%. Когда направление было яснее, точность была существенно выше. Общее время ответа и наибольшую точность нельзя соединять в один результат без указания условий.",
          "audioSrc": "./audio/crow-reading-02.mp3"
        },
        {
          "en": "Their responses were faster than those reported for monkeys and humans in earlier, similar tasks. These groups were not tested together in one experiment. Recordings from the birds’ brains supported the idea that neurons accumulated information before a choice.",
          "ru": "Ответы птиц были быстрее, чем показатели обезьян и людей, описанные ранее в похожих задачах. Эти группы не проверяли вместе в одном эксперименте. Записи активности мозга птиц поддержали идею накопления информации нейронами перед выбором.",
          "audioSrc": "./audio/crow-reading-03.mp3"
        },
        {
          "en": "Imagine collecting clues before choosing a direction. This analogy describes one model of decision-making, not a literal container in the brain. The experiment shows a specific ability in two birds. It does not rank the general intelligence of species.",
          "ru": "Представьте сбор подсказок перед выбором направления. Аналогия описывает одну модель принятия решения, а не буквальную ёмкость в мозге. Эксперимент показывает конкретную способность двух птиц. Он не ранжирует общий интеллект разных видов.",
          "audioSrc": "./audio/crow-reading-04.mp3"
        }
      ],
      "vocabulary": [
        {
          "id": "v1",
          "term": "make a decision",
          "translation": "принять решение",
          "example": "The birds made a decision before moving their heads.",
          "exampleRu": "Птицы принимали решение перед движением головы.",
          "ipa": "/meɪk ə dɪˈsɪʒən/",
          "model": "make a decision, не do a decision",
          "audioSrc": "./audio/crow-vocab-01.mp3"
        },
        {
          "id": "v2",
          "term": "response time",
          "translation": "время ответа",
          "example": "Response time depended on how clearly the dots moved.",
          "exampleRu": "Время ответа зависело от ясности движения точек.",
          "ipa": "/rɪˈspɒns taɪm/",
          "model": "Define the start and end of the measured interval",
          "audioSrc": "./audio/crow-vocab-02.mp3"
        },
        {
          "id": "v3",
          "term": "compared with",
          "translation": "по сравнению с",
          "example": "The birds responded quickly compared with earlier reports.",
          "exampleRu": "По сравнению с прежними сообщениями птицы отвечали быстро.",
          "ipa": "/kəmˈpeəd wɪð/",
          "model": "compared with / compared to",
          "audioSrc": "./audio/crow-vocab-03.mp3"
        },
        {
          "id": "v4",
          "term": "accumulate",
          "translation": "накапливать",
          "example": "The model describes how information accumulates.",
          "exampleRu": "Модель описывает накопление информации.",
          "ipa": "/əˈkjuːmjəleɪt/",
          "model": "accumulate information / evidence",
          "audioSrc": "./audio/crow-vocab-04.mp3"
        },
        {
          "id": "v5",
          "term": "similar",
          "translation": "похожий",
          "example": "Earlier studies used similar tasks.",
          "exampleRu": "В предыдущих исследованиях использовали похожие задачи.",
          "ipa": "/ˈsɪmɪlə/",
          "model": "similar to, не similar with",
          "audioSrc": "./audio/crow-vocab-05.mp3"
        },
        {
          "id": "v6",
          "term": "overall",
          "translation": "в целом; общий",
          "example": "Overall accuracy differed from accuracy on the easiest trials.",
          "exampleRu": "Общая точность отличалась от точности в самых простых пробах.",
          "ipa": "/ˌəʊvərˈɔːl/",
          "model": "overall accuracy / overall result",
          "audioSrc": "./audio/crow-vocab-06.mp3"
        }
      ],
      "grammar": {
        "title": "Сравнения: faster than и as fast as",
        "explanation": "Используйте сравнительную степень для различия и as...as для отношения. Всегда называйте, какой показатель сравнивается и в каких условиях.",
        "pattern": "faster than; as fast as; twice as fast as",
        "contrast": "Faster than сообщает направление различия. Twice as fast as задаёт конкретное отношение скоростей; не добавляйте его без опоры на данные.",
        "mistake": "Не соединяйте две модели: faster than, а не more faster than.",
        "examples": [
          {
            "en": "The birds responded faster than expected.",
            "ru": "Птицы отвечали быстрее, чем ожидалось.",
            "audioSrc": "./audio/crow-grammar-01.mp3"
          },
          {
            "en": "Responses were more accurate on easy trials than on difficult trials.",
            "ru": "В простых пробах точность была выше, чем в сложных.",
            "audioSrc": "./audio/crow-grammar-02.mp3"
          },
          {
            "en": "A similar task is not exactly the same task.",
            "ru": "Похожая задача не является в точности той же задачей.",
            "audioSrc": "./audio/crow-grammar-03.mp3"
          }
        ]
      },
      "quiz": [
        {
          "id": "q1",
          "question": "Что означает около 235 мс в статье?",
          "options": [
            "Время от стимула до начала движения головы",
            "Время до завершения удара клювом",
            "Длительность всего обучения"
          ],
          "answer": 0,
          "explanation": "Важно точно назвать начало и конец измеренного интервала."
        },
        {
          "id": "q2",
          "question": "Выберите правильную форму.",
          "options": [
            "more faster than",
            "faster than",
            "fastest than"
          ],
          "answer": 1,
          "explanation": "У faster уже есть сравнительная форма; more добавлять не нужно."
        },
        {
          "id": "q3",
          "question": "Как перевести similar to?",
          "options": [
            "Полностью одинаковый с",
            "Более важный, чем",
            "Похожий на"
          ],
          "answer": 2,
          "explanation": "Similar обозначает сходство, не полную идентичность."
        },
        {
          "id": "q4",
          "question": "Какой вывод выходит за пределы работы?",
          "options": [
            "Две обученные вороны быстро решали зрительную задачу.",
            "Сравнение с приматами использовало прежние похожие исследования.",
            "Вороны интеллектуально превосходят людей во всех задачах."
          ],
          "answer": 2,
          "explanation": "Скорость одной задачи у двух птиц не является мерой общего интеллекта всех представителей вида."
        }
      ],
      "practice": {
        "prompt": "Дайте двухфразовый английский пересказ. Назовите измеряемый ответ и одно ограничение.",
        "sample": "The crows started moving their heads about 235 milliseconds after the stimulus. The study involved only two birds and one type of task.",
        "hint": "Полезная опора: started moving... after...; involved only..."
      },
      "evidence": {
        "type": "Поведенческий и нейрофизиологический эксперимент",
        "summary": "Две вороны быстро определяли направление движения точек; измеряли начало движения головы.",
        "limitation": "Сравнение с приматами основано на прежних похожих задачах. Общий интеллект не оценивался.",
        "analogy": "Сбор подсказок объясняет накопление информации в модели, а не буквальное устройство мозга."
      },
      "audio": {
        "src": "",
        "voice": "en-GB-RyanNeural",
        "text": "Two trained carrion crows watched moving dots on a screen. They indicated the direction by choosing a target with their beaks. Researchers measured the time from the start of the visual stimulus to the start of the birds’ head movement.\n\nThe birds responded in about 235 milliseconds on this measure. Their overall accuracy was about 75% and 73%. Accuracy was much higher when the direction was clearer. The overall response time and the best accuracy should not be combined into one result without describing the conditions.\n\nTheir responses were faster than those reported for monkeys and humans in earlier, similar tasks. These groups were not tested together in one experiment. Recordings from the birds’ brains supported the idea that neurons accumulated information before a choice.\n\nImagine collecting clues before choosing a direction. This analogy describes one model of decision-making, not a literal container in the brain. The experiment shows a specific ability in two birds. It does not rank the general intelligence of species."
      },
      "analysis": {
        "headline": "Похожий принцип накопления сенсорных данных может работать в существенно различающихся архитектурах мозга.",
        "whyItMatters": "Сравнение скорости имеет смысл только после определения задачи, условий и начала и конца измеренного интервала. Быстрый ответ в одной задаче не является рейтингом интеллекта.",
        "design": "Две чёрные вороны различали направление движения точек при разной согласованности движения. Ответ фиксировали по началу движения головы. Во время задачи регистрировали 248 нейронов nidopallium caudolaterale (NCL), области с функциями, аналогичными префронтальной коре приматов.",
        "findings": [
          "Среднее по сессиям значение медианного времени реакции было около 235 мс у обеих птиц. Общая точность: 75,0 ± 0,4% и 73,4 ± 0,3%; при наиболее ясном сигнале она превышала 99%.",
          "58 из 248 нейронов (23,4%) были избирательны к направлению. Популяционная активность разделяла будущие правильные ответы примерно через 67 мс после появления стимула, за 171 мс до движения.",
          "Активность отражала выбранное направление и при случайном движении точек, и в ошибочных пробах. Это помогает отличить кодирование решения от простого отражения стимула.",
          "Модель накопления свидетельств с логарифмической связью между силой сигнала и скоростью накопления лучше описывала поведение, чем стандартная линейная версия."
        ],
        "limit": "Биологическая выборка: две птицы; множество сессий, проб и нейронов не превращает её в большую выборку животных. Сравнение с приматами и людьми основано на предыдущих исследованиях сходных задач, а не на едином новом межвидовом эксперименте. Нейронные корреляты не доказывают причинную необходимость NCL. Различия в анатомии и плотности нейронов: возможные объяснения скорости, а не установленный единственный механизм. Результат относится к зрительно-моторной задаче, а не к общему интеллекту или всем видам человеческого решения.",
        "takeaway": "Сохраняйте в пересказе вид задачи, двух птиц и определение времени ответа. Формулировка «вороны умнее людей» не следует из эксперимента.",
        "sourceNote": "Пересказ предоставленного PDF. Печатные 445–449; комментарий 385; PDF 161–165; комментарий 29. Внешние дополнения по DOI отдельно не проверялись."
      }
    },
    {
      "id": "glacier",
      "title": "Ледник как архив климата",
      "subtitle": "Barnes Ice Cap · Наблюдение и интерпретация",
      "goal": "Восстановить порядок событий и отделить измерение от гипотезы.",
      "minutes": 15,
      "level": "B1–B2",
      "sourcePages": "с. 455–459; комментарий 381–382 · PDF 171–175; 25–26",
      "source": {
        "title": "Late Holocene reexpansion of the Laurentide Ice Sheet",
        "authors": "Nicolás E. Young et al.",
        "url": "https://doi.org/10.1126/science.aed3379",
        "printed": "с. 455–459; комментарий 381–382",
        "pdf": "171–175; 25–26"
      },
      "reading": [
        {
          "en": "The Barnes Ice Cap in Canada is the last surviving remnant of the Laurentide Ice Sheet. Researchers used exposed rocks and plants preserved beneath the ice to reconstruct its history. The samples help show when ice covered a place and when it retreated.",
          "ru": "Ледниковая шапка Барнс в Канаде является последним сохранившимся остатком Лаврентийского ледникового щита. Учёные использовали обнажившиеся породы и растения, сохранившиеся подо льдом, чтобы восстановить её историю. Образцы помогают определить, когда лёд накрывал участок и когда отступал.",
          "audioSrc": "./audio/glacier-reading-01.mp3"
        },
        {
          "en": "The reconstruction suggests that renewed growth began about two thousand years ago. The ice cap had grown for a long period before widespread retreat began around 1960. Between 1960 and 2022, its edge moved back by roughly 200 to 800 metres.",
          "ru": "Реконструкция указывает, что новый рост начался примерно две тысячи лет назад. Ледниковая шапка росла длительное время, прежде чем около 1960 года началось отступание по широкому фронту. С 1960 по 2022 год край отступил примерно на 200–800 метров.",
          "audioSrc": "./audio/glacier-reading-02.mp3"
        },
        {
          "en": "The authors interpret the earlier growth as the beginning of a new glaciation, interrupted by human-caused warming. This interpretation depends on how the beginning of glaciation is defined. The measurements do not provide an exact date for a future global ice-age maximum.",
          "ru": "Авторы интерпретируют прежний рост как начало нового оледенения, прерванное потеплением, вызванным деятельностью человека. Такая интерпретация зависит от определения начала оледенения. Измерения не дают точную дату будущего глобального ледникового максимума.",
          "audioSrc": "./audio/glacier-reading-03.mp3"
        },
        {
          "en": "Imagine an archive with dated bookmarks appearing as the ice retreats. This analogy helps explain how different traces preserve history. But some pages remain hidden beneath the ice, and scientists must combine several methods to reconstruct the earlier stages.",
          "ru": "Представьте архив с датированными закладками, которые появляются по мере отступания льда. Аналогия помогает понять, как разные следы сохраняют историю. Но часть страниц остаётся скрытой подо льдом, поэтому ранние этапы учёные восстанавливают несколькими методами.",
          "audioSrc": "./audio/glacier-reading-04.mp3"
        }
      ],
      "vocabulary": [
        {
          "id": "v1",
          "term": "retreat",
          "translation": "отступать; отступание",
          "example": "The ice began to retreat around 1960.",
          "exampleRu": "Лёд начал отступать около 1960 года.",
          "ipa": "/rɪˈtriːt/",
          "model": "glacial retreat; retreat from a position",
          "audioSrc": "./audio/glacier-vocab-01.mp3"
        },
        {
          "id": "v2",
          "term": "preserve",
          "translation": "сохранять",
          "example": "The ice preserved plants beneath its surface.",
          "exampleRu": "Лёд сохранил растения под своей поверхностью.",
          "ipa": "/prɪˈzɜːv/",
          "model": "preserve evidence / preserve a sample",
          "audioSrc": "./audio/glacier-vocab-02.mp3"
        },
        {
          "id": "v3",
          "term": "beneath",
          "translation": "под",
          "example": "Some evidence remains beneath the ice.",
          "exampleRu": "Часть свидетельств остаётся подо льдом.",
          "ipa": "/bɪˈniːθ/",
          "model": "beneath + noun; нейтральный письменный стиль",
          "audioSrc": "./audio/glacier-vocab-03.mp3"
        },
        {
          "id": "v4",
          "term": "reconstruct",
          "translation": "восстанавливать по данным",
          "example": "Scientists reconstructed the history of the ice cap.",
          "exampleRu": "Учёные восстановили историю ледниковой шапки.",
          "ipa": "/ˌriːkənˈstrʌkt/",
          "model": "reconstruct a history / a sequence",
          "audioSrc": "./audio/glacier-vocab-04.mp3"
        },
        {
          "id": "v5",
          "term": "approximately",
          "translation": "приблизительно",
          "example": "Growth resumed approximately two thousand years ago.",
          "exampleRu": "Рост возобновился приблизительно две тысячи лет назад.",
          "ipa": "/əˈprɒksɪmətli/",
          "model": "approximately + number; also about / roughly",
          "audioSrc": "./audio/glacier-vocab-05.mp3"
        },
        {
          "id": "v6",
          "term": "interpret as",
          "translation": "интерпретировать как",
          "example": "The authors interpreted the growth as an early stage of glaciation.",
          "exampleRu": "Авторы интерпретировали рост как ранний этап оледенения.",
          "ipa": "/ɪnˈtɜːprɪt æz/",
          "model": "interpret A as B; отделять от прямого измерения",
          "audioSrc": "./audio/glacier-vocab-06.mp3"
        }
      ],
      "grammar": {
        "title": "Past Perfect: более ранний этап прошлого",
        "explanation": "Past Perfect помогает показать, что действие уже произошло до другого момента в прошлом. Он особенно полезен при восстановлении истории по следам.",
        "pattern": "had + past participle, before + Past Simple",
        "contrast": "Past Simple перечисляет события. Past Perfect подчёркивает, какое из них предшествовало другому; он не обязателен для каждого раннего события.",
        "mistake": "После had нужен grown, а не grew: had grown. Не используйте had для всех глаголов в рассказе.",
        "examples": [
          {
            "en": "The ice cap had grown before it began to retreat.",
            "ru": "Ледниковая шапка росла до того, как начала отступать.",
            "audioSrc": "./audio/glacier-grammar-01.mp3"
          },
          {
            "en": "The plants had died before the researchers collected them.",
            "ru": "Растения погибли до того, как исследователи их собрали.",
            "audioSrc": "./audio/glacier-grammar-02.mp3"
          },
          {
            "en": "The ice had preserved evidence that later became visible.",
            "ru": "Лёд сохранил свидетельства, которые стали видны позднее.",
            "audioSrc": "./audio/glacier-grammar-03.mp3"
          }
        ]
      },
      "quiz": [
        {
          "id": "q1",
          "question": "Какие источники использовали для реконструкции?",
          "options": [
            "Только современные фотографии",
            "Только компьютерную симуляцию",
            "Породы и растения, сохранившиеся подо льдом, среди других данных"
          ],
          "answer": 2,
          "explanation": "Датирование пород и растений помогает восстановить историю края ледника."
        },
        {
          "id": "q2",
          "question": "Выберите правильную форму Past Perfect.",
          "options": [
            "had grown",
            "had grew",
            "has grew"
          ],
          "answer": 0,
          "explanation": "После had нужна третья форма: grow – grew – grown."
        },
        {
          "id": "q3",
          "question": "Approximately означает:",
          "options": [
            "Точно до последнего года",
            "Приблизительно",
            "Никогда"
          ],
          "answer": 1,
          "explanation": "Слово сохраняет неопределённость оценки."
        },
        {
          "id": "q4",
          "question": "Что является интерпретацией авторов?",
          "options": [
            "Край ледника отступал после середины XX века.",
            "Существуют сохранившиеся подо льдом растения.",
            "Прежний рост был началом следующего оледенения."
          ],
          "answer": 2,
          "explanation": "Авторы трактуют рост как glacial inception. Это шире самого измерения положения края и зависит от определения начала оледенения."
        }
      ],
      "practice": {
        "prompt": "Опишите два этапа истории льда одним предложением с had, затем добавьте границу вывода.",
        "sample": "The ice cap had grown before it began to retreat. This does not give an exact date for the next global ice age.",
        "hint": "Модель: had grown before it began..."
      },
      "evidence": {
        "type": "Палеоклиматическая реконструкция",
        "summary": "Датирование пород и растений связывает прошлый рост с современным отступанием.",
        "limitation": "Региональная история не даёт точного прогноза будущего глобального оледенения.",
        "analogy": "Архив с закладками объясняет датированные следы. Часть архива остаётся подо льдом, и реконструкция требует нескольких методов."
      },
      "audio": {
        "src": "",
        "voice": "en-GB-RyanNeural",
        "text": "The Barnes Ice Cap in Canada is the last surviving remnant of the Laurentide Ice Sheet. Researchers used exposed rocks and plants preserved beneath the ice to reconstruct its history. The samples help show when ice covered a place and when it retreated.\n\nThe reconstruction suggests that renewed growth began about two thousand years ago. The ice cap had grown for a long period before widespread retreat began around 1960. Between 1960 and 2022, its edge moved back by roughly 200 to 800 metres.\n\nThe authors interpret the earlier growth as the beginning of a new glaciation, interrupted by human-caused warming. This interpretation depends on how the beginning of glaciation is defined. The measurements do not provide an exact date for a future global ice-age maximum.\n\nImagine an archive with dated bookmarks appearing as the ice retreats. This analogy helps explain how different traces preserve history. But some pages remain hidden beneath the ice, and scientists must combine several methods to reconstruct the earlier stages."
      },
      "analysis": {
        "headline": "Ледниковая шапка росла в позднем голоцене, а в XX веке перешла к отступанию.",
        "whyItMatters": "История края ледника позволяет связать местные следы прошлого с вопросом о больших климатических циклах. Но измерение и широкая климатическая интерпретация имеют разный масштаб.",
        "design": "Авторы изучали Barnes Ice Cap на Баффиновой Земле. Использовали экспозиционное датирование пород по бериллию-10, радиоуглеродные даты растений, исторические наблюдения и региональные данные. Растения ограничивают время, когда наступавший лёд накрыл участок; породы отражают историю экспозиции.",
        "findings": [
          "Около 3,56 ± 0,24 тыс. лет до 1950 года край отступил внутрь границы 2022 года. Это не точная дата окончательного минимума: минимальную конфигурацию авторы помещают примерно между 3000 и 2000 лет назад.",
          "Новый рост реконструируется примерно с 2000 лет назад. Максимум по широкому фронту сохранялся приблизительно до 1960 года; реакция крупной ледниковой шапки запаздывала относительно малых ледников.",
          "С 1960 по 2022 год край отступил примерно на 200–800 м. Авторы связывают современное отступание прежде всего с летним потеплением.",
          "Прежний рост они интерпретируют как начальный этап следующего оледенения, прерванный антропогенным потеплением. Здесь началом считают возобновление роста, тогда как другие определения требуют гораздо большего накопления льда."
        ],
        "limit": "Не вся ранняя история доступна прямому наблюдению: часть материалов остаётся подо льдом, а унаследованные изотопы могут осложнять датировки пород. Региональная реконструкция и интерпретация начала оледенения не дают точной даты будущего глобального ледникового максимума.",
        "takeaway": "Сначала спросите, что датировали и где. Затем отдельно оцените вывод авторов о большом климатическом цикле.",
        "sourceNote": "Young et al., с. 455–459, PDF 171–175; Perspective с. 381–382, PDF 25–26. Пересказ предоставленного PDF."
      }
    },
    {
      "id": "bootloops",
      "title": "Когда ИИ переносит идею",
      "subtitle": "BootLoops · Как читать научную новость",
      "goal": "Отличать возможность от уже достигнутого результата.",
      "minutes": 15,
      "level": "B1–B2",
      "sourcePages": "с. 366–367 · PDF 10–11",
      "source": {
        "title": "Across fields, AI finds solutions hiding in plain sight",
        "authors": "Celina Zhao",
        "url": "https://www.science.org/toc/science/394/6822",
        "printed": "с. 366–367",
        "pdf": "10–11"
      },
      "reading": [
        {
          "en": "A method developed in one field may help solve a problem in another. A Science news story describes BootLoops, a set of AI tools designed to find such connections. The work focused on problems that share a similar mathematical structure.",
          "ru": "Метод из одной области может помочь решить задачу в другой. Новость Science описывает BootLoops, набор ИИ-инструментов для поиска таких связей. Работа была сосредоточена на задачах с похожей математической структурой.",
          "audioSrc": "./audio/bootloops-reading-01.mp3"
        },
        {
          "en": "The project produced thirty-six preprints across twenty-two disciplines in three months. Human researchers contributed substantially. The system could find tasks that were possible to compute, but it did not always recognise which questions mattered to specialists.",
          "ru": "За три месяца проект подготовил тридцать шесть препринтов по двадцати двум дисциплинам. Исследователи-люди внесли существенный вклад. Система могла находить вычислимые задачи, но не всегда распознавала, какие вопросы важны для специалистов.",
          "audioSrc": "./audio/bootloops-reading-02.mp3"
        },
        {
          "en": "A preprint is a research report shared before formal peer review. Some results in this project were held back because they needed more checking. The number of reports therefore should not be read as the number of confirmed discoveries.",
          "ru": "Препринт представляет собой исследовательский текст, размещённый до формального рецензирования. Часть результатов проекта не публиковали, поскольку им требовалась дополнительная проверка. Поэтому число текстов не следует воспринимать как число подтверждённых открытий.",
          "audioSrc": "./audio/bootloops-reading-03.mp3"
        },
        {
          "en": "Think of a mathematical method as a tool that can fit jobs in different workshops. The fit is useful, but the job still needs to be worth doing. When reading news, keep could save separate from saved: a predicted benefit is not an observed result.",
          "ru": "Представьте математический метод как инструмент, который подходит для задач в разных мастерских. Такое соответствие полезно, но сама задача всё ещё должна заслуживать решения. Читая новости, различайте could save и saved: прогнозируемая польза не является наблюдаемым результатом.",
          "audioSrc": "./audio/bootloops-reading-04.mp3"
        }
      ],
      "vocabulary": [
        {
          "id": "v1",
          "term": "across fields",
          "translation": "в разных областях",
          "example": "The team looked for connections across fields.",
          "exampleRu": "Команда искала связи между областями.",
          "ipa": "/əˈkrɒs fiːldz/",
          "model": "across disciplines / across fields",
          "audioSrc": "./audio/bootloops-vocab-01.mp3"
        },
        {
          "id": "v2",
          "term": "in plain sight",
          "translation": "на виду",
          "example": "A useful connection may be hiding in plain sight.",
          "exampleRu": "Полезная связь может скрываться у всех на виду.",
          "ipa": "/ɪn pleɪn saɪt/",
          "model": "hide in plain sight; образное выражение",
          "audioSrc": "./audio/bootloops-vocab-02.mp3"
        },
        {
          "id": "v3",
          "term": "peer review",
          "translation": "рецензирование коллегами-экспертами",
          "example": "A preprint has not yet completed formal peer review.",
          "exampleRu": "Препринт ещё не прошёл формальное рецензирование.",
          "ipa": "/pɪə rɪˈvjuː/",
          "model": "undergo peer review; peer-reviewed article",
          "audioSrc": "./audio/bootloops-vocab-03.mp3"
        },
        {
          "id": "v4",
          "term": "hold back",
          "translation": "задерживать, пока не выпускать",
          "example": "The researchers held back some results.",
          "exampleRu": "Исследователи пока не обнародовали часть результатов.",
          "ipa": "/həʊld bæk/",
          "model": "hold – held – held; hold something back",
          "audioSrc": "./audio/bootloops-vocab-04.mp3"
        },
        {
          "id": "v5",
          "term": "worth doing",
          "translation": "стоящий того, чтобы сделать",
          "example": "A task must be worth doing.",
          "exampleRu": "Задача должна заслуживать выполнения.",
          "ipa": "/wɜːθ ˈduːɪŋ/",
          "model": "worth + -ing, не worth to do",
          "audioSrc": "./audio/bootloops-vocab-05.mp3"
        },
        {
          "id": "v6",
          "term": "find out",
          "translation": "выяснить",
          "example": "We need to find out whether the result is reliable.",
          "exampleRu": "Нужно выяснить, надёжен ли результат.",
          "ipa": "/faɪnd aʊt/",
          "model": "find out whether / how / why",
          "audioSrc": "./audio/bootloops-vocab-06.mp3"
        }
      ],
      "grammar": {
        "title": "Could do и did: возможность и факт",
        "explanation": "Could + глагол может выражать возможность. Past Simple описывает произошедшее действие. Для новостей это помогает не превращать обещание в результат.",
        "pattern": "could + base verb; Past Simple for a completed event",
        "contrast": "The method could save time: возможная экономия. The method saved time: экономия уже наблюдалась в описанных условиях.",
        "mistake": "Could не означает, что событие точно произошло. Не пересказывайте could save как saved.",
        "examples": [
          {
            "en": "The method could help another field.",
            "ru": "Метод мог бы помочь другой области.",
            "audioSrc": "./audio/bootloops-grammar-01.mp3"
          },
          {
            "en": "The team produced thirty-six preprints.",
            "ru": "Команда подготовила тридцать шесть препринтов.",
            "audioSrc": "./audio/bootloops-grammar-02.mp3"
          },
          {
            "en": "Some findings needed further checks.",
            "ru": "Некоторые результаты требовали дальнейшей проверки.",
            "audioSrc": "./audio/bootloops-grammar-03.mp3"
          }
        ]
      },
      "quiz": [
        {
          "id": "q1",
          "question": "Что подготовил проект за три месяца?",
          "options": [
            "36 подтверждённых клинических открытий",
            "36 препринтов по 22 дисциплинам",
            "22 новых лекарства"
          ],
          "answer": 1,
          "explanation": "Новость сообщает о препринтах. Их число не является числом подтверждённых открытий."
        },
        {
          "id": "q2",
          "question": "Что передаёт The method could save time?",
          "options": [
            "Возможную экономию времени",
            "Уже доказанную экономию времени",
            "Запрет экономить время"
          ],
          "answer": 0,
          "explanation": "Could обозначает возможность. Для уже произошедшего результата нужно saved с соответствующей опорой на данные."
        },
        {
          "id": "q3",
          "question": "Выберите правильную модель.",
          "options": [
            "worth to doing",
            "worth to do",
            "worth doing"
          ],
          "answer": 2,
          "explanation": "После worth используется -ing форма."
        },
        {
          "id": "q4",
          "question": "Какое ограничение описано в новости?",
          "options": [
            "Человек совсем не участвовал.",
            "Система не всегда понимала научную значимость задачи.",
            "Все результаты уже прошли одинаковую независимую проверку."
          ],
          "answer": 1,
          "explanation": "Вычислимость задачи не гарантирует её научной ценности. Существенное участие людей и проверка сохранялись."
        }
      ],
      "practice": {
        "prompt": "Напишите одну осторожную фразу о пользе метода и одну о необходимости проверки.",
        "sample": "The method could help researchers connect ideas across fields. Its findings still need careful checking.",
        "hint": "Используйте could help и still need. Не называйте все препринты открытиями."
      },
      "evidence": {
        "type": "Новость о серии препринтов",
        "summary": "BootLoops переносил математические подходы между дисциплинами при существенном участии людей.",
        "limitation": "Это не единое рецензированное доказательство всех результатов. Вычислимость не равна научной значимости.",
        "analogy": "Инструмент из одной мастерской может подойти другой, но это не определяет, стоит ли выполнять задачу."
      },
      "audio": {
        "src": "",
        "voice": "en-GB-RyanNeural",
        "text": "A method developed in one field may help solve a problem in another. A Science news story describes BootLoops, a set of AI tools designed to find such connections. The work focused on problems that share a similar mathematical structure.\n\nThe project produced thirty-six preprints across twenty-two disciplines in three months. Human researchers contributed substantially. The system could find tasks that were possible to compute, but it did not always recognise which questions mattered to specialists.\n\nA preprint is a research report shared before formal peer review. Some results in this project were held back because they needed more checking. The number of reports therefore should not be read as the number of confirmed discoveries.\n\nThink of a mathematical method as a tool that can fit jobs in different workshops. The fit is useful, but the job still needs to be worth doing. When reading news, keep could save separate from saved: a predicted benefit is not an observed result."
      },
      "analysis": {
        "headline": "ИИ помогает переносить методы между областями, но научную ценность результата всё ещё нужно проверять.",
        "whyItMatters": "Научные новости часто смешивают выполненную работу, обещанную пользу и выводы из ещё не рецензированных текстов. Эта история даёт удобный материал для их разделения.",
        "design": "Журналистский материал Celina Zhao описывает BootLoops и серию препринтов. Инструменты ищут задачи с похожей математической структурой в разных дисциплинах. Это новость о проекте, а не единое клиническое или лабораторное испытание.",
        "findings": [
          "Проект подготовил 36 препринтов по 22 дисциплинам за три месяца. Исследователи-люди существенно участвовали в выборе и развитии задач.",
          "Система находила вычислимые вопросы, но не всегда определяла, какие из них важны специалистам. Выбор значимой задачи оказался отдельной трудностью.",
          "Некоторые результаты удержали от публикации из-за недостаточной проверки. Отдельные интерпретации вызвали критику.",
          "В числе примеров обсуждаются эволюционные деревья, категории страховых планов и каталог просодии языков. Прогнозируемая экономия при возможном внедрении не является уже наблюдаемой экономией."
        ],
        "limit": "36 препринтов нельзя назвать 36 подтверждёнными открытиями. Статус материалов и прогнозов относится к моменту новости; первоисточники препринтов вне PDF отдельно не проверялись.",
        "takeaway": "В каждой новости ищите три разных слоя: что сделали, что получили и что только могло бы произойти при дальнейшем внедрении.",
        "sourceNote": "Новость Science, с. 366–367, PDF 10–11. Ссылка ведёт на оглавление номера; отдельный DOI новости в предоставленном тексте не указан."
      }
    }
  ],
  "briefs": [
    {
      "title": "Безопасность всей системы человек–ИИ",
      "kind": "Editorial",
      "summary": "Предлагается пересматривать доверие, доступ к инструментам и самостоятельность ИИ по мере появления данных о надёжности. Это концепция управления, не клиническое испытание.",
      "caveat": "Аргументированное мнение автора, не проверка клинического эффекта.",
      "sourcePages": "с. 363 · PDF 7",
      "url": "https://doi.org/10.1126/science.aen2722"
    },
    {
      "title": "Ebola: проверка гипотезы о перекрёстной защите",
      "kind": "News",
      "summary": "По состоянию новости испытание Tumaini ожидало последних разрешений. Планировалось сравнить последовательности Ervebo и тифозной вакцины с индивидуальной рандомизацией в кольцах контактов. Эффективность против Bundibugyo ещё не доказана.",
      "caveat": "Новость отражает состояние на момент выпуска; внешняя актуальность отдельно не проверялась.",
      "sourcePages": "с. 364–365 · PDF 8–9",
      "url": ""
    },
    {
      "title": "История штамма и появление Botox",
      "kind": "News",
      "summary": "Геномный анализ связывает особенности Hall A с лабораторной адаптацией и изменениями репарации ДНК. Это историко-эволюционная работа, не новые показания к ботулинотерапии.",
      "caveat": "Новость отражает состояние на момент выпуска; внешняя актуальность отдельно не проверялась.",
      "sourcePages": "с. 367–368 · PDF 11–12",
      "url": ""
    },
    {
      "title": "Simons Observatory и ранняя Вселенная",
      "kind": "News",
      "summary": "Репортаж о наблюдении реликтового излучения, скоплений галактик и поиске сигналов космической инфляции. Поиск не равен обнаружению.",
      "caveat": "Новость отражает состояние на момент выпуска; внешняя актуальность отдельно не проверялась.",
      "sourcePages": "с. 368–370 · PDF 12–14",
      "url": ""
    },
    {
      "title": "Последствия разлива нефти спустя годы",
      "kind": "News",
      "summary": "13-летнее наблюдение указывает на сохраняющийся ущерб. Упомянутое снижение численности рыб на 64% отсчитано от 2011 года; докатастрофической исходной точки не было.",
      "caveat": "Новость отражает состояние на момент выпуска; внешняя актуальность отдельно не проверялась.",
      "sourcePages": "с. 370–371 · PDF 14–15",
      "url": ""
    },
    {
      "title": "Эпигенетика сосудов и моторный контроль",
      "kind": "Краткий обзор другой публикации, не полный первоисточник",
      "summary": "В краткой заметке PRMT5 эндотелиальных клеток мозга подавляет ANGPTL4. Дефицит PRMT5 у мышей связан с повышением ANGPTL4, усилением тормозного входа в мозжечок и прогрессирующим моторным дефицитом.",
      "caveat": "Это не исследование восстановления после инсульта. Полный первоисточник в данном PDF не приведён.",
      "sourcePages": "с. 394 · PDF 38",
      "url": "https://doi.org/10.1126/scisignal.aed6605"
    },
    {
      "title": "Городская зелень: важны форма и связность",
      "kind": "Краткий обзор GeoHealth",
      "summary": "В исследовании данных Аризоны 2016–2023 годов более чем 2000 кварталов с медицинскими данными и аэроснимками больший объём, сложная форма и связность зелёных зон ассоциировались с меньшей заболеваемостью, связанной с жарой.",
      "caveat": "Наблюдательная связь не гарантирует эффект любого отдельного озеленения; полный первоисточник отдельно не проверен.",
      "sourcePages": "с. 396 · PDF 40",
      "url": "https://doi.org/10.1029/2026GH001978"
    },
    {
      "title": "Некодирующая транскрипция управляет временем",
      "kind": "Первичная статья",
      "summary": "Живая визуализация эмбрионов Drosophila показала последовательную работу enhancer-associated и tether-associated ncRNA. Нарушение enhancer ncRNA приводило к преждевременной активации Scr.",
      "caveat": "Это механизм развития в модельном организме, а не готовый подход к лечению заболеваний человека.",
      "sourcePages": "с. 402–407 · PDF 118–123",
      "url": "https://doi.org/10.1126/science.aek5696"
    },
    {
      "title": "Море поднимается: убежища для видов",
      "kind": "Модельные прогнозы",
      "summary": "Моделирование охватывает 34 120 наземных позвоночных и пять сценариев. Авторы подчёркивают защиту незатапливаемых участков местообитаний; более 96% найденных refugia находятся вне охраняемых территорий.",
      "caveat": "Прогноз зависит от сценария, карт местообитаний и допущений; это не точный перечень будущих вымираний.",
      "sourcePages": "с. 408–412 · PDF 124–128",
      "url": "https://doi.org/10.1126/science.aed5772"
    },
    {
      "title": "Гибкие солнечные модули",
      "kind": "Материаловедение",
      "summary": "Разделение во времени образования самособирающегося слоя и перовскита улучшает качество интерфейса и работу гибких солнечных модулей.",
      "caveat": "Инженерные показатели конкретных образцов и испытаний не равны доказанной стоимости массовой технологии.",
      "sourcePages": "с. 398; полный текст eaef9745 · PDF 58–67",
      "url": "https://doi.org/10.1126/science.aef9745"
    }
  ],
  "reviewPlan": "После урока воспроизведите 2–3 выражения без подсказки. Вернитесь к ним через 1, 3, 7 и 14 дней. Это план самостоятельного повторения, без автоматических уведомлений.",
  "readingNote": "Сначала прочитайте английский абзац без перевода. Раскройте русский текст для проверки смысла. Затем прослушайте учебную озвучку и перескажите одну мысль. Она синтезирована и не является оригинальной аудиодорожкой Science."
};
