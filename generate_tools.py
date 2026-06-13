import os

tools = [
    ("add-page-numbers", "إضافة أرقام الصفحات", "أضف أرقاماً لصفحات ملف PDF", "ListOrdered", "blue", "api/pdf/add-page-numbers"),
    ("add-watermark", "إضافة علامة مائية", "أضف نصاً كعلامة مائية على صفحات PDF", "Stamp", "purple", "api/pdf/add-watermark"),
    ("compress", "ضغط ملف PDF", "قلل حجم ملفات PDF مع الحفاظ على أفضل جودة ممكنة", "Minimize2", "green", "api/pdf/compress"),
    ("excel-to-pdf", "Excel إلى PDF", "حول جداول Excel إلى مستندات PDF", "Table", "green", "api/pdf/excel-to-pdf"),
    ("extract-pages", "استخراج صفحات", "استخرج صفحات معينة من ملف PDF", "FileSymlink", "teal", "api/pdf/extract-pages"),
    ("html-to-pdf", "HTML إلى PDF", "حول صفحات الويب إلى ملفات PDF", "Globe", "cyan", "api/pdf/html-to-pdf"),
    ("jpg-to-pdf", "JPG إلى PDF", "حول صورك إلى مستند PDF واحد", "ImageIcon", "purple", "api/pdf/jpg-to-pdf"),
    ("merge", "دمج ملفات PDF", "ادمج عدة ملفات PDF في ملف واحد", "FilePlus2", "blue", "api/pdf/merge"),
    ("organize-pdf", "تنظيم PDF", "أعد ترتيب صفحات PDF أو احذف بعضها", "ArrowUpDown", "indigo", "api/pdf/organize-pdf"),
    ("pdf-to-excel", "PDF إلى Excel", "حول ملفات PDF إلى جداول Excel", "Table", "green", "api/pdf/pdf-to-excel"),
    ("pdf-to-jpg", "PDF إلى JPG", "حول صفحات PDF إلى صور JPG عالية الدقة", "ImageIcon", "purple", "api/pdf/pdf-to-jpg"),
    ("pdf-to-pdfa", "PDF إلى PDF/A", "حول ملفات PDF إلى صيغة الأرشفة PDF/A", "Archive", "slate", "api/pdf/pdf-to-pdfa"),
    ("pdf-to-powerpoint", "PDF إلى PowerPoint", "حول ملفات PDF إلى عروض تقديمية قابلة للتعديل", "Presentation", "orange", "api/pdf/pdf-to-powerpoint"),
    ("pdf-to-word", "PDF إلى Word", "حول ملفات PDF إلى مستندات Word سهلة التعديل", "FileText", "blue", "api/pdf/pdf-to-word"),
    ("powerpoint-to-pdf", "PowerPoint إلى PDF", "حول عروض PowerPoint إلى ملفات PDF", "Presentation", "orange", "api/pdf/powerpoint-to-pdf"),
    ("protect-pdf", "حماية PDF", "أضف كلمة مرور لحماية ملف PDF الخاص بك", "Lock", "red", "api/pdf/protect-pdf"),
    ("remove-pages", "حذف صفحات", "احذف صفحات غير مرغوب فيها من ملف PDF", "FileMinus", "red", "api/pdf/remove-pages"),
    ("repair", "إصلاح PDF", "أصلح ملفات PDF التالفة والمعطوبة", "Wrench", "orange", "api/pdf/repair"),
    ("rotate-pdf", "تدوير PDF", "قم بتدوير صفحات ملف PDF للاتجاه الصحيح", "RotateCw", "orange", "api/pdf/rotate-pdf"),
    ("sign-pdf", "توقيع PDF", "أضف توقيعك الإلكتروني على ملف PDF", "PenTool", "indigo", "api/pdf/sign-pdf"),
    ("split", "تقسيم ملف PDF", "قسم ملف PDF إلى ملفات منفصلة", "Scissors", "orange", "api/pdf/split"),
    ("unlock-pdf", "فك حماية PDF", "أزل كلمة المرور من ملف PDF (يجب أن تعرف الكلمة الأصلية)", "Unlock", "teal", "api/pdf/unlock-pdf"),
    ("word-to-pdf", "Word إلى PDF", "حول مستندات Word إلى ملفات PDF", "FileText", "blue", "api/pdf/word-to-pdf")
]

template = """import ToolTemplate from '@/components/ToolTemplate';
import {{ {icon} }} from 'lucide-react';
import {{ useTranslations }} from 'next-intl';

export default function {componentName}Page() {{
  return (
    <ToolTemplate 
      title="{title}"
      description="{desc}"
      icon={{<{icon} className="w-10 h-10" />}}
      apiEndpoint={{"https://sanad-platform-backend.vercel.app/{api}"}}
      acceptedFileTypes={{{{{accept}}}}}
      themeColor="{color}"
    />
  );
}}
"""

base_dir = r"d:\Python_Projects\sanad-platform-web\src\app\[locale]\tools"

for t_id, title, desc, icon, color, api in tools:
    dir_path = os.path.join(base_dir, t_id)
    os.makedirs(dir_path, exist_ok=True)
    
    # Determine accept type
    accept = " 'application/pdf': ['.pdf'] "
    if "to-pdf" in t_id and not t_id.startswith("pdf"):
        if "jpg" in t_id: accept = " 'image/jpeg': ['.jpg', '.jpeg'], 'image/png': ['.png'] "
        elif "word" in t_id: accept = " 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] "
        elif "powerpoint" in t_id: accept = " 'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'] "
        elif "excel" in t_id: accept = " 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'] "
        elif "html" in t_id: accept = " 'text/html': ['.html'] "
        
    comp_name = "".join(word.capitalize() for word in t_id.split("-"))
    
    code = template.format(
        componentName=comp_name,
        title=title,
        desc=desc,
        icon=icon,
        api=api,
        accept=accept,
        color=color
    )
    
    with open(os.path.join(dir_path, "page.tsx"), "w", encoding="utf-8") as f:
        f.write(code)

print("Generated all tool pages successfully.")
