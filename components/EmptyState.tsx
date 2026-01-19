interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: string;
  actionText?: string;
  actionUrl?: string;
}

export default function EmptyState({
  title = 'データがありません',
  message = '該当するデータが見つかりませんでした。',
  icon = 'fa-inbox',
  actionText,
  actionUrl,
}: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
        <i className={`fas ${icon} text-3xl`}></i>
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-6">{message}</p>
      {actionText && actionUrl && (
        <a
          href={actionUrl}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 transition-colors"
        >
          {actionText}
        </a>
      )}
    </div>
  );
}