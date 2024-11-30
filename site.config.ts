import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://Thanatos732.github.io',
  lang: 'zh-CN',
  title: 'Thanatos的博客 | Thanatos\'s blog',
  author: {
    name: 'Thanatos',
    avatar: 'https://cdn.jsdelivr.net/gh/Thanatos732/photos/avatar.png',
    status:
    {
      emoji: '😐',
      message: '真不想上学'
  }},
  mode: 'auto',
  lastUpdated: true,
  favicon: '',
  subtitle: '想要睡觉',
  description: '这么活着太累了',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/YunYouJun',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=247102977',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/YunYouJun',
      icon: 'i-ri-twitter-x-fill',
      color: '#1da1f2',
    },
    {
      name: 'E-Mail',
      link: 'mailto:me@yunyoujun.cn',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: true,
    type: 'engine'
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
