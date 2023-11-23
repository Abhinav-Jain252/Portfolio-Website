import React from 'react'

const ProjectTag = ({name,onClick,isSelected}) => {
  
    const buttonStyle = isSelected ? "text-white border-primary-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
  
    return (
    <button className={`${buttonStyle} rounded-full border-2 px-4 py-1 lg:px-6 lg:py-3 lg:text-xl pxcursor-pointer`} onClick={() => onClick(name)}>
        {name}
    </button>
  )
}

export default ProjectTag