const questions = [
  {
    id: '43c98ce8-a07a-4dc2-80f6-c1b2a2485f06',
    text: 'Переживаю о разном',
    keyed: 'plus',
    domain: 'N',
    facet: 1
  },
  {
    id: 'd50a597f-632b-4f7b-89e6-6d85b50fd1c9',
    text: 'С легкостью завожу друзей',
    keyed: 'plus',
    domain: 'E',
    facet: 1
  },
  {
    id: '888dd864-7449-4e96-8d5c-7a439603ea91',
    text: 'Имею яркое воображение',
    keyed: 'plus',
    domain: 'O',
    facet: 1
  },
  {
    id: 'ce2fbbf8-7a97-4199-bda5-117e4ecdf3b6',
    text: 'Доверяю другим',
    keyed: 'plus',
    domain: 'A',
    facet: 1
  },
  {
    id: 'c7f53c3c-2e77-432f-bb71-7470b67d3aa9',
    text: 'Завершаю задачи успешно',
    keyed: 'plus',
    domain: 'C',
    facet: 1
  },
  {
    id: '48ad12ce-470e-4339-90ac-ea8c43a0103e',
    text: 'Легко начинаю злиться',
    keyed: 'plus',
    domain: 'N',
    facet: 2
  },
  {
    id: '458f3957-2359-4077-ade1-34525d633063',
    text: 'Люблю большие вечеринки',
    keyed: 'plus',
    domain: 'E',
    facet: 2
  },
  {
    id: '58d571e5-d725-4cf8-a438-32c16ee28eb6',
    text: 'Верю в важность искусства',
    keyed: 'plus',
    domain: 'O',
    facet: 2
  },
  {
    id: '0cf79e27-e702-45c2-9471-04ac96b58e0e',
    text: 'Использую других ради личных целей',
    keyed: 'minus',
    domain: 'A',
    facet: 2
  },
  {
    id: 'cda1ca17-b599-4561-a6cd-ff9d36062d27',
    text: 'Люблю прибраться',
    keyed: 'plus',
    domain: 'C',
    facet: 2
  },
  {
    id: '5e8550d7-b8ef-4905-950a-f81d735d39e2',
    text: 'Часто грущу',
    keyed: 'plus',
    domain: 'N',
    facet: 3
  },
  {
    id: '8af754f2-68e9-48f3-8c5d-2e6633d4472c',
    text: 'Беру на себя ответственность',
    keyed: 'plus',
    domain: 'E',
    facet: 3
  },
  {
    id: '0727def6-3d18-4221-bf38-86b58f9f3eed',
    text: 'Сильно эмоционален',
    keyed: 'plus',
    domain: 'O',
    facet: 3
  },
  {
    id: 'ccf3a5c8-fb50-4bd4-8e7a-22af3d657279',
    text: 'Люблю помогать другим',
    keyed: 'plus',
    domain: 'A',
    facet: 3
  },
  {
    id: '73d84e5d-cbf5-47f0-b8cb-4d2159a52e32',
    text: 'Сдерживаю обещания',
    keyed: 'plus',
    domain: 'C',
    facet: 3
  },
  {
    id: 'b2d9ef74-73f5-4ea8-b00c-7aaca15937df',
    text: 'Нахожу трудным обращаться к людям',
    keyed: 'plus',
    domain: 'N',
    facet: 4
  },
  {
    id: '48a761ef-438e-409b-ae59-ea2ce8f84414',
    text: 'Всегда занят',
    keyed: 'plus',
    domain: 'E',
    facet: 4
  },
  {
    id: 'cae55842-8957-4e3b-83b3-ceff98fb9dcf',
    text: 'Предпочитаю разнообразие рутине',
    keyed: 'plus',
    domain: 'O',
    facet: 4
  },
  {
    id: 'e2028ad3-b128-4f76-be57-398bfe2aff22',
    text: 'Люблю хорошую потасовку',
    keyed: 'minus',
    domain: 'A',
    facet: 4
  },
  {
    id: 'b7fc949b-02b6-4cb9-a3e2-dbb3d824b55f',
    text: 'Много работаю',
    keyed: 'plus',
    domain: 'C',
    facet: 4
  },
  {
    id: '481efd08-c810-43b1-a952-f8ac9052f96b',
    text: 'Могу чрезмерно увлечься',
    keyed: 'plus',
    domain: 'N',
    facet: 5
  },
  {
    id: '987efee2-899f-4a65-b9b5-1589ef0460d7',
    text: 'Люблю эмоциональное волнение',
    keyed: 'plus',
    domain: 'E',
    facet: 5
  },
  {
    id: 'e1e804c7-4a1d-498f-8610-f95147af9d1d',
    text: 'Люблю читать что-то посложнее',
    keyed: 'plus',
    domain: 'O',
    facet: 5
  },
  {
    id: '71029381-3908-4c68-91e1-e41fb45542a2',
    text: 'Считаю, что я лучше других',
    keyed: 'minus',
    domain: 'A',
    facet: 5
  },
  {
    id: 'f6076eea-56ae-4b46-97f1-5f94a7676c96',
    text: 'Всегда готов',
    keyed: 'plus',
    domain: 'C',
    facet: 5
  },
  {
    id: '2f519935-92e8-48ad-9746-4a0f8b38466a',
    text: 'Легко паникую',
    keyed: 'plus',
    domain: 'N',
    facet: 6
  },
  {
    id: '899c3f66-51d0-46ea-963a-6fc36d3b3cb9',
    text: 'Излучаю позитив',
    keyed: 'plus',
    domain: 'E',
    facet: 6
  },
  {
    id: '79186f48-e7fa-4df4-b74b-b0627ee244e1',
    text: 'Склоняюсь голосовать за либеральных политических кандидатов',
    keyed: 'plus',
    domain: 'O',
    facet: 6
  },
  {
    id: 'fd50e1ca-d9e0-4037-a7a1-a191d4db2d96',
    text: 'Сопереживаю бездомным',
    keyed: 'plus',
    domain: 'A',
    facet: 6
  },
  {
    id: 'bd9eec0a-b68b-472c-8803-7db29c308cdb',
    text: 'Начинаю разные вещи не подумав',
    keyed: 'minus',
    domain: 'C',
    facet: 6
  },
  {
    id: '7f92ab2c-265c-4b84-8c74-09f9bb9d41a7',
    text: 'Опасаюсь худшего',
    keyed: 'plus',
    domain: 'N',
    facet: 1
  },
  {
    id: 'af55f014-788c-4b6e-92c4-b2b59dc8a28d',
    text: 'Чувствую себя комфортно в окружении людей',
    keyed: 'plus',
    domain: 'E',
    facet: 1
  },
  {
    id: '08ff6dca-02a5-4aeb-aaa4-2ecf2526f143',
    text: 'Наслаждаюсь необузданными полетами фантазии',
    keyed: 'plus',
    domain: 'O',
    facet: 1
  },
  {
    id: '6f66cdc0-9044-457b-b40d-501ecae15ee7',
    text: 'Верю в хорошие намерения людей',
    keyed: 'plus',
    domain: 'A',
    facet: 1
  },
  {
    id: 'f110fc66-2e9e-413c-920b-19f05e63d7ac',
    text: 'Превосходен в своем деле',
    keyed: 'plus',
    domain: 'C',
    facet: 1
  },
  {
    id: '7dab2a37-8635-4fc7-86b7-0abf13c183c9',
    text: 'Легко раздражаюсь',
    keyed: 'plus',
    domain: 'N',
    facet: 2
  },
  {
    id: '28ab59a0-e7cd-4fce-94e3-bba2ecc023b6',
    text: 'Разговариваю с разными людьми на вечеринках',
    keyed: 'plus',
    domain: 'E',
    facet: 2
  },
  {
    id: 'b5919f2f-cded-4745-a9ce-c02703cee807',
    text: 'Вижу красоту там, где другие не видят',
    keyed: 'plus',
    domain: 'O',
    facet: 2
  },
  {
    id: '5a5fa975-d024-4ac8-8845-2823f957c21b',
    text: 'Готов обмануть, чтобы продвинуться вперед',
    keyed: 'minus',
    domain: 'A',
    facet: 2
  },
  {
    id: 'adf33f9f-45bd-43e3-af25-4c491176d97f',
    text: 'Часто забываю класть вещи на место',
    keyed: 'minus',
    domain: 'C',
    facet: 2
  },
  {
    id: 'f0a14e16-d726-47e9-a2c1-647fd3d7d52e',
    text: 'Не люблю себя',
    keyed: 'plus',
    domain: 'N',
    facet: 3
  },
  {
    id: '0b38e3d3-c15c-454c-b034-f4eb7ae1580a',
    text: 'Стараюсь быть лидером',
    keyed: 'plus',
    domain: 'E',
    facet: 3
  },
  {
    id: '5631b856-ff34-4f76-a0cd-edc7104c3bfa',
    text: 'Сопереживаю другим людям',
    keyed: 'plus',
    domain: 'O',
    facet: 3
  },
  {
    id: 'ada867af-4db1-4e3d-a604-2b695c1806e5',
    text: 'Беспокоюсь за других людей',
    keyed: 'plus',
    domain: 'A',
    facet: 3
  },
  {
    id: 'c55e3958-00c4-4fc3-9118-47d8f31bfde1',
    text: 'Говорю правду',
    keyed: 'plus',
    domain: 'C',
    facet: 3
  },
  {
    id: 'acd8fadc-5399-4a67-b5ff-9d1ada049c01',
    text: 'Боюсь привлекать внимание к себе',
    keyed: 'plus',
    domain: 'N',
    facet: 4
  },
  {
    id: 'd07b6c67-0d02-4948-a997-bb84ac234cd8',
    text: 'Всегда куда-то бегу',
    keyed: 'plus',
    domain: 'E',
    facet: 4
  },
  {
    id: '33b81fd0-7e32-4cd8-a13a-d5f5f754f998',
    text: 'Предпочитаю заниматься тем, что уже знаю',
    keyed: 'minus',
    domain: 'O',
    facet: 4
  },
  {
    id: 'd9a9a180-29c9-4ec5-8621-2256d411def7',
    text: 'Кричу на людей',
    keyed: 'minus',
    domain: 'A',
    facet: 4
  },
  {
    id: 'f12c3d9d-1d12-4aa6-ad2e-009cd0651cbb',
    text: 'Делаю больше, чем от меня ожидают',
    keyed: 'plus',
    domain: 'C',
    facet: 4
  },
  {
    id: '9891b7ba-a494-4307-aafe-301d8db506c6',
    text: 'Редко злоупотребляю чем-либо',
    keyed: 'minus',
    domain: 'N',
    facet: 5
  },
  {
    id: 'f1675af6-88bf-4376-a946-0281e762b39c',
    text: 'Ищу приключений',
    keyed: 'plus',
    domain: 'E',
    facet: 5
  },
  {
    id: '95a3f20c-f933-4d19-a2c1-a7dbdf63c562',
    text: 'Избегаю философских рассуждений',
    keyed: 'minus',
    domain: 'O',
    facet: 5
  },
  {
    id: '7df44711-4cd4-4b05-8830-73fcc3ebdab5',
    text: 'Очень высоко ставлю себя',
    keyed: 'minus',
    domain: 'A',
    facet: 5
  },
  {
    id: '9d3cb5c7-955c-43a4-b6c7-b07ed01dcbd9',
    text: 'Придерживаюсь своих планов',
    keyed: 'plus',
    domain: 'C',
    facet: 5
  },
  {
    id: '13c58810-3864-42ba-aa87-d4166f858756',
    text: 'Легко подавляем событиями',
    keyed: 'plus',
    domain: 'N',
    facet: 6
  },
  {
    id: '961376e0-16a1-4c14-b059-789e63d11b63',
    text: 'Много веселюсь',
    keyed: 'plus',
    domain: 'E',
    facet: 6
  },
  {
    id: 'f08e1b27-3673-4898-9cae-896482d0d9f9',
    text: 'Верю, что нет абсолютного правильного и неправильного',
    keyed: 'plus',
    domain: 'O',
    facet: 6
  },
  {
    id: 'c2038c12-7a37-47a8-9983-831bd6692aab',
    text: 'Сопереживаю тем, кому хуже, чем мне',
    keyed: 'plus',
    domain: 'A',
    facet: 6
  },
  {
    id: '956f3e17-ff17-4af5-a52f-9222b8968106',
    text: 'Принимаю поспешные решения',
    keyed: 'minus',
    domain: 'C',
    facet: 6
  },
  {
    id: '4d81238b-5407-47d4-88e5-dc0e38aa14f5',
    text: 'Многого боюсь',
    keyed: 'plus',
    domain: 'N',
    facet: 1
  },
  {
    id: '9f9166f0-fa94-4c14-a91d-3eecd8395794',
    text: 'Избегаю контактов с другими',
    keyed: 'minus',
    domain: 'E',
    facet: 1
  },
  {
    id: '23a1034f-fab7-4887-a66e-5ef4eaafb25e',
    text: 'Люблю помечтать',
    keyed: 'plus',
    domain: 'O',
    facet: 1
  },
  {
    id: 'c63e6121-c3ed-40cc-abc2-c1e6ea1e0858',
    text: 'Доверяю тому, что люди говорят мне',
    keyed: 'plus',
    domain: 'A',
    facet: 1
  },
  {
    id: '02ee1930-36a7-4caa-b10c-c93efb682a44',
    text: 'Справлюсь с задачами без проблем',
    keyed: 'plus',
    domain: 'C',
    facet: 1
  },
  {
    id: 'da8e6ed1-2296-4c58-8fdb-66f2f591989b',
    text: 'Легко теряю самообладание',
    keyed: 'plus',
    domain: 'N',
    facet: 2
  },
  {
    id: '03c10b30-b88f-4c63-8acc-71251ca24615',
    text: 'Предпочитаю быть одному',
    keyed: 'minus',
    domain: 'E',
    facet: 2
  },
  {
    id: '751a04bc-5adf-485a-8ea4-4308406ae85b',
    text: 'Не люблю поэзию',
    keyed: 'minus',
    domain: 'O',
    facet: 2
  },
  {
    id: '982e83c2-d34e-48da-9c71-78494ab05c85',
    text: 'Использую других людей при возможности',
    keyed: 'minus',
    domain: 'A',
    facet: 2
  },
  {
    id: 'f4891687-0ff0-47af-a4f6-d1202c8f6676',
    text: 'Оставляю комнату в беспорядке',
    keyed: 'minus',
    domain: 'C',
    facet: 2
  },
  {
    id: '743d8973-1de1-4485-91b4-8a5cf63e7d44',
    text: 'Часто бывает очень грустно',
    keyed: 'plus',
    domain: 'N',
    facet: 3
  },
  {
    id: '2452f034-8273-4f71-9122-a40f5ead31ba',
    text: 'Беру контроль',
    keyed: 'plus',
    domain: 'E',
    facet: 3
  },
  {
    id: '2a300001-6e05-4c79-b8b5-2ccae4c3d463',
    text: 'Редко замечаю свои эмоциальные реакции',
    keyed: 'minus',
    domain: 'O',
    facet: 3
  },
  {
    id: 'cd54bd76-ca9c-4030-b325-bb8d896bcb3f',
    text: 'Безразличен к чувствам других',
    keyed: 'minus',
    domain: 'A',
    facet: 3
  },
  {
    id: '4e6e3a34-176f-4e6e-8730-1341611f972b',
    text: 'Нарушаю правила',
    keyed: 'minus',
    domain: 'C',
    facet: 3
  },
  {
    id: '20062533-a33d-4c1e-9cd9-bff868015b3f',
    text: 'Чувствую себя комфортно только с друзьями',
    keyed: 'plus',
    domain: 'N',
    facet: 4
  },
  {
    id: 'b2a077d5-1fe0-4b06-ab63-35455e001e54',
    text: 'В свободное время занимаюсь много чем',
    keyed: 'plus',
    domain: 'E',
    facet: 4
  },
  {
    id: '0d2e65ab-95d9-482f-beb4-3239a3a4944a',
    text: 'Не люблю перемены',
    keyed: 'minus',
    domain: 'O',
    facet: 4
  },
  {
    id: '0de0f900-cede-4538-9c00-5da4f830b028',
    text: 'Оскорбляю людей',
    keyed: 'minus',
    domain: 'A',
    facet: 4
  },
  {
    id: 'a9c97d6b-6721-4150-8d84-64ef3082f164',
    text: 'Делаю лишь столько, сколько достаточно',
    keyed: 'minus',
    domain: 'C',
    facet: 4
  },
  {
    id: '9f2e7f90-0ca5-4ed0-9fe5-e060238a9b5e',
    text: 'Легко противостою соблазнам',
    keyed: 'minus',
    domain: 'N',
    facet: 5
  },
  {
    id: '7dd6cf2d-5c14-48c2-8ae5-633a7a596c71',
    text: 'Наслаждаюсь опрометчивостью',
    keyed: 'plus',
    domain: 'E',
    facet: 5
  },
  {
    id: 'fecc35f7-681e-4889-a404-4a973a3dfef0',
    text: 'С трудом понимаю абстрактные идеи',
    keyed: 'minus',
    domain: 'O',
    facet: 5
  },
  {
    id: '1d686958-6fe7-432f-85e6-186b99e4e232',
    text: 'О себе высокого мнения',
    keyed: 'minus',
    domain: 'A',
    facet: 5
  },
  {
    id: 'c7db0ed8-df7d-49bf-942f-59e46ef743c4',
    text: 'Трачу время понапрасну',
    keyed: 'minus',
    domain: 'C',
    facet: 5
  },
  {
    id: 'b7e0e393-9b21-4e0d-adf3-8f28fb5b9d87',
    text: 'Чувствую себя неспособным справляться с делами',
    keyed: 'plus',
    domain: 'N',
    facet: 6
  },
  {
    id: '79d956e8-1118-402a-a0e2-9380af18243e',
    text: 'Люблю жизнь',
    keyed: 'plus',
    domain: 'E',
    facet: 6
  },
  {
    id: '96ba77b2-1a44-4dfd-95f9-ae4d1f714460',
    text: 'Склоняюсь голосовать за консервативных политических кандидатов',
    keyed: 'minus',
    domain: 'O',
    facet: 6
  },
  {
    id: '77f54ab4-0fba-4efb-8700-066c7490eb87',
    text: 'Не интересуют проблемы других людей',
    keyed: 'minus',
    domain: 'A',
    facet: 6
  },
  {
    id: 'a354cf7c-8d11-46ac-acc5-da90d2048637',
    text: 'Поспешно начинаю дела не обдумав',
    keyed: 'minus',
    domain: 'C',
    facet: 6
  },
  {
    id: '43b03992-3f32-4ed1-a6f8-5d6d3e7ed246',
    text: 'Легко впадаю в стресс',
    keyed: 'plus',
    domain: 'N',
    facet: 1
  },
  {
    id: '41702602-08e4-4e2b-9a19-291d9efc581a',
    text: 'Держу других на дистанции',
    keyed: 'minus',
    domain: 'E',
    facet: 1
  },
  {
    id: '935a7413-abac-4f54-9169-d1fbd39da752',
    text: 'Люблю потеряться в мыслях',
    keyed: 'plus',
    domain: 'O',
    facet: 1
  },
  {
    id: '432dbde8-8756-4ff0-80d5-f47018235139',
    text: 'Не доверяю людям',
    keyed: 'minus',
    domain: 'A',
    facet: 1
  },
  {
    id: '5727c93f-317b-4af1-a686-77fc9fbc5033',
    text: 'Знаю, как доводить дела до конца',
    keyed: 'plus',
    domain: 'C',
    facet: 1
  },
  {
    id: 'd32bd062-4eb2-401b-99b2-e7afea39ca9b',
    text: 'Не раздражаюсь легко',
    keyed: 'minus',
    domain: 'N',
    facet: 2
  },
  {
    id: '9a47184f-6046-4e68-a61b-3d9b357b86ea',
    text: 'Избегаю толпу',
    keyed: 'minus',
    domain: 'E',
    facet: 2
  },
  {
    id: '87c5b27e-59a8-4c48-8ba8-f5413d735693',
    text: 'Не наслаждаюсь музеями искусства',
    keyed: 'minus',
    domain: 'O',
    facet: 2
  },
  {
    id: '11b20adb-abed-4363-894c-3dd823ae0540',
    text: 'Мешаю планам других людей',
    keyed: 'minus',
    domain: 'A',
    facet: 2
  },
  {
    id: '50418d86-712c-45d9-adc4-ea0231c93cf5',
    text: 'Оставляю вещи где попало',
    keyed: 'minus',
    domain: 'C',
    facet: 2
  },
  {
    id: 'f40e421f-6c24-4be2-bd9f-28d33358d8c6',
    text: 'Чувствую себя комфортно с самим собой',
    keyed: 'minus',
    domain: 'N',
    facet: 3
  },
  {
    id: '8791f37b-686f-47c3-9db7-74c009951321',
    text: 'Жду, что другие покажут мне путь',
    keyed: 'minus',
    domain: 'E',
    facet: 3
  },
  {
    id: '4fd25155-9cc2-4cd6-8852-3e0ca2d5e95d',
    text: 'Не понимаю эмоциональных людей',
    keyed: 'minus',
    domain: 'O',
    facet: 3
  },
  {
    id: 'b68af20d-24f9-4c27-85cc-fe0858994888',
    text: 'Не уделяю времени другим людям',
    keyed: 'minus',
    domain: 'A',
    facet: 3
  },
  {
    id: '54423933-0ebb-44a7-bdd9-2a9b100c70f2',
    text: 'Нарушаю мои обещания',
    keyed: 'minus',
    domain: 'C',
    facet: 3
  },
  {
    id: '7317848c-3e1b-422f-bb16-02efc504f677',
    text: 'Проблемные социальные ситуации не беспокоят меня',
    keyed: 'minus',
    domain: 'N',
    facet: 4
  },
  {
    id: '7d93e1ca-46e8-4a30-9623-42a80c9b420c',
    text: 'Люблю ничего не принимать близко к сердцу',
    keyed: 'minus',
    domain: 'E',
    facet: 4
  },
  {
    id: 'a7f43928-8982-4ed5-8656-7a80346fe979',
    text: 'Придерживаюсь старых устоев',
    keyed: 'minus',
    domain: 'O',
    facet: 4
  },
  {
    id: '17910a55-a64a-4ed0-8b46-293e2fa2fe03',
    text: 'Мстителен',
    keyed: 'minus',
    domain: 'A',
    facet: 4
  },
  {
    id: '3890bb43-2695-4b8d-b289-ee10d11cc884',
    text: 'Вкладываю мало времени и стараний в то, что делаю',
    keyed: 'minus',
    domain: 'C',
    facet: 4
  },
  {
    id: '49a85680-53aa-4208-86b5-dccc7a6f8e37',
    text: 'Способен контролировать свои желания',
    keyed: 'minus',
    domain: 'N',
    facet: 5
  },
  {
    id: '10f90fa9-649c-4631-ac4c-3dd3f751597d',
    text: 'Веду себя дико и безумно',
    keyed: 'plus',
    domain: 'E',
    facet: 5
  },
  {
    id: 'b86de003-c3c4-4cc8-9385-5ac8a0142c34',
    text: 'Не заинтересован в теоретических рассуждениях',
    keyed: 'minus',
    domain: 'O',
    facet: 5
  },
  {
    id: '80c1d149-7050-481a-9953-aefb441642e7',
    text: 'Хвастаюсь своими достоинствами',
    keyed: 'minus',
    domain: 'A',
    facet: 5
  },
  {
    id: '51403620-968c-42fa-a772-65ba5ad8396f',
    text: 'С трудом что-либо начинаю',
    keyed: 'minus',
    domain: 'C',
    facet: 5
  },
  {
    id: '88a3c2fe-3aa4-4f46-9322-da656332268a',
    text: 'Сохраняю самообладание в стрессовых ситуациях',
    keyed: 'minus',
    domain: 'N',
    facet: 6
  },
  {
    id: 'e7b31bdc-5f6b-40ec-ba91-f5919b0f170e',
    text: 'Смотрю на положительную сторону жизни',
    keyed: 'plus',
    domain: 'E',
    facet: 6
  },
  {
    id: '580b08d1-3c94-46e9-9d07-d6d80c698127',
    text: 'Считаю, что наказания за преступления должны быть жестче',
    keyed: 'minus',
    domain: 'O',
    facet: 6
  },
  {
    id: '48bee420-60c0-45cd-be43-3893dbc1969a',
    text: 'Стараюсь не думать о нуждающихся',
    keyed: 'minus',
    domain: 'A',
    facet: 6
  },
  {
    id: 'ea3327ea-3529-4be4-8e2d-2174731ae4d7',
    text: 'Действую необдуманно',
    keyed: 'minus',
    domain: 'C',
    facet: 6
  }
]

export default questions
