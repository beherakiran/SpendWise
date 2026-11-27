
function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h1 className="text-xl font-bold text-blue-800 sm:text-2xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-1 text-sm text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default PageHeader;
