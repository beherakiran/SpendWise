function EmptyState({ icon, message, children }) {
  return (
    <div className="flex w-full min-h-62.5 flex-col items-center justify-center py-6">
      {icon && (
        <div className="mb-4 rounded-full bg-blue-50 p-4">
          {icon}
        </div>
      )}

      <p className="p-4 text-center text-gray-500">
        {message}
      </p>

      {children}
    </div>
  );
}

export default EmptyState;