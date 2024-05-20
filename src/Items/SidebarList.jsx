const SidebarList = () => {
  return (
    <>
      <li>
        <a
          href="/"
          className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
        >
          <svg
            className="w-5 h-5  transition duration-75  group-hover:text-gray-50 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 22 21"
          >
            <path
              fillRule="evenodd"
              d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="ms-3 mt-1">Dashboard</span>
        </a>
      </li>
      <li>
        <a
          href="/categories"
          className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
        >
          <svg
            className="w-5 h-5  transition duration-75  group-hover:text-gray-50 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 22 21"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
            />
          </svg>

          <span className="ms-3 mt-1">Kategori</span>
        </a>
      </li>
    </>
  );
};

export default SidebarList;
