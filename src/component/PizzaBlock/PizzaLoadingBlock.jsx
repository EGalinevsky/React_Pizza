import React from 'react'
import ContentLoader from "react-content-loader"

export const PizzaLoadingBlock = () => {
    return (
          <ContentLoader 
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="11" y="288" rx="6" ry="6" width="250" height="22" /> 
          <rect x="12" y="318" rx="12" ry="12" width="250" height="66" /> 
          <rect x="11" y="406" rx="9" ry="9" width="98" height="36" /> 
          <rect x="116" y="398" rx="27" ry="27" width="155" height="50" /> 
          <circle cx="135" cy="139" r="120" />
        </ContentLoader>
        )
}
