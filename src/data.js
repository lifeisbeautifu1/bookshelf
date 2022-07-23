const data = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    thumbnail: 'https://i.imgur.com/uUtMqqn.png',
    genre: 'Fantasy',
    price: 9.99,
    description:
      "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
  },
  {
    id: 2,
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling',
    thumbnail: 'https://i.imgur.com/B3J7KH2.png',
    genre: 'Fantasy',
    price: 9.99,
    description:
      'Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the main Harry Potter series. It was released on 14 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.',
  },
  {
    id: 3,
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    thumbnail: 'https://i.imgur.com/yerS8ZQ.png',
    genre: 'Fantasy',
    price: 9.99,
    description:
      "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies.",
  },
  {
    id: 4,
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J.K. Rowling',
    thumbnail: 'https://i.imgur.com/LsM3wj4.png',
    genre: 'Fantasy',
    price: 9.99,
    description:
      "Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication.[1] It is the longest book of the series.",
  },
  {
    id: 5,
    title: 'Harry Potter and the Half-Blood Prince',
    author: 'J.K. Rowling',
    thumbnail: 'https://i.imgur.com/PmPajuk.png',
    genre: 'Fantasy',
    price: 9.99,
    description:
      "Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J.K. Rowling and the sixth and penultimate novel in the Harry Potter series. Set during Harry Potter's sixth year at Hogwarts, the novel explores the past of the boy wizard's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.",
  },
  {
    id: 6,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    thumbnail: 'https://imgur.com/qII2R8T.png',
    genre: 'Fantasy',
    price: 9.99,
    description:
      "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
  },
  {
    id: 7,
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    thumbnail: 'https://imgur.com/YZaASCB.png',
    genre: 'Fantasy',
    price: 9.99,
    description:
      "Harry Potter and the Goblet of Fire is a fantasy novel written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",
  },
  {
    id: 8,
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    thumbnail: 'https://imgur.com/8Exz5Pv.png',
    genre: 'Dystopian',
    price: 9.99,
    description:
      "Nineteen Eighty-Four (also stylised as 1984) is a dystopian social science fiction novel and cautionary tale written by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. Thematically, it centres on the consequences of totalitarianism, mass surveillance and repressive regimentation of people and behaviours within society. Orwell, a democratic socialist, modelled the totalitarian government in the novel after Stalinist Russia and Nazi Germany. More broadly, the novel examines the role of truth and facts within politics and the ways in which they are manipulated.",
  },
  {
    id: 9,
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    thumbnail: 'https://imgur.com/ZX8vtK1.png',
    genre: 'Romance Novel',
    price: 9.99,
    description:
      "Norwegian Wood (ノルウェイの森, Noruwei no Mori) is a 1987 novel by Japanese author Haruki Murakami. The novel is a nostalgic story of loss and burgeoning sexuality. It is told from the first-person perspective of Toru Watanabe, who looks back on his days as a college student living in Tokyo. Through Watanabe's reminiscences, readers see him develop relationships with two very different women—the beautiful yet emotionally troubled Naoko, and the outgoing, lively Midori. ",
  },
  {
    id: 10,
    title: 'Colorless Tsukuru Tazaki and His Years of Pilgrimage',
    author: 'Haruki Murakami',
    thumbnail: 'https://imgur.com/2KpbKvc.png',
    genre: 'Realist Novel',
    price: 9.99,
    description: `Colorless Tsukuru Tazaki and His Years of Pilgrimage (Japanese: 色彩を持たない多崎つくると、彼の巡礼の年, Hepburn: Shikisai o motanai Tazaki Tsukuru to, kare no junrei no toshi) is the thirteenth novel by Japanese writer Haruki Murakami. Published on 12 April 2013 in Japan, it sold one million copies in one month.

      The novel is a realist Bildungsroman that tells the story of Japanese railroad engineer Tsukuru Tazaki. When his close-knit group of friends abruptly cuts all relationships with him, a young Tsukuru is left depressed and without answers. Years later, Tsukuru attempts to reconcile with his old friends, embarking on a quest for truth and a pilgrimage for happiness.`,
  },
  {
    id: 11,
    title: 'Digital Minimalism',
    author: 'Cal Newport',
    thumbnail: 'https://imgur.com/IrmgHs9.png',
    genre: 'Self-Development',
    price: 5.99,
    description: `In this timely and enlightening book, the bestselling author of Deep Work introduces a philosophy for technology use that has already improved countless lives.

    Digital minimalists are all around us. They’re the calm, happy people who can hold long conversations without furtive glances at their phones. They can get lost in a good book, a woodworking project, or a leisurely morning run. They can have fun with friends and family without the obsessive urge to document the experience. They stay informed about the news of the day, but don’t feel overwhelmed by it. They don’t experience “fear of missing out” because they already know which activities provide them with meaning and satisfaction.`,
  },
  {
    id: 12,
    title: 'The Subtle Art of Not Giving a Fuck',
    author: 'Mark Manson',
    thumbnail: 'https://imgur.com/E3Ithcx.png',
    genre: 'Self-Development',
    price: 5.99,
    description: `The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life is a 2016 nonfiction self-help book by American blogger and author Mark Manson. The book covers Manson's belief that life's struggles give it meaning and argues that typical self-help books offer meaningless positivity which is neither practical nor helpful, thus improperly approaching the problems many individuals face. It was a New York Times and Globe and Mail bestseller.`,
  },
  {
    id: 13,
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    thumbnail:
      'https://www.moscowbooks.ru/image/book/500/orig/i50005796.jpg?cu=20201112110706',
    genre: 'Dystopian',
    price: 8.99,
    description: `Fahrenheit 451 is a 1953 dystopian novel by American writer Ray Bradbury. Often regarded as one of his best works, the novel presents a future American society where books are outlawed and "firemen" burn any that are found. The book's tagline explains the title as "the temperature at which book paper catches fire, and burns": the autoignition temperature of paper. The lead character, Guy Montag, is a fireman who becomes disillusioned with his role of censoring literature and destroying knowledge, eventually quitting his job and committing himself to the preservation of literary and cultural writings.`,
  },
  {
    id: 14,
    title: 'Deep Work',
    author: 'Cal Newport',
    thumbnail:
      'https://www.moscowbooks.ru/image/book/676/orig/i676550.jpg?cu=20191025122512',
    genre: 'Self-Development',
    price: 9.99,
    description: `One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results.
    Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time. Deep work will make you better at what you do and provide the sense of true fulfillment that comes from craftsmanship. In short, deep work is like a super power in our increasingly competitive twenty-first century economy. And yet, most people have lost the ability to go deep-spending their days instead in a frantic blur of e-mail and social media, not even realizing there's a better way.`,
  },
];

export default data;
