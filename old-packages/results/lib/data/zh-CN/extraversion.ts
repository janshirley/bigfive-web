import { type TemplateDomain } from '../../types'

const extraversion: TemplateDomain = {
  domain: 'E',
  title: '外向性 Extraversion',
  shortDescription: '外向性以与外部世界接触为显著特征。',
  description: `外向的人喜欢与人相处，充满活力，并且经常体验到积极的情绪。
  他们往往是热情的、以行动为导向的人，可能会兴奋的说“是的！”或“我们走吧！”的人。
  在群体中，他们喜欢说话、表达自己，并引起他人的注意。
<br /><br />
内向者缺乏外向者的活力、活力和活动水平。
他们往往安静、低调、深思熟虑、远离社交世界。
他们疏于社交参与不应被解读为害羞或抑郁；
内向的人只是比外向的人需要更少的刺激，并且更喜欢独处。
<br /><br />
内向者的独立和保守有时会被误认为是不友善或傲慢。
事实上，在宜人性维度上得分较高的内向者虽然不会主动找他人，但很好相处。`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `您的外向性得分低，表明您内向、保守且安静。
      你喜欢独处和独自活动。你的社交范围仅限于几个亲密的朋友。`
    },
    {
      score: 'neutral', // do not translate this line
      text: `你的外向性得分适中，表明你既不是一个内向孤独的人，也不是一个快乐的话匣子。
      您享受与他人在一起的时光，也享受独处的时光。`
    },
    {
      score: 'high', // do not translate this line
      text: `您的外向性得分高，表明您善于交际、外向、精力充沛且活泼。
      你大部分时间都喜欢和人在一起。`
    }
  ],
  facets: [
    {
      facet: 1,
      title: '友善 Friendliness',
      text: `友善的人真诚地喜欢别人，并公开地表现出对他人的积极感受。
      他们交朋友很快，很容易建立亲密的关系。
      友善度低的人不一定是冷漠和敌对的，但他们不会与他人接触，并被认为是冷漠和保守的。`
    },
    {
      facet: 2,
      title: '合群 Gregariousness',
      text: `合群的人觉得与他人相处既令人愉快又能带来刺激和满足。
      他们享受人群带来的兴奋感。
      低分者往往会因人群拥挤而感到不知所措，并会主动避开。
      他们有时不一定不喜欢与人在一起，
      但他们对隐私和独处时间的需求比此量表高分者要大得多。`
    },
    {
      facet: 3,
      title: '自信 Assertiveness',
      text: `高分者喜欢畅所欲言、负责并指导他人的活动。
      他们往往是群体中的领导者。
      低分者往往话不多，让其他人领导群体的活动。`
    },
    {
      facet: 4,
      title: '活跃度 Activity Level',
      text: `活跃的人过着快节奏、忙碌的生活。
      他们行动迅速、精力充沛，参与的活动很多。
      此量表低分者会遵循更慢、更悠闲、轻松的节奏。`
    },
    {
      facet: 5,
      title: '刺激寻求 Excitement-Seeking',
      text: `如果没有高水平的刺激，此量表高分者很容易感到无聊。
      他们喜欢明亮的灯光和喧嚣。他们可能会冒险并寻求刺激。
      低分者会被噪音和骚动所淹没，不喜寻求刺激。`
    },
    {
      facet: 6,
      title: '开朗 Cheerfulness',
      text: `该量表测量积极的情绪和感受，而不是消极情绪（属于神经质领域的一部分）。
      此量表高分者通常会经历一系列积极的感受，包括幸福、热情、乐观和快乐。
      低分者不太可能如此精力充沛、精神饱满。`
    }
  ]
}

export default extraversion
