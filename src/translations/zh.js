export default {
	'Showcase': '展示',
	'Add your project': '添加您的项目',
	'Check out projects that use Stylify CSS.': '查看使用Stylify CSS的项目。',
	'Logo & Assets': '标志和资产',
	'Assets that represent the Stylify CSS brand.': '代表Stylify CSS品牌的资产。',
	'Stylify logo': '斯泰尔利的标志',
	'The following are assets that represent the Stylify CSS brand. All assets are considered open-source contributions and should be used according to open standards and licensing rules. In case of any question about usage, alignment, editing, feel free to contact us via e-mail <a href="mailto:dev@stylifycss.com" class="color:$blue1">dev@stylifycss.com</a> or through Discord.': '以下是代表Stylify CSS品牌的资产。所有的资产都被认为是开源的贡献，应该根据开放标准和许可规则来使用。如果有任何关于使用、对齐、编辑的问题，请随时通过电子邮件<a href="mailto:dev@stylifycss.com" class="color:$blue1">dev@stylifycss.com</a>或通过Discord联系我们。',
	'Preferred - Horizontal': '首选 - 横向',
	'Vertical alternative': '垂直的替代方案',
	'Preferred - Horizontal (dark)': '首选--水平（深色）',
	'Vertical alternative (dark)': '垂直替代方案（深色）',
	'News and articles about the Stylify.': '关于Stylify的新闻和文章。',
	'Get the latest news about Stylify CSS.': '获取有关Stylify CSS的最新消息。',
	'Once a month. One-click unsubscribe. Your data are safe.': '每月一次。一键取消订阅。您的数据是安全的。',
	'Released under the MIT license': '在MIT许可下发布',
	'Community': '社区',
	'Other': '其他',
	'Frequently Asked Questions': '常问问题',
	'Frequently asked questions about Stylify CSS and it\'s ecosystem.': '关于Stylify CSS和它的生态系统的常见问题。',
	'Below are frequently asked questions about Stylify CSS and its ecosystem.': '以下是关于Stylify CSS及其生态系统的常见问题。',
	'Why to use CSS-like selectors <code>property:value</code> instead of shortcuts?': '为什么要使用类似CSS的选择器<code>property:value</code>而不是快捷键？',
	'Because you don\'t have to study anything. It\'s like CSS instead of randomly named somehow shortened classes. An example: auto-cols-auto is a class from Tailwind. The class is not self-explanatory and a dev not using Tailwind daily has to go into the docs or into the dev tools to see what it does. In Stylify you write this grid-auto-columns:auto. Everyone with a bit of knowledge of CSS knows what that does.': '因为你不需要研究什么。这就像CSS，而不是随机命名的某种缩短的类。一个例子：auto-cols-auto是Tailwind的一个类。这个类不是不言自明的，一个不是每天使用Tailwind的开发者必须进入文档或进入开发工具才能看到它的作用。在Stylify中，你可以写这个grid-auto-columns:auto。每个对CSS有一点了解的人都知道它的作用。',
	'Another reason is maintainability. What if browsers come with a property, Tailwind already shortened? An example <code>shrink</code> => <code>flex-shrink: 1;</code> (class from Tailwind). What if Browsers come with, for example, a new `shrink: auto`. Then they will have to figure out a new name for the new selector so it makes sense. Which can be confusing.': '另一个原因是可维护性。如果浏览器自带的属性，Tailwind已经缩短了怎么办？例如 <code>shrink</code> => <code>flex-shrink: 1;</code> （来自Tailwind的类）。如果浏览器出现了，例如，一个新的`收缩：自动\'。那么，他们将不得不为新的选择器找出一个新的名字，以便让它有意义。这可能会让人困惑。',
	'When using BEM you can end up with <code>class="page-section__container page-section__container--full-size page-section__container--without-background"</code>. I can\'t see how property:value selectors are worse than this.': '当使用BEM时，你可能会出现<code>class="page-section__container page-section__container--full-size page-section__container--without-background"</code>。我看不出property:value选择器有什么比这更糟的。',
	'In case you don\'t like the CSS-like selectors, you can define custom macros like <code>ml-2</code> (margin-left) or <code>py-3</code> (vertical padding) if you like it more.': '如果你不喜欢类似CSS的选择器，你可以定义自定义的宏，如<code>ml-2</code>（margin-left）或<code>py-3</code>（垂直填充），如果你更喜欢它。',
	'What is the difference against <code class="white-space:nowrap">style=""</code> attribute?': '与<code class="white-space:nowrap">style=""</code>属性有什么区别？',
	'For example a selector like <code>color:red</code> is generated as <code>.color:red{color:red}</code>. This selector can be reused.': '例如，像<code>color:red</code>这样的选择器被生成为<code>.color:red{color:red}</code>。这个选择器可以被重复使用。',
	'Inline styles are not responsive. You cannot add a <code>@media query</code>. This means, you cannot have font-size 12px for mobile and then change it for a desktop. Also, it is easier to toggle classes than a style attribute value.': '内联样式不是响应性的。你不能添加一个<code>@media query</code>。这意味着，你不能在手机上使用font-size 12px，然后在桌面上改变它。另外，切换类比切换样式属性值更容易。',
	'When you add a component in Stylify like <code>.button</code> that needs red text, it is generated like this <code>.color:red,.button{color:red}</code>. The selector is simply attached, reused and the <code>property:value</code> is not generated again => This means smaller bundles.': '当你在Stylify中添加一个需要红色文本的组件，如<code>.button</code>，它会像这样生成<code>.color:red,.button{color:red}</code>。选择器被简单地附加、重复使用，并且<code>property:value</code>不会被再次生成 => 这意味着更小的包。',
	'In production, you can also minify this selectors to => <code>.a,.b {color:red}</code>. This is done even by Medium.com and Facebook.': '在生产中，你也可以将这个选择器最小化为 => <code>.a,.b {color:red}</code>。即使是Medium.com和Facebook也是如此。',
	'But the minification will make the blocks harder to find when debugging because of the unreadable classes? No. You can use the empty class as selector, data or id attributes. Also, in Javascript, we normally minify classes and selectors from <code>const myValue</code> to <code>const abc</code> and nobody cares.': '但是，迷你化会使块在调试时更难找到，因为不可读的类？不会的，你可以使用空类作为选择器、数据或id属性。另外，在Javascript中，我们通常将类和选择器从<code>const myValue</code>减至<code>const abc</code>，没有人在意。',
	'What are the advantages over pure CSS?': '与纯CSS相比，有什么优势？',
	'Selectors are dynamically generated => don\'t have to remember to remove them when removing CSS and vice versa.': '选择器是动态生成的 => 在删除CSS时不必记得删除它们，反之亦然。',
	'Selectors are combined and reused => <code>.color:red,.button{color:red}</code>.': '选择器被组合和重复使用 => <code>.color:red,.button{color:red}</code>。',
	'Selectors are minified from long <code>text-align:left</code> to short <code>a</code>.': '选择器从长的<code>text-align:left</code>被简化为短的<code>a</code>。',
	'You open a template file and a browser and you just type the selectors. You don\'t have to switch between HTML and CSS for removing, renaming, and manually combining classes.': '你打开一个模板文件和一个浏览器，你只需输入选择器。你不必在HTML和CSS之间切换来删除、重命名和手动组合类。',
	'The CSS size doesn\'t grow exponentially, because there is a minimum of duplicated CSS <code>property:value</code>. There is some <a href="https://engineering.fb.com/2020/05/08/web/facebook-redesign/" target="blank" rel="noopener nofollow">article</a> about CSS size from Facebook.': 'CSS的大小不会呈指数级增长，因为重复的CSS <code>property:value</code>最少。有一些<a href="https://engineering.fb.com/2020/05/08/web/facebook-redesign/" target="blank" rel="noopener nofollow">文章</a>是关于Facebook的CSS大小。',
	'When frontend and backend engineers work on one task, then it\'s easy for the frontend engineer to tell the backend engineer which classes to add when he just needs to indent or align something. He doesn\'t have to edit CSS and hopes it will work. He just copies selectors.': '当前端和后端工程师在一个任务上工作时，那么前端工程师就很容易告诉后端工程师，当他只需要缩进或对齐某些东西时，应该添加哪些类。他不需要编辑CSS并希望它能工作。他只是复制选择器。',
	'Dynamically generated CSS means fewer files in the projects => fewer changes => we normally generate cache, entities, migrations, js bundles and etc. So Stylify dynamically generates CSS. At least from my point of view, it\'s more comfortable and efficient than writing it manually and thinking about how to pre-generate utilities or combine CSS files manually.': '动态生成的CSS意味着项目中更少的文件=>更少的修改=>我们通常会生成缓存、实体、迁移、js捆绑等。所以Stylify是动态生成CSS的。至少从我的角度来看，这比手动编写和思考如何预先生成实用程序或手动组合CSS文件更加舒适和高效。',
	'Do I need to use hardcoded values?': '我需要使用硬编码的值吗？',
	'In Stylify, you can configure variables and use them anywhere.': '在Stylify中，你可以配置变量并在任何地方使用它们。',
	'It\'s just up to the developer if he is going to have hardcoded values in the code or not.': '只是由开发者决定他是否要在代码中使用硬编码的值。',
	'Stylify and utility-first CSS cause bloated templates and worse maintainability.': 'Stylify和实用优先的CSS会导致模板臃肿，可维护性更差。',
	'You can define <a href="/en/docs/stylify/compiler#components">components</a>. So there doesn\'t have to be any utility in the template.': '你可以定义<a href="/en/docs/stylify/compiler#components">components</a>。所以模板中不一定要有任何实用性。',
	'There is also the possibility to style <a href="/en/docs/stylify/compiler#customselectors">custom selectors</a>. This way you can eliminate a lot of repeating utilities.': '还有一种可能就是样式<a href="/en/docs/stylify/compiler#customselectors">custom selectors</a>。这样你就可以消除很多重复的实用程序。',
	'From experience, you can bloat your templates with a lot of other stuff => conditions, attributes, dynamic attributes, dynamically loaded templates, etc. Blaming CSS selectors is simply wierd.': '根据经验，你可以用很多其他的东西来膨胀你的模板=>条件、属性、动态属性、动态加载的模板等等。指责CSS选择器是很奇怪的。',
	'Are selectors pre-generated?': '选择器是预先生成的吗？',
	'No. Stylify generates everything on demand.': '没有。Stylify会根据需要生成所有的东西。',
	'If you write <code>color:blue</code>, it will generate <code>.color:blue {}</code>. If you remove it, it will not be generated.': '如果你写了<code>color:blue</code>，它就会生成<code>.color:blue {}</code>。如果你删除它，它将不会被生成。',
	'Components work in the same way.': '组件也以同样的方式工作。',
	'Only custom selectors are generated immediately because it cannot be detected if they are defined or not.': '只有自定义选择器会被立即生成，因为它无法检测到它们是否被定义。',
	'Why the underscore <code>_</code> is used instead of space?': '为什么使用下划线<code>_</code>而不是空格？',
	'This character is the most "visually similar" to space.': '这个字符是与空格最 "视觉相似 "的。',
	'Stylify cannot use spaces in selectors as they are further optimized. Matching selectors with space would be unnecessary difficult and could cause a lot bugs and edge cases that would be hard to solve.': 'Stylify不能在选择器中使用空格，因为它们会被进一步优化。用空格来匹配选择器将是不必要的困难，并可能导致很多难以解决的错误和边缘案例。',
	'The dash <code>-</code> character also cannot be used as in CSS, there are negative values like <code>calc(100% - 24px)</code>, functions like <code>cubic-bezier</code> or properties for animation <code>ease-in-auto</code>.<br>Also to keep things simple and united, the character must be compatible with custom selectors like <code>[&_a]{color:red}</code> where the <code>data-attribute</code> can be defined.': '破折号<code>-</code>字符也不能使用，因为在CSS中，有负值，如<code>calc(100% - 24px)</code>，函数如<code>cubic-bezier</code>或动画的属性<code>ease-in-auto</code>。 <br>同时为了保持简单和统一，该字符必须与自定义选择器兼容，如<code>[&_a]{color:red}</code>，其中可以定义<code>data-attribute</code>。',
	'If the syntax is similar to CSS, why not use some attribute like <code>x-style</code>?': '如果语法与CSS相似，为什么不使用一些属性如<code>x-style</code>呢？',
	'Classes are a native way for devs to use reusable selectors.': '类是开发者使用可重复使用的选择器的一种原生方式。',
	'Class attribute has native js API for <code>add, remove, toggle</code>.': '类属性有原生的js API用于<code>添加、移除、切换</code>。',
	'Attributes like <code>x-style</code> are not valid attributes. The only possible way here would be using <code>data-*</code> attribute': '像<code>x-style</code>这样的属性是无效的。这里唯一可能的方法是使用<code>data-*</code>属性。',
	'Stylify doesn\'t use space for selector because it needs the selector to be complete for further optimization like <strong>chaining a button to padding:4px_8px</strong> and <strong>mangling</strong> <code>.padding:4px_8px => .a</code>': 'Stylify不使用选择器的空间，因为它需要选择器是完整的，以便进一步优化，如<strong>将一个按钮链接到padding:4px_8px</strong>和<strong>mangling</strong><code>.padding:4px_8px =>.a</code>。',
	'Is Stylify CSS a CSS framework?': 'Stylify CSS是一个CSS框架吗？',
	'Stylify CSS is not a CSS framework. It is a library that generates CSS for your web project dynamically based on what you write.': 'Stylify CSS不是一个CSS框架。它是一个库，可以根据你所写的内容为你的网页项目动态地生成CSS。',
	'Stylify CSS uses CSS-like syntax and has no pre-arranged color palettes, sizes, random shortcuts and etc.': 'Stylify CSS使用类似于CSS的语法，没有预先安排的调色板、尺寸、随机快捷键等。',
	'It\'s focused on quick and seamless coding without having to learn CSS framework features and random shortcuts. That is one of the reasons, why the syntax is similar to the CSS.': '它专注于快速和无缝编码，无需学习CSS框架功能和随机快捷键。这就是为什么它的语法与CSS相似的原因之一。',
	'Other Articles': '其他文章',
	'Give as Feedback!': '给予反馈!',
	'Do you like Stylify CSS? Let us know by starring our repo!': '你喜欢Stylify CSS吗？让我们知道，请在我们的repo上签名',
	'Support': '捐献',
	'Docs': '文档',
	'Components & Snippets': '组件和片段',
	'Why Stylify?': '为什么选择Stylify？',
	'Blog': '博客',
	'Playground': '游戏场',
	'FAQ': '常见问题',
	'Text Fields': '文本字段',
	'Switches': '开关',
	'Shadows': '阴影',
	'Paginations': '分页',
	'Navigation with overflow': '溢出式导航',
	'Mobile navigation': '移动导航',
	'Messages': '信息',
	'Lists': '列表',
	'Grids': '网格',
	'Forms': '表格',
	'Dividers': '分割器',
	'Dialogs': '对话框',
	'Containers': '容器',
	'Buttons': '按钮',
	'Breadcrumb': '面包屑',
	'Badges': '徽章',
	'Animations': '动画',
	'Articles - Detail': '文章 - 详细',
	'Articles List - Type 3': '文章列表--类型3',
	'Articles List - Type 2': '文章列表--类型2',
	'Articles List - Type 1': '文章列表--类型1',
	'Media & Logo': '媒体和标志',
	'Packages': '包装',
	'Shortcuts': '快捷方式',
	'Edit this page on Github': '在Github上编辑此页面',
	'HTML': 'HTML',
	'HTML (Components)': 'HTML (组件)',
	'Preview': '预览',
	'Show docs navigation': '显示文档导航',
	'Editor': '编辑',
	'Dev CSS': '开发CSS',
	'Production CSS': '生产CSS',
	'Production HTML': '生产HTML',
	'Why Stylify instead of pure CSS or Inline Styles?': '为什么是Stylify而不是纯CSS或Inline Styles？',
	'Because of <a href="{{link1}}">fewer CSS headaches</a>, <a href="{{link2}}">faster coding</a>, and <a href="{{link3}}">extremely optimized output</a>&nbsp;💎.': '因为<a href="{{link1}}">更少的CSS麻烦</a>，<a href="{{link2}}">更快的编码</a>，以及<a href="{{link3}}">极其优化的输出</a>&nbsp; 💎。',
	'Check out other projects': '查看其他项目',
	'Start using Stylify CSS with your favorite tool in a minute': '在一分钟内开始使用Stylify CSS和您最喜欢的工具',
	'Check out integrations': '查看集成项目',
	'Migrate from other CSS frameworks and CSS-in-JS libraries to Stylify easily': '从其他CSS框架和CSS-in-JS库轻松迁移到Stylify上',
	'Learn more': '了解更多',
	'Latest Blog Posts': '最新的博客文章',
	'Check out more articles': '查看更多文章',
	'Latest Updates': '最新更新',
	'Go ahead. Give it a try!': '去吧。试一试吧!',
	'Get Started': '开始吧',
	'Try it now in the browser or at prepared Stack Blitz playgrounds for Vue, React, Next.js, Nuxt.js, Lit, Svelte and a other tools.': '现在就在你的浏览器中或在Stack Blitz准备好的Vue、React、Next.js、Nuxt.js、Lit、Svelte和其他工具的游乐场中试试Stylify。',
	'Selectors': '选择器',
	'Components': '组件',
	'Global Selectors': '全局选择器',
	'Variables': '变量',
	'Screens': '屏幕',
	'Functions': '功能',
	'Prepared Headless Components': '预备的无头组件',
	'Copy&Paste, unstyled components inspired by the Material Design V3.': '复制&粘贴，无风格的组件，灵感来自于Material Design V3。',
	'Check out components': '查看组件',
	'They talked about Stylify CSS': '曩昔的Stylify CSS',
	'Hide': '隐藏',
	'Show More Shoutouts': '显示更多叫好声',
	'Zero Learning Curve and Faster Coding': '零学习曲线和更快的编码',
	'Instead of writing CSS and switching between HTML and CSS files use CSS-like selectors. The <a href="{{link1}}" class="link">syntax is similar to CSS</a>. Use <code>_</code>&nbsp;instead of space and <code>^</code>&nbsp;for a quote.': '使用类似于CSS的选择器，而不是编写CSS并在HTML和CSS文件之间切换。<a href="{{link1}}" class="link">语法与CSS</a>相似。使用<code>_</code>&nbsp;代替空格，使用<code>^</code>&nbsp;代替引用。',
	'Use <code>_</code>&nbsp;instead of space and <code>^</code>&nbsp;for a quote.': '使用<code>_</code>&nbsp;而不是空格和<code>^</code>&nbsp;来引用。',
	'Automatic and Extremely Tunned CSS and HTML Optimization': '自动和极度调整的CSS和HTML优化',
	'CSS is dynamically generated into CSS files, it is optimized and HTML is mangled. No unused CSS is generated. No CSS purge is needed. No CSS files have to be created. Thanks to inner algorithm for joining selectors, almost no duplicates are generated.': 'CSS被动态地生成到CSS文件中，它被优化，HTML被处理。没有未使用的CSS被生成。不需要清除CSS。不需要创建CSS文件。由于连接选择器的内部算法，几乎没有重复的生成。',
	'Simple CSS Bundles Splitting': '简单的CSS捆绑拆分',
	'CSS bundles can be split into multiple files. It\'s more efficient than combining CSS manually and it also makes the CSS output smaller.': 'CSS捆绑可以被分割成多个文件。这比手动组合CSS更有效，而且还能使CSS输出更小。',
	'Intuitive Configuration': '直观的配置',
	'Define reusable <a href="{{link1}}" class="link font-family:monospace">variables</a>, <a href="{{link2}}" class="link font-family:monospace">components</a> and <a href="{{link3}}" class="link font-family:monospace">custom selectors</a> to simplify the development. Variables values can be different for each screen. This allows you to change it for dark mode/light mode and desktop/mobile.': '定义可重复使用的<a href="{{link1}}" class="link font-family:monospace">变量</a>、<a href="{{link2}}" class="link font-family:monospace">组件</a>和<a href="{{link3}}" class="link font-family:monospace">自定义选择器</a>来简化开发。变量值在每个屏幕上都可以是不同的。这允许你在黑暗模式/光明模式和桌面/移动模式下改变它。',
	'Configure Variables, Components and Global Selectors in files, where they are used': '在文件中配置变量、组件和全局选择器，在它们被使用的地方进行配置',
	'Components, Variables and Global Selectors can be defined within a file, where they are used. This encapsulates component CSS and HTML into one file.': '组件、变量和全局选择器可以被定义在一个文件中，在那里它们被使用。这将组件的CSS和HTML封装到一个文件中。',
	'Extend Functionality with Hooks': '用钩子扩展功能',
	'Hooks can be used extend functionality and modify the output during compilation. There are hooks for <a href="{{link1}}" class="link">Compiler</a>, <a href="{{link2}}" class="link">Bundler</a> and in browser for <a href="{{link3}}" class="link">Runtime</a>.': '钩子可以用来扩展功能并在编译过程中修改输出。在<a href="{{link1}}" class="link">编译器</a>、<a href="{{link2}}" class="link">捆绑器</a>和浏览器中的<a href="{{link3}}" class="link">运行时</a>都有挂钩。',
	'StylifyCSS.com - Write CSS faster': 'StylifyCSS.com - 更快地编写CSS',
	'Write CSS Faster': '更快地编写CSS',
	'<a href="#zero-learning-curve">Zero Learning Curve</a>. Don\'t waste time studying CSS framework': '<a href="#zero-learning-curve">零学习曲线</a>。不要把时间浪费在研究CSS框架上',
	'Less switching between HTML/CSS files': '减少HTML/CSS文件之间的切换',
	'Automagic and <a href="#optimization">Extremely Tunned CSS Optimization</a>': '自动和<a href="#optimization">极度调谐的CSS优化</a>。',
	'Simple CSS <a href="#bundles-splitting">Bundles Splitting</a> for Layouts/Pages': '简单的CSS <a href="#bundles-splitting">布局/页面的捆绑式分割</a>。',
	'Easily <a href="#configuration">Configurable and Extensible</a>': '轻松地<a href="#configuration">可配置和可扩展</a>',
	'Seamless <a href="#installation">Installation</a>': '无缝的<a href="#installation">安装</a>。',
	'<a href="#migration-guides">Migration guides</a> from other frameworks and libraries': '<a href="#migration-guides">迁移指南</a>来自其他框架和库的迁移指南',
	'Prepared, Copy&Paste, <a href="#components">Headless Components</a>': '预备、复制和粘贴、<a href="#components">无头组件</a>等',
	'Installation': '安装',
	'Material Theme Builder Integration Guide': '材料主题生成器集成指南',
	'Check out Material Theme Guide': '查看材料主题指南',
	'Don\'t study frameworks. Focus on coding!': '不要研究框架。专注于编码!',
	'As a developer, you want to code your website easily, quickly, and without spending too much time in docs. Frameworks, CSS-in-JS libraries, and preprocessors have many great features, but they also make development more complex, forcing you to study syntax, randomly named selectors, and how to use different features (which you may forget after a week of holiday 🍹).': '作为一个开发者，你想轻松、快速地编写你的网站代码，并且不需要在文档中花费太多时间。框架、CSS-in-JS库和预处理器有很多伟大的功能，但它们也使开发变得更加复杂，迫使你研究语法、随机命名的选择器，以及如何使用不同的功能（在一周的假期后你可能会忘记这些功能🍹）。',
	'Stylify focuses on simplicity and uses CSS-like selectors that you already know. It\'s like writing pure CSS directly into the markup without the need to switch between files and figure out the names for selectors. If you know CSS, you know how to use Stylify. By trying Stylify, you will find that preprocessors and short selectors are unnecessary.': 'Stylify专注于简单性，使用你已经知道的类似于CSS的选择器。这就像直接把纯CSS写进标记中，而不需要在文件之间切换，也不需要弄清楚选择器的名称。如果你知道CSS，你就知道如何使用Stylify。通过尝试Stylify，你会发现预处理器和简短的选择器是不必要的。',
	'Author of Stylify&nbsp;CSS': 'Stylify&nbsp;CSS的作者',
	'Webdev at <a href="https://slevomat.cz" class="color:$blue1" target="_blank">Slevomat.cz</a>': '<a href="https://slevomat.cz" class="color:$blue1" target="_blank">Slevomat.cz</a>的网站开发员',
	'Go ahead and try Stylify': '去试试Stylify吧',
	'Interested? Go ahead and give Stylify CSS a try!': '有兴趣吗？来吧，让Stylify CSS试试吧',
	'If you find any incorrect or missing information, please contact <a href="mailto:dev@stylifyccss.com">dev@stylifycss.com</a> or edit this page on Github.': '如果您发现任何不正确或遗漏的信息，请联系<a href="mailto:dev@stylifyccss.com">dev@stylifycss.com</a>或在Github上编辑此页面。',
	'Integrate Stylify into your favorite tool': '将Stylify整合到您最喜爱的工具中',
	'Stylify can be used in various tools. Pick your favorite tool and start using Stylify CSS in a minute.': 'Stylify可以在各种工具中使用。挑选你喜欢的工具，在一分钟内开始使用Stylify CSS。',
	'Speed up development with prepared Headless CSS Components': '用准备好的无头的CSS组件加快开发速度',
	'Stylify doesn\'t provide any predefined CSS <a href="{{link1}}">Components</a> by default. However, it provides two ways to define them and there is a set of copy&paste <a href="{{link2}}">Headless Components</a> you can use in your project.': 'Stylify默认没有提供任何预定义的CSS<a href="{{link1}}">组件</a>。但是，它提供了两种方法来定义它们，并且有一套复制和粘贴的<a href="{{link2}}">无头组件</a>，您可以在您的项目中使用。',
	'Components can be configured in a file (using <a href="{{link1}}">content options</a>), where they are used, or globally within a $projectConfig.': '组件可以在文件（使用<a href="{{link1}}">内容选项</a>）中配置，在使用它们的地方，或者在$projectConfig中全局配置。',
	'Example with the configuration within a file. The content between <code>stylify-components</code> expects javascript object without surrounding brackets': '以文件内的配置为例。<code>stylify-components</code>之间的内容期待没有周围括号的javascript对象',
	'Example in a global compiler config': '全局编译器配置中的例子',
	'Usage': '使用方法',
	'When defining component, you can also use nesting syntax like in SCSS. This works in a global config and also in the content options': '当定义组件时，你也可以像在SCSS中那样使用嵌套语法。这在全局配置和内容选项中都适用。',
	'Stylify uses CSS-like selectors <span class="color:$blue1 font-family:monospace">color:blue</span>, <span class="color:$blue1 font-family:monospace">width:640px</span>, <span class="color:$blue1 font-family:monospace">margin:0_auto</span> along with <a href="{{link1}}" class="color:$blue1 font-family:monospace">variables</a>, <a href="{{link2}}" class="color:$blue1 font-family:monospace">components</a>, <a href="{{link3}}" class="color:$blue1 font-family:monospace">custom selectors</a> to generate optimized CSS dynamically based on what you write.': 'Stylify使用类似CSS的选择器<span class="color:$blue1 font-family:monospace">color:blue</span>, <span class="color:$blue1 font-family:monospace">width:640px</span>, <span class="color:$blue1 font-family:monospace">margin:0_auto</span>连同<a href="{{link1}}" class="color:$blue1 font-family:monospace">变量</a>、<a href="{{link2}}" class="color:$blue1 font-family:monospace">组件</a>、<a href="{{link3}}" class="color:$blue1 font-family:monospace">自定义选择器</a>以根据您编写的内容动态地生成优化的CSS。',
	'Stylify provides <a href="{{link1}}">custom selectors</a> with which you can style elements globally. These selectors can be defined directly within the class attribute or in the global config or in a file where they are used using <a href="{{link2}}">content options</a>.': 'Stylify提供了<a href="{{link1}}">自定义选择器</a>，您可以用它来对元素进行全局样式。这些选择器可以直接在类属性中定义，或在全局配置中定义，或在文件中使用<a href="{{link2}}">内容选项</a>。',
	'Example with the class attribute': '使用class属性的例子',
	'The syntax pattern in the class attribute looks like this': '类属性中的语法模式看起来像这样',
	'The <code>_</code> (underscore) is used instead of space in both CSS and Stylify selectors and the <code>&</code> character always refers to the current element.': '在CSS和Stylify的选择器中，<code>_</code>（下划线）被用来代替空格，<code>&</code>字符总是指的是当前元素。',
	'The same code but in the global config would look like this': '同样的代码，但在全局配置中会是这样的',
	'When defining `customSelectors` in the global config on through <a href="{{link1}}">content options</a>, the syntax lets you use a <a href="{{link2}}">nesting feature</a>. The <code>&</code> characters refers to the upper level like in the SCSS.': '当在全局配置中通过<a href="{{link1}}">内容选项</a>定义`customSelectors`时，该语法让你使用<a href="{{link2}}">嵌套功能</a>。<code>&</code>字符指的是像SCSS中的上层。',
	'Usage of the global config': '全局配置的用法',
	'Stylify CSS is a library that uses native CSS-like selectors <code>color:blue</code>, <code>width:640px</code>, <code>margin:0_auto</code> along with <a href="{{link1}}">variables</a>, <a href="{{link2}}">components</a>, <a href="{{link3}}">custom selectors</a> to generate optimized CSS dynamically based on what you write.': 'Stylify CSS是一个库，它使用原生的类似于CSS的选择器<code>color:blue</code>, <code>width:640px</code>, <code>margin:0_auto</code>以及<a href="{{link1}}">变量</a>、<a href="{{link2}}">组件</a>、<a href="{{link3}}">自定义选择器</a>来根据你编写的内容动态生成优化的CSS。',
	'Stylify uses CSS-like utilities, that can be used directly within the class attribute. There are no shortcuts by default and selectors cannot contain a space because of the further optimization': 'Stylify使用类似CSS的工具，可以直接在class属性中使用。默认情况下没有捷径，选择器不能包含空格，因为要进一步优化',
	'When some selectors have the same pseudo-class or even media query, you can group them like this': '当一些选择器有相同的伪类甚至是媒体查询时，你可以像这样分组',
	'In Stylify, there is nothing like a "theme", neither extend section in $projectConfig. There are only variables.': '在Stylify中，没有类似 "主题 "的东西，也没有$projectConfig中的扩展部分。只有变量。',
	'<a href="{{link1}}">Variables</a> can be defined in two ways in Stylify. In a global config or within a file where they are used via <a href="{{link2}}">content options</a>.': '<a href="{{link1}}">变量</a>在Stylify中可以通过两种方式定义。在全局配置中或在一个文件中，通过<a href="{{link2}}">内容选项</a>使用。',
	'Example with global config': '全局配置的例子',
	'Variables can also be defined based on media query': '变量也可以根据媒体查询来定义',
	'Example with content options': '使用内容选项的例子',
	'When you need to pass a color into the component using props, use native CSS variables': '当你需要使用道具将颜色传递给组件时，可以使用本地的CSS变量',
	'We just need to tell Stylify to replace variables with CSS variables instead of their value and that the <code>localTextColor</code> is external': '我们只需要告诉Stylify用CSS变量来代替变量的值，并告诉他<code>localTextColor</code>是外部变量。',
	'The external variable can also be defined only in the file where it is used': '外部变量也可以只在使用它的文件中定义',
	'Subscribe via e-mail': '通过电子邮件订阅',
	'Subscribe': '订阅',
	'Latest news about Stylify CSS.<br>Once a month. One click unsubscribe.': '关于Stylify CSS的最新消息。<br>每月一次。一键取消订阅。',
	'Tech Stack': '技术栈',
	'How to use and modify Stylify CSS components': '如何使用和修改Stylify CSS组件',
	'When you want to use some component do the following': '当你想使用一些组件时，请按以下步骤操作',
	'Copy&Paste component HTML. If you use the components approach, don\'t forget to copy their definition within the comments. Copy this definition exactly as is into a comment, if you plan to use it in one file or want the whole definition at one place and not in a global $projectConfig. Otherwise copy the content between <code>stylify-components</code> tags into the Compiler $projectConfig. Don\'t forget to copy <code>script tag</code>, if the compoenent has any.': '复制&粘贴组件的HTML。如果你使用组件的方法，别忘了在注释中复制它们的定义。如果你打算在一个文件中使用它，或者想把整个定义放在一个地方，而不是放在全局的$projectConfig中，就把这个定义原封不动地复制到注释中。否则就把<code>stylify-components</code>标签之间的内容复制到编译器$projectConfig中。不要忘记复制<code>script标签</code>，如果编译器有任何内容。',
	'Adjust it to your needs: Change <code>font-size</code>, <code>padding</code>, <code>width</code>, <code>height</code>... Variables like <code>$color</code> can be removed/modified, etc.': '根据你的需要来调整它： 改变<code>字体大小</code>，<code>padding</code>，<code>width</code>，<code>height</code>... 像<code>$color</code>这样的变量可以被删除/修改，等等。',
	'Check if you have copied everything necessary. Scripts, Components definition.': '检查你是否已经复制了所有必要的东西。脚本，组件定义。',
	'In case you don\'t have any color palette yet, you might want to check out the guide for <a href="{{link1}}" class="color:$blue1">Material Theme Builder</a>.': '如果你还没有任何调色板，你可能想看看<a href="{{link1}}" class="color:$blue1">Material Theme Builder</a>的指南。',
	'Try it on StackBlitz': '在StackBlitz上试试吧',
	'Define <a href="{{link1}}" class="color:$blue1">Variables</a>, <a href="{{link2}}" class="color:$blue1">Components</a>, <a href="{{link3}}" class="color:$blue1">Custom selectors</a>.': '定义<a href="{{link1}}" class="color:$blue1">变量</a>，<a href="{{link2}}" class="color:$blue1">组件</a>，<a href="{{link3}}" class="color:$blue1">自定义选择器</a>。',
	'🚀 Learn <a href="{{link1}}">how to get started</a>': '🚀 了解<a href="{{link1}}">如何开始</a>。',
	'🔌 Check out <a href="{{link1}}">@stylify/unplugin configuration</a>': '🔌 查看<a href="{{link1}}">@stylify/unplugin配置</a>。',
	'🔌 Check out <a href="{{link1}}"">@stylify/bundler configuration</a>': '🔌 查看<a href="{{link1}}">@stylify/bundler配置</a',
	'⚙️ Or configure Stylify right away': '⚙️ 或立即配置Stylify',
	'Macros and Selectors': '宏和选择器',
	'Selectors Mangling': '选择器的小型化',
	'Code faster': '编码更快',
	'Use CSS-like selectors. Don\'t study framework': '使用类似CSS的选择器。不要研究框架',
	'Add <a href="{{link1}}" class="color:$blue1">custom macros</a> like <code>ml:2</code>.': '添加<a href="{{link1}}" class="color:$blue1">自定义宏</a>，如<code>ml:2</code>。',
	'CSS <a href="{{link1}}" class="color:$blue1">variables can differ for each screen</a>.': 'CSS <a href="{{link1}}" class="color:$blue1">变量可以在每个屏幕上有所不同</a>。',
	'Variables can be injected into CSS as CSS variables.': '变量可以作为CSS变量注入CSS中。',
	'CSS <a href="{{link1}}" class="color:$blue1">variables can differ for each screen</a>': 'CSS <a href="{{link1}}" class="color:$blue1">变量可以针对每个屏幕而不同</a>。',
	'Use <a href="{{link1}}" class="color:$blue1">helpers</a> like <code>color:lighten(#000,10)</code>.': '使用<a href="{{link1}}" class="color:$blue1">帮助器</a>，如<code>color:lighten(#000,10)</code>。',
	'Style any device with dynamic <a href="{{link1}}" class="color:$blue1">screens</a>': '用动态的<a href="{{link1}}" class="color:$blue1">screens</a>为任何设备设置样式。',
	'Get extremely optimized CSS output': '获得极其优化的CSS输出',
	'Split bundles for page/layout/component.': '为页面/布局/组件分割捆绑。',
	'Selectors minification<code>.color:blue</code> =&gt; <code>.a</code>.': '选择器最小化<code>.color:blue</code> =&gt; <code>.a</code>。',
	'No purge needed. CSS is generated on demand.': '不需要清除。CSS是按需生成的。',
	'Almost zero duplicated <code>property:value</code>.': '几乎没有重复的<code>property:value</code>。',
	'Mark areas that <a href="{{link1}}" class="color:$blue1">should not be processed</a>.': '标记<a href="{{link1}}" class="color:$blue1">不应该被处理的区域</a>。',
	'Use hooks to extend functionality': '使用钩子来扩展功能',
	'Copy&Paste Integration': '复制&粘贴集成',
	'Works with any framework like <a href="{{link1}}" class="color:$blue1">Nuxt.js</a>, <a href="{{link2}}" class="color:$blue1">Next.js</a>, <a href="{{link3}}" class="color:$blue1">Astro</a>. <a href="{{link4}}" class="color:$blue1">SolidJS</a>, <a href="{{link5}}" class="color:$blue1">Qwik</a>, <a href="{{link6}}" class="color:$blue1">Symfony</a>, <a href="{{link7}}" class="color:$blue1">Laravel</a>.': '可与任何框架配合使用，如<a href="{{link1}}" class="color:$blue1">Nuxt.js</a>、<a href="{{link2}}" class="color:$blue1">Next.js</a>、<a href="{{link3}}" class="color:$blue1">Astro</a>。<a href="{{link4}}" class="color:$blue1">SolidJS</a>, <a href="{{link5}}" class="color:$blue1">Qwik</a>, <a href="{{link6}}" class="color:$blue1">Symfony</a>, <a href="{{link7}}" class="color:$blue1">Laravel</a>。',
	'Integrable into bundlers like <a href="{{link1}}" class="color:$blue1">Webpack</a>, <a href="{{link2}}" class="color:$blue1">Rollup</a>, <a href="{{link3}}" class="color:$blue1">Vite.js</a>.': '可集成到捆绑器中，如<a href="{{link1}}" class="color:$blue1">Webpack</a>, <a href="{{link2}}" class="color:$blue1">Rollup</a>, <a href="{{link3}}" class="color:$blue1">Vite.js</a>。',
	'Generated CSS can be used within SCSS, Less, Stylus.': '生成的CSS可以在SCSS、Less、Stylus中使用。',
	'CSS variables can be exported into an external file.': 'CSS变量可以导出到外部文件中。',
	'Stylify CSS News and Blog posts RSS feed': 'Stylify CSS新闻和博客文章RSS订阅',
	'Code your website faster with CSS-like utilities': '使用类似于CSS的工具更快编写网站代码',
	'Stylify CSS uses CSS-like selectors to generate optimized utility-first CSS. Code your website faster. Don\'t study CSS framework. Focus on coding.': 'Stylify CSS使用类似CSS的选择器来生成优化的实用程序优先的CSS。更快地编码你的网站。不要研究CSS框架。专注于编码。',
	'Page not found.': '没有找到页面。',
	'Ooops! The page you are looking for is probably using some other CSS framework and is still loading or it doesn\'t exist.': '糟糕! 你要找的页面可能使用了其他的CSS框架，而且还在加载中，或者它不存在。',
	'Return to the main page': '返回主页面',
	'Where to go next?': '下一步该去哪里',
	'Stylify CSS Blog': 'Stylify CSS博客',
	'adding-a-variable': '添加一个变量',
	'defining-a-component': '定义一个组件',
	'custom-selectors': '自定义选择器',
	'problems-stylify-css-tries-to-solve': 'stylifycss试图解决的问题',
	'faster-coding': '更快的编码',
	'output-optimization': '输出优化',
	'quick-start': '快速入门',
	'hooks': '钩子',
	'nested-syntax-for-custom-selectors': '自定义选择器的嵌套语法'
}
