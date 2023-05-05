import { useState } from "react"
import Button from "./Button"
import Slider from "./Slider"
import { GoLinkExternal } from 'react-icons/go'

const ProjectBullet = ({ item }) => {
  const [activeCategory, setActiveCategory] = useState("about")
  const [activeImages, setActiveImages] = useState("images")

  const categoryButtons = [
    {
      id: 1,
      label: "About",
      category: "about",
    },
    {
      id: 2,
      label: "Challenges",
      category: "challenges",
    },
  ]

  const imagesButtons = [
    {
      id: 1,
      label: "Screenshots",
      images: "images"
    },
    {
      id: 2,
      label: "Code Snippets",
      images: "codeSnippets"
    }
  ]

  const handleClick = (newCategory) => {
    if (activeCategory !== newCategory) setActiveCategory(newCategory)
  }

  const renderedCategoryButtons = categoryButtons.map((item) => {
    return (
      <Button
        selected={activeCategory === item.category}
        disabled={activeCategory === item.category}
        outline={activeCategory !== item.category}
        onClick={() => handleClick(item.category)}
        key={item.id}
      >
        {item.label}
      </Button>
    )
  })

  const handleImagesClick = (newImages) => {
    if (activeImages !== newImages) setActiveImages(newImages)
  }

  const renderedImagesButtons = imagesButtons.map((item) => {
    return (
      <Button
      selected={activeImages === item.images}
      disabled={activeImages === item.images}
      outline={activeImages !== item.images}
      onClick={() => handleImagesClick(item.images)}
      key={item.id}
    >
      {item.label}
    </Button>
    )
  })

  return (
    <article className="my-20">
      <div className="flex flex-col items-start lg:flex-row gap-8 justify-start">
        {/* Text */}
        <div className="flex flex-col gap-4 basis-2/5">
          <div className="w-full">
            <h3 className="md:text-2xl">{item.title}</h3>
            <p>
              <span className="text-primary-500 mr-1 font-semibold">
                Tech Stack:
              </span>
              {item.techStack}
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
            {renderedCategoryButtons}
            <Button outline>Github<GoLinkExternal /></Button>
            <Button outline>Demo<GoLinkExternal /></Button>
          </div>
          <div className="whitespace-pre-line">
            {item[activeCategory]}
          </div>
        </div>
        {/* Slider */}
        <div className="basis-3/5 w-full flex flex-col gap-4">
          <div className="flex items-center justify-start lg:justify-center gap-2">
          {renderedImagesButtons}
          </div>

          <Slider items={item[activeImages]} />
        </div>
      </div>
    </article>
  )
}

export default ProjectBullet
