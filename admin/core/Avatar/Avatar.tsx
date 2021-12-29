import { useState, useEffect, forwardRef, Ref } from "react"
import { S_Avatar } from "./avatar.styled"
import { AvatarProps } from "./avatar.types"

const Avatar = forwardRef((props: AvatarProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { name, src } = props

  const isDeviceConnected = () => (typeof window !== "undefined" ? navigator.onLine : false)

  const [isConnected, setIsConnected] = useState<boolean>(isDeviceConnected())

  // render name when device is offline

  useEffect(() => {
    function showImage() {
      setIsConnected(false)
    }

    window.addEventListener("offline", showImage)

    return () => window.removeEventListener("offline", showImage)
  }, [])

  // render avatar image when device is online

  useEffect(() => {
    function showImage() {
      setIsConnected(true)
    }

    window.addEventListener("online", showImage)

    return () => window.removeEventListener("online", showImage)
  }, [])

  return (
    <S_Avatar size="xl" {...props} ref={ref}>
      {/* render image only if the device is connected & src is provided */}
      {src && isConnected ? <img src={src} className="avatarStyled__img" /> : <span> {name && name!.slice(0, 2).toUpperCase()} </span>}
    </S_Avatar>
  )
})

export default Avatar

Avatar.displayName = "Avatar"
