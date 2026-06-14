import ToolTemplate from '@/components/ToolTemplate';
import { Table } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PdfToExcelPage() {
  return (
    <ToolTemplate 
      title="PDF إلى Excel"
      description="حول ملفات PDF إلى جداول Excel"
      icon={<Table className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/pdf-to-excel"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="green"
    />
  );
}
