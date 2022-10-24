export const scrollInToView = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export const HeadDecorationLeft = () => {
  return (
    <div className="w-full flex flex-row items-center">
      <div className="w-[4px] h-[4px] rounded-full bg-white" />
      <div className="flex-grow w-auto h-[1px] bg-white" />
    </div>
  )
}

export const HeadDecorationRight = () => {
  return (
    <div className="w-full flex flex-row items-center">
      <div className="flex-grow w-auto h-[1px] bg-white" />
      <div className="w-[4px] h-[4px] rounded-full bg-white" />
    </div>
  )
}