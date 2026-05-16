import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import './SGLContentCardSkeleton.css'
import { SGLSkeleton } from './SGLSkeleton'

interface SGLContentCardSkeletonProps {
  color?: string
  avatarSrc?: string


  title?: string
  subtitle?: string
  buttonText?: string

  imageSrc?: string
  imageDescription?: string

  imageHeight?: number

  showAvatar?: boolean
  showButton?: boolean
  showImage?: boolean
}

export const SGLContentCardSkeleton = ({
  color = '#8F3DFF',
  avatarSrc = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',

  title = 'Loading title',
  subtitle = 'Loading subtitle',
  buttonText = 'Loading button',

  imageSrc = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  imageDescription = 'Image description',

  imageHeight = 180,

  showAvatar = true,
  showButton = true,
  showImage = true,
}: SGLContentCardSkeletonProps) => {
  return (
    <Box className="sgl-card-container" >
      {/* Header */}
    <Box className="sgl-header">  
       {showAvatar && (
          <Box className="sgl-avatar-wrapper" >
            <SGLSkeleton
              variant="circular"
              width={40}
              height={40}
              skeletonColor={color}
            />

            {avatarSrc && (
              <Box
                component="img"
                src={avatarSrc}
                alt="avatar"
                className="sgl-avatar-image"
              />
            )}
          </Box>
        )}

        <Box className= "sgl-text-content">
          {/* Title */}
          <Box className= "sgl-text-wrapper">
            <SGLSkeleton
              skeletonColor={color}
              width={title.length * 12}
              height={58}
              radius={2}
            />

            <Typography
              className= "sgl-overlay-text"
            >
              {title}
            </Typography>
          </Box>

          {/* Subtitle */}
          <Box className="sgl-text-wrapper sgl-subtitle-wrapper">
            <SGLSkeleton
              skeletonColor={color}
              opacity={0.5}
              width={subtitle.length * 9}
              height={40}
              radius={2}
            />

            <Typography
              variant="body2"
              className="sgl-overlay-text"
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Image */}
      {showImage && (
        <Box
          className="sgl-image-section"
        >
          <Box
            className="sgl-image-wrapper"
          >
            <SGLSkeleton
              variant="rounded"
              width="100%"
              height={imageHeight}
              radius={4}
              skeletonColor={color}
            />

            {imageSrc && (
              <Box
                component="img"
                src={imageSrc}
                alt="card-image"
                className="sgl-image"
              />
            )}
          </Box>

          {/* Image Description */}
          <Box
            className="image-description-wrapper"
          >
            <Box className="image-description-background" sx={{ backgroundColor: color }} />

            <Typography
               className="image-description"
            >
              {imageDescription}
            </Typography>
          </Box>
        </Box>
      )}
      

      {/* Button */}
      {showButton && (
        <Box
          className="sgl-button-wrapper"
        >
          <SGLSkeleton
            variant="rounded"
            radius={999}
            skeletonColor={color}
            width={buttonText.length * 12 + 40}
            height={40}
          />

          <Typography
           className="sgl-button-text"
          >
            {buttonText}
          </Typography>
        </Box>
      )}
    </Box>
  )
}