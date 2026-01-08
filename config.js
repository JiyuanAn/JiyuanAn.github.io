// 网站配置文件
// 您可以在这里修改一些全局配置，避免直接修改 HTML

const siteConfig = {
  // 个人信息
  personal: {
    name: '安纪元',
    nameEn: 'Jiyuan An',
    title: '博士研究生',
    email: 'jiyuanan.blcu@gmail.com',
    github: 'https://github.com/JiyuanAn',
    scholar: 'https://scholar.google.com/',
    location: 'Beijing, China'
  },
  
  // 研究方向
  research: {
    areas: [
      {
        icon: '🤖',
        title: '大语言模型',
        description: '大语言模型应用、模型微调、提示工程、工具使用与智能体'
      },
      {
        icon: '🔍',
        title: '模型可解释性',
        description: '探索大语言模型的内部机制、决策过程与可控生成'
      },
      {
        icon: '📚',
        title: '智能辅助语言学习',
        description: '计算机辅助语言学习、自动反馈生成、写作评价'
      },
      {
        icon: '💻',
        title: '代码生成与理解',
        description: '大语言模型辅助代码生成、程序理解与自动化'
      }
    ]
  },
  
  // 社交媒体链接（可选）
  social: {
    linkedin: '',  // 留空则不显示
    twitter: '',
    researchgate: '',
    orcid: ''
  },
  
  // Google Analytics ID（可选）
  analytics: {
    enabled: false,
    googleId: 'G-XXXXXXXXXX'  // 替换为您的 GA ID
  },
  
  // 网站元数据
  meta: {
    title: '安纪元的个人主页 | Jiyuan An',
    description: '博士研究生的个人学术主页，研究方向：自然语言处理、大语言模型、计算语言学。',
    keywords: '安纪元,Jiyuan An,自然语言处理,大语言模型,计算语言学,北京语言大学',
    author: '安纪元 (Jiyuan An)',
    siteUrl: 'https://yourusername.github.io'  // 替换为实际域名
  },
  
  // 主题配置
  theme: {
    primaryColor: '#38bdf8',
    secondaryColor: '#22d3ee',
    accentColor: '#818cf8'
  }
};

// 导出配置（用于 ES6 模块）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteConfig;
}

// 使配置在全局可用
if (typeof window !== 'undefined') {
  window.siteConfig = siteConfig;
}


