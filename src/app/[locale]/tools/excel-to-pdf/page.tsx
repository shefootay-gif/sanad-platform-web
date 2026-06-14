import ToolTemplate from '@/components/ToolTemplate';
import { Table } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ExcelToPdfPage() {
  return (
    <ToolTemplate 
      title="Excel إلى PDF"
      description="حول جداول Excel إلى مستندات PDF"
      icon={<Table className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/excel-to-pdf"}
      acceptedFileTypes={{ 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'] }}
      themeColor="green"
    />
  );
}
