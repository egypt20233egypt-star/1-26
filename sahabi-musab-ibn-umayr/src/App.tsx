import { useState } from 'react'

// Types
interface TabProps {
  id: string
  label: string
  icon: string
}

const tabs: TabProps[] = [
  { id: 'overview', label: 'نظرة عامة', icon: '📋' },
  { id: 'podcast', label: 'البودكاست', icon: '🎙️' },
  { id: 'characters', label: 'الشخصيات', icon: '👥' },
  { id: 'quran', label: 'الآيات والأحاديث', icon: '📖' },
  { id: 'fiqh', label: 'أحكام الجمعة', icon: '🕌' },
  { id: 'questions', label: 'الأسئلة', icon: '❓' },
  { id: 'benefits', label: 'الفوائد', icon: '💎' },
  { id: 'stories', label: 'القصص', icon: '📚' },
  { id: 'analysis', label: 'التحليل', icon: '🔍' },
]

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 py-8 px-4 border-b border-emerald-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-5xl mb-4">🕌</div>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-300 mb-3">
            مصعب بن عمير: من الترف إلى التضحية
          </h1>
          <p className="text-xl text-emerald-400 mb-4">وأحكام صلاة الجمعة</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['مصعب بن عمير', 'سفير الإسلام', 'الزهد', 'الجمعة', 'التبكير', 'الخطبة', 'المفلس', 'الدعوة'].map((tag) => (
              <span key={tag} className="bg-emerald-800/50 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto py-2 gap-1 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'podcast' && <PodcastSection />}
        {activeTab === 'characters' && <CharactersSection />}
        {activeTab === 'quran' && <QuranHadithSection />}
        {activeTab === 'fiqh' && <FiqhSection />}
        {activeTab === 'questions' && <QuestionsSection />}
        {activeTab === 'benefits' && <BenefitsSection />}
        {activeTab === 'stories' && <StoriesSection />}
        {activeTab === 'analysis' && <AnalysisSection />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6 text-center text-gray-500">
        <p>📂 المصدر: ملف "الاتنين 26-1"</p>
        <p className="mt-2 text-emerald-500">سبحانك اللهم وبحمدك، نشهد أن لا إله إلا أنت، نستغفرك ونتوب إليك</p>
      </footer>
    </div>
  )
}

// Section Components
function OverviewSection() {
  return (
    <div className="space-y-8">
      {/* الرسالة المركزية */}
      <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-2xl p-6 border border-emerald-700">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
          <span>🎯</span> الرسالة المركزية
        </h2>
        <p className="text-xl text-gray-200 leading-relaxed">
          "الإيمان يُهوّن التضحية، والقيمة عند الله لا عند الناس"
        </p>
        <p className="text-gray-400 mt-3">
          درس يجمع بين سيرة مصعب بن عمير كنموذج للتضحية والزهد، وأحكام صلاة الجمعة تكملة للدرس السابق.
        </p>
      </div>

      {/* خريطة الدرس */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
          <span>🗺️</span> خريطة الدرس
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'المقدمة والدعاء',
              icon: '📖',
              goal: 'الافتتاح بالدعاء',
              points: ['دعاء طلب العلم', 'التعوذ والتحصين'],
              action: 'استشعار أهمية المجلس'
            },
            {
              title: 'سيرة مصعب بن عمير',
              icon: '👤',
              goal: 'التعلم من الصحابة',
              points: ['من الترف للزهد', 'أول سفير في الإسلام'],
              action: 'التضحية في سبيل الدين'
            },
            {
              title: 'قصة زاهر بن حرام',
              icon: '💡',
              goal: 'تواضع النبي ﷺ',
              points: ['"ولكنك عند الله لست بكاسد"', 'قيمة المسلم عند ربه'],
              action: 'الاعتزاز بالإسلام'
            },
            {
              title: 'حديث المفلس',
              icon: '⚠️',
              goal: 'التحذير من المظالم',
              points: ['حسنات كالجبال تضيع', 'الميزان بالحسنات والسيئات'],
              action: 'حفظ اللسان واليد'
            },
            {
              title: 'أحكام الجمعة',
              icon: '🕌',
              goal: 'الفقه العملي',
              points: ['التبكير والثواب', 'حرمة الكلام أثناء الخطبة'],
              action: 'التطبيق الصحيح للسنة'
            },
            {
              title: 'أسئلة الحاضرين',
              icon: '❓',
              goal: 'إزالة الإشكالات',
              points: ['تحية المسجد', 'المسح على الخف'],
              action: 'الفهم السليم للأحكام'
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-lg font-bold text-emerald-300">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-2">🎯 الهدف: {item.goal}</p>
              <ul className="text-sm text-gray-300 space-y-1 mb-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="bg-emerald-900/30 rounded-lg p-2 text-sm text-emerald-400">
                ✅ الأثر العملي: {item.action}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 10 نقاط رئيسية */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
          <span>📌</span> ملخص 10 نقاط رئيسية
        </h2>
        <div className="grid gap-3">
          {[
            { num: 1, icon: '🌟', text: 'مصعب بن عمير أول سفير في الإسلام - أرسله النبي ﷺ للدعوة في المدينة' },
            { num: 2, icon: '💰', text: 'من الترف للزهد - كان أنعم فتيان مكة، ثم لبس الثياب المرقعة' },
            { num: 3, icon: '😢', text: 'بكاء النبي ﷺ - لما رأى حال مصعب بعد الإسلام' },
            { num: 4, icon: '⚠️', text: 'المفلس الحقيقي - من يأتي بحسنات كالجبال لكنه ظلم الناس' },
            { num: 5, icon: '🕌', text: 'إدراك الجمعة - بإدراك ركعة (الركوع) مع الإمام' },
            { num: 6, icon: '🚫', text: 'حرمة الكلام - أثناء الخطبة حتى لو قلت "انصت"' },
            { num: 7, icon: '🎁', text: 'ثواب التبكير - الساعة الأولى بدنة، الثانية بقرة...' },
            { num: 8, icon: '🧼', text: 'سنن الجمعة - الاغتسال، التطيب، لبس أحسن الثياب' },
            { num: 9, icon: '📖', text: 'سورة الكهف - من قرأها سطع له نور من تحت قدمه للسماء' },
            { num: 10, icon: '🤲', text: 'تحية المسجد - تُصلى ركعتين خفيفتين حتى لو الإمام يخطب' },
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-4 bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-emerald-600 transition-colors">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-lg">
                {item.num}
              </div>
              <span className="text-2xl">{item.icon}</span>
              <p className="text-gray-200 flex-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* الأفكار الرئيسية */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
          <span>💡</span> الأفكار الرئيسية
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'الإيمان يُهوّن التضحية بالدنيا ← مصعب نموذج',
            'قيمتك عند الله لا عند الناس ← "لست بكاسد"',
            'الحسنات تضيع بالمظالم ← حديث المفلس',
            'التبكير للجمعة فيه أجر عظيم ← بدنة!',
            'الإنصات للخطبة واجب ← حتى "انصت" ممنوعة',
            'الزينة في الجمعة سنة ← أحسن الثياب',
            'الدعوة مسؤولية ← مصعب نشر الإسلام',
            'الصبر على البلاء ← أشد الناس بلاء الأنبياء',
          ].map((idea, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-700 flex items-center gap-3">
              <span className="text-emerald-500 text-xl">✦</span>
              <p className="text-gray-200">{idea}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PodcastSection() {
  return (
    <div className="space-y-8">
      {/* المقدمة */}
      <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-6 border border-purple-700">
        <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
          <span>🎧</span> بودكاست: من العطور للثياب المرقعة
        </h2>
        <p className="text-xl text-gray-200">
          النهارده هنحكي قصة واحد من أعظم الصحابة... واحد غيّر حياته 180 درجة!
        </p>
      </div>

      {/* المشاهد */}
      <div className="space-y-6">
        {/* المشهد 1 */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">المشهد 1</span>
            <h3 className="text-xl font-bold text-emerald-300">الفتى المدلل</h3>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              تخيل معايا شوارع مكة قبل الإسلام...
            </p>
            <p className="text-gray-300 leading-relaxed">
              شاب في العشرينات من عمره... <span className="text-emerald-400 font-bold">أغنى أغنياء مكة</span>...
            </p>
            <p className="text-gray-300 leading-relaxed">
              بيمشي في الشارع والناس بتعرفه من <span className="text-emerald-400 font-bold">ريحته بس</span>! 😲
            </p>
            <p className="text-gray-300 leading-relaxed">
              العطر بتاعه فاضل في الطريق بعد ما يمشي!
            </p>
            <div className="bg-emerald-900/30 rounded-lg p-3 border border-emerald-700">
              <p className="text-emerald-300 font-bold">
                ده... مصعب بن عمير! 👃
              </p>
            </div>
            <blockquote className="border-r-4 border-emerald-500 pr-4 text-gray-400 italic">
              "لقد مر مصعب من هذا الطريق!"
            </blockquote>
          </div>
        </div>

        {/* المشهد 2 */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">المشهد 2</span>
            <h3 className="text-xl font-bold text-emerald-300">سحابة الإسلام</h3>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              في يوم من الأيام... سمع مصعب إن في حاجة اسمها <span className="text-emerald-400 font-bold">"الإسلام"</span>!
            </p>
            <p className="text-gray-300 leading-relaxed">
              في راجل اسمه <span className="text-emerald-400 font-bold">محمد ﷺ</span> بيدعو لعبادة إله واحد!
            </p>
            <div className="bg-gray-700 rounded-lg p-3">
              <p className="text-gray-300">
                <span className="text-yellow-400">مصعب:</span> "إيه ده؟ احنا شغالين نعبد الأصنام!"
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              بس فضوله خلاه يروح يسمع... دخل <span className="text-emerald-400 font-bold">دار الأرقم</span>... المكان السري للمسلمين...
            </p>
            <div className="bg-emerald-900/30 rounded-lg p-3 border border-emerald-700 text-center">
              <p className="text-emerald-300 font-bold text-xl">
                سمع القرآن... ودخل نور الإيمان قلبه! ✨
              </p>
            </div>
          </div>
        </div>

        {/* المشهد 3 */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">المشهد 3</span>
            <h3 className="text-xl font-bold text-red-300">الابتلاء</h3>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              بس في مشكلة... <span className="text-red-400 font-bold">أمه!</span> 😰
            </p>
            <p className="text-gray-300 leading-relaxed">
              أمه كانت شخصية قوية جداً... "تفوق الكثير من الرجال"!
            </p>
            <p className="text-gray-300 leading-relaxed">
              واحد اسمه <span className="text-yellow-400">عثمان بن طلحة</span> شافه وهو داخل دار الأرقم!
            </p>
            <p className="text-gray-300 leading-relaxed">
              وشافه مرة تانية وهو <span className="text-emerald-400 font-bold">بيصلي</span>!
            </p>
            <p className="text-gray-300 leading-relaxed">
              راح جري لأمه وقالها!
            </p>
            <div className="bg-red-900/30 rounded-lg p-3 border border-red-700">
              <p className="text-red-300">
                أمه جت تضربه... بس <span className="font-bold">نور الإيمان</span> كان باين على وشه!
              </p>
              <p className="text-red-300 mt-2">
                إداله <span className="font-bold">هيبة</span> خلتها تتراجع!
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <p className="text-gray-300 text-xl">
                🔒 <span className="font-bold">حبسته!</span>
              </p>
              <p className="text-gray-400 mt-2">
                ومنعته من <span className="text-red-400">كل الميراث</span>!
              </p>
            </div>
          </div>
        </div>

        {/* المشهد 4 */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">المشهد 4</span>
            <h3 className="text-xl font-bold text-emerald-300">التحول العظيم</h3>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              بعد فترة... مصعب خرج من الحبس... بس بقى شكله <span className="text-emerald-400 font-bold">مختلف تماماً</span>!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded-lg p-3 text-center">
                <p className="text-gray-400 text-sm mb-1">قبل</p>
                <p className="text-yellow-400">أغلى الماركات</p>
                <p className="text-yellow-400">أفخم العطور</p>
              </div>
              <div className="bg-emerald-900/30 rounded-lg p-3 text-center border border-emerald-700">
                <p className="text-gray-400 text-sm mb-1">بعد</p>
                <p className="text-emerald-400">هدوم مرقعة 🪡</p>
                <p className="text-emerald-400">زاهد في الدنيا</p>
              </div>
            </div>
            <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700">
              <p className="text-blue-300">
                النبي ﷺ شافه... افتكر حاله زمان... الترف والنعيم...
              </p>
              <p className="text-blue-300 mt-2">
                وشاف حاله دلوقتي... الثياب المرقعة...
              </p>
              <p className="text-blue-300 mt-2 text-xl font-bold text-center">
                😢 فذرفت عيناه!
              </p>
            </div>
            <blockquote className="bg-emerald-900/30 border-r-4 border-emerald-500 pr-4 py-3 rounded-lg">
              <p className="text-emerald-300 font-bold text-lg">
                "أنتم اليوم خير منكم يومئذ!"
              </p>
              <p className="text-gray-400 text-sm mt-1">
                يعني: إنتوا دلوقتي أحسن مليون مرة!
              </p>
            </blockquote>
          </div>
        </div>

        {/* المشهد 5 */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">المشهد 5</span>
            <h3 className="text-xl font-bold text-emerald-300">أول سفير</h3>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              بعد بيعة العقبة الأولى... الأنصار قالوا للنبي ﷺ:
            </p>
            <blockquote className="border-r-4 border-yellow-500 pr-4 text-yellow-300">
              "ابعث إلينا رجلاً من قِبلك فليدعو الناس!"
            </blockquote>
            <p className="text-gray-300 leading-relaxed">
              النبي ﷺ اختار مين؟
            </p>
            <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-700 text-center">
              <p className="text-emerald-300 font-bold text-2xl">مصعب! ✨</p>
              <p className="text-emerald-400 mt-2">أول سفير في الإسلام!</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              مصعب راح المدينة... وبدأ يعلمهم <span className="text-emerald-400 font-bold">القرآن والسنة</span>...
            </p>
            <p className="text-gray-300 leading-relaxed">
              كان بيروح لهم <span className="text-emerald-400 font-bold">في بيوتهم</span>!
            </p>
            <div className="bg-emerald-900/30 rounded-lg p-3 border border-emerald-700">
              <p className="text-emerald-300">
                والنتيجة؟
              </p>
              <p className="text-emerald-300 font-bold mt-2">
                "فقلّ دار من دور الأنصار إلا وقد أسلم أشرافهم!"
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <p className="text-gray-300">
                وبقى لقبه: <span className="text-emerald-400 font-bold text-xl">"المُقرئ" 📖</span>
              </p>
            </div>
          </div>
        </div>

        {/* قصة زاهر */}
        <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 border border-yellow-700">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <span>🎬</span> فاصل: قصة زاهر بن حرام
          </h2>
          <div className="bg-gray-800 rounded-xl p-4 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              زاهر ده كان صحابي بسيط... كان بييجي من الريف يبيع <span className="text-yellow-400">سمنة وجبنة</span>!
            </p>
            <p className="text-gray-300 leading-relaxed">
              يوم من الأيام زاهر راح السوق يبيع... النبي ﷺ جاء من <span className="text-emerald-400 font-bold">وراه</span>!
            </p>
            <p className="text-gray-300 leading-relaxed">
              وحضنه! 🤗 وقال:
            </p>
            <blockquote className="bg-yellow-900/30 border-r-4 border-yellow-500 pr-4 py-3 rounded-lg">
              <p className="text-yellow-300 font-bold text-lg">"من يشتري العبد؟!"</p>
            </blockquote>
            <p className="text-gray-300 leading-relaxed">
              زاهر مش عارف مين ده! لما عرف إنه النبي ﷺ قال:
            </p>
            <blockquote className="bg-gray-700 border-r-4 border-gray-500 pr-4 py-3 rounded-lg">
              <p className="text-gray-300">"يا رسول الله، إذاً تجدني كاسداً!"</p>
              <p className="text-gray-400 text-sm mt-1">يعني: مين هيشتريني؟ أنا مش حاجة!</p>
            </blockquote>
            <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-700 text-center">
              <p className="text-emerald-300 font-bold text-xl">
                النبي ﷺ قال:
              </p>
              <p className="text-emerald-300 font-bold text-2xl mt-2">
                "ولكنك عند الله لست بكاسد!" ✨
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <p className="text-gray-300 font-bold">
                الدرس: قيمتك عند <span className="text-emerald-400">الله</span>... مش عند الناس!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CharactersSection() {
  const characters = [
    {
      name: 'النبي محمد ﷺ',
      type: 'النبي الخاتم',
      icon: '⭐',
      color: 'emerald',
      reason: 'القدوة والمربي ومصدر التشريع',
      film: [
        'داعب زاهر في السوق ← قال "من يشتري العبد"',
        'زاهر قال "تجدني كاسداً"',
        'قال "ولكنك عند الله لست بكاسد"',
        'رأى مصعب بثيابه المرقعة ← بكى',
        'قال "أنتم اليوم خير"',
      ],
      lessons: [
        'تواضعه مع أصحابه',
        'مداعبته لا تخرج عن الحق',
        'تقديره للتضحية في سبيل الله',
      ],
    },
    {
      name: 'مصعب بن عمير',
      type: 'صحابي - أول سفير في الإسلام',
      icon: '🌟',
      color: 'blue',
      reason: 'بطل الدرس الأساسي - نموذج التضحية',
      film: [
        'أنعم فتيان مكة ← يُعرف بعطره',
        'سمع عن الإسلام ← أسلم سراً',
        'أمه حبسته ← صبر',
        'زهد في الدنيا ← لبس الثياب المرقعة',
        'بكى النبي له ← بُعث للمدينة',
        'أسلم على يديه خلق ← لُقب بـ"المُقرئ"',
      ],
      lessons: [
        'الإيمان يُهون كل شيء',
        'التضحية بالدنيا للآخرة',
        'الصبر على البلاء',
      ],
    },
    {
      name: 'زاهر بن حرام',
      type: 'صحابي من أهل البادية',
      icon: '💛',
      color: 'yellow',
      reason: 'قصة تواضع النبي ﷺ وقيمة المؤمن',
      film: [
        'كان يبيع السمن والجبن',
        'جاء للنبي ← النبي أخذه من الخلف',
        'قال "من يشتري العبد"',
        'قال "تجدني كاسداً"',
        'النبي: "ولكنك عند الله لست بكاسد"',
      ],
      lessons: [
        'القيمة عند الله لا عند الناس',
        'لا تحتقر نفسك',
        'المسلم عزيز بإسلامه',
      ],
    },
    {
      name: 'عمرو بن الجموح',
      type: 'صحابي',
      icon: '🏃',
      color: 'purple',
      reason: 'أسلم على يد مصعب - قصة الصنم',
      film: [
        'كان عنده صنم في البيت',
        'الشباب أخذوه ورموه في البئر',
        'غسله وأرجعه ← تكرر الموضوع',
        'المرة الثالثة ربطوا في رقبته جيفة كلب',
        'قال "لو كنت تدافع عن نفسك!"',
        'أعلن إسلامه',
      ],
      lessons: [
        'الله يهيئ أسباب الهداية',
        'الصنم لا ينفع ولا يضر',
        'التفكر يقود للإيمان',
      ],
    },
    {
      name: 'أم مصعب',
      type: 'من أهل مكة',
      icon: '👩',
      color: 'red',
      reason: 'سبب ابتلاء مصعب',
      film: [
        'كانت شديدة الشخصية',
        'علمت بإسلامه ← همت بضربه',
        'منعها نور الإيمان ← حبسته',
        'منعته من الميراث',
      ],
      lessons: [
        'الابتلاء من الأقربين أشد',
        'الثبات رغم الضغوط العائلية',
        'الإيمان يعطي هيبة',
      ],
    },
    {
      name: 'سيدنا أيوب',
      type: 'نبي',
      icon: '🤲',
      color: 'teal',
      reason: 'مثال في الصبر على البلاء',
      film: [
        'ابتلاه الله في جسده وماله',
        'صبر ولم يجزع',
        'الله أثنى عليه: "إنا وجدناه صابراً نعم العبد"',
      ],
      lessons: [
        'الصبر مفتاح الفرج',
        'الرضا بالقدر',
        'الثناء الإلهي للصابرين',
      ],
    },
    {
      name: 'الحسن البصري',
      type: 'تابعي',
      icon: '📚',
      color: 'indigo',
      reason: 'تعليقه على حنين الجذع',
      film: [
        'تأمل في قصة حنين الجذع للنبي',
        'وعظ الناس',
        'قال: "لا يكن الجذع أفضل منك"',
      ],
      lessons: [
        'الجماد يشتاق للنبي والمؤمن أولى',
        'التأمل في القصص للاتعاظ',
        'البلاغة في الموعظة',
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      emerald: { bg: 'bg-emerald-900/30', border: 'border-emerald-700', text: 'text-emerald-400' },
      blue: { bg: 'bg-blue-900/30', border: 'border-blue-700', text: 'text-blue-400' },
      yellow: { bg: 'bg-yellow-900/30', border: 'border-yellow-700', text: 'text-yellow-400' },
      purple: { bg: 'bg-purple-900/30', border: 'border-purple-700', text: 'text-purple-400' },
      red: { bg: 'bg-red-900/30', border: 'border-red-700', text: 'text-red-400' },
      teal: { bg: 'bg-teal-900/30', border: 'border-teal-700', text: 'text-teal-400' },
      indigo: { bg: 'bg-indigo-900/30', border: 'border-indigo-700', text: 'text-indigo-400' },
    }
    return colors[color] || colors.emerald
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
        <span>👥</span> بطاقات الشخصيات
      </h2>

      {characters.map((char, idx) => {
        const colors = getColorClasses(char.color)
        return (
          <div key={idx} className={`${colors.bg} rounded-2xl p-6 border ${colors.border}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{char.icon}</span>
              <div>
                <h3 className={`text-xl font-bold ${colors.text}`}>{char.name}</h3>
                <p className="text-gray-400 text-sm">{char.type}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-xl p-4">
                <h4 className="text-sm font-bold text-gray-400 mb-2">🎯 سبب الذكر</h4>
                <p className="text-gray-200">{char.reason}</p>
              </div>

              <div className="bg-gray-800 rounded-xl p-4">
                <h4 className="text-sm font-bold text-gray-400 mb-2">🎬 الفيلم القصير</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {char.film.map((scene, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={colors.text}>→</span>
                      {scene}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-gray-800 rounded-xl p-4">
              <h4 className="text-sm font-bold text-gray-400 mb-2">📚 الدروس المستفادة</h4>
              <div className="flex flex-wrap gap-2">
                {char.lessons.map((lesson, i) => (
                  <span key={i} className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm border ${colors.border}`}>
                    ✅ {lesson}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function QuranHadithSection() {
  return (
    <div className="space-y-8">
      {/* الآيات */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
          <span>📗</span> الآيات القرآنية
        </h2>
        <div className="space-y-4">
          {[
            { ayah: 'فَبَدَّلَ الَّذِينَ ظَلَمُوا قَوْلًا غَيْرَ الَّذِي قِيلَ لَهُمْ', surah: 'البقرة', meaning: 'تحذير من تبديل شرع الله - حال بني إسرائيل مع موسى' },
            { ayah: 'وَمَا كَانَ لِمُؤْمِنٍ أَن يَقْتُلَ مُؤْمِنًا إِلَّا خَطَأً...', surah: 'النساء', meaning: 'الدية في الدنيا، لكن يوم القيامة الحساب بالحسنات' },
            { ayah: 'قَدْ جَاءَكُم مِّنَ اللَّهِ نُورٌ وَكِتَابٌ مُّبِينٌ', surah: 'المائدة', meaning: 'النور هو النبي ﷺ والكتاب المبين هو القرآن' },
            { ayah: 'أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ', surah: 'العنكبوت', meaning: 'البلاء سنة كونية لكل مؤمن' },
            { ayah: 'إِنَّا وَجَدْنَاهُ صَابِرًا نِّعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ', surah: 'ص', meaning: 'فضل الصبر - ثناء الله على سيدنا أيوب' },
            { ayah: 'وَتَرَكُوكَ قَائِمًا', surah: 'الجمعة', meaning: 'دليل على أن الخطبة تكون قائماً' },
            { ayah: 'خُذُوا زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ', surah: 'الأعراف', meaning: 'التزين للجمعة سنة' },
            { ayah: 'مَّا جَعَلَ اللَّهُ لِرَجُلٍ مِّن قَلْبَيْنِ فِي جَوْفِهِ', surah: 'الأحزاب', meaning: 'دليل على منع التسبيح بالسبحة وقت الخطبة - لا يمكن التركيز في شيئين' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-emerald-300 font-arabic text-lg mb-2 text-right leading-relaxed">
                {item.ayah}
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded text-sm">
                  سورة {item.surah}
                </span>
                <p className="text-gray-400 text-sm">{item.meaning}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* الأحاديث */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-2">
          <span>📕</span> الأحاديث النبوية
        </h2>
        <div className="space-y-4">
          {[
            { hadith: 'أتدرون من المفلس؟... من يأتي يوم القيامة بحسنات كأمثال الجبال...', purpose: 'التحذير من مظالم العباد - الميزان بالحسنات والسيئات' },
            { hadith: 'استغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه (3 مرات عند النوم)', purpose: 'مغفرة الذنوب بعمل بسيط' },
            { hadith: 'ولكنك عند الله لست بكاسد', purpose: 'تكريم المسلم - قيمته عند الله' },
            { hadith: 'لعن الله المتشبهين من الرجال بالنساء والمتشبهات من النساء بالرجال', purpose: 'تحريم التشبه بين الجنسين' },
            { hadith: 'كان خلقه القرآن', purpose: 'وصف السيدة عائشة لخلق النبي ﷺ' },
            { hadith: 'من أدرك ركعة فقد أدرك الصلاة', purpose: 'إدراك صلاة الجمعة' },
            { hadith: 'من قال لصاحبه انصت والإمام يخطب فقد لغا', purpose: 'حرمة الكلام أثناء الخطبة' },
            { hadith: 'من تكلم يوم الجمعة والإمام يخطب فهو كالحمار يحمل أسفاراً', purpose: 'خطورة الكلام وقت الخطبة' },
            { hadith: 'من اغتسل يوم الجمعة غسل الجنابة ثم راح في الساعة الأولى فكأنما قرب بدنة...', purpose: 'فضل التبكير للجمعة' },
            { hadith: 'أكثروا من الصلاة عليّ يوم الجمعة', purpose: 'سنة الإكثار من الصلاة على النبي' },
            { hadith: 'من قرأ سورة الكهف يوم الجمعة سطع له نور...', purpose: 'فضل قراءة سورة الكهف' },
            { hadith: 'قم فصلِّ ركعتين وليتجوز فيهما', purpose: 'تحية المسجد أثناء الخطبة' },
            { hadith: 'لا يُقيمنّ أحدكم أحداً من مجلسه', purpose: 'حرمة إقامة أحد من مكانه' },
            { hadith: 'من أكل ثوماً أو بصلاً فلا يقربن مساجدنا', purpose: 'الحفاظ على نظافة المسجد' },
            { hadith: 'من نصح أخاه سراً فقد زانه، ومن نصحه علانية فقد شانه', purpose: 'أدب النصيحة' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-orange-300 font-arabic text-lg mb-2 text-right leading-relaxed">
                "{item.hadith}"
              </p>
              <p className="text-gray-400 text-sm">🎯 الغرض: {item.purpose}</p>
            </div>
          ))}
        </div>
      </div>

      {/* الأدعية */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
          <span>🤲</span> الأدعية المذكورة
        </h2>
        <div className="space-y-4">
          {[
            { dua: 'اللهم علمنا ما ينفعنا وانفعنا بما علمتنا وزدنا علماً', type: 'طلب العلم', reason: 'افتتاح الدرس' },
            { dua: 'اللهم نسألك العفو والعافية في الدنيا والآخرة', type: 'طلب العافية', reason: 'التحصين من البلاء' },
            { dua: 'اللهم استر عوراتنا وآمن روعاتنا واحفظنا من بين أيدينا ومن خلفنا...', type: 'طلب الستر', reason: 'الدعاء الجامع' },
            { dua: 'سبحانك اللهم وبحمدك، نشهد أن لا إله إلا أنت، نستغفرك ونتوب إليك', type: 'كفارة المجلس', reason: 'ختام الدرس' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-purple-300 font-arabic text-lg mb-2 text-right leading-relaxed">
                {item.dua}
              </p>
              <div className="flex gap-4">
                <span className="bg-purple-900/50 text-purple-400 px-2 py-1 rounded text-sm">
                  {item.type}
                </span>
                <span className="text-gray-400 text-sm">{item.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FiqhSection() {
  return (
    <div className="space-y-8">
      {/* ثواب التبكير */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
          <span>🎁</span> ثواب التبكير للجمعة
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { time: 'الساعة الأولى', reward: 'بدنة 🐪', color: 'emerald' },
            { time: 'الساعة الثانية', reward: 'بقرة 🐄', color: 'blue' },
            { time: 'الساعة الثالثة', reward: 'كبش 🐏', color: 'purple' },
            { time: 'الساعة الرابعة', reward: 'دجاجة 🐔', color: 'yellow' },
            { time: 'الساعة الخامسة', reward: 'بيضة 🥚', color: 'gray' },
          ].map((item, idx) => (
            <div key={idx} className={`bg-${item.color}-900/30 rounded-xl p-4 border border-${item.color}-700 text-center`}>
              <p className="text-gray-400 text-sm mb-2">{item.time}</p>
              <p className="text-2xl">{item.reward}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-red-900/30 rounded-lg p-3 border border-red-700 text-center">
          <p className="text-red-300">
            ⚠️ إذا صعد الإمام المنبر → طوت الملائكة الصحف وجلسوا يستمعون
          </p>
        </div>
      </div>

      {/* السنن */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
          <span>✅</span> سنن الجمعة
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: '🧼', title: 'الغسل', desc: 'من طلوع الفجر (الجمهور) - الأفضل قبل الذهاب للمسجد' },
            { icon: '🌸', title: 'التطيب', desc: 'أحسن عطر عندك - والتنظف (قص الأظافر، الشارب...)' },
            { icon: '👔', title: 'لبس أحسن الثياب', desc: '"لو اشتريت ثوبين ليوم الجمعة" - ثياب مخصوصة للجمعة' },
            { icon: '📖', title: 'قراءة سورة الكهف', desc: 'نور من تحت قدمه للسماء - مغفرة ما بين الجمعتين' },
            { icon: '🤲', title: 'الصلاة على النبي ﷺ', desc: '"أكثروا من الصلاة عليّ يوم الجمعة"' },
            { icon: '🕐', title: 'التبكير', desc: 'الساعة الأولى بدنة... والفرق كبير!' },
            { icon: '🙏', title: 'الدعاء في ساعة الإجابة', desc: 'ساعة لا يُرد فيها الدعاء' },
            { icon: '📿', title: 'صلاة ما تيسر قبل الخطبة', desc: '"صلى ما كُتب له" - ليس لها عدد محدد' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-700 flex items-start gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-emerald-300">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* الممنوعات */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
          <span>🚫</span> ممنوعات الجمعة
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: '🗣️', title: 'الكلام أثناء الخطبة', desc: 'حتى لو بتقول "انصت" - "فقد لغوت"', severity: 'شديد' },
            { icon: '📿', title: 'التسبيح بالسبحة أثناء الخطبة', desc: 'لا يمكن التركيز في شيئين - "ما جعل الله لرجل من قلبين"', severity: 'شديد' },
            { icon: '🚶', title: 'تخطي الرقاب', desc: '"اجلس فقد آذيت" - إلا للإمام أو للضرورة', severity: 'متوسط' },
            { icon: '🪑', title: 'حجز الأماكن', desc: '"لا يُقيمن أحدكم أحداً من مجلسه"', severity: 'متوسط' },
            { icon: '🧅', title: 'أكل الثوم والبصل قبل الصلاة', desc: '"فلا يقربن مساجدنا" - إلا بإزالة الرائحة', severity: 'متوسط' },
            { icon: '✋', title: 'اللعب بالحصى أو السجاد', desc: '"من مس الحصى فقد لغا"', severity: 'متوسط' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-red-700/50 flex items-start gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-red-300">{item.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${item.severity === 'شديد' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'}`}>
                    {item.severity}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* مسائل فقهية */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
          <span>⚖️</span> مسائل فقهية مهمة
        </h2>
        <div className="space-y-4">
          {[
            { q: 'إدراك الجمعة', a: 'بإدراك ركعة (الركوع) مع الإمام - لو أقل تُصلى ظهراً', note: 'رأي الجمهور' },
            { q: 'تحية المسجد أثناء الخطبة', a: 'تُصلى ركعتين خفيفتين - "قم فصلِّ"', note: 'لا تُترك' },
            { q: 'رفع الإمام يديه في الدعاء', a: 'بالسبابة فقط - إلا في دعاء الاستسقاء', note: '' },
            { q: 'رفع المأموم يديه', a: 'جائز - لم يثبت ما يمنعه', note: 'الأفضل كالإمام' },
            { q: 'الكلام بين الخطبتين', a: 'يجوز عند بعض العلماء - والأولى الترك', note: 'ابن عثيمين' },
            { q: 'المسح على الجورب', a: 'جائز إذا كان ساتراً للكعبين (العظمتين الناتئتين)', note: 'المسح من فوق' },
            { q: 'السنة البعدية للجمعة', a: 'ركعتان أو أربع (في المسجد 4، في البيت 2)', note: 'ابن تيمية وابن القيم' },
            { q: 'السنة القبلية', a: 'ليس لها عدد محدد - "صلى ما كُتب له"', note: '' },
            { q: 'أكل الثوم/البصل', a: 'يُزال الرائحة ثم يذهب للمسجد - الحكم يدور مع العلة', note: '' },
            { q: 'التعامل مع الأطفال المزعجين', a: 'الإشارة فقط - لا الكلام', note: 'حفاظاً على الأجر' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h3 className="font-bold text-blue-300 md:w-1/4">{item.q}</h3>
                <p className="text-gray-200 flex-1">{item.a}</p>
                {item.note && (
                  <span className="bg-blue-900/50 text-blue-400 px-2 py-1 rounded text-xs">
                    {item.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* مسألة السبحة */}
      <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-700">
        <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
          <span>📿</span> مسألة السبحة أثناء الخطبة
        </h2>
        <div className="bg-gray-800 rounded-xl p-4 space-y-3">
          <p className="text-gray-300 leading-relaxed">
            <span className="text-red-400 font-bold">الحكم:</span> لا يصح التسبيح بالسبحة أو خاتم التسبيح أو حتى الأصابع أثناء الخطبة.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <span className="text-yellow-400 font-bold">العلة:</span> "ما جعل الله لرجل من قلبين في جوفه" - لا يمكن التركيز في الخطبة والتسبيح معاً.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <span className="text-blue-400 font-bold">القياس:</span> يُقاس على حديث "من مس الحصى فقد لغا" - أي انشغال يُضيع الأجر.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <span className="text-emerald-400 font-bold">الصواب:</span> الذكر يكون بالقلب وتدبر كلام الخطيب، والجوارح تسكن.
          </p>
        </div>
      </div>
    </div>
  )
}

function QuestionsSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const expectedQuestions = [
    { q: 'من هو مصعب بن عمير؟', a: 'أول سفير في الإسلام، أنعم فتيان مكة قبل إسلامه' },
    { q: 'لماذا كان يُعرف بعطره؟', a: 'لأنه كان مترفاً يلبس أفخم الثياب ويضع أجود العطور' },
    { q: 'ماذا فعلت أمه لما علمت بإسلامه؟', a: 'حبسته ومنعته من الميراث' },
    { q: 'من هو زاهر بن حرام؟', a: 'صحابي كان يبيع السمن والجبن، قال له النبي "لست بكاسد"' },
    { q: 'من هو المفلس الحقيقي؟', a: 'من يأتي بحسنات كالجبال لكنه ظلم الناس فتُؤخذ منه' },
    { q: 'متى تُدرك صلاة الجمعة؟', a: 'بإدراك ركعة (الركوع) مع الإمام' },
    { q: 'ما حكم الكلام أثناء الخطبة؟', a: 'حرام، حتى قول "انصت" - "فقد لغوت"' },
    { q: 'ما ثواب التبكير للجمعة؟', a: 'الساعة الأولى بدنة، الثانية بقرة، الثالثة كبش...' },
    { q: 'ما السور المستحبة في صلاة الجمعة؟', a: 'الأعلى والغاشية، أو الجمعة والمنافقون' },
    { q: 'كم سنة الجمعة البعدية؟', a: 'ركعتان أو أربع (أو 6 عند ابن عمر)' },
    { q: 'هل للجمعة سنة قبلية؟', a: 'لا يوجد سنة قبلية محددة - "صلى ما كُتب له"' },
    { q: 'ما حكم تحية المسجد أثناء الخطبة؟', a: 'تُصلى ركعتين خفيفتين ولا تُترك' },
    { q: 'هل يرفع الإمام يديه في الدعاء؟', a: 'لا، بالسبابة فقط إلا في دعاء الاستسقاء' },
    { q: 'ما حكم تخطي الرقاب؟', a: 'حرام ومؤذي إلا للضرورة' },
    { q: 'متى يبدأ وقت غسل الجمعة؟', a: 'من طلوع الفجر (الجمهور)' },
    { q: 'ما فضل قراءة سورة الكهف؟', a: 'نور من تحت قدمه للسماء، مغفرة ما بين الجمعتين' },
    { q: 'ما حكم المسح على الجورب؟', a: 'جائز إذا كان ساتراً للكعبين' },
    { q: 'ماذا يفعل من أكل ثوماً؟', a: 'يُزيل الرائحة ثم يذهب للمسجد' },
    { q: 'ما حكم حجز الأماكن في المسجد؟', a: 'لا يجوز - "لا يُقيمن أحدكم أحداً من مجلسه"' },
    { q: 'لماذا بكى النبي ﷺ لمصعب؟', a: 'تذكر حاله في الترف وحاله الآن في الزهد' },
  ]

  const trueFalse = [
    { statement: 'مصعب أول من دعا في الطائف', answer: false, correction: 'في المدينة' },
    { statement: 'الكلام جائز أثناء الخطبة للضرورة', answer: true, correction: 'للضرورة فقط' },
    { statement: 'سنة الجمعة القبلية 4 ركعات', answer: false, correction: 'ليس لها عدد محدد' },
    { statement: 'تحية المسجد تُترك أثناء الخطبة', answer: false, correction: 'تُصلى ركعتين خفيفتين' },
    { statement: 'الإمام يرفع يديه في كل دعاء', answer: false, correction: 'بالسبابة فقط إلا الاستسقاء' },
    { statement: 'المسح على الجورب جائز', answer: true, correction: 'إذا كان ساتراً للكعبين' },
    { statement: 'غسل الجمعة يبدأ من الفجر', answer: true, correction: 'رأي الجمهور' },
    { statement: 'قراءة الكهف تغفر ما بين الجمعتين', answer: true, correction: 'حسّنه بعض العلماء' },
    { statement: 'حجز الأماكن مستحب', answer: false, correction: 'لا يجوز' },
    { statement: 'النبي ﷺ بكى لما رأى مصعب', answer: true, correction: 'ذرفت عيناه' },
  ]

  return (
    <div className="space-y-8">
      {/* الأسئلة المتوقعة */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
          <span>❓</span> أسئلة متوقعة من السامعين (20 سؤال)
        </h2>
        <div className="space-y-2">
          {expectedQuestions.map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <button
                onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                className="w-full p-4 text-right flex items-center justify-between hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-200">{idx + 1}. {item.q}</span>
                <span className="text-emerald-400">{openQuestion === idx ? '▲' : '▼'}</span>
              </button>
              {openQuestion === idx && (
                <div className="p-4 bg-emerald-900/20 border-t border-emerald-700">
                  <p className="text-emerald-300">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* صح ولا غلط */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
          <span>✅❌</span> صح ولا غلط (10 أسئلة)
        </h2>
        <div className="space-y-3">
          {trueFalse.map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-200">{idx + 1}. {item.statement}</p>
                <span className={`px-3 py-1 rounded-full font-bold ${item.answer ? 'bg-emerald-900 text-emerald-300' : 'bg-red-900 text-red-300'}`}>
                  {item.answer ? '✅ صح' : '❌ غلط'}
                </span>
              </div>
              {!item.answer && (
                <p className="text-gray-400 text-sm">التصحيح: {item.correction}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* أسئلة نقاشية */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
          <span>💬</span> أسئلة نقاشية (للحلقات الجماعية)
        </h2>
        <div className="space-y-3">
          {[
            'كيف يمكننا تطبيق زهد مصعب في حياتنا المعاصرة؟',
            'ما الدروس التي نستفيدها من معاملة النبي ﷺ لزاهر؟',
            'لماذا يحرص الإسلام على آداب الجمعة أكثر من غيرها؟',
            'كيف نحافظ على حسناتنا من الضياع بسبب مظالم الناس؟',
            'ما دور الشباب في نشر الدعوة كما فعل مصعب؟',
          ].map((q, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-purple-700/50">
              <p className="text-purple-300">{idx + 1}. {q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* أسئلة تطبيقية */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
          <span>🎯</span> أسئلة تطبيقية (إنت هتعمل إيه؟)
        </h2>
        <div className="space-y-3">
          {[
            'إنت هتعمل إيه عشان تبكر للجمعة الجاية؟',
            'إيه اللي هتغيره في استعدادك للجمعة؟',
            'هل قرأت سورة الكهف الجمعة اللي فاتت؟ لو لأ، إيه خطتك؟',
            'ازاي هتتجنب الكلام أثناء الخطبة؟',
            'إيه أول خطوة هتاخدها عشان تحفظ لسانك من أعراض الناس؟',
          ].map((q, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-blue-700/50">
              <p className="text-blue-300">{idx + 1}. {q}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BenefitsSection() {
  return (
    <div className="space-y-8">
      {/* جدول الفوائد */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
          <span>💎</span> جدول الفوائد
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-3 text-right text-emerald-400">#</th>
                <th className="p-3 text-right text-emerald-400">الفائدة</th>
                <th className="p-3 text-right text-emerald-400">التصنيف</th>
              </tr>
            </thead>
            <tbody>
              {[
                { benefit: 'الإيمان يُهوّن كل شيء', category: 'إيماني' },
                { benefit: 'التضحية بالدنيا للآخرة', category: 'سلوكي' },
                { benefit: 'قيمتك عند الله أهم', category: 'عقدي' },
                { benefit: 'الحسنات تضيع بالمظالم', category: 'تحذيري' },
                { benefit: 'التبكير للجمعة سنة عظيمة', category: 'فقهي' },
                { benefit: 'الإنصات للخطبة واجب', category: 'فقهي' },
                { benefit: 'تحية المسجد مشروعة أثناء الخطبة', category: 'فقهي' },
                { benefit: 'الإمام لا يرفع يديه إلا في الاستسقاء', category: 'فقهي' },
                { benefit: 'المسح على الجورب جائز', category: 'فقهي' },
                { benefit: 'النصيحة سراً لا علانية', category: 'أخلاقي' },
              ].map((item, idx) => (
                <tr key={idx} className="border-t border-gray-700 hover:bg-gray-800">
                  <td className="p-3 text-gray-400">{idx + 1}</td>
                  <td className="p-3 text-gray-200">{item.benefit}</td>
                  <td className="p-3">
                    <span className="bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded text-sm">
                      {item.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* النصائح العملية */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
          <span>📝</span> النصائح العملية
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'بكّر للجمعة - الأجر عظيم!',
            'اغتسل وتطيّب',
            'البس أحسن ثيابك',
            'اقرأ سورة الكهف',
            'أنصت للخطبة',
            'صلِّ تحية المسجد',
            'لا تتخطى الرقاب',
            'لا تحجز مكان لغيرك',
            'احفظ لسانك من أعراض الناس',
            'أكثر الصلاة على النبي ﷺ',
          ].map((tip, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-3 border border-gray-700 flex items-center gap-3">
              <span className="text-emerald-400 font-bold">✅</span>
              <p className="text-gray-200">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* شرح المصطلحات */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
          <span>📚</span> شرح المصطلحات
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { term: 'سفير', meaning: 'مبعوث للدعوة' },
            { term: 'بدنة', meaning: 'جمل أو ناقة' },
            { term: 'لغا', meaning: 'تكلم كلاماً باطلاً' },
            { term: 'مئنة', meaning: 'علامة ودليل' },
            { term: 'الراتبة', meaning: 'السنة المواظب عليها' },
            { term: 'المُقرئ', meaning: 'المعلم للقرآن' },
            { term: 'كاسد', meaning: 'قليل القيمة' },
            { term: 'العقب', meaning: 'أسفل القدم' },
            { term: 'الكعبان', meaning: 'العظمتان الناتئتان' },
            { term: 'الخف', meaning: 'حذاء من جلد' },
            { term: 'الجورب', meaning: 'شراب القدم' },
            { term: 'درء المفسدة', meaning: 'منع الضرر' },
            { term: 'خطبة الحاجة', meaning: 'افتتاحية الخطب' },
            { term: 'التهجير', meaning: 'التبكير للصلاة' },
            { term: 'الأسفار', meaning: 'الكتب' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-3 border border-gray-700 flex items-center gap-3">
              <span className="text-purple-400 font-bold">{item.term}:</span>
              <p className="text-gray-300">{item.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StoriesSection() {
  const stories = [
    {
      title: 'مصعب من الترف للزهد',
      icon: '🌟',
      story: 'كان مصعب أنعم فتيان مكة، يُعرف بعطره في الشوارع. لما أسلم، حبسته أمه ومنعته من الميراث. صبر وزهد في الدنيا حتى لبس الثياب المرقعة. النبي ﷺ لما شافه بكى وقال: "أنتم اليوم خير".',
      lesson: 'الإيمان يُغيّر كل شيء - التضحية بالدنيا للآخرة',
      color: 'emerald'
    },
    {
      title: 'زاهر في السوق',
      icon: '💛',
      story: 'زاهر كان بيبيع سمن وجبن في السوق. النبي ﷺ جاء من وراه وحضنه وقال: "من يشتري العبد؟" زاهر قال: "تجدني كاسداً" - يعني مين هيشتريني. فقال له النبي ﷺ: "ولكنك عند الله لست بكاسد!"',
      lesson: 'قيمتك عند الله لا عند الناس - تواضع النبي ﷺ',
      color: 'yellow'
    },
    {
      title: 'عمرو بن الجموح والصنم',
      icon: '🔨',
      story: 'عمرو كان عنده صنم في البيت. ابنه وأصدقاؤه أخذوا الصنم ورموه في البئر. عمرو جابه ونظفه. تكرر الموضوع. المرة الثالثة ربطوا في رقبة الصنم جيفة كلب ميت! عمرو شافه وقال: "لو كنت تدافع عن نفسك!" وأعلن إسلامه.',
      lesson: 'الله يهيئ أسباب الهداية - التفكر يقود للإيمان',
      color: 'purple'
    },
    {
      title: 'حديث المفلس',
      icon: '⚠️',
      story: 'النبي ﷺ سأل الصحابة: "أتدرون من المفلس؟" قالوا: من لا درهم له. قال: "المفلس من يأتي بحسنات كأمثال الجبال، لكنه شتم هذا وضرب هذا وأكل مال هذا، فيُؤخذ من حسناته... فإن فنيت يُؤخذ من سيئاتهم فتُطرح عليه ثم يُلقى في النار!"',
      lesson: 'احفظ حسناتك من الضياع - خطورة مظالم العباد',
      color: 'red'
    },
    {
      title: 'حنين الجذع',
      icon: '🌴',
      story: 'كان النبي ﷺ يخطب على جذع نخلة. لما اتخذوا له المنبر ونزل من على الجذع، حنّ الجذع له وبكى! النبي ﷺ نزل من المنبر واحتضنه حتى سكت.',
      lesson: 'حتى الجماد يشتاق للنبي ﷺ - الحسن البصري قال: "لا يكن الجذع أفضل منك"',
      color: 'teal'
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      emerald: 'from-emerald-900/30 to-teal-900/30 border-emerald-700',
      yellow: 'from-yellow-900/30 to-orange-900/30 border-yellow-700',
      purple: 'from-purple-900/30 to-indigo-900/30 border-purple-700',
      red: 'from-red-900/30 to-rose-900/30 border-red-700',
      teal: 'from-teal-900/30 to-cyan-900/30 border-teal-700',
    }
    return colors[color] || colors.emerald
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
        <span>📚</span> القصص والأمثلة
      </h2>

      {stories.map((story, idx) => (
        <div key={idx} className={`bg-gradient-to-br ${getColorClasses(story.color)} rounded-2xl p-6 border`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{story.icon}</span>
            <h3 className="text-xl font-bold text-gray-100">{story.title}</h3>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 mb-4">
            <p className="text-gray-300 leading-relaxed">{story.story}</p>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <p className="text-emerald-300">
              <span className="font-bold">💡 العبرة:</span> {story.lesson}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

function AnalysisSection() {
  return (
    <div className="space-y-8">
      {/* التحليل الشامل */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
          <span>🔍</span> التحليل الشامل للدرس
        </h2>
        
        <div className="space-y-6">
          {/* ملخص */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-lg font-bold text-blue-400 mb-3">📝 ملخص الدرس</h3>
            <p className="text-gray-300 leading-relaxed">
              درس يجمع بين <span className="text-emerald-400">سيرة مصعب بن عمير</span> كنموذج للتضحية والزهد، 
              و<span className="text-emerald-400">أحكام صلاة الجمعة</span> تكملة للدرس السابق. 
              يربط الشيخ بين القيم الإيمانية (الصبر، التضحية، الزهد) والأحكام الفقهية العملية.
            </p>
          </div>

          {/* الرسالة */}
          <div className="bg-emerald-900/30 rounded-xl p-4 border border-emerald-700">
            <h3 className="text-lg font-bold text-emerald-400 mb-3">🎯 الرسالة الرئيسية</h3>
            <p className="text-xl text-gray-200 text-center">
              "الإيمان يُهوّن التضحية، والقيمة عند الله لا عند الناس"
            </p>
          </div>

          {/* القصص */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-lg font-bold text-purple-400 mb-3">📚 القصص الأساسية</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• مصعب من الترف للزهد</li>
              <li>• زاهر والنبي ﷺ في السوق</li>
              <li>• حديث المفلس</li>
              <li>• عمرو بن الجموح والصنم</li>
              <li>• حنين الجذع للنبي ﷺ</li>
            </ul>
          </div>

          {/* الدروس */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-lg font-bold text-yellow-400 mb-3">🤲 الدروس المستفادة الكبرى</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'مصعب نموذج ← التضحية في سبيل الله',
                'زاهر ← لا تحتقر نفسك، أنت عزيز بالإسلام',
                'المفلس ← احفظ لسانك',
                'الجمعة ← عيد أسبوعي له آداب',
                'التبكير ← ثواب عظيم بجهد قليل',
              ].map((lesson, idx) => (
                <div key={idx} className="bg-gray-700 rounded-lg p-2 text-gray-200 text-sm">
                  {lesson}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* الإيجابي والسلبي */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* الإيجابي */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-emerald-700">
          <h2 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <span>✅</span> نقاط القوة
          </h2>
          <ul className="space-y-2">
            {[
              'البدء بسيرة صحابي قبل الفقه',
              'ربط القصص بالواقع المعاصر',
              'التفاعل المستمر مع الحضور',
              'استخدام الأدلة من القرآن والسنة',
              'الموازنة بين الترهيب والترغيب',
              'تبسيط المسائل الفقهية',
              'الإجابة على أسئلة متنوعة',
              'استخدام الأمثلة الحياتية',
              'الدعاء للحاضرين',
              'ختام المجلس بكفارة المجلس',
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                <span className="text-emerald-400">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* السلبي */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-red-700/50">
          <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
            <span>⚠️</span> نقاط للتحسين
          </h2>
          <div className="space-y-3">
            {[
              { issue: 'الدرس طويل', solution: 'تقسيمه على جلستين' },
              { issue: 'بعض الاستطرادات', solution: 'التركيز على الموضوع الأساسي' },
              { issue: 'تكرار بعض المعلومات', solution: 'تنظيم النقاط مسبقاً' },
              { issue: 'أسئلة كثيرة في النهاية', solution: 'تخصيص وقت محدد للأسئلة' },
              { issue: 'الانتقال السريع بين المواضيع', solution: 'إضافة جمل ربط' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-2">
                <p className="text-red-300 text-sm">{item.issue}</p>
                <p className="text-gray-400 text-xs">💡 الحل: {item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* المصدر */}
      <div className="bg-gray-800 rounded-xl p-4 text-center">
        <p className="text-gray-400">📂 المصدر: ملف "الاتنين 26-1"</p>
      </div>
    </div>
  )
}

export default App
