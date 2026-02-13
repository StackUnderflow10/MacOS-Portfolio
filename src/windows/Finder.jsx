import { WindowWrapper } from "#components"
import WindowControls from "#components/WindowControls"
import { locations } from "#constants"
import useLocationStore from "#store/location"
import useWindowStore from "#store/window"
import clsx from "clsx"
import { Search } from "lucide-react"

const Finder = () => {
  const { openWindow } = useWindowStore()
  const { activeLocation, setActiveLocation } = useLocationStore()

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume")
    if (item.kind === "folder") return setActiveLocation(item)
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank")

    openWindow(`${item.fileType}${item.kind}`, item)
  }

  const renderList = (name, items) => (
    <div>
      <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
        {name}
      </h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              "flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md text-sm",
              item.id === activeLocation?.id
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
            )}
          >
            <img src={item.icon} className="w-4 h-4" alt={item.name} />
            <p className="font-medium">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="w-56 border-r p-3 space-y-6">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>

        <div className="flex-1 relative p-5">
          {activeLocation?.children?.map((item) => (
            <div
              key={item.id}
              onClick={() => openItem(item)}
              className={clsx(
                "absolute flex flex-col items-center cursor-pointer select-none",
                item.position
              )}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <p className="mt-2 text-sm text-center w-24 break-words">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder")

export default FinderWindow
