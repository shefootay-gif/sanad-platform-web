import ToolTemplate from '@/components/ToolTemplate';
import { ArrowUpDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function OrganizePdfPage() {
  return (
    <ToolTemplate 
      title="تنظيم PDF"
      description="أعد ترتيب صفحات PDF أو احذف بعضها"
      icon={<ArrowUpDown className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/organize-pdf"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="indigo"
    />
  );
}
