import { useTranslations } from 'next-intl';

import { 
  FileCheck2, FilePlus2, Scissors, Minimize2, Image as ImageIcon, 
  FileMinus, FileSymlink, ArrowUpDown, Wrench, FileText, 
  Presentation, Table, Globe, Archive, RotateCw, Stamp, 
  ListOrdered, Unlock, Lock, PenTool, LayoutDashboard
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function Home() {
  const t = useTranslations();
  const tIndex = useTranslations('Index');

  const categories = [
    {
      id: 'organize',
      title: 'تنظيم ملفات PDF',
      tools: [
        { id: 'merge', icon: <FilePlus2 className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />, link: '/tools/merge', color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900', title: 'دمج PDF' },
        { id: 'split', icon: <Scissors className="w-10 h-10 text-orange-600 dark:text-orange-400 mb-4" />, link: '/tools/split', color: 'bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900', title: 'تقسيم PDF' },
        { id: 'removePages', icon: <FileMinus className="w-10 h-10 text-red-600 dark:text-red-400 mb-4" />, link: '/tools/remove-pages', color: 'bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900', title: 'حذف صفحات' },
        { id: 'extractPages', icon: <FileSymlink className="w-10 h-10 text-teal-600 dark:text-teal-400 mb-4" />, link: '/tools/extract-pages', color: 'bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900', title: 'استخراج صفحات' },
        { id: 'organizePdf', icon: <ArrowUpDown className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" />, link: '/tools/organize-pdf', color: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900', title: 'تنظيم PDF' },
      ]
    },
    {
      id: 'optimize',
      title: 'تحسين ملفات PDF',
      tools: [
        { id: 'compress', icon: <Minimize2 className="w-10 h-10 text-green-600 dark:text-green-400 mb-4" />, link: '/tools/compress', color: 'bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900', title: 'ضغط PDF' },
        { id: 'repair', icon: <Wrench className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-4" />, link: '/tools/repair', color: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-100 dark:border-yellow-900', title: 'إصلاح PDF' }
      ]
    },
    {
      id: 'convertToPdf',
      title: 'التحويل إلى PDF',
      tools: [
        { id: 'jpgToPdf', icon: <ImageIcon className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />, link: '/tools/jpg-to-pdf', color: 'bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900', title: 'JPG إلى PDF' },
        { id: 'wordToPdf', icon: <FileText className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />, link: '/tools/word-to-pdf', color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900', title: 'Word إلى PDF' },
        { id: 'powerpointToPdf', icon: <Presentation className="w-10 h-10 text-orange-600 dark:text-orange-400 mb-4" />, link: '/tools/powerpoint-to-pdf', color: 'bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900', title: 'PowerPoint إلى PDF' },
        { id: 'excelToPdf', icon: <Table className="w-10 h-10 text-green-600 dark:text-green-400 mb-4" />, link: '/tools/excel-to-pdf', color: 'bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900', title: 'Excel إلى PDF' },
        { id: 'htmlToPdf', icon: <Globe className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-4" />, link: '/tools/html-to-pdf', color: 'bg-cyan-50 dark:bg-cyan-950/30 border-cyan-100 dark:border-cyan-900', title: 'HTML إلى PDF' }
      ]
    },
    {
      id: 'convertFromPdf',
      title: 'التحويل من PDF',
      tools: [
        { id: 'pdfToJpg', icon: <ImageIcon className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />, link: '/tools/pdf-to-jpg', color: 'bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900', title: 'PDF إلى JPG' },
        { id: 'pdfToWord', icon: <FileText className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />, link: '/tools/pdf-to-word', color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900', title: 'PDF إلى Word' },
        { id: 'pdfToPowerpoint', icon: <Presentation className="w-10 h-10 text-orange-600 dark:text-orange-400 mb-4" />, link: '/tools/pdf-to-powerpoint', color: 'bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900', title: 'PDF إلى PowerPoint' },
        { id: 'pdfToExcel', icon: <Table className="w-10 h-10 text-green-600 dark:text-green-400 mb-4" />, link: '/tools/pdf-to-excel', color: 'bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900', title: 'PDF إلى Excel' },
        { id: 'pdfToPdfa', icon: <Archive className="w-10 h-10 text-gray-600 dark:text-gray-400 mb-4" />, link: '/tools/pdf-to-pdfa', color: 'bg-gray-50 dark:bg-gray-950/30 border-gray-100 dark:border-gray-900', title: 'PDF إلى PDF/A' }
      ]
    },
    {
      id: 'security',
      title: 'حماية وتعديل PDF',
      tools: [
        { id: 'unlockPdf', icon: <Unlock className="w-10 h-10 text-teal-600 dark:text-teal-400 mb-4" />, link: '/tools/unlock-pdf', color: 'bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900', title: 'فك حماية PDF' },
        { id: 'protectPdf', icon: <Lock className="w-10 h-10 text-red-600 dark:text-red-400 mb-4" />, link: '/tools/protect-pdf', color: 'bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900', title: 'حماية PDF' },
        { id: 'signPdf', icon: <PenTool className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" />, link: '/tools/sign-pdf', color: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900', title: 'توقيع PDF' },
        { id: 'addWatermark', icon: <Stamp className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />, link: '/tools/add-watermark', color: 'bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900', title: 'إضافة علامة مائية' },
        { id: 'addPageNumbers', icon: <ListOrdered className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />, link: '/tools/add-page-numbers', color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900', title: 'أرقام الصفحات' },
        { id: 'rotatePdf', icon: <RotateCw className="w-10 h-10 text-orange-600 dark:text-orange-400 mb-4" />, link: '/tools/rotate-pdf', color: 'bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900', title: 'تدوير PDF' }
      ]
    }
  ];

  return (
    <main className="flex-grow container mx-auto px-4 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 mb-20 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative px-6 py-24 sm:px-12 sm:py-32 lg:px-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium">أفضل منصة عربية لمعالجة الوثائق</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight text-white leading-tight">
            سند <br className="md:hidden" />
            <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">لمعالجة الوثائق</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
            كل ما تحتاجه للتعامل مع ملفات PDF في مكان واحد. مجاناً، آمن، وبأعلى معايير الدقة والسرعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#tools" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg">
              استكشف الأدوات
            </Link>
          </div>
        </div>
      </div>

      <div id="tools" className="space-y-16 scroll-mt-24">
        {categories.map((category) => (
          <section key={category.id}>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="w-2 h-8 bg-blue-600 rounded-full mr-4 ml-4"></span>
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {category.tools.map((tool) => (
                <Link href={tool.link} key={tool.id}>
                  <div className={`p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center h-full ${tool.color}`}>
                    {tool.icon}
                    <h3 className="font-bold text-lg mb-2">{tool.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}