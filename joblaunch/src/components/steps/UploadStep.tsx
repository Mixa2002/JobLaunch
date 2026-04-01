'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import type { TranslationKey } from '@/lib/i18n';
import type { UserProfileFormState } from '@/lib/types/profile';
import { parseCV } from '@/lib/services/api';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const ACCEPTED_EXTENSIONS = ['.pdf', '.docx'];

const LOADING_MESSAGES: TranslationKey[] = [
  'uploadReadingAchievements',
  'uploadExtractingSkills',
  'uploadBuildingProfile',
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isAcceptedFile(file: File): boolean {
  if (ACCEPTED_TYPES.includes(file.type)) return true;
  const ext = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
  return ACCEPTED_EXTENSIONS.includes(ext);
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface UploadStepProps {
  onComplete: (profile: UserProfileFormState) => void;
  goNext: () => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function UploadStep({ onComplete, goNext }: UploadStepProps) {
  const { t } = useI18n();

  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<TranslationKey | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const loadingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Rotate loading messages while analyzing
  useEffect(() => {
    if (isAnalyzing) {
      setLoadingMsgIndex(0);
      loadingIntervalRef.current = setInterval(() => {
        setLoadingMsgIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 1200);
    } else if (loadingIntervalRef.current) {
      clearInterval(loadingIntervalRef.current);
      loadingIntervalRef.current = null;
    }
    return () => {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
    };
  }, [isAnalyzing]);

  // ---- File validation ----
  const validateAndSetFile = useCallback(
    (incoming: File) => {
      setError(null);

      if (!isAcceptedFile(incoming)) {
        setError('uploadErrorWrongType');
        return;
      }
      if (incoming.size > MAX_FILE_SIZE) {
        setError('uploadErrorTooLarge');
        return;
      }

      setFile(incoming);
    },
    [],
  );

  // ---- Drag handlers ----
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile) validateAndSetFile(droppedFile);
    },
    [validateAndSetFile],
  );

  // ---- Browse click ----
  const handleBrowseClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = e.target.files?.[0];
      if (selected) validateAndSetFile(selected);
      // Reset input so the same file can be re-selected if needed
      if (fileInputRef.current) fileInputRef.current.value = '';
    },
    [validateAndSetFile],
  );

  // ---- Remove file ----
  const handleRemoveFile = useCallback(() => {
    setFile(null);
    setError(null);
  }, []);

  // ---- Analyze ----
  const handleAnalyze = useCallback(async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const profile = await parseCV(file);

      const formState: UserProfileFormState = {
        ...profile,
        rawCvFile: file,
      };

      onComplete(formState);
      goNext();
    } catch {
      setError('uploadErrorFailed');
    } finally {
      setIsAnalyzing(false);
    }
  }, [file, onComplete, goNext]);

  // ---- Render: Loading state ----
  if (isAnalyzing) {
    return (
      <div className="rounded-2xl border border-border bg-white p-6 sm:p-10 min-h-[340px] flex flex-col items-center justify-center text-center gap-6">
        {/* Spinner */}
        <div className="relative flex items-center justify-center">
          <div
            className="h-16 w-16 rounded-full border-4 border-border border-t-electric animate-spin"
            role="status"
            aria-label={t('uploadAnalyzing')}
          />
        </div>

        {/* Rotating fun message */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-heading text-lg font-semibold text-navy">
            {t('uploadAnalyzing')}
          </p>
          <p
            key={loadingMsgIndex}
            className="text-sm text-muted animate-pulse"
          >
            {t(LOADING_MESSAGES[loadingMsgIndex])}
          </p>
        </div>
      </div>
    );
  }

  // ---- Render: Upload zone ----
  return (
    <div className="flex flex-col gap-6">
      {/* Drop zone */}
      <button
        type="button"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
        aria-label={t('uploadDescription')}
        className={`
          relative rounded-2xl border-2 border-dashed p-8 sm:p-12
          min-h-[240px] flex flex-col items-center justify-center gap-4
          text-center transition-all cursor-pointer
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric
          ${isDragOver
            ? 'border-electric bg-electric/5 scale-[1.01]'
            : file
              ? 'border-success bg-success/5'
              : 'border-border hover:border-electric/50 hover:bg-electric/[0.02]'
          }
        `}
      >
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileChange}
          className="hidden"
          aria-hidden="true"
          tabIndex={-1}
        />

        {/* Icon */}
        {!file && (
          <>
            <div
              className={`
                flex h-16 w-16 items-center justify-center rounded-2xl transition-colors
                ${isDragOver ? 'bg-electric/20 text-electric' : 'bg-electric/10 text-electric'}
              `}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>

            <p className="text-base font-medium text-navy">
              {isDragOver ? t('uploadDragActive') : t('uploadDescription')}
            </p>
            <p className="text-sm text-muted">{t('uploadFileTypes')}</p>
          </>
        )}

        {/* Selected file info */}
        {file && (
          <div className="flex items-center gap-4">
            {/* File icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="16 13 12 17 8 13" />
                <line x1="12" y1="12" x2="12" y2="17" />
              </svg>
            </div>

            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-semibold text-navy truncate max-w-[260px]">
                {file.name}
              </span>
              <span className="text-xs text-muted">{formatFileSize(file.size)}</span>
            </div>

            {/* Remove button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFile();
              }}
              className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-border-light hover:text-navy transition-colors"
              aria-label={t('cancel')}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        )}
      </button>

      {/* Error message */}
      {error && (
        <div
          role="alert"
          className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {t(error)}
        </div>
      )}

      {/* Analyze button */}
      <button
        type="button"
        onClick={handleAnalyze}
        disabled={!file}
        className={`
          mx-auto flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold
          transition-all min-h-[52px]
          ${file
            ? 'bg-electric text-white shadow-lg shadow-electric/25 hover:bg-electric-dark active:scale-[0.98] cursor-pointer'
            : 'bg-border text-muted cursor-not-allowed'
          }
        `}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        {t('uploadAnalyze')}
      </button>
    </div>
  );
}
