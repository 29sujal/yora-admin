import React, { useState } from "react";

const sidebarData = [
  { title: "Dashboard", items: ["Dashboard"] },
  {
    title: "App order area",
    items: ["Orders", "Return requests", "Inbox", "Vendor messages", "Users"],
  },
  {
    title: "App uploading area",
    items: ["Category", "Subcategory", "Items", "Item details"],
  },
  {
    title: "App functional area",
    items: [
      "Filters", "Promocode", "Points", "Add Faq", "Manage banners rewards",
      "Join us control screen", "Invite a friend", "New admin",
      "Arrangement control", "Product bundling",
    ],
  },
  {
    title: "App setting area",
    items: [
      "Communication preferences", "Language country and region",
      "Hugging face api open close", "Profile visibility",
    ],
  },
  {
    title: "App promotional area",
    items: [
      "Cart abandonment recovery", "Send promo notification",
      "Send notification in app", "Email and sms template mgt screen",
      "Push notification",
    ],
  },
  {
    title: "Analytics & Data base",
    items: ["Analytics reports", "Data base"],
  },
  {
    title: "Others",
    items: [
      "Support chat log", "Logs/error tracking integration",
      "Staging environment toggle",
    ],
  },
  { title: "Settings", items: ["Settings"] },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <>
      {/* Background overlay (for mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-[220px] bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:block overflow-y-auto pt-[60px] md:pt-4`}
      >
        <nav className="px-4 pb-6 text-sm space-y-4">
          {sidebarData.map((section) => (
            <div key={section.title}>
              <div
                className="font-semibold flex justify-between items-center cursor-pointer text-gray-700 hover:text-black"
                onClick={() => toggleSection(section.title)}
              >
                <span>{section.title}</span>
                <span className="text-xs text-gray-400">
                  {openSections[section.title] ? "▲" : "▼"}
                </span>
              </div>

              {openSections[section.title] && (
                <ul className="pl-3 mt-1 space-y-1">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-gray-600 hover:text-black cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
