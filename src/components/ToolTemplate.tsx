'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { Trash2, ArrowRight, FileText, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface ToolTemplateProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  apiEndpoint: string;
  acceptedFileTypes: { [key: string]: string[] };
  themeColor?: 'blue' | 'red' | 'green' | 'orange' | 'purple' | 'slate' | 'teal' | 'indigo' | 'cyan' | 'yellow';
  buttonText?: string;
  processingText?: string;
}

export default function ToolTemplate({
  title,
  description,
  icon,
  apiEndpoint,
  acceptedFileTypes,
  themeColor = 'blue',
  buttonText = 'معالجة الملف',
  processingText = 'جاري المعالجة...'
}: ToolTemplateProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const colorClasses = {
    blue: 'text-blue-600 border-blue-500 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-600 hover:text-white',
    red: 'text-red-600 border-red-500 bg-red-50 dark:bg-red-900/20 hover:bg-red-600 hover:text-white',
    green: 'text-green-600 border-green-500 bg-green-50 dark:bg-green-900/20 hover:bg-green-600 hover:text-white',
    orange: 'text-orange-600 border-orange-500 bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-600 hover:text-white',
    purple: 'text-purple-600 border-purple-500 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-600 hover:text-white',
    slate: 'text-slate-600 border-slate-500 bg-slate-50 dark:bg-slate-900/20 hover:bg-slate-600 hover:text-white',
    teal: 'text-teal-600 border-teal-500 bg-teal-50 dark:bg-teal-900/20 hover:bg-teal-600 hover:text-white',
    indigo: 'text-indigo-600 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-600 hover:text-white',
    cyan: 'text-cyan-600 border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 hover:bg-cyan-600 hover:text-white',
    yellow: 'text-yellow-600 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-600 hover:text-white',
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setDownloadUrl(null);
      setError(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    maxFiles: 1
  });

  const processFile = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('فشلت عملية المعالجة');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-10">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${colorClasses[themeColor].split(' ')[2]}`}>
          {icon}
        </div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{description}</p>
      </div>

      {!file ? (
        <div 
          {...getRootProps()} 
          className={`border-4 border-dashed rounded-3xl p-16 text-center cursor-pointer transition-all duration-300
            ${isDragActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
        >
          <input {...getInputProps()} />
          <FileText className="w-20 h-20 mx-auto text-gray-400 mb-6" />
          <p className="text-2xl font-medium mb-2">اسحب الملف هنا أو انقر للاختيار</p>
          <p className="text-gray-500 dark:text-gray-400">الحد الأقصى لحجم الملف 50 ميجابايت</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
            <div className="flex items-center space-x-4 space-x-reverse">
              <FileText className={`w-10 h-10 ${colorClasses[themeColor].split(' ')[0]}`} />
              <div>
                <p className="font-semibold text-lg">{file.name}</p>
                <p className="text-gray-500 text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button 
              onClick={() => { setFile(null); setDownloadUrl(null); }}
              className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
            >
              <Trash2 className="w-6 h-6" />
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="flex justify-center">
            {downloadUrl ? (
              <a 
                href={downloadUrl} 
                download={`processed_${file.name}`}
                className={`inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 ${colorClasses[themeColor]}`}
              >
                تحميل الملف <ArrowRight className="mr-3 w-6 h-6" />
              </a>
            ) : (
              <button 
                onClick={processFile}
                disabled={isProcessing}
                className={`inline-flex items-center px-10 py-5 text-xl font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl
                  ${isProcessing ? 'opacity-75 cursor-not-allowed bg-gray-400 text-white' : colorClasses[themeColor]}`}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="animate-spin ml-3 w-6 h-6" />
                    {processingText}
                  </>
                ) : (
                  buttonText
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}